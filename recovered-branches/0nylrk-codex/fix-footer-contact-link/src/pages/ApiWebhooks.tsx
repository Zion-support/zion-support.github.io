import React from "react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
import {CodeBlock} from "@/components/developers/CodeBlock";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

export function ApiWebhooks() {;
  // Sample webhook event payload;
  const newApplicationPayload = `{;

  "event_type": "new_application";
  "created_at": "2023-06-10T15: 42:31Z";
  "data": {;import React from "react",;
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",;
import { CodeBlock } from "@/components/developers/CodeBlock";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/developers/CodeBlock",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;

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
import React from "react";""
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";""
import {CodeBlock} from "@/components/developers/CodeBlock";""
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";"
export function ApiWebhooks() {;
  // Sample webhook event payload;
  const newApplicationPayload = `{;
"
  "event_type": "new_application";""
  "created_at": "2023-06-10T15: 42:31Z";""
  "data": {;""
import React from "react",""
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",""
import { CodeBlock } from "@/components/developers/CodeBlock";""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";""
import { CodeBlock } from "@/components/developers/CodeBlock",""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs","
export function ApiWebhooks() {
  // Sample webhook event payload;`;
  const newApplicationPayload = `{"
  "event_type": "new_application",""
  "created_at": "2023-06-10T15:42:31Z",""
  "data": {""
    "application_id": "app-123456";""
    "job_id": "job-789";""
    "talent_id": "talent-456";""
    "status": "new";""
    "cover_letter": "I'm excited to apply for this position...";""
import React from './react';
import ApiDocsLayout from "@/components / developers / ApiDocsLayout";""
import { CodeBlock } from '@/components / developers / CodeBlock';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
export /**
 * ApiWebhooks - Function description;
 */
function ApiWebhooks() {
  // Sample webhook event payload;`;
  const newApplicationPayload = `{
  "created_at": "2023 - 06 - 10T15: 42:31Z";""
    "application_id": "app - 123456";""
    "job_id": "job - 789";""
    "talent_id": "talent - 456";""
    "resume_url": "https://storage.zionai.com / resumes / resume - 123.pdf",""
    "created_at": "2023 - 06 - 10T15:42:31Z";"
  }`;
;
`;
  const newHirePayload = `{"
    "resume_url": "https://storage && storage.zionai.com/resumes/resume-123 && 123.pdf",;""
    "created_at": "2023-06-10T15:42:31Z";"
  const newHirePayload = `{;"
  "event_type": "talent_hired";"`;
  "event_type": "talent_hired";""
  "created_at": "2023 - 06 - 12T09: 15:22Z";""
    "project_id": "project - 123";""
    "job_id": "job - 456";""
    "client_id": "client - 789";""
    "talent_id": "talent - 123";""
    "start_date": "2023 - 07 - 01";""
    "status": "offer_accepted",""
    "created_at": "2023 - 06 - 12T09:15:22Z";"
  const quoteReceivedPayload = `{"
    "status": "offer_accepted",;""
    "created_at": "2023-06-12T09:15:22Z";"
  const quoteReceivedPayload = `{;"
  "event_type": "quote_received";"`;
  "event_type": "quote_received";""
    "status": "new",;""
    "created_at": "2023-06-15T11:30:00Z";"
  const messageReceivedPayload = `{;
  "event_type": "message_received";""
  "created_at": "2023-06-18T14: 22:15Z";""
    "message_id": "msg-123";""
    "conversation_id": "conv-456";""
    "sender_id": "user-789";""
    "recipient_id": "user-012",;""
    "content": "Hi, I'd like to discuss the project details.";""
    "created_at": "2023-06-18T14:22:15Z";"
  "created_at": "2023 - 06 - 15T11: 30:00Z";""
    "quote_id": "quote - 123";""
    "client_id": "client - 456";""
    "talent_id": "talent - 789";""
    "project_name": "Website Redesign";""
    "budget_min": 5000;""
    "budget_max": 8000;""
    "status": "new",""
    "created_at": "2023 - 06 - 15T11:30:00Z";"
;`;
  const messageReceivedPayload = `{"
  "created_at": "2023 - 06 - 18T14: 22:15Z";""
    "message_id": "msg - 123";""
    "conversation_id": "conv - 456";""
    "sender_id": "user - 789";""
    "recipient_id": "user - 012",""
    "created_at": "2023 - 06 - 18T14:22:15Z";"
  const webhookHandlerJs = `// Express.js webhook handler example;"
const express = require ('express');
const app = express ();
const crypto = require ('crypto');
// Middleware to parse JSON bodies;
app.use (express.json ());
// Your webhook secret from the Zion dashboard;
const webhook_secret = 'YOUR_WEBHOOK_SECRET';
// Middleware to verify webhook signatures;
/**
 * verifyWebhookSignature - Function description;
function verifyWebhookSignature() {
  const signature = req.headers['x - zion - signature'];
  const timestamp = req.headers['x - zion - timestamp'];
  // Check condition;
if ( {) {
  $2;
}
    return res.status (401).send ('Missing signature or timestamp');
  // Verify the signature;
  const payload = timestamp + '.' + JSON.stringify (req.body);
  const expected_signature = crypto;
    .create_hmac ('sha256', webhook_secret);
    .update (payload);
    .digest ('hex');
  // Check condition;
    return res.status (401).send ('Invalid signature');
  next ();
// Webhook endpoint with signature verification;
app.post ('/webhooks / zion', verifyWebhookSignature, (req, res) => {
  const { event_type, data } = req.body;
  // Handle different event types;

pr-12325
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

      break,
    

    case 'quote_received':
      // // // console.log('New quote received:', data.quote_id),
      // Process the quote...

      break,
    

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
  // Always return a 200 response quickly
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
    default:;
      // // // console.log('Unknown event type:', event_type);
  }
;
  // Always return a 200 response quickly;
  res.status(200).send('Webhook received');
}),;
app.listen(3000, () => {;
  // // // console.log('Webhook server listening on port 3000');
}),`,;
  return (;}),

app.listen(3000, () => {
  // // // console.log('Webhook server listening on port 3000')
}),`,
  const webhookHandlerJs = `// Express && Express.js webhook handler example;
const express = require('express');
const app = express();
const crypto = require('crypto');
// Middleware to parse JSON bodies;
app && app.use(express && express.json());

// Your webhook secret from the Zion dashboard;
const webhookSecret = 'YOUR_WEBHOOK_SECRET';
// Middleware to verify webhook signatures;
function verifyWebhookSignature(): any (req, res, next) {;
  const signature = req && req.headers['x-zion-signature'];
  const timestamp = req && req.headers['x-zion-timestamp'];
  if (!signature || !timestamp) {;
    return res && res.status(401).send('Missing signature or timestamp');

  // Verify the signature;
  const payload = timestamp + '.' + JSON && JSON.stringify(req && req.body);
  const expectedSignature = crypto;
    .createHmac('sha256', webhookSecret);
    .update(payload);
    .digest('hex');
  if (signature !== expectedSignature) {;
    return res && res.status(401).send('Invalid signature');

  next();

// Webhook endpoint with signature verification;
app && app.post('/webhooks/zion', verifyWebhookSignature, (req, res) => {;
  const { event_type, data } = req && req.body;

  // Handle different event types;
  switch (event_type) {;
      console && console.log('New application received:', data && data.application_id);
      // Process the new application...;

    case 'talent_hired':;
      console && console.log('Talent hired:', data && data.talent_id);
      // Update your system...;

    case 'quote_received':;
      console && console.log('New quote received:', data && data.quote_id);
      // Process the quote...;

    case 'message_received':;
      console && console.log('New message received:', data && data.message_id);
      // Process the message...;

    default:;
      console && console.log('Unknown event type:', event_type);

  // Always return a 200 response quickly;
  res && res.status(200).send('Webhook received');
});

app && app.listen(3000, () => {;
  console && console.log('Webhook server listening on port 3000');`;
}),`;
    "application_id": "app-123456",""
    "job_id": "job-789",""
    "talent_id": "talent-456",""
    "cover_letter": "I'm excited to apply for this position...",""
    "resume_url": "https://storage.zionai.com/resumes/resume-123.pdf",""
    "created_at": "2023-06-10T15:42:31Z""
}`,

  "event_type": "talent_hired",""
  "created_at": "2023-06-12T09:15:22Z",""
    "project_id": "project-123",""
    "job_id": "job-456",""
    "client_id": "client-789",""
    "talent_id": "talent-123",""
    "start_date": "2023-07-01",""
    "created_at": "2023-06-12T09:15:22Z""

  "event_type": "quote_received",""
  "created_at": "2023-06-15T11:30:00Z",""
    "quote_id": "quote-123",""
    "client_id": "client-456",""
    "talent_id": "talent-789",""
    "project_name": "Website Redesign",""
    "budget_min": 5000,""
    "budget_max": 8000,""
    "created_at": "2023-06-15T11:30:00Z""
  const messageReceivedPayload = `{
  "event_type": "message_received",""
  "created_at": "2023-06-18T14:22:15Z",""
    "message_id": "msg-123",""
    "conversation_id": "conv-456",""
    "sender_id": "user-789",""
    "recipient_id": "user-012",""
    "content": "Hi, I'd like to discuss the project details.",""
    "created_at": "2023-06-18T14:22:15Z"""
import React from "react",;""
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",;""
import { CodeBlock } from "@/components/developers/CodeBlock",;""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;"
  // Sample webhook event payload;`;
  const newApplicationPayload = `{;"
  "event_type": "new_application",;""
  "created_at": "2023-06-10T15:42:31Z",;""
    "application_id": "app-123456",;""
    "job_id": "job-789",;""
    "talent_id": "talent-456",;""
    "cover_letter": "I'm excited to apply for this position...",;""
    "resume_url": "https://storage.zionai.com/resumes/resume-123.pdf",;""
}`,;`;
  "event_type": "talent_hired",;""
  "created_at": "2023-06-12T09:15:22Z",;""
    "project_id": "project-123",;""
    "job_id": "job-456",;""
    "client_id": "client-789",;""
    "talent_id": "talent-123",;""
    "start_date": "2023-07-01",;""
  "event_type": "quote_received",;""
  "created_at": "2023-06-15T11:30:00Z",;""
    "quote_id": "quote-123",;""
    "client_id": "client-456",;""
    "talent_id": "talent-789",;""
    "project_name": "Website Redesign",;""
    "budget_min": 5000,;""
    "budget_max": 8000,;""
  const messageReceivedPayload = `{;"
  "event_type": "message_received",;""
  "created_at": "2023-06-18T14:22:15Z",;""
    "message_id": "msg-123",;""
    "conversation_id": "conv-456",;""
    "sender_id": "user-789",;""
    "content": "Hi, I'd like to discuss the project details.",;""
const express = require('express'),;
const app = express(),;
const crypto = require('crypto'),;
// Middleware to parse JSON bodies;
app.use(express.json()),;
// Your webhook secret from the Zion dashboard;
const webhookSecret = 'YOUR_WEBHOOK_SECRET',;
// Middleware to verify webhook signatures;
function verifyWebhookSignature(req, res, next) {;
  const signature = req.headers['x-zion-signature'],;
  const timestamp = req.headers['x-zion-timestamp'],;
    return res.status(401).send('Missing signature or timestamp');
  // Verify the signature;
  const payload = timestamp + '.' + JSON.stringify(req.body),;
    .digest('hex'),;
    return res.status(401).send('Invalid signature');



// Webhook endpoint with signature verification;"
app.post('/webhooks/zion', verifyWebhookSignature, (req, res) => {
  const { event_type, data } = req.body,
  
  // Handle different event types;
    case 'new_application':
      // // // console.log('New application received:', data.application_id),
      // Process the new application...

      break,
    

    case 'talent_hired':
      // // // console.log('Talent hired:', data.talent_id),
      // Update your system...

    

    case 'quote_received':
      // // // console.log('New quote received:', data.quote_id),
      // Process the quote...

    

    case 'message_received':
      // // // console.log('New message received:', data.message_id),
      // Process the message...

    

    default:
      // // // console.log('Unknown event type:', event_type)
  // Always return a 200 response quickly;
  res.status(200).send('Webhook received')
}),

app.listen(3000, () => {
  // // // console.log('Webhook server listening on port 3000')`;
}),`,


  return (
    <ApiDocsLayout>

      <div className="max-w-3xl prose prose-invert">"
</div>
        <h1>Webhooks</h1>

        <p>
</p>

        <h2>Supported Events</h2>
        <p>You can subscribe to the following webhook events:</p>
        <div className="overflow-x-auto mb-6">"
</div>"
          <table className="w-full border-collapse">"
</table>
            <thead>
</thead>"
              <tr className="border-b border-zinc-800">"
</tr>"
                <th className="text-left py-2 px-4 text-zinc-300 font-medium">"
</th>
                </th>"
              </tr>
            </thead>
            <tbody>
</tbody>"
                <td className="py-2 px-4 text-white font-mono">"
</td>
                </td>"
                <td className="py-2 px-4 text-zinc-300">"
                <td className="py-2 px-4 text-white font-mono">talent_hired</td>""
              <tr>
            </tbody>

        <h2>Setting Up Webhooks</h2>
</p>"
          <a href="/developers/portal" className="text-zion-cyan">"
</a>"
          </a>{" "}"

        <ul>
</ul>)
          <li>A name for the webhook (for your reference)</li>
          <li>The URL where you want to receive webhook events</li>
          <li>The event types you want to subscribe to</li>
        </ul>


        <h2>Webhook Payload Format</h2>
        <p>All webhook payloads follow a common format:</p>
        <Tabs defaultValue="new_application">"

          <TabsList>
            <TabsTrigger value="new_application">New Application""
            <TabsTrigger value="talent_hired">Talent Hired""
            <TabsTrigger value="quote_received">Quote Received""
            <TabsTrigger value="message_received">Message Received"
          <TabsContent value="new_application">"

            <CodeBlock;
              code={newApplicationPayload}"
              language="json""
              showLineNumbers={true}
            />

          <TabsContent value="talent_hired">"

              code={newHirePayload}"

          <TabsContent value="quote_received">"

              code={quoteReceivedPayload}"

          <TabsContent value="message_received">"

              code={messageReceivedPayload}"

          
        

        <h2>Verifying Webhook Signatures</h2>

          <li>
</li>
            <code>X-Zion-Signature</code>: HMAC-SHA256 signature;
            <code>X-Zion-Timestamp</code>: Unix timestamp when the webhook was;
        <p>Here's an example of verifying a webhook in Node.js:</p>
          code={webhookHandlerJs}
          language="javascript""


        <h2>Testing Webhooks</h2>

        <h2>Best Practices</h2>
            <strong>Respond quickly</strong>: Return a 200 response as soon as;
            <strong>Verify signatures</strong>: Always verify webhook signatures;
            <strong>Implement retries</strong>: Prepare for occasional failures;
            <strong>Monitor webhook activity</strong>: Use the Developer Portal;
    
    <ApiDocsLayout>;
      <div className="max - w-3xl prose prose - invert">;"
        <h1 > Webhooks</h1>;
        <p>;
        </p>;
        <h2 > Supported Events</h2>;
        <p > You can subscribe to the following webhook events:</p>;"
        <div className="overflow - x-auto mb - 6">;"
          <table className="w - full border - collapse">;"
            <thead>;
              <tr className="border - b border - zinc - 800">;"
                <th className="text - left py - 2 px - 4 text - zinc - 300 font - medium">Event Type</th>;""
                <th className="text - left py - 2 px - 4 text - zinc - 300 font - medium">Description</th>;"
              </tr>;
            </thead>;
            <tbody>;
                <td className="py - 2 px - 4 text - white font - mono">new_application</td>;""
                <td className="py - 2 px - 4 text - zinc - 300">Triggered when a talent applies to one of your job postings</td>;"
              </tr>;"
                <td className="py - 2 px - 4 text - white font - mono">talent_hired</td>;""
                <td className="py - 2 px - 4 text - zinc - 300">Triggered when a talent is hired for a project</td>;"
                <td className="py - 2 px - 4 text - white font - mono">quote_received</td>;""
                <td className="py - 2 px - 4 text - zinc - 300">Triggered when you receive a quote request</td>;"
              <tr>;
                <td className="py - 2 px - 4 text - white font - mono">message_received</td>;""
                <td className="py - 2 px - 4 text - zinc - 300">Triggered when you receive a new message</td>;"
      <div className="max-w-3xl prose prose-invert">;"
        <h1>Webhooks</h1>;
        <h2>Supported Events</h2>;
        <p>You can subscribe to the following webhook events:</p>;"
        <div className="overflow-x-auto mb-6">;"
          <table className="w-full border-collapse">;"
              <tr className="border-b border-zinc-800">;"
                <th className="text-left py-2 px-4 text-zinc-300 font-medium">Event Type</th>;""
                <th className="text-left py-2 px-4 text-zinc-300 font-medium">Description</th>;"
                <td className="py-2 px-4 text-white font-mono">new_application</td>;""
                <td className="py-2 px-4 text-zinc-300">Triggered when a talent applies to one of your job postings</td>;"
                <td className="py-2 px-4 text-white font-mono">talent_hired</td>;""
                <td className="py-2 px-4 text-zinc-300">Triggered when a talent is hired for a project</td>;"
                <td className="py-2 px-4 text-white font-mono">quote_received</td>;""
                <td className="py-2 px-4 text-zinc-300">Triggered when you receive a quote request</td>;"
                <td className="py-2 px-4 text-white font-mono">message_received</td>;""
                <td className="py-2 px-4 text-zinc-300">Triggered when you receive a new message</td>;"
            </tbody>;
          </table>;
        </div>;
        <h2 > Setting Up Webhooks</h2>;
          You can configure webhooks in the <a href="/developers / portal" className="text - zion - cyan">Developer Portal</a> under the Webhooks tab.;"
        <ul>;
          <li > A name for the webhook (for your reference)</li>;
          <li > The URL where you want to receive webhook events</li>;
          <li > The event types you want to subscribe to</li>;
        </ul>;
        <h2 > Webhook Payload Format</h2>;
        <p > All webhook payloads follow a common format:</p>;"
        <Tabs default_value="new_application">;"

          <TabsList>;
            <TabsTrigger value="new_application">New Application;""
            <TabsTrigger value="talent_hired">Talent Hired;""
            <TabsTrigger value="quote_received">Quote Received;""
            <TabsTrigger value="message_received">Message Received;"
          ;"
          <TabsContent value="new_application">;"
            <CodeBlock code={newApplicationPayload} language="json" showLineNumbers={true} />;"

          <TabsContent value="talent_hired">;"
            <CodeBlock code={newHirePayload} language="json" showLineNumbers={true} />;"

          <TabsContent value="quote_received">;"
            <CodeBlock code={quoteReceivedPayload} language="json" showLineNumbers={true} />;"

          <TabsContent value="message_received">;"
            <CodeBlock code={messageReceivedPayload} language="json" showLineNumbers={true} />;"

        <h2 > Verifying Webhook Signatures</h2>;
          <li><code > X-Zion - Signature</code>: HMAC - SHA256 signature</li>;
          <li><code > X-Zion - Timestamp</code>: Unix timestamp when the webhook was sent</li>;
        </ul>;"
        <p > Here's an example of verifying a webhook in Node.js:</p>;
        <CodeBlock code={webhookHandlerJs} language="javascript" showLineNumbers={true} />;"

        <h2 > Testing Webhooks</h2>;
        <h2 > Best Practices</h2>;
          <li><strong > Respond quickly</strong>: Return a 200 response as soon as you receive the webhook, then process it asynchronously</li>;
          <li><strong > Verify signatures</strong>: Always verify webhook signatures to ensure requests are legitimate</li>;
          <li><strong > Implement retries</strong>: Prepare for occasional failures by implementing retry logic</li>;
          <li><strong > Monitor webhook activity</strong>: Use the Developer Portal to view webhook delivery history and logs</li>;
    );
          <li><code>X-Zion-Signature</code>:HMAC-SHA256 signature</li>;
          <li><code>X-Zion-Timestamp</code>:Unix timestamp when the webhook was sent</li>;
        <p>Here's an example of verifying a webhook in Node.js:</p>;

        <h2>Testing Webhooks</h2>;
        <h2>Best Practices</h2>;
          <li><strong>Respond quickly</strong>:Return a 200 response as soon as you receive the webhook, then process it asynchronously</li>;
          <li><strong>Verify signatures</strong>:Always verify webhook signatures to ensure requests are legitimate</li>;
          <li><strong>Implement retries</strong>:Prepare for occasional failures by implementing retry logic</li>;
          <li><strong>Monitor webhook activity</strong>:Use the Developer Portal to view webhook delivery history and logs</li>;
max-w-3xl prose prose-invert"> <h1>Webhooks</h1> <p> Webhooks allow your application to receive real-time notifications when events occur in the Zion AI Marketplace. Instead of constantly polling our API for updates, webhooks push data to your server whenever relevant events happen. </p> <h2>Supported Events</h2> <p>You can subscribe to the following webhook events:</p> <div className=" overflow-x-auto mb-6"> <table className=" w-full border-collapse"> <thead> <tr className=" border-b border-zinc-800"> <th className=" text-left py-2 px-4 text-zinc-300 font-medium">Event Type</th> <th className=" text-left py-2 px-4 text-zinc-300 font-medium">Description</th> </tr> </thead> <tbody> <tr className=" border-b border-zinc-800"> <td className=" py-2 px-4 text-white font-mono">new application</td> <td className=" py-2 px-4 text-zinc-300">Triggered when a talent applies to one of your job postings</td> </tr> <tr className=" border-b border-zinc-800"> <td className=" py-2 px-4 text-white font-mono">talent hired</td> <td className=" py-2 px-4 text-zinc-300">Triggered when a talent is hired for a project</td> </tr> <tr className=" border-b border-zinc-800"> <td className=" py-2 px-4 text-white font-mono">quote received</td> <td className=" py-2 px-4 text-zinc-300">Triggered when you receive a quote request</td> </tr> <tr> <td className=" py-2 px-4 text-white font-mono">message received</td> <td className=" py-2 px-4 text-zinc-300">Triggered when you receive a new message</td> </tr> </tbody> </table> </div> <h2>Setting Up Webhooks</h2> <p> You can configure webhooks in the <a href=" /developers/portal"className=" text-zion-cyan">Developer Portal under the Webhooks tab. For each webhook, you'll need to provide: </p> <ul> <li>A name for the webhook (for your reference) </li> <li>The window.URL where you want to receive webhook events</li> <li>The event types you want to subscribe to</li> </ul> <p> After creating a webhook, you'll be given a webhook secret that you should use to verify that incoming requests are genuinely from Zion. </p> <h2>Webhook Payload Format</h2> <p>All webhook payloads follow a common format:</p> <Tabs defaultValue=" new application"> <TabsList> <TabsTrigger value=" new application">New Application <TabsTrigger value=" talent hired">Talent Hired <TabsTrigger value=" quote received">Quote Received <TabsTrigger value=" message received">Message Received    <h2>Verifying Webhook Signatures</h2> <p> To ensure webhook requests are genuinely from Zion, you should verify the signature included in each request. We include two HTTP headers with each webhook request: </p> <ul> <li><code>X-Zion-Signature</code>: HMAC-SHA256 signature</li> <li><code>X-Zion-Timestamp</code>: Unix timestamp when the webhook was sent</li> </ul> <p>Here's an example of verifying a webhook in Node.js:</p> <h2>Testing Webhooks</h2> <p> You can test your webhook implementation using the Developer Portal. From the Webhooks tab;
select " Test Webhook" next to any configured webhook to send a test payload to your endpoint. </p> <h2>Best Practices</h2> <ul> <li><strong>Respond quickly</strong>: Return a 200 response as soon as you receive the webhook, then process it asynchronously</li> <li><strong>Verify signatures</strong>: Always verify webhook signatures to ensure requests are legitimate</li> <li><strong>Implement retries</strong>: Prepare for occasional failures by implementing retry logic</li> <li><strong>Monitor webhook activity</strong>: Use the Developer Portal to view webhook delivery history and logs</li> </ul> </div> )""`;
pr-12325
