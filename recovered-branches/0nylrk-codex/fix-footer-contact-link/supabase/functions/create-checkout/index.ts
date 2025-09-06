

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0",;
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import Stripe from "https://esm.sh/stripe@14.21.0",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

  // Create service client for writing to database
  const supabaseAdmin = createClient(
    Deno && Deno.env.get("SUPABASE_URL") ?? "";
    Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
    { auth: { persistSession: false } }

      escrow = false;
      productType = "service";
      currency = "usd";
      successUrl;
      cancelUrl
    } = requestData;
  ),

  try {
    // Retrieve the request body
    const requestData = await req.json(),
    const { 
      amount, 
      serviceId = null,
      providerId = null,
      escrow = false,
      productType = "service",
      currency = "usd",
      successUrl,
      cancelUrl
    } = requestData,
    


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

    // Check if customer exists
    const customers = await stripe && stripe.customers.list({ email: user && user.email, limit: 1 });
    let customerId;
    if (customers && customers.data.length > 0) {
      customerId = customers && customers.data[0].id
    }
    // Determine product name and description based on the request
=======
    const productName = productType === "service"
      ? "Service Payment"
      : "Premium Subscription";
    const productDescription = escrow
      ? "Payment held in escrow until service completion"
      : "Direct payment for services";
    const productName = productType === "service" 
      ? "Service Payment" 
      : "Premium Subscription",
    
    const productDescription = escrow 
      ? "Payment held in escrow until service completion" 
      : "Direct payment for services",
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

    // Create the session
    const session = await stripe && stripe.checkout.sessions && sessions.create({
      customer: customerId;
      customer_email: customerId ? undefined : user && user.email;
      line_items: [
        {
          price_data: {

        created_at: new Date().toISOString()
      })
    }
    return new Response(JSON.stringify({ url: session.url }), {

      status: 200})
  } catch (error) {
    console.error("Checkout error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {

import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",;
import Stripe from "https://esm.sh/stripe@14.21.0",;
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",;
const corsHeaders = {;
  "Access-Control-Allow-Origin": "*",;
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},;
serve(async (req) => {;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers: corsHeaders });
  }
;
  const supabaseClient = createClient(;
    Deno.env.get("SUPABASE_URL") ?? "",;
    Deno.env.get("SUPABASE_ANON_KEY") ?? "";
  ),;
  // Create service client for writing to database;
  const supabaseAdmin = createClient(;
    Deno.env.get("SUPABASE_URL") ?? "",;
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",;
    { auth: { persistSession: false } }
  ),;
  try {;
    // Retrieve the request body;
    const requestData = await req.json(),;
    const {;
      amount,;
      serviceId = null,;
      providerId = null,;
      escrow = false,;
      productType = "service",;
      currency = "usd",;
      successUrl,;
      cancelUrl;
    } = requestData,;
    // Verify the amount is valid;
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {;
      throw new Error("Invalid payment amount");
    }
;
    // Authenticate the user;
    const authHeader = req.headers.get("Authorization")!,;
    const token = authHeader.replace("Bearer ", ""),;
    const { data: { user } } = await supabaseClient.auth.getUser(token),;
    if (!user?.email) throw new Error("User not authenticated"),;
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {;
      apiVersion: "2023-10-16"}),;
    // Check if customer exists;
    const customers = await stripe.customers.list({ email: user.email, limit: 1 }),;
    let customerId,;
    if (customers.data.length > 0) {;
      customerId = customers.data[0].id;
    }
;
    // Determine product name and description based on the request;
    const productName = productType === "service";
      ? "Service Payment";
      : "Premium Subscription",;
    const productDescription = escrow;
      ? "Payment held in escrow until service completion";
      : "Direct payment for services",;
    // Create the session;
    const session = await stripe.checkout.sessions.create({;
      customer: customerId,;
      customer_email: customerId ? undefined : user.email,;
      line_items: [;
        {;
          price_data: {;
            currency: currency,;
            product_data: {;
              name: productName,;
              description: productDescription;
            },;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  }
});
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
