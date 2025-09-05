
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

  // Sample endpoint data
  const endpoints = [
    {
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
    },
    // More jobs...
  ],
  &quot;count&quot;: 42,
  &quot;limit&quot;: 20,
  &quot;offset&quot;: 0
}`
        },
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
        }
      },
      requestExample: `curl -X GET \\
  https://api.zionai.com/v1/api/jobs?status=open&limit=10 \\
  -H &quot;Authorization: Bearer YOUR_API_KEY&quot;`
    },
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
  ]
}`
        }
      },
      requestExample: `curl -X POST \\
  https://api.zionai.com/v1/api/jobs \\
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
                  <button
                    onClick={() => setActiveEndpoint(endpoint.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm flex items-center ${
                      activeEndpoint === endpoint.id
                        ? &quot;bg-zion-purple/20 text-zion-cyan&quot;
                        : &quot;text-zinc-400 hover:text-white hover:bg-zinc-900&quot;
                    }`}
                  >
                    <span className={`inline-block w-16 font-mono ${endpoint.method === &quot;GET&quot; ? &quot;text-green-500&quot; : endpoint.method === &quot;POST&quot; ? &quot;text-blue-500&quot; : &quot;text-yellow-500&quot;}`}>
                      {endpoint.method}
                    </span>
                    <span className=&quot;truncate&quot;>{endpoint.path}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

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

              <Tabs defaultValue=&quot;docs&quot;>
                <TabsList className=&quot;mb-6&quot;>
                  <TabsTrigger value=&quot;docs&quot;>Documentation</TabsTrigger>
                  <TabsTrigger value=&quot;try&quot;>Try It</TabsTrigger>
                </TabsList>
                <TabsContent value=&quot;docs&quot;>
                  {/* Request section */}
                  <div className=&quot;mb-8&quot;>
                    <h3 className=&quot;text-xl font-semibold text-white mb-4&quot;>Request</h3>
                    
                    {activeEndpointData.parameters && activeEndpointData.parameters.length > 0 && (
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
                              {activeEndpointData.parameters.map((param, index) => (
                                <tr key={param.name} className={index < activeEndpointData.parameters.length - 1 ? &quot;border-b border-zinc-800&quot; : ""}>
                                  <td className="py-2 px-4 text-white font-mono">{param.name}</td>
                                  <td className="py-2 px-4 text-blue-400 font-mono">{param.type}</td>
                                  <td className="py-2 px-4 text-zinc-300&quot;>{param.required ? &quot;Yes&quot; : &quot;No"}</td>
                                  <td className="py-2 px-4 text-zinc-300">{param.description}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </>
                    )}

                    <h4 className="text-lg font-medium text-white mb-3&quot;>Example Request</h4>
                    <CodeBlock 
                      code={activeEndpointData.requestExample} 
                      language=&quot;bash"
                      showLineNumbers={true}
                    />
                  </div>

                  {/* Response section */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Responses</h3>
                    
                    {Object.entries(activeEndpointData.responses).map(([status, response]) => (
                      <div key={status} className="mb-6">
                        <div className="flex items-center mb-3">
                          <span className={`inline-block px-2 py-1 text-xs font-medium rounded mr-3 ${
                            status.startsWith('2') ? 'bg-green-950 text-green-500' : 
                            status === '401' || status === '403' ? 'bg-orange-950 text-orange-500' : 
                            'bg-red-950 text-red-500'
                          }`}>
                            {status}
                          </span>
                          <span className="text-white&quot;>{response.description}</span>
                        </div>
                        
                        <CodeBlock 
                          code={response.example} 
                          language=&quot;json&quot;
                          showLineNumbers={true}
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
