
=======
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
<<<<<<< HEAD

