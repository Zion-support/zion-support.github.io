import React from "react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
import {CodeBlock} from "@/components/developers/CodeBlock";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

export function ApiWebhooks() {;
  // Sample webhook event payload;
  const newApplicationPayload = `{;

  "event_type": "new_application";
  "created_at": "2023-06-10T15: 42:31Z";
  "data": {;import React from "react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",
import { CodeBlock } from "@/components/developers/CodeBlock";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/developers/CodeBlock",

export function ApiWebhooks() {
  // Sample webhook event payload

  const newApplicationPayload = `{  "event_type": "talent_hired";
  "created_at": "2023 - 06 - 12T09: 15:22Z";
  "data": {
    "project_id": "project - 123";
    "job_id": "job - 456";
    "client_id": "client - 789";
    "talent_id": "talent - 123";
    "start_date": "2023 - 07 - 01";
    "status": "offer_accepted",
    "created_at": "2023 - 06 - 12T09:15:22Z";
  }
}`;
;
  "event_type": "quote_received";

  const quoteReceivedPayload = `{;
  "event_type": "quote_received";
    "status": "new",;
    "created_at": "2023-06-15T11:30:00Z";
  }
}`;

  const messageReceivedPayload = `{;
  "event_type": "message_received";
  "created_at": "2023-06-18T14: 22:15Z";
  "data": {;
    "message_id": "msg-123";
    "conversation_id": "conv-456";
    "sender_id": "user-789";

    "recipient_id": "user-012",;
    "content": "Hi, I'd like to discuss the project details.";
    "created_at": "2023-06-18T14:22:15Z";
  }
}`;
  switch (event_type) {
    case 'new_application':;
      console.log ('New application received:', data.application_id);
      // Process the new application...;
      break;

  "event_type": "new_application",
  "created_at": "2023-06-10T15:42:31Z",
  "data": {

    "resume_url": "https://storage.zionai.com/resumes/resume-123.pdf"
    "created_at": "2023-06-10T15:42:31Z"
  }
}`;
    "job_id": "job-789",
    "talent_id": "talent-456",
    "status": "new",
    "cover_letter": "I'm excited to apply for this position...",
    "resume_url": "https://storage.zionai.com/resumes/resume-123.pdf",
    "created_at": "2023-06-10T15:42:31Z"
  }
}`,

  const newHirePayload = `{
  "event_type": "talent_hired",
  "created_at": "2023-06-12T09:15:22Z",
  "data": {  const quoteReceivedPayload = `{
  "event_type": "quote_received",
  "created_at": "2023-06-15T11:30:00Z",
  "data": {    

    case 'talent_hired':

      // // // console.log('Talent hired:', data.talent_id),
      // Update your system...

    case 'quote_received':

      // // // console.log('New quote received:', data.quote_id),
      // Process the quote...

    case 'message_received':

      // // // console.log('New message received:', data.message_id),
      // Process the message...

      break,
    

      break;
      break,
    
    case 'talent_hired':
      // // // console.log('Talent hired:', data.talent_id),
      // Update your system...
      break;
      break,
    
    case 'quote_received':
      // // // console.log('New quote received:', data.quote_id),
      // Process the quote...
      break;
      break,
    
    case 'message_received':
      // // // console.log('New message received:', data.message_id),
      // Process the message...
      break;
      break,
    
      // // // console.log('Unknown event type:', event_type)
  }
  // Always return a 200 response quickly'
  res.status(200).send('Webhook received')

;
// Webhook endpoint with signature verification;
app.post('/webhooks/zion', verifyWebhookSignature, (req, res) => {;
  const { event_type, data } = req.body,;
  // Handle different event types;
  switch (event_type) {;
    case 'new_application':;
      // // // console.log('New application received:', data.application_id),;
      // Process the new application...;
      break,;
    case 'talent_hired':;
      // // // console.log('Talent hired:', data.talent_id),;
      // Update your system...;
      break,;
    case 'quote_received':;
      // // // console.log('New quote received:', data.quote_id),;
      // Process the quote...;
      break,;
    case 'message_received':;
      // // // console.log('New message received:', data.message_id),;
      // Process the message...;
      break,;
app.listen(3000, () => {
  // // // console.log('Webhook server listening on port 3000')
}),`,
