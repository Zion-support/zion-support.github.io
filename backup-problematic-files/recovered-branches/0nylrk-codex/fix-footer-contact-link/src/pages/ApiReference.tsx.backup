import React, { useState } from "react",;
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",;
import { CodeBlock } from "@/components/developers/CodeBlock",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
;
export function ApiReference() {;
  const [activeEndpoint, setActiveEndpoint] = useState("get-jobs"),;

;
export function ApiReference() {;"
  const [activeEndpoint, setActiveEndpoint] = useState("get-jobs"),;"
  // Sample endpoint data;
  const endpoints = [;
    {;

      parameters:[;
        { name: "status";, type: "string";, description: "Filter by job status (open;, closed, draft)" },;
        { name: "category";, type: "string";, description: "Filter by job category" ;},;
        { name: "limit";, type: "integer";, description: "Number of results per page (default:20;, max: 100)" ;},;
        { name: "offset";, type: "integer";, description: "Pagination offset (default:0)" ;}],;
      responses:{;

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

          example:`{;
  "error":"invalid_token",;
  "message":"The provided API key is invalid or expired";
}`;
        },;

          example:`{;
  "error":"rate_limit_exceeded",;
  "message":"Rate limit exceeded. Please try again in 60 seconds",;
  "retry_after":60;
    {;"
      id: "get-jobs";,;""
      method: "GET";,;""
      path: "/api/jobs";,;""
      description: "Retrieve a list of job postings with optional filtering";,;"
      parameters:[;"
        { name: "status";, type: "string";, description: "Filter by job status (open;, closed, draft)" },;""
        { name: "category";, type: "string";, description: "Filter by job category" ;},;""
        { name: "limit";, type: "integer";, description: "Number of results per page (default:20;, max: 100)" ;},;"]"
        { name: "offset";, type: "integer";, description: "Pagination offset (default:0)" ;}],;"
      responses:{;"
        "200":{;""
          description: "A list of jobs";,;"
          example:`{;"
  "jobs":[;"
      "id":"job-123",;""
      "title":"Senior React Developer",;""
      "description":"We're looking for an experienced React developer...",;""
      "category":"development",;""
      "budget":{;""
        "min":5000,;""
        "max":10000,;""
        "currency":"USD";"
      },;"
      "status":"open",;""
      "created_at":"2023-05-10T15:30:00Z";"
    },;
    // More jobs...;]
  ],;"
  "count":42,;""
  "limit":20,;""
  "offset":0;"`;
pr-12325
}`;
        "401":{;""
          description: "Unauthorized";,;"`;
  "error":"invalid_token",;""
  "message":"The provided API key is invalid or expired";"`;
        "429":{;""
          description: "Rate limit exceeded";,;"`;
  "error":"rate_limit_exceeded",;""
  "message":"Rate limit exceeded. Please try again in 60 seconds",;""
  "retry_after":60;"`;
        }
      },;
      requestExample:`curl -X GET \\;
  https://api.zionai.com/v1/api/jobs?status=open&limit=10 \\;
  -H "Authorization:Bearer YOUR_API_KEY"`;
    },;
    {;

      parameters:[;
        { name: "title";, type: "string";, required: true;, description: "Job title" ;},;
        { name: "description";, type: "string";, required: true;, description: "Detailed job description" ;},;
        { name: "category";, type: "string";, required: true;, description: "Job category" ;},;
        { name: "budget";, type: "object";, required: true;, description: "Budget information with min;, max, and currency" },;
        { name: "skills";, type: "array";, description: "Array of required skills" ;},;
        { name: "deadline";, type: "string";, description: "Application deadline (ISO date format)" ;}],;
      responses:{;

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
      },;`;
      requestExample: `curl -X GET \\;,
  https://api.zionai.com/v1/api/jobs?status=open&limit=10 \\;"`;
  -H "Authorization:Bearer YOUR_API_KEY"`;"
      id: "post-jobs";,;""
      method: "POST";,;""
      description: "Create a new job posting";,;"
        { name: "title";, type: "string";, required: true;, description: "Job title" ;},;""
        { name: "description";, type: "string";, required: true;, description: "Detailed job description" ;},;""
        { name: "category";, type: "string";, required: true;, description: "Job category" ;},;""
        { name: "budget";, type: "object";, required: true;, description: "Budget information with min;, max, and currency" },;""
        { name: "skills";, type: "array";, description: "Array of required skills" ;},;"]"
        { name: "deadline";, type: "string";, description: "Application deadline (ISO date format)" ;}],;"
        "201":{;""
          description: "Job created successfully";,;"`;
  "id":"job-456",;""
  "title":"UX Designer",;""
  "description":"Looking for a UX designer with 3+ years experience...",;""
  "category":"design",;""
    "min":3000,;""
    "max":5000,;""
  "created_at":"2023-05-15T10:12:00Z";"`;
        "400":{;""
          description: "Bad request";,;"`;
  "error":"validation_error",;""
  "message":"Invalid input",;""
  "details":[;"
      "field":"title",;""
      "error":"Title is required";"
    }]
  ];`;
      requestExample: `curl -X POST \\;,
  https://api.zionai.com/v1/api/jobs \\;"
  -H "Authorization:Bearer YOUR_API_KEY" \\;""
  -H "Content-Type:application/json" \\;""
pr-12325
  -d '{;
    "skills":["Figma", "User Research", "Prototyping"],;""
    "deadline":"2023-07-01T00:00:00Z";""`;
  }'`;
    {;

      parameters:[;
        { name: "skills";, type: "string";, description: "Comma-separated list of skills" ;},;
        { name: "category";, type: "string";, description: "Filter by talent category" ;},;
        { name: "rate_min";, type: "integer";, description: "Minimum hourly rate" ;},;
        { name: "rate_max";, type: "integer";, description: "Maximum hourly rate" ;},;
        { name: "availability";, type: "string";, description: "Availability type (full-time;, part-time)" },;
        { name: "limit";, type: "integer";, description: "Number of results per page (default:20;, max: 100)" ;},;
        { name: "offset";, type: "integer";, description: "Pagination offset (default:0)" ;}],;
      responses:{;

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
      id: "get-talent";,;""
      path: "/api/talent";,;""
      description: "Search for talent profiles with optional filtering";,;"
        { name: "skills";, type: "string";, description: "Comma-separated list of skills" ;},;""
        { name: "category";, type: "string";, description: "Filter by talent category" ;},;""
        { name: "rate_min";, type: "integer";, description: "Minimum hourly rate" ;},;""
        { name: "rate_max";, type: "integer";, description: "Maximum hourly rate" ;},;""
        { name: "availability";, type: "string";, description: "Availability type (full-time;, part-time)" },;""
          description: "A list of talent profiles";,;"`;
  "talent":[;"
      "id":"talent-123",;""
      "full_name":"Jane Smith",;""
      "professional_title":"Full Stack Developer",;"]"
      "skills":["React", "Node.js", "TypeScript"],;""
      "hourly_rate":75,;""
      "availability":"full-time",;""
      "years_experience":5,;""
      "location":"Remote, US",;""
      "bio":"Experienced full stack developer with a focus on React and Node.js...";"
pr-12325
    // More talent profiles...;
  "count":38,;""
  https: //api.zionai.com/v1/api/talent?skills=React;,Node.js&limit=10 \\;"`;
  ],;
  // Find the active endpoint data;
  const activeEndpointData = endpoints.find(e => e.id === activeEndpoint),;
  return (;

    <ApiDocsLayout>;

                <li key={endpoint.id}>;
</li>
                  <button;)
                    onClick={() => setActiveEndpoint(endpoint.id)}

                  </button>;


        <div className="md:col-span-4">;
          {activeEndpointData ? (;
            <div>;
              <div className="flex items-center mb-6">;

              <Tabs defaultValue="docs">;
                <TabsList className="mb-6">;
                  <TabsTrigger value="docs">Documentation</TabsTrigger>;
                  <TabsTrigger value="try">Try It</TabsTrigger>;
                </TabsList>;
                <TabsContent value="docs">;
                  {/* Request section */}
                  <div className="mb-8">;
                    <h3 className="text-xl font-semibold text-white mb-4">Request</h3>;

                      <>;
                        <h4 className="text-lg font-medium text-white mb-3">Parameters</h4>;
                        <div className="overflow-x-auto mb-6">;
                          <table className="w-full border-collapse">;

                            <thead>;
</thead>"
                              <tr className="border-b border-zinc-800">;"
</tr>"
                                <th className="text-left py-2 px-4 text-zinc-400 font-medium">Name</th>;""
                                <th className="text-left py-2 px-4 text-zinc-400 font-medium">Type</th>;""
                                <th className="text-left py-2 px-4 text-zinc-400 font-medium">Required</th>;""
                                <th className="text-left py-2 px-4 text-zinc-400 font-medium">Description</th>;"
                              </tr>;
                            </thead>;
                            <tbody>;

                                </tr>;                              ))}

                            </tbody>;
                          </table>;
                      </>;
                    )}

                    <CodeBlock ;
                      code={activeEndpointData.requestExample} ;"
                      language="bash";"
                      showLineNumbers={true}
                    />;

                    <h3 className="text-xl font-semibold text-white mb-4">Responses</h3>;""
                      <div key={status} className="mb-6">;"
                        <div className="flex items-center mb-3">;"
                            status.startsWith('2') ? 'bg-green-950 text-green-500' :;
                            status === '401' || status === '403' ? 'bg-orange-950 text-orange-500' :;
                            'bg-red-950 text-red-500';`;
                          </span>;
                          <span className="text-white">{response.description}</span>;
                        </div>;
                        ;
                        <CodeBlock ;
                          code={response.example} ;
                          language="json";

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