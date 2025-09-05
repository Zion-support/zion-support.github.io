
import { serve } from &quot;https://deno.land/std@0.190.0/http/server.ts&quot;;
import Stripe from &quot;https://esm.sh/stripe@14.21.0&quot;;
import { createClient } from &quot;https://esm.sh/@supabase/supabase-js@2.45.0&quot;;

const corsHeaders = {
  &quot;Access-Control-Allow-Origin&quot;: &quot;*&quot;,
  &quot;Access-Control-Allow-Headers&quot;: &quot;authorization, x-client-info, apikey, content-type&quot;};

serve(async (req) => {
  if (req.method === &quot;OPTIONS&quot;) {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseClient = createClient(
    Deno.env.get(&quot;SUPABASE_URL&quot;) ?? "&quot;,
    Deno.env.get(&quot;SUPABASE_ANON_KEY&quot;) ?? "&quot;
  );

  // Create service client for writing to database
  const supabaseAdmin = createClient(
    Deno.env.get(&quot;SUPABASE_URL&quot;) ?? "&quot;,
    Deno.env.get(&quot;SUPABASE_SERVICE_ROLE_KEY&quot;) ?? "&quot;,
    { auth: { persistSession: false } }
  );

  try {
    // Retrieve the request body
    const requestData = await req.json();
    const { 
      amount, 
      serviceId = null,
      providerId = null,
      escrow = false,
      productType = &quot;service&quot;,
      currency = &quot;usd&quot;,
      successUrl,
      cancelUrl
    } = requestData;
    
    // Verify the amount is valid
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      throw new Error(&quot;Invalid payment amount&quot;);
    }

    // Authenticate the user
    const authHeader = req.headers.get(&quot;Authorization&quot;)!;
    const token = authHeader.replace(&quot;Bearer &quot;, "&quot;);
    const { data: { user } } = await supabaseClient.auth.getUser(token);
    
    if (!user?.email) throw new Error(&quot;User not authenticated&quot;);

    const stripe = new Stripe(Deno.env.get(&quot;STRIPE_SECRET_KEY&quot;) || "&quot;, {
      apiVersion: &quot;2023-10-16&quot;});

    // Check if customer exists
    const customers = await stripe.customers.list({ email: user.email, limit: 1 });
    let customerId;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
    }

    // Determine product name and description based on the request
    const productName = productType === &quot;service&quot; 
      ? &quot;Service Payment&quot; 
      : &quot;Premium Subscription&quot;;
    
    const productDescription = escrow 
      ? &quot;Payment held in escrow until service completion&quot; 
      : &quot;Direct payment for services&quot;;

    // Create the session
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : user.email,
      line_items: [
        {
          price_data: {
            currency: currency,
            product_data: { 
              name: productName,
              description: productDescription
            },
            unit_amount: amount * 100, // Convert to cents
            ...(productType === &quot;subscription&quot; ? { recurring: { interval: &quot;month&quot; } } : {})
          },
          quantity: 1}],
      mode: productType === &quot;subscription&quot; ? &quot;subscription&quot; : &quot;payment&quot;,
      success_url: successUrl || `${req.headers.get(&quot;origin&quot;)}/payment-success`,
      cancel_url: cancelUrl || `${req.headers.get(&quot;origin&quot;)}/payment-canceled`,
      metadata: {
        userId: user.id,
        serviceId: serviceId,
        providerId: providerId,
        escrow: escrow.toString(),
        productType: productType
      }
    });

    // Record transaction in database
    if (serviceId && providerId) {
      await supabaseAdmin.from(&quot;transactions&quot;).insert({
        user_id: user.id,
        provider_id: providerId,
        service_id: serviceId,
        stripe_session_id: session.id,
        amount: amount,
        currency: currency,
        status: &quot;pending&quot;,
        in_escrow: escrow,
        created_at: new Date().toISOString()
      });
    }

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; },
      status: 200});
  } catch (error) {
    console.error(&quot;Checkout error:&quot;, error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; },
      status: 500});
  }
});
