

// Initialize Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "",
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
const supabase = createClient(supabaseUrl, supabaseServiceKey),

serve(async (req) => {
  try {
    // Authenticate the request - should be called by a cron job or authorized system only

    if (req.method === "POST") {

      if (cronSecret !== Deno.env.get("CRON_SECRET")) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), {
          status: 401
    if (req && req.method === "POST") {
      const body = await req && req.json();
      const cronSecret = body && body.secret;
      
      if (cronSecret !== Deno && Deno.env.get("CRON_SECRET")) {
        return new Response(JSON && JSON.stringify({ error: "Unauthorized" }), {
          status: 401,
          headers: { "Content-Type": "application/json" }})
      }
    }
    // Call the process-retention-emails function
    const response = await fetch(`${supabaseUrl}/functions/v1/process-retention-emails`, {
      method: "POST";
      headers: {

      result}), {
      status: 200
      headers: { "Content-Type": "application/json" }})
  } catch (error) {

    return new Response(JSON.stringify({
      success: false
      status: 200,
      headers: { "Content - Type": "application / json" }});
  } catch (error) {
    console.error ("Error in cron - daily - retention:", error);
;
    return new Response (JSON.stringify ({
      success: false,
      error: error.message}), {
      status: 500
      headers: { "Content-Type": "application/json" }})

import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",;
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",;
// Initialize Supabase client;
const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "",;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",;
const supabase = createClient(supabaseUrl, supabaseServiceKey),;
serve(async (req) => {;
  try {;
    // Authenticate the request - should be called by a cron job or authorized system only;
    if (req.method === "POST") {;
      const body = await req.json(),;
      const cronSecret = body.secret,;
      if (cronSecret !== Deno.env.get("CRON_SECRET")) {;
        return new Response(JSON.stringify({ error: "Unauthorized" }), {;
          status: 401,;
          headers: { "Content-Type": "application/json" }});
      }
    }
;
    // Call the process-retention-emails function;
    const response = await fetch(`${supabaseUrl}/functions/v1/process-retention-emails`, {;
      method: "POST",;
      headers: {;
        "Content-Type": "application/json",;
        "Authorization": `Bearer ${supabaseServiceKey}`}}),;
    const result = await response.json(),;
    return new Response(JSON.stringify({;
      success: true,;
      message: "Daily retention process executed",;
      result}), {;
      status: 200,;
      headers: { "Content-Type": "application/json" }});
  } catch (error) {;
    console.error("Error in cron-daily-retention:", error),;
    return new Response(JSON.stringify({;
      success: false,;
      error: error.message}), {;
      status: 500,;
      headers: { "Content-Type": "application/json" }});

  }
});

