<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx


=======
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState } from 'react'
import { BookOpen, Terminal } from 'lucide-react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import CodeBlock from './CodeBlock'
import { logInfo } from '@/utils/productionLogger'
interface EndpointParam {
  name: string
type: string
description: string
required?: boolean
}interface EndpointSectionProps {
  method: string
endpoint: string
description: string
note?: string
params?: EndpointParam[]
codeExamples?: Record<string string>
responseExamples?: {
  success: string
}export function ApiDocumentation () {
  return (<Card className="bg-zinc-900 border-zinc-800 text-white" > text-xl flex items-center"> <BookOpen className=" mr-2"size= {
  20 "
}/> API Documentation </CardTitle> <CardDescription className=" text-zinc-400"> Reference documentation for integrating with the Zion Marketplace API. </CardDescription> </CardHeader> <CardContent> <Alert className=" bg-blue-900/30 border-blue-800 mb-6"> <Terminal className=" h-4 w-4"/> <AlertDescription> Make sure to include your API key in all requests as a Bearer token in the Authorization header. </AlertDescription> </Alert> <Tabs defaultValue=" jobs"className=" space-y-4"> <TabsList className=" bg-zinc-800 border-zinc-700"> <TabsTrigger value=" jobs">Jobs</TabsTrigger> <TabsTrigger value=" talent">Talent</TabsTrigger> <TabsTrigger value=" quotes">Quotes</TabsTrigger> <TabsTrigger value=" webhooks">Webhooks</TabsTrigger> <TabsTrigger value=" errors">Errors</TabsTrigger> </TabsList> <TabsContent value=" jobs"className=" space-y-6"> <EndpointSection headers=headers) data = response.json () print (data) `
}responseExamples= {
  {
  success: ` {"
  " data": [ {
}`
}/> <EndpointSection const response = await fetch (\`https://api.ziontechgroup.com/v1/jobs/\$ {
  jobId
}\`, {
  method: 'GET'
headers: {'
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json'
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json' 

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
xport function ApiDocumentation() {
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export function ApiDocumentation() {
>>>>>>>   return (
    <Card className='bg-zinc-900 border-zinc-800 text-white'>
      <CardHeader>
        <CardTitle className='text-xl flex items-center'>
          <BookOpen className='mr-2' size={20} /> API Documentation
        </CardTitle>
        <CardDescription className='text-zinc-400'>
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function ApiDocumentation() {
  return (
    <Card className="bg-zinc-900 border-zinc-800 text-white">
      <CardHeader>
        <CardTitle className="text-xl flex items-center">
          <BookOpen className="mr-2" size={20} /> API Documentation
        </CardTitle>
        <CardDescription className="text-zinc-400">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          Reference documentation for integrating with the Zion Marketplace API.
        </CardDescription>
      </CardHeader>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

      <CardContent>
=======
>>>>>>>       <CardContent>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <Alert className="bg-blue-900/30 border-blue-800 mb-6">
          <Terminal className="h-4 w-4" />
ursor/fix-website-loading-errors-and-merge-6662
      <CardContent>
        <Alert className='bg-blue-900/30 border-blue-800 mb-6'>
          <Terminal className='h-4 w-4' />
>>>>>>>           <AlertDescription>
            Make sure to include your API key in all requests as a Bearer token
            in the Authorization header.
          </AlertDescription>
        </Alert>
<<<<<<< HEAD

=======
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      
      <CardContent>
        <Alert className="bg-blue-900/30 border-blue-800 mb-6">
          <Terminal className="h-4 w-4" />
          <AlertDescription>
            Make sure to include your API key in all requests as a Bearer token in the Authorization header.
          </AlertDescription>
        </Alert>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <Tabs defaultValue='jobs' className='space-y-4'>
          <TabsList className='bg-zinc-800 border-zinc-700'>
            <TabsTrigger value='jobs'>Jobs</TabsTrigger>
            <TabsTrigger value='talent'>Talent</TabsTrigger>
            <TabsTrigger value='quotes'>Quotes</TabsTrigger>
            <TabsTrigger value='webhooks'>Webhooks</TabsTrigger>
            <TabsTrigger value='errors'>Errors</TabsTrigger>
          </TabsList>
          <TabsContent value='jobs' className='space-y-6'>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>             <EndpointSection
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            <EndpointSection
>>>>>>>               method="GET"
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              endpoint="/api/jobs"
              description="List all available jobs with optional filtering."
              note=""
              params={[
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
========
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
  {
  success: ` {";
  " data": [ {
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                {
                  name: 'page'
                  type: 'integer'
                  description: 'Page number for pagination (default: 1)'
                }
                {
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  name: 'limit'
                  type: 'integer'
                  description:
                    'Number of results per page (default: 20, max: 100)'
                }
<<<<<<< HEAD
========
                  name: 'limit',
                  type: 'integer',
                  description:;
                    'Number of results per page (default: 20, max: 100)',
                },
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                {
                  name: 'category'
                  type: 'string'
                  description: 'Filter by job category'
                }
                {
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  name: 'skills'
                  type: 'string[]'
                  description: 'Filter by required skills (comma-separated)'
                }
<<<<<<< HEAD
========
                  name: 'skills',
                  type: 'string[]',
                  description: 'Filter by required skills (comma - separated)',
                },
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                {
                  name: 'status'
                  type: 'string'
                  description: 'Filter by job status (new, active, closed)'
                }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              ]}
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" },
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },
                { name: "category", type: "string", description: "Filter by job category" },
                { name: "skills", type: "string[]", description: "Filter by required skills (comma-separated)" },
                { name: "status", type: "string", description: "Filter by job status (new, active, closed)" }
              ]}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              codeExamples={{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/jobs?limit=10&category=development" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/jobs?limit=10&category=development', {
  method: 'GET'
  headers: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
    'Authorization': 'Bearer YOUR_API_KEY'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    'Authorization': 'Bearer YOUR_API_KEY'
    'Authorization': 'Bearer YOUR_API_KEY',
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

});'
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}`
}'
}/> <EndpointSection deadline: '2025-06-30T23:59:59Z'
})
<<<<<<< HEAD
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
              ]}

  -H "Content-Type: application/json"`,
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/jobs?limit=10&category=development', {
              code_examples = {{
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / jobs?limit = 10 & category = development" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json"`,
                javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / jobs?limit = 10 & category = development', {

  method: 'GET',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  headers: {


    'Authorization': 'Bearer YOUR_API_KEY',


    'Content-Type': 'application/json'
  }
})


=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}` ;
}';
}/> <EndpointSection deadline: '2025-06-30T23:59:59Z' ;
}) ;
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> });'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
});'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
========
  -H "Content-Type: application/json"`,
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/jobs?limit=10&category=development', {
              code_examples = {{
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / jobs?limit = 10 & category = development" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json"`,
                javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / jobs?limit = 10 & category = development', {
  method: 'GET',
  headers: {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
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
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
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
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx
data = response.json()
<<<<<<< HEAD

=======
print(data)`
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
}responseExamples= {
  {
  success: ` {"
  " data": [ {
}`
}/> <EndpointSection const response = await fetch (\`https://api.ziontechgroup.com/v1/talent/\$ {
  talentId
}\`, {'
  method: 'GET'
headers: {'
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json'
response = requests.get(
    'https://api.ziontechgroup.com/v1/jobs'
    params={'limit': 10, 'category': 'development'}
    headers=headers
)
data = response.json()
print(data)`
print(data)`,
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

              }}
=======
>>>>>>>               }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              responseExamples={{
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
              }}
              response_examples={{
>>>>>>>                 success: `{
  "data": [;
    {
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
      "id": "job_abc123",
      "title": "Senior React Developer",
      "description": "We need an experienced React developer...",
      "category": "development",
      "skills": ["react", "typescript", "node && node.js"],
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              }}
              responseExamples={{
                success: `{
  "data": [
    {
      "id": "job_abc123"
      "title": "Senior React Developer"
      "description": "We need an experienced React developer..."
      "category": "development"
      "skills": ["react", "typescript", "node.js"]
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
  ]
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  ]
  ],
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  "meta": {
    "total": 42
    "page": 1
    "limit": 10
<<<<<<< HEAD

========
      "budget": {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
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
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
  }
<<<<<<< HEAD

              }}
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx
            />
=======
}`
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>               }}

            />;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
            />;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
=======
  }
}`
}`,
              }}
            />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <EndpointSection
              method='GET'
              endpoint='/api/jobs/:id'
              description='Get detailed information about a specific job.'
              note=''
              params={[
<<<<<<< HEAD
            />;
            <EndpointSection;
              method='GET';
              endpoint='/api / jobs/:id';
              description='Get detailed information about a specific job.';
              note='';
              params={[;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                {
                  name: 'id'
                  type: 'string'
                  description: 'The job ID'
                  required: true
                },              ]}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              codeExamples={{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/jobs/job_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
                javascript: `const jobId = 'job_abc123'
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              codeExamples={{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/jobs/job_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
<<<<<<< HEAD
<<<<<<< HEAD

const response = await fetch(\`https://api.ziontechgroup.com/v1/jobs/\${jobId}\`, {
  method: 'GET'
  headers: {

=======
>>>>>>>               codeExamples={{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/jobs/job_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
                javascript: `const jobId = 'job_abc123',
print(data)`
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
response = requests.get(;
    f'https://api.ziontechgroup.com/v1/jobs/{job_id}',;
    headers=headers;
);
data = response.json();
print(data)`;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

              }}
=======
>>>>>>>               }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              responseExamples={{
              codeExamples={{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/jobs/job_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
========
response = requests.get (
    f'https://api.ziontechgroup.com / v1 / jobs/{job_id}',
    headers = headers);
data = response.json ();
print (data)`,
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
              }}
              response_examples={{
>>>>>>>                 success: `{
  "data": {
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
    "id": "job_abc123",
    "title": "Senior React Developer",
    "description": "We need an experienced React developer...",
    "category": "development",
    "skills": ["react", "typescript", "node && node.js"],
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              }}
              responseExamples={{
                success: `{
  "data": {
    "id": "job_abc123"
    "title": "Senior React Developer"
    "description": "We need an experienced React developer..."
    "category": "development"
    "skills": ["react", "typescript", "node.js"]
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    "budget": {
      "min": 5000
      "max": 10000
      "currency": "USD"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

}`;
              }}
            />

            <EndpointSection
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
}`,
              }}
            />
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    },
    "status": "active",
    "client_id": "user_xyz789",
    "created_at": "2025-05-15T10:30:00Z",
    "deadline": "2025-06-30T23:59:59Z",
    "application_count": 12
  }
}`,
              }}
            />
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}`;
              }}
            />
            
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>             <EndpointSection
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <EndpointSection
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              method="POST"
              endpoint="/api/jobs"
              description="Create a new job listing."
              note="Requires jobs:write scope"
              params={[
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

              ]}
              codeExamples={{
                curl: `curl -X POST "https://api.ziontechgroup.com/v1/jobs" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
=======
ursor/fix-website-loading-errors-and-merge-6662
========
    "budget": {
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
}`
              }}
            />;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
            <EndpointSection
              method='POST'
              endpoint='/api/jobs'
              description='Create a new job listing.'
              note='Requires jobs:write scope'
              params={[
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
            />;
            <EndpointSection;
              method='POST';
              endpoint='/api / jobs';
              description='Create a new job listing.';
              note='Requires jobs:write scope';
              params={[;
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx

>>>>>>>                 {
========
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
=======
                {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
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
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                {
                  name: 'deadline'
                  type: 'string'
                  description: 'Job deadline (ISO date string)'
                }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>               ]}

========
              ]}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
              code_examples={{
                curl: `curl -X POST "https://api.ziontechgroup.com / v1 / jobs" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json" \\;
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  -d '{

========
  -d '{
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
    "title": "Senior React Developer",
    "description": "We need an experienced React developer...",
    "category": "development",
    "skills": ["react", "typescript", "node && node.js"],
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx

=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                { name: "title", type: "string", description: "Job title", required: true },
                { name: "description", type: "string", description: "Detailed job description", required: true },
                { name: "category", type: "string", description: "Job category", required: true },
                { name: "skills", type: "string[]", description: "Required skills", required: true },
                { name: "budget.min", type: "number", description: "Minimum budget" },
                { name: "budget.max", type: "number", description: "Maximum budget" },
                { name: "budget.currency", type: "string", description: "Currency code (default: USD)" },
                { name: "deadline", type: "string", description: "Job deadline (ISO date string)" }
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'
  }
  body: JSON.stringify({
    title: 'Senior React Developer'
    description: 'We need an experienced React developer...'
    category: 'development'
    skills: ['react', 'typescript', 'node.js']
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Senior React Developer',
    description: 'We need an experienced React developer...',
    category: 'development',
    skills: ['reacttypescriptnode.js'],
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    budget: {
      min: 5000
      max: 10000
      currency: 'USD'
    }
    deadline: '2025-06-30T23:59:59Z'
  })
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
})
const data = await response.json()
logInfo(data);`
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
})
const data = await response.json()
logInfo(data);`
});
const data = await response.json();
logInfo(data);`,
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}),

const data = await response.json(),
logInfo(data),`,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>                 python: `import requests
import json
headers = {
    'Authorization': 'Bearer YOUR_API_KEY'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                python: `import requests
import json
headers = {

<<<<<<< HEAD
    'Content-Type': 'application/json'
}`
=======
    'Authorization': 'Bearer YOUR_API_KEY',

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>     'Content-Type': 'application/json'


========
    "budget": {
  }'`,
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/jobs', {
      "min": 5000,
      "max": 10000,
      "currency": "USD";
    },
    "deadline": "2025 - 06 - 30T23:59:59Z";
  }'`,
                javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / jobs', {
  method: 'POST',
  headers: {
  },
  body: JSON && JSON.stringify({
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content - Type': 'application / json';
  },
  body: JSON.stringify ({
    title: 'Senior React Developer',
    description: 'We need an experienced React developer...',
    category: 'development',
    skills: ['react', 'typescript', 'node && node.js'],
    budget: {
const data = await response && response.json()
logInfo(data)`,
                python: `import requests
import json
headers = {
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
}` 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}'"
}/> </TabsContent> <TabsContent value=" quotes"className=" space-y-6"> <EndpointSectionresponse = requests && requests.post ('https: //api && api.ziontechgroup.com/v1/quotes'
headers=headers
data=json && json.dumps (payload) ) data = response && response.json () print (data) ` 
response = requests && requests.post(
    'https://api && api.ziontechgroup.com/v1/jobs',
    headers=headers,
    data=json && json.dumps(payload)
)
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx
data = response.json()
<<<<<<< HEAD

=======
print(data)`
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                python: `import requests
import json
headers = {
    'Authorization': 'Bearer YOUR_API_KEY'
    'Authorization': 'Bearer YOUR_API_KEY',
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
data = response.json()
print(data)`
print(data)`,
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

              }}
=======
>>>>>>>               }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              responseExamples={{
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
========
data = response && response.json()
print(data)`,
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
              }}
              response_examples={{
>>>>>>>                 success: `{
  "data": {
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
    "id": "job_def456",
    "title": "Senior React Developer",
    "description": "We need an experienced React developer...",
    "category": "development",
    "skills": ["react", "typescript", "node && node.js"],
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              }}
              responseExamples={{
                success: `{
  "data": {
    "id": "job_def456"
    "title": "Senior React Developer"
    "description": "We need an experienced React developer..."
    "category": "development"
    "skills": ["react", "typescript", "node.js"]
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    "budget": {
      "min": 5000
      "max": 10000
      "currency": "USD"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    },
    "status": "new",
    "client_id": "user_xyz789",
    "created_at": "2025-05-16T14:22:10Z",
    "deadline": "2025-06-30T23:59:59Z"
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}`,
              }}
            />
          </TabsContent>
          <TabsContent value='talent' className='space-y-6'>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}`;
              }}
            />
          </TabsContent>
          
          <TabsContent value="talent" className="space-y-6">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

            <EndpointSection
=======
>>>>>>>             <EndpointSection
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <EndpointSection
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              method="GET"
              endpoint="/api/talent"
              description="List talent profiles with optional filtering."
              note=""
              params={[
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
ursor/fix-website-loading-errors-and-merge-6662
========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
            <EndpointSection
              method='GET'
              endpoint='/api/talent'
              description='List talent profiles with optional filtering.'
              note=''
              params={[
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
            />;
          </TabsContent>;
          <TabsContent value='talent' className='space - y-6'>;
            <EndpointSection;
              method='GET';
              endpoint='/api / talent';
              description='List talent profiles with optional filtering.';
              note='';
              params={[;
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx

>>>>>>>                 {
========
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
=======
                {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  name: 'page'
                  type: 'integer'
                  description: 'Page number for pagination (default: 1)'
                }
                {
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
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
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                {
                  name: 'availability'
                  type: 'string'
                  description: 'Filter by availability status'
                }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              ]}
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" },
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },
                { name: "skills", type: "string[]", description: "Filter by skills (comma-separated)" },
                { name: "availability", type: "string", description: "Filter by availability status" }
              ]}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              codeExamples={{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/talent?skills=react,typescript" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/talent?skills=react,typescript', {
  method: 'GET'
  headers: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                python: `import requests
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'
  }
})
const data = await response.json()
logInfo(data);`
<<<<<<< HEAD
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
              ]}

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
  -H "Content-Type: application/json"`,
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/talent?skills=react,typescript', {
              code_examples = {{
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / talent?skills = react, typescript" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json"`,
                javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / talent?skills = react, typescript', {
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
  method: 'GET',
  headers: {
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx

const data = await response && response.json()
logInfo(data)`,

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});
const data = await response.json();
logInfo(data);`,
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>                 python: `import requests
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
headers = {
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'

========
const data = await response && response.json()
logInfo(data)`,
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                python: `import requests
headers = {
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
response = requests && requests.get(
    'https://api && api.ziontechgroup.com/v1/talent',
    params={'skills': 'react,typescript'},
    headers=headers
)
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx
data = response.json()
<<<<<<< HEAD

=======
print(data)`
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
ursor/fix-website-loading-errors-and-merge-6662
========
data = response && response.json()
print(data)`,
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content - Type': 'application / json';
>>>>>>>   }
});
const data = await response.json ();
log_info (data);`,
                python: `import requests;
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx

=======
response = requests.get(
    'https://api.ziontechgroup.com/v1/talent'
    params={'skills': 'react,typescript'}
    headers=headers
)
data = response.json()
print(data)`
print(data)`,
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }
}),;
const data = await response.json(),;
logInfo(data),`,;
                python: `import requests;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

              }}
=======
>>>>>>>               }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              responseExamples={{
ursor/fix-website-loading-errors-and-merge-6662
========
headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content - Type': 'application / json';
response = requests.get (
    'https://api.ziontechgroup.com / v1 / talent',
    params={'skills': 'react, typescript'},
    headers = headers);
data = response.json ();
print (data)`,
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
              }}
              response_examples={{
>>>>>>>                 success: `{
  "data": [;
    {
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              }}
              responseExamples={{
                success: `{
  "data": [
    {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      "id": "talent_abc123"
      "display_name": "Jane Smith"
      "headline": "Senior Frontend Developer"
      "skills": ["react", "typescript", "javascript"]
      "availability": "available"
      "average_rating": 4.8
      "rating_count": 15
    }
    // More talent profiles...
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
  ]
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  ]
  ],
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  "meta": {
    "total": 28
    "page": 1
    "limit": 20
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
}`
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              }}

            />;


========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}`
}`,
              }}
            />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <EndpointSection
              method='GET'
              endpoint='/api/talent/:id'
              description='Get detailed information about a specific talent profile.'
              note=''
              params={[
<<<<<<< HEAD
            />;
            <EndpointSection;
              method='GET';
              endpoint='/api / talent/:id';
              description='Get detailed information about a specific talent profile.';
              note='';
              params={[;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                {
                  name: 'id'
                  type: 'string'
                  description: 'The talent ID'
                  required: true
                },              ]}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              codeExamples={{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/talent/talent_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
                javascript: `const talentId = 'talent_abc123'
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              codeExamples={{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/talent/talent_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
<<<<<<< HEAD
<<<<<<< HEAD

const response = await fetch(\`https://api.ziontechgroup.com/v1/talent/\${talentId}\`, {
  method: 'GET'
  headers: {

=======
>>>>>>>               codeExamples={{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/talent/talent_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
                javascript: `const talentId = 'talent_abc123',
})
const data = await response.json()
logInfo(data);`
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
  -H "Content-Type: application/json"`,
                javascript: `const talentId = 'talent_abc123'
const response = await fetch(\`https://api && api.ziontechgroup.com/v1/talent/\${talentId}\`, {
              code_examples={{
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / talent / talent_abc123" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json"`,
                javascript: `const talent_id = 'talent_abc123';
const response = await fetch (\`https://api.ziontechgroup.com / v1 / talent/\${talent_id}\`, {
  method: 'GET',
  headers: {
const data = await response && response.json()
logInfo(data)`,
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                python: `import requests
headers = {
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'
talent_id = 'talent_abc123'
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
response = requests.get(
    f'https://api.ziontechgroup.com/v1/talent/{talent_id}'
    headers=headers
)
data = response.json()
print(data)`
              }}
              responseExamples = {{
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                javascript: `const talentId = 'talent_abc123',
const response = await fetch(\`https://api.ziontechgroup.com/v1/talent/\${talentId}\`, {
  method: 'GET',
  headers: {
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>                 success: `{
              codeExamples={{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/talent/talent_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                success: `{
>>>>>>>   "data": {

========
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
                success: `{
  "data": {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
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
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        "id": "proj_123"
        "title": "E-commerce Platform"
        "description": "Built a modern e-commerce platform using React..."
        "technologies": ["react", "redux", "node.js"]
        "image_url": "https://example.com/portfolio/123.jpg"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      ,}
    ]
    "certifications": [
      {
        "name": "AWS Certified Developer"
        "issuing_organization": "Amazon Web Services"
        "issue_date": "2024-01-15"
<<<<<<< HEAD
========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      }
    ]
  }
}`
              }}
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx
            />
          </TabsContent>
          <TabsContent value='quotes' className='space-y-6'>
=======
            />
          </TabsContent>
          <TabsContent value='quotes' className='space-y-6'>
      }
    ],
    "certifications": [
      {
        "name": "AWS Certified Developer",
        "issuing_organization": "Amazon Web Services",
        "issue_date": "2024-01-15"
      }
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    ]
  }
}`,
              }}
            />
          </TabsContent>
          <TabsContent value='quotes' className='space-y-6'>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    ];
  }
}`;
              }}
            />
          </TabsContent>
          
          <TabsContent value="quotes" className="space-y-6">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

            <EndpointSection
=======
>>>>>>>             <EndpointSection
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <EndpointSection
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              method="POST"
              endpoint="/api/quotes"
              description="Create a quote request for a talent."
              note="Requires quotes:write scope"
              params={[
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

              ]}
              codeExamples={{
                curl: `curl -X POST "https://api.ziontechgroup.com/v1/quotes" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
=======
ursor/fix-website-loading-errors-and-merge-6662
========
            />;
          </TabsContent>;
          <TabsContent value='quotes' className='space-y-6'>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
            <EndpointSection
              method='POST'
              endpoint='/api/quotes'
              description='Create a quote request for a talent.'
              note='Requires quotes:write scope'
              params={[
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
            />;
          </TabsContent>;
          <TabsContent value='quotes' className='space - y-6'>;
            <EndpointSection;
              method='POST';
              endpoint='/api / quotes';
              description='Create a quote request for a talent.';
              note='Requires quotes:write scope';
              params={[;
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx

>>>>>>>                 {
========
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
=======
                {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>               ]}

========
              ]}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
              code_examples={{
                curl: `curl -X POST "https://api.ziontechgroup.com / v1 / quotes" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json" \\;
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  -d '{

========
  -d '{
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
    "talent_id": "talent_abc123",
    "project_name": "E - commerce Website Redesign",
    "project_summary": "Redesign our outdated e - commerce website with modern UI",
    "project_description": "Our current website is 5 years old and needs a complete overhaul...",
    "timeline": "2 - 3 months",
    "budget_min": 8000,
    "budget_max": 12000,
    "requester_name": "John Doe",
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx

  headers: {
<<<<<<< HEAD

=======
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
              responseExamples = {{
<<<<<<< HEAD
<<<<<<< HEAD
});
const data = await response.json();
logInfo(data);`,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}),

const data = await response.json(),
logInfo(data),`,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                python: `import requests
import json

headers = {
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>                 python: `import requests
import json

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
payload = {
========
    "requester_email": "john@example.com";
  }'`,
                javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / quotes', {
  method: 'POST',
  headers: {
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
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content - Type': 'application / json';
payload = {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
payload = {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    'talent_id': 'talent_abc123',
    'project_name': 'E-commerce Website Redesign',
    'project_summary': 'Redesign our outdated e-commerce website with modern UI',
    'project_description': 'Our current website is 5 years old and needs a complete overhaul...',
    'timeline': '2-3 months',
    'budget_min': 8000,
    'budget_max': 12000,
    'requester_name': 'John Doe',
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    'requester_email': 'john@example.com'
response = requests.post(
    'https://api.ziontechgroup.com/v1/quotes',
    headers=headers,
    data=json.dumps(payload)
)

data = response.json()
print(data)`,
              }}
              responseExamples = {{
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

=======
>>>>>>>                 success: `{
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                success: `{
>>>>>>>   "data": {

========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
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
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx
<<<<<<< HEAD

            <EndpointSection
=======
}`,              }}
            />
>>>>>>>             <EndpointSection
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              method="GET"
              endpoint="/api/quotes"
ursor/fix-website-loading-errors-and-merge-6662
            <EndpointSection
              method='GET'
              endpoint='/api/quotes'
>>>>>>>               description="List quote requests that you've created."
              note=''
              params={[
<<<<<<< HEAD

=======
========
}`,              }}
            />;
            <EndpointSection;
              method='GET';
              endpoint='/api / quotes';
              description="List quote requests that you've created.";
              note='';
              params={[;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
}`,              }}
            />
}`;
              }}
            />
            
            <EndpointSection
              method="GET"
              endpoint="/api/quotes"
              description="List quote requests that you've created."
              note=""
              params={[
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                {
                  name: 'page'
                  type: 'integer'
                  description: 'Page number for pagination (default: 1)'
                }
                {
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              ]}
              codeExamples = {{
                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/quotes" \\
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" },
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },
                { name: "status", type: "string", description: "Filter by status (new, viewed, replied, archived)" }
              ]}
              codeExamples={{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/quotes" \\
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/quotes', {
  method: 'GET'
  headers: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                python: `import requests
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'
  }
})
const data = await response.json()
logInfo(data);`
<<<<<<< HEAD
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>                 python: `import requests
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
headers = {
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'

========
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
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});
const data = await response.json();
logInfo(data);`,
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                python: `import requests
headers = {
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
response = requests && requests.get(
    'https://api && api.ziontechgroup.com/v1/quotes',
    headers=headers
)
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx
data = response.json()
<<<<<<< HEAD

=======
print(data)`
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
ursor/fix-website-loading-errors-and-merge-6662
========
data = response && response.json()
print(data)`,
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content - Type': 'application / json';
>>>>>>>   }
});
const data = await response.json ();
log_info (data);`,
                python: `import requests;
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx

=======
response = requests.get(
    'https://api.ziontechgroup.com/v1/quotes'
    headers=headers
)
data = response.json()
print(data)`
print(data)`,
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }
}),;
const data = await response.json(),;
logInfo(data),`,;
                python: `import requests;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

              }}
=======
>>>>>>>               }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              responseExamples={{
ursor/fix-website-loading-errors-and-merge-6662
========
headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content - Type': 'application / json';
response = requests.get (
    'https://api.ziontechgroup.com / v1 / quotes',
    headers = headers);
data = response.json ();
print (data)`,
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
              }}
              response_examples={{
>>>>>>>                 success: `{
  "data": [;
    {
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              }}
              responseExamples={{
                success: `{
  "data": [
    {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
  ]
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  ]
  ],
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  "meta": {
    "total": 5
    "page": 1
    "limit": 20
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
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
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
  }
<<<<<<< HEAD

=======
}`
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              }}
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx
=======
  }
}`
}`,
              }}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

}`;
=======
ursor/fix-website-loading-errors-and-merge-6662
              }}

>>>>>>> }`;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}`;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return crypto.timingSafeEqual(
    Buffer.from(signature)
    Buffer.from(expectedSignature)
  )
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>   return crypto.timingSafeEqual(
    Buffer.from(signature)
    Buffer.from(expectedSignature)
  )
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                 <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="py-2 px-4 text-left">Event Type</th>
                    <th className="py-2 px-4 text-left">Description</th>
ursor/fix-website-loading-errors-and-merge-6662
  return crypto.timingSafeEqual(
    Buffer.from(signature)
    Buffer.from(expectedSignature)
  )


=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                <thead>
                  <tr className='border-b border-zinc-800'>
                    <th className='py-2 px-4 text-left'>Event Type</th>
                    <th className='py-2 px-4 text-left'>Description</th>
>>>>>>>                   </tr>
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  </tr>
                </tbody>
              </table>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <CodeBlock
                code = {`{
  "event_type": "new_application"
  "event_id": "evt_abc123def456"
  "timestamp": "2025-05-16T15:30:00Z"
<<<<<<< HEAD
<<<<<<< HEAD
              
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <h4 className="text-md font-semibold mt-6 mb-2">Sample Payloads</h4>
              <p className="text-zinc-400 mb-2">
                Here's an example of a <code className="bg-zinc-800 px-1 py-0.5 rounded">new_application</code> webhook payload:
              </p>
<<<<<<< HEAD
<<<<<<< HEAD

              <CodeBlock
=======
              
>>>>>>>               <CodeBlock
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
              
              <CodeBlock
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                code={`{
  "event_type": "new_application",
  "event_id": "evt_abc123def456",
  "timestamp": "2025-05-16T15:30:00Z",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>   "data": {
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  "data": {
>>>>>>>     "application_id": "app_123456"
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  "data": {
    "application_id": "app_123456"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    "job_id": "job_abc123"
    "talent_id": "talent_xyz789"
    "applied_at": "2025-05-16T15:28:30Z"
    "status": "new"
    "match_score": 85
<<<<<<< HEAD
  ,}
}`}
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx
<<<<<<< HEAD

                <thead>
=======
=======
  }
}`}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
              <table className='w-full border-collapse mt-4'>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                 <thead>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  <tr className="border-b border-zinc-800">
                    <th className="py-2 px-4 text-left">Status Code</th>
                    <th className="py-2 px-4 text-left">Description</th>
ursor/fix-website-loading-errors-and-merge-6662
                <thead>
                  <tr className='border-b border-zinc-800'>
                    <th className='py-2 px-4 text-left'>Status Code</th>
                    <th className='py-2 px-4 text-left'>Description</th>
>>>>>>>                   </tr>
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
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  </tr>
                </tbody>
              </table>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

              <CodeBlock
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <h4 className='text-md font-semibold mt-6 mb-2'>
                Error Response Format
              </h4>
              <p className='text-zinc-400 mb-2'>
                Error responses include a consistent JSON object with the
                following format:
              </p>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>               <CodeBlock
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                code={`{
ursor/fix-website-loading-errors-and-merge-6662
              <CodeBlock
                code = {`{
>>>>>>>   "error": {
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              
              <h4 className="text-md font-semibold mt-6 mb-2">Error Response Format</h4>
              <p className="text-zinc-400 mb-2">
                Error responses include a consistent JSON object with the following format:
              </p>
              
              <CodeBlock
                code={`{
  "error": {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    "code": "invalid_request"
    "message": "The request was invalid"
    "details": [
      {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
        "field": "project_name"
        "message": "Project name is required"
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
        "field": "project_name"
        "message": "Project name is required"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
========
                language='json'
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
              />;
              <h4 className='text-md font-semibold mt-6 mb-2'>Rate Limiting</h4>;
              <p className='text-zinc-400 mb-4'>;
                The Zion API implements rate limiting to protect our;
                infrastructure and ensure fair usage. Rate limits are applied on;
                a per-API key basis. If you exceed the rate limits, you will;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
                receive a{' '}
                <code className='bg-zinc-800 px-1 py-0 && 0.5 rounded'>;
                  429 Too Many Requests;
                </code>{' '}
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx
=======
                receive a{' '}
                <code className='bg-zinc-800 px-1 py-0.5 rounded'>
                  429 Too Many Requests
                </code>{' '}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
        "field": "project_name",
        "message": "Project name is required"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
        "field": "project_name",
        "message": "Project name is required"
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
        "field": "project_name",
        "message": "Project name is required"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

              </ul>
=======
>>>>>>>               </ul>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              </ul>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> // Helper component for API endpoint documentation
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
// Helper component for API endpoint documentation
unction EndpointSection({
=======
<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}

// Helper component for API endpoint documentation
function EndpointSection({
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  method
  endpoint
  description
  note
  params = []
  codeExamples
  responseExamples
}: EndpointSectionProps) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
========
                response.;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
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
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
                  </code>;
                  : Number of requests allowed in the time window;
                </li>;
                <li>;
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx

                  <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                    X - RateLimit - Remaining;

========
                  <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                    X - RateLimit - Remaining;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
                  </code>;
                  : Number of requests remaining in the current window;
                </li>;
                <li>;
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx

                  <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                    X - RateLimit - Reset;

========
                  <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                    X - RateLimit - Reset;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
                  </code>;
                  : Unix timestamp when the rate limit resets;
                </li>;
=======

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
  return (
    <Card className=&quot;bg-zinc-900 border-zinc-800 text-white&quot;>

import CodeBlock from "./CodeBlock";

interface EndpointParam {name: string,
  type: string,
  description: string,
  required?: boolean}

interface EndpointSectionProps {method: string,
  endpoint: string,
  description: string,
  note?: string;
  params?: EndpointParam[];
  codeExamples?: Record<string, string>;
  responseExamples?: { success: string}
}

export function ApiDocumentation() {return (
    <Card className="bg-zinc-900 border-zinc-800 text-white">
      <CardHeader>
        <CardTitle className=&quot;text-xl flex items-center&quot;>
          <BookOpen className=&quot;mr-2&quot; size={20} /> API Documentation
        </CardTitle>
        <CardDescription className=&quot;text-zinc-400&quot;>
          Reference documentation for integrating with the Zion Marketplace API.
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <Alert className=&quot;bg-blue-900/30 border-blue-800 mb-6&quot;>
          <Terminal className=&quot;h-4 w-4&quot; />
          <AlertDescription>
            Make sure to include your API key in all requests as a Bearer token in the Authorization header.
          </AlertDescription>
        </Alert>

        <Tabs defaultValue=&quot;jobs&quot; className=&quot;space-y-4&quot;>
          <TabsList className=&quot;bg-zinc-800 border-zinc-700&quot;>
            <TabsTrigger value=&quot;jobs&quot;>Jobs</TabsTrigger>
            <TabsTrigger value=&quot;talent&quot;>Talent</TabsTrigger>
            <TabsTrigger value=&quot;quotes&quot;>Quotes</TabsTrigger>
            <TabsTrigger value=&quot;webhooks&quot;>Webhooks</TabsTrigger>
            <TabsTrigger value=&quot;errors&quot;>Errors</TabsTrigger>
          </TabsList>
          
          <TabsContent value=&quot;jobs&quot; className=&quot;space-y-6&quot;>
            <EndpointSection,
method=&quot;GET&quot;
              endpoint=&quot;/api/jobs&quot;
              description=&quot;List all available jobs with optional filtering.&quot;
              note="&quot;
              params={[
                { name: &quot;page&quot;, type: &quot;integer&quot;, description: &quot;Page number for pagination (default: 1)&quot },
                { name: &quot;limit&quot;, type: &quot;integer&quot;, description: &quot;Number of results per page (default: 20, max: 100)&quot },
                { name: &quot;category&quot;, type: &quot;string&quot;, description: &quot;Filter by job category&quot },
                { name: &quot;skills&quot;, type: &quot;string[]&quot;, description: &quot;Filter by required skills (comma-separated)&quot },
                { name: &quot;status&quot;, type: &quot;string&quot;, description: &quot;Filter by job status (new, active, closed)&quot }
              ]}
              codeExamples={{
                curl: `curl -X GET &quot;https://api.ziontechgroup.com/v1/jobs?limit=10&category=development&quot; \\
  -H &quot;Authorization: Bearer YOURAPI_KEY&quot; \\
  -H &quot;Content-Type: application/json&quot;`,
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/jobs?limit=10&category=development', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOURAPI_KEYContent-Type': 'application/json'
  }
}),

const data = await response.json(),
logInfo(data),`,
                python: `import requests,
headers = {
    'Authorization': 'Bearer YOURAPI_KEYContent-Type': 'application/json'
}

response = requests.get(
    'https: //api.ziontechgroup.com/v1/jobs',
    params={'limit': 10, 'category': 'development'},    headers=headers
)

data = response.json()
print(data)`
              }}
              responseExamples={_{
                success: `{
  &quot;data&quot;: [
    {
      &quot;id&quot;: &quot;jobabc123&quot;,
      &quot;title&quot;: &quot;Senior React Developer&quot;,
      &quot;description&quot;: &quot;We need an experienced React developer...&quot;,
      &quot;category&quot;: &quot;development&quot;,
      &quot;skills&quot;: [&quot;react&quot;, &quot;typescript&quot;, &quot;node.js&quot],
      &quot;budget&quot;: {
        &quot;min&quot;: 5000,
        &quot;max&quot;: 10000,
        &quot;currency&quot;: &quot;USD&quot
      },
      &quot;status&quot;: &quot;active&quot;,
      &quot;clientid&quot;: &quot;userxyz789&quot;,
      &quot;createdat&quot;: &quot;2025-05-15T10:30:00Z&quot
    },
    // More jobs...
  ],
  &quot;meta&quot;: {
    &quot;total&quot;: 42,
    &quot;page&quot;: 1,
    &quot;limit&quot;: 10
  }}`
              }}
            />
            
            <EndpointSection,
method=&quot;GET&quot;
              endpoint=&quot;/api/jobs/:id&quot;
              description=&quot;Get detailed information about a specific job.&quot;
              note="&quot;
              params={[
                { name: &quot;id&quot;, type: &quot;string&quot;, description: &quot;The job ID&quot;, required: true }
              ]}
              codeExamples={{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/jobs/jobabc123" \\
  -H "Authorization: Bearer YOURAPI_KEY" \\
  -H "Content-Type: application/json"`,
                javascript: `const jobId = 'jobabc123',const response = await fetch(\`https://api.ziontechgroup.com/v1/jobs/\${jobId}\`, {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOURAPI_KEYContent-Type': 'application/json'
  }
}),

const data = await response.json(),
logInfo(data),`,
                python: `import requests,
headers = {
    'Authorization': 'Bearer YOURAPI_KEYContent-Type': 'application/json'
}
              method="GET"
              endpoint="/api/jobs/:id"
              description="Get detailed information about a specific job."
              note=""
              params={_[
                { name: "id", type: "string", description: "The job ID", required: true}
              ]}
              codeExamples={_{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/jobs/jobabc123" \\
  -H "Authorization: Bearer YOURAPI_KEY" \\
  -H "Content-Type: application/json"`, javascript: `const jobId = 'jobabc123';
const response = await fetch(\`https://api.ziontechgroup.com/v1/jobs/\${jobId}\`, {method: 'GET', headers: {
    'Authorization': 'Bearer YOURAPI_KEY', _'Content-Type': 'application/json'}
});

const data = await response.json();
logInfo(data);`,
                python: `import requests,
headers = {_'Authorization': 'Bearer YOURAPI_KEY', _'Content-Type': 'application/json'}

jobid = 'jobabc123'
response = requests.get(
    f'https://api.ziontechgroup.com/v1/jobs/{job_id}',
    headers=headers
)

data = response.json()
print(data)`
              }}
              responseExamples={_{
                success: `{
  &quot;data&quot;: {
    &quot;id&quot;: &quot;jobabc123&quot;,
    &quot;title&quot;: &quot;Senior React Developer&quot;,
    &quot;description&quot;: &quot;We need an experienced React developer...&quot;,
    &quot;category&quot;: &quot;development&quot;,
    &quot;skills&quot;: [&quot;react&quot;, &quot;typescript&quot;, &quot;node.js&quot],
    &quot;budget&quot;: {
      &quot;min&quot;: 5000,
      &quot;max&quot;: 10000,
      &quot;currency&quot;: &quot;USD&quot
    },
    &quot;status&quot;: &quot;active&quot;,
    &quot;clientid&quot;: &quot;userxyz789&quot;,
    &quot;createdat&quot;: &quot;2025-05-15T10:30:00Z&quot;,
    &quot;deadline&quot;: &quot;2025-06-30T23:59:59Z&quot;,
    &quot;applicationcount&quot;: 12  }
}`
              }}
            />
            
            <EndpointSection,
method=&quot;POST&quot;
              endpoint=&quot;/api/jobs&quot;
              description=&quot;Create a new job listing.&quot;
              note=&quot;Requires jobs:write scope&quot;
              params={[
                { name: &quot;title&quot;, type: &quot;string&quot;, description: &quot;Job title&quot;, required: true },
                { name: &quot;description&quot;, type: &quot;string&quot;, description: &quot;Detailed job description&quot;, required: true },
                { name: &quot;category&quot;, type: &quot;string&quot;, description: &quot;Job category&quot;, required: true },
                { name: &quot;skills&quot;, type: &quot;string[]&quot;, description: &quot;Required skills&quot;, required: true },
                { name: &quot;budget.min&quot;, type: &quot;number&quot;, description: &quot;Minimum budget&quot },
                { name: &quot;budget.max&quot;, type: &quot;number&quot;, description: &quot;Maximum budget&quot },
                { name: &quot;budget.currency&quot;, type: &quot;string&quot;, description: &quot;Currency code (default: USD)&quot },
                { name: &quot;deadline&quot;, type: &quot;string&quot;, description: &quot;Job deadline (ISO date string)&quot }
              ]}
              codeExamples={{
                curl: `curl -X POST &quot;https://api.ziontechgroup.com/v1/jobs&quot; \\
  -H &quot;Authorization: Bearer YOURAPI_KEY&quot; \\
  -H &quot;Content-Type: application/json&quot; \\
  -d '{
    &quot;title&quot;: &quot;Senior React Developer&quot;,
    &quot;description&quot;: &quot;We need an experienced React developer...&quot;,
    &quot;category&quot;: &quot;development&quot;,
    &quot;skills&quot;: [&quot;react&quot;, &quot;typescript&quot;, &quot;node.js&quot],
    &quot;budget&quot;: {
      &quot;min&quot;: 5000,
      &quot;max&quot;: 10000,
      &quot;currency&quot;: &quot;USD&quot
    },
    &quot;deadline&quot;: &quot;2025-06-30T23:59:59Z&quot
  }'`,
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/jobs', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOURAPI_KEYContent-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Senior React Developer',
    description: 'We need an experienced React developer...',
    category: 'development',
    skills: ['reacttypescriptnode.js'],
    budget: {
      min: 5000,
      max: 10000,
      currency: 'USD'
    },    deadline: '2025-06-30T23:59:59Z'
  })
}),

const data = await response.json(),
logInfo(data),`,
                python: `import requests,
import json,
headers = {
    'Authorization': 'Bearer YOURAPI_KEYContent-Type': 'application/json'
}

payload = {
    'title': 'Senior React Developerdescription': 'We need an experienced React developer...category': 'developmentskills': ['reacttypescriptnode.js'],
    'budget': {
        'min': 5000,
        'max': 10000,
        'currency': 'USD'
    },    'deadline': '2025-06-30T23:59:59Z'
}

response = requests.post(
    'https: //api.ziontechgroup.com/v1/jobs',
    headers=headers,
    data=json.dumps(payload)
)

data = response.json()
print(data)`
              }}
              responseExamples={_{
                success: `{
  &quot;data&quot;: {
    &quot;id&quot;: &quot;jobdef456&quot;,
    &quot;title&quot;: &quot;Senior React Developer&quot;,
    &quot;description&quot;: &quot;We need an experienced React developer...&quot;,
    &quot;category&quot;: &quot;development&quot;,
    &quot;skills&quot;: [&quot;react&quot;, &quot;typescript&quot;, &quot;node.js&quot],
    &quot;budget&quot;: {
      &quot;min&quot;: 5000,
      &quot;max&quot;: 10000,
      &quot;currency&quot;: &quot;USD&quot
    },
    &quot;status&quot;: &quot;new&quot;,
    &quot;clientid&quot;: &quot;userxyz789&quot;,
    &quot;createdat&quot;: &quot;2025-05-16T14:22:10Z&quot;,
    &quot;deadline&quot;: &quot;2025-06-30T23:59:59Z&quot  }
}`
              }}
            />
          </TabsContent>
          
          <TabsContent value=&quot;talent&quot; className=&quot;space-y-6&quot;>
            <EndpointSection,
method=&quot;GET&quot;
              endpoint=&quot;/api/talent&quot;
              description=&quot;List talent profiles with optional filtering.&quot;
              note="&quot;
              params={[
                { name: &quot;page&quot;, type: &quot;integer&quot;, description: &quot;Page number for pagination (default: 1)&quot },
                { name: &quot;limit&quot;, type: &quot;integer&quot;, description: &quot;Number of results per page (default: 20, max: 100)&quot },
                { name: &quot;skills&quot;, type: &quot;string[]&quot;, description: &quot;Filter by skills (comma-separated)&quot },
                { name: &quot;availability&quot;, type: &quot;string&quot;, description: &quot;Filter by availability status&quot }
              ]}
              codeExamples={{
                curl: `curl -X GET &quot;https://api.ziontechgroup.com/v1/talent?skills=react,typescript&quot; \\
  -H &quot;Authorization: Bearer YOURAPI_KEY&quot; \\
  -H &quot;Content-Type: application/json&quot;`,
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/talent?skills=react,typescript', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOURAPI_KEYContent-Type': 'application/json'
  }
}),

const data = await response.json(),
logInfo(data),`,
                python: `import requests,
headers = {
    'Authorization': 'Bearer YOURAPI_KEYContent-Type': 'application/json'
}

response = requests.get(
    'https: //api.ziontechgroup.com/v1/talent',
    params={'skills': 'react,typescript'},    headers=headers
)

data = response.json()
print(data)`
              }}
              responseExamples={_{
                success: `{
  &quot;data&quot;: [
    {
      &quot;id&quot;: &quot;talentabc123&quot;,
      &quot;displayname&quot;: &quot;Jane Smith&quot;,
      &quot;headline&quot;: &quot;Senior Frontend Developer&quot;,
      &quot;skills&quot;: [&quot;react&quot;, &quot;typescript&quot;, &quot;javascript&quot],
      &quot;availability&quot;: &quot;available&quot;,
      &quot;averagerating&quot;: 4.8,
      &quot;ratingcount&quot;: 15
    },
    // More talent profiles...
  ],
  &quot;meta&quot;: {
    &quot;total&quot;: 28,
    &quot;page&quot;: 1,
    &quot;limit&quot;: 20
  }}`
              }}
            />
            
            <EndpointSection,
method=&quot;GET&quot;
              endpoint=&quot;/api/talent/:id&quot;
              description=&quot;Get detailed information about a specific talent profile.&quot;
              note="&quot;
              params={[
                { name: &quot;id&quot;, type: &quot;string&quot;, description: &quot;The talent ID&quot;, required: true }
              ]}
              codeExamples={{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/talent/talentabc123" \\
  -H "Authorization: Bearer YOURAPI_KEY" \\
  -H "Content-Type: application/json"`,
                javascript: `const talentId = 'talentabc123',const response = await fetch(\`https://api.ziontechgroup.com/v1/talent/\${talentId}\`, {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOURAPI_KEYContent-Type': 'application/json'
  }
}),

const data = await response.json(),
logInfo(data),`,
                python: `import requests,
headers = {
    'Authorization': 'Bearer YOURAPI_KEYContent-Type': 'application/json'
}
              method="GET"
              endpoint="/api/talent/:id"
              description="Get detailed information about a specific talent profile."
              note=""
              params={_[
                { name: "id", type: "string", description: "The talent ID", required: true}
              ]}
              codeExamples={_{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/talent/talentabc123" \\
  -H "Authorization: Bearer YOURAPI_KEY" \\
  -H "Content-Type: application/json"`, javascript: `const talentId = 'talentabc123';
const response = await fetch(\`https://api.ziontechgroup.com/v1/talent/\${talentId}\`, {method: 'GET', headers: {
    'Authorization': 'Bearer YOURAPI_KEY', _'Content-Type': 'application/json'}
});

const data = await response.json();
logInfo(data);`,
                python: `import requests,
headers = {_'Authorization': 'Bearer YOURAPI_KEY', _'Content-Type': 'application/json'}

talentid = 'talentabc123'
response = requests.get(
    f'https://api.ziontechgroup.com/v1/talent/{talent_id}',
    headers=headers
)

data = response.json()
print(data)`
              }}
              responseExamples={_{
                success: `{
  &quot;data&quot;: {
    &quot;id&quot;: &quot;talentabc123&quot;,
    &quot;displayname&quot;: &quot;Jane Smith&quot;,
    &quot;headline&quot;: &quot;Senior Frontend Developer&quot;,
    &quot;bio&quot;: &quot;10+ years of experience in frontend development...&quot;,
    &quot;skills&quot;: [&quot;react&quot;, &quot;typescript&quot;, &quot;javascript&quot;, &quot;css&quot;, &quot;html&quot],
    &quot;availability&quot;: &quot;available&quot;,
    &quot;averagerating&quot;: 4.8,
    &quot;ratingcount&quot;: 15,
    &quot;portfolio&quot;: [
      {
        &quot;id&quot;: &quot;proj123&quot;,
        &quot;title&quot;: &quot;E-commerce Platform&quot;,
        &quot;description&quot;: &quot;Built a modern e-commerce platform using React...&quot;,
        &quot;technologies&quot;: [&quot;react&quot;, &quot;redux&quot;, &quot;node.js&quot],
        &quot;imageurl&quot;: &quot;https://example.com/portfolio/123.jpg&quot
      }
    ],
    &quot;certifications&quot;: [
      {
        &quot;name&quot;: &quot;AWS Certified Developer&quot;,
        &quot;issuingorganization&quot;: &quot;Amazon Web Services&quot;,
        &quot;issuedate&quot;: &quot;2024-01-15&quot
      }    ]
  }
}`;
              }}
            />;
          </TabsContent>;
          ;
          <TabsContent value="quotes" className="space-y-6">;
            <EndpointSection;
              method="POST";
              endpoint="/api/quotes";
              description="Create a quote request for a talent.";
              note="Requires quotes:write scope";
              params={[;
                { name:"talent_id", type:"string", description:"ID of the talent to request a quote from", required:true },;
                { name:"project_name", type:"string", description:"Name of the project", required:true },;
                { name:"project_summary", type:"string", description:"Brief summary of the project", required:true },;
                { name:"project_description", type:"string", description:"Detailed project description" },;
                { name:"timeline", type:"string", description:"Expected timeline", required:true },;
                { name:"budget_min", type:"number", description:"Minimum budget" },;
                { name:"budget_max", type:"number", description:"Maximum budget" },;
                { name:"requester_name", type:"string", description:"Name of the requester", required:true },;
                { name:"requester_email", type:"string", description:"Email of the requester", required:true }
              ]}
              codeExamples={{;
                curl:`curl -X POST "https://api.ziontechgroup.com/v1/quotes" \\;
  -H "Authorization:Bearer YOUR_API_KEY" \\;
  -H "Content-Type:application/json" \\;
  -d '{;
    "talent_id":"talent_abc123",;
    "project_name":"E-commerce Website Redesign",;
    "project_summary":"Redesign our outdated e-commerce website with modern UI",;
    "project_description":"Our current website is 5 years old and needs a complete overhaul...",;
    "timeline":"2-3 months",;
    "budget_min":8000,;
    "budget_max":12000,;
    "requester_name":"John Doe",;
    "requester_email":"john@example.com";
  }'`,;
                javascript:`const response = await fetch('https://api.ziontechgroup.com/v1/quotes', {;
  method:'POST',;
  headers:{;
    'Authorization':'Bearer YOUR_API_KEYContent-Type':'application/json';
  },;
  body:JSON.stringify({;
    talent_id:'talent_abc123',;
    project_name:'E-commerce Website Redesign',;
    project_summary:'Redesign our outdated e-commerce website with modern UI',;
    project_description:'Our current website is 5 years old and needs a complete overhaul...',;
    timeline:'2-3 months',;
    budget_min:8000,;
    budget_max:12000,;
    requester_name:'John Doe',;
    requester_email:'john@example.com';
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
    'talent_id':'talent_abc123project_name':'E-commerce Website Redesignproject_summary':'Redesign our outdated e-commerce website with modern UIproject_description':'Our current website is 5 years old and needs a complete overhaul...timeline':'2-3 monthsbudget_min':8000,;
    'budget_max':12000,;
    'requester_name':'John Doerequester_email':'john@example.com';
}
;
response = requests.post(;
    'https://api.ziontechgroup.com/v1/quotes',;
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
    "id":"quote_def456",;
    "talent_id":"talent_abc123",;
    "requester_id":"user_xyz789",;
    "project_name":"E-commerce Website Redesign",;
    "project_summary":"Redesign our outdated e-commerce website with modern UI",;
    "project_description":"Our current website is 5 years old and needs a complete overhaul...",;
    "timeline":"2-3 months",;
    "budget_min":8000,;
    "budget_max":12000,;
    "budget_display":"$8,000 - $12,000",;
    "requester_name":"John Doe",;
    "requester_email":"john@example.com",;
    "status":"new",;
    "created_at":"2025-05-16T14:30:15Z";
  }
}`;
              }}
            />;
            ;
            <EndpointSection;
              method="GET";
              endpoint="/api/quotes";
              description="List quote requests that you've created.";
              note="";
              params={[;
                { name:"page", type:"integer", description:"Page number for pagination (default:1)" },;
                { name:"limit", type:"integer", description:"Number of results per page (default:20, max:100)" },;
                { name:"status", type:"string", description:"Filter by status (new, viewed, replied, archived)" }
              ]}
              codeExamples={{;
                curl:`curl -X GET "https://api.ziontechgroup.com/v1/quotes" \\;
  -H "Authorization:Bearer YOUR_API_KEY" \\;
  -H "Content-Type:application/json"`,;
                javascript:`const response = await fetch('https://api.ziontechgroup.com/v1/quotes', {;
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
    'https://api.ziontechgroup.com/v1/quotes',;
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
      "id":"quote_def456",;
      "talent_id":"talent_abc123",;
      "project_name":"E-commerce Website Redesign",;
      "project_summary":"Redesign our outdated e-commerce website with modern UI",;
      "budget_display":"$8,000 - $12,000",;
      "status":"new",;
      "created_at":"2025-05-16T14:30:15Z",;
      "viewed_at":null,;
      "replied_at":null;
    },;
    // More quotes...;
  ],;
  "meta":{;
    "total":5,;
    "page":1,;
    "limit":20;
  }
}`;
              }}
            />;
          </TabsContent>;
          ;
          <TabsContent value="webhooks" className="space-y-6">;
            <div className="prose prose-invert max-w-none">;
              <h3 className="text-lg font-semibold mb-2">Webhook Events</h3>;
              <p className="text-zinc-400 mb-4">;
                The Zion API can send webhook notifications when certain events occur in your account.;
                You can configure webhooks in the Webhooks tab of the Developer Dashboard.;
              </p>;
              ;
              <h4 className="text-md font-semibold mt-6 mb-2">Authentication</h4>;
              <p className="text-zinc-400 mb-4">;
                When you create a webhook, you can optionally provide a secret key.;
                If a secret is provided, each webhook request will include a signature in the;
                <code className="bg-zinc-800 px-1 py-0.5 rounded">X-Zion-Signature</code> header.;
                This signature is an HMAC SHA-256 hash of the request body using your webhook secret as the key.;
              </p>;
              ;
              <CodeBlock;
                code={`import crypto from 'crypto',;
;
// Function to verify webhook signature;
function verifyWebhookSignature(payload, signature, secret) {;
  const hmac = crypto.createHmac('sha256', secret),;
  const expectedSignature = hmac.update(payload).digest('hex'),;
  return crypto.timingSafeEqual(;
    Buffer.from(signature),;
    Buffer.from(expectedSignature);
  ),;
}
;
// Example usage in Express.js;
app.post('/webhook', express.raw({type:'application/json'}), (req, res) => {;
  const signature = req.headers['x-zion-signature'],;
  const payload = req.body.toString(),;
  const webhookSecret = process.env.WEBHOOK_SECRET,;
  ;
  if (!verifyWebhookSignature(payload, signature, webhookSecret)) {;
    return res.status(401).send('Invalid signature'),;
  }
  ;
  // Process the webhook event;
  const event = JSON.parse(payload),;
  logInfo('Received valid webhook:', { data:event }),;
  ;
  // Respond to acknowledge receipt;
  res.status(200).send('Webhook received'),;
}),`}
                language="javascript";
                showLineNumbers={true}
              />;
              ;
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
              ;
              <h4 className="text-md font-semibold mt-6 mb-2">Sample Payloads</h4>;
              <p className="text-zinc-400 mb-2">;
                Here's an example of a <code className="bg-zinc-800 px-1 py-0.5 rounded">new_application</code> webhook payload:;
              </p>;
              ;
              <CodeBlock;
                code={`{;
  "event_type":"new_application",;
  "event_id":"evt_abc123def456",;
  "timestamp":"2025-05-16T15:30:00Z",;
  "data":{;
    "application_id":"app_123456",;
    "job_id":"job_abc123",;
    "talent_id":"talent_xyz789",;
    "applied_at":"2025-05-16T15:28:30Z",;
    "status":"new",;
    "match_score":85;
  }
}`}
                language="json";
                showLineNumbers={true}
              />;
            </div>;
          </TabsContent>;
          ;
          <TabsContent value="errors" className="space-y-6">;
            <div className="prose prose-invert max-w-none">;
              <h3 className="text-lg font-semibold mb-2">Error Responses</h3>;
              <p className="text-zinc-400 mb-4">;
                The Zion API uses conventional HTTP status codes to indicate the success or failure of an API request.;
                In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error with the;
                provided information, and codes in the 5xx range indicate an error with our servers.;
              </p>;
              ;
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
              ;
              <h4 className="text-md font-semibold mt-6 mb-2">Error Response Format</h4>;
              <p className="text-zinc-400 mb-2">;
                Error responses include a consistent JSON object with the following format:;
              </p>;
              ;
              <CodeBlock;
                code={`{;
  "error":{;
    "code":"invalid_request",;
    "message":"The request was invalid",;
    "details":[;
      {;
        "field":"project_name",;
        "message":"Project name is required";
      }
    ];
  }
}`}
                language="json";
              />;
              ;
              <h4 className="text-md font-semibold mt-6 mb-2">Rate Limiting</h4>;
              <p className="text-zinc-400 mb-4">;
                The Zion API implements rate limiting to protect our infrastructure and ensure fair usage.;
                Rate limits are applied on a per-API key basis. If you exceed the rate limits, you will receive ;
                a <code className="bg-zinc-800 px-1 py-0.5 rounded">429 Too Many Requests</code> response.;
              </p>;
              ;
              <p className="text-zinc-400 mb-2">;
                Rate limit information is included in the response headers:</p>;
              ;
              <ul className="list-disc pl-6 space-y-1 text-zinc-400">;
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Limit</code>:Number of requests allowed in the time window</li>;
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Remaining</code>:Number of requests remaining in the current window</li>;
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Reset</code>:Unix timestamp when the rate limit resets</li>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
              </p>;
              <p className="text-zinc-400 mb-2">;
                Rate limit information is included in the response headers: </p>;
              <ul className="list-disc pl-6 space-y-1 text-zinc-400">;
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Limit</code>: Number of requests allowed in the time window</li>;
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Remaining</code>: Number of requests remaining in the current window</li>;
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Reset</code>: Unix timestamp when the rate limit resets</li>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </ul>;
            </div>;
          </TabsContent>;
        </Tabs>;
      </CardContent>;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

              {note}
=======
>>>>>>>               {note}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            </Badge>
          )}

        </div>
<<<<<<< HEAD

      {params.length > 0 && (
=======
        <p className='mt-2 text-zinc-400'>{description}</p>
      </div>
>>>>>>>       {params.length > 0 && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <div className="border-t border-zinc-800 p-4">
          <h4 className="font-medium mb-2">Parameters</h4>
          <table className="w-full">
ursor/fix-website-loading-errors-and-merge-6662
      {params.length > 0 && (
        <div className='border-t border-zinc-800 p-4'>
          <h4 className='font-medium mb-2'>Parameters</h4>
          <table className='w-full'>
>>>>>>>             <thead>
              <tr className='text-left border-b border-zinc-800 text-sm'>
                <th className='pb-2'>Name</th>
                <th className='pb-2'>Type</th>
                <th className='pb-2'>Description</th>
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </tr>
            </thead>
            <tbody>
              {params.map((param, index) => (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                </tr>
=======
========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                <tr
                  key={index}
                  className={
                    index < params.length - 1 ? 'border-b border-zinc-800' : ''
                  }
                >
                  <td className='py-2 font-mono text-sm'>                    {param.name}
                    {param.required && <span className='text-red-500'>*</span>}
                  </td>
                  <td className='py-2 text-sm text-zinc-400'>{param.type}</td>
                  <td className='py-2 text-sm text-zinc-400'>
                    {param.description}
                  </td>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                 </tr>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                <tr key={index} className={index < params.length - 1 ? "border-b border-zinc-800" : ""}>
                  <td className="py-2 font-mono text-sm">
                    {param.name}
                    {param.required && <span className="text-red-500">*</span>}
                  </td>
                  <td className="py-2 text-sm text-zinc-400">{param.type}</td>
                  <td className="py-2 text-sm text-zinc-400">{param.description}</td>
                </tr>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              ))}
            </tbody>
          </table>
        </div>
      )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

      {codeExamples && (
=======
                </tr>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
              ))}
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            </tbody>;
          </table>;
        </div>;
      )}
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx





>>>>>>>       {codeExamples && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

      {codeExamples && (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className='border-t border-zinc-800 p-4'>
          <div className='flex items-center mb-2'>
            <h4 className='font-medium'>Request Example</h4>
            <div className='ml-auto flex border border-zinc-700 rounded-md overflow-hidden'>
              {Object.keys(codeExamples).map(lang => (                <button
<<<<<<< HEAD
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
      {codeExamples && (;
        <div className='border-t border-zinc-800 p-4'>;
          <div className='flex items-center mb-2'>;
            <h4 className='font-medium'>Request Example</h4>;
            <div className='ml-auto flex border border-zinc-700 rounded-md overflow-hidden'>;
              {Object && Object.keys(codeExamples).map(lang => (                <button
                  key = {lang,}
<<<<<<< HEAD

=======
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                  key = {lang,}
      
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {codeExamples && (
        <div className="border-t border-zinc-800 p-4">
          <div className="flex items-center mb-2">
            <h4 className="font-medium">Request Example</h4>
            <div className="ml-auto flex border border-zinc-700 rounded-md overflow-hidden">
              {Object.keys(codeExamples).map((lang) => (
                <button
                  key={lang}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                  className={`px-3 py-1 text-xs font-medium ${
=======
>>>>>>>                   className={`px-3 py-1 text-xs font-medium ${
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    activeTab === lang 
                      ? "bg-zinc-700 text-white" 
                      : "text-zinc-400 hover:bg-zinc-800"
ursor/fix-website-loading-errors-and-merge-6662
                  className={`px-3 py-1 text-xs font-medium ${
                    activeTab === lang
                      ? 'bg-zinc-700 text-white'
                      : 'text-zinc-400 hover:bg-zinc-800'
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx
>>>>>>>                   }`}

========
                  }`}
                  onClick = {(,) => setActiveTab(lang),}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
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
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
                >;
                  {lang === 'curl';
                    ? 'cURL';
                    : lang === 'javascript';
                      ? 'JavaScript';
                      : 'Python'}
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
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
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
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
<<<<<<<< HEAD:src/components/developers/ApiDocumentation.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>>                   onClick={() => setActiveTab(lang)}
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  className={`px-3 py-1 text-xs font-medium ${
                    activeTab === lang 
                      ? "bg-zinc-700 text-white" 
                      : "text-zinc-400 hover:bg-zinc-800"
                  }`}
                  onClick={() => setActiveTab(lang)}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                >
                  {lang === "curl" ? "cURL" : lang === "javascript" ? "JavaScript" : "Python"}
                </button>
              ))}
            </div>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

        </div>
      )}
      {responseExamples && (

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <CodeBlock
            code={codeExamples[activeTab] |'// Code example not available'}
            language={activeTab === 'curl' ? 'bash' : activeTab}          />
          <CodeBlock 
            code={codeExamples[activeTab] || "// Code example not available"}
            language={activeTab === "curl" ? "bash" : activeTab}
          />
        </div>
      )}
      {responseExamples && (
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <div className='border-t border-zinc-800 p-4'>
          <h4 className='font-medium mb-2'>Response</h4>
          <CodeBlock code={responseExamples.success} language='json' />        </div>
      )}
    </div>
  )
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>         </div>
      )}
      {responseExamples && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <CodeBlock 
            code={codeExamples[activeTab] || "// Code example not available"}
            language={activeTab === "curl" ? "bash" : activeTab}
          />
        </div>
      )}
      
      {responseExamples && (

;
}
}
}
}
}
}
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <div className="border-t border-zinc-800 p-4">
          <h4 className="font-medium mb-2">Response</h4>
          <CodeBlock
            code={responseExamples.success}
            language="json"
          />
<<<<<<< HEAD

>>>>>>>         </div>
=======
        </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      )}
    </div>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiDocumentation.tsx
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
