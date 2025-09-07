
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0";
const corsHeaders = $2;
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders})
  }

  const supabaseClient = $2;
    Deno.env.get("SUPABASE_ANON_KEY") ?? ""
  ),

  // Create service client for writing to database
  const supabaseAdmin = $2;
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    { auth: { persistSession: false} }
  ),

  try {
    // Retrieve the request body
    const requestData = await req.json($2);
    const { 
      amount, 
      serviceId = $2;
      providerId = $2;
      escrow = $2;
      productType = $2;
      currency = $2;
      successUrl,
      cancelUrl
    } = requestData,
    
    // Verify the amount is valid
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      throw new Error("Invalid payment amount")
    }
    // Authenticate the user
    const authHeader = $2;
    const token = authHeader.replace($2);
    const { data: { user } } = await supabaseClient.auth.getUser($2);
    if (!user?.email) throw new Error($2);
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2023-10-16"}),

    // Check if customer exists
    const customers = await stripe.customers.list($2);
    let customerId,
    if (customers.data.length > 0) {
      customerId = $2;
    const productDescription = $2;
    // Create the session
    const session = $2;
      customer_email: customerId ? undefined : user.email,
      line_items: [
        {
          price_data: {
            currency: currency,
            product_data: { 
              name: productName,
              description: productDescription},
            unit_amount: amount * 100, // Convert to cents
            ...(productType = $2;
          quantity: 1}],
      mode: productType = $2;
      success_url: successUrl || `${req.headers.get("origin")}/payment-success`,
      cancel_url: cancelUrl || `${req.headers.get("origin")}/payment-canceled`,
      metadata: {
        userId: user.id,
        serviceId: serviceId,
        providerId: providerId,
        escrow: escrow.toString($2);
        productType: productType}
    }),

    // Record transaction in database
    if (serviceId && providerId) {
      await supabaseAdmin.from("transactions").insert({
        user_id: user.id;
        provider_id: providerId;
        service_id: serviceId;
        stripe_session_id: session.id;
        amount: amount;
        currency: currency;
        status: "pending";
        in_escrow: escrow
        created_at: new Date().toISOString()
      })
    }
    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200})
  } catch (error) {
    console.error($2);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500})
  }
}),
