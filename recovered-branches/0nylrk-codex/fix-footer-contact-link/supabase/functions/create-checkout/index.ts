
import Stripe from "https://esm.sh/stripe@14.21.0";

const _corsHeaders = {_"Access-Control-Allow-Origin": "*", _"Access-Control-Allow-Headers": "authorization, _x-client-info, _apikey, _content-type"};

serve(_async (req) => {_if (req.method === "OPTIONS") {
    return new Response(null, _{ headers: corsHeaders});
  }

  const _supabaseClient = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? ""
  );

  // Create service client for writing to database
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
    
    if (!user?.email) throw new Error("User not authenticated");

    const _stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {_apiVersion: "2023-10-16"});

    // Check if customer exists
    const _customers = await stripe.customers.list({_email: user.email, _limit: 1});
    let customerId;
    if (customers.data.length > 0) {_customerId = customers.data[0].id;}

    // Determine product name and description based on the request
    const _productName = productType === "service" 
      ? "Service Payment" 
      : "Premium Subscription";
    
    const _productDescription = escrow 
      ? "Payment held in escrow until service completion" 
      : "Direct payment for services";

    // Create the session
    const _session = await stripe.checkout.sessions.create({_customer: customerId, _customer_email: customerId ? undefined : user.email, _line_items: [
        {
          price_data: {
            currency: currency, _product_data: { 
              name: productName, _description: productDescription},
            unit_amount: amount * 100, // Convert to cents
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
      status: 500});
  }
});
