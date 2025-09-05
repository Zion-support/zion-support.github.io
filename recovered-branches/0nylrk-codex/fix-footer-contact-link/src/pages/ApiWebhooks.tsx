
<<<<<<< HEAD
import React from "react",;
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",;
import { CodeBlock } from "@/components/developers/CodeBlock",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
;
export function ApiWebhooks() {;
  // Sample webhook event payload;
  const newApplicationPayload = `{;
  "event_type":"new_application",;
  "created_at":"2023-06-10T15:42:31Z",;
  "data":{;
    "application_id":"app-123456",;
    "job_id":"job-789",;
    "talent_id":"talent-456",;
    "status":"new",;
    "cover_letter":"I'm excited to apply for this position...",;
    "resume_url":"https://storage.zionai.com/resumes/resume-123.pdf",;
    "created_at":"2023-06-10T15:42:31Z";
  }
}`,;
;
  const newHirePayload = `{;
  "event_type":"talent_hired",;
  "created_at":"2023-06-12T09:15:22Z",;
  "data":{;
    "project_id":"project-123",;
    "job_id":"job-456",;
    "client_id":"client-789",;
    "talent_id":"talent-123",;
    "start_date":"2023-07-01",;
    "status":"offer_accepted",;
    "created_at":"2023-06-12T09:15:22Z";
  }
}`,;
;
  const quoteReceivedPayload = `{;
  "event_type":"quote_received",;
  "created_at":"2023-06-15T11:30:00Z",;
  "data":{;
    "quote_id":"quote-123",;
    "client_id":"client-456",;
    "talent_id":"talent-789",;
    "project_name":"Website Redesign",;
    "budget_min":5000,;
    "budget_max":8000,;
    "status":"new",;
    "created_at":"2023-06-15T11:30:00Z";
  }
}`,;
;
  const messageReceivedPayload = `{;
  "event_type":"message_received",;
  "created_at":"2023-06-18T14:22:15Z",;
  "data":{;
    "message_id":"msg-123",;
    "conversation_id":"conv-456",;
    "sender_id":"user-789",;
    "recipient_id":"user-012",;
    "content":"Hi, I'd like to discuss the project details.",;
    "created_at":"2023-06-18T14:22:15Z";
  }
}`,;
;
  const webhookHandlerJs = `// Express.js webhook handler example;
const express = require('express'),;
const app = express(),;
const crypto = require('crypto'),;
;
// Middleware to parse JSON bodies;
app.use(express.json()),;
;
// Your webhook secret from the Zion dashboard;
const webhookSecret = 'YOUR_WEBHOOK_SECRET',;
;
// Middleware to verify webhook signatures;
function verifyWebhookSignature(req, res, next) {;
  const signature = req.headers['x-zion-signature'],;
  const timestamp = req.headers['x-zion-timestamp'],;
  ;
  if (!signature || !timestamp) {;
    return res.status(401).send('Missing signature or timestamp'),;
  }
  ;
  // Verify the signature;
  const payload = timestamp + '.' + JSON.stringify(req.body),;
  const expectedSignature = crypto;
    .createHmac('sha256', webhookSecret);
    .update(payload);
    .digest('hex'),;
  ;
  if (signature !== expectedSignature) {;
    return res.status(401).send('Invalid signature'),;
  }
  ;
  next(),;
}
;
// Webhook endpoint with signature verification;
app.post('/webhooks/zion', verifyWebhookSignature, (req, res) => {;
  const { event_type, data } = req.body,;
  ;
  // Handle different event types;
  switch (event_type) {;
    case 'new_application':;
      // // // console.log('New application received:', data.application_id),;
      // Process the new application...;
      break,;
    ;
    case 'talent_hired':;
      // // // console.log('Talent hired:', data.talent_id),;
      // Update your system...;
      break,;
    ;
    case 'quote_received':;
      // // // console.log('New quote received:', data.quote_id),;
      // Process the quote...;
      break,;
    ;
    case 'message_received':;
      // // // console.log('New message received:', data.message_id),;
      // Process the message...;
      break,;
    ;
    default:;
      // // // console.log('Unknown event type:', event_type),;
  }
  ;
  // Always return a 200 response quickly;
  res.status(200).send('Webhook received'),;
}),;
;
app.listen(3000, () => {;
  // // // console.log('Webhook server listening on port 3000'),;
}),`,;
;
  return (;
    <ApiDocsLayout>;
      <div className="max-w-3xl prose prose-invert">;
        <h1>Webhooks</h1>;
        ;
        <p>;
          Webhooks allow your application to receive real-time notifications when events occur in the Zion AI Marketplace.;
          Instead of constantly polling our API for updates, webhooks push data to your server whenever relevant events happen.;
        </p>;
;
        <h2>Supported Events</h2>;
        <p>You can subscribe to the following webhook events:</p>;
        ;
        <div className="overflow-x-auto mb-6">;
          <table className="w-full border-collapse">;
            <thead>;
              <tr className="border-b border-zinc-800">;
                <th className="text-left py-2 px-4 text-zinc-300 font-medium">Event Type</th>;
                <th className="text-left py-2 px-4 text-zinc-300 font-medium">Description</th>;
              </tr>;
            </thead>;
            <tbody>;
              <tr className="border-b border-zinc-800">;
                <td className="py-2 px-4 text-white font-mono">new_application</td>;
                <td className="py-2 px-4 text-zinc-300">Triggered when a talent applies to one of your job postings</td>;
              </tr>;
              <tr className="border-b border-zinc-800">;
                <td className="py-2 px-4 text-white font-mono">talent_hired</td>;
                <td className="py-2 px-4 text-zinc-300">Triggered when a talent is hired for a project</td>;
              </tr>;
              <tr className="border-b border-zinc-800">;
                <td className="py-2 px-4 text-white font-mono">quote_received</td>;
                <td className="py-2 px-4 text-zinc-300">Triggered when you receive a quote request</td>;
              </tr>;
              <tr>;
                <td className="py-2 px-4 text-white font-mono">message_received</td>;
                <td className="py-2 px-4 text-zinc-300">Triggered when you receive a new message</td>;
              </tr>;
            </tbody>;
          </table>;
        </div>;
;
        <h2>Setting Up Webhooks</h2>;
        <p>;
          You can configure webhooks in the <a href="/developers/portal" className="text-zion-cyan">Developer Portal</a> under the Webhooks tab.;
          For each webhook, you'll need to provide:;
        </p>;
        ;
        <ul>;
          <li>A name for the webhook (for your reference)</li>;
          <li>The URL where you want to receive webhook events</li>;
          <li>The event types you want to subscribe to</li>;
        </ul>;
        ;
        <p>;
          After creating a webhook, you'll be given a webhook secret that you should use to verify that incoming requests are genuinely from Zion.;
        </p>;
;
        <h2>Webhook Payload Format</h2>;
        <p>All webhook payloads follow a common format:</p>;
        ;
        <Tabs defaultValue="new_application">;
          <TabsList>;
            <TabsTrigger value="new_application">New Application</TabsTrigger>;
            <TabsTrigger value="talent_hired">Talent Hired</TabsTrigger>;
            <TabsTrigger value="quote_received">Quote Received</TabsTrigger>;
            <TabsTrigger value="message_received">Message Received</TabsTrigger>;
          </TabsList>;
          <TabsContent value="new_application">;
            <CodeBlock code={newApplicationPayload} language="json" showLineNumbers={true} />;
          </TabsContent>;
          <TabsContent value="talent_hired">;
            <CodeBlock code={newHirePayload} language="json" showLineNumbers={true} />;
          </TabsContent>;
          <TabsContent value="quote_received">;
            <CodeBlock code={quoteReceivedPayload} language="json" showLineNumbers={true} />;
          </TabsContent>;
          <TabsContent value="message_received">;
            <CodeBlock code={messageReceivedPayload} language="json" showLineNumbers={true} />;
          </TabsContent>;
        </Tabs>;
;
        <h2>Verifying Webhook Signatures</h2>;
        <p>;
          To ensure webhook requests are genuinely from Zion, you should verify the signature included in each request.;
          We include two HTTP headers with each webhook request:;
        </p>;
        ;
        <ul>;
          <li><code>X-Zion-Signature</code>:HMAC-SHA256 signature</li>;
          <li><code>X-Zion-Timestamp</code>:Unix timestamp when the webhook was sent</li>;
        </ul>;
        ;
        <p>Here's an example of verifying a webhook in Node.js:</p>;
        ;
        <CodeBlock code={webhookHandlerJs} language="javascript" showLineNumbers={true} />;
;
        <h2>Testing Webhooks</h2>;
        <p>;
          You can test your webhook implementation using the Developer Portal. From the Webhooks tab,;
          select "Test Webhook" next to any configured webhook to send a test payload to your endpoint.;
        </p>;
        ;
        <h2>Best Practices</h2>;
        <ul>;
          <li><strong>Respond quickly</strong>:Return a 200 response as soon as you receive the webhook, then process it asynchronously</li>;
          <li><strong>Verify signatures</strong>:Always verify webhook signatures to ensure requests are legitimate</li>;
          <li><strong>Implement retries</strong>:Prepare for occasional failures by implementing retry logic</li>;
          <li><strong>Monitor webhook activity</strong>:Use the Developer Portal to view webhook delivery history and logs</li>;
        </ul>;
      </div>;
    </ApiDocsLayout>;
  ),;
=======
import React from "react",
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",
import { CodeBlock } from "@/components/developers/CodeBlock",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
export function ApiWebhooks() {
  // Sample webhook event payload,
const newApplicationPayload = `{
  &quot;eventtype&quot;: &quot;newapplication&quot;,
  &quot;createdat&quot;: &quot;2023-06-10T15:42:31Z&quot;,
  &quot;data&quot;: {
    &quot;applicationid&quot;: &quot;app-123456&quot;,
    &quot;jobid&quot;: &quot;job-789&quot;,
    &quot;talentid&quot;: &quot;talent-456&quot;,
    &quot;status&quot;: &quot;new&quot;,
    &quot;coverletter&quot;: &quot;I'm excited to apply for this position...&quot;,
    &quot;resumeurl&quot;: &quot;https://storage.zionai.com/resumes/resume-123.pdf&quot;,
    &quot;createdat&quot;: &quot;2023-06-10T15:42:31Z&quot
  }
}`,

  const newHirePayload = `{
  &quot;eventtype&quot;: &quot;talenthired&quot;,
  &quot;createdat&quot;: &quot;2023-06-12T09:15:22Z&quot;,
  &quot;data&quot;: {
    &quot;projectid&quot;: &quot;project-123&quot;,
    &quot;jobid&quot;: &quot;job-456&quot;,
    &quot;clientid&quot;: &quot;client-789&quot;,
    &quot;talentid&quot;: &quot;talent-123&quot;,
    &quot;startdate&quot;: &quot;2023-07-01&quot;,
    &quot;status&quot;: &quot;offeraccepted&quot;,
    &quot;createdat&quot;: &quot;2023-06-12T09:15:22Z&quot
  }
}`,

  const quoteReceivedPayload = `{
  &quot;eventtype&quot;: &quot;quotereceived&quot;,
  &quot;createdat&quot;: &quot;2023-06-15T11:30:00Z&quot;,
  &quot;data&quot;: {
    &quot;quoteid&quot;: &quot;quote-123&quot;,
    &quot;clientid&quot;: &quot;client-456&quot;,
    &quot;talentid&quot;: &quot;talent-789&quot;,
    &quot;projectname&quot;: &quot;Website Redesign&quot;,
    &quot;budgetmin&quot;: 5000,
    &quot;budgetmax&quot;: 8000,
    &quot;status&quot;: &quot;new&quot;,
    &quot;createdat&quot;: &quot;2023-06-15T11:30:00Z&quot
  }
}`,

  const messageReceivedPayload = `{
  &quot;eventtype&quot;: &quot;messagereceived&quot;,
  &quot;createdat&quot;: &quot;2023-06-18T14:22:15Z&quot;,
  &quot;data&quot;: {
    &quot;messageid&quot;: &quot;msg-123&quot;,
    &quot;conversationid&quot;: &quot;conv-456&quot;,
    &quot;senderid&quot;: &quot;user-789&quot;,
    &quot;recipientid&quot;: &quot;user-012&quot;,
    &quot;content&quot;: &quot;Hi, I'd like to discuss the project details.&quot;,
    &quot;createdat&quot;: &quot;2023-06-18T14:22:15Z&quot
  }
}`,

  const webhookHandlerJs = `// Express.js webhook handler example,
const express = require('express'),
const app = express(),
const crypto = require('crypto'),
import React from "react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";

export function ApiWebhooks() {_// Sample webhook event payload,
const newApplicationPayload = `{
  "eventtype": "newapplication", _"createdat": "2023-06-10T15:42:31Z", _"data": {
    "applicationid": "app-123456", _"jobid": "job-789", _"talentid": "talent-456", _"status": "new", _"coverletter": "I'm excited to apply for this position...", _"resumeurl": "https://storage.zionai.com/resumes/resume-123.pdf", _"createdat": "2023-06-10T15:42:31Z"}
}`;

  const newHirePayload = `{_"eventtype": "talenthired", _"createdat": "2023-06-12T09:15:22Z", _"data": {
    "projectid": "project-123", _"jobid": "job-456", _"clientid": "client-789", _"talentid": "talent-123", _"startdate": "2023-07-01", _"status": "offeraccepted", _"createdat": "2023-06-12T09:15:22Z"}
}`;

  const quoteReceivedPayload = `{_"eventtype": "quotereceived", _"createdat": "2023-06-15T11:30:00Z", _"data": {
    "quoteid": "quote-123", _"clientid": "client-456", _"talentid": "talent-789", _"projectname": "Website Redesign", _"budgetmin": 5000, _"budgetmax": 8000, _"status": "new", _"createdat": "2023-06-15T11:30:00Z"}
}`;

  const messageReceivedPayload = `{_"eventtype": "messagereceived", _"createdat": "2023-06-18T14:22:15Z", _"data": {
    "messageid": "msg-123", _"conversationid": "conv-456", _"senderid": "user-789", _"recipientid": "user-012", _"content": "Hi, I'd like to discuss the project details.", _"createdat": "2023-06-18T14:22:15Z"}
}`;

  const webhookHandlerJs = `// Express.js webhook handler example,
const express = require('express');
const app = express();
const crypto = require('window.crypto');

// Middleware to parse JSON bodies,
app.use(express.json()),

// Your webhook secret from the Zion dashboard,
const webhookSecret = 'YOURWEBHOOK_SECRET',

// Middleware to verify webhook signatures,
function verifyWebhookSignature(req, res, next) {
  const signature = req.headers['x-zion-signature'],
  const timestamp = req.headers['x-zion-timestamp'],
  
  if (!signature || !timestamp) {
    return res.status(401).send('Missing signature or timestamp')
  }
  
  // Verify the signature,
const payload = timestamp + '.' + JSON.stringify(req.body),
  const expectedSignature = crypto    .createHmac('sha256', webhookSecret)
    .update(payload)
    .digest('hex'),
  
  if (signature !== expectedSignature) {
    return res.status(401).send('Invalid signature')
  }  
  next()
}

// Webhook endpoint with signature verification,
app.post('/webhooks/zion', verifyWebhookSignature, (req, res) => {
  const { eventtype, data } = req.body,
  
  // Handle different event types,
switch (eventtype) {
    case 'newapplication':
      // // // console.log('New application received:', data.applicationid),app.post(_'/webhooks/zion', verifyWebhookSignature, _(req, res) => {const { eventtype, data} = req.body;
  
  // Handle different event types,
switch (eventtype) {case 'newapplication':
      
      // Process the new application...
      break,
    
    case 'talenthired':
      // // // console.log('Talent hired:', data.talentid),      
      // Update your system...
      break,
    
    case 'quotereceived':
      // // // console.log('New quote received:', data.quoteid),      
      // Process the quote...
      break,
    
    case 'messagereceived':
      // // // console.log('New message received:', data.messageid),      
      // Process the message...
      break,
    
    default:
      // // // console.log('Unknown event type:', eventtype)  }
    default:}
  
  // Always return a 200 response quickly,
res.status(200).send('Webhook received')
}),

app.listen(3000, () => {
  // // // console.log('Webhook server listening on port 3000')
}),`,app.listen(3000, _() => {});`;

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
                <td className=&quot;py-2 px-4 text-white font-mono&quot;>newapplication</td>
                <td className=&quot;py-2 px-4 text-zinc-300&quot;>Triggered when a talent applies to one of your job postings</td>
              </tr>
              <tr className=&quot;border-b border-zinc-800&quot;>
                <td className=&quot;py-2 px-4 text-white font-mono&quot;>talenthired</td>
                <td className=&quot;py-2 px-4 text-zinc-300&quot;>Triggered when a talent is hired for a project</td>
              </tr>
              <tr className=&quot;border-b border-zinc-800&quot;>
                <td className=&quot;py-2 px-4 text-white font-mono&quot;>quotereceived</td>
                <td className=&quot;py-2 px-4 text-zinc-300&quot;>Triggered when you receive a quote request</td>
              </tr>
              <tr>
                <td className=&quot;py-2 px-4 text-white font-mono&quot;>messagereceived</td>
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
        
        <Tabs defaultValue=&quot;newapplication&quot;>
          <TabsList>
            <TabsTrigger value=&quot;newapplication&quot;>New Application</TabsTrigger>
            <TabsTrigger value=&quot;talenthired&quot;>Talent Hired</TabsTrigger>
            <TabsTrigger value=&quot;quotereceived&quot;>Quote Received</TabsTrigger>
            <TabsTrigger value=&quot;messagereceived&quot;>Message Received</TabsTrigger>
          </TabsList>
          <TabsContent value=&quot;newapplication&quot;>
            <CodeBlock code={newApplicationPayload} language=&quot;json&quot; showLineNumbers={true} />
          </TabsContent>
          <TabsContent value=&quot;talenthired&quot;>
            <CodeBlock code={newHirePayload} language=&quot;json&quot; showLineNumbers={true} />
          </TabsContent>
          <TabsContent value=&quot;quotereceived&quot;>
            <CodeBlock code={quoteReceivedPayload} language=&quot;json&quot; showLineNumbers={true} />
          </TabsContent>
          <TabsContent value=&quot;messagereceived&quot;>
            <CodeBlock code={messageReceivedPayload} language=&quot;json&quot; showLineNumbers={true} />          </TabsContent>
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
        
        <CodeBlock code={webhookHandlerJs} language=&quot;javascript&quot; showLineNumbers={true} />
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
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
;
export default ApiWebhooks,;
