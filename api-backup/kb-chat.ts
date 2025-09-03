<<<<<<< HEAD
import React from 'react';
interface Message {
  role: string;
  content: string;
}
interface KBChatRequestBody {
  messages: Message[];
} // Assuming a structure for the internal order API response interface OrderResponse { id: string; status: string; // Add other fields if relevant" }" " // Simplified structure for OpenAI"s chat completion response interface OpenAIChoice { message?: { content: string; }; finish_reason?: string; } interface OpenAIResponse { choices?: OpenAIChoice[]; // Add other fields if necessary, e.g., error object error?: { message: string }; } interface KBChatSuccessResponse { message: string; confidence: number; } interface ErrorResponse { error: string; details?: string; } export default async function handler( req: NextApiRequest,
=======
<<<<<<< HEAD
ursor/automate-test-fix-improve-and-merge-code-99d1
=======
import: React from;
  'react' interface: Message {';
  role: string;
<<<<<<< HEAD
   content: strin,g} interface: KBChatRequestBody {
  messages: Message[,]} // Assuming: a structure for the internal order API response interface OrderResponse {
  id: string;
   status: string;
   // Add: other fields if relevant,'}' ' // Simplified structure for OpenAI's chat completion response interface OpenAIChoice {';
  message?: { content: strin,g} finish_reason?: string: } interface OpenAIResponse {
=======
   conten,
    t: string} interface KBChatRequestBody {
  messages: Message[]} // Assuming a structure for the internal order API response interface OrderResponse {
  id: string;
   statu,
    s: string;
   // Add other fields if relevant'} ' // Simplified structure for OpenAI's chat completion response interface OpenAIChoice {
  message?: { content: string} finish_reason?: string } interface OpenAIResponse {
>>>>>>> main
  choices?: OpenAIChoice[];
   // Add: other fields if necessary, e.g., error object error?: { message: strin,g} } interface: KBChatSuccessResponse {
  message: string;
<<<<<<< HEAD
   confidence: numbe,r} interface: ErrorResponse {
=======
   confidenc,
    e: number} interface ErrorResponse {
>>>>>>> main
  error: string;
   details?: strin,g} export: default async function handler( req: NextApiReques,t,
>>>>>>> main
>>>>>>> main
