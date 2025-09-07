
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import React, { useState } from "react",;
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",;
import { CodeBlock } from "@/components/developers/CodeBlock",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
;
export function ApiReference() {;
  const [activeEndpoint, setActiveEndpoint] = useState("get-jobs"),;
=======
import React, { useState } from "react";""
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";""
import { CodeBlock } from "@/components/developers/CodeBlock";""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
;
export function ApiReference() {;"
  const [activeEndpoint, setActiveEndpoint] = useState("get-jobs"),;"
  // Sample endpoint data;
  const endpoints = [;
    {;
<<<<<<< HEAD
      id:"get-jobs",;
      method:"GET",;
<<<<<<< HEAD
      path:"/api/jobs",;
      description:"Retrieve a list of job postings with optional filtering",;
=======
      path:"/api/jobs",,
  description:"Retrieve a list of job postings with optional filtering",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      id: "get-jobs";,;
      method: "GET";,;
      path: "/api/jobs";,,
  description: "Retrieve a list of job postings with optional filtering";,;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      parameters:[;
        { name: "status";, type: "string";, description: "Filter by job status (open;, closed, draft)" },;
        { name: "category";, type: "string";, description: "Filter by job category" ;},;
        { name: "limit";, type: "integer";, description: "Number of results per page (default:20;, max: 100)" ;},;
        { name: "offset";, type: "integer";, description: "Pagination offset (default:0)" ;}],;
      responses:{;
<<<<<<< HEAD
        "200":{;
          description:"A list of jobs",;
=======
        "200":{,
<<<<<<< HEAD
  description:"A list of jobs",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  description: "A list of jobs";,;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
        "401":{;
          description:"Unauthorized",;
=======
        "401":{,
<<<<<<< HEAD
  description:"Unauthorized",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  description: "Unauthorized";,;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          example:`{;
  "error":"invalid_token",;
  "message":"The provided API key is invalid or expired";
}`;
        },;
<<<<<<< HEAD
        "429":{;
          description:"Rate limit exceeded",;
=======
        "429":{,
<<<<<<< HEAD
  description:"Rate limit exceeded",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  description: "Rate limit exceeded";,;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
      id:"post-jobs",;
      method:"POST",;
<<<<<<< HEAD
      path:"/api/jobs",;
      description:"Create a new job posting",;
=======
      path:"/api/jobs",,
  description:"Create a new job posting",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      id: "post-jobs";,;
      method: "POST";,;
      path: "/api/jobs";,,
  description: "Create a new job posting";,;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      parameters:[;
        { name: "title";, type: "string";, required: true;, description: "Job title" ;},;
        { name: "description";, type: "string";, required: true;, description: "Detailed job description" ;},;
        { name: "category";, type: "string";, required: true;, description: "Job category" ;},;
        { name: "budget";, type: "object";, required: true;, description: "Budget information with min;, max, and currency" },;
        { name: "skills";, type: "array";, description: "Array of required skills" ;},;
        { name: "deadline";, type: "string";, description: "Application deadline (ISO date format)" ;}],;
      responses:{;
<<<<<<< HEAD
        "201":{;
          description:"Job created successfully",;
=======
        "201":{,
<<<<<<< HEAD
  description:"Job created successfully",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  description: "Job created successfully";,;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
        "400":{;
          description:"Bad request",;
=======
        "400":{,
<<<<<<< HEAD
  description:"Bad request",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  description: "Bad request";,;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
      id:"get-talent",;
      method:"GET",;
<<<<<<< HEAD
      path:"/api/talent",;
      description:"Search for talent profiles with optional filtering",;
=======
      path:"/api/talent",,
  description:"Search for talent profiles with optional filtering",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      id: "get-talent";,;
      method: "GET";,;
      path: "/api/talent";,,
  description: "Search for talent profiles with optional filtering";,;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      parameters:[;
        { name: "skills";, type: "string";, description: "Comma-separated list of skills" ;},;
        { name: "category";, type: "string";, description: "Filter by talent category" ;},;
        { name: "rate_min";, type: "integer";, description: "Minimum hourly rate" ;},;
        { name: "rate_max";, type: "integer";, description: "Maximum hourly rate" ;},;
        { name: "availability";, type: "string";, description: "Availability type (full-time;, part-time)" },;
        { name: "limit";, type: "integer";, description: "Number of results per page (default:20;, max: 100)" ;},;
        { name: "offset";, type: "integer";, description: "Pagination offset (default:0)" ;}],;
      responses:{;
<<<<<<< HEAD
        "200":{;
          description:"A list of talent profiles",;
=======
        "200":{,
<<<<<<< HEAD
  description:"A list of talent profiles",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  description: "A list of talent profiles";,;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    <ApiDocsLayout>;
<<<<<<< HEAD
      <div className="grid md:grid-cols-5 gap-8">;
        {/* Endpoint list */}
        <div className="md:col-span-1">;
          <div className="sticky top-8">;
            <h3 className="text-lg font-semibold text-white mb-4">Endpoints</h3>;
            <ul className="space-y-2">;
<<<<<<< HEAD

=======
              {endpoints.map((endpoint) => (;
=======
"
      <div className="grid md:grid-cols-5 gap-8">;"
</div>"
        <div className="md:col-span-1">;"
          <div className="sticky top-8">;"
            <h3 className="text-lg font-semibold text-white mb-4">Endpoints</h3>;""
            <ul className="space-y-2">;"
</ul>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                <li key={endpoint.id}>;
</li>
                  <button;)
                    onClick={() => setActiveEndpoint(endpoint.id)}
<<<<<<< HEAD
                    className={`w-full text-left px-3 py-2 rounded-md text-sm flex items-center ${;
                      activeEndpoint === endpoint.id;
                        ? "bg-zion-purple/20 text-zion-cyan";
                        :"text-zinc-400 hover:text-white hover:bg-zinc-900";
                    }`}
                  >;
                    <span className={`inline-block w-16 font-mono ${endpoint.method === "GET" ? "text-green-500" :endpoint.method === "POST" ? "text-blue-500" :"text-yellow-500"}`}>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                      {endpoint.method}
                    </span>;
                    <span className="truncate">{endpoint.path}</span>;
=======
</button>"`;
                    <span className={`inline-block w-16 font-mono ${endpoint.method === "GET" ? "text-green-500" :endpoint.method === "POST" ? "text-blue-500" :"text-yellow-500"}`}>;"
</span>
                    </span>;"
                    <span className="truncate">{endpoint.path}</span>;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  </button>;
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
                </li>;              ))}
            </ul>;
          </div>;
<<<<<<< HEAD
        </div>;
;
        {/* Endpoint details */}
                </li>;              ))}
            </ul>;
          </div>;
        </div>;
;
        {/* Endpoint details */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        <div className="md:col-span-4">;
          {activeEndpointData ? (;
            <div>;
              <div className="flex items-center mb-6">;
<<<<<<< HEAD

=======
                <span className={`inline-block px-2 py-1 text-xs font-medium rounded mr-3 ${;
                  activeEndpointData.method === "GET" ? "bg-green-950 text-green-500" :;
                  activeEndpointData.method === "POST" ? "bg-blue-950 text-blue-500" :;
                  "bg-yellow-950 text-yellow-500";
                }`}>;
                  {activeEndpointData.method}
                </span>;
                <span className="font-mono text-lg text-white">{activeEndpointData.path}</span>;
              </div>;
;
              <p className="text-zinc-400 mb-8">{activeEndpointData.description}</p>;
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              <Tabs defaultValue="docs">;
                <TabsList className="mb-6">;
                  <TabsTrigger value="docs">Documentation</TabsTrigger>;
                  <TabsTrigger value="try">Try It</TabsTrigger>;
                </TabsList>;
                <TabsContent value="docs">;
                  {/* Request section */}
                  <div className="mb-8">;
                    <h3 className="text-xl font-semibold text-white mb-4">Request</h3>;
<<<<<<< HEAD

=======
                    ;
                    {activeEndpointData.parameters && activeEndpointData.parameters.length > 0 && (;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                      <>;
                        <h4 className="text-lg font-medium text-white mb-3">Parameters</h4>;
                        <div className="overflow-x-auto mb-6">;
                          <table className="w-full border-collapse">;
=======
        </div>;"
        <div className="md:col-span-4">;"
</div>
            <div>;
              <div className="flex items-center mb-6">;"
</div>`;
                <span className={`inline-block px-2 py-1 text-xs font-medium rounded mr-3 ${;"
                  activeEndpointData.method === "GET" ? "bg-green-950 text-green-500" :;""
                  activeEndpointData.method === "POST" ? "bg-blue-950 text-blue-500" :;""
                  "bg-yellow-950 text-yellow-500";"`;
                }`}>;
                <span className="font-mono text-lg text-white">{activeEndpointData.path}</span>;"
              <p className="text-zinc-400 mb-8">{activeEndpointData.description}</p>;""
              <Tabs defaultValue="docs">;"
                <TabsList className="mb-6">;"
                  <TabsTrigger value="docs">Documentation;""
                  <TabsTrigger value="try">Try It;"
                ;"
                <TabsContent value="docs">;"
                  <div className="mb-8">;"
                    <h3 className="text-xl font-semibold text-white mb-4">Request</h3>;"
                      <>;"
                        <h4 className="text-lg font-medium text-white mb-3">Parameters</h4>;""
                        <div className="overflow-x-auto mb-6">;"
                          <table className="w-full border-collapse">;"
</table>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
                              {activeEndpointData.parameters.map((param, index) => (;
                                <tr key={param.name} className={index < activeEndpointData.parameters.length - 1 ? "border-b border-zinc-800" :""}>;
                                  <td className="py-2 px-4 text-white font-mono">{param.name}</td>;
                                  <td className="py-2 px-4 text-blue-400 font-mono">{param.type}</td>;
                                  <td className="py-2 px-4 text-zinc-300">{param.required ? "Yes" :"No"}</td>;
                                  <td className="py-2 px-4 text-zinc-300">{param.description}</td>;
=======
</tbody>"
                                <tr key={param.name} className={index < activeEndpointData.parameters.length - 1 ? "border-b border-zinc-800" :""}>;"
                                  <td className="py-2 px-4 text-white font-mono">{param.name}</td>;""
                                  <td className="py-2 px-4 text-blue-400 font-mono">{param.type}</td>;""
                                  <td className="py-2 px-4 text-zinc-300">{param.required ? "Yes" :"No"}</td>;""
                                  <td className="py-2 px-4 text-zinc-300">{param.description}</td>;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                                </tr>;                              ))}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                            </tbody>;
                          </table>;
                      </>;
                    )}
<<<<<<< HEAD
<<<<<<< HEAD

=======
;
                    <h4 className="text-lg font-medium text-white mb-3">Example Request</h4>;
=======
                    <h4 className="text-lg font-medium text-white mb-3">Example Request</h4>;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD

=======
                    </div>;
                  </div>;
                </TabsContent>;
              </Tabs>;
            </div>;
          ) :(;
            <div className="p-8 border border-zinc-800 rounded-lg text-center">;
              <p className="text-zinc-400">Select an endpoint from the list to view details</p>;
            </div>;
          )}
        </div>;
      </div>;
    </ApiDocsLayout>;
  ),;}
;
export default ApiReference,
};
//More jobs... ];
"count" : 42;
"limit" : 20;
"offset" : 0 
}` 
};
}
};
requestExample: `curl -X GET \\ https://api.zionai.com/v1/api/jobs?status=open&limit=10 \\ -H "Authorization: Bearer YOUR API KEY" ` ;
};
] 
}` 
}
};
requestExample: `curl -X POST \\ https://api.zionai.com/v1/api/jobs \\ //More talent profiles... ];
"count" : 38;
"limit" : 20;
"offset" : 0 
}` 
}
};
requestExample: `curl -X GET \\ https://api.zionai.com/v1/api/talent?skills=React;, Node.js&limit=10 \\ -H "Authorization: Bearer YOUR API KEY" ` ;
}];
                          <span className="text-white">{response.description}</span>;"
                          code={response.example} ;"
                          language="json";"

                <TabsContent value="try">;"
                  <div className="p-8 border border-zinc-800 rounded-lg flex items-center justify-center">;"
                    <div className="text-center">;"
                      <p className="text-zinc-400 mb-3">Interactive API tester coming soon</p>;""
                      <p className="text-zinc-600 text-sm">Try the Postman collection in the meantime</p>;"
            <div className="p-8 border border-zinc-800 rounded-lg text-center">;"
              <p className="text-zinc-400">Select an endpoint from the list to view details</p>;"
pr-12325
//Find the active endpoint data <button onClick= {
  () => setActiveEndpoint (endpoint.id) 
</button>
  activeEndpoint === endpoint.id </button> </li>) ) "
}</ul> </div> </div> <Tabs defaultValue="docs" > <TabsList className="mb-6" > <TabsTrigger value="docs" >Documentation <TabsTrigger value="try" >Try It  {"
  activeEndpointData.parameters && activeEndpointData.parameters.length > 0 && (<> <h4 className="text-lg font-medium text-white mb-3" >Parameters</h4> <div className="overflow-x-auto mb-6" > <table className="w-full border-collapse" > <thead> <tr className="border-b border-zinc-800" > <th className="text-left py-2 px-4 text-zinc-400 font-medium" >Name</th> <th className="text-left py-2 px-4 text-zinc-400 font-medium" >Type</th> <th className="text-left py-2 px-4 text-zinc-400 font-medium" >Required</th> <th className="text-left py-2 px-4 text-zinc-400 font-medium" >Description</th> </tr> </thead> <tbody> </tr>) )"
}</tbody> </table> </div> </>) "
}<h4 className="text-lg font-medium text-white mb-3" >Example Request</h4> <CodeBlock /> </div> {""
}<div> <h3 className="text-xl font-semibold text-white mb-4">Responses</h3> {"
  Object.entries (activeEndpointData.responses) .map ( ([status, response]) => (<div key= {
<<<<<<< HEAD
  status 
}className="mb-6"> <div className="flex items-center mb-3"> <span className= {
  `inline-block px-2 py-1 text-xs font-medium rounded mr-3 $ {
  status.startsWith ('2') ? 'bg-green-950 text-green-500' : status === '401' || status === '403' ? 'bg-orange-950 text-orange-500' : 'bg-red-950 text-red-500' 
}` 
}> {
  status 
}</span> /> </div>) ) 
}</div> </TabsContent> <TabsContent value="try"> <div className="p-8 border border-zinc-800 rounded-lg flex items-center justify-center"> <div className="text-center"> <p className="text-zinc-400 mb-3">Interactive API tester coming soon</p> <p className="text-zinc-600 text-sm">Try the Postman collection in the meantime</p> </div> </div> </TabsContent> </Tabs> </div>) : (<div className="p-8 border border-zinc-800 rounded-lg text-center"> <p className="text-zinc-400">Select an endpoint from the list to view details</p> </div>) 
}</div> </div> </ApiDocsLayout>) 
}export default ApiReference;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  status;"
}className="mb-6"> <div className="flex items-center mb-3"> <span className= {"
</div>)
}</span> /> </div>) ) "
}</div>  <TabsContent value="try"> <div className="p-8 border border-zinc-800 rounded-lg flex items-center justify-center"> <div className="text-center"> <p className="text-zinc-400 mb-3">Interactive API tester coming soon</p> <p className="text-zinc-600 text-sm">Try the Postman collection in the meantime</p> </div> </div>   </div>) : (<div className="p-8 border border-zinc-800 rounded-lg text-center"> <p className="text-zinc-400">Select an endpoint from the list to view details</p> </div>)"
}</div> </div> ) "`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
