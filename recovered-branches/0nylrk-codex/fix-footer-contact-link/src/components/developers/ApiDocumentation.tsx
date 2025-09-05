
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { BookOpen, Code, Copy, Terminal } from "lucide-react",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Alert, AlertDescription } from "@/components/ui/alert",
import { Badge } from "@/components/ui/badge",
import CodeBlock from "./CodeBlock",
=======
import { useState } from &quot;react&quot;;
import { BookOpen, Code, Copy, Terminal } from &quot;lucide-react&quot;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Alert, AlertDescription } from &quot;@/components/ui/alert&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;

import CodeBlock from &quot;./CodeBlock&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }
}),

<<<<<<< HEAD
const data = await response.json(),
// // // console.log(data),`,
=======
const data = await response.json();
// console.log(data);`,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                python: `import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
=======
import { useState } from "react",;
import { BookOpen, Code, Copy, Terminal } from "lucide-react",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Alert, AlertDescription } from "@/components/ui/alert",;
import { Badge } from "@/components/ui/badge",;
import CodeBlock from "./CodeBlock",;
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
      <CardContent>;
        <Alert className="bg-blue-900/30 border-blue-800 mb-6">;
          <Terminal className="h-4 w-4" />;
          <AlertDescription>;
            Make sure to include your API key in all requests as a Bearer token in the Authorization header.;
          </AlertDescription>;
        </Alert>;
        <Tabs defaultValue="jobs" className="space-y-4">;
          <TabsList className="bg-zinc-800 border-zinc-700">;
            <TabsTrigger value="jobs">Jobs</TabsTrigger>;
            <TabsTrigger value="talent">Talent</TabsTrigger>;
            <TabsTrigger value="quotes">Quotes</TabsTrigger>;
            <TabsTrigger value="webhooks">Webhooks</TabsTrigger>;
            <TabsTrigger value="errors">Errors</TabsTrigger>;
          </TabsList>;
          <TabsContent value="jobs" className="space-y-6">;
            <EndpointSection;
              method="GET";
              endpoint="/api/jobs";
              description="List all available jobs with optional filtering.";
              note="";
              params={[;
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" },;
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },;
                { name: "category", type: "string", description: "Filter by job category" },;
                { name: "skills", type: "string[]", description: "Filter by required skills (comma-separated)" },;
                { name: "status", type: "string", description: "Filter by job status (new, active, closed)" }
              ]}
              codeExamples={{;
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/jobs?limit=10&category=development" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content-Type: application/json"`,;
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/jobs?limit=10&category=development', {;
  method: 'GET',;
  headers: {;
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
  }
}),;
const data = await response.json(),;
// // // console.log(data),`,;
                python: `import requests;
headers = {;
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;
response = requests.get(;
    'https: //api.ziontechgroup.com/v1/jobs',;
    params={'limit': 10, 'category': 'development'},;
    headers=headers;
);
data = response.json();
print(data)`;
              }}
<<<<<<< HEAD
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
=======
              responseExamples={{;
                success: `{;
  "data": [;
    {;
      "id": "job_abc123",;
      "title": "Senior React Developer",;
      "description": "We need an experienced React developer...",;
      "category": "development",;
      "skills": ["react", "typescript", "node.js"],;
      "budget": {;
        "min": 5000,;
        "max": 10000,;
        "currency": "USD";
      },;
      "status": "active",;
      "client_id": "user_xyz789",;
      "created_at": "2025-05-15T10:30:00Z";
    },;
    // More jobs...;
  ],;
  "meta": {;
    "total": 42,;
    "page": 1,;
    "limit": 10;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
  }
}`;
              }}
<<<<<<< HEAD
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
<<<<<<< HEAD
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/jobs/job_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
                javascript: `const jobId = 'job_abc123',
=======
                curl: `curl -X GET &quot;https://api.ziontechgroup.com/v1/jobs/job_abc123&quot; \\
  -H &quot;Authorization: Bearer YOUR_API_KEY&quot; \\
  -H &quot;Content-Type: application/json&quot;`,
                javascript: `const jobId = 'job_abc123';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
const response = await fetch(\`https://api.ziontechgroup.com/v1/jobs/\${jobId}\`, {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }
}),

<<<<<<< HEAD
const data = await response.json(),
// // // console.log(data),`,
=======
const data = await response.json();
// console.log(data);`,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                python: `import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
=======
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
// // // console.log(data),`,;
                python: `import requests;
headers = {;
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
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
<<<<<<< HEAD
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
=======
              responseExamples={{;
                success: `{;
  "data": {;
    "id": "job_abc123",;
    "title": "Senior React Developer",;
    "description": "We need an experienced React developer...",;
    "category": "development",;
    "skills": ["react", "typescript", "node.js"],;
    "budget": {;
      "min": 5000,;
      "max": 10000,;
      "currency": "USD";
    },;
    "status": "active",;
    "client_id": "user_xyz789",;
    "created_at": "2025-05-15T10:30:00Z",;
    "deadline": "2025-06-30T23:59:59Z",;
    "application_count": 12;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
  }
}`;
              }}
<<<<<<< HEAD
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
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
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
    },
    deadline: '2025-06-30T23:59:59Z'
  })
}),

<<<<<<< HEAD
const data = await response.json(),
// // // console.log(data),`,
=======
const data = await response.json();
// console.log(data);`,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                python: `import requests
import json

headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
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
=======
              responseExamples={{;
                success: `{;
  "data": {;
    "id": "job_def456",;
    "title": "Senior React Developer",;
    "description": "We need an experienced React developer...",;
    "category": "development",;
    "skills": ["react", "typescript", "node.js"],;
    "budget": {;
      "min": 5000,;
      "max": 10000,;
      "currency": "USD";
    },;
    "status": "new",;
    "client_id": "user_xyz789",;
    "created_at": "2025-05-16T14:22:10Z",;
    "deadline": "2025-06-30T23:59:59Z";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
  }
}`;
              }}
<<<<<<< HEAD
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
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }
}),

<<<<<<< HEAD
const data = await response.json(),
// // // console.log(data),`,
=======
const data = await response.json();
// console.log(data);`,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                python: `import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
=======
            />;
          </TabsContent>;
          <TabsContent value="talent" className="space-y-6">;
            <EndpointSection;
              method="GET";
              endpoint="/api/talent";
              description="List talent profiles with optional filtering.";
              note="";
              params={[;
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" },;
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },;
                { name: "skills", type: "string[]", description: "Filter by skills (comma-separated)" },;
                { name: "availability", type: "string", description: "Filter by availability status" }
              ]}
              codeExamples={{;
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/talent?skills=react,typescript" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content-Type: application/json"`,;
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/talent?skills=react,typescript', {;
  method: 'GET',;
  headers: {;
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
  }
}),;
const data = await response.json(),;
// // // console.log(data),`,;
                python: `import requests;
headers = {;
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
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
=======
              responseExamples={{;
                success: `{;
  "data": [;
    {;
      "id": "talent_abc123",;
      "display_name": "Jane Smith",;
      "headline": "Senior Frontend Developer",;
      "skills": ["react", "typescript", "javascript"],;
      "availability": "available",;
      "average_rating": 4.8,;
      "rating_count": 15;
    },;
    // More talent profiles...;
  ],;
  "meta": {;
    "total": 28,;
    "page": 1,;
    "limit": 20;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
  }
}`;
              }}
<<<<<<< HEAD
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
<<<<<<< HEAD
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/talent/talent_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
                javascript: `const talentId = 'talent_abc123',
=======
                curl: `curl -X GET &quot;https://api.ziontechgroup.com/v1/talent/talent_abc123&quot; \\
  -H &quot;Authorization: Bearer YOUR_API_KEY&quot; \\
  -H &quot;Content-Type: application/json&quot;`,
                javascript: `const talentId = 'talent_abc123';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
const response = await fetch(\`https://api.ziontechgroup.com/v1/talent/\${talentId}\`, {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }
}),

<<<<<<< HEAD
const data = await response.json(),
// // // console.log(data),`,
=======
const data = await response.json();
// console.log(data);`,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                python: `import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
=======
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
// // // console.log(data),`,;
                python: `import requests;
headers = {;
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
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
<<<<<<< HEAD
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
=======
              responseExamples={{;
                success: `{;
  "data": {;
    "id": "talent_abc123",;
    "display_name": "Jane Smith",;
    "headline": "Senior Frontend Developer",;
    "bio": "10+ years of experience in frontend development...",;
    "skills": ["react", "typescript", "javascript", "css", "html"],;
    "availability": "available",;
    "average_rating": 4.8,;
    "rating_count": 15,;
    "portfolio": [;
      {;
        "id": "proj_123",;
        "title": "E-commerce Platform",;
        "description": "Built a modern e-commerce platform using React...",;
        "technologies": ["react", "redux", "node.js"],;
        "image_url": "https://example.com/portfolio/123.jpg";
      }
    ],;
    "certifications": [;
      {;
        "name": "AWS Certified Developer",;
        "issuing_organization": "Amazon Web Services",;
        "issue_date": "2024-01-15";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      }
    ];
  }
}`;
              }}
<<<<<<< HEAD
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

<<<<<<< HEAD
const data = await response.json(),
// // // console.log(data),`,
=======
const data = await response.json();
// console.log(data);`,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                python: `import requests
import json

headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
=======
            />;
          </TabsContent>;
          <TabsContent value="quotes" className="space-y-6">;
            <EndpointSection;
              method="POST";
              endpoint="/api/quotes";
              description="Create a quote request for a talent.";
              note="Requires quotes:write scope";
              params={[;
                { name: "talent_id", type: "string", description: "ID of the talent to request a quote from", required: true },;
                { name: "project_name", type: "string", description: "Name of the project", required: true },;
                { name: "project_summary", type: "string", description: "Brief summary of the project", required: true },;
                { name: "project_description", type: "string", description: "Detailed project description" },;
                { name: "timeline", type: "string", description: "Expected timeline", required: true },;
                { name: "budget_min", type: "number", description: "Minimum budget" },;
                { name: "budget_max", type: "number", description: "Maximum budget" },;
                { name: "requester_name", type: "string", description: "Name of the requester", required: true },;
                { name: "requester_email", type: "string", description: "Email of the requester", required: true }
              ]}
              codeExamples={{;
                curl: `curl -X POST "https://api.ziontechgroup.com/v1/quotes" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content-Type: application/json" \\;
  -d '{;
    "talent_id": "talent_abc123",;
    "project_name": "E-commerce Website Redesign",;
    "project_summary": "Redesign our outdated e-commerce website with modern UI",;
    "project_description": "Our current website is 5 years old and needs a complete overhaul...",;
    "timeline": "2-3 months",;
    "budget_min": 8000,;
    "budget_max": 12000,;
    "requester_name": "John Doe",;
    "requester_email": "john@example.com";
  }'`,;
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/quotes', {;
  method: 'POST',;
  headers: {;
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
  },;
  body: JSON.stringify({;
    talent_id: 'talent_abc123',;
    project_name: 'E-commerce Website Redesign',;
    project_summary: 'Redesign our outdated e-commerce website with modern UI',;
    project_description: 'Our current website is 5 years old and needs a complete overhaul...',;
    timeline: '2-3 months',;
    budget_min: 8000,;
    budget_max: 12000,;
    requester_name: 'John Doe',;
    requester_email: 'john@example.com';
  });
}),;
const data = await response.json(),;
// // // console.log(data),`,;
                python: `import requests;
import json;
headers = {;
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
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
<<<<<<< HEAD
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
=======
              responseExamples={{;
                success: `{;
  "data": {;
    "id": "quote_def456",;
    "talent_id": "talent_abc123",;
    "requester_id": "user_xyz789",;
    "project_name": "E-commerce Website Redesign",;
    "project_summary": "Redesign our outdated e-commerce website with modern UI",;
    "project_description": "Our current website is 5 years old and needs a complete overhaul...",;
    "timeline": "2-3 months",;
    "budget_min": 8000,;
    "budget_max": 12000,;
    "budget_display": "$8,000 - $12,000",;
    "requester_name": "John Doe",;
    "requester_email": "john@example.com",;
    "status": "new",;
    "created_at": "2025-05-16T14:30:15Z";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
  }
}`;
              }}
<<<<<<< HEAD
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
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }
}),

<<<<<<< HEAD
const data = await response.json(),
// // // console.log(data),`,
=======
const data = await response.json();
// console.log(data);`,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                python: `import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
=======
            />;
            <EndpointSection;
              method="GET";
              endpoint="/api/quotes";
              description="List quote requests that you've created.";
              note="";
              params={[;
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" },;
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },;
                { name: "status", type: "string", description: "Filter by status (new, viewed, replied, archived)" }
              ]}
              codeExamples={{;
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/quotes" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content-Type: application/json"`,;
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/quotes', {;
  method: 'GET',;
  headers: {;
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
  }
}),;
const data = await response.json(),;
// // // console.log(data),`,;
                python: `import requests;
headers = {;
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;
response = requests.get(;
    'https: //api.ziontechgroup.com/v1/quotes',;
    headers=headers;
);
data = response.json();
print(data)`;
              }}
<<<<<<< HEAD
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
=======
              responseExamples={{;
                success: `{;
  "data": [;
    {;
      "id": "quote_def456",;
      "talent_id": "talent_abc123",;
      "project_name": "E-commerce Website Redesign",;
      "project_summary": "Redesign our outdated e-commerce website with modern UI",;
      "budget_display": "$8,000 - $12,000",;
      "status": "new",;
      "created_at": "2025-05-16T14:30:15Z",;
      "viewed_at": null,;
      "replied_at": null;
    },;
    // More quotes...;
  ],;
  "meta": {;
    "total": 5,;
    "page": 1,;
    "limit": 20;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
  }
}`;
              }}
<<<<<<< HEAD
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
                code={`import crypto from 'crypto',
// Function to verify webhook signature
function verifyWebhookSignature(payload, signature, secret) {
  const hmac = crypto.createHmac('sha256', secret),
  const expectedSignature = hmac.update(payload).digest('hex'),
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  )
=======
            />;
          </TabsContent>;
          <TabsContent value="webhooks" className="space-y-6">;
            <div className="prose prose-invert max-w-none">;
              <h3 className="text-lg font-semibold mb-2">Webhook Events</h3>;
              <p className="text-zinc-400 mb-4">;
                The Zion API can send webhook notifications when certain events occur in your account.;
                You can configure webhooks in the Webhooks tab of the Developer Dashboard.;
              </p>;
              <h4 className="text-md font-semibold mt-6 mb-2">Authentication</h4>;
              <p className="text-zinc-400 mb-4">;
                When you create a webhook, you can optionally provide a secret key.;
                If a secret is provided, each webhook request will include a signature in the;
                <code className="bg-zinc-800 px-1 py-0.5 rounded">X-Zion-Signature</code> header.;
                This signature is an HMAC SHA-256 hash of the request body using your webhook secret as the key.;
              </p>;
              <CodeBlock;
                code={`import crypto from 'crypto',;
// Function to verify webhook signature;
function verifyWebhookSignature(payload, signature, secret) {;
  const hmac = crypto.createHmac('sha256', secret),;
  const expectedSignature = hmac.update(payload).digest('hex'),;
  return crypto.timingSafeEqual(;
    Buffer.from(signature),;
    Buffer.from(expectedSignature);
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
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
<<<<<<< HEAD
  
  // Process the webhook event
<<<<<<< HEAD
  const event = JSON.parse(payload),
  // // // console.log('Received valid webhook:', event),
  
  // Respond to acknowledge receipt
  res.status(200).send('Webhook received')
}),`}
                language="javascript"
=======
  const event = JSON.parse(payload);
  // console.log('Received valid webhook:', event);
  
  // Respond to acknowledge receipt
  res.status(200).send('Webhook received');
});`}
                language=&quot;javascript"
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
=======
;
  // Process the webhook event;
  const event = JSON.parse(payload),;
  // // // console.log('Received valid webhook:', event),;
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      }
    ];
  }
}`}
<<<<<<< HEAD
                language=&quot;json"
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
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded&quot;>X-RateLimit-Reset</code>: Unix timestamp when the rate limit resets</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
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
}) {
<<<<<<< HEAD
  const [activeTab, setActiveTab] = useState("curl"),
=======
  const [activeTab, setActiveTab] = useState(&quot;curl");
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
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
=======
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
}) {;
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
            }
          >;
            {method}
          </Badge>;
          <span className="ml-2 font-mono text-sm text-white">{endpoint}</span>;
          {note && (;
            <Badge className="ml-auto bg-amber-800 text-amber-200 hover:bg-amber-800">;
              {note}
            </Badge>;
          )}
<<<<<<< HEAD
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
=======
        </div>;
        <p className="mt-2 text-zinc-400">{description}</p>;
      </div>;
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
                <tr key={index} className={index < params.length - 1 ? "border-b border-zinc-800" : ""}>;
                  <td className="py-2 font-mono text-sm">;
                    {param.name}
                    {param.required && <span className="text-red-500">*</span>}
                  </td>;
                  <td className="py-2 text-sm text-zinc-400">{param.type}</td>;
                  <td className="py-2 text-sm text-zinc-400">{param.description}</td>;
                </tr>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              ))}
            </tbody>;
          </table>;
        </div>;
      )}
<<<<<<< HEAD
      
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
                    activeTab === lang;
                      ? "bg-zinc-700 text-white";
                      : "text-zinc-400 hover:bg-zinc-800";
                  }`}
                  onClick={() => setActiveTab(lang)}
                >;
                  {lang === "curl" ? "cURL" : lang === "javascript" ? "JavaScript" : "Python"}
                </button>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              ))}
            </div>;
          </div>;
          <CodeBlock;
            code={codeExamples[activeTab]}
<<<<<<< HEAD
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
=======
            language={activeTab === "curl" ? "bash" : activeTab}
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      )}
    </div>;
  );
}
;