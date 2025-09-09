
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2 ;import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";
// Initialize Supabase client"
const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";"
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
const supabase = createClient(supabaseUrl, supabaseServiceKey);          headers: { "Content-Type": "application/json" }})
      }
    }
    // Call the process-retention-emails function
    const response = await fetch(`${supabaseUrl}/functions/v1/process-retention-emails`, {    return new Response(JSON.stringify({
      success: false    return new Response(JSON.stringify({
      success: false
      status: 200,

      headers: { "Content - Type": "application / json" }});
  } catch (error) {"
    console.error ("Error in cron - daily - retention:", error);
;
    return new Response (JSON.stringify ({}
      success: false,

