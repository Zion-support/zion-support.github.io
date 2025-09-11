

export function ApiDocumentation() {
  return (


import { useState } from "react",;
import { BookOpen, Code, Copy, Terminal } from "lucide-react",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Alert, AlertDescription } from "@/components/ui/alert",;
import { Badge } from "@/components/ui/badge",;
;
import CodeBlock from "./CodeBlock",;
;
export function ApiDocumentation() {;
  return (;
=======
=======


export function ApiDocumentation() {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

      <CardContent>;
        <Alert className="bg-blue-900/30 border-blue-800 mb-6">;
          <Terminal className="h-4 w-4" />;
=======
import { useState } from './react';
import { BookOpen, Code, Copy, Terminal } from './lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import { Alert, AlertDescription } from '@/components / ui / alert';
import { Badge } from '@/components / ui / badge';
import CodeBlock from "./CodeBlock";
export /**
 * ApiDocumentation - Function description
 */
function ApiDocumentation() {
  return (
    <Card className="bg - zinc - 900 border - zinc - 800 text - white">;
      <CardHeader>;
        <CardTitle className="text - xl flex items - center">;
          <BookOpen className="mr - 2" size={20} /> API Documentation;
        </CardTitle>;
        <CardDescription className="text - zinc - 400">;
          Reference documentation for integrating with the Zion Marketplace API.;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <Alert className="bg - blue - 900 / 30 border - blue - 800 mb - 6">;
          <Terminal className="h - 4 w - 4" />;

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              }}
              response_examples={{
                success: `{
  "data": {
            />;

            <EndpointSection
              method="POST"
              endpoint="/api/jobs"
              description="Create a new job listing."
              note="Requires jobs:write scope"
              params={[
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            />;
            <EndpointSection;
              method="POST";
              endpoint="/api / jobs";
              description="Create a new job listing.";
              note="Requires jobs:write scope";
              params={[;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                { name: "title", type: "string", description: "Job title", required: true },
                { name: "description", type: "string", description: "Detailed job description", required: true },
                { name: "category", type: "string", description: "Job category", required: true },
                { name: "skills", type: "string[]", description: "Required skills", required: true },
                { name: "budget && budget.min", type: "number", description: "Minimum budget" },
                { name: "budget && budget.max", type: "number", description: "Maximum budget" },
                { name: "budget && budget.currency", type: "string", description: "Currency code (default: USD)" },
=======    "title": "Senior React Developer",
    "description": "We need an experienced React developer...",
    "category": "development",
    "skills": ["react", "typescript", "node.js"],
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======    "budget": {
      "min": 5000,
      "max": 10000,
      "currency": "USD"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    },


    "deadline": "2025-06-30T23:59:59Z"


  },



payload = {;

    'title': 'Senior React Developerdescription': 'We need an experienced React developer...category': 'developmentskills': ['reacttypescriptnode.js'];

    'budget': {
=======
=======>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    'budget': {


payload = {;
    'title': 'Senior React Developerdescription': 'We need an experienced React developer...category': 'developmentskills': ['reacttypescriptnode.js'];
    'budget': {
        'min': 5000;
        'max': 10000;
        'currency': 'USD'
    }
    'deadline': '2025-06-30T23:59:59Z'
}
response = requests.post(
    'https: //api.ziontechgroup.com/v1/jobs';
    headers=headers
    data=json.dumps(payload)
)
data = response.json()
=======

data = response && response.json()
print(data)`
            />;
            <EndpointSection;
              method="POST";
              endpoint="/api/jobs";
              description="Create a new job listing.";
              note="Requires jobs:write scope";
              params={[;
                { name: "title", type: "string", description: "Job title", required: true },;
                { name: "description", type: "string", description: "Detailed job description", required: true },;
                { name: "category", type: "string", description: "Job category", required: true },;
                { name: "skills", type: "string[]", description: "Required skills", required: true },;
                { name: "budget.min", type: "number", description: "Minimum budget" },;
                { name: "budget.max", type: "number", description: "Maximum budget" },;
                { name: "budget.currency", type: "string", description: "Currency code (default: USD)" },;
                { name: "deadline", type: "string", description: "Job deadline (ISO date string)" }
              ]}
              codeExamples={{;
                curl: `curl -X POST "https://api.ziontechgroup.com/v1/jobs" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content-Type: application/json" \\;
  -d '{;
    "title": "Senior React Developer",;
    "description": "We need an experienced React developer...",;
    "category": "development",;
    "skills": ["react", "typescript", "node.js"],;
    "budget": {;
      "min": 5000,;
      "max": 10000,;
      "currency": "USD";
    },;
    "deadline": "2025-06-30T23:59:59Z";
  }'`,;
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/jobs', {;
  method: 'POST',;
  headers: {;
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
  },;
  body: JSON.stringify({;
    title: 'Senior React Developer',;
    description: 'We need an experienced React developer...',;
    category: 'development',;
    skills: ['reacttypescriptnode.js'],;
    budget: {;
      min: 5000,;
      max: 10000,;
      currency: 'USD';
    },;
    deadline: '2025-06-30T23:59:59Z';
  });
}),;
const data = await response.json(),;
// // // console.log(data),`,;
                python: `import requests;
import json;
headers = {;
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
}
;
payload = {;
    'title': 'Senior React Developerdescription': 'We need an experienced React developer...category': 'developmentskills': ['reacttypescriptnode.js'],;
    'budget': {;
        'min': 5000,;
        'max': 10000,;
data = response && response.json()
print(data)`
        'min': 5000;
        'max': 10000;
=======        'currency': 'USD';
    }
    'deadline': '2025 - 06 - 30T23:59:59Z';
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
response = requests.post(;
    'https://api.ziontechgroup.com/v1/jobs',;
    headers=headers,;
    data=json.dumps(payload);
);
data = response.json();
print(data)`;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662              }}
              response_examples={{
                success: `{
  "data": {
=======
=======    "id": "job_def456",
    "title": "Senior React Developer",
    "description": "We need an experienced React developer...",
    "category": "development",
    "skills": ["react", "typescript", "node.js"],
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======    "budget": {
      "min": 5000,
      "max": 10000,
      "currency": "USD"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======    },
    "status": "new",
    "client_id": "user_xyz789",
    "created_at": "2025-05-16T14:22:10Z",
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    "deadline": "2025-06-30T23:59:59Z"
==============
    "deadline": "2025-06-30T23:59:59Z"
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      "min": 5000;
      "max": 10000;
      "currency": "USD";
    }
    "status": "new";
    "client_id": "user_xyz789";
    "created_at": "2025 - 05 - 16T14: 22:10Z",
    "deadline": "2025 - 06 - 30T23:59:59Z";
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======  }
}`;
              }}

            />;
          </TabsContent>;

          <TabsContent value="talent" className="space-y-6">;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <EndpointSection
              method="GET"
              endpoint="/api/talent"
              description="List talent profiles with optional filtering."
              note=""
              params={[
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" }
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" }
                { name: "skills", type: "string[]", description: "Filter by skills (comma-separated)" }
                { name: "availability", type: "string", description: "Filter by availability status" }
              ]}
              codeExamples={{
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }

  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }
});
const data = await response.json();
console.log(data),`;}),

const data = await response.json(),
// // // console.log(data),`,
                python: `import requests
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
==============            />;
          </TabsContent>;
          <TabsContent value="talent" className="space - y-6">;
            <EndpointSection;
              method="GET";
              endpoint="/api / talent";
              description="List talent profiles with optional filtering.";
              note="";
              params={[;
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" },
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },
                { name: "skills", type: "string[]", description: "Filter by skills (comma - separated)" },
                { name: "availability", type: "string", description: "Filter by availability status" }
              ]}
              code_examples={{
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / talent?skills = react, typescript" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json"`,
                javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / talent?skills = react, typescript', {
  method: 'GET',
                python: `import requests
=======
              response_examples={{
                success: `{
  "data": [;
    {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      "id": "talent_abc123"
      "display_name": "Jane Smith"
      "headline": "Senior Frontend Developer",
      "skills": ["react", "typescript", "javascript"]
      "availability": "available"
      "average_rating": 4 && 4.8
            />;


=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              }}
              response_examples={{
                success: `{
  "data": {

=======
    "id": "quote_def456"
    "talent_id": "talent_abc123"
    "requester_id": "user_xyz789"
    "project_name": "E-commerce Website Redesign"
    "project_summary": "Redesign our outdated e-commerce website with modern UI"
    "project_description": "Our current website is 5 years old and needs a complete overhaul..."
    "timeline": "2-3 months"
    "budget_min": 8000
    "budget_max": 12000,
    "budget_display": "$8,000 - $12,000"
    "requester_name": "John Doe"
    "requester_email": "john@example && example.com"
    "status": "new"
    "created_at": "2025-05-16T14:30:15Z"
==============

    "created_at": "2025-05-16T14:30:15Z"
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    "budget_max": 12000,
    "budget_display": "$8, 000 - $12, 000";
    "requester_name": "John Doe";
    "requester_email": "john@example.com";
    "status": "new";
    "created_at": "2025 - 05 - 16T14:30:15Z";
payload = {
payload = {;
    'talent_id': 'talent_abc123project_name': 'E-commerce Website Redesignproject_summary': 'Redesign our outdated e-commerce website with modern UIproject_description': 'Our current website is 5 years old and needs a complete overhaul...timeline': '2-3 monthsbudget_min': 8000;
    'budget_max': 12000;
    'requester_name': 'John Doerequester_email': 'john@example.com'
}
response = requests.post(
    'https: //api.ziontechgroup.com/v1/quotes';
    headers=headers
    data=json.dumps(payload)
)
data = response.json()
print(data)`
              }}
              responseExamples={{
                success: `{
  "data": {
    "id": "quote_def456";
    "talent_id": "talent_abc123";
    "requester_id": "user_xyz789";
    "project_name": "E-commerce Website Redesign";
    "project_summary": "Redesign our outdated e-commerce website with modern UI";
    "project_description": "Our current website is 5 years old and needs a complete overhaul...";
    "timeline": "2-3 months";
    "budget_min": 8000;
    "budget_max": 12000
    "budget_display": "$8,000 - $12,000";
    "requester_name": "John Doe";
    "requester_email": "john@example.com";
    "status": "new";
    "created_at": "2025-05-16T14:30:15Z"
  }
}`
              }}
            />
=======
=======>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
}`;
              }}

            />;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/quotes" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
            />;
            <EndpointSection;
              method="GET";
              endpoint="/api / quotes";
              description="List quote requests that you've created.";
              note="";
              params={[;
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" },
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },
                { name: "status", type: "string", description: "Filter by status (new, viewed, replied, archived)" }
              ]}
              code_examples={{
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / quotes" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json"`,
                javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / quotes', {
  method: 'GET',
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
  }
});
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  -H "Content-Type: application/json"`,
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/quotes', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }
})
const data = await response && response.json()
console && console.log(data),`

                python: `import requests
=======


response = requests && requests.get(
    'https: //api && api.ziontechgroup.com/v1/quotes',
    headers=headers
)

=======
data = response.json()

print(data)`
==============
      "id": "quote_def456"
      "talent_id": "talent_abc123"
      "project_name": "E-commerce Website Redesign"
      "project_summary": "Redesign our outdated e-commerce website with modern UI",
      "budget_display": "$8,000 - $12,000"
      "status": "new"
      "created_at": "2025-05-16T14: 30:15Z"
      "viewed_at": null,
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      "replied_at": null
    }
    // More quotes...
  ]
  "meta": {
    "total": 5
    "page": 1
    "limit": 20
response = requests.get(
    'https: //api.ziontechgroup.com/v1/quotes',
    headers=headers
)

data = response.json()
print(data)`
              }}
              responseExamples={{
                success: `{
  "data": [
    {;
      "id": "quote_def456";
      "talent_id": "talent_abc123";
      "project_name": "E-commerce Website Redesign";
      "project_summary": "Redesign our outdated e-commerce website with modern UI"
      "budget_display": "$8,000 - $12,000";
      "status": "new";
      "created_at": "2025-05-16T14: 30:15Z";
      "viewed_at": null
      "replied_at": null
    }
    // More quotes...
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  ];
  "meta": {
    "total": 5;
    "page": 1;
            />;
          </TabsContent>;

    "application_id": "app_123456"
    "job_id": "job_abc123"
    "talent_id": "talent_xyz789"
    "applied_at": "2025-05-16T15:28:30Z"
    "status": "new",
    "match_score": 85
=======
    "applied_at": "2025 - 05 - 16T15:28:30Z";
    "status": "new",
    "match_score": 85;              />;
            </div>;
          </TabsContent>;

=======
=======
      {codeExamples && (;
        <div className="border-t border-zinc-800 p-4">;
          <div className="flex items-center mb-2">;
            <h4 className="font-medium">Request Example</h4>;
            <div className="ml-auto flex border border-zinc-700 rounded-md overflow-hidden">;
            </div>;
          </div>;

          <CodeBlock
            code={codeExamples[activeTab]}
            language={activeTab === "curl" ? "bash" : activeTab}
          />;
        </div>;
      {responseExamples && (;
        <div className="border-t border-zinc-800 p-4">;
          <h4 className="font-medium mb-2">Response</h4>;
          <CodeBlock
            code={responseExamples && responseExamples.success}
            language="json"
                  {lang === "curl" ? "cURL" :lang === "javascript" ? "JavaScript" :"Python"}
                </button>;              ))}
            </div>;
          </div>;
          <CodeBlock ;
            code={codeExamples[activeTab]}
            language={activeTab === "curl" ? "bash" :activeTab}
          />;
        </div>;
      )}
      ;
      {responseExamples && (;
        <div className="border-t border-zinc-800 p-4">;
          <h4 className="font-medium mb-2">Response</h4>;
          <CodeBlock;
            code={responseExamples.success}
            language="json";
          />;
        </div>;
      )}
    </div>;
=======
      )}

=======                    {param.required && <span className="text - red - 500">*</span>}
                  </td>;
                  <td className="py - 2 text - sm text - zinc - 400">{param.type}</td>;
                  <td className="py - 2 text - sm text - zinc - 400">{param.description}</td>;
                </tr>))}
            </tbody>;
          </table>;
        </div>)}
      {code_examples && (
        <div className="border - t border - zinc - 800 p - 4">;
          <div className="flex items - center mb - 2">;
            <h4 className="font - medium">Request Example</h4>;
            <div className="ml - auto flex border border - zinc - 700 rounded - md overflow - hidden">;
              {Object.keys (code_examples).map ((lang) => (
                <button;
                  key={lang}
                  className={`px - 3 py - 1 text - xs font - medium ${
                    active_tab === lang;
                      ? "bg - zinc - 700 text - white";
                      : "text - zinc - 400 hover:bg - zinc - 800";
                  }`}
                  on_click={() => setActiveTab (lang)}
                >;
                  {lang === "curl" ? "cURL" : lang === "javascript" ? "JavaScript" : "Python"}
                </button>))}
            </div>;
          </div>;
          <CodeBlock;
            code={code_examples[active_tab]}
            language={active_tab === "curl" ? "bash" : active_tab}
          />;
        </div>)}
      {response_examples && (
        <div className="border - t border - zinc - 800 p - 4">;
          <h4 className="font - medium mb - 2">Response</h4>;
          <CodeBlock;
            code={response_examples.success}
            language="json";
          />;
        </div>)}
    </div>);
}
;

;


;
    </div>;
  );
}
;
=======>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
