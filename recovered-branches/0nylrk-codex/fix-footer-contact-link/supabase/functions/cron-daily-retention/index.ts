
<<<<<<< HEAD
import { serve } from "https://deno.land/std@0.190.0/http/server.ts",;
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0",;
;
// Initialize Supabase client;
const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "",;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",;
const supabase = createClient(supabaseUrl, supabaseServiceKey),;
;
serve(async (req) => {;
  try {;
    // Authenticate the request - should be called by a cron job or authorized system only;
    if (req.method === "POST") {;
      const body = await req.json(),;
      const cronSecret = body.secret,;
      ;
      if (cronSecret !== Deno.env.get("CRON_SECRET")) {;
        return new Response(JSON.stringify({ error:"Unauthorized" }), {;
          status:401,;
          headers:{ "Content-Type":"application/json" }}),;
      }
    }
    ;
    // Call the process-retention-emails function;
    const response = await fetch(`${supabaseUrl}/functions/v1/process-retention-emails`, {;
      method:"POST",;
      headers:{;
        "Content-Type":"application/json",;
        "Authorization":`Bearer ${supabaseServiceKey}`}}),;
;
    const result = await response.json(),;
;
    return new Response(JSON.stringify({;
      success:true,;
      message:"Daily retention process executed",;
      result}), {;
      status:200,;
      headers:{ "Content-Type":"application/json" }}),;
  } catch (error) {;
    console.error("Error in cron-daily-retention:", error),;
;
    return new Response(JSON.stringify({;
      success:false,;
      error:error.message}), {;
      status:500,;
      headers:{ "Content-Type":"application/json" }}),;
=======
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",
// Initialize Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "",
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
const supabase = createClient(supabaseUrl, supabaseServiceKey),
// Initialize Supabase client
const _supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
const _supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const _supabase = createClient(supabaseUrl, supabaseServiceKey);

serve(_async (req) => {_try {
    // Authenticate the request - should be called by a cron job or authorized system only
    if (req.method === "POST") {
      const body = await req.json(),
      const cronSecret = body.secret,      
      if (cronSecret !== Deno.env.get(&quot;CRON_SECRET&quot;)) {
        return new Response(JSON.stringify({ error: &quot;Unauthorized&quot; }), {
          status: 401,
          headers: { "Content-Type": "application/json" }})      const _body = await req.json();
      const _cronSecret = body.secret;
      
      if (cronSecret !== Deno.env.get("CRON_SECRET")) {
        return new Response(JSON.stringify({ error: "Unauthorized"}), {_status: 401, _headers: { "Content-Type": "application/json"}});
      }
    }
    
    // Call the process-retention-emails function
    const response = await fetch(`${supabaseUrl}/functions/v1/process-retention-emails`, {
      method: &quot;POST&quot;,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${supabaseServiceKey}`}}),
    const result = await response.json(),

    return new Response(JSON.stringify({
      success: true,
      message: &quot;Daily retention process executed&quot;,
      result}), {
      status: 200,
      headers: { "Content-Type": "application/json" }})
  } catch (error) {
    console.error("Error in cron-daily-retention:", error),
    return new Response(JSON.stringify({
      success: false,
      error: error.message}) {
      status: 500,
      headers: { "Content-Type": "application/json" }})    const _response = await fetch(_`${_supabaseUrl}/functions/v1/process-retention-emails`, _{_method: "POST", _headers: {
        "Content-Type": "application/json", _"Authorization": `Bearer ${supabaseServiceKey}`}});

    const _result = await response.json();

    return new Response(JSON.stringify({_success: true, _message: "Daily retention process executed", _result}), {_status: 200, _headers: { "Content-Type": "application/json"}});
  } catch (error) {_return new Response(JSON.stringify({
      success: false, _error: error.message}), {_status: 500, _headers: { "Content-Type": "application/json"}});
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
  }
}),;
