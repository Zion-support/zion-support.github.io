
import { useState } from &quot;react&quot;;
import { BookOpen, Terminal } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Alert, AlertDescription } from &quot;@/components/ui/alert&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;

import CodeBlock from &quot;./CodeBlock&quot;;
import { logInfo } from '@/utils/productionLogger';


interface EndpointParam {
  name: string;
  type: string;
  description: string;
  required?: boolean;
}

interface EndpointSectionProps {
  method: string;
  endpoint: string;
  description: string;
  note?: string;
  params?: EndpointParam[];
  codeExamples?: Record<string, string>;
  responseExamples?: { success: string };
}

export function ApiDocumentation() {
  return (
    <Card className=&quot;bg-zinc-900 border-zinc-800 text-white&quot;>
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
            <EndpointSection
              method=&quot;GET&quot;
              endpoint=&quot;/api/jobs&quot;
              description=&quot;List all available jobs with optional filtering.&quot;
              note="&quot;
              params={[
                { name: &quot;page&quot;, type: &quot;integer&quot;, description: &quot;Page number for pagination (default: 1)&quot; },
                { name: &quot;limit&quot;, type: &quot;integer&quot;, description: &quot;Number of results per page (default: 20, max: 100)&quot; },
                { name: &quot;category&quot;, type: &quot;string&quot;, description: &quot;Filter by job category&quot; },
                { name: &quot;skills&quot;, type: &quot;string[]&quot;, description: &quot;Filter by required skills (comma-separated)&quot; },
                { name: &quot;status&quot;, type: &quot;string&quot;, description: &quot;Filter by job status (new, active, closed)&quot; }
              ]}
              codeExamples={{
                curl: `curl -X GET &quot;https://api.ziontechgroup.com/v1/jobs?limit=10&category=development&quot; \\
  -H &quot;Authorization: Bearer YOUR_API_KEY&quot; \\
  -H &quot;Content-Type: application/json&quot;`,
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/jobs?limit=10&category=development', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
logInfo(data);`,
                python: `import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

response = requests.get(
    'https://api.ziontechgroup.com/v1/jobs',
    params={'limit': 10, 'category': 'development'},
    headers=headers
)

data = response.json()
print(data)`
              }}
              responseExamples={{
                success: `{
  &quot;data&quot;: [
    {
      &quot;id&quot;: &quot;job_abc123&quot;,
      &quot;title&quot;: &quot;Senior React Developer&quot;,
      &quot;description&quot;: &quot;We need an experienced React developer...&quot;,
      &quot;category&quot;: &quot;development&quot;,
      &quot;skills&quot;: [&quot;react&quot;, &quot;typescript&quot;, &quot;node.js&quot;],
      &quot;budget&quot;: {
        &quot;min&quot;: 5000,
        &quot;max&quot;: 10000,
        &quot;currency&quot;: &quot;USD&quot;
      },
      &quot;status&quot;: &quot;active&quot;,
      &quot;client_id&quot;: &quot;user_xyz789&quot;,
      &quot;created_at&quot;: &quot;2025-05-15T10:30:00Z&quot;
    },
    // More jobs...
  ],
  &quot;meta&quot;: {
    &quot;total&quot;: 42,
    &quot;page&quot;: 1,
    &quot;limit&quot;: 10
  }
}`
              }}
            />
            
            <EndpointSection
              method=&quot;GET&quot;
              endpoint=&quot;/api/jobs/:id&quot;
              description=&quot;Get detailed information about a specific job.&quot;
              note="&quot;
              params={[
                { name: &quot;id&quot;, type: &quot;string&quot;, description: &quot;The job ID&quot;, required: true }
              ]}
              codeExamples={{
                curl: `curl -X GET &quot;https://api.ziontechgroup.com/v1/jobs/job_abc123&quot; \\
  -H &quot;Authorization: Bearer YOUR_API_KEY&quot; \\
  -H &quot;Content-Type: application/json&quot;`,
                javascript: `const jobId = 'job_abc123';
const response = await fetch(\`https://api.ziontechgroup.com/v1/jobs/\${jobId}\`, {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
logInfo(data);`,
                python: `import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

job_id = 'job_abc123'
response = requests.get(
    f'https://api.ziontechgroup.com/v1/jobs/{job_id}',
    headers=headers
)

data = response.json()
print(data)`
              }}
              responseExamples={{
                success: `{
  &quot;data&quot;: {
    &quot;id&quot;: &quot;job_abc123&quot;,
    &quot;title&quot;: &quot;Senior React Developer&quot;,
    &quot;description&quot;: &quot;We need an experienced React developer...&quot;,
    &quot;category&quot;: &quot;development&quot;,
    &quot;skills&quot;: [&quot;react&quot;, &quot;typescript&quot;, &quot;node.js&quot;],
    &quot;budget&quot;: {
      &quot;min&quot;: 5000,
      &quot;max&quot;: 10000,
      &quot;currency&quot;: &quot;USD&quot;
    },
    &quot;status&quot;: &quot;active&quot;,
    &quot;client_id&quot;: &quot;user_xyz789&quot;,
    &quot;created_at&quot;: &quot;2025-05-15T10:30:00Z&quot;,
    &quot;deadline&quot;: &quot;2025-06-30T23:59:59Z&quot;,
    &quot;application_count&quot;: 12
  }
}`
              }}
            />
            
            <EndpointSection
              method=&quot;POST&quot;
              endpoint=&quot;/api/jobs&quot;
              description=&quot;Create a new job listing.&quot;
              note=&quot;Requires jobs:write scope&quot;
              params={[
                { name: &quot;title&quot;, type: &quot;string&quot;, description: &quot;Job title&quot;, required: true },
                { name: &quot;description&quot;, type: &quot;string&quot;, description: &quot;Detailed job description&quot;, required: true },
                { name: &quot;category&quot;, type: &quot;string&quot;, description: &quot;Job category&quot;, required: true },
                { name: &quot;skills&quot;, type: &quot;string[]&quot;, description: &quot;Required skills&quot;, required: true },
                { name: &quot;budget.min&quot;, type: &quot;number&quot;, description: &quot;Minimum budget&quot; },
                { name: &quot;budget.max&quot;, type: &quot;number&quot;, description: &quot;Maximum budget&quot; },
                { name: &quot;budget.currency&quot;, type: &quot;string&quot;, description: &quot;Currency code (default: USD)&quot; },
                { name: &quot;deadline&quot;, type: &quot;string&quot;, description: &quot;Job deadline (ISO date string)&quot; }
              ]}
              codeExamples={{
                curl: `curl -X POST &quot;https://api.ziontechgroup.com/v1/jobs&quot; \\
  -H &quot;Authorization: Bearer YOUR_API_KEY&quot; \\
  -H &quot;Content-Type: application/json&quot; \\
  -d '{
    &quot;title&quot;: &quot;Senior React Developer&quot;,
    &quot;description&quot;: &quot;We need an experienced React developer...&quot;,
    &quot;category&quot;: &quot;development&quot;,
    &quot;skills&quot;: [&quot;react&quot;, &quot;typescript&quot;, &quot;node.js&quot;],
    &quot;budget&quot;: {
      &quot;min&quot;: 5000,
      &quot;max&quot;: 10000,
      &quot;currency&quot;: &quot;USD&quot;
    },
    &quot;deadline&quot;: &quot;2025-06-30T23:59:59Z&quot;
  }'`,
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/jobs', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Senior React Developer',
    description: 'We need an experienced React developer...',
    category: 'development',
    skills: ['react', 'typescript', 'node.js'],
    budget: {
      min: 5000,
      max: 10000,
      currency: 'USD'
    },
    deadline: '2025-06-30T23:59:59Z'
  })
});

const data = await response.json();
logInfo(data);`,
                python: `import requests
import json

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

payload = {
    'title': 'Senior React Developer',
    'description': 'We need an experienced React developer...',
    'category': 'development',
    'skills': ['react', 'typescript', 'node.js'],
    'budget': {
        'min': 5000,
        'max': 10000,
        'currency': 'USD'
    },
    'deadline': '2025-06-30T23:59:59Z'
}

response = requests.post(
    'https://api.ziontechgroup.com/v1/jobs',
    headers=headers,
    data=json.dumps(payload)
)

data = response.json()
print(data)`
              }}
              responseExamples={{
                success: `{
  &quot;data&quot;: {
    &quot;id&quot;: &quot;job_def456&quot;,
    &quot;title&quot;: &quot;Senior React Developer&quot;,
    &quot;description&quot;: &quot;We need an experienced React developer...&quot;,
    &quot;category&quot;: &quot;development&quot;,
    &quot;skills&quot;: [&quot;react&quot;, &quot;typescript&quot;, &quot;node.js&quot;],
    &quot;budget&quot;: {
      &quot;min&quot;: 5000,
      &quot;max&quot;: 10000,
      &quot;currency&quot;: &quot;USD&quot;
    },
    &quot;status&quot;: &quot;new&quot;,
    &quot;client_id&quot;: &quot;user_xyz789&quot;,
    &quot;created_at&quot;: &quot;2025-05-16T14:22:10Z&quot;,
    &quot;deadline&quot;: &quot;2025-06-30T23:59:59Z&quot;
  }
}`
              }}
            />
          </TabsContent>
          
          <TabsContent value=&quot;talent&quot; className=&quot;space-y-6&quot;>
            <EndpointSection
              method=&quot;GET&quot;
              endpoint=&quot;/api/talent&quot;
              description=&quot;List talent profiles with optional filtering.&quot;
              note="&quot;
              params={[
                { name: &quot;page&quot;, type: &quot;integer&quot;, description: &quot;Page number for pagination (default: 1)&quot; },
                { name: &quot;limit&quot;, type: &quot;integer&quot;, description: &quot;Number of results per page (default: 20, max: 100)&quot; },
                { name: &quot;skills&quot;, type: &quot;string[]&quot;, description: &quot;Filter by skills (comma-separated)&quot; },
                { name: &quot;availability&quot;, type: &quot;string&quot;, description: &quot;Filter by availability status&quot; }
              ]}
              codeExamples={{
                curl: `curl -X GET &quot;https://api.ziontechgroup.com/v1/talent?skills=react,typescript&quot; \\
  -H &quot;Authorization: Bearer YOUR_API_KEY&quot; \\
  -H &quot;Content-Type: application/json&quot;`,
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/talent?skills=react,typescript', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
logInfo(data);`,
                python: `import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

response = requests.get(
    'https://api.ziontechgroup.com/v1/talent',
    params={'skills': 'react,typescript'},
    headers=headers
)

data = response.json()
print(data)`
              }}
              responseExamples={{
                success: `{
  &quot;data&quot;: [
    {
      &quot;id&quot;: &quot;talent_abc123&quot;,
      &quot;display_name&quot;: &quot;Jane Smith&quot;,
      &quot;headline&quot;: &quot;Senior Frontend Developer&quot;,
      &quot;skills&quot;: [&quot;react&quot;, &quot;typescript&quot;, &quot;javascript&quot;],
      &quot;availability&quot;: &quot;available&quot;,
      &quot;average_rating&quot;: 4.8,
      &quot;rating_count&quot;: 15
    },
    // More talent profiles...
  ],
  &quot;meta&quot;: {
    &quot;total&quot;: 28,
    &quot;page&quot;: 1,
    &quot;limit&quot;: 20
  }
}`
              }}
            />
            
            <EndpointSection
              method=&quot;GET&quot;
              endpoint=&quot;/api/talent/:id&quot;
              description=&quot;Get detailed information about a specific talent profile.&quot;
              note="&quot;
              params={[
                { name: &quot;id&quot;, type: &quot;string&quot;, description: &quot;The talent ID&quot;, required: true }
              ]}
              codeExamples={{
                curl: `curl -X GET &quot;https://api.ziontechgroup.com/v1/talent/talent_abc123&quot; \\
  -H &quot;Authorization: Bearer YOUR_API_KEY&quot; \\
  -H &quot;Content-Type: application/json&quot;`,
                javascript: `const talentId = 'talent_abc123';
const response = await fetch(\`https://api.ziontechgroup.com/v1/talent/\${talentId}\`, {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
logInfo(data);`,
                python: `import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

talent_id = 'talent_abc123'
response = requests.get(
    f'https://api.ziontechgroup.com/v1/talent/{talent_id}',
    headers=headers
)

data = response.json()
print(data)`
              }}
              responseExamples={{
                success: `{
  &quot;data&quot;: {
    &quot;id&quot;: &quot;talent_abc123&quot;,
    &quot;display_name&quot;: &quot;Jane Smith&quot;,
    &quot;headline&quot;: &quot;Senior Frontend Developer&quot;,
    &quot;bio&quot;: &quot;10+ years of experience in frontend development...&quot;,
    &quot;skills&quot;: [&quot;react&quot;, &quot;typescript&quot;, &quot;javascript&quot;, &quot;css&quot;, &quot;html&quot;],
    &quot;availability&quot;: &quot;available&quot;,
    &quot;average_rating&quot;: 4.8,
    &quot;rating_count&quot;: 15,
    &quot;portfolio&quot;: [
      {
        &quot;id&quot;: &quot;proj_123&quot;,
        &quot;title&quot;: &quot;E-commerce Platform&quot;,
        &quot;description&quot;: &quot;Built a modern e-commerce platform using React...&quot;,
        &quot;technologies&quot;: [&quot;react&quot;, &quot;redux&quot;, &quot;node.js&quot;],
        &quot;image_url&quot;: &quot;https://example.com/portfolio/123.jpg&quot;
      }
    ],
    &quot;certifications&quot;: [
      {
        &quot;name&quot;: &quot;AWS Certified Developer&quot;,
        &quot;issuing_organization&quot;: &quot;Amazon Web Services&quot;,
        &quot;issue_date&quot;: &quot;2024-01-15&quot;
      }
    ]
  }
}`
              }}
            />
          </TabsContent>
          
          <TabsContent value=&quot;quotes&quot; className=&quot;space-y-6&quot;>
            <EndpointSection
              method=&quot;POST&quot;
              endpoint=&quot;/api/quotes&quot;
              description=&quot;Create a quote request for a talent.&quot;
              note=&quot;Requires quotes:write scope&quot;
              params={[
                { name: &quot;talent_id&quot;, type: &quot;string&quot;, description: &quot;ID of the talent to request a quote from&quot;, required: true },
                { name: &quot;project_name&quot;, type: &quot;string&quot;, description: &quot;Name of the project&quot;, required: true },
                { name: &quot;project_summary&quot;, type: &quot;string&quot;, description: &quot;Brief summary of the project&quot;, required: true },
                { name: &quot;project_description&quot;, type: &quot;string&quot;, description: &quot;Detailed project description&quot; },
                { name: &quot;timeline&quot;, type: &quot;string&quot;, description: &quot;Expected timeline&quot;, required: true },
                { name: &quot;budget_min&quot;, type: &quot;number&quot;, description: &quot;Minimum budget&quot; },
                { name: &quot;budget_max&quot;, type: &quot;number&quot;, description: &quot;Maximum budget&quot; },
                { name: &quot;requester_name&quot;, type: &quot;string&quot;, description: &quot;Name of the requester&quot;, required: true },
                { name: &quot;requester_email&quot;, type: &quot;string&quot;, description: &quot;Email of the requester&quot;, required: true }
              ]}
              codeExamples={{
                curl: `curl -X POST &quot;https://api.ziontechgroup.com/v1/quotes&quot; \\
  -H &quot;Authorization: Bearer YOUR_API_KEY&quot; \\
  -H &quot;Content-Type: application/json&quot; \\
  -d '{
    &quot;talent_id&quot;: &quot;talent_abc123&quot;,
    &quot;project_name&quot;: &quot;E-commerce Website Redesign&quot;,
    &quot;project_summary&quot;: &quot;Redesign our outdated e-commerce website with modern UI&quot;,
    &quot;project_description&quot;: &quot;Our current website is 5 years old and needs a complete overhaul...&quot;,
    &quot;timeline&quot;: &quot;2-3 months&quot;,
    &quot;budget_min&quot;: 8000,
    &quot;budget_max&quot;: 12000,
    &quot;requester_name&quot;: &quot;John Doe&quot;,
    &quot;requester_email&quot;: &quot;john@example.com&quot;
  }'`,
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/quotes', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
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
                python: `import requests
import json

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

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
}

response = requests.post(
    'https://api.ziontechgroup.com/v1/quotes',
    headers=headers,
    data=json.dumps(payload)
)

data = response.json()
print(data)`
              }}
              responseExamples={{
                success: `{
  &quot;data&quot;: {
    &quot;id&quot;: &quot;quote_def456&quot;,
    &quot;talent_id&quot;: &quot;talent_abc123&quot;,
    &quot;requester_id&quot;: &quot;user_xyz789&quot;,
    &quot;project_name&quot;: &quot;E-commerce Website Redesign&quot;,
    &quot;project_summary&quot;: &quot;Redesign our outdated e-commerce website with modern UI&quot;,
    &quot;project_description&quot;: &quot;Our current website is 5 years old and needs a complete overhaul...&quot;,
    &quot;timeline&quot;: &quot;2-3 months&quot;,
    &quot;budget_min&quot;: 8000,
    &quot;budget_max&quot;: 12000,
    &quot;budget_display&quot;: &quot;$8,000 - $12,000&quot;,
    &quot;requester_name&quot;: &quot;John Doe&quot;,
    &quot;requester_email&quot;: &quot;john@example.com&quot;,
    &quot;status&quot;: &quot;new&quot;,
    &quot;created_at&quot;: &quot;2025-05-16T14:30:15Z&quot;
  }
}`
              }}
            />
            
            <EndpointSection
              method=&quot;GET&quot;
              endpoint=&quot;/api/quotes&quot;
              description=&quot;List quote requests that you've created.&quot;
              note="&quot;
              params={[
                { name: &quot;page&quot;, type: &quot;integer&quot;, description: &quot;Page number for pagination (default: 1)&quot; },
                { name: &quot;limit&quot;, type: &quot;integer&quot;, description: &quot;Number of results per page (default: 20, max: 100)&quot; },
                { name: &quot;status&quot;, type: &quot;string&quot;, description: &quot;Filter by status (new, viewed, replied, archived)&quot; }
              ]}
              codeExamples={{
                curl: `curl -X GET &quot;https://api.ziontechgroup.com/v1/quotes&quot; \\
  -H &quot;Authorization: Bearer YOUR_API_KEY&quot; \\
  -H &quot;Content-Type: application/json&quot;`,
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/quotes', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
logInfo(data);`,
                python: `import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

response = requests.get(
    'https://api.ziontechgroup.com/v1/quotes',
    headers=headers
)

data = response.json()
print(data)`
              }}
              responseExamples={{
                success: `{
  &quot;data&quot;: [
    {
      &quot;id&quot;: &quot;quote_def456&quot;,
      &quot;talent_id&quot;: &quot;talent_abc123&quot;,
      &quot;project_name&quot;: &quot;E-commerce Website Redesign&quot;,
      &quot;project_summary&quot;: &quot;Redesign our outdated e-commerce website with modern UI&quot;,
      &quot;budget_display&quot;: &quot;$8,000 - $12,000&quot;,
      &quot;status&quot;: &quot;new&quot;,
      &quot;created_at&quot;: &quot;2025-05-16T14:30:15Z&quot;,
      &quot;viewed_at&quot;: null,
      &quot;replied_at&quot;: null
    },
    // More quotes...
  ],
  &quot;meta&quot;: {
    &quot;total&quot;: 5,
    &quot;page&quot;: 1,
    &quot;limit&quot;: 20
  }
}`
              }}
            />
          </TabsContent>
          
          <TabsContent value=&quot;webhooks" className="space-y-6">
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
                <code className="bg-zinc-800 px-1 py-0.5 rounded&quot;>X-Zion-Signature</code> header.
                This signature is an HMAC SHA-256 hash of the request body using your webhook secret as the key.
              </p>
              
              <CodeBlock
                code={`import crypto from 'crypto';

// Function to verify webhook signature
function verifyWebhookSignature(payload, signature, secret) {
  const hmac = crypto.createHmac('sha256', secret);
  const expectedSignature = hmac.update(payload).digest('hex');
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
}

// Example usage in Express.js
app.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
  const signature = req.headers['x-zion-signature'];
  const payload = req.body.toString();
  const webhookSecret = process.env.WEBHOOK_SECRET;
  
  if (!verifyWebhookSignature(payload, signature, webhookSecret)) {
    return res.status(401).send('Invalid signature');
  }
  
  // Process the webhook event
  const event = JSON.parse(payload);
  logInfo('Received valid webhook:', { data: event });
  
  // Respond to acknowledge receipt
  res.status(200).send('Webhook received');
});`}
                language=&quot;javascript"
                showLineNumbers={true}
              />
              
              <h4 className="text-md font-semibold mt-6 mb-2">Event Types</h4>
              <table className="w-full border-collapse mt-2">
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
              
              <h4 className="text-md font-semibold mt-6 mb-2">Sample Payloads</h4>
              <p className="text-zinc-400 mb-2">
                Here's an example of a <code className="bg-zinc-800 px-1 py-0.5 rounded&quot;>new_application</code> webhook payload:
              </p>
              
              <CodeBlock
                code={`{
  &quot;event_type&quot;: &quot;new_application&quot;,
  &quot;event_id&quot;: &quot;evt_abc123def456&quot;,
  &quot;timestamp&quot;: &quot;2025-05-16T15:30:00Z&quot;,
  &quot;data&quot;: {
    &quot;application_id&quot;: &quot;app_123456&quot;,
    &quot;job_id&quot;: &quot;job_abc123&quot;,
    &quot;talent_id&quot;: &quot;talent_xyz789&quot;,
    &quot;applied_at&quot;: &quot;2025-05-16T15:28:30Z&quot;,
    &quot;status&quot;: &quot;new&quot;,
    &quot;match_score&quot;: 85
  }
}`}
                language=&quot;json&quot;
                showLineNumbers={true}
              />
            </div>
          </TabsContent>
          
          <TabsContent value=&quot;errors" className="space-y-6">
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
              
              <h4 className="text-md font-semibold mt-6 mb-2">Error Response Format</h4>
              <p className="text-zinc-400 mb-2&quot;>
                Error responses include a consistent JSON object with the following format:
              </p>
              
              <CodeBlock
                code={`{
  &quot;error&quot;: {
    &quot;code&quot;: &quot;invalid_request&quot;,
    &quot;message&quot;: &quot;The request was invalid&quot;,
    &quot;details&quot;: [
      {
        &quot;field&quot;: &quot;project_name&quot;,
        &quot;message&quot;: &quot;Project name is required&quot;
      }
    ]
  }
}`}
                language=&quot;json"
              />
              
              <h4 className="text-md font-semibold mt-6 mb-2">Rate Limiting</h4>
              <p className="text-zinc-400 mb-4">
                The Zion API implements rate limiting to protect our infrastructure and ensure fair usage.
                Rate limits are applied on a per-API key basis. If you exceed the rate limits, you will receive 
                a <code className="bg-zinc-800 px-1 py-0.5 rounded">429 Too Many Requests</code> response.
              </p>
              
              <p className="text-zinc-400 mb-2">
                Rate limit information is included in the response headers:
              </p>
              
              <ul className="list-disc pl-6 space-y-1 text-zinc-400">
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Limit</code>: Number of requests allowed in the time window</li>
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Remaining</code>: Number of requests remaining in the current window</li>
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded&quot;>X-RateLimit-Reset</code>: Unix timestamp when the rate limit resets</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
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
  const [activeTab, setActiveTab] = useState(&quot;curl");
  
  return (
    <div className="border border-zinc-800 rounded-md">
      <div className="p-4">
        <div className="flex items-center&quot;>
          <Badge 
            variant=&quot;outline" 
            className={
              method === 'GET' 
                ? "border-green-500 text-green-400 font-mono&quot; 
                : method === 'POST' 
                ? &quot;border-blue-500 text-blue-400 font-mono&quot;
                : method === 'PUT'
                ? &quot;border-yellow-500 text-yellow-400 font-mono&quot;
                : &quot;border-red-500 text-red-400 font-mono"
            }
          >
            {method}
          </Badge>
          <span className="ml-2 font-mono text-sm text-white">{endpoint}</span>
          {note && (
            <Badge className="ml-auto bg-amber-800 text-amber-200 hover:bg-amber-800">
              {note}
            </Badge>
          )}
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
                <tr key={index} className={index < params.length - 1 ? "border-b border-zinc-800&quot; : "&quot;}>
                  <td className=&quot;py-2 font-mono text-sm&quot;>
                    {param.name}
                    {param.required && <span className=&quot;text-red-500&quot;>*</span>}
                  </td>
                  <td className=&quot;py-2 text-sm text-zinc-400&quot;>{param.type}</td>
                  <td className=&quot;py-2 text-sm text-zinc-400&quot;>{param.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      {codeExamples && (
        <div className=&quot;border-t border-zinc-800 p-4&quot;>
          <div className=&quot;flex items-center mb-2&quot;>
            <h4 className=&quot;font-medium&quot;>Request Example</h4>
            <div className=&quot;ml-auto flex border border-zinc-700 rounded-md overflow-hidden&quot;>
              {Object.keys(codeExamples).map((lang) => (
                <button
                  key={lang}
                  className={`px-3 py-1 text-xs font-medium ${
                    activeTab === lang 
                      ? &quot;bg-zinc-700 text-white&quot; 
                      : &quot;text-zinc-400 hover:bg-zinc-800&quot;
                  }`}
                  onClick={() => setActiveTab(lang)}
                >
                  {lang === &quot;curl&quot; ? &quot;cURL&quot; : lang === &quot;javascript&quot; ? &quot;JavaScript&quot; : &quot;Python&quot;}
                </button>
              ))}
            </div>
          </div>
          <CodeBlock 
            code={codeExamples[activeTab] || &quot;// Code example not available&quot;}
            language={activeTab === &quot;curl&quot; ? &quot;bash&quot; : activeTab}
          />
        </div>
      )}
      
      {responseExamples && (
        <div className=&quot;border-t border-zinc-800 p-4&quot;>
          <h4 className=&quot;font-medium mb-2&quot;>Response</h4>
          <CodeBlock
            code={responseExamples.success}
            language=&quot;json&quot;
          />
        </div>
      )}
    </div>
  );
}

