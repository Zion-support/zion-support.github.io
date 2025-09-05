 export function ApiWebhooks () {
  //Sample webhook event payload const newApplicationPayload = ` {
  "event type" : "new application";
"created at" : "2023-06-10T15:42:31Z";
"data" : {
  "application id" : "app-123456";
"job id" : "job-789";
"talent id" : "talent-456";
"status" : "new";
"cover letter" : "I'm excited to apply for this position...";
"resume url" : "https://storage.zionai.com/resumes/resume-123.pdf";
"created at" : "2023-06-10T15:42:31Z" 
}
}`;
const newHirePayload = ` {
  "event type" : "talent hired";
"created at" : "2023-06-12T09:15:22Z";
"data" : {
  "project id" : "project-123";
"job id" : "job-456";
"client id" : "client-789";
"talent id" : "talent-123";
"start date" : "2023-07-01";
"status" : "offer accepted";
"created at" : "2023-06-12T09:15:22Z" 
}
}`;
const quoteReceivedPayload = ` {
  "event type" : "quote received";
"created at" : "2023-06-15T11:30:00Z";
"data" : {
  "quote id" : "quote-123";
"client id" : "client-456";
"talent id" : "talent-789";
"project name" : "Website Redesign";
"budget min" : 5000;
"budget max" : 8000;
"status" : "new";
"created at" : "2023-06-15T11:30:00Z" 
}
}`;
const messageReceivedPayload = ` {
  "event type" : "message received";
"created at" : "2023-06-18T14:22:15Z";
"data" : {
  "message id" : "msg-123";
"conversation id" : "conv-456";
"sender id" : "user-789";
"recipient id" : "user-012";
"content" : "Hi, I'd like to discuss the project details.";
"created at" : "2023-06-18T14:22:15Z" 
}
}`;
const webhookHandlerJs = `//Express.js webhook handler example const express = require ('express');
const app = express ();
const crypto = require ('crypto');
//Your webhook secret from the Zion dashboard .createHmac ('sha256', webhookSecret) .update (payload) .digest ('hex');
next () 
}//Webhook endpoint with signature verification case 'talent hired': case 'quote received': case 'message received': 
}
});
max-w-3xl prose prose-invert"> <h1>Webhooks</h1> <p> Webhooks allow your application to receive real-time notifications when events occur in the Zion AI Marketplace. Instead of constantly polling our API for updates, webhooks push data to your server whenever relevant events happen. </p> <h2>Supported Events</h2> <p>You can subscribe to the following webhook events:</p> <div className=" overflow-x-auto mb-6"> <table className=" w-full border-collapse"> <thead> <tr className=" border-b border-zinc-800"> <th className=" text-left py-2 px-4 text-zinc-300 font-medium">Event Type</th> <th className=" text-left py-2 px-4 text-zinc-300 font-medium">Description</th> </tr> </thead> <tbody> <tr className=" border-b border-zinc-800"> <td className=" py-2 px-4 text-white font-mono">new application</td> <td className=" py-2 px-4 text-zinc-300">Triggered when a talent applies to one of your job postings</td> </tr> <tr className=" border-b border-zinc-800"> <td className=" py-2 px-4 text-white font-mono">talent hired</td> <td className=" py-2 px-4 text-zinc-300">Triggered when a talent is hired for a project</td> </tr> <tr className=" border-b border-zinc-800"> <td className=" py-2 px-4 text-white font-mono">quote received</td> <td className=" py-2 px-4 text-zinc-300">Triggered when you receive a quote request</td> </tr> <tr> <td className=" py-2 px-4 text-white font-mono">message received</td> <td className=" py-2 px-4 text-zinc-300">Triggered when you receive a new message</td> </tr> </tbody> </table> </div> <h2>Setting Up Webhooks</h2> <p> You can configure webhooks in the <a href=" /developers/portal"className=" text-zion-cyan">Developer Portal</Link> under the Webhooks tab. For each webhook, you'll need to provide: </p> <ul> <li>A name for the webhook (for your reference) </li> <li>The window.URL where you want to receive webhook events</li> <li>The event types you want to subscribe to</li> </ul> <p> After creating a webhook, you'll be given a webhook secret that you should use to verify that incoming requests are genuinely from Zion. </p> <h2>Webhook Payload Format</h2> <p>All webhook payloads follow a common format:</p> <Tabs defaultValue=" new application"> <TabsList> <TabsTrigger value=" new application">New Application</TabsTrigger> <TabsTrigger value=" talent hired">Talent Hired</TabsTrigger> <TabsTrigger value=" quote received">Quote Received</TabsTrigger> <TabsTrigger value=" message received">Message Received</TabsTrigger> </TabsList> </TabsContent> </Tabs> <h2>Verifying Webhook Signatures</h2> <p> To ensure webhook requests are genuinely from Zion, you should verify the signature included in each request. We include two HTTP headers with each webhook request: </p> <ul> <li><code>X-Zion-Signature</code>: HMAC-SHA256 signature</li> <li><code>X-Zion-Timestamp</code>: Unix timestamp when the webhook was sent</li> </ul> <p>Here's an example of verifying a webhook in Node.js:</p> <h2>Testing Webhooks</h2> <p> You can test your webhook implementation using the Developer Portal. From the Webhooks tab;
select " Test Webhook" next to any configured webhook to send a test payload to your endpoint. </p> <h2>Best Practices</h2> <ul> <li><strong>Respond quickly</strong>: Return a 200 response as soon as you receive the webhook, then process it asynchronously</li> <li><strong>Verify signatures</strong>: Always verify webhook signatures to ensure requests are legitimate</li> <li><strong>Implement retries</strong>: Prepare for occasional failures by implementing retry logic</li> <li><strong>Monitor webhook activity</strong>: Use the Developer Portal to view webhook delivery history and logs</li> </ul> </div> </ApiDocsLayout>) 
}export default ApiWebhooks;
