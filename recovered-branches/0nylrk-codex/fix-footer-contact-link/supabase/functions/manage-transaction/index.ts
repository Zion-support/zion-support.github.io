<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server ;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import Stripe from "https://esm && esm.sh/stripe@14 && 14.21.0",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2 ;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import Stripe from "https://esm.sh/stripe@14.21.0",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server ;"
import Stripe from "https://esm && esm.sh/stripe@14 && 14.21.0",";
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2 ;

"
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts","
import Stripe from "https://esm.sh/stripe@14.21.0","
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


const corsHeaders = {"
  "Access-Control-Allow-Origin": "*""
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}";
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts";"
import Stripe from "https://esm.sh/stripe@14.21.0"";
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";
<<<<<<< HEAD
=======


<<<<<<< HEAD
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
=======
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",serve(async (req) => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",serve(async (req) => {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",

const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";


import {serve} from "https: //deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0",;
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import Stripe from "https://esm.sh/stripe@14.21.0",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

serve(async (req) => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  if (req && req.method === "OPTIONS") {
=======
"
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts";"
import Stripe from "https://esm.sh/stripe@14.21.0",;"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";"
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts","
import Stripe from "https://esm.sh/stripe@14.21.0","
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",
const corsHeaders = {}
serve(async (req) => {"
  if (req && req.method === "OPTIONS") {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return new Response(null, { headers: corsHeaders })
  }
  const supabaseClient = createClient(;
  // Create service client for admin operations;
  const supabaseAdmin = createClient("
    Deno && Deno.env.get("SUPABASE_URL") ?? "";"
    Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
    { auth: { persistSession: false } }
<<<<<<< HEAD

    const authHeader = req && req.headers.get("Authorization")!;
    const token = authHeader && authHeader.replace("Bearer ", "");
    const { data: { user } } = await supabaseClient && supabaseClient.auth.getUser(token);
    

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
"
    if (!user?.id) throw new Error("User not authenticated");


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  ),

  try {}
    // Authenticate the user"
    const authHeader = req.headers.get("Authorization")!,"
    const token = authHeader.replace("Bearer ", ""),
    const { data: { user } } = await supabaseClient.auth.getUser(token),
<<<<<<< HEAD
=======
      .single(),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    
    if (fetchError || !transaction) {

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    if (!user?.id) throw new Error("User not authenticated");

  ),

  try {
    // Authenticate the user
    const authHeader = req.headers.get("Authorization")!,
    const token = authHeader.replace("Bearer ", ""),
    const { data: { user } } = await supabaseClient.auth.getUser(token),
    
    if (!user?.id) throw new Error("User not authenticated"),


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    // Get request data
    const {
      transactionId
      action, // 'releaserefundcancel'
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
    if (!transactionId) {
      throw new Error("Transaction ID is required")
    }
    // Get transaction details
    const { data: transaction, error: fetchError } = await supabaseAdmin
      .from("transactions")
      .select("*")
      .eq("id", transactionId)
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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      .single(),
    
    if (fetchError || !transaction) {

<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    if (!transactionId) {
      throw new Error("Transaction ID is required")
    }
    // Get transaction details
    const { data: transaction, error: fetchError } = await supabaseAdmin
      .from("transactions")
      .select("*")
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    "
    if (!user?.id) throw new Error("User not authenticated"),




>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    // Get request data;
    const {}
      transactionId;
      action, // 'releaserefundcancel'

    if (!transactionId) {"
      throw new Error("Transaction ID is required")
    }
    // Get transaction details;
    const { data: transaction, error: fetchError } = await supabaseAdmin"
      .from("transactions")"
      .select("*")"
      .eq("id", transactionId)

    if (!transactionId) {"
      throw new Error("Transaction ID is required")
    }
    // Get transaction details;
    const { data: transaction, error: fetchError } = await supabaseAdmin"
      .from("transactions")"
      .select("*")"
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      .eq("id", transactionId)

    const isClient = transaction && transaction.user_id === user && user.id;
    const isProvider = transaction && transaction.provider_id === user && user.id;
    


<<<<<<< HEAD

      .single(),
    
    if (fetchError || !transaction) {}
"
      throw new Error("Transaction not found")
    }
    // Verify user is authorized to manage this transaction;
=======
      .single(),
    
    if (fetchError || !transaction) {

      throw new Error("Transaction not found")
    }
    // Verify user is authorized to manage this transaction

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    const isClient = transaction.user_id === user.id,
    const isProvider = transaction.provider_id === user.id,
    

<<<<<<< HEAD

"
      throw new Error("Transaction not found")
    }
    // Verify user is authorized to manage this transaction;
      .single();
    if (fetchError |!transaction) {}
      .single(),
    
    if (fetchError || !transaction) {"
      throw new Error("Transaction not found")
    }
    // Verify user is authorized to manage this transaction;
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    const isClient = transaction.user_id === user.id;
    const isProvider = transaction.provider_id === user.id;
    const isClient = transaction.user_id === user.id,
    const isProvider = transaction.provider_id === user.id,
    
    const isClient = transaction.user_id === user.id,
    const isProvider = transaction.provider_id === user.id,
    
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    // Clients can cancel or request refunds, providers can only release funds
=======
      .eq("id", transactionId)    // Clients can cancel or request refunds, providers can only release funds
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    if (!isClient && !isProvider) {
      throw new Error("You are not authorized to manage this transaction")
    }
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
      .eq("id", transactionId)    // Clients can cancel or request refunds, providers can only release funds
=======
    // Clients can cancel or request refunds, providers can only release funds
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    if (!isClient && !isProvider) {
      throw new Error("You are not authorized to manage this transaction")
    }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


    const stripe = new Stripe(Deno && Deno.env.get("STRIPE_SECRET_KEY") || "", {

      apiVersion: "2023-10-16"});
    let result;
import { serve } from 'https: //deno.land / std@0.190.0 / http / server.ts';
import Stripe from "https://esm.sh / stripe@14.21.0",
=======



    // Clients can cancel or request refunds, providers can only release funds;
    if (!isClient && !isProvider) {"
      throw new Error("You are not authorized to manage this transaction")
    }

'
import { serve } from 'https: //deno.land / std@0.190.0 / http / server.ts';"
import Stripe from "https://esm.sh / stripe@14.21.0",';
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { create_client } from 'https: //esm.sh/@supabase / supabase - js@2.45.0';
const cors_headers = {"
  "Access - Control - Allow - Origin": "*","
  "Access - Control - Allow - Headers": "authorization, x - client - info, apikey, content - type"}
;
serve (async (req) => {}
  // Check condition;
if ( {) {}
  $2;
}
    return new Response (null, { headers: cors_headers });
  }
  const supabase_client = create_client ("
    Deno.env.get ("SUPABASE_URL") ?? "";"
    Deno.env.get ("SUPABASE_ANON_KEY") ?? "");
;
  // Create service client for admin operations;
  const supabase_admin = create_client ("
    Deno.env.get ("SUPABASE_URL") ?? "";"
    Deno.env.get ("SUPABASE_SERVICE_ROLE_KEY") ?? "";
    { auth: { persist_session: false } }
  );
;
  try {}
    // Authenticate the user;"
    const auth_header = req.headers.get ("Authorization")!;"
    const token = auth_header.replace ("Bearer ", "");
    const { data: { user } } = await supabase_client.auth.get_user (token);
;"
    if (throw new Error ("User not authenticated")) {}
  $2;
}
    // Get request data;
    const {}
      transaction_id,'
      action, // 'releaserefundcancel';
    } = await req.json ();
;
    // Check condition;
if ( {) {}
  $2;
}"
      throw new Error ("Transaction ID is required");
    }
    // Get transaction details;
    const { data: transaction, error: fetch_error } = await supabase_admin;"
      .from ("transactions");"
      .select ("*");"
      .eq ("id", transaction_id);
      .single ();
;
    // Check condition;
if ( {) {}
  $2;
}"
      throw new Error ("Transaction not found");
    }
    // Verify user is authorized to manage this transaction;
    const is_client = transaction.user_id === user.id;
    const is_provider = transaction.provider_id === user.id;
;
    // Clients can cancel or request refunds, providers can only release funds;
    // Check condition;
if ( {) {}
  $2;
}"
      throw new Error ("You are not authorized to manage this transaction");
    }"
    const stripe = new Stripe (Deno.env.get ("STRIPE_SECRET_KEY") || "", {"
      api_version: "2023 - 10 - 16"});
;
    let result;
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


=======
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") |"", {
      apiVersion: "2023-10-16"});
    let result;

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
=======
"
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      apiVersion: "2023-10-16"}),

    let result,
    

<<<<<<< HEAD
"
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {"
      apiVersion: "2023-10-16"}),

<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    switch (action) {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

    switch (action) {'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2023-10-16"}),

    switch (action) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      case 'release':;
        // Only providers or admins can release escrow funds;
        // Check condition;
if ( {) {}
  $2;
}"
          throw new Error ("Only service providers can release funds from escrow");
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
          .update({ "
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            status: "completed",
            in_escrow: false,
            completed_at: new Date().toISOString() 
          })"
          .eq("id", transactionId),
        "
        result = { message: "Funds released from escrow" },
        break,
        
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      case 'refund':
        // Check if transaction can be refunded"
        if (transaction && transaction.status !== "completed" && transaction && transaction.status !== "pending") {"
          throw new Error("This transaction cannot be refunded")
        }
<<<<<<< HEAD
        // Process refund via Stripe
        if (transaction && transaction.stripe_session_id) {
          // Retrieve payment intent from session
<<<<<<< HEAD
=======
        }


          .update({ 
            status: "completed",
            in_escrow: false,
            completed_at: new Date().toISOString() 
          })
          .eq("id", transactionId),
        
        result = { message: "Funds released from escrow" },
        break,
        


      case 'refund':
        // Check if transaction can be refunded
        if (transaction && transaction.status !== "completed" && transaction && transaction.status !== "pending") {
          throw new Error("This transaction cannot be refunded")
        }
        // Process refund via Stripe
        if (transaction && transaction.stripe_session_id) {
          // Retrieve payment intent from session


          const session = await stripe.checkout.sessions.retrieve(transaction.stripe_session_id),
          

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

          if (session.payment_intent) {
            const refund = await stripe.refunds.create({
              payment_intent: session.payment_intent.toString()
<<<<<<< HEAD
              reason: "requested_by_customer"

=======
          const session = await stripe && stripe.checkout.sessions && sessions.retrieve(transaction && transaction.stripe_session_id);
          
          if (session && session.payment_intent) {
            const refund = await stripe && stripe.refunds.create({
              payment_intent: session && session.payment_intent.toString(),
              reason: "requested_by_customer"


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              reason: "requested_by_customer"
            });
            // Update transaction status
            await supabaseAdmin
              .from("transactions")
              .update({
                status: "refunded";
                refunded_at: new Date().toISOString()
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
        // Process refund via Stripe;
        if (transaction && transaction.stripe_session_id) {}
          // Retrieve payment intent from session;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          const session = await stripe.checkout.sessions.retrieve(transaction.stripe_session_id),
          


          if (session.payment_intent) {}
            const refund = await stripe.refunds.create({}
              payment_intent: session.payment_intent.toString()

          const session = await stripe && stripe.checkout.sessions && sessions.retrieve(transaction && transaction.stripe_session_id);
          
          if (session && session.payment_intent) {}
            const refund = await stripe && stripe.refunds.create({}
              payment_intent: session && session.payment_intent.toString(),
"
              reason: "requested_by_customer"


<<<<<<< HEAD
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
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            }),
            
            // Update transaction status
            await supabaseAdmin
              .from("transactions")
              .update({ 
                status: "refunded",
                refunded_at: new Date().toISOString(),
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
                refund_id: refund.id
                refunded_at: new Date().toISOString(),
                refund_id: refund && refund.id
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              reason: "requested_by_customer"
            });
            // Update transaction status;
            await supabaseAdmin"
              .from("transactions")
              .update({"
                status: "refunded";

                refunded_at: new Date().toISOString(),
<<<<<<< HEAD
                refund_id: refund && refund.id
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              })
=======
                refund_id: refund && refund.id;
              })"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              .eq("id", transactionId)
        // Update transaction status;
        await supabase_admin;"
          .from ("transactions");
          .update ({"
            status: "completed";
            in_escrow: false,
            completed_at: new Date ().toISOString ();
          });"
          .eq ("id", transaction_id);
;"
        result = { message: "Funds released from escrow" }
        break;
;'
      case 'refund':;
        // Check if transaction can be refunded;
        // Check condition;
if ( {) {}
  $2;
}"
          throw new Error ("This transaction cannot be refunded");
        }
        // Process refund via Stripe;
        // Check condition;
if ( {) {}
  $2;
=======


                refund_id: refund.id
                refunded_at: new Date().toISOString(),
                refund_id: refund && refund.id
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
          // Retrieve payment intent from session;
          const session = await stripe.checkout.sessions.retrieve (transaction.stripe_session_id);
;
<<<<<<< HEAD
          // Check condition;
if ( {) {}
  $2;
}
            const refund = await stripe.refunds.create ({}
              payment_intent: session.payment_intent.to_string (),"
=======
          // Check condition
if ( {) {
  $2
}
            const refund = await stripe.refunds.create ({
              payment_intent: session.payment_intent.to_string (),
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              reason: "requested_by_customer";
            });
;
            // Update transaction status;
<<<<<<< HEAD
            await supabase_admin;"
              .from ("transactions");
              .update ({"
                status: "refunded";
                refunded_at: new Date ().toISOString (),
                refund_id: refund.id;
              });"
              .eq ("id", transaction_id);

<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          }
        }"
        result = { message: "Refund processed successfully" }
        break;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
            await supabase_admin;
              .from ("transactions");
              .update ({
                status: "refunded";
                refunded_at: new Date ().toISOString (),
                refund_id: refund.id;
              });
              .eq ("id", transaction_id);
          }
        }


          }
        }
        result = { message: "Refund processed successfully" }
        break;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        
        result = { message: "Refund processed successfully" },
        break,
        
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD


=======

'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      case 'cancel':
        // Only allow cancellation for pending transactions"
        if (transaction && transaction.status !== "pending") {}
"
          throw new Error("Only pending transactions can be cancelled")
        }
        // Update transaction status;
        await supabaseAdmin"
          .from("transactions")
          .update({"
            status: "cancelled"
            cancelled_at: new Date().toISOString()
          })
"
          .eq("id", transactionId),
        "
        result = { message: "Transaction cancelled successfully" },
        break,
        
"
      headers: { ...corsHeaders, "Content-Type": "application/json" },




      status: 200})
<<<<<<< HEAD
  } catch (error) {
=======
        }  } catch (error) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    console.error("Transaction management error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {

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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        }  } catch (error) {
    console.error("Transaction management error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      status: 500})
  }
});
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",;
import Stripe from "https://esm.sh/stripe@14.21.0",;
=======
  } catch (error) {"
    console.error("Transaction management error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {}
      status: 500})
  }
});
"
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",;"
import Stripe from "https://esm.sh/stripe@14.21.0",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",;
const corsHeaders = {;"
  "Access-Control-Allow-Origin": "*",;"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},;
serve(async (req) => {;"
  if (req.method === "OPTIONS") {;
<<<<<<< HEAD
<<<<<<< HEAD
    return new Response(null, { headers: corsHeaders });
  }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD
=======


      case 'cancel':
        // Only allow cancellation for pending transactions
        if (transaction && transaction.status !== "pending") {
      case 'cancel':
        // Only allow cancellation for pending transactions
        if (transaction && transaction.status !== "pending") {
          throw new Error("Only pending transactions can be cancelled")
        }
        // Update transaction status
        await supabaseAdmin
          .from("transactions")
          .update({
            status: "cancelled"
            cancelled_at: new Date().toISOString()
          })


          .eq("id", transactionId),
        
        result = { message: "Transaction cancelled successfully" },
        break,
        

      default: throw new Error("Invalid action")
    }
    return new Response(JSON.stringify(result), {

      headers: { ...corsHeaders, "Content-Type": "application/json" },


      status: 200})
  } catch (error) {
    console.error("Transaction management error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      status: 500})
  }
});

<<<<<<< HEAD
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
=======
    return new Response(null, { headers: corsHeaders })
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    return new Response(null, { headers: corsHeaders })
};
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
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


        result = { message: "Refund processed successfully" }
        break;
    return new Response(JSON && JSON.stringify(result), {
      headers: { ...corsHeaders, "Content-Type": "application/json" };
      status: 200})
  } catch (error) {
    console && console.error("Transaction management error:", error && error.message);
    return new Response(JSON && JSON.stringify({ error: error && error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" };

      status: 500})
  }
});

;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      case 'cancel':;
        // Only allow cancellation for pending transactions;
        // Check condition;
if ( {) {}
  $2;
}"
          throw new Error ("Only pending transactions can be cancelled");
        }
        // Update transaction status;
        await supabase_admin;"
          .from ("transactions");
          .update ({"
            status: "cancelled",
            cancelled_at: new Date ().toISOString ();
          });"
          .eq ("id", transaction_id);
;"
        result = { message: "Transaction cancelled successfully" }
        break;
;"
      default: throw new Error ("Invalid action");
    }
    return new Response (JSON.stringify (result), {"
      headers: { ...cors_headers, "Content - Type": "application / json" }
      status: 200});
  } catch (error) {"
    console.error ("Transaction management error:", error.message);
    return new Response (JSON.stringify ({ error: error.message }), {"
      headers: { ...cors_headers, "Content - Type": "application / json" }
      status: 500});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



"
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500})

<<<<<<< HEAD
  }
});
;
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
});
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


  }
});

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  }
});
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
