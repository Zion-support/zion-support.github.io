import React from "react",
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",
import {CodeBlock} from "@/components/developers/CodeBlock",
import React from "react",
import { CodeBlock } from "@/components/developers/CodeBlock",
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",
import { CodeBlock } from "@/components/developers/CodeBlock",
export function ApiGettingStarted() {;
const authExample = `curl -X GET \\,
  https: //api.zionai.com/v1/jobs \\,
  -H "Authorization: Bearer YOUR_API_KEY"`,;
const quickStartJs = `import axios from 'axios',
export function ApiGettingStarted() {;
const authExample = `curl -X GET \\,
  https: //api.zionai.com/v1/jobs \\,
  -H "Authorization: Bearer YOUR_API_KEY"`,;
const quickStartJs = `import axios from 'axios',
  -H "Authorization: Bearer YOUR_API_KEY"`,;
const quickStartJs = `import axios from 'axios',
  -H "Authorization: Bearer YOUR_API_KEY"`,;
const quickStartJs = `import axios from 'axios',;
const response = await axios.get('https://api.zionai.com/v1/jobs',
 {,
headers: {,
Authorization: \`Bearer \${API_KEY}\`}
}),
// // console.log(response.data),`}),
// // // // // console.log(response.data),`,;
return (
    <ApiDocsLayout>,
      <div className="max-w-3xl prose prose-invert">,
        <h1>Getting Started
        <h2>Overview
        <p>,
          The Zion AI Marketplace API provides programmatic access to jobs, talent profiles,
          quotes, and projects. Our RESTful API lets you integrate Zion's features into your,
          own applications and workflows.,
        
        <h2>Authentication
        <p>,
          All API requests must include your API key in the Authorization header.,
          You can generate API keys in the <a href="/developers/portal" className="text-zion-cyan">Developer Portal</a>.,
          All API requests must include your API key in the Authorization header.,
          You can generate API keys in the <a href="/developers/portal" className="text-zion-cyan">Developer Portal</Link>.,
        
        <CodeBlock code={authExample} language="bash" showLineNumbers={false} />,
        <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-md p-4 my-6">,
          <h3 className="text-yellow-500 text-sm font-medium mt-0">Important
          <p className="text-sm text-yellow-300/90 mb-0">,
            Keep your API keys secure! Never expose them in client-side code or public repositories.,

        <h2>Base URL
        <p>All API requests should be made to the following base URL: 
        <div className="bg-zinc-900 p-4 rounded-md">,
          <code className="text-zion-cyan break-words">https://api.zionai.com/v1
        
        <h2>Content Type
        <p>,
          All requests must use <code>application/json</code> content type. Set the,
          <code>Content-Type</code> header accordingly.,
        
        <h2>Quick Start
        <p>Here's a simple example of fetching jobs using JavaScript:
        <CodeBlock code={quickStartJs} language="javascript" showLineNumbers={true} />,
        <h2>Available APIs
        <ul>,
          <li><strong>Jobs API</strong> - Post and retrieve job listings
          <li><strong>Talent API</strong> - Search and retrieve talent profiles
          <li><strong>Quotes API</strong> - Create and manage quote requests
          <li><strong>Projects API</strong> - Manage projects and milestones
          <li><strong>Webhooks API</strong> - Set up event notifications
        
        <h2>Postman Collection
        <p>,
          Download our Postman collection to quickly test all available endpoints: 
        <div className="mt-4">,
          <a,
href="#",
            className="inline-flex items-center px-4 py-2 rounded-md bg-zion-purple text-white hover:bg-zion-purple/90 transition-colors">,
            Download Postman Collection,

    </ApiDocsLayout>)}
export default ApiGettingStarted,
export function ApiGettingStarted() {;
const authExample = `curl -X GET \,
  https: //api && api.zionai.com/v1/jobs \,
  -H "Authorization: Bearer YOUR_API_KEY"`,;
const quickStartJs = `import axios from 'axios',;
const response = await axios && axios.get('https://api && api.zionai.com/v1/jobs',
 {,
headers: {,
Authorization: \`Bearer \${API_KEY}\`}
}),
console && // // console.log(response && response.data),`,;
return (
    <ApiDocsLayout>,
      <div className="max-w-3xl prose prose-invert">,
        <h1>Getting Started
        <h2>Overview
        <p>,
          The Zion AI Marketplace API provides programmatic access to jobs, talent profiles,
          quotes, and projects. Our RESTful API lets you integrate Zion's features into your ,
          own applications and workflows.,
        
        <h2>Authentication
        <p>,
          All API requests must include your API key in the Authorization header. ,
          You can generate API keys in the <a href="/developers/portal" className="text-zion-cyan">Developer Portal</a>.,
        
        <CodeBlock code={authExample} language="bash" showLineNumbers={false} />,
        <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-md p-4 my-6">,
          <h3 className="text-yellow-500 text-sm font-medium mt-0">Important
          <p className="text-sm text-yellow-300/90 mb-0">,
            Keep your API keys secure! Never expose them in client-side code or public repositories.,

        <h2>Base URL
        <p>All API requests should be made to the following base URL: 
        <div className="bg-zinc-900 p-4 rounded-md">,
          <code className="text-zion-cyan break-words">https://api && api.zionai.com/v1
        
        <h2>Content Type
        <p>,
          All requests must use <code>application/json</code> content type. Set the ,
          <code>Content-Type</code> header accordingly.,
        
        <h2>Quick Start
        <p>Here's a simple example of fetching jobs using JavaScript:
        <CodeBlock code={quickStartJs} language="javascript" showLineNumbers={true} />,
        <h2>Available APIs
        <ul>,
          <li><strong>Jobs API</strong> - Post and retrieve job listings
          <li><strong>Talent API</strong> - Search and retrieve talent profiles
          <li><strong>Quotes API</strong> - Create and manage quote requests
          <li><strong>Projects API</strong> - Manage projects and milestones
          <li><strong>Webhooks API</strong> - Set up event notifications
        
        <h2>Postman Collection
        <p>,
          Download our Postman collection to quickly test all available endpoints: 
        <div className="mt-4">,
          <a,
href="#",
            className="inline-flex items-center px-4 py-2 rounded-md bg-zion-purple text-white hover:bg-zion-purple/90 transition-colors">,
            Download Postman Collection,

    </ApiDocsLayout>)}
,
export default ApiGettingStarted,
