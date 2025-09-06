

import {Resend} from "npm: resend@1.0.0";
const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers":

  role: string
}
serve(async (req: Request) => {
  // Handle CORS
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204
      headers: corsHeaders})
  }
  try {
    const supabase = createClient(
      supabaseUrl,
      supabaseServiceKey

      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400
          headers: { "Content-Type": "application/json", ...corsHeaders }}
      )
    }
    // Get user data
    const { data: userData, error: userError } = await supabase
      .from("profiles")
      .select("email, display_name")
      .eq("id", user_id)

      return new Response(
        JSON.stringify({ error: "User not found", details: userError }),
        {
          status: 404
          headers: { "Content-Type": "application/json", ...corsHeaders }}
      )
    }
    // Create message based on role and missing milestone
    const milestoneMessages = {
      talent: {

      html: `
        <div style="font-family: sans-serif, max-width: 600px, margin: 0 auto,">
          <h2>Hi ${name},</h2>
          <p>You're making great progress in setting up your ${role} profile on Zion AI Marketplace!</p>
          <p>Your next step is to <strong>${action}</strong>.</p>
          <p>This will help you get the most out of the platform and connect with the right opportunities.</p>
          <div style="margin: 30px 0,">
            <a href="https://zion.ai/dashboard" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px, font-weight: bold,">
              Continue my setup
            </Link>
          </div>
          <p>The Zion AI Marketplace Team</p>
        </div>

    if (emailError) {
      return new Response(
        JSON.stringify({ error: "Failed to send email", details: emailError }),
        {
          status: 500
          headers: { "Content-Type": "application/json", ...corsHeaders }}
      )
    }
    // Create notification in database
    const { data: notification, error: notificationError } = await supabase.rpc(
      "create_notification",
      {

    if (notificationError) {
      console.error("Failed to create notification:", notificationError)
    }
    return new Response(
      JSON.stringify({

      {
        status: 200
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    )
  } catch (error) {
    console.error(error),
    return new Response(
      JSON.stringify({ error: "Internal server error", details: error.message }),
      {
        status: 500
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    )

  }
});
