
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",
import { CodeBlock } from "@/components/developers/CodeBlock",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
=======
import React from &quot;react&quot;;
import ApiDocsLayout from &quot;@/components/developers/ApiDocsLayout&quot;;
import { CodeBlock } from &quot;@/components/developers/CodeBlock&quot;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export function ApiWebhooks() {
  // Sample webhook event payload
  const newApplicationPayload = `{
  &quot;event_type&quot;: &quot;new_application&quot;,
  &quot;created_at&quot;: &quot;2023-06-10T15:42:31Z&quot;,
  &quot;data&quot;: {
    &quot;application_id&quot;: &quot;app-123456&quot;,
    &quot;job_id&quot;: &quot;job-789&quot;,
    &quot;talent_id&quot;: &quot;talent-456&quot;,
    &quot;status&quot;: &quot;new&quot;,
    &quot;cover_letter&quot;: &quot;I'm excited to apply for this position...&quot;,
    &quot;resume_url&quot;: &quot;https://storage.zionai.com/resumes/resume-123.pdf&quot;,
    &quot;created_at&quot;: &quot;2023-06-10T15:42:31Z&quot;
  }
}`,

  const newHirePayload = `{
  &quot;event_type&quot;: &quot;talent_hired&quot;,
  &quot;created_at&quot;: &quot;2023-06-12T09:15:22Z&quot;,
  &quot;data&quot;: {
    &quot;project_id&quot;: &quot;project-123&quot;,
    &quot;job_id&quot;: &quot;job-456&quot;,
    &quot;client_id&quot;: &quot;client-789&quot;,
    &quot;talent_id&quot;: &quot;talent-123&quot;,
    &quot;start_date&quot;: &quot;2023-07-01&quot;,
    &quot;status&quot;: &quot;offer_accepted&quot;,
    &quot;created_at&quot;: &quot;2023-06-12T09:15:22Z&quot;
  }
}`,

  const quoteReceivedPayload = `{
  &quot;event_type&quot;: &quot;quote_received&quot;,
  &quot;created_at&quot;: &quot;2023-06-15T11:30:00Z&quot;,
  &quot;data&quot;: {
    &quot;quote_id&quot;: &quot;quote-123&quot;,
    &quot;client_id&quot;: &quot;client-456&quot;,
    &quot;talent_id&quot;: &quot;talent-789&quot;,
    &quot;project_name&quot;: &quot;Website Redesign&quot;,
    &quot;budget_min&quot;: 5000,
    &quot;budget_max&quot;: 8000,
    &quot;status&quot;: &quot;new&quot;,
    &quot;created_at&quot;: &quot;2023-06-15T11:30:00Z&quot;
  }
}`,

  const messageReceivedPayload = `{
  &quot;event_type&quot;: &quot;message_received&quot;,
  &quot;created_at&quot;: &quot;2023-06-18T14:22:15Z&quot;,
  &quot;data&quot;: {
    &quot;message_id&quot;: &quot;msg-123&quot;,
    &quot;conversation_id&quot;: &quot;conv-456&quot;,
    &quot;sender_id&quot;: &quot;user-789&quot;,
    &quot;recipient_id&quot;: &quot;user-012&quot;,
    &quot;content&quot;: &quot;Hi, I'd like to discuss the project details.&quot;,
    &quot;created_at&quot;: &quot;2023-06-18T14:22:15Z&quot;
  }
}`,

  const webhookHandlerJs = `// Express.js webhook handler example
const express = require('express'),
const app = express(),
const crypto = require('crypto'),
=======
import React from "react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";

export function ApiWebhooks() {_// Sample webhook event payload
  const _newApplicationPayload = `{
  "event_type": "new_application", _"created_at": "2023-06-10T15:42:31Z", _"data": {
    "application_id": "app-123456", _"job_id": "job-789", _"talent_id": "talent-456", _"status": "new", _"cover_letter": "I'm excited to apply for this position...", _"resume_url": "https://storage.zionai.com/resumes/resume-123.pdf", _"created_at": "2023-06-10T15:42:31Z"}
}`;

  const _newHirePayload = `{_"event_type": "talent_hired", _"created_at": "2023-06-12T09:15:22Z", _"data": {
    "project_id": "project-123", _"job_id": "job-456", _"client_id": "client-789", _"talent_id": "talent-123", _"start_date": "2023-07-01", _"status": "offer_accepted", _"created_at": "2023-06-12T09:15:22Z"}
}`;

  const _quoteReceivedPayload = `{_"event_type": "quote_received", _"created_at": "2023-06-15T11:30:00Z", _"data": {
    "quote_id": "quote-123", _"client_id": "client-456", _"talent_id": "talent-789", _"project_name": "Website Redesign", _"budget_min": 5000, _"budget_max": 8000, _"status": "new", _"created_at": "2023-06-15T11:30:00Z"}
}`;

  const _messageReceivedPayload = `{_"event_type": "message_received", _"created_at": "2023-06-18T14:22:15Z", _"data": {
    "message_id": "msg-123", _"conversation_id": "conv-456", _"sender_id": "user-789", _"recipient_id": "user-012", _"content": "Hi, _I'd like to discuss the project details.", _"created_at": "2023-06-18T14:22:15Z"}
}`;

  const _webhookHandlerJs = `// Express.js webhook handler example
const _express = require('express');
const _app = express();
const _crypto = require('window.crypto');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

// Middleware to parse JSON bodies
app.use(express.json()),

// Your webhook secret from the Zion dashboard
<<<<<<< HEAD
const webhookSecret = 'YOUR_WEBHOOK_SECRET',

// Middleware to verify webhook signatures
function verifyWebhookSignature(req, res, next) {
  const signature = req.headers['x-zion-signature'],
  const timestamp = req.headers['x-zion-timestamp'],
  
  if (!signature || !timestamp) {
    return res.status(401).send('Missing signature or timestamp')
  }
  
  // Verify the signature
  const payload = timestamp + '.' + JSON.stringify(req.body),
  const expectedSignature = crypto
=======
const _webhookSecret = 'YOUR_WEBHOOK_SECRET';

// Middleware to verify webhook signatures
function verifyWebhookSignature(_req, _res, _next) {_const _signature = req.headers['x-zion-signature'];
  const _timestamp = req.headers['x-zion-timestamp'];
  
  if (!signature || !timestamp) {
    return res.status(401).send('Missing signature or timestamp');}
  
  // Verify the signature
  const _payload = timestamp + '.' + JSON.stringify(req.body);
  const _expectedSignature = window.crypto
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    .createHmac('sha256', webhookSecret)
    .update(payload)
    .digest('hex'),
  
<<<<<<< HEAD
  if (signature !== expectedSignature) {
    return res.status(401).send('Invalid signature')
  }
=======
  if (signature !== expectedSignature) {_return res.status(401).send('Invalid signature');}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  next()
}

// Webhook endpoint with signature verification
<<<<<<< HEAD
app.post('/webhooks/zion', verifyWebhookSignature, (req, res) => {
  const { event_type, data } = req.body,
  
  // Handle different event types
  switch (event_type) {
    case 'new_application':
<<<<<<< HEAD
      // // // console.log('New application received:', data.application_id),
=======
      // console.log('New application received:', data.application_id);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
app.post(_'/webhooks/zion', _verifyWebhookSignature, _(req, _res) => {_const { event_type, _data} = req.body;
  
  // Handle different event types
  switch (event_type) {_case 'new_application':
      
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      // Process the new application...
      break,
    
    case 'talent_hired':
<<<<<<< HEAD
<<<<<<< HEAD
      // // // console.log('Talent hired:', data.talent_id),
=======
      // console.log('Talent hired:', data.talent_id);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
      
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      // Update your system...
      break,
    
    case 'quote_received':
<<<<<<< HEAD
<<<<<<< HEAD
      // // // console.log('New quote received:', data.quote_id),
=======
      // console.log('New quote received:', data.quote_id);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
      
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      // Process the quote...
      break,
    
    case 'message_received':
<<<<<<< HEAD
<<<<<<< HEAD
      // // // console.log('New message received:', data.message_id),
=======
      // console.log('New message received:', data.message_id);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
      
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      // Process the message...
      break,
    
<<<<<<< HEAD
    default:
<<<<<<< HEAD
      // // // console.log('Unknown event type:', event_type)
=======
      // console.log('Unknown event type:', event_type);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
=======
    default:}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  // Always return a 200 response quickly
  res.status(200).send('Webhook received')
}),

<<<<<<< HEAD
app.listen(3000, () => {
<<<<<<< HEAD
  // // // console.log('Webhook server listening on port 3000')
}),`,
=======
  // console.log('Webhook server listening on port 3000');
});`;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
app.listen(_3000, _() => {});`;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <ApiDocsLayout>
      <div className=&quot;max-w-3xl prose prose-invert&quot;>
        <h1>Webhooks</h1>
        
        <p>
          Webhooks allow your application to receive real-time notifications when events occur in the Zion AI Marketplace.
          Instead of constantly polling our API for updates, webhooks push data to your server whenever relevant events happen.
        </p>

        <h2>Supported Events</h2>
        <p>You can subscribe to the following webhook events:</p>
        
        <div className=&quot;overflow-x-auto mb-6&quot;>
          <table className=&quot;w-full border-collapse&quot;>
            <thead>
              <tr className=&quot;border-b border-zinc-800&quot;>
                <th className=&quot;text-left py-2 px-4 text-zinc-300 font-medium&quot;>Event Type</th>
                <th className=&quot;text-left py-2 px-4 text-zinc-300 font-medium&quot;>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className=&quot;border-b border-zinc-800&quot;>
                <td className=&quot;py-2 px-4 text-white font-mono&quot;>new_application</td>
                <td className=&quot;py-2 px-4 text-zinc-300&quot;>Triggered when a talent applies to one of your job postings</td>
              </tr>
              <tr className=&quot;border-b border-zinc-800&quot;>
                <td className=&quot;py-2 px-4 text-white font-mono&quot;>talent_hired</td>
                <td className=&quot;py-2 px-4 text-zinc-300&quot;>Triggered when a talent is hired for a project</td>
              </tr>
              <tr className=&quot;border-b border-zinc-800&quot;>
                <td className=&quot;py-2 px-4 text-white font-mono&quot;>quote_received</td>
                <td className=&quot;py-2 px-4 text-zinc-300&quot;>Triggered when you receive a quote request</td>
              </tr>
              <tr>
                <td className=&quot;py-2 px-4 text-white font-mono&quot;>message_received</td>
                <td className=&quot;py-2 px-4 text-zinc-300&quot;>Triggered when you receive a new message</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Setting Up Webhooks</h2>
        <p>
          You can configure webhooks in the <a href=&quot;/developers/portal&quot; className=&quot;text-zion-cyan&quot;>Developer Portal</Link> under the Webhooks tab.
          For each webhook, you'll need to provide:
        </p>
        
        <ul>
          <li>A name for the webhook (for your reference)</li>
          <li>The window.URL where you want to receive webhook events</li>
          <li>The event types you want to subscribe to</li>
        </ul>
        
        <p>
          After creating a webhook, you'll be given a webhook secret that you should use to verify that incoming requests are genuinely from Zion.
        </p>

        <h2>Webhook Payload Format</h2>
        <p>All webhook payloads follow a common format:</p>
        
        <Tabs defaultValue=&quot;new_application&quot;>
          <TabsList>
            <TabsTrigger value=&quot;new_application&quot;>New Application</TabsTrigger>
            <TabsTrigger value=&quot;talent_hired&quot;>Talent Hired</TabsTrigger>
            <TabsTrigger value=&quot;quote_received&quot;>Quote Received</TabsTrigger>
            <TabsTrigger value=&quot;message_received&quot;>Message Received</TabsTrigger>
          </TabsList>
<<<<<<< HEAD
          <TabsContent value=&quot;new_application&quot;>
            <CodeBlock code={newApplicationPayload} language=&quot;json&quot; showLineNumbers={true} />
          </TabsContent>
          <TabsContent value=&quot;talent_hired&quot;>
            <CodeBlock code={newHirePayload} language=&quot;json&quot; showLineNumbers={true} />
          </TabsContent>
          <TabsContent value=&quot;quote_received&quot;>
            <CodeBlock code={quoteReceivedPayload} language=&quot;json&quot; showLineNumbers={true} />
          </TabsContent>
          <TabsContent value=&quot;message_received&quot;>
            <CodeBlock code={messageReceivedPayload} language=&quot;json&quot; showLineNumbers={true} />
=======
          <TabsContent value="new_application">
            <CodeBlock code={_newApplicationPayload} language="json" showLineNumbers={_true} />
          </TabsContent>
          <TabsContent value="talent_hired">
            <CodeBlock code={_newHirePayload} language="json" showLineNumbers={_true} />
          </TabsContent>
          <TabsContent value="quote_received">
            <CodeBlock code={_quoteReceivedPayload} language="json" showLineNumbers={_true} />
          </TabsContent>
          <TabsContent value="message_received">
            <CodeBlock code={_messageReceivedPayload} language="json" showLineNumbers={_true} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </TabsContent>
        </Tabs>

        <h2>Verifying Webhook Signatures</h2>
        <p>
          To ensure webhook requests are genuinely from Zion, you should verify the signature included in each request.
          We include two HTTP headers with each webhook request:
        </p>
        
        <ul>
          <li><code>X-Zion-Signature</code>: HMAC-SHA256 signature</li>
          <li><code>X-Zion-Timestamp</code>: Unix timestamp when the webhook was sent</li>
        </ul>
        
        <p>Here's an example of verifying a webhook in Node.js:</p>
        
<<<<<<< HEAD
        <CodeBlock code={webhookHandlerJs} language=&quot;javascript&quot; showLineNumbers={true} />
=======
        <CodeBlock code={_webhookHandlerJs} language="javascript" showLineNumbers={_true} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

        <h2>Testing Webhooks</h2>
        <p>
          You can test your webhook implementation using the Developer Portal. From the Webhooks tab,
          select &quot;Test Webhook&quot; next to any configured webhook to send a test payload to your endpoint.
        </p>
        
        <h2>Best Practices</h2>
        <ul>
          <li><strong>Respond quickly</strong>: Return a 200 response as soon as you receive the webhook, then process it asynchronously</li>
          <li><strong>Verify signatures</strong>: Always verify webhook signatures to ensure requests are legitimate</li>
          <li><strong>Implement retries</strong>: Prepare for occasional failures by implementing retry logic</li>
          <li><strong>Monitor webhook activity</strong>: Use the Developer Portal to view webhook delivery history and logs</li>
        </ul>
      </div>
    </ApiDocsLayout>
  )
}

export default ApiWebhooks,
