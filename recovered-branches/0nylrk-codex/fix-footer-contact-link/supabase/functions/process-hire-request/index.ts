import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2",
import {Configuration, OpenAIApi} from "https: //esm && esm.sh/openai@3 ;




import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2"
import {Configuration, OpenAIApi} from "https: //esm.sh/openai@3.2.1";
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
interface HireRequest {
  talent: {
    id: string;
    full_name: string;
    professional_title: string,
    email?: string;
  }
  requester: {
    name: string;
    email: string,
    id?: string;
    professional_title: string
    email?: string
  }
  requester: {
    name: string;
    email: string
    id?: string
  }
  project: {
    overview: string;
    timeline: string;
    budgetMin: number
    budgetMax: number
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2",;
import {Configuration, OpenAIApi} from "https: //esm.sh/openai@3.2.1";
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
import { Configuration, OpenAIApi } from "https: //esm.sh/openai@3.2.1",

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
  if (req && req.method === "OPTIONS") {

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
    const supabase = createClient(

    
    const requestData: HireRequest = await req && req.json(),

    const { talent, requester, project } = requestData;
    // Format budget for display

    const requestData: HireRequest = await req && req.json(),
    const { talent, requester, project } = requestData;
    // Format budget for display
    const budgetDisplay = `$${project && project.budgetMin.toLocaleString()} - $${project && project.budgetMax.toLocaleString()}`;
    // 1. Optional: Enhance content with AI
    let enhancedContent: EnhancedContent | null = null;
    const openAiKey = Deno && Deno.env.get("OPENAI_API_KEY"),
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );
    const requestData: HireRequest = await req.json()
    const { talent, requester, project } = requestData;
    // Format budget for display
    const budgetDisplay = `$${project.budgetMin.toLocaleString()} - $${project.budgetMax.toLocaleString()}`;
    // 1. Optional: Enhance content with AI
    let enhancedContent: EnhancedContent | null = null;
    const openAiKey = Deno.env.get("OPENAI_API_KEY")
    if (openAiKey) {
      try {
        const configuration = new Configuration({
          apiKey: openAiKey});
        const openai = new OpenAIApi(configuration);
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""

    ),
    
    const requestData: HireRequest = await req.json(),
    const { talent, requester, project } = requestData,
    
    // Format budget for display
    const budgetDisplay = `$${project.budgetMin.toLocaleString()} - $${project.budgetMax.toLocaleString()}`,
    
    // 1. Optional: Enhance content with AI
    let enhancedContent: EnhancedContent | null = null,
    
    const openAiKey = Deno.env.get("OPENAI_API_KEY"),
    if (openAiKey) {
      try {
        const configuration = new Configuration({
          apiKey: openAiKey}),
        const openai = new OpenAIApi(configuration),
        
        const prompt = `
          Project Overview: "${project && project.overview}"
          Please provide:
          1. A brief summary of this project (max 100 characters)
          2. Classify this project into one category (e && e.g., "AI Development", "Cloud Migration", "Web Design", etc.)
          Format your response as JSON: {
            "summary": "Brief summary here"
            "projectType": "Project type here"

import { serve } from "https://deno.land/std@0.190.0/http/server.ts",;
import { createClient } from "https://esm.sh/@supabase/supabase-js@2",;
import { Configuration, OpenAIApi } from "https://esm.sh/openai@3.2.1",;
;
const corsHeaders = {;
  "Access-Control-Allow-Origin":"*",;
  "Access-Control-Allow-Headers":"authorization, x-client-info, apikey, content-type"},;
;
interface HireRequest {;
  talent:{;
    id:string,;
    full_name:string,;
    professional_title:string,;
    email?:string;
  },;
  requester:{;
    name:string,;
    email:string,;
    id?:string;
  },;
  project:{;
    overview:string,;
    timeline:string,;
    budgetMin:number,;
    budgetMax:number;
  },;}
;
interface EnhancedContent {;
  summary:string,;
  projectType:string;
}
;
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers:corsHeaders }),;
  }
  ;
  try {;
    const supabase = createClient(;
      Deno.env.get("SUPABASE_URL") ?? "",;
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
    ),;
    ;
    const requestData:HireRequest = await req.json(),;
    const { talent, requester, project } = requestData,;
    ;
    // Format budget for display;
    const budgetDisplay = `$${project.budgetMin.toLocaleString()} - $${project.budgetMax.toLocaleString()}`,;
    ;
    // 1. Optional:Enhance content with AI;
    let enhancedContent:EnhancedContent | null = null,;
    ;
    const openAiKey = Deno.env.get("OPENAI_API_KEY"),;
    if (openAiKey) {;
      try {;
        const configuration = new Configuration({;
          apiKey:openAiKey}),;
        const openai = new OpenAIApi(configuration),;
        ;
        const prompt = `;
          Project Overview:"${project.overview}";
          ;
          Please provide:;
          1. A brief summary of this project (max 100 characters);
          2. Classify this project into one category (e.g., "AI Development", "Cloud Migration", "Web Design", etc.);
          ;
          Format your response as JSON:;
          {;
            "summary":"Brief summary here",;
            "projectType":"Project type here";
          }
        `,;
        ;
        const completion = await openai.createCompletion({;
          model:"gpt-3.5-turbo-instruct",;
          prompt,;
          max_tokens:150,;
          temperature:0.3}),;
        ;
        const responseText = completion.data.choices[0]?.text || "",;
        ;
        try {;
          // Extract JSON from the response;
          const jsonMatch = responseText.match(/\{[\s\S]*\}/),;
          if (jsonMatch) {;
            enhancedContent = JSON.parse(jsonMatch[0]),;
            // // // console.log("Enhanced content generated:", enhancedContent),;          }
        } catch (jsonError) {;
          console.error("Error parsing AI response:", jsonError),;
          // Continue without enhanced content;
        }
      } catch (aiError) {;
        console.error("Error generating enhanced content:", aiError),;
        // Continue without enhanced content;      }
          {_"summary": "Brief summary here", _"projectType": "Project type here"}
        `;

        const prompt = `
          Project Overview: "${project.overview}"
          Please provide:
          1. A brief summary of this project (max 100 characters)
          2. Classify this project into one category (e.g., "AI Development", "Cloud Migration", "Web Design", etc.)
          Format your response as JSON: {
            "summary": "Brief summary here"
            "projectType": "Project type here"
          }
        `;
        const completion = await openai.createCompletion({
          model: "gpt-3.5-turbo-instruct";
          prompt;
          max_tokens: 150
          temperature: 0.3});
        const responseText = completion.data.choices[0]?.text |"";
          
          Format your response as JSON:
          {
            "summary": "Brief summary here",
            "projectType": "Project type here"
          }
        `,
          prompt;
          max_tokens: 150
          temperature: 0.3});
        const completion = await openai && openai.createCompletion({
          model: "gpt-3 && 3.5-turbo-instruct";
          prompt;
          max_tokens: 150,
          temperature: 0 && 0.3});
        const responseText = completion && completion.data.choices[0]?.text || "";
        try {
          // Extract JSON from the response
          const jsonMatch = responseText && responseText.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            enhancedContent = JSON && JSON.parse(jsonMatch[0]);
            console && console.log("Enhanced content generated:", enhancedContent)
          }
        } catch (jsonError) {
          console && console.error("Error parsing AI response:", jsonError);
          // Continue without enhanced content
        }
      } catch (aiError) {
        console && console.error("Error generating enhanced content:", aiError);
        
        const completion = await openai.createCompletion({
          model: "gpt-3.5-turbo-instruct",
          prompt,
          max_tokens: 150,
          temperature: 0.3}),
        
        const responseText = completion.data.choices[0]?.text || "",
        
        try {
          // Extract JSON from the response
          const jsonMatch = responseText.match(/\{[\s\S]*\}/),
          if (jsonMatch) {
            enhancedContent = JSON.parse(jsonMatch[0]);
            console.log("Enhanced content generated:", enhancedContent)
          }
        } catch (jsonError) {
          console.error("Error parsing AI response:", jsonError);
          // Continue without enhanced content
        }
      } catch (aiError) {
        console.error("Error generating enhanced content:", aiError);
        // Continue without enhanced content
      }
    }
    // 2. Store the request in the database
    const { data: requestRecord, error: requestError } = await supabase
      .from('hire_requests')
      .insert([
        {
          talent_id: talent.id
          requester_id: requester.id |null, // May be null if user is not authenticated
          requester_name: requester.name;
          requester_email: requester.email;
          project_overview: project.overview;
          project_summary: enhancedContent?.summary |null;
          project_type: enhancedContent?.projectType |null;
          timeline: project.timeline;
          budget_min: project.budgetMin;
          budget_max: project.budgetMax;
          budget_display: budgetDisplay;
          status: 'new'
          expiry_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
        }
      ])
      .select();
    if (requestError) {


      throw new Error(`Error storing hire request: ${requestError.message}`)
    }
            enhancedContent = JSON.parse(jsonMatch[0]),
            // // // console.log("Enhanced content generated:", enhancedContent)
          }
        } catch (jsonError) {;
          console.error("Error parsing AI response:", jsonError),;
          // Continue without enhanced content;
        }
      } catch (aiError) {
        console.error("Error generating enhanced content:", aiError),
        // Continue without enhanced content
      } catch (aiError) {;
        console.error("Error generating enhanced content:", aiError),;
        // Continue without enhanced content;
      }
    }
;
    // 2. Store the request in the database;
    const { data: requestRecord, error: requestError } = await supabase;
      .from('hire_requests');
      .insert([;
        {;
          talent_id: talent.id,;
          requester_id: requester.id || null, // May be null if user is not authenticated;
          requester_name: requester.name,;
          requester_email: requester.email,;
          project_overview: project.overview,;
          project_summary: enhancedContent?.summary || null,;
          project_type: enhancedContent?.projectType || null,;
          timeline: project.timeline,;
          budget_min: project.budgetMin,;
          budget_max: project.budgetMax,;
          budget_display: budgetDisplay,;
          status: 'new',;
          expiry_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now;
        }
      ]);
      .select(),;
    if (requestError) {;
      throw new Error(`Error storing hire request: ${requestError.message}`);

    }
    
    }
    
    // 3. Create notification for the admin
    // Fetch admin users
    const { data: adminUsers, error: adminError } = await supabase
      .from('profiles')
      .select('id')
      .eq('user_typeadmin')

      .limit(1);
    if (adminError) {
      console.error("Error fetching admin users:", adminError)
    }
    let adminId: string | undefined = undefined;
      .limit(1),
      
    if (adminError) {
      console.error("Error fetching admin users:", adminError)
    }
    
    let adminId: string | undefined = undefined,
    
    // Create notification for admin (if any found)
    if (adminUsers && adminUsers.length > 0) {
      adminId = adminUsers[0].id
      const adminNotificationContent = {
        title: `New hiring request for ${talent.full_name}`;
        message: `${requester.name} (${requester.email}) wants to hire ${talent.full_name} for a project with budget ${budgetDisplay}.`;
        type: "hire_request"
        related_id: requestRecord[0].id
      }
      const { error: notificationError } = await supabase
        .rpc('create_notification', {
          _user_id: adminId;
          _title: adminNotificationContent.title;
          _message: adminNotificationContent.message;
          _type: adminNotificationContent.type
          _related_id: adminNotificationContent.related_id
        });
      if (notificationError) {
        console.error("Error creating admin notification:", notificationError)
      }
    }
    // 4. Send email notification to talent
    if (talent.email) {
      // In a real implementation, this would call your email sending function
      const emailResponse = await supabase.functions.invoke('send-email', {
        body: {
          to: talent.email
          subject: `New Project Request from ${requester.name}`;
          html: `
            <h1>You've Received a New Project Request</h1>
            <p>Hello ${talent.full_name},</p>
            <p>You have received a new project request from ${requester.name} (${requester.email}).</p>
            <h2>Project Details</h2>
            <p><strong>Budget:</strong> ${budgetDisplay}</p>
            <p><strong>Timeline:</strong> ${project.timeline}</p>
            <p><strong>Overview:</strong></p>
            <p>${project.overview}</p>
        title: `New hiring request for ${talent.full_name}`,
        message: `${requester.name} (${requester.email}) wants to hire ${talent.full_name} for a project with budget ${budgetDisplay}.`,
        type: "hire_request",
        related_id: requestRecord[0].id
      },
      
      const { error: notificationError } = await supabase
        .rpc('create_notification', {
          _user_id: adminId,
          _title: adminNotificationContent.title,
          _message: adminNotificationContent.message,
          _type: adminNotificationContent.type,
          _related_id: adminNotificationContent.related_id
        }),
        
      if (notificationError) {
        console.error("Error creating admin notification:", notificationError)
      }
    }
    
    // 4. Send email notification to talent
    if (talent.email) {
      // In a real implementation, this would call your email sending function
      const emailResponse = await supabase.functions.invoke('send-email', {
        body: {
          to: talent.email,
          subject: `New Project Request from ${requester.name}`;
          html: `
            <h1>You've Received a New Project Request</h1>
            <p>Hello ${talent.full_name},</p>
            <p>You have received a new project request from ${requester.name} (${requester.email}).</p>
            <h2>Project Details</h2>
            <p><strong>Budget:</strong> ${budgetDisplay}</p>
            <p><strong>Timeline:</strong> ${project.timeline}</p>
            <p><strong>Overview:</strong></p>
            <p>${project.overview}</p>
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
        title: `New hiring request for ${talent && talent.full_name}`;
        message: `${requester && requester.name} (${requester && requester.email}) wants to hire ${talent && talent.full_name} for a project with budget ${budgetDisplay}.`;
        type: "hire_request",

        title: `New hiring request for ${talent && talent.full_name}`;
        message: `${requester && requester.name} (${requester && requester.email}) wants to hire ${talent && talent.full_name} for a project with budget ${budgetDisplay}.`;
        type: "hire_request",
        related_id: requestRecord[0].id
      }
      const { error: notificationError } = await supabase
        .rpc('create_notification', {
          _user_id: adminId;
          _title: adminNotificationContent && adminNotificationContent.title;
          _message: adminNotificationContent && adminNotificationContent.message;
          _type: adminNotificationContent && adminNotificationContent.type,
          _related_id: adminNotificationContent && adminNotificationContent.related_id
        });
      if (notificationError) {
        console && console.error("Error creating admin notification:", notificationError)
      }
    }
    // 4. Send email notification to talent
    if (talent && talent.email) {
      // In a real implementation, this would call your email sending function
      const emailResponse = await supabase && supabase.functions.invoke('send-email', {
        message: `${requester.name} (${requester.email}) wants to hire ${talent.full_name} for a project with budget ${budget_display}.`;
        type: "hire_request",
        related_id: request_record[0].id;
      }
;
      const { error: notification_error } = await supabase;
        .rpc ('create_notification', {
          _user_id: admin_id;
          _title: adminNotificationContent.title;
          _message: adminNotificationContent.message;
          _type: adminNotificationContent.type,
          _related_id: adminNotificationContent.related_id;
        });
;
      // Check condition
if ( {) {
  $2
}
        console.error ("Error creating admin notification:", notification_error);
      }
    }
    // 4. Send email notification to talent;
    // Check condition
if ( {) {
  $2
}
      // In a real implementation, this would call your email sending function;
      const email_response = await supabase.functions.invoke ('send - email', {
        body: {
          to: talent && talent.email,
          subject: `New Project Request from ${requester && requester.name}`;
          html: `
            <h1>You've Received a New Project Request</h1>
            <p>Hello ${talent && talent.full_name},</p>
            <p>You have received a new project request from ${requester && requester.name} (${requester && requester.email}).</p>
            <h2>Project Details</h2>
            <p><strong>Budget:</strong> ${budgetDisplay}</p>
            <p><strong>Timeline:</strong> ${project && project.timeline}</p>
            <p><strong>Overview:</strong></p>
            <p>${project && project.overview}</p>
            ${enhancedContent?.summary ? `<p><strong>Summary:</strong> ${enhancedContent && enhancedContent.summary}</p>` : ''}
            ${enhancedContent?.projectType ? `<p><strong>Project Type:</strong> ${enhancedContent && enhancedContent.projectType}</p>` : ''}
            <p>Please log in to your Zion AI Marketplace account to respond to this request.</p>
            <p>Best regards,<br>The Zion AI Marketplace Team</p>
          `}});

        title: `New hiring request for ${talent.full_name}`,
        message: `${requester.name} (${requester.email}) wants to hire ${talent.full_name} for a project with budget ${budgetDisplay}.`,
        type: "hire_request",
        related_id: requestRecord[0].id
      },
      
      const { error: notificationError } = await supabase
        .rpc('create_notification', {
          _user_id: adminId,
          _title: adminNotificationContent.title,
          _message: adminNotificationContent.message,
          _type: adminNotificationContent.type,
          _related_id: adminNotificationContent.related_id
        }),
        
      if (notificationError) {
        console.error("Error creating admin notification:", notificationError)

            ${enhancedContent?.summary ? `<p><strong>Summary:</strong> ${enhancedContent.summary}</p>` : ''}
            ${enhancedContent?.projectType ? `<p><strong>Project Type:</strong> ${enhancedContent.projectType}</p>` : ''}
            <p>Please log in to your Zion AI Marketplace account to respond to this request.</p>
            <p>Best regards,<br>The Zion AI Marketplace Team</p>
          `}}),
      
      // // // console.log("Email sending result:", emailResponse)
          `}});
      console.log("Email sending result:", emailResponse)
          `}}),
      
      // // // console.log("Email sending result:", emailResponse)
    }
    return new Response(
      JSON.stringify({
        success: true
        message: "Hire request processed successfully"
        request_id: requestRecord[0].id
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" }
        status: 200}
    )
  } catch (error) {
    console.error("Error processing hire request:", error.message);
    return new Response(
      JSON.stringify({
        success: false
        message: "Failed to process hire request"
        error: error.message
      });
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" }
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200}
    )
  } catch (error) {
    console.error("Error processing hire request:", error.message),
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: "Failed to process hire request",
        error: error.message 
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" };
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
      console && console.log("Email sending result:", emailResponse)
    }
    return new Response(
      JSON && JSON.stringify({ 
        success: true, 
        message: "Hire request processed successfully",
        request_id: requestRecord[0].id
      });
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" }
          html: `;
            <h1 > You've Received a New Project Request</h1>;
            <p > Hello ${talent.full_name}, </p>;
            <p > You have received a new project request from ${requester.name} (${requester.email}).</p>;
            <h2 > Project Details</h2>;
            <p><strong > Budget:</strong> ${budget_display}</p>;
            <p><strong > Timeline:</strong> ${project.timeline}</p>;
            <p><strong > Overview:</strong></p>;
            <p>${project.overview}</p>;
            ${enhanced_content?.summary ? `<p><strong > Summary:</strong> ${enhanced_content.summary}</p>` : ''}
            ${enhanced_content?.project_type ? `<p><strong > Project Type:</strong> ${enhanced_content.project_type}</p>` : ''}
            <p > Please log in to your Zion AI Marketplace account to respond to this request.</p>;
            <p > Best regards, <br > The Zion AI Marketplace Team</p>;
          `}});
;
      console.log ("Email sending result:", email_response);
    }
    return new Response (
      JSON.stringify ({
        success: true,
        message: "Hire request processed successfully",
        request_id: request_record[0].id;
      });
      {
        headers: { ...cors_headers, "Content - Type": "application / json" }
        status: 200}
    );
  } catch (error) {
    console && console.error("Error processing hire request:", error && error.message);
    return new Response(
      JSON && JSON.stringify({ 
        success: false, 
        message: "Failed to process hire request",
        error: error && error.message 
      });
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" }
    console.error ("Error processing hire request:", error.message);
;
    return new Response (
      JSON.stringify ({
        success: false,
        message: "Failed to process hire request",
        error: error.message;
      });
      {
        headers: { ...cors_headers, "Content - Type": "application / json" }

        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200}
    )
  } catch (error) {
    console.error("Error processing hire request:", error.message),
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: "Failed to process hire request",
        error: error.message 
      }),
      {

        status: 500}
    );
  }
});


;


;
        
        const _completion = await openai.createCompletion({_model: "gpt-3.5-turbo-instruct", _prompt, _max_tokens: 150, _temperature: 0.3});
        
        const _responseText = completion.data.choices[0]?.text || "";
        
        try {_// Extract JSON from the response
          const _jsonMatch = responseText.match(/\{[\s\S]*\}/);
          if (jsonMatch) {_enhancedContent = JSON.parse(jsonMatch[0]);}
        } catch (jsonError) {_// Continue without enhanced content}
      } catch (aiError) {_// Continue without enhanced content}
    }
    ;
    // 2. Store the request in the database;
    const { data:requestRecord, error:requestError } = await supabase;
      .from('hire_requests');
      .insert([;
        {;
          talent_id:talent.id,;
          requester_id:requester.id || null, // May be null if user is not authenticated;
          requester_name:requester.name,;
          requester_email:requester.email,;
          project_overview:project.overview,;
          project_summary:enhancedContent?.summary || null,;
          project_type:enhancedContent?.projectType || null,;
          timeline:project.timeline,;
          budget_min:project.budgetMin,;
          budget_max:project.budgetMax,;
          budget_display:budgetDisplay,;
          status:'new',;
          expiry_date:new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now;
        }
      ]);
      .select(),;
      ;
    if (requestError) {;
      throw new Error(`Error storing hire request:${requestError.message}`),;
    }
    ;
    // 3. Create notification for the admin;
    // Fetch admin users;
    const { data:adminUsers, error:adminError } = await supabase;
      .from('profiles');
      .select('id');
      .eq('user_typeadmin');
      .limit(1),;
      ;
    if (adminError) {;
      console.error("Error fetching admin users:", adminError),;
    }
    ;
    let adminId:string | undefined = undefined,;
    ;
    // Create notification for admin (if any found);
    if (adminUsers && adminUsers.length > 0) {;
      adminId = adminUsers[0].id,;
      ;
      const adminNotificationContent = {;
        title:`New hiring request for ${talent.full_name}`,;
        message:`${requester.name} (${requester.email}) wants to hire ${talent.full_name} for a project with budget ${budgetDisplay}.`,;
        type:"hire_request",;
        related_id:requestRecord[0].id;
      },;
      ;
      const { error:notificationError } = await supabase;
        .rpc('create_notification', {;
          _user_id:adminId,;
          _title:adminNotificationContent.title,;
          _message:adminNotificationContent.message,;
          _type:adminNotificationContent.type,;
          _related_id:adminNotificationContent.related_id;
        }),;
        ;
      if (notificationError) {;
        console.error("Error creating admin notification:", notificationError),;
      }
    }
    ;
    // 4. Send email notification to talent;
    if (talent.email) {;
      // In a real implementation, this would call your email sending function;
      const emailResponse = await supabase.functions.invoke('send-email', {;
        body:{;
          to:talent.email,;
          subject:`New Project Request from ${requester.name}`,;
          html:`;
            <h1>You've Received a New Project Request</h1>;
            <p>Hello ${talent.full_name},</p>;
            <p>You have received a new project request from ${requester.name} (${requester.email}).</p>;
            <h2>Project Details</h2>;
            <p><strong>Budget:</strong> ${budgetDisplay}</p>;
            <p><strong>Timeline:</strong> ${project.timeline}</p>;
            <p><strong>Overview:</strong></p>;
            <p>${project.overview}</p>;
            ${enhancedContent?.summary ? `<p><strong>Summary:</strong> ${enhancedContent.summary}</p>` :''}
            ${enhancedContent?.projectType ? `<p><strong>Project Type:</strong> ${enhancedContent.projectType}</p>` :''}
            <p>Please log in to your Zion AI Marketplace account to respond to this request.</p>;
            <p>Best regards,<br>The Zion AI Marketplace Team</p>;
          `}}),;
      ;
      // // // console.log("Email sending result:", emailResponse),;
    }
;
    return new Response(;
      JSON.stringify({ ;
        success:true, ;
        message:"Hire request processed successfully",;
        request_id:requestRecord[0].id;
      }),;
      {;
        headers:{ ...corsHeaders, "Content-Type":"application/json" },;
        status:200}
    ),;
  } catch (error) {;
    console.error("Error processing hire request:", error.message),;
    ;
    return new Response(;
      JSON.stringify({ ;
        success:false, ;
        message:"Failed to process hire request",;
        error:error.message ;
      }),;
      {;
        headers:{ ...corsHeaders, "Content-Type":"application/json" },;
        status:500}
    ),;  }
}),;
 interface HireRequest {
  talent: {
  id: string;
full name: string;
professional title: string;
email?: string 
};
requester: {
  name: string;
email: string;
id?: string 
};
project: {
  overview: string;
timeline: string;
budgetMin: number;
budgetMax: number 
}
}interface EnhancedContent {
  summary: string;
projectType: string 
}serve (async (req) => {
  //Handle CORS preflight requests 
}try {
  const supabase = createClient ();
if (openAiKey) {
  try {
  const configuration = new Configuration ({
  apiKey: openAiKey 
});
const openai = new OpenAIApi (configuration);
const prompt = `Project Overview: "$ {
  project.overview 
}" AI Development", " Cloud Migration", " Web Design", etc.) Format your response as JSON: try {
  //Extract JSON from the response const jsonMatch = responseText.match (/\ {
  [\s\S]*\ 
}/);
if (jsonMatch) {
  //Continue without enhanced content 
}
}//2. Store the request in the database const {
  data: requestRecord, error: requestError 
}= await supabase .from ('hire requests') .insert ([ {
  talent id: talent.id, requester id: requester.id || null, //May be null if user is not authenticated requester name: requester.name, requester email: requester.email, project overview: project.overview, project summary: enhancedContent?.summary || null, project type: enhancedContent?.projectType || null, timeline: project.timeline, budget min: project.budgetMin, budget max: project.budgetMax, budget display: budgetDisplay, status: 'new', expiry date: new Date (Date.now () + 30 * 24 * 60 * 60 * 1000), //30 days from now 
}]) .select ();
}//3. Create notification for the admin //Fetch admin users const {
  data: adminUsers, error: adminError 
}= await supabase .from ('profiles') .select ('id') .eq ('user typeadmin') .limit (1);
}//Create notification for admin (if any found) const adminNotificationContent = {
  title: `New hiring request for $ {
  talent.full name 
}`;
related id: requestRecord[0].id 
};
}
}//4. Send email notification to talent if (talent.email) {
  //In a real implementation, this would call your email sending function const emailResponse = await supabase.functions.invoke ('send-email', {
  body: {
  to: talent.email, subject: `New Project Request from $ {
  requester.name 
}`, html: ` <h1>You've Received a New Project Request</h1> <p>Hello $ {
  talent.full name 
}, </p> <p>You have received a new project request from $ {
  requester.name 
}($ {
  requester.email 
}) .</p> <h2>Project Details</h2> <p><strong>Budget:</strong> $ {
  budgetDisplay 
}</p> <p><strong>Timeline:</strong> $ {
  project.timeline 
}</p> <p><strong>Overview:</strong></p> <p>$ {
  project.overview 
}</p> $ {
  enhancedContent?.summary ? `<p><strong>Summary:</strong> $ {
  enhancedContent.summary 
}</p>` : '' 
}$ {
  enhancedContent?.projectType ? `<p><strong>Project Type:</strong> $ {
  enhancedContent.projectType 
}</p>` : '' 
}<p>Please log in to your Zion AI Marketplace account to respond to this request.</p> <p>Best regards, <br>The Zion AI Marketplace Team</p> ` 
}
});
}return new Response (JSON.stringify ({
  success: true;
message: " Hire request processed successfully";
request id: requestRecord[0].id 
});
{
  headers: {
  ...corsHeaders, " Content-Type": " application/json" 
};
status: 200 
}) 
}catch (error) {
  return new Response (JSON.stringify ({
  success: false;
message: " Failed to process hire request";
error: error.message 
});
{
  headers: {
  ...corsHeaders, " Content-Type": " application/json" 
};
}) 
}
});
        status: 500}
    )
  }
});

