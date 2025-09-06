<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server ;
import Stripe from "https://esm && esm.sh/stripe@14 && 14.21.0",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2 ;

<<<<<<< HEAD
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
=======


import {serve} from "https: //deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0",;
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";

=======
=======


import {serve} from "https: //deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import Stripe from "https://esm.sh/stripe@14.21.0",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";
<<<<<<< HEAD
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

import {serve} from "https: //deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0",;
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import Stripe from "https://esm.sh/stripe@14.21.0",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
const corsHeaders = {
<<<<<<< HEAD
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
serve(async (req) => {
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  const supabaseClient = createClient(
  // Create service client for admin operations
  const supabaseAdmin = createClient(
    Deno && Deno.env.get("SUPABASE_URL") ?? "";
    Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
    { auth: { persistSession: false } }
<<<<<<< HEAD

    const authHeader = req && req.headers.get("Authorization")!;
    const token = authHeader && authHeader.replace("Bearer ", "");
    const { data: { user } } = await supabaseClient && supabaseClient.auth.getUser(token);
    

<<<<<<< HEAD
=======
  );
  try {
    // Authenticate the user
    const authHeader = req && req.headers.get("Authorization")!;
    const token = authHeader && authHeader.replace("Bearer ", "");
    const { data: { user } } = await supabaseClient && supabaseClient.auth.getUser(token);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    if (!user?.id) throw new Error("User not authenticated");

<<<<<<< HEAD
=======
serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  const supabaseClient = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? ""
  );
  ),
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  // Create service client for admin operations
  const supabaseAdmin = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    { auth: { persistSession: false } }
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
  );
  try {
    // Authenticate the user
    const authHeader = req.headers.get("Authorization")!;
    const token = authHeader.replace("Bearer ", "");
    const { data: { user } } = await supabaseClient.auth.getUser(token);
    if (!user?.id) throw new Error("User not authenticated");
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  ),

  try {
    // Authenticate the user
    const authHeader = req.headers.get("Authorization")!,
    const token = authHeader.replace("Bearer ", ""),
    const { data: { user } } = await supabaseClient.auth.getUser(token),
    
    if (!user?.id) throw new Error("User not authenticated"),

<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    // Get request data
    const {
      transactionId
      action, // 'releaserefundcancel'
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

    } = await req && req.json();



    } = await req.json(),


    } = await req.json();
    } = await req.json(),

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    if (!transactionId) {
      throw new Error("Transaction ID is required")
    }
    // Get transaction details
    const { data: transaction, error: fetchError } = await supabaseAdmin
      .from("transactions")
      .select("*")
      .eq("id", transactionId)
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
    } = await req && req.json();
    if (!transactionId) {
      throw new Error("Transaction ID is required")

import { serve } from "https://deno.land/std@0.190.0/http/server.ts",;
import Stripe from "https://esm.sh/stripe@14.21.0",;
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0",;
;
const corsHeaders = {;
  "Access-Control-Allow-Origin":"*",;
  "Access-Control-Allow-Headers":"authorization, x-client-info, apikey, content-type"},;
;
serve(async (req) => {;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers:corsHeaders }),;
  }
;
  const supabaseClient = createClient(;
    Deno.env.get("SUPABASE_URL") ?? "",;
    Deno.env.get("SUPABASE_ANON_KEY") ?? "";
  ),;
  ;
  // Create service client for admin operations;
  const supabaseAdmin = createClient(;
    Deno.env.get("SUPABASE_URL") ?? "",;
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",;
    { auth:{ persistSession:false } }
  ),;
;
  try {;
    // Authenticate the user;
    const authHeader = req.headers.get("Authorization")!,;
    const token = authHeader.replace("Bearer ", ""),;
    const { data:{ user } } = await supabaseClient.auth.getUser(token),;
    ;
    if (!user?.id) throw new Error("User not authenticated"),;
;
    // Get request data;
    const { ;
      transactionId, ;
      action, // 'releaserefund', 'cancel';
    } = await req.json(),;
;
    if (!transactionId) {;
      throw new Error("Transaction ID is required"),;
    }
;
    // Get transaction details;
    const { data:transaction, error:fetchError } = await supabaseAdmin;
      .from("transactions");
      .select("*");
      .eq("id", transactionId);
      .single(),;
    ;
    if (fetchError || !transaction) {;
      throw new Error("Transaction not found"),;
    }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      .single(),
    
    if (fetchError || !transaction) {

<<<<<<< HEAD

=======

    } = await req.json(),


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    if (!transactionId) {
      throw new Error("Transaction ID is required")
    }
    // Get transaction details
    const { data: transaction, error: fetchError } = await supabaseAdmin
      .from("transactions")
      .select("*")
      .eq("id", transactionId)

    const isClient = transaction && transaction.user_id === user && user.id;
    const isProvider = transaction && transaction.provider_id === user && user.id;
    

=======

      .single(),
    
    if (fetchError || !transaction) {

      throw new Error("Transaction not found")
    }
    // Verify user is authorized to manage this transaction

    const isClient = transaction.user_id === user.id,
    const isProvider = transaction.provider_id === user.id,
    

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      throw new Error("Transaction not found")
    }
    // Verify user is authorized to manage this transaction

      .single();
    if (fetchError |!transaction) {
      .single(),
    
    if (fetchError || !transaction) {
      throw new Error("Transaction not found")
    }
    // Verify user is authorized to manage this transaction
    const isClient = transaction.user_id === user.id;
    const isProvider = transaction.provider_id === user.id;
    const isClient = transaction.user_id === user.id,
    const isProvider = transaction.provider_id === user.id,
    
    const isClient = transaction.user_id === user.id,
    const isProvider = transaction.provider_id === user.id,
    
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    // Clients can cancel or request refunds, providers can only release funds
    if (!isClient && !isProvider) {
      throw new Error("You are not authorized to manage this transaction")
    }
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

<<<<<<< HEAD

    const stripe = new Stripe(Deno && Deno.env.get("STRIPE_SECRET_KEY") || "", {

<<<<<<< HEAD
      apiVersion: "2023-10-16"});
    let result;
=======
=======
    const stripe = new Stripe(Deno && Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2023-10-16"});
    let result;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { serve } from 'https: //deno.land / std@0.190.0 / http / server.ts';
import Stripe from "https://esm.sh / stripe@14.21.0",
import { create_client } from 'https: //esm.sh/@supabase / supabase - js@2.45.0';
const cors_headers = {
  "Access - Control - Allow - Origin": "*",
  "Access - Control - Allow - Headers": "authorization, x - client - info, apikey, content - type"}
;
serve (async (req) => {
  // Check condition
if ( {) {
  $2
}
    return new Response (null, { headers: cors_headers });
  }
  const supabase_client = create_client (
    Deno.env.get ("SUPABASE_URL") ?? "";
    Deno.env.get ("SUPABASE_ANON_KEY") ?? "");
;
  // Create service client for admin operations;
  const supabase_admin = create_client (
    Deno.env.get ("SUPABASE_URL") ?? "";
    Deno.env.get ("SUPABASE_SERVICE_ROLE_KEY") ?? "";
    { auth: { persist_session: false } }
  );
;
  try {
    // Authenticate the user;
    const auth_header = req.headers.get ("Authorization")!;
    const token = auth_header.replace ("Bearer ", "");
    const { data: { user } } = await supabase_client.auth.get_user (token);
;
    if (throw new Error ("User not authenticated")) {
  $2
}
    // Get request data;
    const {
      transaction_id,
      action, // 'releaserefundcancel';
    } = await req.json ();
;
    // Check condition
if ( {) {
  $2
}
      throw new Error ("Transaction ID is required");
    }
    // Get transaction details;
    const { data: transaction, error: fetch_error } = await supabase_admin;
      .from ("transactions");
      .select ("*");
      .eq ("id", transaction_id);
      .single ();
;
    // Check condition
if ( {) {
  $2
}
      throw new Error ("Transaction not found");
    }
    // Verify user is authorized to manage this transaction;
    const is_client = transaction.user_id === user.id;
    const is_provider = transaction.provider_id === user.id;
;
    // Clients can cancel or request refunds, providers can only release funds;
    // Check condition
if ( {) {
  $2
}
      throw new Error ("You are not authorized to manage this transaction");
    }
    const stripe = new Stripe (Deno.env.get ("STRIPE_SECRET_KEY") || "", {
      api_version: "2023 - 10 - 16"});
;
    let result;
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


=======


    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") |"", {
      apiVersion: "2023-10-16"});
    let result;

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2023-10-16"}),

    let result,
    
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2023-10-16"}),

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    switch (action) {
      case 'release':;
        // Only providers or admins can release escrow funds;
        // Check condition
if ( {) {
  $2
}
          throw new Error ("Only service providers can release funds from escrow");
        }
<<<<<<< HEAD


<<<<<<< HEAD
=======
    switch (action) {
      case 'release':
        // Only providers or admins can release escrow funds
        if (!isProvider) {
          throw new Error("Only service providers can release funds from escrow")
        }
        // Update transaction status
        await supabaseAdmin
          .from("transactions")
<<<<<<< HEAD

=======
          .update({
            status: "completed";
            in_escrow: false
            completed_at: new Date().toISOString()
          })
          .eq("id", transactionId);
        result = { message: "Funds released from escrow" }
        break;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          .update({ 
            status: "completed",
            in_escrow: false,
            completed_at: new Date().toISOString() 
          })
          .eq("id", transactionId),
        
        result = { message: "Funds released from escrow" },
        break,
        
<<<<<<< HEAD


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      case 'refund':
        // Check if transaction can be refunded
        if (transaction && transaction.status !== "completed" && transaction && transaction.status !== "pending") {
          throw new Error("This transaction cannot be refunded")
        }
        // Process refund via Stripe
        if (transaction && transaction.stripe_session_id) {
          // Retrieve payment intent from session
<<<<<<< HEAD

          if (session.payment_intent) {
            const refund = await stripe.refunds.create({
              payment_intent: session.payment_intent.toString()
              reason: "requested_by_customer"

              reason: "requested_by_customer"
            });
            // Update transaction status
            await supabaseAdmin
              .from("transactions")
              .update({
                status: "refunded";
                refunded_at: new Date().toISOString()
=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

          const session = await stripe.checkout.sessions.retrieve(transaction.stripe_session_id),
          


          if (session.payment_intent) {
            const refund = await stripe.refunds.create({
              payment_intent: session.payment_intent.toString()
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          const session = await stripe && stripe.checkout.sessions && sessions.retrieve(transaction && transaction.stripe_session_id);
          
          if (session && session.payment_intent) {
            const refund = await stripe && stripe.refunds.create({
              payment_intent: session && session.payment_intent.toString(),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              reason: "requested_by_customer"


<<<<<<< HEAD
=======
      case 'refund':
        // Check if transaction can be refunded
        if (transaction.status !== "completed" && transaction.status !== "pending") {
          throw new Error("This transaction cannot be refunded")
        }
        // Process refund via Stripe
        if (transaction.stripe_session_id) {
          // Retrieve payment intent from session
          const session = await stripe.checkout.sessions.retrieve(transaction.stripe_session_id);
          const session = await stripe.checkout.sessions.retrieve(transaction.stripe_session_id),
          
          if (session.payment_intent) {
            const refund = await stripe.refunds.create({
              payment_intent: session.payment_intent.toString()
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            }),
            
            // Update transaction status
            await supabaseAdmin
              .from("transactions")
              .update({ 
                status: "refunded",
                refunded_at: new Date().toISOString(),
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
                refund_id: refund.id
                refunded_at: new Date().toISOString(),
                refund_id: refund && refund.id
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              reason: "requested_by_customer"
            });
            // Update transaction status
            await supabaseAdmin
              .from("transactions")
              .update({
                status: "refunded";
<<<<<<< HEAD
                refunded_at: new Date().toISOString()
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            }),
            
            // Update transaction status
            await supabaseAdmin
              .from("transactions")
<<<<<<< HEAD
              .update({ 
                status: "refunded",
                refunded_at: new Date().toISOString(),


                refund_id: refund.id
=======
=======
              .update({
                status: "refunded";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                refunded_at: new Date().toISOString(),
                refund_id: refund && refund.id
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              })
              .eq("id", transactionId)
        // Update transaction status;
        await supabase_admin;
          .from ("transactions");
          .update ({
            status: "completed";
            in_escrow: false,
            completed_at: new Date ().toISOString ();
          });
          .eq ("id", transaction_id);
;
        result = { message: "Funds released from escrow" }
        break;
;
      case 'refund':;
        // Check if transaction can be refunded;
        // Check condition
if ( {) {
  $2
}
          throw new Error ("This transaction cannot be refunded");
        }
        // Process refund via Stripe;
        // Check condition
if ( {) {
  $2
}
          // Retrieve payment intent from session;
          const session = await stripe.checkout.sessions.retrieve (transaction.stripe_session_id);
;
          // Check condition
if ( {) {
  $2
}
            const refund = await stripe.refunds.create ({
              payment_intent: session.payment_intent.to_string (),
              reason: "requested_by_customer";
            });
;
            // Update transaction status;
            await supabase_admin;
              .from ("transactions");
              .update ({
                status: "refunded";
                refunded_at: new Date ().toISOString (),
                refund_id: refund.id;
              });
              .eq ("id", transaction_id);
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          }
        }

<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
              .update({ 
                status: "refunded",
                refunded_at: new Date().toISOString(),
                refund_id: refund.id
              })
              .eq("id", transactionId)
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          }
        }
        result = { message: "Refund processed successfully" }
        break;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        
        result = { message: "Refund processed successfully" },
        break,
        
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD


      case 'cancel':
        // Only allow cancellation for pending transactions
        if (transaction && transaction.status !== "pending") {
=======
      case 'cancel':
        // Only allow cancellation for pending transactions
        if (transaction.status !== "pending") {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      case 'cancel':
        // Only allow cancellation for pending transactions
        if (transaction && transaction.status !== "pending") {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          throw new Error("Only pending transactions can be cancelled")
        }
        // Update transaction status
        await supabaseAdmin
          .from("transactions")
          .update({
            status: "cancelled"
            cancelled_at: new Date().toISOString()
          })
<<<<<<< HEAD

<<<<<<< HEAD

=======
          .eq("id", transactionId);
        result = { message: "Transaction cancelled successfully" }
        break;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          .eq("id", transactionId),
        
        result = { message: "Transaction cancelled successfully" },
        break,
        
<<<<<<< HEAD

      default: throw new Error("Invalid action")
    }
    return new Response(JSON.stringify(result), {

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      headers: { ...corsHeaders, "Content-Type": "application/json" },


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      status: 200})
  } catch (error) {
    console.error("Transaction management error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
<<<<<<< HEAD
<<<<<<< HEAD


=======
      default: throw new Error("Invalid action")
    }
    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, "Content-Type": "application/json" }
      headers: { ...corsHeaders, "Content-Type": "application/json" },
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      status: 200})
  } catch (error) {
    console.error("Transaction management error:", error.message),
    return new Response(JSON.stringify({ error: error.message }), {
<<<<<<< HEAD
<<<<<<< HEAD
=======
      headers: { ...corsHeaders, "Content-Type": "application/json" }
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      status: 500})
  }
});
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD


        result = { message: "Refund processed successfully" }
        break;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    return new Response(JSON && JSON.stringify(result), {
      headers: { ...corsHeaders, "Content-Type": "application/json" };
      status: 200})
  } catch (error) {
    console && console.error("Transaction management error:", error && error.message);
    return new Response(JSON && JSON.stringify({ error: error && error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" };
<<<<<<< HEAD

      status: 500})
  }
});

=======
=======
      status: 500})
  }
});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
      case 'cancel':;
        // Only allow cancellation for pending transactions;
        // Check condition
if ( {) {
  $2
}
          throw new Error ("Only pending transactions can be cancelled");
        }
        // Update transaction status;
        await supabase_admin;
          .from ("transactions");
          .update ({
            status: "cancelled",
            cancelled_at: new Date ().toISOString ();
          });
          .eq ("id", transaction_id);
;
        result = { message: "Transaction cancelled successfully" }
        break;
;
      default: throw new Error ("Invalid action");
    }
    return new Response (JSON.stringify (result), {
      headers: { ...cors_headers, "Content - Type": "application / json" }
      status: 200});
  } catch (error) {
    console.error ("Transaction management error:", error.message);
    return new Response (JSON.stringify ({ error: error.message }), {
      headers: { ...cors_headers, "Content - Type": "application / json" }
      status: 500});
<<<<<<< HEAD

  }
});
  }
});
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  }
});
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500})

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
});
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  }
});
;
    ;
    // Verify user is authorized to manage this transaction;
    const isClient = transaction.user_id === user.id,;
    const isProvider = transaction.provider_id === user.id,;
    ;
    // Clients can cancel or request refunds, providers can only release funds;
    if (!isClient && !isProvider) {;
      throw new Error("You are not authorized to manage this transaction"),;
    }
;
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {;
      apiVersion:"2023-10-16"}),;
;
    let result,;
    ;
;
  const supabaseClient = createClient(;
    Deno.env.get("SUPABASE_URL") ?? "",;
    Deno.env.get("SUPABASE_ANON_KEY") ?? "";
  ),;
  // Create service client for admin operations;
  const supabaseAdmin = createClient(;
    Deno.env.get("SUPABASE_URL") ?? "",;
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",;
    { auth: { persistSession: false } }
  ),;
  try {;
    // Authenticate the user;
    const authHeader = req.headers.get("Authorization")!,;
    const token = authHeader.replace("Bearer ", ""),;
    const { data: { user } } = await supabaseClient.auth.getUser(token),;
    if (!user?.id) throw new Error("User not authenticated"),;
    // Get request data;
    const {;
      transactionId,;
      action, // 'releaserefundcancel';
    } = await req.json(),;
    if (!transactionId) {;
      throw new Error("Transaction ID is required");
    }
;
    // Get transaction details;
    const { data: transaction, error: fetchError } = await supabaseAdmin;
      .from("transactions");
      .select("*");
      .eq("id", transactionId);
      .single(),;
    if (fetchError || !transaction) {;
      throw new Error("Transaction not found");
    }
;
    // Verify user is authorized to manage this transaction;
    const isClient = transaction.user_id === user.id,;
    const isProvider = transaction.provider_id === user.id,;
    // Clients can cancel or request refunds, providers can only release funds;
    if (!isClient && !isProvider) {;
      throw new Error("You are not authorized to manage this transaction");
    }
;
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {;
      apiVersion: "2023-10-16"}),;
    let result,;
    switch (action) {;
      case 'release':;
        // Only providers or admins can release escrow funds;
        if (!isProvider) {;
          throw new Error("Only service providers can release funds from escrow");
        }
;
        // Update transaction status;
        await supabaseAdmin;
          .from("transactions");
          .update({;
            status: "completed",;
            in_escrow: false,;
            completed_at: new Date().toISOString();
          });
          .eq("id", transactionId),;
        result = { message: "Funds released from escrow" },;
        break,;
      case 'refund':;
        // Check if transaction can be refunded;
        if (transaction.status !== "completed" && transaction.status !== "pending") {;
          throw new Error("This transaction cannot be refunded");
        }
;
        // Process refund via Stripe;
        if (transaction.stripe_session_id) {;
          // Retrieve payment intent from session;
          const session = await stripe.checkout.sessions.retrieve(transaction.stripe_session_id),;
          if (session.payment_intent) {;
            const refund = await stripe.refunds.create({;
              payment_intent: session.payment_intent.toString(),;
              reason: "requested_by_customer";
            }),;
            // Update transaction status;
            await supabaseAdmin;
              .from("transactions");
              .update({;
                status: "refunded",;
                refunded_at: new Date().toISOString(),;
                refund_id: refund.id;
              });
              .eq("id", transactionId);
          }
        }
;
        result = { message: "Refund processed successfully" },;
        break,;
      case 'cancel':;
        // Only allow cancellation for pending transactions;
        if (transaction.status !== "pending") {;
          throw new Error("Only pending transactions can be cancelled");
        }
;
        // Update transaction status;
        await supabaseAdmin;
          .from("transactions");
          .update({;
            status: "cancelled",;
            cancelled_at: new Date().toISOString();
          });
          .eq("id", transactionId),;
        result = { message: "Transaction cancelled successfully" },;
        break,;
      default: throw new Error("Invalid action");
    }
;
    return new Response(JSON.stringify(result), {;
      headers: { ...corsHeaders, "Content-Type": "application/json" },;
      status: 200});
  } catch (error) {;
    console.error("Transaction management error:", error.message),;
    return new Response(JSON.stringify({ error: error.message }), {;
      headers: { ...corsHeaders, "Content-Type": "application/json" },;
      status: 500});
  }
});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
});
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
