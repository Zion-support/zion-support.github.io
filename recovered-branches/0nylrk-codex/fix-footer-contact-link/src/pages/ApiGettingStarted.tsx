
<<<<<<< HEAD
import React from "react",
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",
import { CodeBlock } from "@/components/developers/CodeBlock",
export function ApiGettingStarted() {
  const authExample = `curl -X GET \\
  https: //api.zionai.com/v1/jobs \\
  -H "Authorization: Bearer YOUR_API_KEY"`,
=======
import React from &quot;react&quot;;
import ApiDocsLayout from &quot;@/components/developers/ApiDocsLayout&quot;;
import { CodeBlock } from &quot;@/components/developers/CodeBlock&quot;;

export function ApiGettingStarted() {
  const authExample = `curl -X GET \\
  https://api.zionai.com/v1/jobs \\
  -H &quot;Authorization: Bearer YOUR_API_KEY&quot;`;

  const quickStartJs = `import axios from 'axios';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const quickStartJs = `import axios from 'axios',
const response = await axios.get('https://api.zionai.com/v1/jobs', {
  headers: {
    Authorization: \`Bearer \${API_KEY}\`
  }
}),

<<<<<<< HEAD
// // // console.log(response.data),`,
=======
// console.log(response.data);`;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <ApiDocsLayout>
      <div className=&quot;max-w-3xl prose prose-invert&quot;>
        <h1>Getting Started</h1>
        
        <h2>Overview</h2>
        <p>
          The Zion AI Marketplace API provides programmatic access to jobs, talent profiles, 
          quotes, and projects. Our RESTful API lets you integrate Zion's features into your 
          own applications and workflows.
        </p>

        <h2>Authentication</h2>
        <p>
          All API requests must include your API key in the Authorization header. 
          You can generate API keys in the <a href=&quot;/developers/portal&quot; className=&quot;text-zion-cyan&quot;>Developer Portal</Link>.
        </p>
        
        <CodeBlock code={authExample} language=&quot;bash&quot; showLineNumbers={false} />
        
        <div className=&quot;bg-yellow-900/20 border border-yellow-700/50 rounded-md p-4 my-6&quot;>
          <h3 className=&quot;text-yellow-500 text-sm font-medium mt-0&quot;>Important</h3>
          <p className=&quot;text-sm text-yellow-300/90 mb-0&quot;>
            Keep your API keys secure! Never expose them in client-side code or public repositories.
          </p>
        </div>

        <h2>Base URL</h2>
        <p>All API requests should be made to the following base URL:</p>
        <div className=&quot;bg-zinc-900 p-4 rounded-md&quot;>
          <code className=&quot;text-zion-cyan break-words&quot;>https://api.zionai.com/v1</code>
        </div>
        
        <h2>Content Type</h2>
        <p>
          All requests must use <code>application/json</code> content type. Set the 
          <code>Content-Type</code> header accordingly.
        </p>

        <h2>Quick Start</h2>
        <p>Here's a simple example of fetching jobs using JavaScript:</p>
        
        <CodeBlock code={quickStartJs} language=&quot;javascript&quot; showLineNumbers={true} />

        <h2>Available APIs</h2>
        <ul>
          <li><strong>Jobs API</strong> - Post and retrieve job listings</li>
          <li><strong>Talent API</strong> - Search and retrieve talent profiles</li>
          <li><strong>Quotes API</strong> - Create and manage quote requests</li>
          <li><strong>Projects API</strong> - Manage projects and milestones</li>
          <li><strong>Webhooks API</strong> - Set up event notifications</li>
        </ul>

        <h2>Postman Collection</h2>
        <p>
<<<<<<< HEAD
          Download our Postman collection to quickly test all available endpoints: </p>
        <div className="mt-4">
=======
          Download our Postman collection to quickly test all available endpoints:
        </p>
        <div className=&quot;mt-4&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          <a 
            href=&quot;#&quot; 
            className=&quot;inline-flex items-center px-4 py-2 rounded-md bg-zion-purple text-white hover:bg-zion-purple/90 transition-colors&quot;
          >
            Download Postman Collection
          </Link>
        </div>
      </div>
    </ApiDocsLayout>
  )
}

export default ApiGettingStarted,
