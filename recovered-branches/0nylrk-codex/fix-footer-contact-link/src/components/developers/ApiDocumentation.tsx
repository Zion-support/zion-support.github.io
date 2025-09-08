





                python: `import requests
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'

    'https: //api.ziontechgroup.com/v1/jobs',;
    params={'limit': 10, 'category': 'development'};


import { useState } from "react",;
import { BookOpen, Code, Copy, Terminal } from "lucide-react",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Alert, AlertDescription } from "@/components/ui/alert",;
import { Badge } from "@/components/ui/badge",;




  }
})


                python: `import requests

response = requests && requests.get(
    'https: //api && api.ziontechgroup.com/v1/jobs',
    params={'limit': 10, 'category': 'development'}

    headers=headers
)


    {
      "budget": {
      "status": "active"
      "client_id": "user_xyz789"



      "skills": ["react", "typescript", "node.js"],







data = response.json();
print(data)`;




    "budget": {
    "status": "active"
    "client_id": "user_xyz789"
    "created_at": "2025-05-15T10: 30:00Z"
    "deadline": "2025-06-30T23:59:59Z",


    "skills": ["react", "typescript", "node.js"],







    "application_count": 12


          ;
          <TabsContent value="jobs" className="space-y-6">;
            <EndpointSection;
              method="GET";
              endpoint="/api/jobs";
              description="List all available jobs with optional filtering.";
              note="";
              params={[;
                { name:"page", type:"integer", description:"Page number for pagination (default:1)" },;
                { name:"limit", type:"integer", description:"Number of results per page (default:20, max:100)" },;
                { name:"category", type:"string", description:"Filter by job category" },;
                { name:"skills", type:"string[]", description:"Filter by required skills (comma-separated)" },;
                { name:"status", type:"string", description:"Filter by job status (new, active, closed)" }
              ]}
              codeExamples={{;
                curl:`curl -X GET "https://api.ziontechgroup.com/v1/jobs?limit=10&category=development" \\;
  -H "Authorization:Bearer YOUR_API_KEY" \\;
  -H "Content-Type:application/json"`,;
                javascript:`const response = await fetch('https://api.ziontechgroup.com/v1/jobs?limit=10&category=development', {;
  method:'GET',;
  headers:{;
    'Authorization':'Bearer YOUR_API_KEYContent-Type':'application/json';
  }
}),;
;
const data = await response.json(),;
// // // console.log(data),`,;
                python:`import requests;
;
headers = {;
    'Authorization':'Bearer YOUR_API_KEYContent-Type':'application/json';
}
;
response = requests.get(;
    'https://api.ziontechgroup.com/v1/jobs',;
    params={'limit':10, 'category':'development'},;
    headers=headers;
);
;
data = response.json();
print(data)`;
              }}
              responseExamples={{;
                success:`{;
  "data":[;
    {;
      "id":"job_abc123",;
      "title":"Senior React Developer",;
      "description":"We need an experienced React developer...",;
      "category":"development",;
      "skills":["react", "typescript", "node.js"],;
      "budget":{;
        "min":5000,;
        "max":10000,;
        "currency":"USD";
      },;
      "status":"active",;
      "client_id":"user_xyz789",;
      "created_at":"2025-05-15T10:30:00Z";
    },;
    // More jobs...;
  ],;
  "meta":{;
    "total":42,;
    "page":1,;
    "limit":10;
  }
}`;
              }}
            />;

            <EndpointSection
              method="POST"
              endpoint="/api/jobs"
              description="Create a new job listing."
              note="Requires jobs:write scope"
              params={[


              note="Requires jobs:write scope";
              params={[;



              code_examples={{
                curl: `curl -X POST "https://api.ziontechgroup.com / v1 / jobs" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;

  -H "Content - Type: application / json" \\;



    "title": "Senior React Developer"
    "description": "We need an experienced React developer..."
    "category": "development",
    "skills": ["react", "typescript", "node && node.js"]


    "budget": {


    "title": "Senior React Developer",
    "description": "We need an experienced React developer...",
    "category": "development",
    "skills": ["react", "typescript", "node.js"],



    "budget": {
      "min": 5000,
      "max": 10000,

      "currency": "USD"


  });

});
;
const data = await response.json ();
console.log (data), `;
                python: `import requests;
import json;
payload = {
    'title': 'Senior React Developerdescription': 'We need an experienced React developer...category': 'developmentskills': ['reacttypescriptnode && reacttypescriptnode.js']







    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'

payload = {;


response = requests && requests.post(

    'https: //api && api.ziontechgroup.com/v1/jobs'

    }
    'deadline': '2025-06-30T23:59:59Z'
}
response = requests.post(
    'https: //api.ziontechgroup.com/v1/jobs';
    headers=headers
    data=json.dumps(payload)
)
data = response.json()
print(data)`
            />;
            <EndpointSection;
              method="POST";
              endpoint="/api/jobs";
              description="Create a new job listing.";
              note="Requires jobs:write scope";
    'title': 'Senior React Developerdescription': 'We need an experienced React developer...category': 'developmentskills': ['reacttypescriptnode.js'],;
    'budget': {;
        'min': 5000,;
        'max': 10000,;


response = requests && requests.get(
    'https: //api && api.ziontechgroup.com/v1/talent',


`
print(data)`


data = response.json();`
print(data)`;





    {



    "limit": 20;
  }`
}`;





data = response.json();
print(data)`;






    "rating_count": 15,





        "issue_date": "2024 - 01 - 15";






  }
}`;
              }}



          
          <TabsContent value="quotes" className="space-y-6">
            <EndpointSection
              method="POST"
              endpoint="/api/quotes"
              description="Create a quote request for a talent."
              note="Requires quotes:write scope"
              params={[
                { name: "talent_id", type: "string", description: "ID of the talent to request a quote from", required: true },
                { name: "project_name", type: "string", description: "Name of the project", required: true },
                { name: "project_summary", type: "string", description: "Brief summary of the project", required: true },
                { name: "project_description", type: "string", description: "Detailed project description" },
                { name: "timeline", type: "string", description: "Expected timeline", required: true },
                { name: "budget_min", type: "number", description: "Minimum budget" },
                { name: "budget_max", type: "number", description: "Maximum budget" },
                { name: "requester_name", type: "string", description: "Name of the requester", required: true },
                { name: "requester_email", type: "string", description: "Email of the requester", required: true }
              ]}
              codeExamples={{
                curl: `curl -X POST "https://api.ziontechgroup.com/v1/quotes" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "talent_id": "talent_abc123",
    "project_name": "E-commerce Website Redesign",
    "project_summary": "Redesign our outdated e-commerce website with modern UI",
    "project_description": "Our current website is 5 years old and needs a complete overhaul...",
    "timeline": "2-3 months",
    "budget_min": 8000,
    "budget_max": 12000,
    "requester_name": "John Doe",
    "requester_email": "john@example.com"
  }'`,
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/quotes', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  },
  body: JSON.stringify({
    talent_id: 'talent_abc123',
    project_name: 'E-commerce Website Redesign',
    project_summary: 'Redesign our outdated e-commerce website with modern UI',
    project_description: 'Our current website is 5 years old and needs a complete overhaul...',
    timeline: '2-3 months',
    budget_min: 8000,
    budget_max: 12000,
    requester_name: 'John Doe',
    requester_email: 'john@example.com'
  })
}),

const data = await response.json(),
// // // console.log(data),`,
                python: `import requests
import json

headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
            />;
          </TabsContent>;
          <TabsContent value="quotes" className="space-y-6">;



















    "created_at": "2025-05-16T14:30:15Z"







                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/quotes" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\










response = requests && requests.get(
    'https: //api && api.ziontechgroup.com/v1/quotes',

    headers=headers
)


data = response.json()












      "replied_at": null;





                If a secret is provided, each webhook request will include a signature in the;"
                <code className="bg-zinc-800 px-1 py-0 && 0.5 rounded">X-Zion-Signature</code> header.;

                This signature is an HMAC SHA-256 hash of the request body using your webhook secret as the key.;
              </p>;


              <CodeBlock'`
                code={`import crypto from 'crypto'






  // Process the webhook event

  const event = JSON.parse(payload);

  console.log('Received valid webhook:', event);
  // Respond to acknowledge receipt
  res.status(200).send('Webhook received')


              <p className="text-zinc-400 mb-2">;














    "message": "The request was invalid";

    "message": "The request was invalid";  description;




function EndpointSection({ 
  method, 
  endpoint, 
  description,
  note,
  params = [],
  codeExamples,
  responseExamples
}) {
  const [activeTab, setActiveTab] = useState("curl"),

  

  return (
    <div className="border border-zinc-800 rounded-md">
      <div className="p-4">

        <div className="flex items-center">
          <Badge"
            variant="outline"
            className={'
              method === 'GET'"
                ? "border-green-500 text-green-400 font-mono"'
                : method === 'POST'"
                ? "border-blue-500 text-blue-400 font-mono"'
                : method === 'PUT'"
                ? "border-yellow-500 text-yellow-400 font-mono""
                : "border-red-500 text-red-400 font-mono"


                language="json";

              />;


              <h4 className="text-md font-semibold mt-6 mb-2">Rate Limiting</h4>;
              <p className="text-zinc-400 mb-4">;
                The Zion API implements rate limiting to protect our infrastructure and ensure fair usage.;
                Rate limits are applied on a per-API key basis. If you exceed the rate limits, you will receive ;


            </div>;
          </TabsContent>;
        </Tabs>;
      </CardContent>;
    </Card>;
  );
}



</Badge>
"
              <h4 className="text-md font-semibold mt-6 mb-2">Rate Limiting</h4>;""
              <p className="text-zinc-400 mb-4">;"
</p>"
                a <code className="bg-zinc-800 px-1 py-0 && 0.5 rounded">429 Too Many Requests</code> response.;"
              </p>;"
              <p className="text-zinc-400 mb-2">;"
</p>
                Rate limit information is included in the response headers: </p>;"
              <ul className="list-disc pl-6 space-y-1 text-zinc-400">;"
</ul>"
                <li><code className="bg-zinc-800 px-1 py-0 && 0.5 rounded">X-RateLimit-Limit</code>: Number of requests allowed in the time window</li>;""
                <li><code className="bg-zinc-800 px-1 py-0 && 0.5 rounded">X-RateLimit-Remaining</code>: Number of requests remaining in the current window</li>;""
                <li><code className="bg-zinc-800 px-1 py-0 && 0.5 rounded">X-RateLimit-Reset</code>: Unix timestamp when the rate limit resets</li>;"


              <tr className="text - left border - b border - zinc - 800 text-sm">;
                <th className="pb-2">Name</th>;
                <th className="pb-2">Type</th>;
                <th className="pb-2">Description</th>;


                <tr key={index} className={index < params.length - 1 ? "border - b border - zinc - 800" : ""}>;
                  <td className="py - 2 font - mono text-sm">;

              {params && params.map((param, index) => (;
                <tr key={index} className={index < params && params.length - 1 ? "border-b border-zinc-800" : ""}>;
                  <td className="py-2 font-mono text-sm">;
                    {param && param.name}
                    {param && param.required && <span className="text-red-500">*</span>}
                  </td>;
                  <td className="py-2 text-sm text-zinc-400">{param && param.type}</td>;
                  <td className="py-2 text-sm text-zinc-400">{param && param.description}</td>;
                </tr>;
              ))}
            <Badge className="ml-auto bg-amber-800 text-amber-200 hover:bg-amber-800">;              {note}
            </Badge>;
          )}
        </div>;
        ;
        <p className="mt-2 text-zinc-400">{description}</p>;
      </div>;
      ;
      {params.length > 0 && (;
        <div className="border-t border-zinc-800 p-4">;
          <h4 className="font-medium mb-2">Parameters</h4>;
          <table className="w-full">;
            <thead>;
              <tr className="text-left border-b border-zinc-800 text-sm">;
                <th className="pb-2">Name</th>;
                <th className="pb-2">Type</th>;
                <th className="pb-2">Description</th>;
              </tr>;
            </thead>;
            <tbody>;
              {params.map((param, index) => (;
                <tr key={index} className={index < params.length - 1 ? "border-b border-zinc-800" :""}>;
                  <td className="py-2 font-mono text-sm">;
                    {param.name}
                    {param.required && <span className="text-red-500">*</span>}
                  </td>;
                  <td className="py-2 text-sm text-zinc-400">{param.type}</td>;
                  <td className="py-2 text-sm text-zinc-400">{param.description}</td>;
                </tr>;              ))}
            </tbody>;

          </table>;
        </div>;


      {codeExamples && (

            <div className="ml-auto flex border border-zinc-700 rounded-md overflow-hidden">

      {codeExamples && (;"
        <div className="border-t border-zinc-800 p-4">;"
          <div className="flex items-center mb-2">;"
            <h4 className="font-medium">Request Example</h4>;"
            <div className="ml-auto flex border border-zinc-700 rounded-md overflow-hidden">;

                <button;
                  key={lang}`
                  className={`px-3 py-1 text-xs font-medium ${}
                    activeTab === lang"
                >;










;


