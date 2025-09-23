
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Configuration, OpenAIApi } from "npm:openai@4.28.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
