
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",
import { CodeBlock } from "@/components/developers/CodeBlock",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",

export function ApiReference() {
  const [activeEndpoint, setActiveEndpoint] = useState("get-jobs"),
=======
import React, { useState } from &quot;react&quot;;
import ApiDocsLayout from &quot;@/components/developers/ApiDocsLayout&quot;;
import { CodeBlock } from &quot;@/components/developers/CodeBlock&quot;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;

export function ApiReference() {
  const [activeEndpoint, setActiveEndpoint] = useState(&quot;get-jobs&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import React, {_useState} from "react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";

export function ApiReference() {_const [activeEndpoint, _setActiveEndpoint] = useState("get-jobs");
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Sample endpoint data
  const _endpoints = [
    {
<<<<<<< HEAD
      id: &quot;get-jobs&quot;,
      method: &quot;GET&quot;,
      path: &quot;/api/jobs&quot;,
      description: &quot;Retrieve a list of job postings with optional filtering&quot;,
      parameters: [
        { name: &quot;status&quot;, type: &quot;string&quot;, description: &quot;Filter by job status (open, closed, draft)&quot; },
        { name: &quot;category&quot;, type: &quot;string&quot;, description: &quot;Filter by job category&quot; },
        { name: &quot;limit&quot;, type: &quot;integer&quot;, description: &quot;Number of results per page (default: 20, max: 100)&quot; },
        { name: &quot;offset&quot;, type: &quot;integer&quot;, description: &quot;Pagination offset (default: 0)&quot; }],
      responses: {
        &quot;200&quot;: {
          description: &quot;A list of jobs&quot;,
          example: `{
  &quot;jobs&quot;: [
    {
      &quot;id&quot;: &quot;job-123&quot;,
      &quot;title&quot;: &quot;Senior React Developer&quot;,
      &quot;description&quot;: &quot;We're looking for an experienced React developer...&quot;,
      &quot;category&quot;: &quot;development&quot;,
      &quot;budget&quot;: {
        &quot;min&quot;: 5000,
        &quot;max&quot;: 10000,
        &quot;currency&quot;: &quot;USD&quot;
      },
      &quot;status&quot;: &quot;open&quot;,
      &quot;created_at&quot;: &quot;2023-05-10T15:30:00Z&quot;
=======
      id: "get-jobs", _method: "GET", _path: "/api/jobs", _description: "Retrieve a list of job postings with optional filtering", _parameters: [
        { name: "status", _type: "string", _description: "Filter by job status (open, _closed, _draft)"},
        {_name: "category", _type: "string", _description: "Filter by job category"},
        {_name: "limit", _type: "integer", _description: "Number of results per page (default: 20, _max: 100)"},
        {_name: "offset", _type: "integer", _description: "Pagination offset (default: 0)"}],
      responses: {_"200": {
          description: "A list of jobs", _example: `{
  "jobs": [
    {
      "id": "job-123", _"title": "Senior React Developer", _"description": "We're looking for an experienced React developer...", _"category": "development", _"budget": {
        "min": 5000, _"max": 10000, _"currency": "USD"},
      "status": "open",
      "created_at": "2023-05-10T15:30:00Z"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    },
    // More jobs...
  ],
  &quot;count&quot;: 42,
  &quot;limit&quot;: 20,
  &quot;offset&quot;: 0
}`
        },
<<<<<<< HEAD
        &quot;401&quot;: {
          description: &quot;Unauthorized&quot;,
          example: `{
  &quot;error&quot;: &quot;invalid_token&quot;,
  &quot;message&quot;: &quot;The provided API key is invalid or expired&quot;
}`
        },
        &quot;429&quot;: {
          description: &quot;Rate limit exceeded&quot;,
          example: `{
  &quot;error&quot;: &quot;rate_limit_exceeded&quot;,
  &quot;message&quot;: &quot;Rate limit exceeded. Please try again in 60 seconds&quot;,
  &quot;retry_after&quot;: 60
}`
=======
        "401": {_description: "Unauthorized", _example: `{
  "error": "invalid_token", _"message": "The provided API key is invalid or expired"}`
        },
        "429": {_description: "Rate limit exceeded", _example: `{
  "error": "rate_limit_exceeded", _"message": "Rate limit exceeded. Please try again in 60 seconds", _"retry_after": 60}`
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        }
      },
      requestExample: `curl -X GET \\
  https://api.zionai.com/v1/api/jobs?status=open&limit=10 \\
  -H &quot;Authorization: Bearer YOUR_API_KEY&quot;`
    },
<<<<<<< HEAD
    {
      id: &quot;post-jobs&quot;,
      method: &quot;POST&quot;,
      path: &quot;/api/jobs&quot;,
      description: &quot;Create a new job posting&quot;,
      parameters: [
        { name: &quot;title&quot;, type: &quot;string&quot;, required: true, description: &quot;Job title&quot; },
        { name: &quot;description&quot;, type: &quot;string&quot;, required: true, description: &quot;Detailed job description&quot; },
        { name: &quot;category&quot;, type: &quot;string&quot;, required: true, description: &quot;Job category&quot; },
        { name: &quot;budget&quot;, type: &quot;object&quot;, required: true, description: &quot;Budget information with min, max, and currency&quot; },
        { name: &quot;skills&quot;, type: &quot;array&quot;, description: &quot;Array of required skills&quot; },
        { name: &quot;deadline&quot;, type: &quot;string&quot;, description: &quot;Application deadline (ISO date format)&quot; }],
      responses: {
        &quot;201&quot;: {
          description: &quot;Job created successfully&quot;,
          example: `{
  &quot;id&quot;: &quot;job-456&quot;,
  &quot;title&quot;: &quot;UX Designer&quot;,
  &quot;description&quot;: &quot;Looking for a UX designer with 3+ years experience...&quot;,
  &quot;category&quot;: &quot;design&quot;,
  &quot;budget&quot;: {
    &quot;min&quot;: 3000,
    &quot;max&quot;: 5000,
    &quot;currency&quot;: &quot;USD&quot;
  },
  &quot;status&quot;: &quot;open&quot;,
  &quot;created_at&quot;: &quot;2023-05-15T10:12:00Z&quot;
}`
        },
        &quot;400&quot;: {
          description: &quot;Bad request&quot;,
          example: `{
  &quot;error&quot;: &quot;validation_error&quot;,
  &quot;message&quot;: &quot;Invalid input&quot;,
  &quot;details&quot;: [
    {
      &quot;field&quot;: &quot;title&quot;,
      &quot;error&quot;: &quot;Title is required&quot;
    }
=======
    {_id: "post-jobs", _method: "POST", _path: "/api/jobs", _description: "Create a new job posting", _parameters: [
        { name: "title", _type: "string", _required: true, _description: "Job title"},
        {_name: "description", _type: "string", _required: true, _description: "Detailed job description"},
        {_name: "category", _type: "string", _required: true, _description: "Job category"},
        {_name: "budget", _type: "object", _required: true, _description: "Budget information with min, _max, _and currency"},
        {_name: "skills", _type: "array", _description: "Array of required skills"},
        {_name: "deadline", _type: "string", _description: "Application deadline (ISO date format)"}],
      responses: {_"201": {
          description: "Job created successfully", _example: `{
  "id": "job-456", _"title": "UX Designer", _"description": "Looking for a UX designer with 3+ years experience...", _"category": "design", _"budget": {
    "min": 3000, _"max": 5000, _"currency": "USD"},
  "status": "open",
  "created_at": "2023-05-15T10:12:00Z"
}`
        },
        "400": {_description: "Bad request", _example: `{
  "error": "validation_error", _"message": "Invalid input", _"details": [
    {
      "field": "title", _"error": "Title is required"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  ]
}`
        }
      },
      requestExample: `curl -X POST \\
  https://api.zionai.com/v1/api/jobs \\
<<<<<<< HEAD
  -H &quot;Authorization: Bearer YOUR_API_KEY&quot; \\
  -H &quot;Content-Type: application/json&quot; \\
  -d '{
    &quot;title&quot;: &quot;UX Designer&quot;,
    &quot;description&quot;: &quot;Looking for a UX designer with 3+ years experience...&quot;,
    &quot;category&quot;: &quot;design&quot;,
    &quot;budget&quot;: {
      &quot;min&quot;: 3000,
      &quot;max&quot;: 5000,
      &quot;currency&quot;: &quot;USD&quot;
    },
    &quot;skills&quot;: [&quot;Figma&quot;, &quot;User Research&quot;, &quot;Prototyping&quot;],
    &quot;deadline&quot;: &quot;2023-07-01T00:00:00Z&quot;
  }'`
    },
    {
      id: &quot;get-talent&quot;,
      method: &quot;GET&quot;,
      path: &quot;/api/talent&quot;,
      description: &quot;Search for talent profiles with optional filtering&quot;,
      parameters: [
        { name: &quot;skills&quot;, type: &quot;string&quot;, description: &quot;Comma-separated list of skills&quot; },
        { name: &quot;category&quot;, type: &quot;string&quot;, description: &quot;Filter by talent category&quot; },
        { name: &quot;rate_min&quot;, type: &quot;integer&quot;, description: &quot;Minimum hourly rate&quot; },
        { name: &quot;rate_max&quot;, type: &quot;integer&quot;, description: &quot;Maximum hourly rate&quot; },
        { name: &quot;availability&quot;, type: &quot;string&quot;, description: &quot;Availability type (full-time, part-time)&quot; },
        { name: &quot;limit&quot;, type: &quot;integer&quot;, description: &quot;Number of results per page (default: 20, max: 100)&quot; },
        { name: &quot;offset&quot;, type: &quot;integer&quot;, description: &quot;Pagination offset (default: 0)&quot; }],
      responses: {
        &quot;200&quot;: {
          description: &quot;A list of talent profiles&quot;,
          example: `{
  &quot;talent&quot;: [
    {
      &quot;id&quot;: &quot;talent-123&quot;,
      &quot;full_name&quot;: &quot;Jane Smith&quot;,
      &quot;professional_title&quot;: &quot;Full Stack Developer&quot;,
      &quot;skills&quot;: [&quot;React&quot;, &quot;Node.js&quot;, &quot;TypeScript&quot;],
      &quot;hourly_rate&quot;: 75,
      &quot;availability&quot;: &quot;full-time&quot;,
      &quot;years_experience&quot;: 5,
      &quot;location&quot;: &quot;Remote, US&quot;,
      &quot;bio&quot;: &quot;Experienced full stack developer with a focus on React and Node.js...&quot;
    },
=======
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{_"title": "UX Designer", _"description": "Looking for a UX designer with 3+ years experience...", _"category": "design", _"budget": {
      "min": 3000, _"max": 5000, _"currency": "USD"},
    "skills": ["Figma", "User Research", "Prototyping"],
    "deadline": "2023-07-01T00:00:00Z"
  }'`
    },
    {_id: "get-talent", _method: "GET", _path: "/api/talent", _description: "Search for talent profiles with optional filtering", _parameters: [
        { name: "skills", _type: "string", _description: "Comma-separated list of skills"},
        {_name: "category", _type: "string", _description: "Filter by talent category"},
        {_name: "rate_min", _type: "integer", _description: "Minimum hourly rate"},
        {_name: "rate_max", _type: "integer", _description: "Maximum hourly rate"},
        {_name: "availability", _type: "string", _description: "Availability type (full-time, _part-time)"},
        {_name: "limit", _type: "integer", _description: "Number of results per page (default: 20, _max: 100)"},
        {_name: "offset", _type: "integer", _description: "Pagination offset (default: 0)"}],
      responses: {_"200": {
          description: "A list of talent profiles", _example: `{
  "talent": [
    {
      "id": "talent-123", _"full_name": "Jane Smith", _"professional_title": "Full Stack Developer", _"skills": ["React", _"Node.js", _"TypeScript"], _"hourly_rate": 75, _"availability": "full-time", _"years_experience": 5, _"location": "Remote, _US", _"bio": "Experienced full stack developer with a focus on React and Node.js..."},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    // More talent profiles...
  ],
  &quot;count&quot;: 38,
  &quot;limit&quot;: 20,
  &quot;offset&quot;: 0
}`
        }
      },
      requestExample: `curl -X GET \\
  https://api.zionai.com/v1/api/talent?skills=React,Node.js&limit=10 \\
  -H &quot;Authorization: Bearer YOUR_API_KEY&quot;`
    }
  ],

  // Find the active endpoint data
<<<<<<< HEAD
  const activeEndpointData = endpoints.find(e => e.id === activeEndpoint),

  return (
    <ApiDocsLayout>
      <div className=&quot;grid md:grid-cols-5 gap-8&quot;>
        {/* Endpoint list */}
        <div className=&quot;md:col-span-1&quot;>
          <div className=&quot;sticky top-8&quot;>
            <h3 className=&quot;text-lg font-semibold text-white mb-4&quot;>Endpoints</h3>
            <ul className=&quot;space-y-2&quot;>
              {endpoints.map((endpoint) => (
                <li key={endpoint.id}>
=======
  const _activeEndpointData = endpoints.find(e => e.id === activeEndpoint);

  return (_<ApiDocsLayout>
      <div className="grid md:grid-cols-5 gap-8">
        {_/* Endpoint list */}
        <div className="md:col-span-1">
          <div className="sticky top-8">
            <h3 className="text-lg font-semibold text-white mb-4">Endpoints</h3>
            <ul className="space-y-2">
              {_endpoints.map((endpoint) => (_<li key={endpoint.id}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <button
                    onClick={_() => setActiveEndpoint(endpoint.id)}
                    className={_`w-full text-left px-3 py-2 rounded-md text-sm flex items-center ${
                      activeEndpoint === endpoint.id
<<<<<<< HEAD
                        ? &quot;bg-zion-purple/20 text-zion-cyan&quot;
                        : &quot;text-zinc-400 hover:text-white hover:bg-zinc-900&quot;
                    }`}
                  >
                    <span className={`inline-block w-16 font-mono ${endpoint.method === &quot;GET&quot; ? &quot;text-green-500&quot; : endpoint.method === &quot;POST&quot; ? &quot;text-blue-500&quot; : &quot;text-yellow-500&quot;}`}>
                      {endpoint.method}
                    </span>
                    <span className=&quot;truncate&quot;>{endpoint.path}</span>
=======
                        ? "bg-zion-purple/20 text-zion-cyan"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-900"}`}
                  >
                    <span className={_`inline-block w-16 font-mono ${endpoint.method === "GET" ? "text-green-500" : endpoint.method === "POST" ? "text-blue-500" : "text-yellow-500"}`}>
                      {_endpoint.method}
                    </span>
                    <span className="truncate">{_endpoint.path}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

<<<<<<< HEAD
        {/* Endpoint details */}
        <div className=&quot;md:col-span-4&quot;>
          {activeEndpointData ? (
            <div>
              <div className=&quot;flex items-center mb-6&quot;>
                <span className={`inline-block px-2 py-1 text-xs font-medium rounded mr-3 ${
                  activeEndpointData.method === &quot;GET&quot; ? &quot;bg-green-950 text-green-500&quot; : 
                  activeEndpointData.method === &quot;POST&quot; ? &quot;bg-blue-950 text-blue-500&quot; : 
                  &quot;bg-yellow-950 text-yellow-500&quot;
                }`}>
                  {activeEndpointData.method}
                </span>
                <span className=&quot;font-mono text-lg text-white&quot;>{activeEndpointData.path}</span>
              </div>

              <p className=&quot;text-zinc-400 mb-8&quot;>{activeEndpointData.description}</p>
=======
        {_/* Endpoint details */}
        <div className="md:col-span-4">
          {_activeEndpointData ? (_<div>
              <div className="flex items-center mb-6">
                <span className={`inline-block px-2 py-1 text-xs font-medium rounded mr-3 ${
                  activeEndpointData.method === "GET" ? "bg-green-950 text-green-500" : 
                  activeEndpointData.method === "POST" ? "bg-blue-950 text-blue-500" : 
                  "bg-yellow-950 text-yellow-500"}`}>
                  {_activeEndpointData.method}
                </span>
                <span className="font-mono text-lg text-white">{_activeEndpointData.path}</span>
              </div>

              <p className="text-zinc-400 mb-8">{_activeEndpointData.description}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

              <Tabs defaultValue=&quot;docs&quot;>
                <TabsList className=&quot;mb-6&quot;>
                  <TabsTrigger value=&quot;docs&quot;>Documentation</TabsTrigger>
                  <TabsTrigger value=&quot;try&quot;>Try It</TabsTrigger>
                </TabsList>
<<<<<<< HEAD
                <TabsContent value=&quot;docs&quot;>
                  {/* Request section */}
                  <div className=&quot;mb-8&quot;>
                    <h3 className=&quot;text-xl font-semibold text-white mb-4&quot;>Request</h3>
=======
                <TabsContent value="docs">
                  {_/* Request section */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Request</h3>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    
                    {_activeEndpointData.parameters && activeEndpointData.parameters.length > 0 && (
                      <>
                        <h4 className=&quot;text-lg font-medium text-white mb-3&quot;>Parameters</h4>
                        <div className=&quot;overflow-x-auto mb-6&quot;>
                          <table className=&quot;w-full border-collapse&quot;>
                            <thead>
                              <tr className=&quot;border-b border-zinc-800&quot;>
                                <th className=&quot;text-left py-2 px-4 text-zinc-400 font-medium&quot;>Name</th>
                                <th className=&quot;text-left py-2 px-4 text-zinc-400 font-medium&quot;>Type</th>
                                <th className=&quot;text-left py-2 px-4 text-zinc-400 font-medium&quot;>Required</th>
                                <th className=&quot;text-left py-2 px-4 text-zinc-400 font-medium&quot;>Description</th>
                              </tr>
                            </thead>
                            <tbody>
<<<<<<< HEAD
                              {activeEndpointData.parameters.map((param, index) => (
                                <tr key={param.name} className={index < activeEndpointData.parameters.length - 1 ? &quot;border-b border-zinc-800&quot; : ""}>
                                  <td className="py-2 px-4 text-white font-mono">{param.name}</td>
                                  <td className="py-2 px-4 text-blue-400 font-mono">{param.type}</td>
                                  <td className="py-2 px-4 text-zinc-300&quot;>{param.required ? &quot;Yes&quot; : &quot;No"}</td>
                                  <td className="py-2 px-4 text-zinc-300">{param.description}</td>
=======
                              {activeEndpointData.parameters.map((param, _index) => (
                                <tr key={param.name} className={_index < activeEndpointData.parameters.length - 1 ? "border-b border-zinc-800" : ""}>
                                  <td className="py-2 px-4 text-white font-mono">{_param.name}</td>
                                  <td className="py-2 px-4 text-blue-400 font-mono">{_param.type}</td>
                                  <td className="py-2 px-4 text-zinc-300">{_param.required ? "Yes" : "No"}</td>
                                  <td className="py-2 px-4 text-zinc-300">{_param.description}</td>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </>
                    )}

                    <h4 className="text-lg font-medium text-white mb-3&quot;>Example Request</h4>
                    <CodeBlock 
<<<<<<< HEAD
                      code={activeEndpointData.requestExample} 
                      language=&quot;bash"
                      showLineNumbers={true}
=======
                      code={_activeEndpointData.requestExample} 
                      language="bash"
                      showLineNumbers={_true}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    />
                  </div>

                  {_/* Response section */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Responses</h3>
                    
                    {_Object.entries(activeEndpointData.responses).map(_([status, _response]) => (
                      <div key={status} className="mb-6">
                        <div className="flex items-center mb-3">
                          <span className={_`inline-block px-2 py-1 text-xs font-medium rounded mr-3 ${
                            status.startsWith('2') ? 'bg-green-950 text-green-500' : 
                            status === '401' || status === '403' ? 'bg-orange-950 text-orange-500' : 
                            'bg-red-950 text-red-500'}`}>
                            {_status}
                          </span>
<<<<<<< HEAD
                          <span className="text-white&quot;>{response.description}</span>
                        </div>
                        
                        <CodeBlock 
                          code={response.example} 
                          language=&quot;json&quot;
                          showLineNumbers={true}
=======
                          <span className="text-white">{_response.description}</span>
                        </div>
                        
                        <CodeBlock 
                          code={_response.example} 
                          language="json"
                          showLineNumbers={_true}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value=&quot;try">
                  <div className="p-8 border border-zinc-800 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-zinc-400 mb-3">Interactive API tester coming soon</p>
                      <p className="text-zinc-600 text-sm">Try the Postman collection in the meantime</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          ) : (
            <div className="p-8 border border-zinc-800 rounded-lg text-center">
              <p className="text-zinc-400">Select an endpoint from the list to view details</p>
            </div>
          )}
        </div>
      </div>
    </ApiDocsLayout>
  )
}

export default ApiReference,
