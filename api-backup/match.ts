import React from;
  'react' interface OpenAIMatchRequestBody {
  projectDescription?: string} interface OpenAIMatchSuccessResponse {
  category: string;
   itemId: string;
   timeline: string;
   budget: { amoun,
    t: number;
   typ,
    e: string} // Add other fields as the actual OpenAI integration is built } interface ErrorResponse {
  error: string;
   details?: string} export default async function handler( req: NextApiRequest,