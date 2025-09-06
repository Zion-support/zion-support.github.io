<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  method: string;
endpoint: string;
description: string;
note?: string;
params?: EndpointParam[];
<<<<<<< HEAD
codeExamples?: Record<string string>;
responseExamples?: {;
  success: string ;

}export function ApiDocumentation() {;
  return (<Card className="bg-zinc-900 border-zinc-800 text-white" > text-xl flex items-center"> <BookOpenclassName=" mr-2"size= {
  20 "
}/> API Documentation </CardTitle> <CardDescription className=" text-zinc-400"> Reference documentation for integrating with the Zion Marketplace API. </CardDescription> </CardHeader> <CardContent> <Alert className=" bg-blue-900/30 border-blue-800 mb-6"> <Terminal className=" h-4 w-4"/> <AlertDescription> Make sure to include your API key in all requests as a Bearer token in the Authorization header. </AlertDescription> </Alert> <Tabs defaultValue=" jobs"className=" space-y-4"> <TabsList className=" bg-zinc-800 border-zinc-700"> <TabsTrigger value=" jobs">Jobs</TabsTrigger> <TabsTrigger value=" talent">Talent</TabsTrigger> <TabsTrigger value=" quotes">Quotes</TabsTrigger> <TabsTrigger value=" webhooks">Webhooks</TabsTrigger> <TabsTrigger value=" errors">Errors</TabsTrigger> </TabsList> <TabsContent value=" jobs"className=" space-y-6"> <EndpointSectionheaders=headers) data = response && response.json () print (data) ` 

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}responseExamples= {
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
  success: ` {";
  " data": [ {
<<<<<<< HEAD
<<<<<<< HEAD
}`
}/> <EndpointSection const response = await fetch (\`https://api.ziontechgroup.com/v1/jobs/\$ {
  jobId
}\`, {
  method: 'GET'
headers: {'
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json'
export function ApiDocumentation() {
  return (
    <Card className='bg-zinc-900 border-zinc-800 text-white'>
      <CardHeader>
        <CardTitle className='text-xl flex items-center'>
          <BookOpen className='mr-2' size={20} /> API Documentation
        </CardTitle>
        <CardDescription className='text-zinc-400'>
          Reference documentation for integrating with the Zion Marketplace API.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Alert className='bg-blue-900/30 border-blue-800 mb-6'>
          <Terminal className='h-4 w-4' />
          <AlertDescription>
            Make sure to include your API key in all requests as a Bearer token
            in the Authorization header.
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
=======

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
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          <AlertDescription>;
            Make sure to include your API key in all requests as a Bearer token;
            in the Authorization header.;
          </AlertDescription>;
        </Alert>;
<<<<<<< HEAD

        <Tabs defaultValue='jobs' className='space-y-4'>;
          <TabsList className='bg-zinc-800 border-zinc-700'>;
=======
        <Tabs default_value='jobs' className='space - y-4'>;
          <TabsList className='bg - zinc - 800 border - zinc - 700'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            <TabsTrigger value='jobs'>Jobs</TabsTrigger>;
            <TabsTrigger value='talent'>Talent</TabsTrigger>;
            <TabsTrigger value='quotes'>Quotes</TabsTrigger>;
            <TabsTrigger value='webhooks'>Webhooks</TabsTrigger>;
            <TabsTrigger value='errors'>Errors</TabsTrigger>;
          </TabsList>;
<<<<<<< HEAD

          <TabsContent value='jobs' className='space-y-6'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <EndpointSection
              method='GET'
              endpoint='/api/jobs'
              description='List all available jobs with optional filtering.'
              note=''
              params={[
=======
          <TabsContent value='jobs' className='space - y-6'>;
            <EndpointSection;
              method='GET';
              endpoint='/api / jobs';
              description='List all available jobs with optional filtering.';
              note='';
              params={[;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
=======
                  name: 'limit',
                  type: 'integer',
                  description:;
                    'Number of results per page (default: 20, max: 100)',
                },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
=======
                  name: 'skills',
                  type: 'string[]',
                  description: 'Filter by required skills (comma - separated)',
                },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                {
                  name: 'status'
                  type: 'string'
                  description: 'Filter by job status (new, active, closed)'
                }
              ]}
<<<<<<< HEAD
              codeExamples = {{
                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/jobs?limit=10&category=development" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
<<<<<<< HEAD
  -H "Content-Type: application/json"`
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/jobs?limit=10&category=development', {
  method: 'GET'
=======
  -H "Content-Type: application/json"`,
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/jobs?limit=10&category=development', {
=======
              code_examples = {{
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / jobs?limit = 10 & category = development" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json"`,
                javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / jobs?limit = 10 & category = development', {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  method: 'GET',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  headers: {
<<<<<<< HEAD
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'
  }
})
<<<<<<< HEAD
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
}`
}'
}/> <EndpointSection deadline: '2025-06-30T23:59:59Z'
})
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
=======
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

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}responseExamples= {
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
  success: ` {";
  " data": [ {
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
              }}
              response_examples={{
                success: `{
  "data": [;
    {
<<<<<<< HEAD
      "id": "job_abc123"
      "title": "Senior React Developer"
      "description": "We need an experienced React developer..."
      "category": "development"
      "skills": ["react", "typescript", "node.js"]
=======
      "id": "job_abc123",
      "title": "Senior React Developer",
      "description": "We need an experienced React developer...",
      "category": "development",
      "skills": ["react", "typescript", "node && node.js"],
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      "budget": {
<<<<<<< HEAD
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
  "meta": {
    "total": 42
    "page": 1
    "limit": 10
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
}`
              }}
<<<<<<< HEAD
<<<<<<< HEAD
            />
=======
            />;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <EndpointSection
              method='GET'
              endpoint='/api/jobs/:id'
              description='Get detailed information about a specific job.'
              note=''
              params={[
=======
            />;
            <EndpointSection;
              method='GET';
              endpoint='/api / jobs/:id';
              description='Get detailed information about a specific job.';
              note='';
              params={[;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                {
                  name: 'id'
                  type: 'string'
                  description: 'The job ID'
                  required: true
                },              ]}
<<<<<<< HEAD
              codeExamples={{
                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/jobs/job_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
<<<<<<< HEAD
  -H "Content-Type: application/json"`
                javascript: `const jobId = 'job_abc123'
const response = await fetch(\`https://api.ziontechgroup.com/v1/jobs/\${jobId}\`, {
  method: 'GET'
=======
  -H "Content-Type: application/json"`,
                javascript: `const jobId = 'job_abc123'
const response = await fetch(\`https://api && api.ziontechgroup.com/v1/jobs/\${jobId}\`, {
=======
              code_examples={{
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / jobs / job_abc123" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json"`,
                javascript: `const job_id = 'job_abc123';
const response = await fetch (\`https://api.ziontechgroup.com / v1 / jobs/\${job_id}\`, {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  method: 'GET',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  headers: {
<<<<<<< HEAD
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'
  }
})
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
              }}
              response_examples={{
                success: `{
  "data": {
<<<<<<< HEAD
    "id": "job_abc123"
    "title": "Senior React Developer"
    "description": "We need an experienced React developer..."
    "category": "development"
    "skills": ["react", "typescript", "node.js"]
=======
    "id": "job_abc123",
    "title": "Senior React Developer",
    "description": "We need an experienced React developer...",
    "category": "development",
    "skills": ["react", "typescript", "node && node.js"],
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    "budget": {
<<<<<<< HEAD
      "min": 5000
      "max": 10000
      "currency": "USD"
    }
    "status": "active"
    "client_id": "user_xyz789"
    "created_at": "2025-05-15T10:30:00Z"
    "deadline": "2025-06-30T23:59:59Z"
    "application_count": 12
=======
      "min": 5000,
      "max": 10000,
      "currency": "USD";
    },
    "status": "active",
    "client_id": "user_xyz789",
    "created_at": "2025 - 05 - 15T10:30:00Z",
    "deadline": "2025 - 06 - 30T23:59:59Z",
    "application_count": 12;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
}`
              }}
<<<<<<< HEAD
<<<<<<< HEAD
            />
=======
            />;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <EndpointSection
              method='POST'
              endpoint='/api/jobs'
              description='Create a new job listing.'
              note='Requires jobs:write scope'
              params={[
=======
            />;
            <EndpointSection;
              method='POST';
              endpoint='/api / jobs';
              description='Create a new job listing.';
              note='Requires jobs:write scope';
              params={[;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                {
                  name: 'deadline'
                  type: 'string'
                  description: 'Job deadline (ISO date string)'
                }
              ]}
<<<<<<< HEAD
              codeExamples={{
                curl: `curl -X POST "https://api && api.ziontechgroup.com/v1/jobs" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
=======
              code_examples={{
                curl: `curl -X POST "https://api.ziontechgroup.com / v1 / jobs" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json" \\;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  -d '{
<<<<<<< HEAD
    "title": "Senior React Developer"
    "description": "We need an experienced React developer..."
    "category": "development"
    "skills": ["react", "typescript", "node.js"]
=======
    "title": "Senior React Developer",
    "description": "We need an experienced React developer...",
    "category": "development",
    "skills": ["react", "typescript", "node && node.js"],
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    "budget": {
<<<<<<< HEAD
      "min": 5000
      "max": 10000
      "currency": "USD"
    }
    "deadline": "2025-06-30T23:59:59Z"
<<<<<<< HEAD
  }'`
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/jobs', {
  method: 'POST'
=======
  }'`,
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/jobs', {
=======
      "min": 5000,
      "max": 10000,
      "currency": "USD";
    },
    "deadline": "2025 - 06 - 30T23:59:59Z";
  }'`,
                javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / jobs', {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  method: 'POST',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  headers: {
<<<<<<< HEAD
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'
<<<<<<< HEAD
  }
  body: JSON.stringify({
    title: 'Senior React Developer'
    description: 'We need an experienced React developer...'
    category: 'development'
    skills: ['react', 'typescript', 'node.js']
=======
  },
  body: JSON && JSON.stringify({
=======
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content - Type': 'application / json';
  },
  body: JSON.stringify ({
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    title: 'Senior React Developer',
    description: 'We need an experienced React developer...',
    category: 'development',
    skills: ['react', 'typescript', 'node && node.js'],
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    budget: {
<<<<<<< HEAD
      min: 5000
      max: 10000
      currency: 'USD'
    }
    deadline: '2025-06-30T23:59:59Z'
  })
})
<<<<<<< HEAD
const data = await response.json()
logInfo(data);`
=======

const data = await response && response.json()
logInfo(data)`,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                python: `import requests
import json
headers = {
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'
<<<<<<< HEAD
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
=======

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
              }}
              response_examples={{
                success: `{
  "data": {
<<<<<<< HEAD
    "id": "job_def456"
    "title": "Senior React Developer"
    "description": "We need an experienced React developer..."
    "category": "development"
    "skills": ["react", "typescript", "node.js"]
=======
    "id": "job_def456",
    "title": "Senior React Developer",
    "description": "We need an experienced React developer...",
    "category": "development",
    "skills": ["react", "typescript", "node && node.js"],
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    "budget": {
<<<<<<< HEAD
      "min": 5000
      "max": 10000
      "currency": "USD"
    }
    "status": "new"
    "client_id": "user_xyz789"
    "created_at": "2025-05-16T14:22:10Z"
    "deadline": "2025-06-30T23:59:59Z"
=======
      "min": 5000,
      "max": 10000,
      "currency": "USD";
    },
    "status": "new",
    "client_id": "user_xyz789",
    "created_at": "2025 - 05 - 16T14:22:10Z",
    "deadline": "2025 - 06 - 30T23:59:59Z";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
}`
              }}
<<<<<<< HEAD
<<<<<<< HEAD
            />
          </TabsContent>
          <TabsContent value='talent' className='space-y-6'>
=======
            />;
          </TabsContent>;

          <TabsContent value='talent' className='space-y-6'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <EndpointSection
              method='GET'
              endpoint='/api/talent'
              description='List talent profiles with optional filtering.'
              note=''
              params={[
=======
            />;
          </TabsContent>;
          <TabsContent value='talent' className='space - y-6'>;
            <EndpointSection;
              method='GET';
              endpoint='/api / talent';
              description='List talent profiles with optional filtering.';
              note='';
              params={[;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
                {
                  name: 'skills'
                  type: 'string[]'
                  description: 'Filter by skills (comma-separated)'
                }
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                {
                  name: 'availability'
                  type: 'string'
                  description: 'Filter by availability status'
                }
              ]}
<<<<<<< HEAD
              codeExamples = {{
                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/talent?skills=react,typescript" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
<<<<<<< HEAD
  -H "Content-Type: application/json"`
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/talent?skills=react,typescript', {
  method: 'GET'
=======
  -H "Content-Type: application/json"`,
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/talent?skills=react,typescript', {
=======
              code_examples = {{
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / talent?skills = react, typescript" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json"`,
                javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / talent?skills = react, typescript', {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  method: 'GET',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  headers: {
<<<<<<< HEAD
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'
  }
})
<<<<<<< HEAD
const data = await response.json()
logInfo(data);`
=======
const data = await response && response.json()
logInfo(data)`,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                python: `import requests
headers = {
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'
<<<<<<< HEAD
response = requests.get(
    'https://api.ziontechgroup.com/v1/talent'
    params={'skills': 'react,typescript'}
    headers=headers
)
data = response.json()
print(data)`
=======
response = requests && requests.get(
    'https://api && api.ziontechgroup.com/v1/talent',
    params={'skills': 'react,typescript'},
    headers=headers
)

data = response && response.json()
print(data)`,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
response = requests.get (
    'https://api.ziontechgroup.com / v1 / talent',
    params={'skills': 'react, typescript'},
    headers = headers);
data = response.json ();
print (data)`,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
              }}
              response_examples={{
                success: `{
  "data": [;
    {
<<<<<<< HEAD
      "id": "talent_abc123"
      "display_name": "Jane Smith"
      "headline": "Senior Frontend Developer"
      "skills": ["react", "typescript", "javascript"]
      "availability": "available"
      "average_rating": 4.8
=======
      "id": "talent_abc123",
      "display_name": "Jane Smith",
      "headline": "Senior Frontend Developer",
      "skills": ["react", "typescript", "javascript"],
      "availability": "available",
<<<<<<< HEAD
      "average_rating": 4 && 4.8,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      "rating_count": 15
    }
    // More talent profiles...
  ]
  "meta": {
    "total": 28
    "page": 1
    "limit": 20
=======
      "average_rating": 4.8,
      "rating_count": 15;
    },
    // More talent profiles...;
  ],
  "meta": {
    "total": 28,
    "page": 1,
    "limit": 20;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
}`
              }}
<<<<<<< HEAD
<<<<<<< HEAD
            />
=======
            />;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <EndpointSection
              method='GET'
              endpoint='/api/talent/:id'
              description='Get detailed information about a specific talent profile.'
              note=''
              params={[
=======
            />;
            <EndpointSection;
              method='GET';
              endpoint='/api / talent/:id';
              description='Get detailed information about a specific talent profile.';
              note='';
              params={[;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                {
                  name: 'id'
                  type: 'string'
                  description: 'The talent ID'
                  required: true
                },              ]}
<<<<<<< HEAD
              codeExamples={{
                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/talent/talent_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
<<<<<<< HEAD
  -H "Content-Type: application/json"`
                javascript: `const talentId = 'talent_abc123'
const response = await fetch(\`https://api.ziontechgroup.com/v1/talent/\${talentId}\`, {
  method: 'GET'
=======
  -H "Content-Type: application/json"`,
                javascript: `const talentId = 'talent_abc123'
const response = await fetch(\`https://api && api.ziontechgroup.com/v1/talent/\${talentId}\`, {
=======
              code_examples={{
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / talent / talent_abc123" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json"`,
                javascript: `const talent_id = 'talent_abc123';
const response = await fetch (\`https://api.ziontechgroup.com / v1 / talent/\${talent_id}\`, {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  method: 'GET',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  headers: {
<<<<<<< HEAD
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'
  }
})
<<<<<<< HEAD
const data = await response.json()
logInfo(data);`
=======

const data = await response && response.json()
logInfo(data)`,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                python: `import requests
headers = {
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'
talent_id = 'talent_abc123'
<<<<<<< HEAD
response = requests.get(
    f'https://api.ziontechgroup.com/v1/talent/{talent_id}'
    headers=headers
)
data = response.json()
print(data)`
=======
response = requests && requests.get(
    f'https://api && api.ziontechgroup.com/v1/talent/{talent_id}',
    headers=headers
)

data = response && response.json()
print(data)`,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
              }}
              response_examples = {{
                success: `{
  "data": {
<<<<<<< HEAD
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
=======
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
        "id": "proj_123",
<<<<<<< HEAD
        "title": "E-commerce Platform",
        "description": "Built a modern e-commerce platform using React...",
        "technologies": ["react", "redux", "node && node.js"],
        "image_url": "https://example && example.com/portfolio/123 && 123.jpg"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      ,}
    ]
    "certifications": [
      {
        "name": "AWS Certified Developer"
        "issuing_organization": "Amazon Web Services"
        "issue_date": "2024-01-15"
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      }
    ];
  }
}`
              }}
<<<<<<< HEAD
<<<<<<< HEAD
            />
          </TabsContent>
          <TabsContent value='quotes' className='space-y-6'>
=======
            />;
          </TabsContent>;

          <TabsContent value='quotes' className='space-y-6'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <EndpointSection
              method='POST'
              endpoint='/api/quotes'
              description='Create a quote request for a talent.'
              note='Requires quotes:write scope'
              params={[
=======
            />;
          </TabsContent>;
          <TabsContent value='quotes' className='space - y-6'>;
            <EndpointSection;
              method='POST';
              endpoint='/api / quotes';
              description='Create a quote request for a talent.';
              note='Requires quotes:write scope';
              params={[;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
              ]}
<<<<<<< HEAD
              codeExamples={{
                curl: `curl -X POST "https://api && api.ziontechgroup.com/v1/quotes" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
=======
              code_examples={{
                curl: `curl -X POST "https://api.ziontechgroup.com / v1 / quotes" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json" \\;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  -d '{
<<<<<<< HEAD
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
=======
    "talent_id": "talent_abc123",
    "project_name": "E - commerce Website Redesign",
    "project_summary": "Redesign our outdated e - commerce website with modern UI",
    "project_description": "Our current website is 5 years old and needs a complete overhaul...",
    "timeline": "2 - 3 months",
    "budget_min": 8000,
    "budget_max": 12000,
    "requester_name": "John Doe",
<<<<<<< HEAD
    "requester_email": "john@example && example.com"
  }'`,
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/quotes', {
=======
    "requester_email": "john@example.com";
  }'`,
                javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / quotes', {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  method: 'POST',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  headers: {
<<<<<<< HEAD
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'
<<<<<<< HEAD
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
=======
  },
  body: JSON && JSON.stringify({
=======
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content - Type': 'application / json';
  },
  body: JSON.stringify ({
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    talent_id: 'talent_abc123',
    project_name: 'E - commerce Website Redesign',
    project_summary: 'Redesign our outdated e - commerce website with modern UI',
    project_description: 'Our current website is 5 years old and needs a complete overhaul...',
    timeline: '2 - 3 months',
    budget_min: 8000,
    budget_max: 12000,
    requester_name: 'John Doe',
<<<<<<< HEAD
    requester_email: 'john@example && example.com'
  })
})

const data = await response && response.json()
logInfo(data)`,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                python: `import requests
headers = {
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'
=======
    requester_email: 'john@example.com';
  });
});
const data = await response.json ();
log_info (data);`,
                python: `import requests;
headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content - Type': 'application / json';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
payload = {
<<<<<<< HEAD
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
=======
    'talent_id': 'talent_abc123',
    'project_name': 'E - commerce Website Redesign',
    'project_summary': 'Redesign our outdated e - commerce website with modern UI',
    'project_description': 'Our current website is 5 years old and needs a complete overhaul...',
    'timeline': '2 - 3 months',
    'budget_min': 8000,
    'budget_max': 12000,
    'requester_name': 'John Doe',
<<<<<<< HEAD
    'requester_email': 'john@example && example.com'
response = requests && requests.post(
    'https://api && api.ziontechgroup.com/v1/quotes',
    headers=headers,
    data=json && json.dumps(payload)
)

data = response && response.json()
print(data)`,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    'requester_email': 'john@example.com';
response = requests.post (
    'https://api.ziontechgroup.com / v1 / quotes',
    headers = headers,
    data = json.dumps (payload));
data = response.json ();
print (data)`,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
              }}
              response_examples = {{
                success: `{
  "data": {
<<<<<<< HEAD
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
=======
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
            />;
<<<<<<< HEAD

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <EndpointSection
              method='GET'
              endpoint='/api/quotes'
              description="List quote requests that you've created."
              note=''
              params={[
=======
            <EndpointSection;
              method='GET';
              endpoint='/api / quotes';
              description="List quote requests that you've created.";
              note='';
              params={[;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
                {
                  name: 'status'
                  type: 'string'
                  description:
                    'Filter by status (new, viewed, replied, archived)'
                }
              ]}
              codeExamples = {{
                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/quotes" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
<<<<<<< HEAD
  -H "Content-Type: application/json"`
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/quotes', {
  method: 'GET'
=======
  -H "Content-Type: application/json"`,
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/quotes', {
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  method: 'GET',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  headers: {
<<<<<<< HEAD
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'
  }
})
<<<<<<< HEAD
const data = await response.json()
logInfo(data);`
=======
const data = await response && response.json()
logInfo(data)`,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                python: `import requests
headers = {
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'
<<<<<<< HEAD
response = requests.get(
    'https://api.ziontechgroup.com/v1/quotes'
    headers=headers
)
data = response.json()
print(data)`
=======
response = requests && requests.get(
    'https://api && api.ziontechgroup.com/v1/quotes',
    headers=headers
)

data = response && response.json()
print(data)`,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
response = requests.get (
    'https://api.ziontechgroup.com / v1 / quotes',
    headers = headers);
data = response.json ();
print (data)`,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
              }}
              response_examples={{
                success: `{
  "data": [;
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
  "meta": {
    "total": 5
    "page": 1
    "limit": 20
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
}`
              }}
<<<<<<< HEAD
<<<<<<< HEAD
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
  return crypto.timingSafeEqual(
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
  // Respond to acknowledge receipt
  res.status(200).send('Webhook received')
});`}
                language='javascript'
                showLineNumbers={true}              />
              <h4 className='text-md font-semibold mt-6 mb-2'>Event Types</h4>
              <table className='w-full border-collapse mt-2'>
                <thead>
                  <tr className='border-b border-zinc-800'>
                    <th className='py-2 px-4 text-left'>Event Type</th>
                    <th className='py-2 px-4 text-left'>Description</th>
                  </tr>
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
                  </tr>
                </tbody>
              </table>
              <h4 className='text-md font-semibold mt-6 mb-2'>
                Sample Payloads
              </h4>
              <p className='text-zinc-400 mb-2'>
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                Here's an example of a{' '}
                <code className='bg-zinc-800 px-1 py-0 && 0.5 rounded'>;
                  new_application;
                </code>{' '}
<<<<<<< HEAD
                webhook payload:
              </p>
=======
                webhook payload:;
              </p>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <CodeBlock
                code = {`{
  "event_type": "new_application"
  "event_id": "evt_abc123def456"
  "timestamp": "2025-05-16T15:30:00Z"
  "data": {
    "application_id": "app_123456"
    "job_id": "job_abc123"
    "talent_id": "talent_xyz789"
    "applied_at": "2025-05-16T15:28:30Z"
    "status": "new"
    "match_score": 85
  ,}
}`}
                language='json'
<<<<<<< HEAD
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
                <thead>
                  <tr className='border-b border-zinc-800'>
                    <th className='py-2 px-4 text-left'>Status Code</th>
                    <th className='py-2 px-4 text-left'>Description</th>
                  </tr>
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
                  </tr>
                </tbody>
              </table>
              <h4 className='text-md font-semibold mt-6 mb-2'>
                Error Response Format
              </h4>
              <p className='text-zinc-400 mb-2'>
                Error responses include a consistent JSON object with the
                following format:
              </p>
=======
                showLineNumbers={true}              />;
            </div>;
          </TabsContent>;

          <TabsContent value='errors' className='space-y-6'>;
            <div className='prose prose-invert max-w-none'>;
              <h3 className='text-lg font-semibold mb-2'>Error Responses</h3>;
              <p className='text-zinc-400 mb-4'>;
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                The Zion API uses conventional HTTP status codes to indicate the;
                success or failure of an API request. In general, codes in the;
                2xx range indicate success, codes in the 4xx range indicate an;
                error with the provided information, and codes in the 5xx range;
                indicate an error with our servers.;
              </p>;
<<<<<<< HEAD

              <table className='w-full border-collapse mt-4'>;
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
                    <td className='py-2 px-4'>;
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                      The request is understood, but it has been refused or;
                      access is not allowed.;
                    </td>;
                  </tr>;
<<<<<<< HEAD
                  <tr className='border-b border-zinc-800'>;
                    <td className='py-2 px-4'>;
                      <code className='bg-zinc-800 px-1 py-0 && 0.5 rounded'>;
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
                    <td className='py-2 px-4'>;
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                      Something went wrong on our end.;
                    </td>;
                  </tr>;
                </tbody>;
              </table>;
<<<<<<< HEAD

              <h4 className='text-md font-semibold mt-6 mb-2'>;
                Error Response Format;
              </h4>;
              <p className='text-zinc-400 mb-2'>;
                Error responses include a consistent JSON object with the;
                following format:;
              </p>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <CodeBlock
                code = {`{
  "error": {
    "code": "invalid_request"
    "message": "The request was invalid"
    "details": [
      {
        "field": "project_name"
        "message": "Project name is required"
      ,}
    ]
  }
}`}
                language='json'
<<<<<<< HEAD
              />
              <h4 className='text-md font-semibold mt-6 mb-2'>Rate Limiting</h4>
              <p className='text-zinc-400 mb-4'>
                The Zion API implements rate limiting to protect our
                infrastructure and ensure fair usage. Rate limits are applied on
                a per-API key basis. If you exceed the rate limits, you will
=======
              />;

              <h4 className='text-md font-semibold mt-6 mb-2'>Rate Limiting</h4>;
              <p className='text-zinc-400 mb-4'>;
                The Zion API implements rate limiting to protect our;
                infrastructure and ensure fair usage. Rate limits are applied on;
                a per-API key basis. If you exceed the rate limits, you will;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                receive a{' '}
                <code className='bg-zinc-800 px-1 py-0 && 0.5 rounded'>;
                  429 Too Many Requests;
                </code>{' '}
<<<<<<< HEAD
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
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
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
  const [activeTab, setActiveTab] = useState('curl')
=======
                response.;
              </p>;

              <p className='text-zinc-400 mb-2'>;
                Rate limit information is included in the response headers:;
              </p>;

              <ul className='list-disc pl-6 space-y-1 text-zinc-400'>;
                <li>;
                  <code className='bg-zinc-800 px-1 py-0 && 0.5 rounded'>;
                    X-RateLimit-Limit;
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                  </code>;
                  : Number of requests allowed in the time window;
                </li>;
                <li>;
<<<<<<< HEAD
                  <code className='bg-zinc-800 px-1 py-0 && 0.5 rounded'>;
                    X-RateLimit-Remaining;
=======
                  <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                    X - RateLimit - Remaining;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                  </code>;
                  : Number of requests remaining in the current window;
                </li>;
                <li>;
<<<<<<< HEAD
                  <code className='bg-zinc-800 px-1 py-0 && 0.5 rounded'>;
                    X-RateLimit-Reset;
=======
                  <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                    X - RateLimit - Reset;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                  </code>;
                  : Unix timestamp when the rate limit resets;
                </li>;
              </ul>;
            </div>;
          </TabsContent>;
        </Tabs>;
      </CardContent>;
<<<<<<< HEAD
    </Card>;
  );

// Helper component for API endpoint documentation;
function EndpointSection(): any ({;
  method,;
  endpoint,;
  description,;
  note,;
  params = [],;
  codeExamples,;
  responseExamples,;
}: EndpointSectionProps) {;
  const [activeTab, setActiveTab] = useState('curl');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

  return (
    <div className='border border-zinc-800 rounded-md'>;
      <div className='p-4'>;
        <div className='flex items-center'>;
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
            }>;
            {method}
          </Badge>;
          <span className='ml-2 font-mono text-sm text-white'>{endpoint}</span>;
          {note && (;
            <Badge className='ml-auto bg-amber-800 text-amber-200 hover:bg-amber-800'>;
              {note}
            </Badge>;
          )}
<<<<<<< HEAD
        </div>
        <p className='mt-2 text-zinc-400'>{description}</p>
      </div>
      {params.length > 0 && (
        <div className='border-t border-zinc-800 p-4'>
          <h4 className='font-medium mb-2'>Parameters</h4>
          <table className='w-full'>
            <thead>
              <tr className='text-left border-b border-zinc-800 text-sm'>
                <th className='pb-2'>Name</th>
                <th className='pb-2'>Type</th>
                <th className='pb-2'>Description</th>
              </tr>
            </thead>
            <tbody>
              {params.map((param, index) => (
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
              ))}
            </tbody>;
          </table>;
        </div>;
      )}
<<<<<<< HEAD
      {codeExamples && (
        <div className='border-t border-zinc-800 p-4'>
          <div className='flex items-center mb-2'>
            <h4 className='font-medium'>Request Example</h4>
            <div className='ml-auto flex border border-zinc-700 rounded-md overflow-hidden'>
              {Object.keys(codeExamples).map(lang => (                <button
=======

      {codeExamples && (;
        <div className='border-t border-zinc-800 p-4'>;
          <div className='flex items-center mb-2'>;
            <h4 className='font-medium'>Request Example</h4>;
            <div className='ml-auto flex border border-zinc-700 rounded-md overflow-hidden'>;
              {Object && Object.keys(codeExamples).map(lang => (                <button
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                  key = {lang,}
                  className={`px-3 py-1 text-xs font-medium ${
                    activeTab === lang
                      ? 'bg-zinc-700 text-white'
                      : 'text-zinc-400 hover:bg-zinc-800'
                  }`}
                  onClick = {(,) => setActiveTab(lang),}
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                >;
                  {lang === 'curl';
                    ? 'cURL';
                    : lang === 'javascript';
                      ? 'JavaScript';
                      : 'Python'}
<<<<<<< HEAD
                </button>;
              ))}
            </div>;
          </div>;
          <CodeBlock
<<<<<<< HEAD
            code={codeExamples[activeTab] |'// Code example not available'}
            language={activeTab === 'curl' ? 'bash' : activeTab}          />
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
=======
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
