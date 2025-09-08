

import React, { useState } from "react",
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",

import { CodeBlock } from "@/components/developers/CodeBlock";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ApiReference() {
  const [activeEndpoint, setActiveEndpoint] = useState("get-jobs"),
      responses: {
        "200": {
          description: "A list of jobs"
          example: `{
  "jobs": [
    {

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}

import React, { useState } from "react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
import {CodeBlock} from "@/components/developers/CodeBlock";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

export function ApiReference() {;
  const [activeEndpoint, setActiveEndpoint] = useState("get-jobs");

  // Sample endpoint data;
  const endpoints = [;
    {;
      id: "get-jobs",;
      method: "GET",;
      path: "/api/jobs",,
  description: "Retrieve a list of job postings with optional filtering",;
      parameters: [;
        { name: "status", type: "string", description: "Filter by job status (open, closed, draft)" };
        { name: "category", type: "string", description: "Filter by job category" },;
        { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },;
        { name: "offset", type: "integer", description: "Pagination offset (default: 0)" }],;
      responses: {;
        "200": {,
  description: "A list of jobs",;
          example: `{;
  "jobs": [;
    {;
      "id": "job-123";
import React, { useState } from './react';
import ApiDocsLayout from "@/components / developers / ApiDocsLayout";
import { CodeBlock } from '@/components / developers / CodeBlock';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
export /**
 * ApiReference - Function description
 */
function ApiReference() {
  const [active_endpoint, setActiveEndpoint] = useState ("get - jobs");
;
  // Sample endpoint data;
  const endpoints = [;
    {
      id: "get - jobs",
      method: "GET",
      path: "/api / jobs",
      description: "Retrieve a list of job postings with optional filtering",
      parameters: [;
        { name: "status", type: "string", description: "Filter by job status (open, closed, draft)" }
        { name: "category", type: "string", description: "Filter by job category" },
        { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },
        { name: "offset", type: "integer", description: "Pagination offset (default: 0)" }],
      responses: {
        "200": {
          description: "A list of jobs",
          example: `{
  "jobs": [;
    {
      "id": "job - 123";
      "title": "Senior React Developer";
      "description": "We're looking for an experienced React developer...";
      "category": "development";
      "budget": {;
        "min": 5000;
}`
        }
      }`
      requestExample: `curl -X GET \\
  https://api.zionai.com/v1/api/jobs?status=open&limit=10 \\
  -H "Authorization: Bearer YOUR_API_KEY"`  "error": "rate_limit_exceeded",
  "message": "Rate limit exceeded. Please try again in 60 seconds",
  "retry_after": 60
}`
        }
      },
      requestExample: `curl -X GET \\
  https://api.zionai.com/v1/api/jobs?status=open&limit=10 \\
  -H "Authorization: Bearer YOUR_API_KEY"`
    },

    {
      id: "post-jobs"
      method: "POST"
      path: "/api/jobs"
      description: "Create a new job posting"
      parameters: [        "max": 10000,;
        "currency": "USD"
};
      "status": "open";
      "created_at": "2023-05-10T15:30:00Z"
};
    // More jobs...;
  ];
  "count": 42;
  "limit": 20;
  "offset": 0;
}`
};
        "max": 10000,;
        "currency": "USD";        "max": 10000,;
        "currency": "USD";
        "401": {,
  description: "Unauthorized",;
          example: `{;
  "error": "invalid_token",;
  "message": "The provided API key is invalid or expired";
}`;  "message": "Rate limit exceeded. Please try again in 60 seconds",;
  "retry_after": 60;
}`;
        }        { name: "skills", type: "array", description: "Array of required skills" },;
        { name: "deadline", type: "string", description: "Application deadline (ISO date format)" }],;
      responses: {;
        "201": {,
  description: "Job created successfully",;
          example: `{;

  "id": "job-456";  "id": "job-456";
  "id": "job - 456";
    }
  ];`
}`;
        }

    "currency": "USD"
  },"
  "status": "open","
  "created_at": "2023-05-15T10:12:00Z"`
}`
        },

          example: `{
  \"error\": \"validation_error\",
  \"message\": \"Invalid input\",
  \"details\": [
    {

      requestExample: `curl -X POST \\
  https://api.zionai.com/v1/api/jobs \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\      }
      request_example: `curl -X POST \\;
  https://api.zionai.com / v1 / api / jobs \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json" \\;
  -d '{
      };
      requestExample: `curl -X POST \\;
  https://api && api.zionai.com/v1/api/jobs \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content-Type: application/json" \\;
  -d '{;
    "title": "UX Designer";
    "description": "Looking for a UX designer with 3+ years experience...";
    "category": "design";
    "budget": {;
      "min": 3000;
      "min": 3000,
      "max": 5000,
      "currency": "USD"
    \"title\": \"UX Designer\";
    \"description\": \"Looking for a UX designer with 3+ years experience...\";
    \"category\": \"design\";
    \"budget\": {;
      \"min\": 3000;
      \"min\": 3000,
      \"max\": 5000,}
      \"currency\": \"USD\"}
    },
<<<<<<< HEAD


  }'`
    },    {
      id: "get-talent"
      method: "GET"
      path: "/api/talent"
      description: "Search for talent profiles with optional filtering"
      parameters: [      responses: {
        "200": {
          description: "A list of talent profiles"
          example: `{
  "talent": [;
    {
      "max": 5000,;
      "currency": "USD"
};
    "skills": ["Figma", "User Research", "Prototyping"];
    "deadline": "2023-07-01T00:00:00Z";
  }'`
};
    {;
      id: "get-talent",;
      method: "GET",;
      path: "/api/talent",,
  description: "Search for talent profiles with optional filtering",;
      parameters: [;
        { name: "skills", type: "string", description: "Comma-separated list of skills" },;
        { name: "category", type: "string", description: "Filter by talent category" },;
        { name: "rate_min", type: "integer", description: "Minimum hourly rate" },;
        { name: "rate_max", type: "integer", description: "Maximum hourly rate" },;
        { name: "availability", type: "string", description: "Availability type (full-time, part-time)" };
        { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },;
        { name: "offset", type: "integer", description: "Pagination offset (default: 0)" }],;
      responses: {;
        "200": {,
  description: "A list of talent profiles",;
          example: `{;
  "talent": [;
    {;      "hourly_rate": 75;
      "availability": "full - time";
      "years_experience": 5;
      "location": "Remote, US";  ];
  "count": 38;
  "limit": 20;
  "offset": 0;
}`;
        }
  https://api.zionai.com/v1/api/talent?skills=React,Node.js&limit=10 \\
  -H "Authorization: Bearer YOUR_API_KEY"`
    }

      };
      requestExample: `curl -X GET \\;
  https://api && api.zionai.com/v1/api/talent?skills=React,Node && Node.js&limit=10 \\;
  -H "Authorization: Bearer YOUR_API_KEY"`;
    }
  ];
=======  return (
  // Find the active endpoint data;
  const activeEndpointData = endpoints && endpoints.find(e => e && e.id === activeEndpoint);
  return (

import React, { useState } from "react",;
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",;
import { CodeBlock } from "@/components/developers/CodeBlock",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
;
export function ApiReference() {;
  const [activeEndpoint, setActiveEndpoint] = useState("get-jobs"),;
;
  // Sample endpoint data;
  const endpoints = [;
    {;
      id:"get-jobs",;
      method:"GET",;
      path:"/api/jobs",,
  description:"Retrieve a list of job postings with optional filtering",;
      parameters:[;
        { name:"status", type:"string", description:"Filter by job status (open, closed, draft)" },;
        { name:"category", type:"string", description:"Filter by job category" },;
        { name:"limit", type:"integer", description:"Number of results per page (default:20, max:100)" },;
        { name:"offset", type:"integer", description:"Pagination offset (default:0)" }],;
      responses:{;
        "200":{,
  description:"A list of jobs",;
          example:`{;
  "jobs":[;
    {;
      "id":"job-123",;
      "title":"Senior React Developer",;
      "description":"We're looking for an experienced React developer...",;
      "category":"development",;
      "budget":{;
        "min":5000,;
        "max":10000,;
        "currency":"USD";
      },;
      "status":"open",;
      "created_at":"2023-05-10T15:30:00Z";
    },;
    // More jobs...;
  ],;
  "count":42,;
  "limit":20,;
  "offset":0;
}`;
        },;
        "401":{,
  description:"Unauthorized",;
          example:`{;
  "error":"invalid_token",;
  "message":"The provided API key is invalid or expired";
}`;
        },;
        "429":{,
  description:"Rate limit exceeded",;
          example:`{;
  "error":"rate_limit_exceeded",;
  "message":"Rate limit exceeded. Please try again in 60 seconds",;
  "retry_after":60;
}`;
        }
      },;
      requestExample:`curl -X GET \\;
  https://api.zionai.com/v1/api/jobs?status=open&limit=10 \\;
  -H "Authorization:Bearer YOUR_API_KEY"`;
    },;
    {;
      id:"post-jobs",;
      method:"POST",;
      path:"/api/jobs",,
  description:"Create a new job posting",;
      parameters:[;
        { name:"title", type:"string", required:true, description:"Job title" },;
        { name:"description", type:"string", required:true, description:"Detailed job description" },;
        { name:"category", type:"string", required:true, description:"Job category" },;
        { name:"budget", type:"object", required:true, description:"Budget information with min, max, and currency" },;
        { name:"skills", type:"array", description:"Array of required skills" },;
        { name:"deadline", type:"string", description:"Application deadline (ISO date format)" }],;
      responses:{;
        "201":{,
  description:"Job created successfully",;
          example:`{;
  "id":"job-456",;
  "title":"UX Designer",;
  "description":"Looking for a UX designer with 3+ years experience...",;
  "category":"design",;
  "budget":{;
    "min":3000,;
    "max":5000,;
    "currency":"USD";
  },;
  "status":"open",;
  "created_at":"2023-05-15T10:12:00Z";
}`;
        },;
        "400":{,
  description:"Bad request",;
          example:`{;
  "error":"validation_error",;
  "message":"Invalid input",;
  "details":[;
    {;
      "field":"title",;
      "error":"Title is required";
    }
  ];
}`;
        }
      },;
      requestExample:`curl -X POST \\;
  https://api.zionai.com/v1/api/jobs \\;
  -H "Authorization:Bearer YOUR_API_KEY" \\;
  -H "Content-Type:application/json" \\;
  -d '{;
    "title":"UX Designer",;
    "description":"Looking for a UX designer with 3+ years experience...",;
    "category":"design",;
    "budget":{;
      "min":3000,;
      "max":5000,;
      "currency":"USD";
    },;
    "skills":["Figma", "User Research", "Prototyping"],;
    "deadline":"2023-07-01T00:00:00Z";
  }'`;
    },;
    {;
      id:"get-talent",;
      method:"GET",;
      path:"/api/talent",,
  description:"Search for talent profiles with optional filtering",;
      parameters:[;
        { name:"skills", type:"string", description:"Comma-separated list of skills" },;
        { name:"category", type:"string", description:"Filter by talent category" },;
        { name:"rate_min", type:"integer", description:"Minimum hourly rate" },;
        { name:"rate_max", type:"integer", description:"Maximum hourly rate" },;
        { name:"availability", type:"string", description:"Availability type (full-time, part-time)" },;
        { name:"limit", type:"integer", description:"Number of results per page (default:20, max:100)" },;
        { name:"offset", type:"integer", description:"Pagination offset (default:0)" }],;
      responses:{;
        "200":{,
  description:"A list of talent profiles",;
          example:`{;
  "talent":[;
    {;
      "id":"talent-123",;
      "full_name":"Jane Smith",;
      "professional_title":"Full Stack Developer",;
      "skills":["React", "Node.js", "TypeScript"],;
      "hourly_rate":75,;
      "availability":"full-time",;
      "years_experience":5,;
      "location":"Remote, US",;
      "bio":"Experienced full stack developer with a focus on React and Node.js...";
    },;
    // More talent profiles...;
  ],;
  "count":38,;
  "limit":20,;
  "offset":0;
}`;
        }
      },;
      requestExample:`curl -X GET \\;
  https://api.zionai.com/v1/api/talent?skills=React,Node.js&limit=10 \\;
  -H "Authorization:Bearer YOUR_API_KEY"`;
    }
  ],;
;
  // Find the active endpoint data;
  const activeEndpointData = endpoints.find(e => e.id === activeEndpoint),;
;
  return (;
  return (
    <ApiDocsLayout>;
      <div className="grid md:grid-cols-5 gap-8">;
        {/* Endpoint list */}"
        <div className="md:col-span-1">;"
          <div className="sticky top-8">;"
            <h3 className="text-lg font-semibold text-white mb-4">Endpoints</h3>;"
            <ul className="space-y-2">;
      request_example: `curl -X GET \\;
  https://api.zionai.com / v1 / api / talent?skills = React, Node.js & limit = 10 \\;
  -H "Authorization: Bearer YOUR_API_KEY"`;
    }
  ];
;
  // Find the active endpoint data;
  const activeEndpointData = endpoints.find (e => e.id === active_endpoint);
;
  return (
    <ApiDocsLayout>;
      <div className="grid md:grid - cols - 5 gap-8">;
        {/* Endpoint list */}
        <div className="md:col - span-1">;
          <div className="sticky top-8">;
            <h3 className="text - lg font - semibold text - white mb-4">Endpoints</h3>;
            <ul className="space-y-2">;
              {endpoints.map ((endpoint) => (
                <li key={endpoint.id}>;
                  <button;
                    on_click={() => setActiveEndpoint (endpoint.id)}
                    className={`w - full text - left px - 3 py - 2 rounded - md text - sm flex items - center ${`                      }
                      active_endpoint === endpoint.id;
                        ? "bg - zion - purple / 20 text - zion - cyan";
                        : "text - zinc - 400 hover:text - white hover:bg - zinc - 900";
                    }`}
                  >;
                    <span className={`inline - block w - 16 font - mono ${endpoint.method === "GET" ? "text - green - 500" : endpoint.method === "POST" ? "text - blue - 500" : "text - yellow - 500"}`}>;
              {endpoints.map((endpoint) => (;
                <li key={endpoint.id}>;
                  <button;
                    onClick={() => setActiveEndpoint(endpoint.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm flex items-center ${;
                      activeEndpoint === endpoint.id;
                        ? "bg-zion-purple/20 text-zion-cyan";
                        :"text-zinc-400 hover:text-white hover:bg-zinc-900";
                    }`}
                  >;
                    <span className={`inline-block w-16 font-mono ${endpoint.method === "GET" ? "text-green-500" :endpoint.method === "POST" ? "text-blue-500" :"text-yellow-500"}`}>;
                      {endpoint.method}
                    </span>;"
                    <span className="truncate">{endpoint.path}</span>;
                    <span className=\"truncate\" />{endpoint.path}</span>;

    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    <ApiDocsLayout>;
</ApiDocsLayout>'
      <div className="grid md:grid-cols-5 gap-8">;"
</div>"
        <div className="md:col-span-1">;"
</div>"
          <div className="sticky top-8">;"
</div>"
            <h3 className="text-lg font-semibold text-white mb-4">Endpoints</h3>;""
            <ul className="space-y-2">;"
</ul>
                <li key={endpoint && endpoint.id}>;
</li>
                  <button;
                    onClick={() => setActiveEndpoint(endpoint && endpoint.id)}
</button>
                    </span>;"
                    <span className="truncate">{endpoint && endpoint.path}</span>;"
                  </button>;
                </li>))}
            </ul>;
          </div>;
        </div>;

        {/* Endpoint details */}
        <div className="md:col - span-4">;
          {activeEndpointData ? (
            </ul>;
          </div>;
        </div>;

        {/* Endpoint details */}                      language="bash"
                      showLineNumbers={true}
                    />
                  </div>
                  {/* Response section */}
<<<<<<< HEAD


=======
                  <div>

                  <div>"
                    <h3 className="text-xl font-semibold text-white mb-4">Responses</h3>
                    {Object.entries(activeEndpointData.responses).map(([status, response]) => ("
                      <div key={status} className="mb-6">"
                        <div className="flex items-center mb-3">`
                          <span className={`inline-block px-2 py-1 text-xs font-medium rounded mr-3 ${'
                            status.startsWith('2') ? 'bg-green-950 text-green-500' :'
                            status === '401' |status === '403' ? 'bg-orange-950 text-orange-500' :

                    <h4 className="text-lg font-medium text-white mb-3">Example Request</h4>;
                    <CodeBlock
                      code={activeEndpointData && activeEndpointData.requestExample} 
                      language="bash"
                      showLineNumbers={true}
                    />;
                  </div>;
                    {Object && Object.entries(activeEndpointData && activeEndpointData.responses).map(([status, response]) => (;
                      <div key={status} className="mb-6">;
                        <div className="flex items-center mb-3">;
                          <spanclassName={`inline-block px-2 py-1 text-xs font-medium rounded mr-3 ${
                            status && status.startsWith('2') ? 'bg-green-950 text-green-500' : 
                            status === '401' || status === '403' ? 'bg-orange-950 text-orange-500' : 
                            'bg-red-950 text-red-500'
                          }`}>;
                            {status}

                          </span>;
                          <span className="text-white">{response && response.description}</span>;
                        </div>;

                        <CodeBlock
                          code={response && response.example} 

                        

                        <CodeBlock 
                          code={response.example} 
                          language="json"                        <CodeBlock 
                          code={response.example} 
                            'bg-red-950 text-red-500'
                          }`}>;
                            {status}
                          language="json"
                          showLineNumbers={true}
                        />;
                      </div>;
                    ))}
                  </div>;
                </TabsContent>;
                <TabsContent value="try">;
                  <div className="p-8 border border-zinc-800 rounded-lg flex items-center justify-center">;
                    <div className="text-center">;
                      <p className="text-zinc-400 mb-3">Interactive API tester coming soon</p>;
                      <p className="text-zinc-600 text-sm">Try the Postman collection in the meantime</p>;

export default ApiReference;

            <div className="p - 8 border border - zinc - 800 rounded - lg text-center">;
              <p className="text - zinc-400">Select an endpoint from the list to view details</p>;
            </div>)}
        </div>;
      </div>;
    </ApiDocsLayout>);
}
;

;

export default ApiReference;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df