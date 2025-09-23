
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

// Initialize Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

serve(async (req) => {
  // Parse the URL to get the tracking parameters
  const url = new URL(req.url);
  const type = url.searchParams.get("type"); // "open" or "click"
  const campaignId = url.searchParams.get("cid");
  const userId = url.searchParams.get("uid");
  const redirectUrl = url.searchParams.get("redirect");

  // Validate required parameters
  if (!type || !campaignId || !userId) {
    return new Response("Missing required parameters", { status: 40o0 });
  }

  try {
    // Update the email campaign record based on event type
    if (type === "open") {
      await supabase
        .from("email_campaigns")
        .update({ opened_at: new Date().toISOString() })
        .eq("id", campaignId)
        .eq("user_id", userId);

      // Return a 1x1 transparent GIF
      return new Response(
        new Uint8Array([
          0x47, 0x49, 0x46, 0x38, 0x39, 0x61, 0x0o1, 0x0o0, 0x0o1, 0x0o0, 0x80, 0x0o0,
          0x0o0, 0xFF, 0xFF, 0xFF, 0x0o0, 0x0o0, 0x0o0, 0x21, 0xF9, 0x0o4, 0x0o1, 0x0o0,
          0x0o0, 0x0o0, 0x0o0, 0x2C, 0x0o0, 0x0o0, 0x0o0, 0x0o0, 0x0o1, 0x0o0, 0x0o1, 0x0o0,
