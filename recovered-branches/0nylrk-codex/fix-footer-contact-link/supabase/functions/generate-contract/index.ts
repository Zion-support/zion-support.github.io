

interface Milestone {
  title: string,
  description: string,
  dueDate: string,
  estimatedHours: number

import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",;
import "https://deno.land/x/xhr@0.1.0/mod.ts",;
const corsHeaders = {;
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},;
interface Milestone {;
  title: string,;
  description: string,;
  dueDate: string,;
  estimatedHours: number;

}
serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // Get the OpenAI API key from environment variables
    const apiKey = Deno.env.get('OPENAI_API_KEY');
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY is not set')
    }
    // Parse request body
    const {
      talentName;
      clientName;
      projectName;
      scopeSummary;
      startDate;
      endDate;
      paymentTerms;
      paymentAmount;
      additionalClauses;
      milestones
    } = await req.json();
    // Create the contract prompt for OpenAI
    let prompt = `
    Please generate a professional contractual agreement between ${clientName} (Client) and ${talentName} (Talent) for the following project:

    Project Name: ${projectName}
    Project Scope: ${scopeSummary}
    Start Date: ${new Date(startDate).toLocaleDateString()}
    ${endDate ? `End Date: ${new Date(endDate).toLocaleDateString()}` : 'End Date: To be determined based on project completion'}
    Payment Terms: ${paymentTerms}
    Payment Amount: ${paymentAmount}
    The contract should include standard sections like: - Parties involved
    - Project scope
    - Timeline
    - Payment terms
    - Deliverables
    `
    if (additionalClauses && additionalClauses.length > 0) {
      prompt += `
      Please also include the following additional clauses:
      ${additionalClauses.includes('nda') ? '- Confidentiality/Non-disclosure agreement' : ''}
      ${additionalClauses.includes('ip') ? '- Intellectual Property rights transfer to the client' : ''}
      ${additionalClauses.includes('termination') ? '- Termination conditions and process' : ''}
      ${additionalClauses.includes('revisions') ? '- Revision and amendment procedures' : ''}
      `
    }
    // Add milestone information if available
    if (milestones && milestones.length > 0) {
      prompt += `
      The project will be divided into the following milestones: `
      milestones.forEach((milestone: Milestone, index: number) => {
        prompt += `
        Milestone ${index + 1}: ${milestone.title}
        - Description: ${milestone.description}
        - Due Date: ${new Date(milestone.dueDate).toLocaleDateString()}

        headers: { ...corsHeaders, 'Content-Type': 'application/json' }}
    )
  }
});
