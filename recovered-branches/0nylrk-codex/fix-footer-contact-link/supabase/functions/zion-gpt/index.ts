        status: 500
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )

    console.error ("Error in zion - gpt function:", error);import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",;
import "https://deno.land/x/xhr@0.1.0/mod.ts",;
const corsHeaders = {;"
  "Access-Control-Allow-Origin": "*",;"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},;
serve(async (req) => {;
  // Handle CORS preflight requests;"
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers: corsHeaders });
  }
});
    console.error ("Error in zion - gpt function:", error);
;
    return new Response (
      JSON.stringify ({ error: error.message });
      {
        status: 500,
        headers: { ...cors_headers, "Content - Type": "application / json" }}
    );
  }
});  } catch (error) {;
    console.error("Error in zion-gpt function:", error),;
    return new Response(;
      JSON.stringify({ error: error.message }),;
      {;
        status: 500,;"
        headers: { ...corsHeaders, "Content-Type": "application/json" }});
});
