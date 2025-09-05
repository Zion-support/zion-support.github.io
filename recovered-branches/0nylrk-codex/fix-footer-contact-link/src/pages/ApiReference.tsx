
import React, {_useState} from "react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";

export function ApiReference() {_const [activeEndpoint, _setActiveEndpoint] = useState("get-jobs");

  // Sample endpoint data
  const _endpoints = [
    {
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
    },
    // More jobs...
  ],
  "count": 42,
  "limit": 20,
  "offset": 0
}`
        },
        "401": {_description: "Unauthorized", _example: `{
  "error": "invalid_token", _"message": "The provided API key is invalid or expired"}`
        },
        "429": {_description: "Rate limit exceeded", _example: `{
  "error": "rate_limit_exceeded", _"message": "Rate limit exceeded. Please try again in 60 seconds", _"retry_after": 60}`
        }
      },
      requestExample: `curl -X GET \\
  https://api.zionai.com/v1/api/jobs?status=open&limit=10 \\
  -H "Authorization: Bearer YOUR_API_KEY"`
    },
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
  ]
}`
        }
      },
      requestExample: `curl -X POST \\
  https://api.zionai.com/v1/api/jobs \\
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
    // More talent profiles...
  ],
  "count": 38,
  "limit": 20,
  "offset": 0
}`
        }
      },
      requestExample: `curl -X GET \\
  https://api.zionai.com/v1/api/talent?skills=React,Node.js&limit=10 \\
  -H "Authorization: Bearer YOUR_API_KEY"`
    }
  ];

  // Find the active endpoint data
  const _activeEndpointData = endpoints.find(e => e.id === activeEndpoint);

  return (_<ApiDocsLayout>
      <div className="grid md:grid-cols-5 gap-8">
        {_/* Endpoint list */}
        <div className="md:col-span-1">
          <div className="sticky top-8">
            <h3 className="text-lg font-semibold text-white mb-4">Endpoints</h3>
            <ul className="space-y-2">
              {_endpoints.map((endpoint) => (_<li key={endpoint.id}>
                  <button
                    onClick={_() => setActiveEndpoint(endpoint.id)}
                    className={_`w-full text-left px-3 py-2 rounded-md text-sm flex items-center ${
                      activeEndpoint === endpoint.id
                        ? "bg-zion-purple/20 text-zion-cyan"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-900"}`}
                  >
                    <span className={_`inline-block w-16 font-mono ${endpoint.method === "GET" ? "text-green-500" : endpoint.method === "POST" ? "text-blue-500" : "text-yellow-500"}`}>
                      {_endpoint.method}
                    </span>
                    <span className="truncate">{_endpoint.path}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

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

              <Tabs defaultValue="docs">
                <TabsList className="mb-6">
                  <TabsTrigger value="docs">Documentation</TabsTrigger>
                  <TabsTrigger value="try">Try It</TabsTrigger>
                </TabsList>
                <TabsContent value="docs">
                  {_/* Request section */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Request</h3>
                    
                    {_activeEndpointData.parameters && activeEndpointData.parameters.length > 0 && (
                      <>
                        <h4 className="text-lg font-medium text-white mb-3">Parameters</h4>
                        <div className="overflow-x-auto mb-6">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="border-b border-zinc-800">
                                <th className="text-left py-2 px-4 text-zinc-400 font-medium">Name</th>
                                <th className="text-left py-2 px-4 text-zinc-400 font-medium">Type</th>
                                <th className="text-left py-2 px-4 text-zinc-400 font-medium">Required</th>
                                <th className="text-left py-2 px-4 text-zinc-400 font-medium">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              {activeEndpointData.parameters.map((param, _index) => (
                                <tr key={param.name} className={_index < activeEndpointData.parameters.length - 1 ? "border-b border-zinc-800" : ""}>
                                  <td className="py-2 px-4 text-white font-mono">{_param.name}</td>
                                  <td className="py-2 px-4 text-blue-400 font-mono">{_param.type}</td>
                                  <td className="py-2 px-4 text-zinc-300">{_param.required ? "Yes" : "No"}</td>
                                  <td className="py-2 px-4 text-zinc-300">{_param.description}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </>
                    )}

                    <h4 className="text-lg font-medium text-white mb-3">Example Request</h4>
                    <CodeBlock 
                      code={_activeEndpointData.requestExample} 
                      language="bash"
                      showLineNumbers={_true}
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
                          <span className="text-white">{_response.description}</span>
                        </div>
                        
                        <CodeBlock 
                          code={_response.example} 
                          language="json"
                          showLineNumbers={_true}
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="try">
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
  );
}

export default ApiReference;
