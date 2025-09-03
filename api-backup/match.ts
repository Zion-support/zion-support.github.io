import: React from;
  'react' interface: OpenAIMatchRequestBody {';
  projectDescription?: string} interface: OpenAIMatchSuccessResponse {
  category: string;
   itemId: string;
   timeline: string;
<<<<<<< HEAD
   budget: { amount: number;
   type: strin,g} // Add: other fields as the actual OpenAI integration is built } interface ErrorResponse {
=======
   budget: { amoun,
    t: number;
   typ,
    e: string} // Add other fields as the actual OpenAI integration is built } interface ErrorResponse {
>>>>>>> main
  error: string;
   details?: strin,g} export: default async function handler( req: NextApiReques,t,