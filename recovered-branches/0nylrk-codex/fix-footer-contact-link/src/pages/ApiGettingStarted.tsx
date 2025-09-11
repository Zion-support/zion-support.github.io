


export function ApiGettingStarted() {
  const authExample = `curl -X GET \\
  https: //api.zionai.com/v1/jobs \\
  -H "Authorization: Bearer YOUR_API_KEY"`,;
const quickStartJs = `import axios from 'axios';
  const authExample = `curl -X GET \\
  https: //api.zionai.com/v1/jobs \\
import React from './react';
import ApiDocsLayout from "@/components / developers / ApiDocsLayout";
import { CodeBlock } from '@/components / developers / CodeBlock';
export /**
 * ApiGettingStarted - Function description
 */
function ApiGettingStarted() {
  const auth_example = `curl -X GET \\;
  https: //api.zionai.com / v1 / jobs \\;
  -H "Authorization: Bearer YOUR_API_KEY"`,
const quickStartJs = `import axios from 'axios';
const response = await axios.get ('https://api.zionai.com / v1 / jobs', {
const response = await axios.get ('https://api.zionai.com / v1 / jobs', {
  -H "Authorization: Bearer YOUR_API_KEY"`,

  const quickStartJs = `import axios from 'axios',

  const quickStartJs = `import axios from 'axios',
  -H "Authorization: Bearer YOUR_API_KEY"`,

  const quickStartJs = `import axios from 'axios',


  -H "Authorization: Bearer YOUR_API_KEY"`,

  const quickStartJs = `import axios from 'axios',
const response = await axios.get('https://api.zionai.com/v1/jobs', {
});
console.log(response.data),`;
}),

// // // console.log(response.data),`,

  return (
    <ApiDocsLayout>
      <div className="max-w-3xl prose prose-invert">
        <h1>Getting Started</h1>
        <h2>Overview</h2>
        <p>
          The Zion AI Marketplace API provides programmatic access to jobs, talent profiles
          quotes, and projects. Our RESTful API lets you integrate Zion's features into your
          own applications and workflows.
        </p>
        <h2>Authentication</h2>
        <p>
          All API requests must include your API key in the Authorization header. 
          You can generate API keys in the <a href="/developers/portal" className="text-zion-cyan">Developer Portal</Link>.


import React from "react",;
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",;
import { CodeBlock } from "@/components/developers/CodeBlock",;

export function ApiGettingStarted() {;
  const authExample = `curl -X GET \\;
  https: //api && api.zionai.com/v1/jobs \\;
  -H "Authorization: Bearer YOUR_API_KEY"`,;=======
  const quickStartJs = `import axios from 'axios';
const response = await axios && axios.get('https://api && api.zionai.com/v1/jobs', {;
  headers: {;
    Authorization: \`Bearer \${API_KEY}\`;
  }
});
console && console.log(response && response.data),`;

console && console.log(response && response.data),`;

  return (
    <ApiDocsLayout>;
      <div className="max-w-3xl prose prose-invert">;
        <h1>Getting Started</h1>;

import React from "react",;
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",;
import { CodeBlock } from "@/components/developers/CodeBlock",;
export function ApiGettingStarted() {;
  const authExample = `curl -X GET \\;
  https: //api.zionai.com/v1/jobs \\;
  -H "Authorization: Bearer YOUR_API_KEY"`,;
  const quickStartJs = `import axios from 'axios',;
const response = await axios.get('https://api.zionai.com/v1/jobs', {;
  headers: {;
    Authorization: \`Bearer \${API_KEY}\`;
  }
}),;
// // // console.log(response.data),`,;
  return (;
    <ApiDocsLayout>;
      <div className="max-w-3xl prose prose-invert">;
        <h1>Getting Started</h1>;
;
        <p>;
          The Zion AI Marketplace API provides programmatic access to jobs, talent profiles, ;
          quotes, and projects. Our RESTful API lets you integrate Zion's features into your ;
          own applications and workflows.;
        </p>;

        <CodeBlock code={authExample} language="bash" showLineNumbers={false} />;

        <CodeBlock code={authExample} language="bash" showLineNumbers={false} />;

        <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-md p-4 my-6">;
          <h3 className="text-yellow-500 text-sm font-medium mt-0">Important</h3>;
          <p className="text-sm text-yellow-300/90 mb-0">;
            Keep your API keys secure! Never expose them in client-side code or public repositories.;
          </p>;
        </div>;
        <h2>Base URL</h2>;
        <p>All API requests should be made to the following base URL:</p>;
        <div className="bg-zinc-900 p-4 rounded-md">;
          <code className="text-zion-cyan break-words">https://api && api.zionai.com/v1</code>;
        </div>;

        <h2>Content Type</h2>;
        <p>;
          All requests must use <code>application/json</code> content type. Set the ;
          <code>Content-Type</code> header accordingly.;
        </p>;

        <h2>Quick Start</h2>;
        <p>Here's a simple example of fetching jobs using JavaScript:</p>;

        <CodeBlock code={quickStartJs} language="javascript" showLineNumbers={true} />;


export default ApiGettingStarted;
