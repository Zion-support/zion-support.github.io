
=======
import "https://deno.land/x/xhr@0.1.0/mod.ts",;
import { serve } from "https://deno.land/std@0.168.0/http/server.ts",;
import { createClient } from "https://esm.sh/@supabase/supabase-js@2",;
;
const corsHeaders = {;
  "Access-Control-Allow-Origin":"*",;
  "Access-Control-Allow-Headers":"authorization, x-client-info, apikey, content-type"},;
;
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers:corsHeaders }),;
  }
;
  try {;
    const { content, enhancementType, context } = await req.json(),;
    const openAiKey = Deno.env.get("OPENAI_API_KEY"),;
;
    if (!openAiKey) {;
      throw new Error("OPENAI_API_KEY is not defined"),;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    }
;
    if (!content) {;
      throw new Error("Content is required"),;
    }
<<<<<<< HEAD

