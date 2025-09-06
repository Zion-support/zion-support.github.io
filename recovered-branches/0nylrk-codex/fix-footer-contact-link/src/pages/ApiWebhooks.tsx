


export function ApiWebhooks() {
  // Sample webhook event payload

  const newApplicationPayload = `{
  "event_type": "new_application",
  "created_at": "2023-06-10T15:42:31Z",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  "data": {

    "application_id": "app-123456",
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
  "data": {

    "project_id": "project-123",
    "job_id": "job-456",
    "client_id": "client-789",
    "talent_id": "talent-123",
    "start_date": "2023-07-01",
    "status": "offer_accepted",
    "created_at": "2023-06-12T09:15:22Z"
  }
}`,


  const quoteReceivedPayload = `{
  "event_type": "quote_received",
  "created_at": "2023-06-15T11:30:00Z",
  "data": {

    "quote_id": "quote-123",
    "client_id": "client-456",
    "talent_id": "talent-789",
    "project_name": "Website Redesign",
    "budget_min": 5000,
    "budget_max": 8000,
    "status": "new",
    "created_at": "2023-06-15T11:30:00Z"
  }
}`,

  const messageReceivedPayload = `{

}

// Webhook endpoint with signature verification
app.post('/webhooks/zion', verifyWebhookSignature, (req, res) => {
  const { event_type, data } = req.body,
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  // Handle different event types
  switch (event_type) {
    case 'new_application':
      // // // console.log('New application received:', data.application_id),
      // Process the new application...

      break,
    

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
    

    default:
      // // // console.log('Unknown event type:', event_type)
  }
  // Always return a 200 response quickly
  res.status(200).send('Webhook received')

}),

app.listen(3000, () => {
  // // // console.log('Webhook server listening on port 3000')
}),`,


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
          You can configure webhooks in the <a href="/developers/portal" className="text-zion-cyan">Developer Portal</Link> under the Webhooks tab.
          For each webhook, you'll need to provide:
        </p>
        <ul>
          <li>A name for the webhook (for your reference)</li>
          <li>The URL where you want to receive webhook events</li>
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
            <CodeBlock code={newApplicationPayload} language="json" showLineNumbers={true} />
          </TabsContent>
          <TabsContent value="talent_hired">
            <CodeBlock code={newHirePayload} language="json" showLineNumbers={true} />
          </TabsContent>
          <TabsContent value="quote_received">
            <CodeBlock code={quoteReceivedPayload} language="json" showLineNumbers={true} />
          </TabsContent>
          <TabsContent value="message_received">
            <CodeBlock code={messageReceivedPayload} language="json" showLineNumbers={true} />
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
        <CodeBlock code={webhookHandlerJs} language="javascript" showLineNumbers={true} />
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
  )

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
  return (;
    <ApiDocsLayout>;
      <div className="max-w-3xl prose prose-invert">;
        <h1>Webhooks</h1>;
        <p>;
          Webhooks allow your application to receive real-time notifications when events occur in the Zion AI Marketplace.;
          Instead of constantly polling our API for updates, webhooks push data to your server whenever relevant events happen.;
        </p>;
        <h2>Supported Events</h2>;
        <p>You can subscribe to the following webhook events:</p>;
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
        <h2>Setting Up Webhooks</h2>;
        <p>;
          You can configure webhooks in the <a href="/developers/portal" className="text-zion-cyan">Developer Portal</a> under the Webhooks tab.;
          For each webhook, you'll need to provide:;
        </p>;
        <ul>;
          <li>A name for the webhook (for your reference)</li>;
          <li>The URL where you want to receive webhook events</li>;
          <li>The event types you want to subscribe to</li>;
        </ul>;
        <p>;
          After creating a webhook, you'll be given a webhook secret that you should use to verify that incoming requests are genuinely from Zion.;
        </p>;
        <h2>Webhook Payload Format</h2>;
        <p>All webhook payloads follow a common format:</p>;
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
        <h2>Verifying Webhook Signatures</h2>;
        <p>;
          To ensure webhook requests are genuinely from Zion, you should verify the signature included in each request.;
          We include two HTTP headers with each webhook request:;
        </p>;
        <ul>;
          <li><code>X-Zion-Signature</code>: HMAC-SHA256 signature</li>;
          <li><code>X-Zion-Timestamp</code>: Unix timestamp when the webhook was sent</li>;
        </ul>;
        <p>Here's an example of verifying a webhook in Node.js:</p>;
        <CodeBlock code={webhookHandlerJs} language="javascript" showLineNumbers={true} />;
        <h2>Testing Webhooks</h2>;
        <p>;
          You can test your webhook implementation using the Developer Portal. From the Webhooks tab;
          select "Test Webhook" next to any configured webhook to send a test payload to your endpoint.;
        </p>;
        <h2>Best Practices</h2>;
        <ul>;
          <li><strong>Respond quickly</strong>: Return a 200 response as soon as you receive the webhook, then process it asynchronously</li>;
          <li><strong>Verify signatures</strong>: Always verify webhook signatures to ensure requests are legitimate</li>;
          <li><strong>Implement retries</strong>: Prepare for occasional failures by implementing retry logic</li>;
          <li><strong>Monitor webhook activity</strong>: Use the Developer Portal to view webhook delivery history and logs</li>;
        </ul>;
      </div>;
    </ApiDocsLayout>;
  );
}
;

export default ApiWebhooks;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
