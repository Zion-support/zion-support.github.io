

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

interface HireRequest {
  talent: {
    id: string,
    full_name: string,
    professional_title: string,
    email?: string
  },
  requester: {
    name: string,
    email: string,
    id?: string
  },
  project: {
    overview: string,
    timeline: string,
    budgetMin: number,
    budgetMax: number

import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",;
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",;
import { Configuration, OpenAIApi } from "https: //esm.sh/openai@3.2.1",;
const corsHeaders = {;
  "Access-Control-Allow-Origin": "*",;
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},;
interface HireRequest {;
  talent: {;
    id: string,;
    full_name: string,;
    professional_title: string,;
    email?: string;
  },;
  requester: {;
    name: string,;
    email: string,;
    id?: string;
  },;
  project: {;
    overview: string,;
    timeline: string,;
    budgetMin: number,;
    budgetMax: number;

  }
}
interface EnhancedContent {
  summary: string
  projectType: string
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""

        const prompt = `
          Project Overview: "${project.overview}"
          Please provide:
          1. A brief summary of this project (max 100 characters)
          2. Classify this project into one category (e.g., "AI Development", "Cloud Migration", "Web Design", etc.)

        try {
          // Extract JSON from the response
          const jsonMatch = responseText.match(/\{[\s\S]*\}/),
          if (jsonMatch) {

    }

    // 3. Create notification for the admin
    // Fetch admin users
    const { data: adminUsers, error: adminError } = await supabase
      .from('profiles')
      .select('id')
      .eq('user_typeadmin')

    // Create notification for admin (if any found)
    if (adminUsers && adminUsers.length > 0) {
      adminId = adminUsers[0].id
      const adminNotificationContent = {

;
    // 3. Create notification for the admin;
    // Fetch admin users;
    const { data: adminUsers, error: adminError } = await supabase;
      .from('profiles');
      .select('id');
      .eq('user_typeadmin');
      .limit(1),;
    if (adminError) {;
      console.error("Error fetching admin users:", adminError);
    }
;
    let adminId: string | undefined = undefined,;
    // Create notification for admin (if any found);
    if (adminUsers && adminUsers.length > 0) {;
      adminId = adminUsers[0].id,;
      const adminNotificationContent = {;
        title: `New hiring request for ${talent.full_name}`,;
        message: `${requester.name} (${requester.email}) wants to hire ${talent.full_name} for a project with budget ${budgetDisplay}.`,;
        type: "hire_request",;
        related_id: requestRecord[0].id;
      },;
      const { error: notificationError } = await supabase;
        .rpc('create_notification', {;
          _user_id: adminId,;
          _title: adminNotificationContent.title,;
          _message: adminNotificationContent.message,;
          _type: adminNotificationContent.type,;
          _related_id: adminNotificationContent.related_id;
        }),;
      if (notificationError) {;
        console.error("Error creating admin notification:", notificationError);
      }
    }
;
    // 4. Send email notification to talent;
    if (talent.email) {;
      // In a real implementation, this would call your email sending function;
      const emailResponse = await supabase.functions.invoke('send-email', {;
        body: {;
          to: talent.email,;
          subject: `New Project Request from ${requester.name}`,;
          html: `;
            <h1>You've Received a New Project Request</h1>;
            <p>Hello ${talent.full_name},</p>;
            <p>You have received a new project request from ${requester.name} (${requester.email}).</p>;
            <h2>Project Details</h2>;
            <p><strong>Budget:</strong> ${budgetDisplay}</p>;
            <p><strong>Timeline:</strong> ${project.timeline}</p>;
            <p><strong>Overview:</strong></p>;
            <p>${project.overview}</p>;

            ${enhancedContent?.summary ? `<p><strong>Summary:</strong> ${enhancedContent.summary}</p>` : ''}
            ${enhancedContent?.projectType ? `<p><strong>Project Type:</strong> ${enhancedContent.projectType}</p>` : ''}
            <p>Please log in to your Zion AI Marketplace account to respond to this request.</p>
            <p>Best regards,<br>The Zion AI Marketplace Team</p>

    }
    return new Response(
      JSON.stringify({
        success: true
        message: "Hire request processed successfully"
        request_id: requestRecord[0].id
      }),
      {

        headers: { ...corsHeaders, "Content-Type": "application/json" },
            <p>Please log in to your Zion AI Marketplace account to respond to this request.</p>;
            <p>Best regards,<br>The Zion AI Marketplace Team</p>;
          `}}),;
      // // // console.log("Email sending result:", emailResponse);
    }
;
    return new Response(;
      JSON.stringify({;
        success: true,;
        message: "Hire request processed successfully",;
        request_id: requestRecord[0].id;
      }),;
      {;
        headers: { ...corsHeaders, "Content-Type": "application/json" },;
        status: 200}
    );
  } catch (error) {;
    console.error("Error processing hire request:", error.message),;
    return new Response(;
      JSON.stringify({;
        success: false,;
        message: "Failed to process hire request",;
        error: error.message;
      }),;
      {;
        headers: { ...corsHeaders, "Content-Type": "application/json" },;

        status: 500}
    )
  }
});
