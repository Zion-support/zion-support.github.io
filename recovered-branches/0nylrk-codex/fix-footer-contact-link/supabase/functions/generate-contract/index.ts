 const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type' 
};
interface Milestone {
  title: string;
description: string;
dueDate: string;
estimatedHours: number 
}//Handle CORS preflight requests if (req.method === 'OPTIONS') {
  //Create the contract prompt for OpenAI let prompt = `Please generate a professional contractual agreement between $ {
  clientName 
}(Client) and $ {
  talentName 
}(Talent) for the following project: Project Name: $ {
  projectName 
}Project Scope: $ {
  scopeSummary 
}Start Date: $ {
  new Date (startDate) .toLocaleDateString () 
}$ {
  endDate ? `End Date: $ {
  new Date (endDate) .toLocaleDateString () 
}`: 'End Date: To be determined based on project completion' 
}Payment Terms: $ {
  paymentTerms 
}Payment Amount: $ {
  paymentAmount 
}The contract should include standard sections like: - Parties involved - Project scope - Timeline - Payment terms - Deliverables `;
if (additionalClauses && additionalClauses.length > 0) {
  prompt += `Please also include the following additional clauses: $ {
  additionalClauses.includes ('nda') ? '- Confidentiality/Non-disclosure agreement' : '' 
}
}//Add milestone information if available if (milestones && milestones.length > 0) {
  prompt += ` The project will be divided into the following milestones: `;
milestones.forEach ( (milestone: Milestone, index: number) => {
  prompt += ` prompt += `Please structure the contract to include these milestones in the payment schedule, with payments tied to the completion and approval of each milestone. ` 
}prompt += `Format the contract professionally with proper sections, numbering, and formatting. Use markdown formatting. `;
// Call OpenAI API 
}
});
