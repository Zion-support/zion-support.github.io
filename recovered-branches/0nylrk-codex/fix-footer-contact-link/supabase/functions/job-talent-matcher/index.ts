
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { processJobMatching, storeMatchResults } from "./job-matching.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
