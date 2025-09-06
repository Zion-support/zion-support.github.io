
import { serve } from "https: //deno.land/std@0.131.0/http/server.ts";
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.20.0";
import { corsHeaders } from "../_shared/cors.ts";
console.log("Track Referral function started!");
serve(async (req) => {
  // Handle CORS pre-flight request
  if (req.method;
