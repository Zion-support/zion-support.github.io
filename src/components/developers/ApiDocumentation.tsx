<<<<<<< HEAD
<<<<<<< HEAD
=======
method: string;
endpoint: string,
  description: string;
=======

endpoint: string;
description: string;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
note?: string;
params?: EndpointParam[];
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

<<<<<<< HEAD
=======
code_examples?: Record < string string>;
response_examples?: {
  success: string;
}export /**
 * ApiDocumentation - Function description
 */
function ApiDocumentation() {
  return (<Card className="bg - zinc - 900 border - zinc - 800 text-white" > text - xl flex items - center"> <BookOpen className=" mr-2"size= {
  20 ";
}/> API Documentation </CardTitle> <CardDescription className=" text - zinc-400"> Reference documentation for integrating with the Zion Marketplace API. </CardDescription> </CardHeader> <CardContent> <Alert className=" bg - blue - 900 / 30 border - blue - 800 mb-6"> <Terminal className=" h - 4 w-4"/> <AlertDescription> Make sure to include your API key in all requests as a Bearer token in the Authorization header. </AlertDescription> </Alert> <Tabs default_value=" jobs"className=" space-y-4"> <TabsList className=" bg - zinc - 800 border - zinc-700"> <TabsTrigger value=" jobs">Jobs</TabsTrigger> <TabsTrigger value=" talent">Talent</TabsTrigger> <TabsTrigger value=" quotes">Quotes</TabsTrigger> <TabsTrigger value=" webhooks">Webhooks</TabsTrigger> <TabsTrigger value=" errors">Errors</TabsTrigger> </TabsList> <TabsContent value=" jobs"className=" space-y-6"> <EndpointSection headers = headers) data = response.json () print (data) `;
}response_examples= {

<<<<<<< HEAD
<<<<<<< HEAD
  {
  success: ` {";
  " data": [ {


  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json' 


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json' 

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import { useState } from "react",
import { BookOpen, Terminal } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Alert, AlertDescription } from "@/components/ui/alert",
import { Badge } from "@/components/ui/badge",
import CodeBlock from "./CodeBlock",
import { logInfo } from '@/utils/productionLogger',
interface EndpointParam {
  name: string,
  type: string,
  description: string,
  required?: boolean
import { useState } from "react",;
import { BookOpen, Terminal } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Alert, AlertDescription } from "@/components/ui/alert",;
import { Badge } from "@/components/ui/badge",;
import CodeBlock from "./CodeBlock",;
import { logInfo } from '@/utils/productionLogger',;
interface EndpointParam {;
  name: string,;
  type: string,,
  description: string,;
  required?: boolean;
}
;
interface EndpointSectionProps {;
  method: string,;
  endpoint: string,,
  description: string,;
  note?: string,;
  params?: EndpointParam[],;
  codeExamples?: Record<string string>,;
  responseExamples?: { success: string }
}

export function ApiDocumentation() {
  return (
    <Card className="bg-zinc-900 border-zinc-800 text-white">
      <CardHeader>
        <CardTitle className="text-xl flex items-center">
          <BookOpen className="mr-2" size={20} /> API Documentation
        </CardTitle>
        <CardDescription className="text-zinc-400">
          Reference documentation for integrating with the Zion Marketplace API.
        </CardDescription>
      </CardHeader>

<<<<<<< HEAD
      
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      <CardContent>
        <Alert className="bg-blue-900/30 border-blue-800 mb-6">
          <Terminal className="h-4 w-4" />
          <AlertDescription>
            Make sure to include your API key in all requests as a Bearer token in the Authorization header.
          </AlertDescription>
        </Alert>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

}` 

}/> <EndpointSectionconst response = await fetch (\`https://api && api.ziontechgroup.com/v1/jobs/\$ {
  jobId 
}\`, {
  method: 'GET'
headers: {'
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json' 

export function ApiDocumentation() {
  return (
    <Card className='bg-zinc-900 border-zinc-800 text-white'>;
      <CardHeader>;
        <CardTitle className='text-xl flex items-center'>;
          <BookOpen className='mr-2' size={20} /> API Documentation;
        </CardTitle>;
        <CardDescription className='text-zinc-400'>;
          Reference documentation for integrating with the Zion Marketplace API.;
        </CardDescription>;
      </CardHeader>;

      <CardContent>;
        <Alert className='bg-blue-900/30 border-blue-800 mb-6'>;
          <Terminal className='h-4 w-4' />;
}`;
}/> <EndpointSection const response = await fetch (\`https://api.ziontechgroup.com / v1 / jobs/\$ {
  job_id;
}\`, {
  method: 'GET';
headers: {';
  'Authorization': 'Bearer YOUR API KEYContent - Type': 'application / json';
export /**
 * ApiDocumentation - Function description
 */
function ApiDocumentation() {
  return (
    <Card className='bg - zinc - 900 border - zinc - 800 text - white'>;
      <CardHeader>;
        <CardTitle className='text - xl flex items - center'>;
          <BookOpen className='mr - 2' size={20} /> API Documentation;
        </CardTitle>;
        <CardDescription className='text - zinc - 400'>;
          Reference documentation for integrating with the Zion Marketplace API.;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <Alert className='bg - blue - 900 / 30 border - blue - 800 mb - 6'>;
          <Terminal className='h - 4 w - 4' />;

          <AlertDescription>;
            Make sure to include your API key in all requests as a Bearer token;
            in the Authorization header.;
          </AlertDescription>;
        </Alert>;

        <Tabs default_value='jobs' className='space - y-4'>;
          <TabsList className='bg - zinc - 800 border - zinc - 700'>;

            <TabsTrigger value='jobs'>Jobs</TabsTrigger>;
            <TabsTrigger value='talent'>Talent</TabsTrigger>;
            <TabsTrigger value='quotes'>Quotes</TabsTrigger>;
            <TabsTrigger value='webhooks'>Webhooks</TabsTrigger>;
            <TabsTrigger value='errors'>Errors</TabsTrigger>;
          </TabsList>;

          <TabsContent value='jobs' className='space - y-6'>;
            <EndpointSection;
              method='GET';
              endpoint='/api / jobs';
              description='List all available jobs with optional filtering.';
              note='';
              params={[;

                {
                  name: 'page'
                  type: 'integer'
                  description: 'Page number for pagination (default: 1)'
                }
                {

                  name: 'limit',
                  type: 'integer',
                  description:;
                    'Number of results per page (default: 20, max: 100)',
                },

                {
                  name: 'category'
                  type: 'string'
                  description: 'Filter by job category'
                }
                {

                  name: 'skills',
                  type: 'string[]',
                  description: 'Filter by required skills (comma - separated)',
                },

                {
                  name: 'status'
                  type: 'string'
                  description: 'Filter by job status (new, active, closed)'
                }

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

        <Tabs defaultValue="jobs" className="space-y-4">
          <TabsList className="bg-zinc-800 border-zinc-700">
            <TabsTrigger value="jobs">Jobs</TabsTrigger>
            <TabsTrigger value="talent">Talent</TabsTrigger>
            <TabsTrigger value="quotes">Quotes</TabsTrigger>
            <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
            <TabsTrigger value="errors">Errors</TabsTrigger>
          </TabsList>
          
          <TabsContent value="jobs" className="space-y-6">
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            <EndpointSection
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              method="GET"
              endpoint="/api/jobs"
              description="List all available jobs with optional filtering."
              note=""
              params={[

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" },
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },
                { name: "category", type: "string", description: "Filter by job category" },
                { name: "skills", type: "string[]", description: "Filter by required skills (comma-separated)" },
                { name: "status", type: "string", description: "Filter by job status (new, active, closed)" }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              ]}
              codeExamples={{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/jobs?limit=10&category=development" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/jobs?limit=10&category=development', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }
=======

              ]}

  -H "Content-Type: application/json"`,
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/jobs?limit=10&category=development', {
              code_examples = {{
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / jobs?limit = 10 & category = development" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json"`,
                javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / jobs?limit = 10 & category = development', {

  method: 'GET',
  headers: {


    'Authorization': 'Bearer YOUR_API_KEY',


    'Content-Type': 'application/json'
  }
})


=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
}` ;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
}';
}/> <EndpointSection deadline: '2025-06-30T23:59:59Z' ;
}) ;
<<<<<<< HEAD
              ]}
              codeExamples={{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/jobs?limit=10&category=development" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/jobs?limit=10&category=development', {
  method: 'GET'
  headers: {
    'Content-Type': 'application/json'
  }
})
const data = await response.json ()
logInfo (data), `
python: `import requests headers = {'
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json'
}job id '
}'
headers=headers) data = response.json () print (data) `
}responseExamples= {
  {
  success: ` {});'
=======

});'
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
'deadline': '2025-06-30T23:59:59Z' '
}response = requests.post ('https: //api.ziontechgroup.com/v1/jobs'
headers=headers
data=json.dumps (payload) ) data = response.json () print (data) `
}responseExamples= {
  {
  success: ` {
}`
}"
}/> </TabsContent> <TabsContent value=" talent"className=" space-y-6"> <EndpointSection headers=headers) data = response.json () print (data) `
<<<<<<< HEAD
const data = await response && response.json ()
logInfo (data), `
python: `import requests headers = {'
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json' 
}job id '
}'
headers=headers) data = response && response.json () print (data) ` 
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
}responseExamples= {
  {
  success: ` {

}` 
}'
}/> <EndpointSectiondeadline: '2025-06-30T23:59:59Z' 
}) 
})'
'deadline': '2025-06-30T23:59:59Z' '
}response = requests && requests.post ('https: //api && api.ziontechgroup.com/v1/jobs'
headers=headers
data=json && json.dumps (payload) ) data = response && response.json () print (data) ` 

}responseExamples= {
  {
  success: ` {

}` 
}"
}/> </TabsContent> <TabsContent value=" talent"className=" space-y-6"> <EndpointSectionheaders=headers) data = response && response.json () print (data) ` 

}responseExamples= {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content - Type': 'application / json';
  }
});
const data = await response.json ();
log_info (data), `;
python: `import requests headers = {';
  'Authorization': 'Bearer YOUR API KEYContent - Type': 'application / json';
}job id ';
}';
headers = headers) data = response.json () print (data) `;
}response_examples= {
  {
  success: ` {
}`;
}';
}/> <EndpointSection deadline: '2025 - 06 - 30T23:59:59Z';
});
});';
'deadline': '2025 - 06 - 30T23:59:59Z' ';
}response = requests.post ('https: //api.ziontechgroup.com / v1 / jobs';
headers = headers;
data = json.dumps (payload) ) data = response.json () print (data) `;
}response_examples= {
  {
  success: ` {
}`;
}";
}/> </TabsContent> <TabsContent value=" talent"className=" space-y-6"> <EndpointSection headers = headers) data = response.json () print (data) `;
}response_examples= {
  {
  success: ` {";
  " data": [ {

}` 

}/> <EndpointSectionconst response = await fetch (\`https://api && api.ziontechgroup.com/v1/talent/\$ {
  talentId 
}\`, {'
  method: 'GET'
headers: {'
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json' 
response = requests && requests.get(
    'https://api && api.ziontechgroup.com/v1/jobs',
    params={'limit': 10, 'category': 'development'},
    headers=headers
)

data = response && response.json()
print(data)`,

}`;
}/> <EndpointSection const response = await fetch (\`https://api.ziontechgroup.com / v1 / talent/\$ {
  talent_id;
}\`, {';
  method: 'GET';
headers: {';
  'Authorization': 'Bearer YOUR API KEYContent - Type': 'application / json';
response = requests.get (
    'https://api.ziontechgroup.com / v1 / jobs',
    params={'limit': 10, 'category': 'development'},
    headers = headers);
data = response.json ();
print (data)`,

print(data)`,
<<<<<<< HEAD
=======

    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}),;
const data = await response.json(),;
logInfo(data),`,;
                python: `import requests;
headers = {;
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
}
;
response = requests.get(;
    'https: //api.ziontechgroup.com/v1/jobs',;
    params={'limit': 10, 'category': 'development'},;
    headers=headers;
);
data = response.json();
print(data)`;
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              }}
              responseExamples={{
                success: `{
  "data": [
<<<<<<< HEAD
    {
      "id": "job_abc123",
      "title": "Senior React Developer",
      "description": "We need an experienced React developer...",
      "category": "development",
      "skills": ["react", "typescript", "node.js"],
      "budget": {
<<<<<<< HEAD
=======


  ],

=======

              }}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

  "meta": {
=======
    {  "meta": {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    "total": 42
    "page": 1
    "limit": 10

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        "min": 5000,
        "max": 10000,
        "currency": "USD"
      },
      "status": "active",
      "client_id": "user_xyz789",
      "created_at": "2025-05-15T10:30:00Z"
    },
    // More jobs...
  ],
  "meta": {
    "total": 42,
    "page": 1,
    "limit": 10
  }
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
}`
  }

}`,
<<<<<<< HEAD
              }}
            />            <EndpointSection
=======

            <EndpointSection
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              method='GET'
              endpoint='/api/jobs/:id'
              description='Get detailed information about a specific job.'
              note=''
<<<<<<< HEAD
<<<<<<< HEAD
              params={[
            />;
            <EndpointSection;
              method='GET';
              endpoint='/api / jobs/:id';
              description='Get detailed information about a specific job.';
              note='';
              params={[;
=======
              params={[

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                {
                  name: 'id'
                  type: 'string'
                  description: 'The job ID'
                  required: true
                },              ]}

<<<<<<< HEAD
  -H "Content-Type: application/json"`,
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                javascript: `const jobId = 'job_abc123'
const response = await fetch(\`https://api && api.ziontechgroup.com/v1/jobs/\${jobId}\`, {
              code_examples={{
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / jobs / job_abc123" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json"`,
                javascript: `const job_id = 'job_abc123';
const response = await fetch (\`https://api.ziontechgroup.com / v1 / jobs/\${job_id}\`, {

  method: 'GET',
  headers: {

const data = await response && response.json ()
logInfo (data), `
python: `import requests headers = {'
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json' 
}talent id '
}'
headers=headers) data = response && response.json () print (data) ` 
job_id = 'job_abc123'
response = requests && requests.get(
    f'https://api && api.ziontechgroup.com/v1/jobs/{job_id}',
    headers=headers
)

data = response && response.json()
print(data)`,

    'Authorization': 'Bearer YOUR_API_KEY',
    'Content - Type': 'application / json';
  }
});
const data = await response.json ();
log_info (data), `;
python: `import requests headers = {';
  'Authorization': 'Bearer YOUR API KEYContent - Type': 'application / json';
}talent id ';
}';
headers = headers) data = response.json () print (data) `;
job_id = 'job_abc123';
response = requests.get (
    f'https://api.ziontechgroup.com / v1 / jobs/{job_id}',
    headers = headers);
data = response.json ();
print (data)`,

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
}`;
=======
              params={[}`;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              }}
            />
            
            <EndpointSection
              method="GET"
              endpoint="/api/jobs/:id"
              description="Get detailed information about a specific job."
              note=""
              params={[
                { name: "id", type: "string", description: "The job ID", required: true }
              ]}
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              codeExamples={{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/jobs/job_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
<<<<<<< HEAD
                javascript: `const jobId = 'job_abc123',
const response = await fetch(\`https://api.ziontechgroup.com/v1/jobs/\${jobId}\`, {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
            />;
            <EndpointSection;
              method="GET";
              endpoint="/api/jobs/:id";
              description="Get detailed information about a specific job.";
              note="";
              params={[;
                { name: "id", type: "string", description: "The job ID", required: true }
              ]}
              codeExamples={{;
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/jobs/job_abc123" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content-Type: application/json"`,;
                javascript: `const jobId = 'job_abc123',;
const response = await fetch(\`https://api.ziontechgroup.com/v1/jobs/\${jobId}\`, {;
  method: 'GET',;
  headers: {;
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
  }
}),;
const data = await response.json(),;
logInfo(data),`,;
                python: `import requests;
headers = {;
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
}
;
job_id = 'job_abc123';
response = requests.get(;
    f'https://api.ziontechgroup.com/v1/jobs/{job_id}',;
    headers=headers;
);
data = response.json();
print(data)`;
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              }}
              responseExamples={{
                success: `{
  "data": {
    "id": "job_abc123",
    "title": "Senior React Developer",
    "description": "We need an experienced React developer...",
    "category": "development",
    "skills": ["react", "typescript", "node.js"],
    "budget": {
      "min": 5000,
      "max": 10000,
<<<<<<< HEAD
      "currency": "USD"
=======
      "currency": "USD";

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    },
    "status": "active",
    "client_id": "user_xyz789",
    "created_at": "2025-05-15T10:30:00Z",
    "deadline": "2025-06-30T23:59:59Z",
    "application_count": 12
  }
<<<<<<< HEAD
}`;
              }}
            />
            
=======

            />;

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            <EndpointSection
              method="POST"
              endpoint="/api/jobs"
              description="Create a new job listing."
              note="Requires jobs:write scope"
              params={[
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

            />;
            <EndpointSection;
              method='POST';
              endpoint='/api / jobs';
              description='Create a new job listing.';
              note='Requires jobs:write scope';
              params={[;

=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                  name: 'title'
                  type: 'string'
                  description: 'Job title'
                  required: true
                }
                {
                  name: 'description'
                  type: 'string'
                  description: 'Detailed job description'
                  required: true
                }
                {
                  name: 'category'
                  type: 'string'
                  description: 'Job category'
                  required: true
                }
                {
                  name: 'skills'
                  type: 'string[]'
                  description: 'Required skills'
                  required: true
                }
                {

<<<<<<< HEAD
                  name: 'budget && budget.min',
                  type: 'number',
                  description: 'Minimum budget',
                },
                {
                  name: 'budget && budget.max',
                  type: 'number',
                  description: 'Maximum budget',
                },
                {
                  name: 'budget && budget.currency',
                  type: 'string',
                  description: 'Currency code (default: USD)',
                },

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                {
                  name: 'deadline'
                  type: 'string'
                  description: 'Job deadline (ISO date string)'
                }
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                { name: "title", type: "string", description: "Job title", required: true },
                { name: "description", type: "string", description: "Detailed job description", required: true },
                { name: "category", type: "string", description: "Job category", required: true },
                { name: "skills", type: "string[]", description: "Required skills", required: true },
                { name: "budget.min", type: "number", description: "Minimum budget" },
                { name: "budget.max", type: "number", description: "Maximum budget" },
                { name: "budget.currency", type: "string", description: "Currency code (default: USD)" },
                { name: "deadline", type: "string", description: "Job deadline (ISO date string)" }
              ]}
<<<<<<< HEAD
              codeExamples={{
                curl: `curl -X POST "https://api.ziontechgroup.com/v1/jobs" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "Senior React Developer",
    "description": "We need an experienced React developer...",
    "category": "development",
    "skills": ["react", "typescript", "node.js"],
    "budget": {
=======

              code_examples={{
                curl: `curl -X POST "https://api.ziontechgroup.com / v1 / jobs" \\;
=======
              ]}
              codeExamples={{;
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/jobs/job_abc123" \\;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content-Type: application/json"`,;
                javascript: `const jobId = 'job_abc123',;
const response = await fetch(\`https://api.ziontechgroup.com/v1/jobs/\${jobId}\`, {;
  method: 'GET',;
  headers: {;
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
  }
}),;
const data = await response.json(),;
logInfo(data),`,;
                python: `import requests;
headers = {;
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
}
;
job_id = 'job_abc123';
response = requests.get(;
    f'https://api.ziontechgroup.com/v1/jobs/{job_id}',;
    headers=headers;
);
data = response.json();
print(data)`;
              }}
              responseExamples={{
                success: `{
  "data": {
    "id": "job_abc123"
    "title": "Senior React Developer"
    "description": "We need an experienced React developer..."
    "category": "development"
    "skills": ["react", "typescript", "node.js"]
    "budget": {
<<<<<<< HEAD

  }'`,
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/jobs', {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      "min": 5000,
      "max": 10000,
      "currency": "USD"
    },
    "deadline": "2025-06-30T23:59:59Z"
  }'`,
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/jobs', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Senior React Developer',
    description: 'We need an experienced React developer...',
    category: 'development',
    skills: ['reacttypescriptnode.js'],


    budget: {
<<<<<<< HEAD
=======

=======
      "min": 5000
      "max": 10000
      "currency": "USD"
}`;
              }}
            />
            
            <EndpointSection
              method="POST"
              endpoint="/api/jobs"
              description="Create a new job listing."
              note="Requires jobs:write scope"
              params={[
              ]}
              codeExamples={{
                curl: `curl -X POST "https://api.ziontechgroup.com/v1/jobs" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "Senior React Developer"
    "description": "We need an experienced React developer..."
    "category": "development"
    "skills": ["react", "typescript", "node.js"]
    "budget": {
      "min": 5000
      "max": 10000
      "currency": "USD"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

const data = await response && response.json()
logInfo(data)`,

                python: `import requests
import json
headers = {
    'Authorization': 'Bearer YOUR_API_KEY'

});
const data = await response.json();
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
logInfo(data);`,

}),

const data = await response.json(),
logInfo(data),`,

                python: `import requests
import json
headers = {

    'Authorization': 'Bearer YOUR_API_KEY',

    'Content-Type': 'application/json'

}` 
}'"
}/> </TabsContent> <TabsContent value=" quotes"className=" space-y-6"> <EndpointSectionresponse = requests && requests.post ('https: //api && api.ziontechgroup.com/v1/quotes'
headers=headers
data=json && json.dumps (payload) ) data = response && response.json () print (data) ` 
response = requests && requests.post(
    'https://api && api.ziontechgroup.com/v1/jobs',
    headers=headers,
    data=json && json.dumps(payload)
)

data = response && response.json()
print(data)`,

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      min: 5000,
      max: 10000,
      currency: 'USD'
    },
    deadline: '2025-06-30T23:59:59Z'
  })
}),

const data = await response.json(),
logInfo(data),`,
                python: `import requests
import json

headers = {
<<<<<<< HEAD
=======
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content - Type': 'application / json';
}`;
}'";
}/> </TabsContent> <TabsContent value=" quotes"className=" space - y-6"> <EndpointSection response = requests.post ('https: //api.ziontechgroup.com / v1 / quotes';
headers = headers;
data = json.dumps (payload) ) data = response.json () print (data) `;
response = requests.post (
    'https://api.ziontechgroup.com / v1 / jobs',
    headers = headers,
    data = json.dumps (payload));
data = response.json ();
print (data)`,

print(data)`,

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
=======
logInfo(data);`,    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
}
;
payload = {;
    'title': 'Senior React Developerdescription': 'We need an experienced React developer...category': 'developmentskills': ['reacttypescriptnode.js'],;
    'budget': {;
        'min': 5000,;
        'max': 10000,;
        'currency': 'USD';
    },;
    'deadline': '2025-06-30T23:59:59Z';
}
;
response = requests.post(;
    'https://api.ziontechgroup.com/v1/jobs',;
    headers=headers,;
    data=json.dumps(payload);
);
data = response.json();
print(data)`;
<<<<<<< HEAD
<<<<<<< HEAD
              }}
              responseExamples={{
                success: `{
  "data": {
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

              }}
              response_examples={{
                success: `{
  "data": {

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    "id": "job_def456",
    "title": "Senior React Developer",
    "description": "We need an experienced React developer...",
    "category": "development",
<<<<<<< HEAD
    "skills": ["react", "typescript", "node.js"],
    "budget": {
      "min": 5000,
      "max": 10000,
      "currency": "USD"
    },
    "status": "new",
    "client_id": "user_xyz789",
    "created_at": "2025-05-16T14:22:10Z",
    "deadline": "2025-06-30T23:59:59Z"
  }
}`;
              }}
            />
          </TabsContent>
          
          <TabsContent value="talent" className="space-y-6">
=======
    "skills": ["react", "typescript", "node && node.js"],

    "budget": {

      "min": 5000,
      "max": 10000,
      "currency": "USD";

    },
    "status": "new",
    "client_id": "user_xyz789",
    "created_at": "2025 - 05 - 16T14:22:10Z",
    "deadline": "2025 - 06 - 30T23:59:59Z";
  }

            />;
          </TabsContent>;

          <TabsContent value='talent' className='space-y-6'>;

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            <EndpointSection
              method="GET"
              endpoint="/api/talent"
              description="List talent profiles with optional filtering."
              note=""
              params={[

<<<<<<< HEAD
            />;
          </TabsContent>;
          <TabsContent value='talent' className='space - y-6'>;
            <EndpointSection;
              method='GET';
              endpoint='/api / talent';
              description='List talent profiles with optional filtering.';
              note='';
              params={[;

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                {
=======
      "min": 5000
      "max": 10000
      "currency": "USD"
}`;
              }}
            />
          </TabsContent>
          
          <TabsContent value="talent" className="space-y-6">                {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                  name: 'page'
                  type: 'integer'
                  description: 'Page number for pagination (default: 1)'
                }
<<<<<<< HEAD
<<<<<<< HEAD
                {

                  name: 'limit',
                  type: 'integer',
                  description:;
                    'Number of results per page (default: 20, max: 100)',
                },
                {
                  name: 'skills',
                  type: 'string[]',
                  description: 'Filter by skills (comma - separated)',
                },

=======
                {

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                {
                  name: 'availability'
                  type: 'string'
                  description: 'Filter by availability status'
                }

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" },
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },
                { name: "skills", type: "string[]", description: "Filter by skills (comma-separated)" },
                { name: "availability", type: "string", description: "Filter by availability status" }
              ]}
<<<<<<< HEAD
              codeExamples={{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/talent?skills=react,typescript" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/talent?skills=react,typescript', {
=======

  -H "Content-Type: application/json"`,
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/talent?skills=react,typescript', {
              code_examples = {{
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / talent?skills = react, typescript" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json"`,
                javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / talent?skills = react, typescript', {

  method: 'GET',
  headers: {

const data = await response && response.json()
logInfo(data)`,


    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});
const data = await response.json();
logInfo(data);`,

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                python: `import requests
headers = {
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'
<<<<<<< HEAD

response = requests && requests.get(
    'https://api && api.ziontechgroup.com/v1/talent',
    params={'skills': 'react,typescript'},
    headers=headers
)

data = response && response.json()
print(data)`,

=======
                {print(data)`,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

print(data)`,
  }
}),;
const data = await response.json(),;
logInfo(data),`,;
                python: `import requests;headers = {;
=======

print(data)`,

print(data)`,

headers = {;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
}
;
response = requests.get(;
    'https: //api.ziontechgroup.com/v1/talent',;
    params={'skills': 'react,typescript'},;
    headers=headers;
);
data = response.json();
print(data)`;

              }}
<<<<<<< HEAD
              responseExamples={{
                success: `{
  "data": [
    {
      "id": "talent_abc123"
      "display_name": "Jane Smith"
      "headline": "Senior Frontend Developer"
      "skills": ["react", "typescript", "javascript"]
      "availability": "available"
      "average_rating": 4.8
      "rating_count": 15
    }
    // More talent profiles...
  "meta": {
    "total": 28
    "page": 1
    "limit": 20
  }
              }}
            />            <EndpointSection
=======

            <EndpointSection
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              method='GET'
              endpoint='/api/talent/:id'
              description='Get detailed information about a specific talent profile.'
              note=''
<<<<<<< HEAD
<<<<<<< HEAD
              params={[
            />;
            <EndpointSection;
              method='GET';
              endpoint='/api / talent/:id';
              description='Get detailed information about a specific talent profile.';
              note='';
              params={[;
=======
              params={[

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                {
                  name: 'id'
                  type: 'string'
                  description: 'The talent ID'
                  required: true
                },              ]}

<<<<<<< HEAD
  -H "Content-Type: application/json"`,
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                javascript: `const talentId = 'talent_abc123'
const response = await fetch(\`https://api && api.ziontechgroup.com/v1/talent/\${talentId}\`, {
              code_examples={{
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / talent / talent_abc123" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json"`,
                javascript: `const talent_id = 'talent_abc123';
const response = await fetch (\`https://api.ziontechgroup.com / v1 / talent/\${talent_id}\`, {

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  method: 'GET',
  headers: {
<<<<<<< HEAD
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
=======

const data = await response && response.json()
logInfo(data)`,

                python: `import requests
headers = {
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'
talent_id = 'talent_abc123'

response = requests && requests.get(
    f'https://api && api.ziontechgroup.com/v1/talent/{talent_id}',
    headers=headers
)

data = response && response.json()
print(data)`,

    'Authorization': 'Bearer YOUR_API_KEY',
    'Content - Type': 'application / json';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  }
}),;
const data = await response.json(),;
logInfo(data),`,;
                python: `import requests;
headers = {;
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
}
;
response = requests.get(;
    'https: //api.ziontechgroup.com/v1/talent',;
    params={'skills': 'react,typescript'},;
    headers=headers;
);
data = response.json();
print(data)`;
              }}
<<<<<<< HEAD
              responseExamples={{
                success: `{
  "data": [
    {
      "id": "talent_abc123",
      "display_name": "Jane Smith",
      "headline": "Senior Frontend Developer",
      "skills": ["react", "typescript", "javascript"],
      "availability": "available",
      "average_rating": 4.8,
      "rating_count": 15
    },
    // More talent profiles...
  ],
  "meta": {
    "total": 28,
    "page": 1,
    "limit": 20
  }
=======
              response_examples = {{

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
}`;
              }}
            />
            
            <EndpointSection
              method="GET"
              endpoint="/api/talent/:id"
              description="Get detailed information about a specific talent profile."
              note=""
              params={[
                { name: "id", type: "string", description: "The talent ID", required: true }
              ]}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              codeExamples={{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/talent/talent_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
<<<<<<< HEAD
                javascript: `const talentId = 'talent_abc123',
const response = await fetch(\`https://api.ziontechgroup.com/v1/talent/\${talentId}\`, {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
            />;
            <EndpointSection;
              method="GET";
              endpoint="/api/talent/:id";
              description="Get detailed information about a specific talent profile.";
              note="";
              params={[;
                { name: "id", type: "string", description: "The talent ID", required: true }
              ]}
              codeExamples={{;
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/talent/talent_abc123" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content-Type: application/json"`,;
                javascript: `const talentId = 'talent_abc123',;
const response = await fetch(\`https://api.ziontechgroup.com/v1/talent/\${talentId}\`, {;
  method: 'GET',;
  headers: {;
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
  }
}),;
const data = await response.json(),;
logInfo(data),`,;
                python: `import requests;
headers = {;
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
}
;
talent_id = 'talent_abc123';
response = requests.get(;
    f'https://api.ziontechgroup.com/v1/talent/{talent_id}',;
    headers=headers;
);
data = response.json();
print(data)`;
              }}
              responseExamples={{
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                success: `{
  "data": {
    "id": "talent_abc123",
    "display_name": "Jane Smith",
    "headline": "Senior Frontend Developer",
    "bio": "10+ years of experience in frontend development...",
    "skills": ["react", "typescript", "javascript", "css", "html"],
    "availability": "available",
    "average_rating": 4.8,
    "rating_count": 15,
    "portfolio": [
      {
        "id": "proj_123",
<<<<<<< HEAD
        "title": "E-commerce Platform",
        "description": "Built a modern e-commerce platform using React...",
        "technologies": ["react", "redux", "node.js"],
        "image_url": "https://example.com/portfolio/123.jpg"
      }
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    ],
    "certifications": [
      {
        "name": "AWS Certified Developer",
        "issuing_organization": "Amazon Web Services",
        "issue_date": "2024-01-15"
      }
<<<<<<< HEAD
    ];
  }
}`;
              }}
            />
          </TabsContent>
          
          <TabsContent value="quotes" className="space-y-6">
=======

            />;
          </TabsContent>;

          <TabsContent value='quotes' className='space-y-6'>;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            <EndpointSection
              method="POST"
              endpoint="/api/quotes"
              description="Create a quote request for a talent."
              note="Requires quotes:write scope"
              params={[

<<<<<<< HEAD
            />;
          </TabsContent>;
          <TabsContent value='quotes' className='space - y-6'>;
            <EndpointSection;
              method='POST';
              endpoint='/api / quotes';
              description='Create a quote request for a talent.';
              note='Requires quotes:write scope';
              params={[;

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                {
=======
              params={[                {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                  name: 'talent_id'
                  type: 'string'
                  description: 'ID of the talent to request a quote from'
                  required: true
                }
                {
                  name: 'project_name'
                  type: 'string'
                  description: 'Name of the project'
                  required: true
                }
                {
                  name: 'project_summary'
                  type: 'string'
                  description: 'Brief summary of the project'
                  required: true
                }
                {
                  name: 'project_description'
                  type: 'string'
                  description: 'Detailed project description'
                }
                {
                  name: 'timeline'
                  type: 'string'
                  description: 'Expected timeline'
                  required: true
                }
                {
                  name: 'budget_min'
                  type: 'number'
                  description: 'Minimum budget'
                }
                {
                  name: 'budget_max'
                  type: 'number'
                  description: 'Maximum budget'
                }
                {
                  name: 'requester_name'
                  type: 'string'
                  description: 'Name of the requester'
                  required: true
                }
                {
                  name: 'requester_email'
                  type: 'string'
                  description: 'Email of the requester'
                  required: true
                }
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
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
=======

              code_examples={{
                curl: `curl -X POST "https://api.ziontechgroup.com / v1 / quotes" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json" \\;

  -d '{

    "talent_id": "talent_abc123",
    "project_name": "E - commerce Website Redesign",
    "project_summary": "Redesign our outdated e - commerce website with modern UI",
    "project_description": "Our current website is 5 years old and needs a complete overhaul...",
    "timeline": "2 - 3 months",
    "budget_min": 8000,
    "budget_max": 12000,
    "requester_name": "John Doe",

  headers: {

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  },
  body: JSON.stringify({
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    talent_id: 'talent_abc123',
    project_name: 'E-commerce Website Redesign',
    project_summary: 'Redesign our outdated e-commerce website with modern UI',
=======
    project_name: 'E - commerce Website Redesign',
    project_summary: 'Redesign our outdated e - commerce website with modern UI',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    project_description: 'Our current website is 5 years old and needs a complete overhaul...',
    timeline: '2-3 months',
    budget_min: 8000,
    budget_max: 12000,
    requester_name: 'John Doe',
<<<<<<< HEAD
    requester_email: 'john@example.com'
  })
}),

const data = await response.json(),
logInfo(data),`,
                python: `import requests
import json

headers = {
<<<<<<< HEAD
<<<<<<< HEAD
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
}
;
payload = {;
    'talent_id': 'talent_abc123project_name': 'E-commerce Website Redesignproject_summary': 'Redesign our outdated e-commerce website with modern UIproject_description': 'Our current website is 5 years old and needs a complete overhaul...timeline': '2-3 monthsbudget_min': 8000,;
    'budget_max': 12000,;
    'requester_name': 'John Doerequester_email': 'john@example.com';
}
;
response = requests.post(;
    'https://api.ziontechgroup.com/v1/quotes',;
    headers=headers,;
    data=json.dumps(payload);
);
data = response.json();
print(data)`;
              }}
              responseExamples={{
=======
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content - Type': 'application / json';

payload = {

    'talent_id': 'talent_abc123',
    'project_name': 'E - commerce Website Redesign',
    'project_summary': 'Redesign our outdated e - commerce website with modern UI',
    'project_description': 'Our current website is 5 years old and needs a complete overhaul...',
    'timeline': '2 - 3 months',
    'budget_min': 8000,
    'budget_max': 12000,
    'requester_name': 'John Doe',

              }}
              response_examples = {{

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

=======

    requester_email: 'john@example.com';
  });
});
const data = await response.json ();
log_info (data);`,
                python: `import requests;
headers = {

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                python: `import requests
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import json

headers = {

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                success: `{
  "data": {
    "id": "quote_def456",
    "talent_id": "talent_abc123",
    "requester_id": "user_xyz789",
    "project_name": "E-commerce Website Redesign",
    "project_summary": "Redesign our outdated e-commerce website with modern UI",
    "project_description": "Our current website is 5 years old and needs a complete overhaul...",
    "timeline": "2-3 months",
    "budget_min": 8000,
    "budget_max": 12000,
    "budget_display": "$8,000 - $12,000",
    "requester_name": "John Doe",
    "requester_email": "john@example.com",
    "status": "new",
    "created_at": "2025-05-16T14:30:15Z"
  }
<<<<<<< HEAD
<<<<<<< HEAD
}`;
              }}
            />
            
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            <EndpointSection
              method="GET"
              endpoint="/api/quotes"
              description="List quote requests that you've created."
<<<<<<< HEAD
              note=""
              params={[

<<<<<<< HEAD
            <EndpointSection;
              method='GET';
              endpoint='/api / quotes';
              description="List quote requests that you've created.";
              note='';
              params={[;

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                {
                  name: 'page'
                  type: 'integer'
                  description: 'Page number for pagination (default: 1)'
                }
                {

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" },
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },
                { name: "status", type: "string", description: "Filter by status (new, viewed, replied, archived)" }


              ]}
              codeExamples={{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/quotes" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
<<<<<<< HEAD
  -H "Content-Type: application/json"`,
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/quotes', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }
}),;
const data = await response.json(),;
logInfo(data),`,;
                python: `import requests;
=======

  -H "Content-Type: application/json"`,
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/quotes', {
                  name: 'limit',
                  type: 'integer',
                  description:;
                    'Number of results per page (default: 20, max: 100)',
                },
                {
                  name: 'status',
                  type: 'string',
                  description:;
                    'Filter by status (new, viewed, replied, archived)',
                },
              ]}
              code_examples = {{
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / quotes" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json"`,
                javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / quotes', {

  method: 'GET',
  headers: {

const data = await response && response.json()
logInfo(data)`,


    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});
const data = await response.json();
logInfo(data);`,

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                python: `import requests
headers = {
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'

<<<<<<< HEAD
response = requests && requests.get(
    'https://api && api.ziontechgroup.com/v1/quotes',
    headers=headers
)

data = response && response.json()
print(data)`,


print(data)`,

    'Authorization': 'Bearer YOUR_API_KEY',
    'Content - Type': 'application / json';
  }
});
const data = await response.json ();
log_info (data);`,
                python: `import requests;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
headers = {;
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
}
;
response = requests.get(;
    'https: //api.ziontechgroup.com/v1/quotes',;
    headers=headers;
);
data = response.json();
print(data)`;
<<<<<<< HEAD
              }}
              responseExamples={{
=======

              }}
<<<<<<< HEAD
              response_examples={{
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                success: `{
  "data": [
    {
<<<<<<< HEAD
=======


  ],


=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  "meta": {
    "total": 5
    "page": 1
    "limit": 20

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      "id": "quote_def456",
      "talent_id": "talent_abc123",
      "project_name": "E-commerce Website Redesign",
      "project_summary": "Redesign our outdated e-commerce website with modern UI",
      "budget_display": "$8,000 - $12,000",
      "status": "new",
      "created_at": "2025-05-16T14:30:15Z",
      "viewed_at": null,
      "replied_at": null
    },
    // More quotes...
  ],
  "meta": {
    "total": 5,
    "page": 1,
    "limit": 20
  }
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
}`
=======
              note=''
              params={[}`
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  }

}`,
<<<<<<< HEAD
              }}
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}`;
=======
            />
          </TabsContent>
          <TabsContent value='webhooks' className='space-y-6'>
            <div className='prose prose-invert max-w-none'>
              <h3 className='text-lg font-semibold mb-2'>Webhook Events</h3>
              <p className='text-zinc-400 mb-4'>
                The Zion API can send webhook notifications when certain events
                occur in your account. You can configure webhooks in the
                Webhooks tab of the Developer Dashboard.
              </p>
              <h4 className='text-md font-semibold mt-6 mb-2'>
                Authentication
              </h4>
              <p className='text-zinc-400 mb-4'>
                When you create a webhook, you can optionally provide a secret
                key. If a secret is provided, each webhook request will include
                a signature in the
                <code className='bg-zinc-800 px-1 py-0.5 rounded'>
                  X-Zion-Signature
                </code>{' '}
                header. This signature is an HMAC SHA-256 hash of the request
                body using your webhook secret as the key.
              </p>
              <CodeBlock
                code={`import crypto from 'crypto'
// Function to verify webhook signature
function verifyWebhookSignature(payload, signature, secret) {
  const hmac = crypto.createHmac('sha256', secret)
  const expectedSignature = hmac.update(payload).digest('hex')}`;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

}`;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              }}
            />
          </TabsContent>
          
          <TabsContent value="webhooks" className="space-y-6">
            <div className="prose prose-invert max-w-none">
              <h3 className="text-lg font-semibold mb-2">Webhook Events</h3>
              <p className="text-zinc-400 mb-4">
                The Zion API can send webhook notifications when certain events occur in your account.
                You can configure webhooks in the Webhooks tab of the Developer Dashboard.
              </p>
              
              <h4 className="text-md font-semibold mt-6 mb-2">Authentication</h4>
              <p className="text-zinc-400 mb-4">
                When you create a webhook, you can optionally provide a secret key.
                If a secret is provided, each webhook request will include a signature in the
                <code className="bg-zinc-800 px-1 py-0.5 rounded">X-Zion-Signature</code> header.
                This signature is an HMAC SHA-256 hash of the request body using your webhook secret as the key.
              </p>
              
              <CodeBlock
                code={`import crypto from 'crypto',
// Function to verify webhook signature
function verifyWebhookSignature(payload, signature, secret) {
  const hmac = crypto.createHmac('sha256', secret),
  const expectedSignature = hmac.update(payload).digest('hex'),
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  )
<<<<<<< HEAD
=======

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
;
// Example usage in Express.js;
app.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {;
  const signature = req.headers['x-zion-signature'],;
  const payload = req.body.toString(),;
  const webhookSecret = process.env.WEBHOOK_SECRET,;
  if (!verifyWebhookSignature(payload, signature, webhookSecret)) {;
    return res.status(401).send('Invalid signature');
  }
  
  // Process the webhook event
  const event = JSON.parse(payload),
  logInfo('Received valid webhook:', { data: event }),
  
  // Respond to acknowledge receipt
  res.status(200).send('Webhook received')
}),`}
                language="javascript"
                showLineNumbers={true}
              />
              
              <h4 className="text-md font-semibold mt-6 mb-2">Event Types</h4>
              <table className="w-full border-collapse mt-2">
=======

  return crypto.timingSafeEqual(
    Buffer.from(signature)
    Buffer.from(expectedSignature)
  )

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="py-2 px-4 text-left">Event Type</th>
                    <th className="py-2 px-4 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-800">
                    <td className="py-2 px-4 font-mono text-sm">new_application</td>
                    <td className="py-2 px-4">When a talent applies to one of your jobs</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-2 px-4 font-mono text-sm">quote_received</td>
                    <td className="py-2 px-4">When you receive a quote from talent</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-2 px-4 font-mono text-sm">milestone_approved</td>
                    <td className="py-2 px-4">When a project milestone is approved</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-2 px-4 font-mono text-sm">talent_hired</td>
                    <td className="py-2 px-4">When you hire talent for a project</td>
                  </tr>
                </tbody>
              </table>

<<<<<<< HEAD
            />;
          </TabsContent>;

          <TabsContent value='webhooks' className='space-y-6'>;
            <div className='prose prose-invert max-w-none'>;
              <h3 className='text-lg font-semibold mb-2'>Webhook Events</h3>;
              <p className='text-zinc-400 mb-4'>;
                The Zion API can send webhook notifications when certain events;
                occur in your account. You can configure webhooks in the;
                Webhooks tab of the Developer Dashboard.;
              </p>;

              <h4 className='text-md font-semibold mt-6 mb-2'>;
                Authentication;
              </h4>;
              <p className='text-zinc-400 mb-4'>;
                When you create a webhook, you can optionally provide a secret;
                key. If a secret is provided, each webhook request will include;
                a signature in the;
                <code className='bg-zinc-800 px-1 py-0 && 0.5 rounded'>;
                  X-Zion-Signature;
                </code>{' '}
                header. This signature is an HMAC SHA-256 hash of the request;
                body using your webhook secret as the key.;
              </p>;

              <CodeBlock
                code={`import crypto from 'crypto'
// Function to verify webhook signature
function verifyWebhookSignature(): any (payload, signature, secret) {
  const hmac = crypto && crypto.createHmac('sha256', secret)
  const expectedSignature = hmac && hmac.update(payload).digest('hex')
  return crypto && crypto.timingSafeEqual(
    Buffer && Buffer.from(signature),
    Buffer && Buffer.from(expectedSignature)
  )

// Example usage in Express && Express.js
app && app.post('/webhook', express && express.raw({type: 'application/json'}), (req, res) => {;
  const signature = req && req.headers['x-zion-signature'];
  const payload = req && req.body.toString();
  const webhookSecret = process && process.env.WEBHOOK_SECRET;  ;
  if (!verifyWebhookSignature(payload, signature, webhookSecret)) {;
    return res && res.status(401).send('Invalid signature');
  }

  // Process the webhook event;
  const event = JSON && JSON.parse(payload);
  logInfo('Received valid webhook:', { data: event });

  // Respond to acknowledge receipt;
  res && res.status(200).send('Webhook received');
});`}
                language='javascript';
                showLineNumbers={true}              />;

              <h4 className='text-md font-semibold mt-6 mb-2'>Event Types</h4>;
              <table className='w-full border-collapse mt-2'>;
                <thead>;
                  <tr className='border-b border-zinc-800'>;
                    <th className='py-2 px-4 text-left'>Event Type</th>;
                    <th className='py-2 px-4 text-left'>Description</th>;
                  </tr>;
                </thead>;
                <tbody>;
                  <tr className='border-b border-zinc-800'>;
                    <td className='py-2 px-4 font-mono text-sm'>;
                      new_application;
                    </td>;
                    <td className='py-2 px-4'>;
                      When a talent applies to one of your jobs;
                    </td>;
                  </tr>;
                  <tr className='border-b border-zinc-800'>;
                    <td className='py-2 px-4 font-mono text-sm'>;
                      quote_received;
                    </td>;
                    <td className='py-2 px-4'>;
                      When you receive a quote from talent;
                    </td>;
                  </tr>;
                  <tr className='border-b border-zinc-800'>;
                    <td className='py-2 px-4 font-mono text-sm'>;
                      milestone_approved;
                    </td>;
                    <td className='py-2 px-4'>;
                      When a project milestone is approved;
                    </td>;
                  </tr>;
                  <tr className='border-b border-zinc-800'>;
                    <td className='py-2 px-4 font-mono text-sm'>;
                      talent_hired;
                    </td>;
                    <td className='py-2 px-4'>;
                      When you hire talent for a project;
                    </td>;
                  </tr>;
                </tbody>;
              </table>;

              <h4 className='text-md font-semibold mt-6 mb-2'>;
                Sample Payloads;
              </h4>;
              <p className='text-zinc-400 mb-2'>;

                Here's an example of a{' '}
                <code className='bg-zinc-800 px-1 py-0 && 0.5 rounded'>;
                  new_application;
                </code>{' '}

                webhook payload:;
              </p>;


=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              <CodeBlock
                code = {`{
  "event_type": "new_application"
  "event_id": "evt_abc123def456"
  "timestamp": "2025-05-16T15:30:00Z"

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              <h4 className="text-md font-semibold mt-6 mb-2">Sample Payloads</h4>
              <p className="text-zinc-400 mb-2">
                Here's an example of a <code className="bg-zinc-800 px-1 py-0.5 rounded">new_application</code> webhook payload:
              </p>
              
              <CodeBlock
                code={`{
  "event_type": "new_application",
  "event_id": "evt_abc123def456",
  "timestamp": "2025-05-16T15:30:00Z",
  "data": {
    "application_id": "app_123456",
    "job_id": "job_abc123",
    "talent_id": "talent_xyz789",
    "applied_at": "2025-05-16T15:28:30Z",
    "status": "new",
    "match_score": 85
  }
}`}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                language="json"
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                showLineNumbers={true}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="errors" className="space-y-6">
            <div className="prose prose-invert max-w-none">
              <h3 className="text-lg font-semibold mb-2">Error Responses</h3>
              <p className="text-zinc-400 mb-4">
                The Zion API uses conventional HTTP status codes to indicate the success or failure of an API request.
                In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error with the
                provided information, and codes in the 5xx range indicate an error with our servers.
              </p>
              
              <table className="w-full border-collapse mt-4">
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="py-2 px-4 text-left">Status Code</th>
                    <th className="py-2 px-4 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-800">
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">200 OK</code></td>
                    <td className="py-2 px-4">The request was successful.</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">201 Created</code></td>
                    <td className="py-2 px-4">The resource was successfully created.</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">400 Bad Request</code></td>
                    <td className="py-2 px-4">The request was invalid or cannot be otherwise served.</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">401 Unauthorized</code></td>
                    <td className="py-2 px-4">Authentication credentials were missing or invalid.</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">403 Forbidden</code></td>
                    <td className="py-2 px-4">The request is understood, but it has been refused or access is not allowed.</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">404 Not Found</code></td>
                    <td className="py-2 px-4">The requested resource does not exist.</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">422 Unprocessable Entity</code></td>
                    <td className="py-2 px-4">The request was well-formed but was unable to be followed due to semantic errors.</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">429 Too Many Requests</code></td>
                    <td className="py-2 px-4">The request was rejected due to rate limiting.</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">500 Internal Server Error</code></td>
                    <td className="py-2 px-4">Something went wrong on our end.</td>
                  </tr>
                </tbody>
              </table>
<<<<<<< HEAD
=======

                showLineNumbers={true}              />;
            </div>;
          </TabsContent>;

          <TabsContent value='errors' className='space-y-6'>;
            <div className='prose prose-invert max-w-none'>;
              <h3 className='text-lg font-semibold mb-2'>Error Responses</h3>;
              <p className='text-zinc-400 mb-4'>;
            />;
          </TabsContent>;
          <TabsContent value='webhooks' className='space - y-6'>;
            <div className='prose prose - invert max - w-none'>;
              <h3 className='text - lg font - semibold mb - 2'>Webhook Events</h3>;
              <p className='text - zinc - 400 mb - 4'>;
                The Zion API can send webhook notifications when certain events;
                occur in your account. You can configure webhooks in the;
                Webhooks tab of the Developer Dashboard.;
              </p>;
              <h4 className='text - md font - semibold mt - 6 mb - 2'>;
                Authentication;
              </h4>;
              <p className='text - zinc - 400 mb - 4'>;
                When you create a webhook, you can optionally provide a secret;
                key. If a secret is provided, each webhook request will include;
                a signature in the;
                <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                  X - Zion - Signature;
                </code>{' '}
                header. This signature is an HMAC SHA - 256 hash of the request;
                body using your webhook secret as the key.;
              </p>;
              <CodeBlock;
                code={`import crypto from 'crypto';
// Function to verify webhook signature;
/**
 * verifyWebhookSignature - Function description
 */
function verifyWebhookSignature() {
  const hmac = crypto.create_hmac ('sha256', secret);
  const expected_signature = hmac.update (payload).digest ('hex');
  return crypto.timingSafeEqual (
    Buffer.from (signature),
    Buffer.from (expected_signature));
// Example usage in Express.js;
app.post ('/webhook', express.raw ({type: 'application / json'}), (req, res) => {
  const signature = req.headers['x - zion - signature'];
  const payload = req.body.to_string ();
  const webhook_secret = process.env.WEBHOOK_SECRET;
  if () {) {
  $2
}
    return res.status (401).send ('Invalid signature');
  }
  // Process the webhook event;
  const event = JSON.parse (payload);
  log_info ('Received valid webhook:', { data: event });
  // Respond to acknowledge receipt;
  res.status (200).send ('Webhook received');
});`}
                language='javascript';
                showLineNumbers={true}              />;
              <h4 className='text - md font - semibold mt - 6 mb - 2'>Event Types</h4>;
              <table className='w - full border - collapse mt - 2'>;
                <thead>;
                  <tr className='border - b border - zinc - 800'>;
                    <th className='py - 2 px - 4 text - left'>Event Type</th>;
                    <th className='py - 2 px - 4 text - left'>Description</th>;
                  </tr>;
                </thead>;
                <tbody>;
                  <tr className='border - b border - zinc - 800'>;
                    <td className='py - 2 px - 4 font - mono text - sm'>;
                      new_application;
                    </td>;
                    <td className='py - 2 px - 4'>;
                      When a talent applies to one of your jobs;
                    </td>;
                  </tr>;
                  <tr className='border - b border - zinc - 800'>;
                    <td className='py - 2 px - 4 font - mono text - sm'>;
                      quote_received;
                    </td>;
                    <td className='py - 2 px - 4'>;
                      When you receive a quote from talent;
                    </td>;
                  </tr>;
                  <tr className='border - b border - zinc - 800'>;
                    <td className='py - 2 px - 4 font - mono text - sm'>;
                      milestone_approved;
                    </td>;
                    <td className='py - 2 px - 4'>;
                      When a project milestone is approved;
                    </td>;
                  </tr>;
                  <tr className='border - b border - zinc - 800'>;
                    <td className='py - 2 px - 4 font - mono text - sm'>;
                      talent_hired;
                    </td>;
                    <td className='py - 2 px - 4'>;
                      When you hire talent for a project;
                    </td>;
                  </tr>;
                </tbody>;
              </table>;
              <h4 className='text - md font - semibold mt - 6 mb - 2'>;
                Sample Payloads;
              </h4>;
              <p className='text - zinc - 400 mb - 2'>;
                Here's an example of a{' '}
                <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                  new_application;
                </code>{' '}
                webhook payload:;
              </p>;
              <CodeBlock;
                code = {`{
  "event_type": "new_application",
  "event_id": "evt_abc123def456",
  "timestamp": "2025 - 05 - 16T15:30:00Z",
  "data": {
    "application_id": "app_123456",
    "job_id": "job_abc123",
    "talent_id": "talent_xyz789",
    "applied_at": "2025 - 05 - 16T15:28:30Z",
    "status": "new",
    "match_score": 85;
  , }
}`}
                language='json';
                showLineNumbers={true}              />;
            </div>;
          </TabsContent>;
          <TabsContent value='errors' className='space - y-6'>;
            <div className='prose prose - invert max - w-none'>;
              <h3 className='text - lg font - semibold mb - 2'>Error Responses</h3>;
              <p className='text - zinc - 400 mb - 4'>;

                The Zion API uses conventional HTTP status codes to indicate the;
                success or failure of an API request. In general, codes in the;
                2xx range indicate success, codes in the 4xx range indicate an;
                error with the provided information, and codes in the 5xx range;
                indicate an error with our servers.;
              </p>;

              <table className='w - full border - collapse mt - 4'>;
                <thead>;
                  <tr className='border - b border - zinc - 800'>;
                    <th className='py - 2 px - 4 text - left'>Status Code</th>;
                    <th className='py - 2 px - 4 text - left'>Description</th>;
                  </tr>;
                </thead>;
                <tbody>;
                  <tr className='border - b border - zinc - 800'>;
                    <td className='py - 2 px - 4'>;
                      <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                        200 OK;
                      </code>;
                    </td>;
                    <td className='py - 2 px - 4'>The request was successful.</td>;
                  </tr>;
                  <tr className='border - b border - zinc - 800'>;
                    <td className='py - 2 px - 4'>;
                      <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                        201 Created;
                      </code>;
                    </td>;
                    <td className='py - 2 px - 4'>;
                      The resource was successfully created.;
                    </td>;
                  </tr>;
                  <tr className='border - b border - zinc - 800'>;
                    <td className='py - 2 px - 4'>;
                      <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                        400 Bad Request;
                      </code>;
                    </td>;
                    <td className='py - 2 px - 4'>;
                      The request was invalid or cannot be otherwise served.;
                    </td>;
                  </tr>;
                  <tr className='border - b border - zinc - 800'>;
                    <td className='py - 2 px - 4'>;
                      <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                        401 Unauthorized;
                      </code>;
                    </td>;
                    <td className='py - 2 px - 4'>;
                      Authentication credentials were missing or invalid.;
                    </td>;
                  </tr>;
                  <tr className='border - b border - zinc - 800'>;
                    <td className='py - 2 px - 4'>;
                      <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                        403 Forbidden;
                      </code>;
                    </td>;
                    <td className='py - 2 px - 4'>;

                      The request is understood, but it has been refused or;
                      access is not allowed.;
                    </td>;
                  </tr>;

                  <tr className='border - b border - zinc - 800'>;
                    <td className='py - 2 px - 4'>;
                      <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                        404 Not Found;
                      </code>;
                    </td>;
                    <td className='py - 2 px - 4'>;
                      The requested resource does not exist.;
                    </td>;
                  </tr>;
                  <tr className='border - b border - zinc - 800'>;
                    <td className='py - 2 px - 4'>;
                      <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                        422 Unprocessable Entity;
                      </code>;
                    </td>;
                    <td className='py - 2 px - 4'>;
                      The request was well - formed but was unable to be followed;
                      due to semantic errors.;
                    </td>;
                  </tr>;
                  <tr className='border - b border - zinc - 800'>;
                    <td className='py - 2 px - 4'>;
                      <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                        429 Too Many Requests;
                      </code>;
                    </td>;
                    <td className='py - 2 px - 4'>;
                      The request was rejected due to rate limiting.;
                    </td>;
                  </tr>;
                  <tr className='border - b border - zinc - 800'>;
                    <td className='py - 2 px - 4'>;
                      <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                        500 Internal Server Error;
                      </code>;
                    </td>;
                    <td className='py - 2 px - 4'>;

                      Something went wrong on our end.;
                    </td>;
                  </tr>;
                </tbody>;
              </table>;

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              <h4 className="text-md font-semibold mt-6 mb-2">Error Response Format</h4>
              <p className="text-zinc-400 mb-2">
                Error responses include a consistent JSON object with the following format:
              </p>
<<<<<<< HEAD
              
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              <CodeBlock
                code={`{
  "error": {
    "code": "invalid_request",
    "message": "The request was invalid",
    "details": [
      {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        "field": "project_name",
        "message": "Project name is required"
;
  // Process the webhook event;
  const event = JSON.parse(payload),;
  logInfo('Received valid webhook:', { data: event }),;
  // Respond to acknowledge receipt;
  res.status(200).send('Webhook received');
}),`}
                language="javascript";
                showLineNumbers={true}
              />;
              <h4 className="text-md font-semibold mt-6 mb-2">Event Types</h4>;
              <table className="w-full border-collapse mt-2">;
                <thead>;
                  <tr className="border-b border-zinc-800">;
                    <th className="py-2 px-4 text-left">Event Type</th>;
                    <th className="py-2 px-4 text-left">Description</th>;
                  </tr>;
                </thead>;
                <tbody>;
                  <tr className="border-b border-zinc-800">;
                    <td className="py-2 px-4 font-mono text-sm">new_application</td>;
                    <td className="py-2 px-4">When a talent applies to one of your jobs</td>;
                  </tr>;
                  <tr className="border-b border-zinc-800">;
                    <td className="py-2 px-4 font-mono text-sm">quote_received</td>;
                    <td className="py-2 px-4">When you receive a quote from talent</td>;
                  </tr>;
                  <tr className="border-b border-zinc-800">;
                    <td className="py-2 px-4 font-mono text-sm">milestone_approved</td>;
                    <td className="py-2 px-4">When a project milestone is approved</td>;
                  </tr>;
                  <tr className="border-b border-zinc-800">;
                    <td className="py-2 px-4 font-mono text-sm">talent_hired</td>;
                    <td className="py-2 px-4">When you hire talent for a project</td>;
                  </tr>;
                </tbody>;
              </table>;
              <h4 className="text-md font-semibold mt-6 mb-2">Sample Payloads</h4>;
              <p className="text-zinc-400 mb-2">;
                Here's an example of a <code className="bg-zinc-800 px-1 py-0.5 rounded">new_application</code> webhook payload:;
              </p>;
              <CodeBlock;
                code={`{;
  "event_type": "new_application",;
  "event_id": "evt_abc123def456",;
  "timestamp": "2025-05-16T15:30:00Z",;
  "data": {;
    "application_id": "app_123456",;
    "job_id": "job_abc123",;
    "talent_id": "talent_xyz789",;
    "applied_at": "2025-05-16T15:28:30Z",;
    "status": "new",;
    "match_score": 85;
  }
}`}
                language="json";
                showLineNumbers={true}
              />;
            </div>;
          </TabsContent>;
          <TabsContent value="errors" className="space-y-6">;
            <div className="prose prose-invert max-w-none">;
              <h3 className="text-lg font-semibold mb-2">Error Responses</h3>;
              <p className="text-zinc-400 mb-4">;
                The Zion API uses conventional HTTP status codes to indicate the success or failure of an API request.;
                In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error with the;
                provided information, and codes in the 5xx range indicate an error with our servers.;
              </p>;
              <table className="w-full border-collapse mt-4">;
                <thead>;
                  <tr className="border-b border-zinc-800">;
                    <th className="py-2 px-4 text-left">Status Code</th>;
                    <th className="py-2 px-4 text-left">Description</th>;
                  </tr>;
                </thead>;
                <tbody>;
                  <tr className="border-b border-zinc-800">;
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">200 OK</code></td>;
                    <td className="py-2 px-4">The request was successful.</td>;
                  </tr>;
                  <tr className="border-b border-zinc-800">;
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">201 Created</code></td>;
                    <td className="py-2 px-4">The resource was successfully created.</td>;
                  </tr>;
                  <tr className="border-b border-zinc-800">;
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">400 Bad Request</code></td>;
                    <td className="py-2 px-4">The request was invalid or cannot be otherwise served.</td>;
                  </tr>;
                  <tr className="border-b border-zinc-800">;
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">401 Unauthorized</code></td>;
                    <td className="py-2 px-4">Authentication credentials were missing or invalid.</td>;
                  </tr>;
                  <tr className="border-b border-zinc-800">;
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">403 Forbidden</code></td>;
                    <td className="py-2 px-4">The request is understood, but it has been refused or access is not allowed.</td>;
                  </tr>;
                  <tr className="border-b border-zinc-800">;
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">404 Not Found</code></td>;
                    <td className="py-2 px-4">The requested resource does not exist.</td>;
                  </tr>;
                  <tr className="border-b border-zinc-800">;
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">422 Unprocessable Entity</code></td>;
                    <td className="py-2 px-4">The request was well-formed but was unable to be followed due to semantic errors.</td>;
                  </tr>;
                  <tr className="border-b border-zinc-800">;
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">429 Too Many Requests</code></td>;
                    <td className="py-2 px-4">The request was rejected due to rate limiting.</td>;
                  </tr>;
                  <tr className="border-b border-zinc-800">;
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">500 Internal Server Error</code></td>;
                    <td className="py-2 px-4">Something went wrong on our end.</td>;
                  </tr>;
                </tbody>;
              </table>;
              <h4 className="text-md font-semibold mt-6 mb-2">Error Response Format</h4>;
              <p className="text-zinc-400 mb-2">;
                Error responses include a consistent JSON object with the following format:;
              </p>;
              <CodeBlock;
                code={`{;
  "error": {;
    "code": "invalid_request",;
    "message": "The request was invalid",;
    "details": [;
      {;
        "field": "project_name",;
        "message": "Project name is required";
      }
    ];
  }
}`}
                language="json"
              />
              
              <h4 className="text-md font-semibold mt-6 mb-2">Rate Limiting</h4>
              <p className="text-zinc-400 mb-4">
                The Zion API implements rate limiting to protect our infrastructure and ensure fair usage.
                Rate limits are applied on a per-API key basis. If you exceed the rate limits, you will receive 
                a <code className="bg-zinc-800 px-1 py-0.5 rounded">429 Too Many Requests</code> response.
              </p>
              
              <p className="text-zinc-400 mb-2">
                Rate limit information is included in the response headers: </p>
              
              <ul className="list-disc pl-6 space-y-1 text-zinc-400">
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Limit</code>: Number of requests allowed in the time window</li>
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Remaining</code>: Number of requests remaining in the current window</li>
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Reset</code>: Unix timestamp when the rate limit resets</li>
=======

              />;

              <h4 className='text-md font-semibold mt-6 mb-2'>Rate Limiting</h4>;
              <p className='text-zinc-400 mb-4'>;
                The Zion API implements rate limiting to protect our;
                infrastructure and ensure fair usage. Rate limits are applied on;
                a per-API key basis. If you exceed the rate limits, you will;

=======
      ,}
    ]
  }
}`}
                language='json'
              />
              <h4 className='text-md font-semibold mt-6 mb-2'>Rate Limiting</h4>
              <p className='text-zinc-400 mb-4'>
                The Zion API implements rate limiting to protect our
                infrastructure and ensure fair usage. Rate limits are applied on
                a per-API key basis. If you exceed the rate limits, you will
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                receive a{' '}
                <code className='bg-zinc-800 px-1 py-0.5 rounded'>
                  429 Too Many Requests
                </code>{' '}
<<<<<<< HEAD




>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              </ul>
=======
                response.
              </p>
              <p className='text-zinc-400 mb-2'>
                Rate limit information is included in the response headers:
              </p>
              <ul className='list-disc pl-6 space-y-1 text-zinc-400'>
                <li>
                  <code className='bg-zinc-800 px-1 py-0.5 rounded'>
                    X-RateLimit-Limit
                  </code>
                  : Number of requests allowed in the time window
                </li>
                <li>
                  <code className='bg-zinc-800 px-1 py-0.5 rounded'>
                    X-RateLimit-Remaining
                  </code>
                  : Number of requests remaining in the current window
                </li>
                <li>
                  <code className='bg-zinc-800 px-1 py-0.5 rounded'>
                    X-RateLimit-Reset
                  </code>
                  : Unix timestamp when the rate limit resets
                </li>
;
  // Process the webhook event;
  const event = JSON.parse(payload),;
  logInfo('Received valid webhook:', { data: event }),;
  // Respond to acknowledge receipt;
  res.status(200).send('Webhook received');
}),`}
                language="javascript";
                showLineNumbers={true}
              />;
              <h4 className="text-md font-semibold mt-6 mb-2">Event Types</h4>;
              <table className="w-full border-collapse mt-2">;
                <thead>;
                  <tr className="border-b border-zinc-800">;
                    <th className="py-2 px-4 text-left">Event Type</th>;
                    <th className="py-2 px-4 text-left">Description</th>;
                  </tr>;
                </thead>;
                <tbody>;
                  <tr className="border-b border-zinc-800">;
                    <td className="py-2 px-4 font-mono text-sm">new_application</td>;
                    <td className="py-2 px-4">When a talent applies to one of your jobs</td>;
                  </tr>;
                  <tr className="border-b border-zinc-800">;
                    <td className="py-2 px-4 font-mono text-sm">quote_received</td>;
                    <td className="py-2 px-4">When you receive a quote from talent</td>;
                  </tr>;
                  <tr className="border-b border-zinc-800">;
                    <td className="py-2 px-4 font-mono text-sm">milestone_approved</td>;
                    <td className="py-2 px-4">When a project milestone is approved</td>;
                  </tr>;
                  <tr className="border-b border-zinc-800">;
                    <td className="py-2 px-4 font-mono text-sm">talent_hired</td>;
                    <td className="py-2 px-4">When you hire talent for a project</td>;
                  </tr>;
                </tbody>;
              </table>;
              <h4 className="text-md font-semibold mt-6 mb-2">Sample Payloads</h4>;
              <p className="text-zinc-400 mb-2">;
                Here's an example of a <code className="bg-zinc-800 px-1 py-0.5 rounded">new_application</code> webhook payload:;
              </p>;
              <CodeBlock;
                code={`{;
  "event_type": "new_application",;
  "event_id": "evt_abc123def456",;
  "timestamp": "2025-05-16T15:30:00Z",;
  "data": {;
    "application_id": "app_123456",;
    "job_id": "job_abc123",;
    "talent_id": "talent_xyz789",;
    "applied_at": "2025-05-16T15:28:30Z",;
    "status": "new",;
    "match_score": 85;
  }
}`}
                language="json";
                showLineNumbers={true}
              />;
            </div>;
          </TabsContent>;
          <TabsContent value="errors" className="space-y-6">;
            <div className="prose prose-invert max-w-none">;
              <h3 className="text-lg font-semibold mb-2">Error Responses</h3>;
              <p className="text-zinc-400 mb-4">;
                The Zion API uses conventional HTTP status codes to indicate the success or failure of an API request.;
                In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error with the;
                provided information, and codes in the 5xx range indicate an error with our servers.;
              </p>;
              <table className="w-full border-collapse mt-4">;
                <thead>;
                  <tr className="border-b border-zinc-800">;
                    <th className="py-2 px-4 text-left">Status Code</th>;
                    <th className="py-2 px-4 text-left">Description</th>;
                  </tr>;
                </thead>;
                <tbody>;
                  <tr className="border-b border-zinc-800">;
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">200 OK</code></td>;
                    <td className="py-2 px-4">The request was successful.</td>;
                  </tr>;
                  <tr className="border-b border-zinc-800">;
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">201 Created</code></td>;
                    <td className="py-2 px-4">The resource was successfully created.</td>;
                  </tr>;
                  <tr className="border-b border-zinc-800">;
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">400 Bad Request</code></td>;
                    <td className="py-2 px-4">The request was invalid or cannot be otherwise served.</td>;
                  </tr>;
                  <tr className="border-b border-zinc-800">;
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">401 Unauthorized</code></td>;
                    <td className="py-2 px-4">Authentication credentials were missing or invalid.</td>;
                  </tr>;
                  <tr className="border-b border-zinc-800">;
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">403 Forbidden</code></td>;
                    <td className="py-2 px-4">The request is understood, but it has been refused or access is not allowed.</td>;
                  </tr>;
                  <tr className="border-b border-zinc-800">;
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">404 Not Found</code></td>;
                    <td className="py-2 px-4">The requested resource does not exist.</td>;
                  </tr>;
                  <tr className="border-b border-zinc-800">;
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">422 Unprocessable Entity</code></td>;
                    <td className="py-2 px-4">The request was well-formed but was unable to be followed due to semantic errors.</td>;
                  </tr>;
                  <tr className="border-b border-zinc-800">;
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">429 Too Many Requests</code></td>;
                    <td className="py-2 px-4">The request was rejected due to rate limiting.</td>;
                  </tr>;
                  <tr className="border-b border-zinc-800">;
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">500 Internal Server Error</code></td>;
                    <td className="py-2 px-4">Something went wrong on our end.</td>;
                  </tr>;
                </tbody>;
              </table>;
              <h4 className="text-md font-semibold mt-6 mb-2">Error Response Format</h4>;
              <p className="text-zinc-400 mb-2">;
                Error responses include a consistent JSON object with the following format:;
              </p>;
              <CodeBlock;
                code={`{;
  "error": {;
    "code": "invalid_request",;
    "message": "The request was invalid",;
    "details": [;
      {;
        "field": "project_name",;
        "message": "Project name is required";
      }
    ];
  }
}`}
                language="json"
              />
              
              <h4 className="text-md font-semibold mt-6 mb-2">Rate Limiting</h4>
              <p className="text-zinc-400 mb-4">
                The Zion API implements rate limiting to protect our infrastructure and ensure fair usage.
                Rate limits are applied on a per-API key basis. If you exceed the rate limits, you will receive 
                a <code className="bg-zinc-800 px-1 py-0.5 rounded">429 Too Many Requests</code> response.
              </p>
              
              <p className="text-zinc-400 mb-2">
                Rate limit information is included in the response headers: </p>
              
              <ul className="list-disc pl-6 space-y-1 text-zinc-400">
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Limit</code>: Number of requests allowed in the time window</li>
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Remaining</code>: Number of requests remaining in the current window</li>
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Reset</code>: Unix timestamp when the rate limit resets</li>              </ul>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

              </ul>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
<<<<<<< HEAD
}

<<<<<<< HEAD
=======

}

<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
// Helper component for API endpoint documentation
function EndpointSection({
  method,
  endpoint,
  description,
  note,
  params = [],
  codeExamples,
  responseExamples
}: EndpointSectionProps) {
<<<<<<< HEAD
<<<<<<< HEAD
  const [activeTab, setActiveTab] = useState("curl"),
  
  return (
    <div className="border border-zinc-800 rounded-md">
      <div className="p-4">
        <div className="flex items-center">
          <Badge 
            variant="outline" 
            className={
              method === 'GET' 
                ? "border-green-500 text-green-400 font-mono" 
                : method === 'POST' 
                ? "border-blue-500 text-blue-400 font-mono"
                : method === 'PUT'
                ? "border-yellow-500 text-yellow-400 font-mono"
                : "border-red-500 text-red-400 font-mono"
                language="json";
=======

                response.;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              </p>;

              <p className='text-zinc-400 mb-2'>;
                Rate limit information is included in the response headers:;
              </p>;

              <ul className='list-disc pl-6 space-y-1 text-zinc-400'>;
                <li>;
                  <code className='bg-zinc-800 px-1 py-0 && 0.5 rounded'>;
                    X-RateLimit-Limit;
              <h4 className='text - md font - semibold mt - 6 mb - 2'>;
                Error Response Format;
              </h4>;
              <p className='text - zinc - 400 mb - 2'>;
                Error responses include a consistent JSON object with the;
                following format:;
              </p>;
              <CodeBlock;
                code = {`{
  "error": {
    "code": "invalid_request",
    "message": "The request was invalid",
    "details": [;
      {
        "field": "project_name",
        "message": "Project name is required";
      , }
    ];
  }
}`}
                language='json';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  const [activeTab, setActiveTab] = useState('curl')

  return (
    <div className='border border-zinc-800 rounded-md'>
      <div className='p-4'>
        <div className='flex items-center'>
          <Badge
            variant='outline'
            className={
              method === 'GET'
                ? 'border-green-500 text-green-400 font-mono'
                : method === 'POST'
                  ? 'border-blue-500 text-blue-400 font-mono'
                  : method === 'PUT'
                    ? 'border-yellow-500 text-yellow-400 font-mono'
                    : 'border-red-500 text-red-400 font-mono'
            }          >
            {method}
          </Badge>
          <span className='ml-2 font-mono text-sm text-white'>{endpoint}</span>
          {note && (
            <Badge className='ml-auto bg-amber-800 text-amber-200 hover:bg-amber-800'>
  const [activeTab, setActiveTab] = useState("curl"),
  
  return (
    <div className="border border-zinc-800 rounded-md">
      <div className="p-4">
        <div className="flex items-center">
          <Badge 
            variant="outline" 
            className={
              method === 'GET' 
                ? "border-green-500 text-green-400 font-mono" 
                : method === 'POST' 
                ? "border-blue-500 text-blue-400 font-mono"
                : method === 'PUT'
                ? "border-yellow-500 text-yellow-400 font-mono"
                : "border-red-500 text-red-400 font-mono"
                language="json";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              />;
              <h4 className="text-md font-semibold mt-6 mb-2">Rate Limiting</h4>;
              <p className="text-zinc-400 mb-4">;
                The Zion API implements rate limiting to protect our infrastructure and ensure fair usage.;
                Rate limits are applied on a per-API key basis. If you exceed the rate limits, you will receive;
                a <code className="bg-zinc-800 px-1 py-0.5 rounded">429 Too Many Requests</code> response.;
              </p>;
              <p className="text-zinc-400 mb-2">;
                Rate limit information is included in the response headers: </p>;
              <ul className="list-disc pl-6 space-y-1 text-zinc-400">;
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Limit</code>: Number of requests allowed in the time window</li>;
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Remaining</code>: Number of requests remaining in the current window</li>;
<<<<<<< HEAD
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Reset</code>: Unix timestamp when the rate limit resets</li>;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              </ul>;
=======
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Reset</code>: Unix timestamp when the rate limit resets</li>;              </ul>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            </div>;
          </TabsContent>;
        </Tabs>;
      </CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    </Card>;
  );
}
;
// Helper component for API endpoint documentation;
function EndpointSection({;
  method,;
  endpoint,;
  description,;
  note,;
  params = [],;
  codeExamples;
  responseExamples;
}: EndpointSectionProps) {;
  const [activeTab, setActiveTab] = useState("curl");
  return (;
    <div className="border border-zinc-800 rounded-md">;
      <div className="p-4">;
        <div className="flex items-center">;
          <Badge;
            variant="outline";
            className={;
              method === 'GET';
                ? "border-green-500 text-green-400 font-mono";
                : method === 'POST';
                ? "border-blue-500 text-blue-400 font-mono";
                : method === 'PUT';
                ? "border-yellow-500 text-yellow-400 font-mono";
                : "border-red-500 text-red-400 font-mono";
            }
          >;
            {method}
          </Badge>;
          <span className="ml-2 font-mono text-sm text-white">{endpoint}</span>;
          {note && (;
            <Badge className="ml-auto bg-amber-800 text-amber-200 hover:bg-amber-800">;
<<<<<<< HEAD
=======




>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              {note}
            </Badge>
          )}
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        
        <p className="mt-2 text-zinc-400">{description}</p>
      </div>
      
=======
        <p className='mt-2 text-zinc-400'>{description}</p>
      </div>        
        <p className="mt-2 text-zinc-400">{description}</p>
      </div>
      

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

        <p className="mt-2 text-zinc-400">{description}</p>
      </div>

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      {params.length > 0 && (
        <div className="border-t border-zinc-800 p-4">
          <h4 className="font-medium mb-2">Parameters</h4>
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-zinc-800 text-sm">
                <th className="pb-2">Name</th>
                <th className="pb-2">Type</th>
                <th className="pb-2">Description</th>
              </tr>
            </thead>
            <tbody>
<<<<<<< HEAD
              {params.map((param, index) => (

<<<<<<< HEAD
        </div>;

        <p className='mt-2 text-zinc-400'>{description}</p>;
      </div>;

      {params && params.length > 0 && (;
        <div className='border-t border-zinc-800 p-4'>;
          <h4 className='font-medium mb-2'>Parameters</h4>;
          <table className='w-full'>;
            <thead>;
              <tr className='text-left border-b border-zinc-800 text-sm'>;
                <th className='pb-2'>Name</th>;
                <th className='pb-2'>Type</th>;
                <th className='pb-2'>Description</th>;
              </tr>;
            </thead>;
            <tbody>;
              {params && params.map((param, index) => (;

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                <tr
                  key={index}
                  className={
                    index < params && params.length - 1 ? 'border-b border-zinc-800' : ''
                  }>;
                  <td className='py-2 font-mono text-sm'>                    {param && param.name}
                    {param && param.required && <span className='text-red-500'>*</span>}
                  </td>;
                  <td className='py-2 text-sm text-zinc-400'>{param && param.type}</td>;
                  <td className='py-2 text-sm text-zinc-400'>;
                    {param && param.description}
                  </td>;
                </tr>;

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                <tr key={index} className={index < params.length - 1 ? "border-b border-zinc-800" : ""}>
                  <td className="py-2 font-mono text-sm">
                    {param.name}
                    {param.required && <span className="text-red-500">*</span>}
                  </td>
                  <td className="py-2 text-sm text-zinc-400">{param.type}</td>
                  <td className="py-2 text-sm text-zinc-400">{param.description}</td>
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                </tr>
              ))}
            </tbody>;
          </table>;
        </div>;
      )}
<<<<<<< HEAD
<<<<<<< HEAD
=======




=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

      {codeExamples && (
=======
              {params.map((param, index) => (      {codeExamples && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        <div className='border-t border-zinc-800 p-4'>
          <div className='flex items-center mb-2'>
            <h4 className='font-medium'>Request Example</h4>
            <div className='ml-auto flex border border-zinc-700 rounded-md overflow-hidden'>
              {Object.keys(codeExamples).map(lang => (                <button

<<<<<<< HEAD
<<<<<<< HEAD
      {codeExamples && (;
        <div className='border-t border-zinc-800 p-4'>;
          <div className='flex items-center mb-2'>;
            <h4 className='font-medium'>Request Example</h4>;
            <div className='ml-auto flex border border-zinc-700 rounded-md overflow-hidden'>;
              {Object && Object.keys(codeExamples).map(lang => (                <button
                  key = {lang,}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      
      {codeExamples && (
        <div className="border-t border-zinc-800 p-4">
          <div className="flex items-center mb-2">
            <h4 className="font-medium">Request Example</h4>
            <div className="ml-auto flex border border-zinc-700 rounded-md overflow-hidden">
              {Object.keys(codeExamples).map((lang) => (
                <button
                  key={lang}
                  className={`px-3 py-1 text-xs font-medium ${
                    activeTab === lang 
                      ? "bg-zinc-700 text-white" 
                      : "text-zinc-400 hover:bg-zinc-800"
                  }`}
                  onClick={() => setActiveTab(lang)}
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                  className={`px-3 py-1 text-xs font-medium ${
                    activeTab === lang
                      ? 'bg-zinc-700 text-white'
                      : 'text-zinc-400 hover:bg-zinc-800'
<<<<<<< HEAD
                  }`}                  onClick={() => setActiveTab(lang)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                  }`}

                  onClick={() => setActiveTab(lang)}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                >
                  {lang === "curl" ? "cURL" : lang === "javascript" ? "JavaScript" : "Python"}
                </button>
              ))}
            </div>
          </div>

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <CodeBlock 
            code={codeExamples[activeTab] || "// Code example not available"}
            language={activeTab === "curl" ? "bash" : activeTab}
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          />
        </div>
      )}
<<<<<<< HEAD
<<<<<<< HEAD
      
      {responseExamples && (
=======
        </div>
      )}
      {responseExamples && (
        <div className='border-t border-zinc-800 p-4'>
          <h4 className='font-medium mb-2'>Response</h4>
          <CodeBlock code={responseExamples.success} language='json' />        </div>
      )}
    </div>
  )
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        <div className="border-t border-zinc-800 p-4">
          <h4 className="font-medium mb-2">Response</h4>
          <CodeBlock
            code={responseExamples.success}
            language="json"
          />
        </div>
      )}
<<<<<<< HEAD
    </div>;
  );
}
;
=======
      {responseExamples && (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    </div>
  )
}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
