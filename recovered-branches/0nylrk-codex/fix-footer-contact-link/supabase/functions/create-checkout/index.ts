
<<<<<<< HEAD
<<<<<<< HEAD
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import Stripe from "https://esm.sh/stripe@14.21.0",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
=======
import Stripe from "https://esm.sh/stripe@14.21.0";

const _corsHeaders = {_"Access-Control-Allow-Origin": "*", _"Access-Control-Allow-Headers": "authorization, _x-client-info, _apikey, _content-type"};

serve(_async (req) => {_if (req.method === "OPTIONS") {
    return new Response(null, _{ headers: corsHeaders});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }

  const _supabaseClient = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? ""
  ),
=======
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  // Create service client for writing to database
<<<<<<< HEAD
  const supabaseAdmin = createClient(
    Deno.env.get(&quot;SUPABASE_URL&quot;) ?? "&quot;,
    Deno.env.get(&quot;SUPABASE_SERVICE_ROLE_KEY&quot;) ?? "&quot;,
    { auth: { persistSession: false } }
  ),

  try {
    // Retrieve the request body
    const requestData = await req.json(),
    const { 
      amount,
      serviceId = null,
      providerId = null,
      escrow = false,
      productType = &quot;service&quot;,
      currency = &quot;usd&quot;,
      successUrl,
      cancelUrl
    } = requestData,
    
    // Verify the amount is valid
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
<<<<<<< HEAD
      throw new Error("Invalid payment amount")
    }

    // Authenticate the user
    const authHeader = req.headers.get("Authorization")!,
    const token = authHeader.replace("Bearer ", ""),
    const { data: { user } } = await supabaseClient.auth.getUser(token),
=======
  const _supabaseAdmin = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    {_auth: { persistSession: false} }
  );

  try {_// Retrieve the request body
    const _requestData = await req.json();
    const { 
      amount, _serviceId = null, _providerId = null, _escrow = false, _productType = "service", _currency = "usd", _successUrl, _cancelUrl} = requestData;
    
    // Verify the amount is valid
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {_throw new Error("Invalid payment amount");}

    // Authenticate the user
    const _authHeader = req.headers.get("Authorization")!;
    const _token = authHeader.replace("Bearer ", "");
    const {_data: { user} } = await supabaseClient.auth.getUser(token);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    if (!user?.email) throw new Error("User not authenticated"),

<<<<<<< HEAD
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2023-10-16"}),
=======
      throw new Error(&quot;Invalid payment amount&quot;);
    }

    // Authenticate the user
    const authHeader = req.headers.get(&quot;Authorization&quot;)!;
    const token = authHeader.replace(&quot;Bearer &quot;, "&quot;);
    const { data: { user } } = await supabaseClient.auth.getUser(token);
    
    if (!user?.email) throw new Error(&quot;User not authenticated&quot;);

    const stripe = new Stripe(Deno.env.get(&quot;STRIPE_SECRET_KEY&quot;) || "&quot;, {
      apiVersion: &quot;2023-10-16&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

    // Check if customer exists
    const customers = await stripe.customers.list({ email: user.email, limit: 1 }),
    let customerId,
    if (customers.data.length > 0) {
      customerId = customers.data[0].id
    }

    // Determine product name and description based on the request
<<<<<<< HEAD
    const productName = productType === "service" 
=======
    const _stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {_apiVersion: "2023-10-16"});

    // Check if customer exists
    const _customers = await stripe.customers.list({_email: user.email, _limit: 1});
    let customerId;
    if (customers.data.length > 0) {_customerId = customers.data[0].id;}

    // Determine product name and description based on the request
    const _productName = productType === "service" 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      ? "Service Payment" 
      : "Premium Subscription",
    
    const _productDescription = escrow 
      ? "Payment held in escrow until service completion" 
      : "Direct payment for services",
=======
    const productName = productType === &quot;service&quot; 
      ? &quot;Service Payment&quot; 
      : &quot;Premium Subscription&quot;;
    
    const productDescription = escrow 
      ? &quot;Payment held in escrow until service completion&quot; 
      : &quot;Direct payment for services&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

    // Create the session
    const _session = await stripe.checkout.sessions.create({_customer: customerId, _customer_email: customerId ? undefined : user.email, _line_items: [
        {
          price_data: {
            currency: currency, _product_data: { 
              name: productName, _description: productDescription},
            unit_amount: amount * 100, // Convert to cents
<<<<<<< HEAD
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
    }),

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
      })
    }

    return new Response(JSON.stringify({ url: session.url }), {
<<<<<<< HEAD
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200})
  } catch (error) {
    console.error("Checkout error:", error.message),
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500})
=======
      headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; },
      status: 200});
  } catch (error) {
    console.error(&quot;Checkout error:&quot;, error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; },
=======
            ...(productType === "subscription" ? {_recurring: { interval: "month"} } : {})
          },
          quantity: 1}],
      mode: productType === "subscription" ? "subscription" : "payment",
      success_url: successUrl || `${_req.headers.get("origin")}/payment-success`,
      cancel_url: cancelUrl || `${_req.headers.get("origin")}/payment-canceled`,
      metadata: {_userId: user.id, _serviceId: serviceId, _providerId: providerId, _escrow: escrow.toString(), _productType: productType}
    });

    // Record transaction in database
    if (serviceId && providerId) {_await supabaseAdmin.from("transactions").insert({
        user_id: user.id, _provider_id: providerId, _service_id: serviceId, _stripe_session_id: session.id, _amount: amount, _currency: currency, _status: "pending", _in_escrow: escrow, _created_at: new Date().toISOString()});
    }

    return new Response(JSON.stringify({_url: session.url}), {_headers: { ...corsHeaders, _"Content-Type": "application/json"},
      status: 200});
  } catch (error) {_return new Response(JSON.stringify({ error: error.message}), {_headers: { ...corsHeaders, _"Content-Type": "application/json"},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      status: 500});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
}),
