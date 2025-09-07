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
  note?: string,;
  params?: EndpointParam[],;
  codeExamples?: Record<string string>,;
  responseExamples?: { success: string }

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

}` 

}/> <EndpointSectionconst response = await fetch (\`https://api && api.ziontechgroup.com/v1/jobs/\$ {
  jobId 
}\`, {
  method: 'GET'
headers: {'

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
  method: 'GET';
headers: {';
  'Authorization': 'Bearer YOUR API KEYContent - Type': 'application / json';
export /**
    <Card className='bg - zinc - 900 border - zinc - 800 text - white'>;
        <CardTitle className='text - xl flex items - center'>;
          <BookOpen className='mr - 2' size={20} /> API Documentation;
        <CardDescription className='text - zinc - 400'>;
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

                  name: 'page'
                  type: 'integer'
                  description: 'Page number for pagination (default: 1)'

                  name: 'limit',
                  type: 'integer',
                  description:;
                    'Number of results per page (default: 20, max: 100)',
                },

                  name: 'category'
                  type: 'string'
                  description: 'Filter by job category'

                  name: 'skills',
                  type: 'string[]',
                  description: 'Filter by required skills (comma - separated)',

                  name: 'status'
                  description: 'Filter by job status (new, active, closed)'

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
                  name: 'limit'
                  description:
                    'Number of results per page (default: 20, max: 100)'
                  name: 'skills'
                  type: 'string[]'
                  description: 'Filter by required skills (comma-separated)'
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" },
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },
                { name: "category", type: "string", description: "Filter by job category" },
                { name: "skills", type: "string[]", description: "Filter by required skills (comma-separated)" },
                { name: "status", type: "string", description: "Filter by job status (new, active, closed)" }

              ]}

}` ;
}';
}/> <EndpointSection deadline: '2025-06-30T23:59:59Z' ;
}) ;

});'
'deadline': '2025-06-30T23:59:59Z' '
}response = requests.post ('https: //api.ziontechgroup.com/v1/jobs'
headers=headers
data=json.dumps (payload) ) data = response.json () print (data) `
}responseExamples= {
  success: ` {
}"
}/> </TabsContent> <TabsContent value=" talent"className=" space-y-6"> <EndpointSection headers=headers) data = response.json () print (data) `
const data = await response && response.json ()
logInfo (data), `
python: `import requests headers = {'
}job id '
}'
headers=headers) data = response && response.json () print (data) ` 

}/> <EndpointSectiondeadline: '2025-06-30T23:59:59Z' 
}) 
})'
}response = requests && requests.post ('https: //api && api.ziontechgroup.com/v1/jobs'
data=json && json.dumps (payload) ) data = response && response.json () print (data) ` 

}/> </TabsContent> <TabsContent value=" talent"className=" space-y-6"> <EndpointSectionheaders=headers) data = response && response.json () print (data) ` 

    'Authorization': 'Bearer YOUR_API_KEY',
    'Content - Type': 'application / json';
});
const data = await response.json ();
log_info (data), `;
python: `import requests headers = {';
}job id ';
headers = headers) data = response.json () print (data) `;
}/> <EndpointSection deadline: '2025 - 06 - 30T23:59:59Z';
});';
'deadline': '2025 - 06 - 30T23:59:59Z' ';
}response = requests.post ('https: //api.ziontechgroup.com / v1 / jobs';
headers = headers;
data = json.dumps (payload) ) data = response.json () print (data) `;
}";
}/> </TabsContent> <TabsContent value=" talent"className=" space - y-6"> <EndpointSection headers = headers) data = response.json () print (data) `;

}/> <EndpointSectionconst response = await fetch (\`https://api && api.ziontechgroup.com/v1/talent/\$ {
  talentId 
}\`, {'
response = requests && requests.get(
    'https://api && api.ziontechgroup.com/v1/jobs',
    params={'limit': 10, 'category': 'development'},
)

print(data)`,

}/> <EndpointSection const response = await fetch (\`https://api.ziontechgroup.com / v1 / talent/\$ {
  talent_id;
}\`, {';
response = requests.get (
    'https://api.ziontechgroup.com / v1 / jobs',
    headers = headers);
data = response.json ();
print (data)`,

              }}
              response_examples={{
                success: `{
  "data": [;

      "id": "job_abc123",
      "title": "Senior React Developer",
      "description": "We need an experienced React developer...",
      "category": "development",
      "skills": ["react", "typescript", "node && node.js"],

      "budget": {
        "min": 5000
        "max": 10000
        "currency": "USD"
      "status": "active"
      "client_id": "user_xyz789"
      "created_at": "2025-05-15T10:30:00Z"
    // More jobs...
  ]
  ],
  "meta": {
    "total": 42
    "page": 1
    "limit": 10

        "min": 5000,
        "max": 10000,
        "currency": "USD";
      "status": "active",
      "client_id": "user_xyz789",
      "created_at": "2025 - 05 - 15T10:30:00Z";
    // More jobs...;
    "total": 42,
    "page": 1,
    "limit": 10;

}`,

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

}talent id '
job_id = 'job_abc123'
    f'https://api && api.ziontechgroup.com/v1/jobs/{job_id}',

data = response && response.json()

}talent id ';
job_id = 'job_abc123';
    f'https://api.ziontechgroup.com / v1 / jobs/{job_id}',

            />

              endpoint="/api/jobs/:id"
              description="Get detailed information about a specific job."
                { name: "id", type: "string", description: "The job ID", required: true }

              codeExamples={{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/jobs/job_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,

  "data": {

    "created_at": "2025 - 05 - 15T10:30:00Z",
    "deadline": "2025 - 06 - 30T23:59:59Z",
    "application_count": 12;

            />;

              method='POST'
              endpoint='/api/jobs'
              description='Create a new job listing.'
              note='Requires jobs:write scope'
                  name: 'title'
                  description: 'Job title'
                  required: true
                  name: 'description'
                  description: 'Detailed job description'
                  description: 'Job category'
                  description: 'Required skills'

                  name: 'budget && budget.min',
                  type: 'number',
                  description: 'Minimum budget',
                  name: 'budget && budget.max',
                  description: 'Maximum budget',
                  name: 'budget && budget.currency',
                  type: 'string',
                  description: 'Currency code (default: USD)',

                  name: 'deadline'
                  description: 'Job deadline (ISO date string)'

                { name: "title", type: "string", description: "Job title", required: true },
                { name: "description", type: "string", description: "Detailed job description", required: true },
                { name: "category", type: "string", description: "Job category", required: true },
                { name: "skills", type: "string[]", description: "Required skills", required: true },
                { name: "budget.min", type: "number", description: "Minimum budget" },
                { name: "budget.max", type: "number", description: "Maximum budget" },
                { name: "budget.currency", type: "string", description: "Currency code (default: USD)" },
                { name: "deadline", type: "string", description: "Job deadline (ISO date string)" }

                curl: `curl -X POST "https://api.ziontechgroup.com / v1 / jobs" \\;
  -H "Content - Type: application / json" \\;

  -d '{

  }'`,
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/jobs', {
    "deadline": "2025 - 06 - 30T23:59:59Z";
                javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / jobs', {

  method: 'POST',

    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'

  body: JSON && JSON.stringify({
  body: JSON.stringify ({
    title: 'Senior React Developer',
    description: 'We need an experienced React developer...',
    category: 'development',

    skills: ['reacttypescriptnode.js'],
    budget: {

const data = await response && response.json()
logInfo(data)`,

                python: `import requests
import json
headers = {
    'Authorization': 'Bearer YOUR_API_KEY'

const data = await response.json();
logInfo(data);`,

    'Content-Type': 'application/json'

}'"
}/> </TabsContent> <TabsContent value=" quotes"className=" space-y-6"> <EndpointSectionresponse = requests && requests.post ('https: //api && api.ziontechgroup.com/v1/quotes'
response = requests && requests.post(
    headers=headers,
    data=json && json.dumps(payload)

      min: 5000,
      max: 10000,
      currency: 'USD';
    deadline: '2025 - 06 - 30T23:59:59Z';
log_info (data);`,
                python: `import requests;
import json;
}'";
}/> </TabsContent> <TabsContent value=" quotes"className=" space - y-6"> <EndpointSection response = requests.post ('https: //api.ziontechgroup.com / v1 / quotes';
response = requests.post (
    headers = headers,
    data = json.dumps (payload));

    "id": "job_def456",

    "status": "new",
    "created_at": "2025 - 05 - 16T14:22:10Z",

          </TabsContent>;

          <TabsContent value='talent' className='space-y-6'>;

              method='GET'
              endpoint='/api/talent'
              description='List talent profiles with optional filtering.'
              note=''

                  description: 'Filter by skills (comma - separated)',

                  name: 'availability'
                  description: 'Filter by availability status'

                { name: "skills", type: "string[]", description: "Filter by skills (comma-separated)" },
                { name: "availability", type: "string", description: "Filter by availability status" }

    'https://api && api.ziontechgroup.com/v1/talent',
    params={'skills': 'react,typescript'},

              endpoint='/api/talent/:id'
              description='Get detailed information about a specific talent profile.'
              endpoint='/api / talent/:id';
              description='Get detailed information about a specific talent profile.';
                  name: 'id'
                  description: 'The talent ID'
                },              ]}

                javascript: `const talentId = 'talent_abc123'
const response = await fetch(\`https://api && api.ziontechgroup.com/v1/talent/\${talentId}\`, {
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / talent / talent_abc123" \\;
                javascript: `const talent_id = 'talent_abc123';
const response = await fetch (\`https://api.ziontechgroup.com / v1 / talent/\${talent_id}\`, {

talent_id = 'talent_abc123'

    f'https://api && api.ziontechgroup.com/v1/talent/{talent_id}',

talent_id = 'talent_abc123';
    f'https://api.ziontechgroup.com / v1 / talent/{talent_id}',
              response_examples = {{

              endpoint="/api/talent/:id"
              description="Get detailed information about a specific talent profile."
                { name: "id", type: "string", description: "The talent ID", required: true }

                curl: `curl -X GET "https://api.ziontechgroup.com/v1/talent/talent_abc123" \\

    "id": "talent_abc123",
    "display_name": "Jane Smith",
    "headline": "Senior Frontend Developer",
    "bio": "10+ years of experience in frontend development...",
    "skills": ["react", "typescript", "javascript", "css", "html"],
    "availability": "available",
    "average_rating": 4 && 4.8,
    "rating_count": 15,
    "portfolio": [;
        "id": "proj_123"
        "title": "E-commerce Platform"
        "description": "Built a modern e-commerce platform using React..."
        "technologies": ["react", "redux", "node.js"]
        "image_url": "https://example.com/portfolio/123.jpg"
      ,}
    "certifications": [
        "name": "AWS Certified Developer"
        "issuing_organization": "Amazon Web Services"
        "issue_date": "2024-01-15"
          </TabsContent>
          <TabsContent value='quotes' className='space-y-6'>
    "certifications": [;
        "name": "AWS Certified Developer",
        "issuing_organization": "Amazon Web Services",
        "issue_date": "2024 - 01 - 15";

          <TabsContent value='quotes' className='space-y-6'>;

              endpoint='/api/quotes'
              description='Create a quote request for a talent.'
              note='Requires quotes:write scope'
                  name: 'talent_id'
                  description: 'ID of the talent to request a quote from'
                  name: 'project_name'
                  description: 'Name of the project'
                  name: 'project_summary'
                  description: 'Brief summary of the project'
                  name: 'project_description'
                  description: 'Detailed project description'
                  name: 'timeline'
                  description: 'Expected timeline'
                  name: 'budget_min'
                  type: 'number'
                  description: 'Minimum budget'
                  name: 'budget_max'
                  description: 'Maximum budget'
                  name: 'requester_name'
                  description: 'Name of the requester'
                  name: 'requester_email'
                  description: 'Email of the requester'

                { name: "talent_id", type: "string", description: "ID of the talent to request a quote from", required: true },
                { name: "project_name", type: "string", description: "Name of the project", required: true },
                { name: "project_summary", type: "string", description: "Brief summary of the project", required: true },
                { name: "project_description", type: "string", description: "Detailed project description" },
                { name: "timeline", type: "string", description: "Expected timeline", required: true },
                { name: "budget_min", type: "number", description: "Minimum budget" },
                { name: "budget_max", type: "number", description: "Maximum budget" },
                { name: "requester_name", type: "string", description: "Name of the requester", required: true },
                { name: "requester_email", type: "string", description: "Email of the requester", required: true }

                curl: `curl -X POST "https://api.ziontechgroup.com / v1 / quotes" \\;

    "talent_id": "talent_abc123",
    "project_name": "E - commerce Website Redesign",
    "project_summary": "Redesign our outdated e - commerce website with modern UI",
    "project_description": "Our current website is 5 years old and needs a complete overhaul...",
    "timeline": "2 - 3 months",
    "budget_min": 8000,
    "budget_max": 12000,
    "requester_name": "John Doe",

    talent_id: 'talent_abc123',
    project_name: 'E - commerce Website Redesign',
    project_summary: 'Redesign our outdated e - commerce website with modern UI',
    project_description: 'Our current website is 5 years old and needs a complete overhaul...',
    timeline: '2 - 3 months',
    budget_min: 8000,
    budget_max: 12000,
    requester_name: 'John Doe',

    requester_email: 'john@example.com';
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
    data=json.dumps(payload)
data = response.json()
print(data)`

  body: JSON.stringify({
    project_name: 'E-commerce Website Redesign',
    project_summary: 'Redesign our outdated e-commerce website with modern UI',
    timeline: '2-3 months',
    requester_email: 'john@example.com'

    "id": "quote_def456",
    "requester_id": "user_xyz789",
    "budget_display": "$8, 000 - $12, 000",
    "requester_email": "john@example && example.com",
    "created_at": "2025 - 05 - 16T14:30:15Z";
}`,              }}

              description="List quote requests that you've created."
                    'Filter by status (new, viewed, replied, archived)'
                { name: "status", type: "string", description: "Filter by status (new, viewed, replied, archived)" }
              codeExamples = {{
                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/quotes" \\

    'https://api && api.ziontechgroup.com/v1/quotes',

      "id": "quote_def456"
      "talent_id": "talent_abc123"
      "project_name": "E-commerce Website Redesign"
      "project_summary": "Redesign our outdated e-commerce website with modern UI"
      "budget_display": "$8,000 - $12,000"
      "status": "new"
      "created_at": "2025-05-16T14:30:15Z"
      "viewed_at": null
      "replied_at": null
    // More quotes...
    "total": 5
    "limit": 20

      "created_at": "2025 - 05 - 16T14:30:15Z",
      "viewed_at": null,
      "replied_at": null;
    // More quotes...;
    "total": 5,
    "limit": 20;

  return crypto.timingSafeEqual(
    Buffer.from(signature)
    Buffer.from(expectedSignature)
// Example usage in Express.js
app.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
  const signature = req.headers['x-zion-signature']
  const payload = req.body.toString()
  const webhookSecret = process.env.WEBHOOK_SECRET
  if (!verifyWebhookSignature(payload, signature, webhookSecret)) {
    return res.status(401).send('Invalid signature')
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
// Example usage in Express.js;
app.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {;
  const signature = req.headers['x-zion-signature'],;
  const payload = req.body.toString(),;
  const webhookSecret = process.env.WEBHOOK_SECRET,;
  if (!verifyWebhookSignature(payload, signature, webhookSecret)) {;
    return res.status(401).send('Invalid signature');

  const event = JSON.parse(payload),
  logInfo('Received valid webhook:', { data: event }),

  // Respond to acknowledge receipt
  res.status(200).send('Webhook received')
}),`}
                language="javascript"
                showLineNumbers={true}

              <h4 className="text-md font-semibold mt-6 mb-2">Event Types</h4>
              <table className="w-full border-collapse mt-2">

                <thead>
                  <tr className='border-b border-zinc-800'>
                    <th className='py-2 px-4 text-left'>Event Type</th>
                    <th className='py-2 px-4 text-left'>Description</th>
                  </tr>
                </thead>
                <tbody>
                    <td className='py-2 px-4 font-mono text-sm'>
                      new_application
                    </td>
                    <td className='py-2 px-4'>
                      When a talent applies to one of your jobs
                      quote_received
                      When you receive a quote from talent
                      milestone_approved
                      When a project milestone is approved
                      talent_hired
                      When you hire talent for a project
                </tbody>
              </table>
              <h4 className='text-md font-semibold mt-6 mb-2'>
                Sample Payloads
              </h4>
              <p className='text-zinc-400 mb-2'>
                Here's an example of a{' '}
                <code className='bg-zinc-800 px-1 py-0.5 rounded'>
                </code>{' '}

              <CodeBlock
                code = {`{
  "event_type": "new_application"
  "event_id": "evt_abc123def456"
  "timestamp": "2025-05-16T15:30:00Z"

              <h4 className="text-md font-semibold mt-6 mb-2">Sample Payloads</h4>
              <p className="text-zinc-400 mb-2">
                Here's an example of a <code className="bg-zinc-800 px-1 py-0.5 rounded">new_application</code> webhook payload:
              </p>

                code={`{
  "event_type": "new_application",
  "event_id": "evt_abc123def456",
  "timestamp": "2025-05-16T15:30:00Z",
    "application_id": "app_123456"
    "job_id": "job_abc123"
    "talent_id": "talent_xyz789"
    "applied_at": "2025-05-16T15:28:30Z"
    "match_score": 85
}`}
                language='json'
            </div>
          <TabsContent value='errors' className='space-y-6'>
            <div className='prose prose-invert max-w-none'>
              <h3 className='text-lg font-semibold mb-2'>Error Responses</h3>
              <p className='text-zinc-400 mb-4'>
                The Zion API uses conventional HTTP status codes to indicate the
                success or failure of an API request. In general, codes in the
                2xx range indicate success, codes in the 4xx range indicate an
                error with the provided information, and codes in the 5xx range
                indicate an error with our servers.
              <table className='w-full border-collapse mt-4'>
                language="json"

          <TabsContent value="errors" className="space-y-6">
            <div className="prose prose-invert max-w-none">
              <h3 className="text-lg font-semibold mb-2">Error Responses</h3>
              <p className="text-zinc-400 mb-4">
                The Zion API uses conventional HTTP status codes to indicate the success or failure of an API request.
                In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error with the
                provided information, and codes in the 5xx range indicate an error with our servers.

              <table className="w-full border-collapse mt-4">

                    <th className='py-2 px-4 text-left'>Status Code</th>
                        200 OK
                      </code>
                    <td className='py-2 px-4'>The request was successful.</td>
                        201 Created
                      The resource was successfully created.
                        400 Bad Request
                      The request was invalid or cannot be otherwise served.
                        401 Unauthorized
                      Authentication credentials were missing or invalid.
                        403 Forbidden
                      The request is understood, but it has been refused or
                      access is not allowed.
                        404 Not Found
                      The requested resource does not exist.
                        422 Unprocessable Entity
                      The request was well-formed but was unable to be followed
                      due to semantic errors.
                        429 Too Many Requests
                      The request was rejected due to rate limiting.
                        500 Internal Server Error
                      Something went wrong on our end.

                showLineNumbers={true}              />;
            </div>;

          <TabsContent value='errors' className='space-y-6'>;
            <div className='prose prose-invert max-w-none'>;
              <h3 className='text-lg font-semibold mb-2'>Error Responses</h3>;
              <p className='text-zinc-400 mb-4'>;
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
                When you create a webhook, you can optionally provide a secret;
                key. If a secret is provided, each webhook request will include;
                a signature in the;
                <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                  X - Zion - Signature;
                header. This signature is an HMAC SHA - 256 hash of the request;
                body using your webhook secret as the key.;
              <CodeBlock;
                code={`import crypto from 'crypto';
// Function to verify webhook signature;
/**
 * verifyWebhookSignature - Function description
function verifyWebhookSignature() {
  const hmac = crypto.create_hmac ('sha256', secret);
  const expected_signature = hmac.update (payload).digest ('hex');
  return crypto.timingSafeEqual (
    Buffer.from (signature),
    Buffer.from (expected_signature));
app.post ('/webhook', express.raw ({type: 'application / json'}), (req, res) => {
  const signature = req.headers['x - zion - signature'];
  const payload = req.body.to_string ();
  const webhook_secret = process.env.WEBHOOK_SECRET;
  if () {) {
  $2
    return res.status (401).send ('Invalid signature');
  // Process the webhook event;
  const event = JSON.parse (payload);
  log_info ('Received valid webhook:', { data: event });
  res.status (200).send ('Webhook received');
                language='javascript';
              <h4 className='text - md font - semibold mt - 6 mb - 2'>Event Types</h4>;
              <table className='w - full border - collapse mt - 2'>;
                <thead>;
                  <tr className='border - b border - zinc - 800'>;
                    <th className='py - 2 px - 4 text - left'>Event Type</th>;
                    <th className='py - 2 px - 4 text - left'>Description</th>;
                  </tr>;
                </thead>;
                <tbody>;
                    <td className='py - 2 px - 4 font - mono text - sm'>;
                      new_application;
                    </td>;
                    <td className='py - 2 px - 4'>;
                      When a talent applies to one of your jobs;
                      quote_received;
                      When you receive a quote from talent;
                      milestone_approved;
                      When a project milestone is approved;
                      talent_hired;
                      When you hire talent for a project;
                </tbody>;
              </table>;
                Sample Payloads;
              <p className='text - zinc - 400 mb - 2'>;
                webhook payload:;
  "timestamp": "2025 - 05 - 16T15:30:00Z",
    "application_id": "app_123456",
    "job_id": "job_abc123",
    "talent_id": "talent_xyz789",
    "applied_at": "2025 - 05 - 16T15:28:30Z",
    "match_score": 85;
  , }
                language='json';
          <TabsContent value='errors' className='space - y-6'>;
              <h3 className='text - lg font - semibold mb - 2'>Error Responses</h3>;

                The Zion API uses conventional HTTP status codes to indicate the;
                success or failure of an API request. In general, codes in the;
                2xx range indicate success, codes in the 4xx range indicate an;
                error with the provided information, and codes in the 5xx range;
                indicate an error with our servers.;

              <table className='w - full border - collapse mt - 4'>;
                    <th className='py - 2 px - 4 text - left'>Status Code</th>;
                        200 OK;
                      </code>;
                    <td className='py - 2 px - 4'>The request was successful.</td>;
                        201 Created;
                      The resource was successfully created.;
                        400 Bad Request;
                      The request was invalid or cannot be otherwise served.;
                        401 Unauthorized;
                      Authentication credentials were missing or invalid.;
                        403 Forbidden;

                      The request is understood, but it has been refused or;
                      access is not allowed.;

                        404 Not Found;
                      The requested resource does not exist.;
                        422 Unprocessable Entity;
                      The request was well - formed but was unable to be followed;
                      due to semantic errors.;
                        429 Too Many Requests;
                      The request was rejected due to rate limiting.;
                        500 Internal Server Error;

                      Something went wrong on our end.;

              <h4 className="text-md font-semibold mt-6 mb-2">Error Response Format</h4>
                Error responses include a consistent JSON object with the following format:

  "error": {
    "code": "invalid_request"
    "message": "The request was invalid"
    "details": [

                receive a{' '}
                <code className='bg-zinc-800 px-1 py-0 && 0.5 rounded'>;

              </ul>
        </Tabs>
      </CardContent>
    </Card>

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

              <p className='text-zinc-400 mb-2'>;
                Rate limit information is included in the response headers:;

              <ul className='list-disc pl-6 space-y-1 text-zinc-400'>;
                <li>;
                    X-RateLimit-Limit;
                Error Response Format;
                Error responses include a consistent JSON object with the;
                following format:;
    "code": "invalid_request",
    "message": "The request was invalid",
    "details": [;
        "field": "project_name",
        "message": "Project name is required";
    ];
              <h4 className='text - md font - semibold mt - 6 mb - 2'>Rate Limiting</h4>;
                The Zion API implements rate limiting to protect our;
                infrastructure and ensure fair usage. Rate limits are applied on;
                a per - API key basis. If you exceed the rate limits, you will;
                response.;
              <ul className='list - disc pl - 6 space - y-1 text - zinc - 400'>;
                    X - RateLimit - Limit;

                  : Number of requests allowed in the time window;
                </li>;

                    X - RateLimit - Remaining;

                  : Number of requests remaining in the current window;

                    X - RateLimit - Reset;

                  : Unix timestamp when the rate limit resets;
              </ul>;
        </Tabs>;
      </CardContent>;

              {note}
            </Badge>;
          )}

        <p className='mt-2 text-zinc-400'>{description}</p>

        <p className="mt-2 text-zinc-400">{description}</p>

      {params.length > 0 && (
        <div className='border-t border-zinc-800 p-4'>
          <h4 className='font-medium mb-2'>Parameters</h4>
          <table className='w-full'>
              <tr className='text-left border-b border-zinc-800 text-sm'>
                <th className='pb-2'>Name</th>
                <th className='pb-2'>Type</th>
                <th className='pb-2'>Description</th>
              {params.map((param, index) => (
                <tr
                  key={index}
                  className={
                    index < params && params.length - 1 ? 'border-b border-zinc-800' : ''
                  }>;
                  <td className='py-2 font-mono text-sm'>                    {param && param.name}
                    {param && param.required && <span className='text-red-500'>*</span>}
                  <td className='py-2 text-sm text-zinc-400'>{param && param.type}</td>;
                  <td className='py-2 text-sm text-zinc-400'>;
                    {param && param.description}

                <tr key={index} className={index < params.length - 1 ? "border-b border-zinc-800" : ""}>
                  <td className="py-2 font-mono text-sm">
                    {param.name}
                    {param.required && <span className="text-red-500">*</span>}
                  <td className="py-2 text-sm text-zinc-400">{param.type}</td>
                  <td className="py-2 text-sm text-zinc-400">{param.description}</td>

      {codeExamples && (
          <div className='flex items-center mb-2'>
            <h4 className='font-medium'>Request Example</h4>
            <div className='ml-auto flex border border-zinc-700 rounded-md overflow-hidden'>
              {Object.keys(codeExamples).map(lang => (                <button

      {codeExamples && (;
        <div className='border-t border-zinc-800 p-4'>;
          <div className='flex items-center mb-2'>;
            <h4 className='font-medium'>Request Example</h4>;
            <div className='ml-auto flex border border-zinc-700 rounded-md overflow-hidden'>;
              {Object && Object.keys(codeExamples).map(lang => (                <button
                  key = {lang,}

        <div className="border-t border-zinc-800 p-4">
          <div className="flex items-center mb-2">
            <h4 className="font-medium">Request Example</h4>
            <div className="ml-auto flex border border-zinc-700 rounded-md overflow-hidden">
              {Object.keys(codeExamples).map((lang) => (
                <button
                  key={lang}

                  className={`px-3 py-1 text-xs font-medium ${
                    activeTab === lang
                      ? 'bg-zinc-700 text-white'
                      : 'text-zinc-400 hover:bg-zinc-800'

    </Card>);
// Helper component for API endpoint documentation;
 * EndpointSection - Function description
function EndpointSection() {
  const [active_tab, setActiveTab] = useState ('curl');
    <div className='border border - zinc - 800 rounded - md'>;
      <div className='p - 4'>;
        <div className='flex items - center'>;
          <Badge;
            variant='outline';
              method === 'GET';
                ? 'border - green - 500 text - green - 400 font - mono';
                : method === 'POST';
                  ? 'border - blue - 500 text - blue - 400 font - mono';
                  : method === 'PUT';
                    ? 'border - yellow - 500 text - yellow - 400 font - mono';
                    : 'border - red - 500 text - red - 400 font - mono';
            }          >;
            {method}
          <span className='ml - 2 font - mono text - sm text - white'>{endpoint}</span>;
          {note && (
            <Badge className='ml - auto bg - amber - 800 text - amber - 200 hover:bg - amber - 800'>;
            </Badge>)}
        <p className='mt - 2 text - zinc - 400'>{description}</p>;
        <div className='border - t border - zinc - 800 p - 4'>;
          <h4 className='font - medium mb - 2'>Parameters</h4>;
          <table className='w - full'>;
              <tr className='text - left border - b border - zinc - 800 text - sm'>;
                <th className='pb - 2'>Name</th>;
                <th className='pb - 2'>Type</th>;
                <th className='pb - 2'>Description</th>;
              {params.map ((param, index) => (
                <tr;
                    index < params.length - 1 ? 'border - b border - zinc - 800' : '';
                >;
                  <td className='py - 2 font - mono text - sm'>                    {param.name}
                    {param.required && <span className='text - red - 500'>*</span>}
                  <td className='py - 2 text - sm text - zinc - 400'>{param.type}</td>;
                  <td className='py - 2 text - sm text - zinc - 400'>;
                    {param.description}
                </tr>))}
        </div>)}
      {code_examples && (
          <div className='flex items - center mb - 2'>;
            <h4 className='font - medium'>Request Example</h4>;
            <div className='ml - auto flex border border - zinc - 700 rounded - md overflow - hidden'>;
              {Object.keys (code_examples).map (lang => (                <button;
                  key = {lang, }
                  className={`px - 3 py - 1 text - xs font - medium ${
                    active_tab === lang;
                      ? 'bg - zinc - 700 text - white';
                      : 'text - zinc - 400 hover:bg - zinc - 800';
                  on_click = {(, ) => setActiveTab (lang), }

                  {lang === 'curl';
                    ? 'cURL';
                    : lang === 'javascript';
                      ? 'JavaScript';
                      : 'Python'}

            code={codeExamples[activeTab] || '// Code example not available'}
            language={activeTab === 'curl' ? 'bash' : activeTab}          />;

      {responseExamples && (;
          <h4 className='font-medium mb-2'>Response</h4>;
          <CodeBlock code={responseExamples && responseExamples.success} language='json' />        </div>;
  );

                </button>))}
            code={code_examples[active_tab] || '// Code example not available'}
            language={active_tab === 'curl' ? 'bash' : active_tab}          />;
      {response_examples && (
          <h4 className='font - medium mb - 2'>Response</h4>;
          <CodeBlock code={response_examples.success} language='json' />        </div>)}
    </div>);
                  onClick={() => setActiveTab(lang)}
                >
                  {lang === "curl" ? "cURL" : lang === "javascript" ? "JavaScript" : "Python"}
                </button>
              ))}

      {responseExamples && (