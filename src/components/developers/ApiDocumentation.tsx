<<<<<<< HEAD
<<<<<<< HEAD
method: string;
=======
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json'
import { useState } from 'react'
import { BookOpen, Terminal } from 'lucide-react'
method: string;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
endpoint: string;
description: string;
note?: string;
params?: EndpointParam[];
code_examples?: Record < string string>;
response_examples?: {
  success: string;
}export /**
 * ApiDocumentation - Function description
 */
function ApiDocumentation() {
  return (<Card className="bg - zinc - 900 border - zinc - 800 text - white" > text - xl flex items - center"> <BookOpen className=" mr - 2"size= {
  20 ";
}/> API Documentation </CardTitle> <CardDescription className=" text - zinc - 400"> Reference documentation for integrating with the Zion Marketplace API. </CardDescription> </CardHeader> <CardContent> <Alert className=" bg - blue - 900 / 30 border - blue - 800 mb - 6"> <Terminal className=" h - 4 w - 4"/> <AlertDescription> Make sure to include your API key in all requests as a Bearer token in the Authorization header. </AlertDescription> </Alert> <Tabs default_value=" jobs"className=" space - y-4"> <TabsList className=" bg - zinc - 800 border - zinc - 700"> <TabsTrigger value=" jobs">Jobs</TabsTrigger> <TabsTrigger value=" talent">Talent</TabsTrigger> <TabsTrigger value=" quotes">Quotes</TabsTrigger> <TabsTrigger value=" webhooks">Webhooks</TabsTrigger> <TabsTrigger value=" errors">Errors</TabsTrigger> </TabsList> <TabsContent value=" jobs"className=" space - y-6"> <EndpointSection headers = headers) data = response.json () print (data) `;
}response_examples= {
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json' 


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
  type: string,;
  description: string,;
  required?: boolean;
}
;
interface EndpointSectionProps {;
  method: string,;
  endpoint: string,;
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


      <CardContent>
        <Alert className='bg-blue-900/30 border-blue-800 mb-6'>
          <Terminal className='h-4 w-4' />
            Make sure to include your API key in all requests as a Bearer token
            in the Authorization header.
          </AlertDescription>
        </Alert>
<<<<<<< HEAD
      
      <CardContent>
        <Alert className="bg-blue-900/30 border-blue-800 mb-6">
          <Terminal className="h-4 w-4" />
          <AlertDescription>
            Make sure to include your API key in all requests as a Bearer token in the Authorization header.
          </AlertDescription>
        </Alert>
        <Tabs defaultValue='jobs' className='space-y-4'>
          <TabsList className='bg-zinc-800 border-zinc-700'>
            <TabsTrigger value='jobs'>Jobs</TabsTrigger>
            <TabsTrigger value='talent'>Talent</TabsTrigger>
            <TabsTrigger value='quotes'>Quotes</TabsTrigger>
            <TabsTrigger value='webhooks'>Webhooks</TabsTrigger>
            <TabsTrigger value='errors'>Errors</TabsTrigger>
          </TabsList>
          <TabsContent value='jobs' className='space-y-6'>

        <Tabs defaultValue="jobs" className="space-y-4">
          <TabsList className="bg-zinc-800 border-zinc-700">
            <TabsTrigger value="jobs">Jobs</TabsTrigger>
            <TabsTrigger value="talent">Talent</TabsTrigger>
            <TabsTrigger value="quotes">Quotes</TabsTrigger>
            <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
            <TabsTrigger value="errors">Errors</TabsTrigger>
          </TabsList>
          
          <TabsContent value="jobs" className="space-y-6">
            <EndpointSection
              method="GET"
              endpoint="/api/jobs"
              description="List all available jobs with optional filtering."
              note=""
              params={[
import React from 'react';
import { useState } from 'react';
import { BookOpen, Terminal } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import CodeBlock from './CodeBlock';
import { logInfo } from '@/utils/productionLogger';
interface EndpointParam {;
  name: string;
type: string;
description: string;
required?: boolean ;
}interface EndpointSectionProps {;
import { useState } from 'react';
import { BookOpen, Terminal } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { Alert, AlertDescription } from '@/components / ui / alert';
import { Badge } from '@/components / ui / badge';
import CodeBlock from './CodeBlock';
import { log_info } from '@/utils / production_logger';
interface EndpointParam {
  name: string;
type: string;
description: string;
required?: boolean;
}interface EndpointSectionProps {
  method: string;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
endpoint: string;
description: string;
note?: string;
params?: EndpointParam[];
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
code_examples?: Record < string string>;
response_examples?: {
  success: string;
}export /**
 * ApiDocumentation - Function description
 */
function ApiDocumentation() {
  return (<Card className="bg - zinc - 900 border - zinc - 800 text - white" > text - xl flex items - center"> <BookOpen className=" mr - 2"size= {
  20 ";
}/> API Documentation </CardTitle> <CardDescription className=" text - zinc - 400"> Reference documentation for integrating with the Zion Marketplace API. </CardDescription> </CardHeader> <CardContent> <Alert className=" bg - blue - 900 / 30 border - blue - 800 mb - 6"> <Terminal className=" h - 4 w - 4"/> <AlertDescription> Make sure to include your API key in all requests as a Bearer token in the Authorization header. </AlertDescription> </Alert> <Tabs default_value=" jobs"className=" space - y-4"> <TabsList className=" bg - zinc - 800 border - zinc - 700"> <TabsTrigger value=" jobs">Jobs</TabsTrigger> <TabsTrigger value=" talent">Talent</TabsTrigger> <TabsTrigger value=" quotes">Quotes</TabsTrigger> <TabsTrigger value=" webhooks">Webhooks</TabsTrigger> <TabsTrigger value=" errors">Errors</TabsTrigger> </TabsList> <TabsContent value=" jobs"className=" space - y-6"> <EndpointSection headers = headers) data = response.json () print (data) `;
}response_examples= {
<<<<<<< HEAD

  {
  success: ` {";
  " data": [ {


  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json' 


xport function ApiDocumentation() {
ursor/fix-website-loading-errors-and-merge-6662


=======
  {
  success: ` {";
  " data": [ {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <AlertDescription>;
            Make sure to include your API key in all requests as a Bearer token;
            in the Authorization header.;
          </AlertDescription>;
        </Alert>;
<<<<<<< HEAD
<<<<<<< HEAD

        <Tabs default_value='jobs' className='space - y-4'>;
          <TabsList className='bg - zinc - 800 border - zinc - 700'>;

=======
        <Tabs default_value='jobs' className='space - y-4'>;
          <TabsList className='bg - zinc - 800 border - zinc - 700'>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <TabsTrigger value='jobs'>Jobs</TabsTrigger>;
            <TabsTrigger value='talent'>Talent</TabsTrigger>;
            <TabsTrigger value='quotes'>Quotes</TabsTrigger>;
            <TabsTrigger value='webhooks'>Webhooks</TabsTrigger>;
            <TabsTrigger value='errors'>Errors</TabsTrigger>;
          </TabsList>;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <TabsContent value='jobs' className='space - y-6'>;
            <EndpointSection;
              method='GET';
              endpoint='/api / jobs';
              description='List all available jobs with optional filtering.';
              note='';
              params={[;
<<<<<<< HEAD
<<<<<<< HEAD



=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                {
                  name: 'page'
                  type: 'integer'
                  description: 'Page number for pagination (default: 1)'
                }
                {
<<<<<<< HEAD
                  name: 'limit'
                  type: 'integer'
                  description:
                    'Number of results per page (default: 20, max: 100)'
                }
                  name: 'limit',
                  type: 'integer',
                  description:;
                    'Number of results per page (default: 20, max: 100)',
                },
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                {
                  name: 'category'
                  type: 'string'
                  description: 'Filter by job category'
                }
                {
<<<<<<< HEAD
                  name: 'skills'
                  type: 'string[]'
                  description: 'Filter by required skills (comma-separated)'
                }
                  name: 'skills',
                  type: 'string[]',
                  description: 'Filter by required skills (comma - separated)',
                },
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                {
                  name: 'status'
                  type: 'string'
                  description: 'Filter by job status (new, active, closed)'
                }
<<<<<<< HEAD


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

            <EndpointSection
              method="GET"
              endpoint="/api/jobs"
              description="List all available jobs with optional filtering."
              note=""
              params={[
<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" },
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },
                { name: "category", type: "string", description: "Filter by job category" },
                { name: "skills", type: "string[]", description: "Filter by required skills (comma-separated)" },
                { name: "status", type: "string", description: "Filter by job status (new, active, closed)" }
<<<<<<< HEAD
<<<<<<< HEAD


data = response && response.json()
=======
=======
}` ;
}';
}/> <EndpointSection deadline: '2025-06-30T23:59:59Z' ;
}) ;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
  success: ` {
<<<<<<< HEAD
}`
}'
}/> <EndpointSection deadline: '2025-06-30T23:59:59Z'
})
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


}` ;
}';
}/> <EndpointSection deadline: '2025-06-30T23:59:59Z' ;
}) ;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
});'
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
  -H "Content-Type: application/json"`,
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/jobs?limit=10&category=development', {
              code_examples = {{
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / jobs?limit = 10 & category = development" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json"`,
                javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / jobs?limit = 10 & category = development', {
  method: 'GET',
  headers: {
const data = await response && response.json ()
logInfo (data), `
python: `import requests headers = {'
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json' 
}job id '
}'
headers=headers) data = response && response.json () print (data) ` 
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
}/> </TabsContent> <TabsContent value=" talent"className=" space - y-6"> <EndpointSection headers = headers) data = response.json () print (data) `;
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
print(data)`
}responseExamples= {
  {
  success: ` {"
  " data": [ {
}`
}/> <EndpointSection const response = await fetch (\`https://api.ziontechgroup.com/v1/talent/\$ {
  talentId
=======
}responseExamples= {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}\`, {'
  method: 'GET'
headers: {'
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json'
response = requests.get(
    'https://api.ziontechgroup.com/v1/jobs'
    params={'limit': 10, 'category': 'development'}
    headers=headers
)
<<<<<<< HEAD
data = response.json()
print(data)`
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
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
    'https: //api.ziontechgroup.com/v1/jobs',;
    params={'limit': 10, 'category': 'development'},;
    headers=headers;
);
data = response.json();
print(data)`;
<<<<<<< HEAD
              responseExamples={{
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

              }}
              response_examples={{
  "data": [;
    {
      "id": "job_abc123",
      "title": "Senior React Developer",
      "description": "We need an experienced React developer...",
      "category": "development",
      "skills": ["react", "typescript", "node && node.js"],
              }}
=======


              }}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              responseExamples={{
                success: `{
  "data": [
    {
<<<<<<< HEAD
      "id": "job_abc123"
      "title": "Senior React Developer"
      "description": "We need an experienced React developer..."
      "category": "development"
      "skills": ["react", "typescript", "node.js"]
      "budget": {
        "min": 5000
        "max": 10000
        "currency": "USD"
      }
      "status": "active"
      "client_id": "user_xyz789"
      "created_at": "2025-05-15T10:30:00Z"
    }
    // More jobs...
  ]
  ]
  ],
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  "meta": {
    "total": 42
    "page": 1
    "limit": 10
<<<<<<< HEAD
      "budget": {
        "min": 5000,
        "max": 10000,
        "currency": "USD";
      },
      "status": "active",
      "client_id": "user_xyz789",
      "created_at": "2025 - 05 - 15T10:30:00Z";
    },
    // More jobs...;
  ],
  "meta": {
    "total": 42,
    "page": 1,
    "limit": 10;
  }
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}`
  }

}`,
<<<<<<< HEAD

              }}
}`
ursor/fix-website-loading-errors-and-merge-6662

            />;


            />;
  }
}`
}`,
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              }}
            />
            <EndpointSection
              method='GET'
              endpoint='/api/jobs/:id'
              description='Get detailed information about a specific job.'
              note=''
              params={[
                {
                  name: 'id'
                  type: 'string'
                  description: 'The job ID'
                  required: true
                },              ]}
<<<<<<< HEAD
              codeExamples={{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/jobs/job_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                javascript: `const jobId = 'job_abc123'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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


<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}`;
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


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              codeExamples={{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/jobs/job_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
<<<<<<< HEAD
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/jobs/job_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
                javascript: `const jobId = 'job_abc123',
print(data)`
                javascript: `const jobId = 'job_abc123',
                javascript: `const jobId = 'job_abc123'
const response = await fetch(\`https://api.ziontechgroup.com/v1/jobs/\${jobId}\`, {
  method: 'GET'
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'
  }
})
const data = await response.json ()
logInfo (data), `
python: `import requests headers = {'
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json'
}talent id '
}'
headers=headers) data = response.json () print (data) `
job_id = 'job_abc123'
response = requests.get(
    f'https://api.ziontechgroup.com/v1/jobs/{job_id}'
    headers=headers
)
data = response.json()
print(data)`
print(data)`,
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
  -H "Content-Type: application/json"`,
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
              responseExamples={{

              codeExamples={{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/jobs/job_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,


response = requests.get (
    f'https://api.ziontechgroup.com / v1 / jobs/{job_id}',
    headers = headers);
data = response.json ();
print (data)`,
              }}
              response_examples={{
  "data": {
=======


              }}
              response_examples={{
                success: `{
  "data": {

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    "id": "job_abc123",
    "title": "Senior React Developer",
    "description": "We need an experienced React developer...",
    "category": "development",
    "skills": ["react", "typescript", "node && node.js"],
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      "min": 5000
      "max": 10000
      "currency": "USD"
    }
    "status": "active"
    "client_id": "user_xyz789"
    "created_at": "2025-05-15T10:30:00Z"
    "deadline": "2025-06-30T23:59:59Z"
    "application_count": 12
  }
}`
              }}
            />
<<<<<<< HEAD
=======
    },
    "status": "active",
    "client_id": "user_xyz789",
    "created_at": "2025-05-15T10:30:00Z",
    "deadline": "2025-06-30T23:59:59Z",
    "application_count": 12
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}`,
              }}
            />
}`;
              }}
            />
            
<<<<<<< HEAD

=======
            <EndpointSection
              method="POST"
              endpoint="/api/jobs"
              description="Create a new job listing."
              note="Requires jobs:write scope"
              params={[
ursor/fix-website-loading-errors-and-merge-6662
    "budget": {
=======

    "budget": {

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      "min": 5000,
      "max": 10000,
      "currency": "USD";


    },
    "status": "active",
    "client_id": "user_xyz789",
    "created_at": "2025 - 05 - 15T10:30:00Z",
    "deadline": "2025 - 06 - 30T23:59:59Z",
    "application_count": 12;
  }
<<<<<<< HEAD
}`
              }}
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            />;



            <EndpointSection
              method='POST'
              endpoint='/api/jobs'
              description='Create a new job listing.'
              note='Requires jobs:write scope'
              params={[
<<<<<<< HEAD
            />;
            <EndpointSection;
              method='POST';
              endpoint='/api / jobs';
              description='Create a new job listing.';
              note='Requires jobs:write scope';
              params={[;
                {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                {
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
                  name: 'budget.min'
                  type: 'number'
                  description: 'Minimum budget'
                }
                {
                  name: 'budget.max'
                  type: 'number'
                  description: 'Maximum budget'
                }
                {
                  name: 'budget.currency'
                  type: 'string'
                  description: 'Currency code (default: USD)'
                }
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                {
                  name: 'deadline'
                  type: 'string'
                  description: 'Job deadline (ISO date string)'
                }
<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              ]}
              codeExamples={{;
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/jobs/job_abc123" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
<<<<<<< HEAD
  -H "Content - Type: application / json" \\;
  -d '{
    "title": "Senior React Developer",
    "description": "We need an experienced React developer...",
    "category": "development",
    "skills": ["react", "typescript", "node && node.js"],
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                { name: "title", type: "string", description: "Job title", required: true },
                { name: "description", type: "string", description: "Detailed job description", required: true },
                { name: "category", type: "string", description: "Job category", required: true },
                { name: "skills", type: "string[]", description: "Required skills", required: true },
                { name: "budget.min", type: "number", description: "Minimum budget" },
                { name: "budget.max", type: "number", description: "Maximum budget" },
                { name: "budget.currency", type: "string", description: "Currency code (default: USD)" },
                { name: "deadline", type: "string", description: "Job deadline (ISO date string)" }
<<<<<<< HEAD

              ]}

=======

=======
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
    }
    "deadline": "2025-06-30T23:59:59Z"
  }'`
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/jobs', {
  method: 'POST'
  headers: {
<<<<<<< HEAD
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'
  }
  body: JSON.stringify({
    title: 'Senior React Developer'
    description: 'We need an experienced React developer...'
    category: 'development'
    skills: ['react', 'typescript', 'node.js']
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Senior React Developer',
    description: 'We need an experienced React developer...',
    category: 'development',
    skills: ['reacttypescriptnode.js'],
    budget: {
      min: 5000
      max: 10000
      currency: 'USD'
    }
    deadline: '2025-06-30T23:59:59Z'
  })
})
const data = await response.json()
logInfo(data);`
})
const data = await response.json()
logInfo(data);`
});
const data = await response.json();
logInfo(data);`,
}),

const data = await response.json(),
logInfo(data),`,
import json
headers = {
    'Authorization': 'Bearer YOUR_API_KEY'
                python: `import requests
import json
headers = {

    'Authorization': 'Bearer YOUR_API_KEY',



    "budget": {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  }'`,
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/jobs', {
      "min": 5000,
      "max": 10000,
      "currency": "USD";
    },
    "deadline": "2025 - 06 - 30T23:59:59Z";
  }'`,
                javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / jobs', {
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  method: 'POST',
  headers: {


    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'

  },
  body: JSON && JSON.stringify({
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content - Type': 'application / json';
  },
  body: JSON.stringify ({
    title: 'Senior React Developer',
    description: 'We need an experienced React developer...',
    category: 'development',
<<<<<<< HEAD

    skills: ['reacttypescriptnode.js'],


    budget: {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


const data = await response && response.json()
logInfo(data)`,

<<<<<<< HEAD
=======
    skills: ['react', 'typescript', 'node && node.js'],
    budget: {
const data = await response && response.json()
logInfo(data)`,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                python: `import requests
import json
headers = {
    'Authorization': 'Bearer YOUR_API_KEY'

});
const data = await response.json();
logInfo(data);`,
<<<<<<< HEAD

<<<<<<< HEAD
    'Content-Type': 'application/json'

data = response && response.json()
print(data)`,

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}),

const data = await response.json(),
logInfo(data),`,


<<<<<<< HEAD
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
print(data)`
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                python: `import requests
import json
headers = {
    'Authorization': 'Bearer YOUR_API_KEY'
    'Authorization': 'Bearer YOUR_API_KEY',

                python: `import requests
import json
headers = {
    'Content-Type': 'application/json'
}`
}'"
}/> </TabsContent> <TabsContent value=" quotes"className=" space-y-6"> <EndpointSection response = requests.post ('https: //api.ziontechgroup.com/v1/quotes'
headers=headers
data=json.dumps (payload) ) data = response.json () print (data) `
response = requests.post(
    'https://api.ziontechgroup.com/v1/jobs'
    headers=headers
    data=json.dumps(payload)
)
print(data)`,
<<<<<<< HEAD
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
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
              responseExamples={{
data = response && response.json()
print(data)`,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      min: 5000,
      max: 10000,
      currency: 'USD';
    },
    deadline: '2025 - 06 - 30T23:59:59Z';
  });
});
const data = await response.json ();
log_info (data);`,
                python: `import requests;
import json;
headers = {
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

<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
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


              }}
<<<<<<< HEAD
              response_examples={{
  "data": {
    "id": "job_def456",
    "title": "Senior React Developer",
    "description": "We need an experienced React developer...",
    "category": "development",
    "skills": ["react", "typescript", "node && node.js"],
              }}
              responseExamples={{
                success: `{
  "data": {
    "id": "job_def456"
    "title": "Senior React Developer"
    "description": "We need an experienced React developer..."
    "category": "development"
    "skills": ["react", "typescript", "node.js"]
    "budget": {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      "min": 5000
      "max": 10000
      "currency": "USD"
    }
    "status": "new"
    "client_id": "user_xyz789"
    "created_at": "2025-05-16T14:22:10Z"
    "deadline": "2025-06-30T23:59:59Z"
  }
}`
              }}
            />
          </TabsContent>
          <TabsContent value='talent' className='space-y-6'>
<<<<<<< HEAD
=======
    },
    "status": "new",
    "client_id": "user_xyz789",
    "created_at": "2025-05-16T14:22:10Z",
    "deadline": "2025-06-30T23:59:59Z"
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}`,
              }}
            />
          </TabsContent>
          <TabsContent value='talent' className='space-y-6'>
=======
              responseExamples={{
                success: `{
  "data": {

            />;
          </TabsContent>;

          <TabsContent value='talent' className='space-y-6'>;


      "min": 5000
      "max": 10000
      "currency": "USD"
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}`;
              }}
            />
          </TabsContent>
          
          <TabsContent value="talent" className="space-y-6">
<<<<<<< HEAD
=======
            <EndpointSection
<<<<<<< HEAD
              method="GET"
              endpoint="/api/talent"
              description="List talent profiles with optional filtering."
              note=""
              params={[
ursor/fix-website-loading-errors-and-merge-6662
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
}`
              }}
            />;
          </TabsContent>;
          <TabsContent value='talent' className='space-y-6'>;


            <EndpointSection
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              method='GET'
              endpoint='/api/talent'
              description='List talent profiles with optional filtering.'
              note=''
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
                {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                {
                  name: 'page'
                  type: 'integer'
                  description: 'Page number for pagination (default: 1)'
                }
                {
<<<<<<< HEAD
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
                  name: 'limit'
                  type: 'integer'
                  description:
                    'Number of results per page (default: 20, max: 100)'
                }
                {
                  name: 'skills'
                  type: 'string[]'
                  description: 'Filter by skills (comma-separated)'
                }
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                {
                  name: 'availability'
                  type: 'string'
                  description: 'Filter by availability status'
                }

<<<<<<< HEAD
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" },
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },
                { name: "skills", type: "string[]", description: "Filter by skills (comma-separated)" },
                { name: "availability", type: "string", description: "Filter by availability status" }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              ]}
              codeExamples={{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/talent?skills=react,typescript" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/talent?skills=react,typescript', {
  method: 'GET'
  headers: {
<<<<<<< HEAD
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'
  }
})
const data = await response.json()
logInfo(data);`
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
                python: `import requests
data = response.json()
print(data)`
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
ursor/fix-website-loading-errors-and-merge-6662
=======
              ]}

  -H "Content-Type: application/json"`,
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/talent?skills=react,typescript', {
              code_examples = {{
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / talent?skills = react, typescript" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json"`,
                javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / talent?skills = react, typescript', {
  method: 'GET',
  headers: {

    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});
const data = await response.json();
logInfo(data);`,
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                python: `import requests
headers = {
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'
<<<<<<< HEAD

const data = await response && response.json()
logInfo(data)`,
                python: `import requests
headers = {
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'
print(data)`
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
ursor/fix-website-loading-errors-and-merge-6662
data = response && response.json()
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
print(data)`,


print(data)`,
<<<<<<< HEAD

    'Authorization': 'Bearer YOUR_API_KEY',
    'Content - Type': 'application / json';
});
const data = await response.json ();
log_info (data);`,
                python: `import requests;
response = requests.get(
    'https://api.ziontechgroup.com/v1/talent'
    params={'skills': 'react,typescript'}
    headers=headers
)
data = response.json()
print(data)`
print(data)`,
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
              responseExamples={{
ursor/fix-website-loading-errors-and-merge-6662
headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content - Type': 'application / json';
response = requests.get (
    'https://api.ziontechgroup.com / v1 / talent',
    params={'skills': 'react, typescript'},
    headers = headers);
data = response.json ();
print (data)`,


              }}
              response_examples={{
  "data": [;
    {
              }}
=======



              }}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
}`
              }}

            />;


      "id": "talent_abc123",
      "display_name": "Jane Smith",
      "headline": "Senior Frontend Developer",
      "skills": ["react", "typescript", "javascript"],
      "availability": "available",
      "average_rating": 4.8,
      "rating_count": 15;
    },
    // More talent profiles...;
  ],
  "meta": {
    "total": 28,
    "page": 1,
    "limit": 20;
  }
}`
              }}
            />;
}`
}`,
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              }}
            />
            <EndpointSection
              method='GET'
              endpoint='/api/talent/:id'
              description='Get detailed information about a specific talent profile.'
              note=''
              params={[
                {
                  name: 'id'
                  type: 'string'
                  description: 'The talent ID'
                  required: true
                },              ]}
<<<<<<< HEAD
              codeExamples={{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/talent/talent_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
                javascript: `const talentId = 'talent_abc123'
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
              codeExamples={{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/talent/talent_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/talent/talent_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
                javascript: `const talentId = 'talent_abc123',
})
const data = await response.json()
logInfo(data);`
  -H "Content-Type: application/json"`,
                javascript: `const talentId = 'talent_abc123'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                javascript: `const talentId = 'talent_abc123'
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
const response = await fetch(\`https://api && api.ziontechgroup.com/v1/talent/\${talentId}\`, {
              code_examples={{
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / talent / talent_abc123" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json"`,
                javascript: `const talent_id = 'talent_abc123';
const response = await fetch (\`https://api.ziontechgroup.com / v1 / talent/\${talent_id}\`, {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  method: 'GET',
  headers: {


const data = await response && response.json()
logInfo(data)`,

<<<<<<< HEAD
=======
  method: 'GET',
  headers: {
const data = await response && response.json()
logInfo(data)`,
                javascript: `const talentId = 'talent_abc123',
                javascript: `const talentId = 'talent_abc123'
const response = await fetch(\`https://api.ziontechgroup.com/v1/talent/\${talentId}\`, {
  method: 'GET'
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'
  }
})
const data = await response.json()
logInfo(data);`
});
const data = await response.json();
logInfo(data);`,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                python: `import requests
headers = {
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'
talent_id = 'talent_abc123'
<<<<<<< HEAD
<<<<<<< HEAD
=======
response = requests.get(
    f'https://api.ziontechgroup.com/v1/talent/{talent_id}'
    headers=headers
)
data = response.json()
print(data)`
              }}
              responseExamples = {{
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
              codeExamples={{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/talent/talent_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,


                success: `{
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

response = requests && requests.get(
    f'https://api && api.ziontechgroup.com/v1/talent/{talent_id}',
    headers=headers
)

data = response && response.json()
print(data)`,

    'Authorization': 'Bearer YOUR_API_KEY',
    'Content - Type': 'application / json';
  }
});
const data = await response.json ();
log_info (data);`,
                python: `import requests;
headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content - Type': 'application / json';
talent_id = 'talent_abc123';
response = requests.get (
    f'https://api.ziontechgroup.com / v1 / talent/{talent_id}',
    headers = headers);
data = response.json ();
print (data)`,
              }}
              response_examples = {{


<<<<<<< HEAD
<<<<<<< HEAD
        "name": "AWS Certified Developer"
        "issuing_organization": "Amazon Web Services"
        "issue_date": "2024-01-15"
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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


              codeExamples={{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/talent/talent_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,


                success: `{
  "data": {
<<<<<<< HEAD
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    "id": "talent_abc123",
    "display_name": "Jane Smith",
    "headline": "Senior Frontend Developer",
    "bio": "10+ years of experience in frontend development...",
    "skills": ["react", "typescript", "javascript", "css", "html"],
    "availability": "available",
    "average_rating": 4 && 4.8,
    "rating_count": 15,
    "portfolio": [;
      {
<<<<<<< HEAD
                success: `{
  "data": {
    "id": "talent_abc123"
    "display_name": "Jane Smith"
    "headline": "Senior Frontend Developer"
    "bio": "10+ years of experience in frontend development..."
    "skills": ["react", "typescript", "javascript", "css", "html"]
    "availability": "available"
    "average_rating": 4.8
    "rating_count": 15
    "portfolio": [
      {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        "id": "proj_123"
        "title": "E-commerce Platform"
        "description": "Built a modern e-commerce platform using React..."
        "technologies": ["react", "redux", "node.js"]
        "image_url": "https://example.com/portfolio/123.jpg"
      ,}
    ]
    "certifications": [
      {
        "name": "AWS Certified Developer"
        "issuing_organization": "Amazon Web Services"
        "issue_date": "2024-01-15"
<<<<<<< HEAD
        "id": "proj_123",
        "title": "E - commerce Platform",
        "description": "Built a modern e - commerce platform using React...",
        "technologies": ["react", "redux", "node.js"],
        "image_url": "https://example.com / portfolio / 123.jpg";
      , }
    ],
    "certifications": [;
      {
        "name": "AWS Certified Developer",
        "issuing_organization": "Amazon Web Services",
        "issue_date": "2024 - 01 - 15";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      }
    ]
  }
}`
              }}
            />
          </TabsContent>
          <TabsContent value='quotes' className='space-y-6'>
      }
    ],
    "certifications": [;
      {
        "name": "AWS Certified Developer",
        "issuing_organization": "Amazon Web Services",
<<<<<<< HEAD
        "issue_date": "2024-01-15"
      }
    ]
  }
}`,
              }}
            />
          </TabsContent>
          <TabsContent value='quotes' className='space-y-6'>
    ];
  }
}`;
              }}
            />
          </TabsContent>
          
          <TabsContent value="quotes" className="space-y-6">
<<<<<<< HEAD

=======
            <EndpointSection
              method="POST"
              endpoint="/api/quotes"
              description="Create a quote request for a talent."
              note="Requires quotes:write scope"
              params={[
ursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            />;
          </TabsContent>;
          <TabsContent value='quotes' className='space-y-6'>;


            <EndpointSection
              method='POST'
              endpoint='/api/quotes'
              description='Create a quote request for a talent.'
              note='Requires quotes:write scope'
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
                {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                {
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
    talent_id: 'talent_abc123',
    project_name: 'E - commerce Website Redesign',
    project_summary: 'Redesign our outdated e - commerce website with modern UI',
    project_description: 'Our current website is 5 years old and needs a complete overhaul...',
    timeline: '2 - 3 months',
    budget_min: 8000,
    budget_max: 12000,
    requester_name: 'John Doe',
    requester_email: 'john@example.com';
  });
});
const data = await response.json ();
log_info (data);`,
                python: `import requests;
headers = {
                python: `import requests
import json

<<<<<<< HEAD
              ]}
              code_examples={{
                curl: `curl -X POST "https://api.ziontechgroup.com / v1 / quotes" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json" \\;
  -d '{
=======
headers = {
                success: `{
  "data": {

    "id": "quote_def456",
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    "talent_id": "talent_abc123",
    "requester_id": "user_xyz789",
    "project_name": "E - commerce Website Redesign",
    "project_summary": "Redesign our outdated e - commerce website with modern UI",
    "project_description": "Our current website is 5 years old and needs a complete overhaul...",
    "timeline": "2 - 3 months",
    "budget_min": 8000,
    "budget_max": 12000,
    "budget_display": "$8, 000 - $12, 000",
    "requester_name": "John Doe",
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                { name: "talent_id", type: "string", description: "ID of the talent to request a quote from", required: true },
                { name: "project_name", type: "string", description: "Name of the project", required: true },
                { name: "project_summary", type: "string", description: "Brief summary of the project", required: true },
                { name: "project_description", type: "string", description: "Detailed project description" },
                { name: "timeline", type: "string", description: "Expected timeline", required: true },
                { name: "budget_min", type: "number", description: "Minimum budget" },
                { name: "budget_max", type: "number", description: "Maximum budget" },
                { name: "requester_name", type: "string", description: "Name of the requester", required: true },
                { name: "requester_email", type: "string", description: "Email of the requester", required: true }
<<<<<<< HEAD

              ]}

=======

=======
    "requester_email": "john@example && example.com",
    "status": "new",
    "created_at": "2025 - 05 - 16T14:30:15Z";
  }
}`,              }}
            />;

            <EndpointSection
              method='GET'
              endpoint='/api/quotes'
              description="List quote requests that you've created."
              note=''
              params={[
                {
                  name: 'page'
                  type: 'integer'
                  description: 'Page number for pagination (default: 1)'
                }
                {

const response = await fetch(\`https://api.ziontechgroup.com/v1/talent/\${talentId}\`, {
  method: 'GET'
  headers: {
                python: `import requests
headers = {
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'
print(data)`,


print(data)`,
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
                success: `{
  "data": {
    "id": "talent_abc123"
    "display_name": "Jane Smith"
    "headline": "Senior Frontend Developer"
    "bio": "10+ years of experience in frontend development..."
    "skills": ["react", "typescript", "javascript", "css", "html"]
    "availability": "available"
    "average_rating": 4.8
    "rating_count": 15
    "portfolio": [
      {
        "id": "proj_123"
        "title": "E-commerce Platform"
        "description": "Built a modern e-commerce platform using React..."
        "technologies": ["react", "redux", "node.js"]
        "image_url": "https://example.com/portfolio/123.jpg"
    ];
  }
}`;
              }}
            />
          </TabsContent>
          
          <TabsContent value="quotes" className="space-y-6">
            <EndpointSection
              method="POST"
              endpoint="/api/quotes"
              description="Create a quote request for a talent."
              note="Requires quotes:write scope"
              params={[
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              ]}
              codeExamples={{
                curl: `curl -X POST "https://api.ziontechgroup.com/v1/quotes" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "talent_id": "talent_abc123"
    "project_name": "E-commerce Website Redesign"
    "project_summary": "Redesign our outdated e-commerce website with modern UI"
    "project_description": "Our current website is 5 years old and needs a complete overhaul..."
    "timeline": "2-3 months"
    "budget_min": 8000
    "budget_max": 12000
    "requester_name": "John Doe"
    "requester_email": "john@example.com"
  }'`
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/quotes', {
  method: 'POST'
  headers: {
<<<<<<< HEAD
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'
  }
  body: JSON.stringify({
    talent_id: 'talent_abc123'
    project_name: 'E-commerce Website Redesign'
    project_summary: 'Redesign our outdated e-commerce website with modern UI'
    project_description: 'Our current website is 5 years old and needs a complete overhaul...'
    timeline: '2-3 months'
    budget_min: 8000
    budget_max: 12000
    requester_name: 'John Doe'
    requester_email: 'john@example.com'
  })
})
const data = await response.json()
logInfo(data);`
                python: `import requests

  },
  body: JSON && JSON.stringify({
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content - Type': 'application / json';
  },
  body: JSON.stringify ({

    talent_id: 'talent_abc123',
    project_name: 'E - commerce Website Redesign',
    project_summary: 'Redesign our outdated e - commerce website with modern UI',
    project_description: 'Our current website is 5 years old and needs a complete overhaul...',
    timeline: '2 - 3 months',
    budget_min: 8000,
    budget_max: 12000,
    requester_name: 'John Doe',

    requester_email: 'john@example.com';
  });
});
const data = await response.json ();
log_info (data);`,
                python: `import requests;
headers = {
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'
payload = {
    'talent_id': 'talent_abc123'
    'project_name': 'E-commerce Website Redesign'
    'project_summary': 'Redesign our outdated e-commerce website with modern UI'
    'project_description': 'Our current website is 5 years old and needs a complete overhaul...'
    'timeline': '2-3 months'
    'budget_min': 8000
    'budget_max': 12000
    'requester_name': 'John Doe'
    'requester_email': 'john@example.com'
response = requests.post(
    'https://api.ziontechgroup.com/v1/quotes'
    headers=headers
    data=json.dumps(payload)
)
data = response.json()
print(data)`
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
});
const data = await response.json();
logInfo(data);`,
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}),

const data = await response.json(),
logInfo(data),`,
                python: `import requests
import json

headers = {
<<<<<<< HEAD
import json

    "requester_email": "john@example.com";
  }'`,
                javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / quotes', {
  method: 'POST',
  headers: {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  },
  body: JSON && JSON.stringify({
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content - Type': 'application / json';
  },
  body: JSON.stringify ({
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    talent_id: 'talent_abc123',
    project_name: 'E - commerce Website Redesign',
    project_summary: 'Redesign our outdated e - commerce website with modern UI',
    project_description: 'Our current website is 5 years old and needs a complete overhaul...',
    timeline: '2 - 3 months',
    budget_min: 8000,
    budget_max: 12000,
    requester_name: 'John Doe',
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    requester_email: 'john@example.com';
  });
});
const data = await response.json ();
log_info (data);`,
                python: `import requests;
headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content - Type': 'application / json';
<<<<<<< HEAD

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
=======
payload = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
payload = {
    'talent_id': 'talent_abc123',
    'project_name': 'E-commerce Website Redesign',
    'project_summary': 'Redesign our outdated e-commerce website with modern UI',
    'project_description': 'Our current website is 5 years old and needs a complete overhaul...',
    'timeline': '2-3 months',
    'budget_min': 8000,
    'budget_max': 12000,
    'requester_name': 'John Doe',
    'requester_email': 'john@example.com'
response = requests.post(
    'https://api.ziontechgroup.com/v1/quotes',
    headers=headers,
    data=json.dumps(payload)
)

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
data = response.json()
print(data)`,
              }}
              responseExamples = {{
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
            />;


=======
ursor/fix-website-loading-errors-and-merge-6662
                success: `{

    'requester_email': 'john@example.com';
response = requests.post (
    'https://api.ziontechgroup.com / v1 / quotes',
    headers = headers,
    data = json.dumps (payload));
data = response.json ();
print (data)`,
              }}
              response_examples = {{
                success: `{
  "data": {
    "id": "quote_def456",
    "talent_id": "talent_abc123",
    "requester_id": "user_xyz789",
    "project_name": "E - commerce Website Redesign",
    "project_summary": "Redesign our outdated e - commerce website with modern UI",
    "project_description": "Our current website is 5 years old and needs a complete overhaul...",
    "timeline": "2 - 3 months",
    "budget_min": 8000,
    "budget_max": 12000,
    "budget_display": "$8, 000 - $12, 000",
    "requester_name": "John Doe",
    "requester_email": "john@example && example.com",
    "status": "new",
    "created_at": "2025 - 05 - 16T14:30:15Z";
  }
}`,              }}
            />
              method="GET"
              endpoint="/api/quotes"
ursor/fix-website-loading-errors-and-merge-6662
            <EndpointSection
              method='GET'
              endpoint='/api/quotes'
              note=''
              params={[
}`,              }}
            />;
            <EndpointSection;
              method='GET';
              endpoint='/api / quotes';
              description="List quote requests that you've created.";
              note='';
              params={[;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                success: `{
  "data": {
    "id": "quote_def456"
    "talent_id": "talent_abc123"
    "requester_id": "user_xyz789"
    "project_name": "E-commerce Website Redesign"
    "project_summary": "Redesign our outdated e-commerce website with modern UI"
    "project_description": "Our current website is 5 years old and needs a complete overhaul..."
    "timeline": "2-3 months"
    "budget_min": 8000
    "budget_max": 12000
    "budget_display": "$8,000 - $12,000"
    "requester_name": "John Doe"
    "requester_email": "john@example.com"
    "status": "new"
    "created_at": "2025-05-16T14:30:15Z"
  }
            <EndpointSection
              method="GET"
              endpoint="/api/quotes"
              description="List quote requests that you've created."
              note=""
              params={[
<<<<<<< HEAD
                {
                  name: 'page'
                  type: 'integer'
                  description: 'Page number for pagination (default: 1)'
                }
                {
                  name: 'limit'
                  type: 'integer'
                  description:
                    'Number of results per page (default: 20, max: 100)'
                }
                {
                  name: 'status'
                  type: 'string'
                  description:
                    'Filter by status (new, viewed, replied, archived)'
                }
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" },
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },
                { name: "status", type: "string", description: "Filter by status (new, viewed, replied, archived)" }
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              ]}
              codeExamples={{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/quotes" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/quotes', {
  method: 'GET'
  headers: {
<<<<<<< HEAD
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'
  }
})
const data = await response.json()
logInfo(data);`
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

  method: 'GET',
  headers: {

=======
  method: 'GET',
  headers: {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
const data = await response && response.json()
logInfo(data)`,


    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});
const data = await response.json();
logInfo(data);`,

                python: `import requests
<<<<<<< HEAD
data = response.json()
print(data)`
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
ursor/fix-website-loading-errors-and-merge-6662
=======
headers = {
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'
print(data)`
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
ursor/fix-website-loading-errors-and-merge-6662
data = response && response.json()
print(data)`,


print(data)`,

    'Authorization': 'Bearer YOUR_API_KEY',
    'Content - Type': 'application / json';
});
const data = await response.json ();
log_info (data);`,
                python: `import requests;
=======
                python: `import requests
headers = {
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
response = requests.get(
    'https://api.ziontechgroup.com/v1/quotes'
    headers=headers
)
data = response.json()
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
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
    'https: //api.ziontechgroup.com/v1/quotes',;
    headers=headers;
);
data = response.json();
print(data)`;
<<<<<<< HEAD
              responseExamples={{
ursor/fix-website-loading-errors-and-merge-6662
headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content - Type': 'application / json';
response = requests.get (
    'https://api.ziontechgroup.com / v1 / quotes',
    headers = headers);
data = response.json ();
print (data)`,


              }}
              response_examples={{
  "data": [;
    {
=======



>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              }}
              responseExamples={{
                success: `{
  "data": [
    {
<<<<<<< HEAD
      "id": "quote_def456"
      "talent_id": "talent_abc123"
      "project_name": "E-commerce Website Redesign"
      "project_summary": "Redesign our outdated e-commerce website with modern UI"
      "budget_display": "$8,000 - $12,000"
      "status": "new"
      "created_at": "2025-05-16T14:30:15Z"
      "viewed_at": null
      "replied_at": null
    }
    // More quotes...
  ]
  ]
  ],
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  "meta": {
    "total": 5
    "page": 1
    "limit": 20
<<<<<<< HEAD
      "id": "quote_def456",
      "talent_id": "talent_abc123",
      "project_name": "E - commerce Website Redesign",
      "project_summary": "Redesign our outdated e - commerce website with modern UI",
      "budget_display": "$8, 000 - $12, 000",
      "status": "new",
      "created_at": "2025 - 05 - 16T14:30:15Z",
      "viewed_at": null,
      "replied_at": null;
    },
    // More quotes...;
  ],
  "meta": {
    "total": 5,
    "page": 1,
    "limit": 20;
  }
}`
              }}
  }
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}`
  }

}`,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              }}
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
  const expectedSignature = hmac.update(payload).digest('hex')
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
              }}

<<<<<<< HEAD
              <CodeBlock
              <table className='w-full border-collapse mt-4'>

=======
              }}

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}`;
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
  return crypto.timingSafeEqual(
    Buffer.from(signature)
    Buffer.from(expectedSignature)
  )
    Buffer.from(signature)
    Buffer.from(expectedSignature)
  )
// Example usage in Express.js
app.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
  const signature = req.headers['x-zion-signature']
  const payload = req.body.toString()
  const webhookSecret = process.env.WEBHOOK_SECRET
  if (!verifyWebhookSignature(payload, signature, webhookSecret)) {
    return res.status(401).send('Invalid signature')
  }
  // Process the webhook event
  const event = JSON.parse(payload)
  logInfo('Received valid webhook:', { data: event })
  // Respond to acknowledge receipt;
  res.status(200).send('Webhook received');
});`}
                language='javascript'
                showLineNumbers={true}              />
              <h4 className='text-md font-semibold mt-6 mb-2'>Event Types</h4>
              <table className='w-full border-collapse mt-2'>
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  return crypto.timingSafeEqual(
    Buffer.from(signature)
    Buffer.from(expectedSignature)
  )


<<<<<<< HEAD
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
                <thead>
                  <tr className='border-b border-zinc-800'>
                    <th className='py-2 px-4 text-left'>Event Type</th>
                    <th className='py-2 px-4 text-left'>Description</th>
                </thead>
                <tbody>
                  <tr className='border-b border-zinc-800'>
                    <td className='py-2 px-4 font-mono text-sm'>
                      new_application
                    </td>
                    <td className='py-2 px-4'>
                      When a talent applies to one of your jobs
                    </td>
                  </tr>
                  <tr className='border-b border-zinc-800'>
                    <td className='py-2 px-4 font-mono text-sm'>
                      quote_received
                    </td>
                    <td className='py-2 px-4'>
                      When you receive a quote from talent
                    </td>
                  </tr>
                  <tr className='border-b border-zinc-800'>
                    <td className='py-2 px-4 font-mono text-sm'>
                      milestone_approved
                    </td>
                    <td className='py-2 px-4'>
                      When a project milestone is approved
                    </td>
                  </tr>
                  <tr className='border-b border-zinc-800'>
                    <td className='py-2 px-4 font-mono text-sm'>
                      talent_hired
                    </td>
                    <td className='py-2 px-4'>
                      When you hire talent for a project
                    </td>
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
              <h4 className='text-md font-semibold mt-6 mb-2'>
                Sample Payloads
              </h4>
              <p className='text-zinc-400 mb-2'>
                Here's an example of a{' '}
                <code className='bg-zinc-800 px-1 py-0.5 rounded'>
                  new_application
                </code>{' '}
                webhook payload:
              </p>
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <CodeBlock
                code = {`{
  "event_type": "new_application"
  "event_id": "evt_abc123def456"
  "timestamp": "2025-05-16T15:30:00Z"
              
<<<<<<< HEAD
              
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <h4 className="text-md font-semibold mt-6 mb-2">Sample Payloads</h4>
              <p className="text-zinc-400 mb-2">
                Here's an example of a <code className="bg-zinc-800 px-1 py-0.5 rounded">new_application</code> webhook payload:
              </p>
              
<<<<<<< HEAD
              <CodeBlock
              
              
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <CodeBlock
                code={`{
  "event_type": "new_application",
  "event_id": "evt_abc123def456",
  "timestamp": "2025-05-16T15:30:00Z",
<<<<<<< HEAD
  "data": {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  "data": {
    "application_id": "app_123456"
    "job_id": "job_abc123"
    "talent_id": "talent_xyz789"
    "applied_at": "2025-05-16T15:28:30Z"
    "status": "new"
    "match_score": 85
  }
}`}
<<<<<<< HEAD
                language='json'
                showLineNumbers={true}              />
            </div>
          </TabsContent>
          <TabsContent value='errors' className='space-y-6'>
            <div className='prose prose-invert max-w-none'>
              <h3 className='text-lg font-semibold mb-2'>Error Responses</h3>
              <p className='text-zinc-400 mb-4'>
                The Zion API uses conventional HTTP status codes to indicate the
                success or failure of an API request. In general, codes in the
                2xx range indicate success, codes in the 4xx range indicate an
                error with the provided information, and codes in the 5xx range
                indicate an error with our servers.
              </p>
              
              <table className="w-full border-collapse mt-4">


                <thead>
                  <tr className='border-b border-zinc-800'>
                    <th className='py-2 px-4 text-left'>Status Code</th>
                    <th className='py-2 px-4 text-left'>Description</th>
                </thead>
                <tbody>
                  <tr className='border-b border-zinc-800'>
                    <td className='py-2 px-4'>
                      <code className='bg-zinc-800 px-1 py-0.5 rounded'>
                        200 OK
                      </code>
                    </td>
                    <td className='py-2 px-4'>The request was successful.</td>
                  </tr>
                  <tr className='border-b border-zinc-800'>
                    <td className='py-2 px-4'>
                      <code className='bg-zinc-800 px-1 py-0.5 rounded'>
                        201 Created
                      </code>
                    </td>
                    <td className='py-2 px-4'>
                      The resource was successfully created.
                    </td>
                  </tr>
                  <tr className='border-b border-zinc-800'>
                    <td className='py-2 px-4'>
                      <code className='bg-zinc-800 px-1 py-0.5 rounded'>
                        400 Bad Request
                      </code>
                    </td>
                    <td className='py-2 px-4'>
                      The request was invalid or cannot be otherwise served.
                    </td>
                  </tr>
                  <tr className='border-b border-zinc-800'>
                    <td className='py-2 px-4'>
                      <code className='bg-zinc-800 px-1 py-0.5 rounded'>
                        401 Unauthorized
                      </code>
                    </td>
                    <td className='py-2 px-4'>
                      Authentication credentials were missing or invalid.
                    </td>
                  </tr>
                  <tr className='border-b border-zinc-800'>
                    <td className='py-2 px-4'>
                      <code className='bg-zinc-800 px-1 py-0.5 rounded'>
                        403 Forbidden
                      </code>
                    </td>
                    <td className='py-2 px-4'>
                      The request is understood, but it has been refused or
                      access is not allowed.
                    </td>
                  </tr>
                  <tr className='border-b border-zinc-800'>
                    <td className='py-2 px-4'>
                      <code className='bg-zinc-800 px-1 py-0.5 rounded'>
                        404 Not Found
                      </code>
                    </td>
                    <td className='py-2 px-4'>
                      The requested resource does not exist.
                    </td>
                  </tr>
                  <tr className='border-b border-zinc-800'>
                    <td className='py-2 px-4'>
                      <code className='bg-zinc-800 px-1 py-0.5 rounded'>
                        422 Unprocessable Entity
                      </code>
                    </td>
                    <td className='py-2 px-4'>
                      The request was well-formed but was unable to be followed
                      due to semantic errors.
                    </td>
                  </tr>
                  <tr className='border-b border-zinc-800'>
                    <td className='py-2 px-4'>
                      <code className='bg-zinc-800 px-1 py-0.5 rounded'>
                        429 Too Many Requests
                      </code>
                    </td>
                    <td className='py-2 px-4'>
                      The request was rejected due to rate limiting.
                    </td>
                  </tr>
                  <tr className='border-b border-zinc-800'>
                    <td className='py-2 px-4'>
                      <code className='bg-zinc-800 px-1 py-0.5 rounded'>
                        500 Internal Server Error
                      </code>
                    </td>
                    <td className='py-2 px-4'>
                      Something went wrong on our end.
                    </td>
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                language="json"
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
              <h4 className='text-md font-semibold mt-6 mb-2'>
                Error Response Format
              </h4>
              <p className='text-zinc-400 mb-2'>
                Error responses include a consistent JSON object with the
                following format:
              </p>
=======
                The Zion API uses conventional HTTP status codes to indicate the;
                success or failure of an API request. In general, codes in the;
                2xx range indicate success, codes in the 4xx range indicate an;
                error with the provided information, and codes in the 5xx range;
                indicate an error with our servers.;
              </p>;
                <thead>;
                  <tr className='border-b border-zinc-800'>;
                    <th className='py-2 px-4 text-left'>Status Code</th>;
                    <th className='py-2 px-4 text-left'>Description</th>;
                  </tr>;
                </thead>;
                <tbody>;
                  <tr className='border-b border-zinc-800'>;
                    <td className='py-2 px-4'>;
                      <code className='bg-zinc-800 px-1 py-0 && 0.5 rounded'>;
                        200 OK;
                      </code>;
                    </td>;
                    <td className='py-2 px-4'>The request was successful.</td>;
                  </tr>;
                  <tr className='border-b border-zinc-800'>;
                    <td className='py-2 px-4'>;
                      <code className='bg-zinc-800 px-1 py-0 && 0.5 rounded'>;
                        201 Created;
                      </code>;
                    </td>;
                    <td className='py-2 px-4'>;
                      The resource was successfully created.;
                    </td>;
                  </tr>;
                  <tr className='border-b border-zinc-800'>;
                    <td className='py-2 px-4'>;
                      <code className='bg-zinc-800 px-1 py-0 && 0.5 rounded'>;
                        400 Bad Request;
                      </code>;
                    </td>;
                    <td className='py-2 px-4'>;
                      The request was invalid or cannot be otherwise served.;
                    </td>;
                  </tr>;
                  <tr className='border-b border-zinc-800'>;
                    <td className='py-2 px-4'>;
                      <code className='bg-zinc-800 px-1 py-0 && 0.5 rounded'>;
                        401 Unauthorized;
                      </code>;
                    </td>;
                    <td className='py-2 px-4'>;
                      Authentication credentials were missing or invalid.;
                    </td>;
                  </tr>;
                  <tr className='border-b border-zinc-800'>;
                    <td className='py-2 px-4'>;
                      <code className='bg-zinc-800 px-1 py-0 && 0.5 rounded'>;
                        403 Forbidden;
                      </code>;
                    </td>;
                      The request is understood, but it has been refused or;
                      access is not allowed.;
                    </td>;
                  </tr>;
                        404 Not Found;
                      </code>;
                    </td>;
                    <td className='py-2 px-4'>;
                      The requested resource does not exist.;
                    </td>;
                  </tr>;
                  <tr className='border-b border-zinc-800'>;
                    <td className='py-2 px-4'>;
                      <code className='bg-zinc-800 px-1 py-0 && 0.5 rounded'>;
                        422 Unprocessable Entity;
                      </code>;
                    </td>;
                    <td className='py-2 px-4'>;
                      The request was well-formed but was unable to be followed;
                      due to semantic errors.;
                    </td>;
                  </tr>;
                  <tr className='border-b border-zinc-800'>;
                    <td className='py-2 px-4'>;
                      <code className='bg-zinc-800 px-1 py-0 && 0.5 rounded'>;
                        429 Too Many Requests;
                      </code>;
                    </td>;
                    <td className='py-2 px-4'>;
                      The request was rejected due to rate limiting.;
                    </td>;
                  </tr>;
                  <tr className='border-b border-zinc-800'>;
                    <td className='py-2 px-4'>;
                      <code className='bg-zinc-800 px-1 py-0 && 0.5 rounded'>;
                        500 Internal Server Error;
                      </code>;
                    </td>;
                      Something went wrong on our end.;
                    </td>;
                  </tr>;
                </tbody>;
              </table>;

              <h4 className='text-md font-semibold mt-6 mb-2'>;
                Error Response Format;
              </h4>;
              <p className='text-zinc-400 mb-2'>;
                Error responses include a consistent JSON object with the;
                following format:;
              </p>;

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              
              <h4 className="text-md font-semibold mt-6 mb-2">Error Response Format</h4>
              <p className="text-zinc-400 mb-2">
                Error responses include a consistent JSON object with the following format:
              </p>
              


              <CodeBlock
                code = {`{
  "error": {
    "code": "invalid_request"
    "message": "The request was invalid"
    "details": [
      {
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
<<<<<<< HEAD
                language='json'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                The Zion API uses conventional HTTP status codes to indicate the;
                success or failure of an API request. In general, codes in the;
                2xx range indicate success, codes in the 4xx range indicate an;
                error with the provided information, and codes in the 5xx range;
                indicate an error with our servers.;
              </p>;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                      The request is understood, but it has been refused or;
                      access is not allowed.;
                    </td>;
                  </tr>;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                      Something went wrong on our end.;
                    </td>;
                  </tr>;
                </tbody>;
              </table>;


              
              <h4 className="text-md font-semibold mt-6 mb-2">Error Response Format</h4>
              <p className="text-zinc-400 mb-2">
                Error responses include a consistent JSON object with the following format:
              </p>
              


<<<<<<< HEAD

=======
              <CodeBlock
                code = {`{
  "error": {
    "code": "invalid_request"
    "message": "The request was invalid"
    "details": [
      {

              />;
              <h4 className='text-md font-semibold mt-6 mb-2'>Rate Limiting</h4>;
              <p className='text-zinc-400 mb-4'>;
                The Zion API implements rate limiting to protect our;
                infrastructure and ensure fair usage. Rate limits are applied on;
                a per-API key basis. If you exceed the rate limits, you will;
                receive a{' '}
                <code className='bg-zinc-800 px-1 py-0 && 0.5 rounded'>;
                  429 Too Many Requests;
                </code>{' '}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                receive a{' '}
                <code className='bg-zinc-800 px-1 py-0.5 rounded'>
                  429 Too Many Requests
                </code>{' '}
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
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Reset</code>: Unix timestamp when the rate limit resets</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
// Helper component for API endpoint documentation
unction EndpointSection({
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

}



<<<<<<< HEAD
=======
// Helper component for API endpoint documentation
function EndpointSection({
  method
  endpoint
  description
  note
  params = []
  codeExamples
  responseExamples
}: EndpointSectionProps) {
<<<<<<< HEAD
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
}

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
              />;
              <h4 className="text-md font-semibold mt-6 mb-2">Rate Limiting</h4>;
              <p className="text-zinc-400 mb-4">;
                The Zion API implements rate limiting to protect our infrastructure and ensure fair usage.;
                Rate limits are applied on a per-API key basis. If you exceed the rate limits, you will receive;
                a <code className="bg-zinc-800 px-1 py-0.5 rounded">429 Too Many Requests</code> response.;
                response.;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
              />;
              <h4 className='text - md font - semibold mt - 6 mb - 2'>Rate Limiting</h4>;
              <p className='text - zinc - 400 mb - 4'>;
                The Zion API implements rate limiting to protect our;
                infrastructure and ensure fair usage. Rate limits are applied on;
                a per - API key basis. If you exceed the rate limits, you will;
                receive a{' '}
                <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                  429 Too Many Requests;
                </code>{' '}
                response.;
              </p>;
              <p className='text - zinc - 400 mb - 2'>;
                Rate limit information is included in the response headers:;
              </p>;
              <ul className='list - disc pl - 6 space - y-1 text - zinc - 400'>;
                <li>;
                  <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                    X - RateLimit - Limit;
                  </code>;
                  : Number of requests allowed in the time window;
                </li>;
                <li>;
                  <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                    X - RateLimit - Remaining;
                  </code>;
                  : Number of requests remaining in the current window;
                </li>;
                <li>;
                  <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                    X - RateLimit - Reset;
                  </code>;
                  : Unix timestamp when the rate limit resets;
                </li>;

import { useState } from "react",;
import { BookOpen, Terminal } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Alert, AlertDescription } from "@/components/ui/alert",;
import { Badge } from "@/components/ui/badge",;
;
import CodeBlock from "./CodeBlock",;
import { logInfo } from '@/utils/productionLogger',;
interface EndpointParam {;
  name:string,;
  type:string,;
  description:string,;
  required?:boolean;
}
;
interface EndpointSectionProps {;
  method:string,;
  endpoint:string,;
  description:string,;
  note?:string,;
  params?:EndpointParam[],;
  codeExamples?:Record<string string>,;
  responseExamples?:{ success:string },;
}
;
export function ApiDocumentation() {;
  return (;
    <Card className="bg-zinc-900 border-zinc-800 text-white">;
      <CardHeader>;
        <CardTitle className="text-xl flex items-center">;
          <BookOpen className="mr-2" size={20} /> API Documentation;
        </CardTitle>;
        <CardDescription className="text-zinc-400">;
          Reference documentation for integrating with the Zion Marketplace API.;
        </CardDescription>;
      </CardHeader>;
      ;
      <CardContent>;
        <Alert className="bg-blue-900/30 border-blue-800 mb-6">;
          <Terminal className="h-4 w-4" />;
          <AlertDescription>;
            Make sure to include your API key in all requests as a Bearer token in the Authorization header.;
          </AlertDescription>;
        </Alert>;
;
        <Tabs defaultValue="jobs" className="space-y-4">;
          <TabsList className="bg-zinc-800 border-zinc-700">;
            <TabsTrigger value="jobs">Jobs</TabsTrigger>;
            <TabsTrigger value="talent">Talent</TabsTrigger>;
            <TabsTrigger value="quotes">Quotes</TabsTrigger>;
            <TabsTrigger value="webhooks">Webhooks</TabsTrigger>;
            <TabsTrigger value="errors">Errors</TabsTrigger>;
          </TabsList>;
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
logInfo(data),`,;
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
            ;
            <EndpointSection;
              method="GET";
              endpoint="/api/jobs/:id";
              description="Get detailed information about a specific job.";
              note="";
              params={[;
                { name:"id", type:"string", description:"The job ID", required:true }
              ]}
              codeExamples={{;
                curl:`curl -X GET "https://api.ziontechgroup.com/v1/jobs/job_abc123" \\;
  -H "Authorization:Bearer YOUR_API_KEY" \\;
  -H "Content-Type:application/json"`,;
                javascript:`const jobId = 'job_abc123',;
const response = await fetch(\`https://api.ziontechgroup.com/v1/jobs/\${jobId}\`, {;
  method:'GET',;
  headers:{;
    'Authorization':'Bearer YOUR_API_KEYContent-Type':'application/json';
  }
}),;
;
const data = await response.json(),;
logInfo(data),`,;
                python:`import requests;
;
headers = {;
    'Authorization':'Bearer YOUR_API_KEYContent-Type':'application/json';
}
;
job_id = 'job_abc123';
response = requests.get(;
    f'https://api.ziontechgroup.com/v1/jobs/{job_id}',;
    headers=headers;
);
;
data = response.json();
print(data)`;
              }}
              responseExamples={{;
                success:`{;
  "data":{;
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
    "created_at":"2025-05-15T10:30:00Z",;
    "deadline":"2025-06-30T23:59:59Z",;
    "application_count":12;
  }
}`;
              }}
            />;
            ;
            <EndpointSection;
              method="POST";
              endpoint="/api/jobs";
              description="Create a new job listing.";
              note="Requires jobs:write scope";
              params={[;
                { name:"title", type:"string", description:"Job title", required:true },;
                { name:"description", type:"string", description:"Detailed job description", required:true },;
                { name:"category", type:"string", description:"Job category", required:true },;
                { name:"skills", type:"string[]", description:"Required skills", required:true },;
                { name:"budget.min", type:"number", description:"Minimum budget" },;
                { name:"budget.max", type:"number", description:"Maximum budget" },;
                { name:"budget.currency", type:"string", description:"Currency code (default:USD)" },;
                { name:"deadline", type:"string", description:"Job deadline (ISO date string)" }
              ]}
              codeExamples={{;
                curl:`curl -X POST "https://api.ziontechgroup.com/v1/jobs" \\;
  -H "Authorization:Bearer YOUR_API_KEY" \\;
  -H "Content-Type:application/json" \\;
  -d '{;
    "title":"Senior React Developer",;
    "description":"We need an experienced React developer...",;
    "category":"development",;
    "skills":["react", "typescript", "node.js"],;
    "budget":{;
      "min":5000,;
      "max":10000,;
      "currency":"USD";
    },;
    "deadline":"2025-06-30T23:59:59Z";
  }'`,;
                javascript:`const response = await fetch('https://api.ziontechgroup.com/v1/jobs', {;
  method:'POST',;
  headers:{;
    'Authorization':'Bearer YOUR_API_KEYContent-Type':'application/json';
  },;
  body:JSON.stringify({;
    title:'Senior React Developer',;
    description:'We need an experienced React developer...',;
    category:'development',;
    skills:['reacttypescript', 'node.js'],;
    budget:{;
      min:5000,;
      max:10000,;
      currency:'USD';
    },;
    deadline:'2025-06-30T23:59:59Z';
  });
}),;
;
const data = await response.json(),;
logInfo(data),`,;
                python:`import requests;
import json;
;
headers = {;
    'Authorization':'Bearer YOUR_API_KEYContent-Type':'application/json';
}
;
payload = {;
    'title':'Senior React Developerdescription':'We need an experienced React developer...category':'developmentskills':['reacttypescript', 'node.js'],;
    'budget':{;
        'min':5000,;
        'max':10000,;
        'currency':'USD';
    },;
    'deadline':'2025-06-30T23:59:59Z';
}
;
response = requests.post(;
    'https://api.ziontechgroup.com/v1/jobs',;
    headers=headers,;
    data=json.dumps(payload);
);
;
data = response.json();
print(data)`;
              }}
              responseExamples={{;
                success:`{;
  "data":{;
    "id":"job_def456",;
    "title":"Senior React Developer",;
    "description":"We need an experienced React developer...",;
    "category":"development",;
    "skills":["react", "typescript", "node.js"],;
    "budget":{;
      "min":5000,;
      "max":10000,;
      "currency":"USD";
    },;
    "status":"new",;
    "client_id":"user_xyz789",;
    "created_at":"2025-05-16T14:22:10Z",;
    "deadline":"2025-06-30T23:59:59Z";
  }
}`;
              }}
            />;
          </TabsContent>;
          ;
          <TabsContent value="talent" className="space-y-6">;
            <EndpointSection;
              method="GET";
              endpoint="/api/talent";
              description="List talent profiles with optional filtering.";
              note="";
              params={[;
                { name:"page", type:"integer", description:"Page number for pagination (default:1)" },;
                { name:"limit", type:"integer", description:"Number of results per page (default:20, max:100)" },;
                { name:"skills", type:"string[]", description:"Filter by skills (comma-separated)" },;
                { name:"availability", type:"string", description:"Filter by availability status" }
              ]}
              codeExamples={{;
                curl:`curl -X GET "https://api.ziontechgroup.com/v1/talent?skills=react,typescript" \\;
  -H "Authorization:Bearer YOUR_API_KEY" \\;
  -H "Content-Type:application/json"`,;
                javascript:`const response = await fetch('https://api.ziontechgroup.com/v1/talent?skills=react,typescript', {;
  method:'GET',;
  headers:{;
    'Authorization':'Bearer YOUR_API_KEYContent-Type':'application/json';
  }
}),;
;
const data = await response.json(),;
logInfo(data),`,;
                python:`import requests;
;
headers = {;
    'Authorization':'Bearer YOUR_API_KEYContent-Type':'application/json';
}
;
response = requests.get(;
    'https://api.ziontechgroup.com/v1/talent',;
    params={'skills':'react,typescript'},;
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
      "id":"talent_abc123",;
      "display_name":"Jane Smith",;
      "headline":"Senior Frontend Developer",;
      "skills":["react", "typescript", "javascript"],;
      "availability":"available",;
      "average_rating":4.8,;
      "rating_count":15;
    },;
    // More talent profiles...;
  ],;
  "meta":{;
    "total":28,;
    "page":1,;
    "limit":20;
  }
}`;
              }}
            />;
            ;
            <EndpointSection;
              method="GET";
              endpoint="/api/talent/:id";
              description="Get detailed information about a specific talent profile.";
              note="";
              params={[;
                { name:"id", type:"string", description:"The talent ID", required:true }
              ]}
              codeExamples={{;
                curl:`curl -X GET "https://api.ziontechgroup.com/v1/talent/talent_abc123" \\;
  -H "Authorization:Bearer YOUR_API_KEY" \\;
  -H "Content-Type:application/json"`,;
                javascript:`const talentId = 'talent_abc123',;
const response = await fetch(\`https://api.ziontechgroup.com/v1/talent/\${talentId}\`, {;
  method:'GET',;
  headers:{;
    'Authorization':'Bearer YOUR_API_KEYContent-Type':'application/json';
  }
}),;
;
const data = await response.json(),;
logInfo(data),`,;
                python:`import requests;
;
headers = {;
    'Authorization':'Bearer YOUR_API_KEYContent-Type':'application/json';
}
;
talent_id = 'talent_abc123';
response = requests.get(;
    f'https://api.ziontechgroup.com/v1/talent/{talent_id}',;
    headers=headers;
);
;
data = response.json();
print(data)`;
              }}
              responseExamples={{;
                success:`{;
  "data":{;
    "id":"talent_abc123",;
    "display_name":"Jane Smith",;
    "headline":"Senior Frontend Developer",;
    "bio":"10+ years of experience in frontend development...",;
    "skills":["react", "typescript", "javascript", "css", "html"],;
    "availability":"available",;
    "average_rating":4.8,;
    "rating_count":15,;
    "portfolio":[;
      {;
        "id":"proj_123",;
        "title":"E-commerce Platform",;
        "description":"Built a modern e-commerce platform using React...",;
        "technologies":["react", "redux", "node.js"],;
        "image_url":"https://example.com/portfolio/123.jpg";
      }
    ],;
    "certifications":[;
      {;
        "name":"AWS Certified Developer",;
        "issuing_organization":"Amazon Web Services",;
        "issue_date":"2024-01-15";
      }
    ];}
}export function ApiDocumentation () {;
  return (<Card className="bg-zinc-900 border-zinc-800 text-white" > text-xl flex items-center"> <BookOpen className=" mr-2"size= {;
  20 ";
}/> API Documentation </CardTitle> <CardDescription className=" text-zinc-400"> Reference documentation for integrating with the Zion Marketplace API. </CardDescription> </CardHeader> <CardContent> <Alert className=" bg-blue-900/30 border-blue-800 mb-6"> <Terminal className=" h-4 w-4"/> <AlertDescription> Make sure to include your API key in all requests as a Bearer token in the Authorization header. </AlertDescription> </Alert> <Tabs defaultValue=" jobs"className=" space-y-4"> <TabsList className=" bg-zinc-800 border-zinc-700"> <TabsTrigger value=" jobs">Jobs</TabsTrigger> <TabsTrigger value=" talent">Talent</TabsTrigger> <TabsTrigger value=" quotes">Quotes</TabsTrigger> <TabsTrigger value=" webhooks">Webhooks</TabsTrigger> <TabsTrigger value=" errors">Errors</TabsTrigger> </TabsList> <TabsContent value=" jobs"className=" space-y-6"> <EndpointSection headers=headers) data = response.json () print (data) ` ;
}

export function ApiDocumentation() {
=======
  const [activeTab, setActiveTab] = useState('curl')

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Reset</code>: Unix timestamp when the rate limit resets</li>;
              </ul>;
            </div>;
          </TabsContent>;
        </Tabs>;
      </CardContent>;
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
            </Badge>
          )}

        </div>
        <p className='mt-2 text-zinc-400'>{description}</p>
      </div>
      


      {params.length > 0 && (
        <div className='border-t border-zinc-800 p-4'>
          <h4 className='font-medium mb-2'>Parameters</h4>
          <table className='w-full'>
              <tr className='text-left border-b border-zinc-800 text-sm'>
                <th className='pb-2'>Name</th>
                <th className='pb-2'>Type</th>
                <th className='pb-2'>Description</th>
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              {note}
            </Badge>
          )}
        </div>
        <p className='mt-2 text-zinc-400'>{description}</p>
      </div>
        
        <p className="mt-2 text-zinc-400">{description}</p>
      </div>
      


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
              {params.map((param, index) => (
                <tr
                  key={index}
                  className={
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
                </tr>
<<<<<<< HEAD
                  onClick={() => setActiveTab(lang)}

=======
              ))}
            </tbody>
          </table>
        </div>
      )}
<<<<<<< HEAD
                </tr>
              ))}
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
  codeExamples,;
  responseExamples;
} EndpointSectionProps) {;
  const [activeTab, setActiveTab] = useState("curl"),;
  ;
  return (;
    <div className="border border-zinc-800 rounded-md">;
      <div className="p-4">;
        <div className="flex items-center">;
          <Badge ;
            variant="outline" ;
            className={;
              method === 'GET' ;
                ? "border-green-500 text-green-400 font-mono" ;
                :method === 'POST' ;
                ? "border-blue-500 text-blue-400 font-mono";
                :method === 'PUT';
                ? "border-yellow-500 text-yellow-400 font-mono";
                :"border-red-500 text-red-400 font-mono";
            }
          >;            {method}
          </Badge>;
          <span className="ml-2 font-mono text-sm text-white">{endpoint}</span>;
          {note && (;
            <Badge className="ml-auto bg-amber-800 text-amber-200 hover:bg-amber-800">;
              {note}
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
      )}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

      {codeExamples && (
        <div className='border-t border-zinc-800 p-4'>
          <div className='flex items-center mb-2'>
            <h4 className='font-medium'>Request Example</h4>
            <div className='ml-auto flex border border-zinc-700 rounded-md overflow-hidden'>
              {Object.keys(codeExamples).map(lang => (                <button

<<<<<<< HEAD
      {codeExamples && (;
        <div className='border-t border-zinc-800 p-4'>;
          <div className='flex items-center mb-2'>;
            <h4 className='font-medium'>Request Example</h4>;
            <div className='ml-auto flex border border-zinc-700 rounded-md overflow-hidden'>;
              {Object && Object.keys(codeExamples).map(lang => (                <button
                  key = {lang,}
                  key = {lang,}
      
      {codeExamples && (
        <div className="border-t border-zinc-800 p-4">
          <div className="flex items-center mb-2">
            <h4 className="font-medium">Request Example</h4>
            <div className="ml-auto flex border border-zinc-700 rounded-md overflow-hidden">
              {Object.keys(codeExamples).map((lang) => (
                <button
                  key={lang}
                    activeTab === lang 
                      ? "bg-zinc-700 text-white" 
                      : "text-zinc-400 hover:bg-zinc-800"
ursor/fix-website-loading-errors-and-merge-6662


                  className={`px-3 py-1 text-xs font-medium ${
                    activeTab === lang
                      ? 'bg-zinc-700 text-white'
                      : 'text-zinc-400 hover:bg-zinc-800'
                  }`}
                  onClick = {(,) => setActiveTab(lang),}
    </Card>);
// Helper component for API endpoint documentation;
/**
 * EndpointSection - Function description
 */
function EndpointSection() {
  const [active_tab, setActiveTab] = useState ('curl');
  return (
    <div className='border border - zinc - 800 rounded - md'>;
      <div className='p - 4'>;
        <div className='flex items - center'>;
          <Badge;
            variant='outline';
            className={
              method === 'GET';
                ? 'border - green - 500 text - green - 400 font - mono';
                : method === 'POST';
                  ? 'border - blue - 500 text - blue - 400 font - mono';
                  : method === 'PUT';
                    ? 'border - yellow - 500 text - yellow - 400 font - mono';
                    : 'border - red - 500 text - red - 400 font - mono';
            }          >;
            {method}
          </Badge>;
          <span className='ml - 2 font - mono text - sm text - white'>{endpoint}</span>;
          {note && (
            <Badge className='ml - auto bg - amber - 800 text - amber - 200 hover:bg - amber - 800'>;
              {note}
            </Badge>)}
        </div>;
        <p className='mt - 2 text - zinc - 400'>{description}</p>;
      </div>;
      {params.length > 0 && (
        <div className='border - t border - zinc - 800 p - 4'>;
          <h4 className='font - medium mb - 2'>Parameters</h4>;
          <table className='w - full'>;
            <thead>;
              <tr className='text - left border - b border - zinc - 800 text - sm'>;
                <th className='pb - 2'>Name</th>;
                <th className='pb - 2'>Type</th>;
                <th className='pb - 2'>Description</th>;
              </tr>;
            </thead>;
            <tbody>;
              {params.map ((param, index) => (
                <tr;
                  key={index}
                  className={
                    index < params.length - 1 ? 'border - b border - zinc - 800' : '';
                  }
                >;
                  <td className='py - 2 font - mono text - sm'>                    {param.name}
                    {param.required && <span className='text - red - 500'>*</span>}
                  </td>;
                  <td className='py - 2 text - sm text - zinc - 400'>{param.type}</td>;
                  <td className='py - 2 text - sm text - zinc - 400'>;
                    {param.description}
                  </td>;
                </tr>))}
            </tbody>;
          </table>;
        </div>)}
      {code_examples && (
        <div className='border - t border - zinc - 800 p - 4'>;
          <div className='flex items - center mb - 2'>;
            <h4 className='font - medium'>Request Example</h4>;
            <div className='ml - auto flex border border - zinc - 700 rounded - md overflow - hidden'>;
              {Object.keys (code_examples).map (lang => (                <button;
                  key = {lang, }
                  className={`px - 3 py - 1 text - xs font - medium ${
                    active_tab === lang;
                      ? 'bg - zinc - 700 text - white';
                      : 'text - zinc - 400 hover:bg - zinc - 800';
                  }`}
                  on_click = {(, ) => setActiveTab (lang), }
                >;
                  {lang === 'curl';
                    ? 'cURL';
                    : lang === 'javascript';
                      ? 'JavaScript';
                      : 'Python'}
            code={codeExamples[activeTab] || '// Code example not available'}
            language={activeTab === 'curl' ? 'bash' : activeTab}          />;
        </div>;
      )}
      {responseExamples && (;
        <div className='border-t border-zinc-800 p-4'>;
          <h4 className='font-medium mb-2'>Response</h4>;
          <CodeBlock code={responseExamples && responseExamples.success} language='json' />        </div>;
      )}
    </div>;
  );
}
                </button>))}
            </div>;
          </div>;
          <CodeBlock;
            code={code_examples[active_tab] || '// Code example not available'}
            language={active_tab === 'curl' ? 'bash' : active_tab}          />;
        </div>)}
      {response_examples && (
        <div className='border - t border - zinc - 800 p - 4'>;
          <h4 className='font - medium mb - 2'>Response</h4>;
          <CodeBlock code={response_examples.success} language='json' />        </div>)}
    </div>);
}
;
                  className={`px-3 py-1 text-xs font-medium ${
=======


                  className={`px-3 py-1 text-xs font-medium ${
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    activeTab === lang 
                      ? "bg-zinc-700 text-white" 
                      : "text-zinc-400 hover:bg-zinc-800"
                  }`}
                  onClick={() => setActiveTab(lang)}
                >
                  {lang === "curl" ? "cURL" : lang === "javascript" ? "JavaScript" : "Python"}
                </button>
              ))}
            </div>
          </div>
<<<<<<< HEAD
          <CodeBlock
            code={codeExamples[activeTab] |'// Code example not available'}
            language={activeTab === 'curl' ? 'bash' : activeTab}          />
          <CodeBlock 
            code={codeExamples[activeTab] || "// Code example not available"}
            language={activeTab === "curl" ? "bash" : activeTab}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          />

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
        <div className="border-t border-zinc-800 p-4">
          <h4 className="font-medium mb-2">Response</h4>
          <CodeBlock
            code={responseExamples.success}
            language="json"
          />
        </div>
      )}
    </div>;
  );
}
;
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
      ;
      {codeExamples && (;
        <div className="border-t border-zinc-800 p-4">;
          <div className="flex items-center mb-2">;
            <h4 className="font-medium">Request Example</h4>;
            <div className="ml-auto flex border border-zinc-700 rounded-md overflow-hidden">;
              {Object.keys(codeExamples).map((lang) => (;
                <button;
                  key={lang}
                  className={`px-3 py-1 text-xs font-medium ${;
                    activeTab === lang ;
                      ? "bg-zinc-700 text-white" ;
                      :"text-zinc-400 hover:bg-zinc-800";
                  }`}
                  onClick={() => setActiveTab(lang)}
                >;
                  {lang === "curl" ? "cURL" :lang === "javascript" ? "JavaScript" :"Python"}
                </button>;
              ))}
            </div>;
          </div>;
          <CodeBlock ;
            code={codeExamples[activeTab] || "// Code example not available"}
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
  ),;}
;
}responseExamples= {;
  {;
  success: ` {";
  " data": [ {;
  ;
}` ;
}
}/> <EndpointSection const response = await fetch (\`https://api.ziontechgroup.com/v1/jobs/\$ {;
  jobId ;
}\`, {;
  method: 'GET';
headers: {';
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json' ;
}
});
const data = await response.json ();
logInfo (data), `;
python: `import requests headers = {';
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json' ;
}job id ';
}';
headers=headers) data = response.json () print (data) ` ;
}
}responseExamples= {;
  {;
  success: ` {;
  ;
}
}` ;
}';
}/> <EndpointSection deadline: '2025-06-30T23:59:59Z' ;
}) ;
});';
'deadline': '2025-06-30T23:59:59Z' ';
}response = requests.post ('https: //api.ziontechgroup.com/v1/jobs';
headers=headers;
data=json.dumps (payload) ) data = response.json () print (data) ` ;
}
}responseExamples= {;
  {;
  success: ` {;
  ;
}
}` ;
}";
}/> </TabsContent> <TabsContent value=" talent"className=" space-y-6"> <EndpointSection headers=headers) data = response.json () print (data) ` ;
}
}responseExamples= {;
  {;
  success: ` {";
  " data": [ {;
  ;
}` ;
}
}/> <EndpointSection const response = await fetch (\`https://api.ziontechgroup.com/v1/talent/\$ {;
  talentId ;
}\`, {';
  method: 'GET';
headers: {';
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json' ;
}
});
const data = await response.json ();
logInfo (data), `;
python: `import requests headers = {';
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json' ;
}talent id ';
}';
headers=headers) data = response.json () print (data) ` ;
}
}responseExamples= {;
  {;
  success: ` {;
  ] ;
}
}` ;
}'";
}/> </TabsContent> <TabsContent value=" quotes"className=" space-y-6"> <EndpointSection response = requests.post ('https: //api.ziontechgroup.com/v1/quotes';
headers=headers;
data=json.dumps (payload) ) data = response.json () print (data) ` ;
}
}responseExamples= {;
  {;
  success: ` {;
  ;
}` ;
}';
}/> <EndpointSection response = requests.get ('https: //api.ziontechgroup.com/v1/quotes';
headers=headers) data = response.json () print (data) ` ;
}
}responseExamples= {;
  {;
  success: ` {";
  " data": [ {;
  ;
}` ;
}";
}/> </TabsContent> <TabsContent value=" webhooks"className="space-y-6"> <div className="prose prose-invert max-w-none"> <h3 className="text-lg font-semibold mb-2">Webhook Events</h3> <p className="text-zinc-400 mb-4"> The Zion API can send webhook notifications when certain events occur in your account. You can configure webhooks in the Webhooks tab of the Developer Dashboard. </p> <h4 className="text-md font-semibold mt-6 mb-2">Authentication</h4> <p className="text-zinc-400 mb-4"> When you create a webhook, you can optionally provide a secret key. If a secret is provided, each webhook request will include a signature in the <code className="bg-zinc-800 px-1 py-0.5 rounded">X-Zion-Signature</code> header. This signature is an HMAC SHA-256 hash of the request body using your webhook secret as the key. </p> <CodeBlock //Respond to acknowledge receipt showLineNumbers= {;
  true ";
}>new application</code> webhook payload: </p> <CodeBlock /> </div> </TabsContent> <TabsContent value=" errors"className="space-y-6"> <div className="prose prose-invert max-w-none"> <h3 className="text-lg font-semibold mb-2">Error Responses</h3> <p className="text-zinc-400 mb-4"> The Zion API uses conventional HTTP status codes to indicate the success or failure of an API request. In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error with the provided information, and codes in the 5xx range indicate an error with our servers. </p> <table className="w-full border-collapse mt-4"> <thead> <tr className="border-b border-zinc-800"> <th className="py-2 px-4 text-left">Status Code</th> <th className="py-2 px-4 text-left">Description</th> </tr> </thead> <tbody> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">200 OK</code></td> <td className="py-2 px-4">The request was successful.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">201 Created</code></td> <td className="py-2 px-4">The resource was successfully created.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">400 Bad Request</code></td> <td className="py-2 px-4">The request was invalid or cannot be otherwise served.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">401 Unauthorized</code></td> <td className="py-2 px-4">Authentication credentials were missing or invalid.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">403 Forbidden</code></td> <td className="py-2 px-4">The request is understood, but it has been refused or access is not allowed.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">404 Not Found</code></td> <td className="py-2 px-4">The requested resource does not exist.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">422 Unprocessable Entity</code></td> <td className="py-2 px-4">The request was well-formed but was unable to be followed due to semantic errors.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">429 Too Many Requests</code></td> <td className="py-2 px-4">The request was rejected due to rate limiting.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">500 Internal Server Error</code></td> <td className="py-2 px-4">Something went wrong on our end.</td> </tr> </tbody> </table> <h4 className="text-md font-semibold mt-6 mb-2">Error Response Format</h4> <p className="text-zinc-400 mb-2"> Error responses include a consistent JSON object with the following format: </p> <CodeBlock ] ;
}
}` ";
}language=" json"/> <h4 className="text-md font-semibold mt-6 mb-2">Rate Limiting</h4> <p className="text-zinc-400 mb-4"> The Zion API implements rate limiting to protect our infrastructure and ensure fair usage. Rate limits are applied on a per-API key basis. If you exceed the rate limits, you will receive a <code className="bg-zinc-800 px-1 py-0.5 rounded">429 Too Many Requests</code> response. </p> <p className="text-zinc-400 mb-2"> Rate limit information is included in the response headers: </p> <ul className="list-disc pl-6 space-y-1 text-zinc-400"> <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Limit</code>: Number of requests allowed in the time window</li> <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Remaining</code>: Number of requests remaining in the current window</li> <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Reset</code>: Unix timestamp when the rate limit resets</li> </ul> </div> </TabsContent> </Tabs> </CardContent> </Card>) ";
}//Helper component for API endpoint documentation > <Badge variant=" outline"className= {'";
  method === 'GET' ? "border-green-500 text-green-400 font-mono": method === 'POST' ? " border-blue-500 text-blue-400 font-mono": method === 'PUT' > {;
  method ";
}</Badge> <span className="ml-2 font-mono text-sm text-white"> {;
  endpoint ;
}</span> {";
  note && (<Badge className="ml-auto bg-amber-800 text-amber-200 hover:bg-amber-800"> {;
  note ;
}</Badge>) ";
}</div> <p className="mt-2 text-zinc-400"> {;
  description ;
}</p> </div> {";
  params.length > 0 && (<div className="border-t border-zinc-800 p-4"> <h4 className="font-medium mb-2">Parameters</h4> <table className="w-full"> <thead> <tr className="text-left border-b border-zinc-800 text-sm"> <th className="pb-2">Name</th> <th className="pb-2">Type</th> <th className="pb-2">Description</th> </tr> </thead> <tbody> </tr>) ) ;
}</tbody> </table> </div>) ;
}key= {;
  lang ;
}className= {;
  `px-3 py-1 text-xs font-medium $ {;
  activeTab === lang </button>) ) ;
}</div> </div> <CodeBlock /> </div>) ;
}<CodeBlock code= {;
  responseExamples.success ";
}language=" json" /> </div>) ;
}</div>) ;
}'"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <CodeBlock 
            code={codeExamples[activeTab] || "// Code example not available"}
            language={activeTab === "curl" ? "bash" : activeTab}
          />

        </div>
      )}
      {responseExamples && (
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
