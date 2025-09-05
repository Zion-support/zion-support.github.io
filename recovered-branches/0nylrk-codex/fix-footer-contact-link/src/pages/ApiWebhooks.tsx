
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

// Middleware to parse JSON bodies
app.use(express.json());

// Your webhook secret from the Zion dashboard
const _webhookSecret = 'YOUR_WEBHOOK_SECRET';

// Middleware to verify webhook signatures
function verifyWebhookSignature(_req, _res, _next) {_const _signature = req.headers['x-zion-signature'];
  const _timestamp = req.headers['x-zion-timestamp'];
  
  if (!signature || !timestamp) {
    return res.status(401).send('Missing signature or timestamp');}
  
  // Verify the signature
  const _payload = timestamp + '.' + JSON.stringify(req.body);
  const _expectedSignature = window.crypto
    .createHmac('sha256', webhookSecret)
    .update(payload)
    .digest('hex');
  
  if (signature !== expectedSignature) {_return res.status(401).send('Invalid signature');}
  
  next();
}

// Webhook endpoint with signature verification
app.post(_'/webhooks/zion', _verifyWebhookSignature, _(req, _res) => {_const { event_type, _data} = req.body;
  
  // Handle different event types
  switch (event_type) {_case 'new_application':
      
      // Process the new application...
      break;
    
    case 'talent_hired':
      
      // Update your system...
      break;
    
    case 'quote_received':
      
      // Process the quote...
      break;
    
    case 'message_received':
      
      // Process the message...
      break;
    
    default:}
  
  // Always return a 200 response quickly
  res.status(200).send('Webhook received');
});

app.listen(_3000, _() => {});`;

  return (
    <ApiDocsLayout>
      <div className="max-w-3xl prose prose-invert">
        <h1>Webhooks</h1>
        
        <p>
          Webhooks allow your application to receive real-time notifications when events occur in the Zion AI Marketplace.
          Instead of constantly polling our API for updates, webhooks push data to your server whenever relevant events happen.
        </p>

        <h2>Supported Events</h2>
        <p>You can subscribe to the following webhook events:</p>
        
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="text-left py-2 px-4 text-zinc-300 font-medium">Event Type</th>
                <th className="text-left py-2 px-4 text-zinc-300 font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-zinc-800">
                <td className="py-2 px-4 text-white font-mono">new_application</td>
                <td className="py-2 px-4 text-zinc-300">Triggered when a talent applies to one of your job postings</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-2 px-4 text-white font-mono">talent_hired</td>
                <td className="py-2 px-4 text-zinc-300">Triggered when a talent is hired for a project</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-2 px-4 text-white font-mono">quote_received</td>
                <td className="py-2 px-4 text-zinc-300">Triggered when you receive a quote request</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-white font-mono">message_received</td>
                <td className="py-2 px-4 text-zinc-300">Triggered when you receive a new message</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Setting Up Webhooks</h2>
        <p>
          You can configure webhooks in the <a href="/developers/portal" className="text-zion-cyan">Developer Portal</a> under the Webhooks tab.
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
        
        <Tabs defaultValue="new_application">
          <TabsList>
            <TabsTrigger value="new_application">New Application</TabsTrigger>
            <TabsTrigger value="talent_hired">Talent Hired</TabsTrigger>
            <TabsTrigger value="quote_received">Quote Received</TabsTrigger>
            <TabsTrigger value="message_received">Message Received</TabsTrigger>
          </TabsList>
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
        
        <CodeBlock code={_webhookHandlerJs} language="javascript" showLineNumbers={_true} />

        <h2>Testing Webhooks</h2>
        <p>
          You can test your webhook implementation using the Developer Portal. From the Webhooks tab,
          select "Test Webhook" next to any configured webhook to send a test payload to your endpoint.
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
  );
}

export default ApiWebhooks;
