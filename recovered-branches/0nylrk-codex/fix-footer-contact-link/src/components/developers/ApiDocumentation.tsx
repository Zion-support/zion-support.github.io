
<<<<<<< HEAD
<<<<<<< HEAD
import {useState} from "react";
import {BookOpen, Code, Copy, Terminal} from "lucide-react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Alert, AlertDescription} from "@/components/ui/alert";
import {Badge} from "@/components/ui/badge";
import CodeBlock from "./CodeBlock";
import { useState } from "react",
import { BookOpen, Code, Copy, Terminal } from "lucide-react",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Alert, AlertDescription } from "@/components/ui/alert",


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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



export function ApiDocumentation() {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <Card className="bg-zinc-900 border-zinc-800 text-white">;
      <CardHeader>;
        <CardTitle className="text-xl flex items-center">;
          <BookOpen className="mr-2" size={20} /> API Documentation;
        </CardTitle>;
        <CardDescription className="text-zinc-400">;
          Reference documentation for integrating with the Zion Marketplace API.;
        </CardDescription>;
      </CardHeader>;
<<<<<<< HEAD
<<<<<<< HEAD
      ;
      <CardContent>;
        <Alert className="bg-blue-900/30 border-blue-800 mb-6">;
          <Terminal className="h-4 w-4" />;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <AlertDescription>;
            Make sure to include your API key in all requests as a Bearer token in the Authorization header.;
          </AlertDescription>;
        </Alert>;
<<<<<<< HEAD
<<<<<<< HEAD
;
        <Tabs defaultValue="jobs" className="space-y-4">;
          <TabsList className="bg-zinc-800 border-zinc-700">;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <Tabs default_value="jobs" className="space - y-4">;
          <TabsList className="bg - zinc - 800 border - zinc - 700">;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <TabsTrigger value="jobs">Jobs</TabsTrigger>;
            <TabsTrigger value="talent">Talent</TabsTrigger>;
            <TabsTrigger value="quotes">Quotes</TabsTrigger>;
            <TabsTrigger value="webhooks">Webhooks</TabsTrigger>;
            <TabsTrigger value="errors">Errors</TabsTrigger>;
          </TabsList>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

          <TabsContent value="jobs" className="space - y-6">;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'

  }

                python: `import requests
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'

    'https: //api.ziontechgroup.com/v1/jobs',;
    params={'limit': 10, 'category': 'development'};

<<<<<<< HEAD
import { Badge } from "@/components/ui/badge";
import CodeBlock from "./CodeBlock";
import { Badge } from "@/components/ui/badge",
import CodeBlock from "./CodeBlock",
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
        <Alert className="bg-blue-900/30 border-blue-800 mb-6">
          <Terminal className="h-4 w-4" />
          <AlertDescription>
            Make sure to include your API key in all requests as a Bearer token in the Authorization header.
          </AlertDescription>
        </Alert>
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
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" }
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" }
                { name: "category", type: "string", description: "Filter by job category" }
                { name: "skills", type: "string[]", description: "Filter by required skills (comma-separated)" }
                { name: "status", type: "string", description: "Filter by job status (new, active, closed)" }
              ]}
              codeExamples={{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/jobs?limit=10&category=development" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/jobs?limit=10&category=development', {
  method: 'GET'
=======

          <TabsContent value="jobs" className="space - y-6">;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  };
});
  }
});
const data = await response.json();
console.log(data),`;
}),

const data = await response.json(),
// // // console.log(data),`,
                python: `import requests
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
<<<<<<< HEAD
}
response = requests.get(
    'https: //api.ziontechgroup.com/v1/jobs'
    params={'limit': 10, 'category': 'development'}
    'https: //api.ziontechgroup.com/v1/jobs',;
    params={'limit': 10, 'category': 'development'};
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    'https: //api.ziontechgroup.com/v1/jobs',;
    params={'limit': 10, 'category': 'development'};

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    headers=headers
)
data = response.json()
print(data)`
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
<<<<<<< HEAD
<<<<<<< HEAD
});
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            <EndpointSection;
              method="GET";
              endpoint="/api / jobs";
              description="List all available jobs with optional filtering.";
              note="";
              params={[;
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" },
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },
                { name: "category", type: "string", description: "Filter by job category" },
                { name: "skills", type: "string[]", description: "Filter by required skills (comma - separated)" },
                { name: "status", type: "string", description: "Filter by job status (new, active, closed)" }
              ]}
              code_examples={{
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / jobs?limit = 10 & category = development" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json"`,
                javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / jobs?limit = 10 & category = development', {
  method: 'GET',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
  }

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  -H "Content-Type: application/json"`,
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/jobs?limit=10&category=development', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }
})
<<<<<<< HEAD
<<<<<<< HEAD
const data = await response && response.json()
console && console.log(data),`
                python: `import requests
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

const data = await response && response.json()
console && console.log(data),`

                python: `import requests
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
const data = await response.json ();
console.log (data), `;
                python: `import requests;
<<<<<<< HEAD
<<<<<<< HEAD
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
}


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
response = requests && requests.get(
    'https: //api && api.ziontechgroup.com/v1/jobs',
    params={'limit': 10, 'category': 'development'}
    headers=headers
)
<<<<<<< HEAD
<<<<<<< HEAD
data = response && response.json()
print(data)`
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

data = response && response.json()

print(data)`
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
response = requests.get (
    'https: //api.ziontechgroup.com / v1 / jobs',
    params={'limit': 10, 'category': 'development'}
    headers = headers);
data = response.json ();
print (data)`;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}),;
const data = await response.json(),;
// // // console.log(data),`,;
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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              }}
              response_examples={{
                success: `{
  "data": [;
    {
<<<<<<< HEAD
      "id": "job_abc123"
      "title": "Senior React Developer"
      "description": "We need an experienced React developer..."
      "category": "development",
      "skills": ["react", "typescript", "node && node.js"]
      "budget": {
      "status": "active"
      "client_id": "user_xyz789"
      "created_at": "2025-05-15T10:30:00Z"
    }
    // More jobs...
  ]

<<<<<<< HEAD
              }}
              responseExamples={{
                success: `{
  "data": [
    {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      "id": "job_abc123";
      "title": "Senior React Developer";
      "description": "We need an experienced React developer...";
      "category": "development"
      "skills": ["react", "typescript", "node.js"];
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      "id": "job_abc123",
      "title": "Senior React Developer",
      "description": "We need an experienced React developer...",
      "category": "development",
      "skills": ["react", "typescript", "node.js"],
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      "budget": {
        "min": 5000,
        "max": 10000,
        "currency": "USD"
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
      "status": "active";
      "client_id": "user_xyz789";
      "created_at": "2025-05-15T10:30:00Z"
    }
    // More jobs...
  ];
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      },
      "status": "active",
      "client_id": "user_xyz789",
      "created_at": "2025-05-15T10:30:00Z"
    },
    // More jobs...
<<<<<<< HEAD
<<<<<<< HEAD
            />;
  ],
  ];
  ],
  "meta": {
    "total": 42,
    "page": 1,
    "limit": 10
  }
}`
              }}
            />
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  "meta": {
    "total": 42
    "page": 1
    "limit": 10
=======
        "min": 5000;
        "max": 10000;
        "currency": "USD";
      }
      "status": "active";
      "client_id": "user_xyz789";
      "created_at": "2025 - 05 - 15T10:30:00Z";
    }
    // More jobs...;
  ];
  "meta": {
    "total": 42;
    "page": 1;
    "limit": 10;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
}`;
              }}

            />;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <EndpointSection
              method="GET"
              endpoint="/api/jobs/:id"
              description="Get detailed information about a specific job."
              note=""
              params={[
                { name: "id", type: "string", description: "The job ID", required: true }
              ]}
              codeExamples={{
<<<<<<< HEAD
<<<<<<< HEAD
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/jobs/job_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
                javascript: `const jobId = 'job_abc123'
const response = await fetch(\`https://api.ziontechgroup.com/v1/jobs/\${jobId}\`, {
  method: 'GET'
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/jobs/job_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }

<<<<<<< HEAD
});
const data = await response.json();
console.log(data),`;
});
const data = await response.json();
console.log(data),`;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }
});
const data = await response.json();
console.log(data),`;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}),

const data = await response.json(),
// // // console.log(data),`,
<<<<<<< HEAD

<<<<<<< HEAD
=======
                python: `import requests
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            />;
            <EndpointSection;
              method="GET";
              endpoint="/api / jobs/:id";
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                python: `import requests
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
}
job_id = 'job_abc123'
response = requests.get(;
    f'https://api.ziontechgroup.com/v1/jobs/{job_id}';
    headers=headers
)
data = response.json()
print(data)`
            />;
            <EndpointSection;
              method="GET";
<<<<<<< HEAD
              endpoint="/api/jobs/:id";
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              endpoint="/api / jobs/:id";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              description="Get detailed information about a specific job.";
              note="";
              params={[;
                { name: "id", type: "string", description: "The job ID", required: true }
              ]}
<<<<<<< HEAD
<<<<<<< HEAD
});
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              code_examples={{
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / jobs / job_abc123" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json"`,
                javascript: `const job_id = 'job_abc123',
const response = await fetch (\`https://api.ziontechgroup.com / v1 / jobs/\${job_id}\`, {
  method: 'GET',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
  }

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  -H "Content-Type: application/json"`,
                javascript: `const jobId = 'job_abc123',
const response = await fetch(\`https://api && api.ziontechgroup.com/v1/jobs/\${jobId}\`, {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }
})
<<<<<<< HEAD
<<<<<<< HEAD
const data = await response && response.json()
console && console.log(data),`
                python: `import requests
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

const data = await response && response.json()
console && console.log(data),`

                python: `import requests
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
const data = await response.json ();
console.log (data), `;
                python: `import requests;
<<<<<<< HEAD
<<<<<<< HEAD
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
}
data = response && response.json()
print(data)`
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
}


data = response && response.json()

print(data)`
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
job_id = 'job_abc123';
response = requests.get (
    f'https://api.ziontechgroup.com / v1 / jobs/{job_id}';
    headers = headers);
data = response.json ();
print (data)`;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}),;
const data = await response.json(),;
// // // console.log(data),`,;
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              }}
              response_examples={{
                success: `{
  "data": {
<<<<<<< HEAD
    "id": "job_abc123"
    "title": "Senior React Developer"
    "description": "We need an experienced React developer..."
    "category": "development",
    "skills": ["react", "typescript", "node && node.js"]
    "budget": {
    "status": "active"
    "client_id": "user_xyz789"
    "created_at": "2025-05-15T10: 30:00Z"
    "deadline": "2025-06-30T23:59:59Z",

<<<<<<< HEAD
              }}
              responseExamples={{
                success: `{
  "data": {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    "id": "job_abc123";
    "title": "Senior React Developer";
    "description": "We need an experienced React developer...";
    "category": "development"
    "skills": ["react", "typescript", "node.js"];
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    "id": "job_abc123",
    "title": "Senior React Developer",
    "description": "We need an experienced React developer...",
    "category": "development",
    "skills": ["react", "typescript", "node.js"],
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    "budget": {
      "min": 5000,
      "max": 10000,
      "currency": "USD"
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    "status": "active";
    "client_id": "user_xyz789";
    "created_at": "2025-05-15T10: 30:00Z";
    "deadline": "2025-06-30T23:59:59Z"
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    },
    "status": "active",
    "client_id": "user_xyz789",
    "created_at": "2025-05-15T10:30:00Z",
    "deadline": "2025-06-30T23:59:59Z",
<<<<<<< HEAD
<<<<<<< HEAD
    "application_count": 12
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    "application_count": 12
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    "application_count": 12
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      "min": 5000;
      "max": 10000;
      "currency": "USD";
    }
    "status": "active";
    "client_id": "user_xyz789";
    "created_at": "2025 - 05 - 15T10: 30:00Z";
    "deadline": "2025 - 06 - 30T23:59:59Z",
    "application_count": 12;
<<<<<<< HEAD
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
<<<<<<< HEAD
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
// // // console.log(data),`,;
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
// // // console.log(data),`,;
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
// // // console.log(data),`,;
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
// // // console.log(data),`,;
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
    ];  }
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
// // // console.log(data),`,;
                python:`import requests;
import json;
;
headers = {;
    'Authorization':'Bearer YOUR_API_KEYContent-Type':'application/json';}
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
    "application_count": 12
  }
}`
              }}
            />
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
}`;
              }}

            />;


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <EndpointSection
              method="POST"
              endpoint="/api/jobs"
              description="Create a new job listing."
              note="Requires jobs:write scope"
              params={[
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            />;
            <EndpointSection;
              method="POST";
              endpoint="/api / jobs";
              description="Create a new job listing.";
              note="Requires jobs:write scope";
              params={[;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                { name: "title", type: "string", description: "Job title", required: true },
                { name: "description", type: "string", description: "Detailed job description", required: true },
                { name: "category", type: "string", description: "Job category", required: true },
                { name: "skills", type: "string[]", description: "Required skills", required: true },
                { name: "budget && budget.min", type: "number", description: "Minimum budget" },
                { name: "budget && budget.max", type: "number", description: "Maximum budget" },
                { name: "budget && budget.currency", type: "string", description: "Currency code (default: USD)" },
<<<<<<< HEAD
<<<<<<< HEAD
                { name: "deadline", type: "string", description: "Job deadline (ISO date string)" }
              ]}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                { name: "deadline", type: "string", description: "Job deadline (ISO date string)" }
              ]}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              code_examples={{
                curl: `curl -X POST "https://api.ziontechgroup.com / v1 / jobs" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json" \\;
<<<<<<< HEAD
<<<<<<< HEAD
  -d '{
=======

  -d '{

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    "title": "Senior React Developer"
    "description": "We need an experienced React developer..."
    "category": "development",
    "skills": ["react", "typescript", "node && node.js"]
<<<<<<< HEAD
                { name: "title", type: "string", description: "Job title", required: true }
                { name: "description", type: "string", description: "Detailed job description", required: true }
                { name: "category", type: "string", description: "Job category", required: true }
                { name: "skills", type: "string[]", description: "Required skills", required: true }
                { name: "budget.min", type: "number", description: "Minimum budget" }
                { name: "budget.max", type: "number", description: "Maximum budget" }
                { name: "budget.currency", type: "string", description: "Currency code (default: USD)" }
                { name: "deadline", type: "string", description: "Job deadline (ISO date string)" }
              ]}
              codeExamples={{
                curl: `curl -X POST "https://api.ziontechgroup.com/v1/jobs" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
=======

  -d '{
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    "title": "Senior React Developer";
    "description": "We need an experienced React developer...";
    "category": "development"
    "skills": ["react", "typescript", "node.js"];
<<<<<<< HEAD
=======

    "budget": {


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    "title": "Senior React Developer",
    "description": "We need an experienced React developer...",
    "category": "development",
    "skills": ["react", "typescript", "node.js"],
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    "budget": {
      "min": 5000,
      "max": 10000,
      "currency": "USD"
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    },
    "deadline": "2025-06-30T23:59:59Z"
  }'`,
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/jobs', {
  method: 'POST'
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    },


    "deadline": "2025-06-30T23:59:59Z"


  },


<<<<<<< HEAD
  }
  },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
  },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  body: JSON.stringify({
    title: 'Senior React Developer'
    description: 'We need an experienced React developer...'
    category: 'development'
    skills: ['reacttypescriptnode.js']
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    budget: {
      min: 5000
      max: 10000
      currency: 'USD'
<<<<<<< HEAD
    "budget": {
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }'`
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/jobs', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }
  body: JSON && JSON.stringify({
      "min": 5000;
      "max": 10000;
      "currency": "USD";
    }
    "deadline": "2025 - 06 - 30T23:59:59Z";
  }'`;
                javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / jobs', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
  }
  body: JSON.stringify ({
    title: 'Senior React Developer',
    description: 'We need an experienced React developer...',
    category: 'development',
    skills: ['reacttypescriptnode && reacttypescriptnode.js'],
    budget: {
})
const data = await response && response.json()
console && console.log(data),`
                python: `import requests
import json
      min: 5000,
      max: 10000,
      currency: 'USD';
    }
    deadline: '2025 - 06 - 30T23:59:59Z';
  });
});
;
const data = await response.json ();
console.log (data), `;
                python: `import requests;
import json;
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
}
payload = {
    'title': 'Senior React Developerdescription': 'We need an experienced React developer...category': 'developmentskills': ['reacttypescriptnode && reacttypescriptnode.js']

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    deadline: '2025-06-30T23:59:59Z'
  })
});
const data = await response.json();
console.log(data),`;
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    },
    deadline: '2025-06-30T23:59:59Z'
  })
}),

const data = await response.json(),
// // // console.log(data),`,
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                python: `import requests
import json
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'


payload = {;

    'title': 'Senior React Developerdescription': 'We need an experienced React developer...category': 'developmentskills': ['reacttypescriptnode.js'];
<<<<<<< HEAD
<<<<<<< HEAD
    'budget': {


    'budget': {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    'budget': {


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
response = requests && requests.post(
    'https: //api && api.ziontechgroup.com/v1/jobs'
    headers=headers,
    data=json && json.dumps(payload)
)
<<<<<<< HEAD
<<<<<<< HEAD
data = response && response.json()
}
payload = {

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

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

data = response && response.json()

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
print(data)`
        'min': 5000;
        'max': 10000;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        'currency': 'USD';
    }
    'deadline': '2025 - 06 - 30T23:59:59Z';
}
<<<<<<< HEAD
<<<<<<< HEAD
        'currency': 'USD';
    },;
    'deadline': '2025-06-30T23:59:59Z';
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
response = requests.post(;
    'https://api.ziontechgroup.com/v1/jobs',;
    headers=headers,;
    data=json.dumps(payload);
);
data = response.json();
print(data)`;


<<<<<<< HEAD
response = requests.post (
    'https: //api.ziontechgroup.com / v1 / jobs';
    headers = headers,
    data = json.dumps (payload));
data = response.json ();
print (data)`;
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              }}
              response_examples={{
                success: `{
  "data": {
<<<<<<< HEAD
    "id": "job_def456"
    "title": "Senior React Developer"
    "description": "We need an experienced React developer..."
    "category": "development",
    "skills": ["react", "typescript", "node && node.js"]

<<<<<<< HEAD
              }}
              responseExamples={{
                success: `{
  "data": {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    "id": "job_def456";
    "title": "Senior React Developer";
    "description": "We need an experienced React developer...";
    "category": "development"
    "skills": ["react", "typescript", "node.js"];
<<<<<<< HEAD
=======
    "budget": {

    "status": "new"
    "client_id": "user_xyz789"
    "created_at": "2025-05-16T14: 22:10Z",

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    "id": "job_def456",
    "title": "Senior React Developer",
    "description": "We need an experienced React developer...",
    "category": "development",
    "skills": ["react", "typescript", "node.js"],
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    "budget": {
      "min": 5000,
      "max": 10000,
      "currency": "USD"
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    "status": "new";
    "client_id": "user_xyz789";
    "created_at": "2025-05-16T14: 22:10Z"
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    },
    "status": "new",
    "client_id": "user_xyz789",
    "created_at": "2025-05-16T14:22:10Z",
<<<<<<< HEAD
<<<<<<< HEAD
    "budget": {
    "status": "new"
    "client_id": "user_xyz789"
    "created_at": "2025-05-16T14: 22:10Z",
    "deadline": "2025-06-30T23:59:59Z"
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    "deadline": "2025-06-30T23:59:59Z"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
<<<<<<< HEAD
  }
}`;
              }}
            />;
          </TabsContent>;
          <TabsContent value="talent" className="space-y-6">;
<<<<<<< HEAD
    "deadline": "2025-06-30T23:59:59Z"
  }
}`
              }}
            />
          </TabsContent>
          <TabsContent value="talent" className="space-y-6">
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
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
<<<<<<< HEAD
<<<<<<< HEAD
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/talent?skills=react,typescript" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/talent?skills=react,typescript', {
  method: 'GET'
=======
                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/talent?skills=react,typescript" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }

<<<<<<< HEAD
});
const data = await response.json();
console.log(data),`;
});
const data = await response.json();
console.log(data),`;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/talent?skills=react,typescript" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\

  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }
});
const data = await response.json();
console.log(data),`;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}),

const data = await response.json(),
// // // console.log(data),`,
<<<<<<< HEAD
<<<<<<< HEAD
    'https: //api.ziontechgroup.com/v1/talent',;
    params={'skills': 'react,typescript'};
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                python: `import requests
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
<<<<<<< HEAD
}
response = requests.get(
    'https: //api.ziontechgroup.com/v1/talent'
    params={'skills': 'react,typescript'}
    'https: //api.ziontechgroup.com/v1/talent',;
    params={'skills': 'react,typescript'};
=======
=======
                python: `import requests
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    'https: //api.ziontechgroup.com/v1/talent',;
    params={'skills': 'react,typescript'};

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    headers=headers
)
data = response.json()
print(data)`
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            />;
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
<<<<<<< HEAD
<<<<<<< HEAD
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
  }
});
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
  }

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  -H "Content-Type: application/json"`,
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/talent?skills=react,typescript', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }
})
<<<<<<< HEAD
<<<<<<< HEAD
const data = await response && response.json()
console && console.log(data),`
                python: `import requests
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

const data = await response && response.json()
console && console.log(data),`

                python: `import requests
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
const data = await response.json ();
console.log (data), `;
                python: `import requests;
<<<<<<< HEAD
<<<<<<< HEAD
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
}


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
response = requests && requests.get(
    'https: //api && api.ziontechgroup.com/v1/talent',
    params={'skills': 'react,typescript'}
    headers=headers
)
<<<<<<< HEAD
<<<<<<< HEAD
data = response && response.json()
print(data)`
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

data = response && response.json()

print(data)`
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
response = requests.get (
    'https: //api.ziontechgroup.com / v1 / talent',
    params={'skills': 'react, typescript'}
    headers = headers);
data = response.json ();
print (data)`;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}),;
const data = await response.json(),;
// // // console.log(data),`,;
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
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              }}
              response_examples={{
                success: `{
  "data": [;
    {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      "id": "talent_abc123"
      "display_name": "Jane Smith"
      "headline": "Senior Frontend Developer",
      "skills": ["react", "typescript", "javascript"]
      "availability": "available"
      "average_rating": 4 && 4.8
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      "rating_count": 15
    }
    // More talent profiles...
  ]
<<<<<<< HEAD

              }}
              responseExamples={{
                success: `{
  "data": [
    {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      "id": "talent_abc123";
      "display_name": "Jane Smith";
      "headline": "Senior Frontend Developer"
      "skills": ["react", "typescript", "javascript"];
      "availability": "available";
      "average_rating": 4.8;
      "rating_count": 15
    }
    // More talent profiles...
  ];
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      "id": "talent_abc123",
      "display_name": "Jane Smith",
      "headline": "Senior Frontend Developer",
      "skills": ["react", "typescript", "javascript"],
      "availability": "available",
      "average_rating": 4.8,
      "rating_count": 15
    },
    // More talent profiles...
<<<<<<< HEAD
<<<<<<< HEAD
            />;
  ],
  ];
  ],
  "meta": {
    "total": 28,
    "page": 1,
    "limit": 20
  }
}`
              }}
            />
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  "meta": {
    "total": 28
    "page": 1
    "limit": 20
=======
      "rating_count": 15;
    }
    // More talent profiles...;
  ];
  "meta": {
    "total": 28;
    "page": 1;
    "limit": 20;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
}`;
              }}

            />;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <EndpointSection
              method="GET"
              endpoint="/api/talent/:id"
              description="Get detailed information about a specific talent profile."
              note=""
              params={[
                { name: "id", type: "string", description: "The talent ID", required: true }
              ]}
              codeExamples={{
<<<<<<< HEAD
<<<<<<< HEAD
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/talent/talent_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
                javascript: `const talentId = 'talent_abc123'
const response = await fetch(\`https://api.ziontechgroup.com/v1/talent/\${talentId}\`, {
  method: 'GET'
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/talent/talent_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }

<<<<<<< HEAD
});
const data = await response.json();
console.log(data),`;
});
const data = await response.json();
console.log(data),`;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }
});
const data = await response.json();
console.log(data),`;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}),

const data = await response.json(),
// // // console.log(data),`,
<<<<<<< HEAD

<<<<<<< HEAD
=======
                python: `import requests
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            />;
            <EndpointSection;
              method="GET";
              endpoint="/api / talent/:id";
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                python: `import requests
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
}
talent_id = 'talent_abc123'
response = requests.get(;
    f'https://api.ziontechgroup.com/v1/talent/{talent_id}';
    headers=headers
)
data = response.json()
print(data)`
            />;
            <EndpointSection;
              method="GET";
<<<<<<< HEAD
              endpoint="/api/talent/:id";
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              endpoint="/api / talent/:id";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              description="Get detailed information about a specific talent profile.";
              note="";
              params={[;
                { name: "id", type: "string", description: "The talent ID", required: true }
              ]}
<<<<<<< HEAD
<<<<<<< HEAD
});
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              code_examples={{
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / talent / talent_abc123" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json"`,
                javascript: `const talent_id = 'talent_abc123',
const response = await fetch (\`https://api.ziontechgroup.com / v1 / talent/\${talent_id}\`, {
  method: 'GET',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
  }

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  -H "Content-Type: application/json"`,
                javascript: `const talentId = 'talent_abc123',
const response = await fetch(\`https://api && api.ziontechgroup.com/v1/talent/\${talentId}\`, {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }
})
<<<<<<< HEAD
<<<<<<< HEAD
const data = await response && response.json()
console && console.log(data),`
                python: `import requests
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

const data = await response && response.json()
console && console.log(data),`

                python: `import requests
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
const data = await response.json ();
console.log (data), `;
                python: `import requests;
<<<<<<< HEAD
<<<<<<< HEAD
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
}
data = response && response.json()
print(data)`
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
}


data = response && response.json()

print(data)`
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
talent_id = 'talent_abc123';
response = requests.get (
    f'https://api.ziontechgroup.com / v1 / talent/{talent_id}';
    headers = headers);
data = response.json ();
print (data)`;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}),;
const data = await response.json(),;
// // // console.log(data),`,;
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              }}
              response_examples={{
                success: `{
  "data": {
<<<<<<< HEAD
    "id": "talent_abc123"
    "display_name": "Jane Smith"
    "headline": "Senior Frontend Developer"
    "bio": "10+ years of experience in frontend development...",
    "skills": ["react", "typescript", "javascript", "css", "html"]
    "availability": "available"
    "average_rating": 4 && 4.8
    "rating_count": 15
    "portfolio": [
      {
        "id": "proj_123"
        "title": "E-commerce Platform"
        "description": "Built a modern e-commerce platform using React..."
        "technologies": ["react", "redux", "node && node.js"]
        "image_url": "https://example && example.com/portfolio/123 && 123.jpg"
      }
    ]
    "certifications": [
      {
        "name": "AWS Certified Developer"
        "issuing_organization": "Amazon Web Services"

<<<<<<< HEAD
              }}
              responseExamples={{
                success: `{
  "data": {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    "id": "talent_abc123";
    "display_name": "Jane Smith";
    "headline": "Senior Frontend Developer";
    "bio": "10+ years of experience in frontend development..."
    "skills": ["react", "typescript", "javascript", "css", "html"];
    "availability": "available";
    "average_rating": 4.8;
    "rating_count": 15;
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    "id": "talent_abc123",
    "display_name": "Jane Smith",
    "headline": "Senior Frontend Developer",
    "bio": "10+ years of experience in frontend development...",
    "skills": ["react", "typescript", "javascript", "css", "html"],
    "availability": "available",
    "average_rating": 4.8,
    "rating_count": 15,
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    "portfolio": [
      {
        "id": "proj_123",
        "title": "E-commerce Platform",
        "description": "Built a modern e-commerce platform using React...",
        "technologies": ["react", "redux", "node.js"],
        "image_url": "https://example.com/portfolio/123.jpg"
      }
    ],
    "certifications": [
      {
<<<<<<< HEAD
<<<<<<< HEAD
        "name": "AWS Certified Developer",
        "issuing_organization": "Amazon Web Services",
        "issue_date": "2024-01-15"
=======

=======
        "name": "AWS Certified Developer";
        "issuing_organization": "Amazon Web Services";
        "issue_date": "2024-01-15"
      }
    ]
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        "name": "AWS Certified Developer",
        "issuing_organization": "Amazon Web Services",
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        "issue_date": "2024-01-15"
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    "portfolio": [;
      {
        "id": "proj_123";
        "title": "E - commerce Platform";
        "description": "Built a modern e - commerce platform using React...";
        "technologies": ["react", "redux", "node.js"];
        "image_url": "https://example.com / portfolio / 123.jpg";
      }
    ];
    "certifications": [;
      {
        "name": "AWS Certified Developer";
        "issuing_organization": "Amazon Web Services";
        "issue_date": "2024 - 01 - 15";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
    ];



<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
}`;
              }}


<<<<<<< HEAD
            />
          </TabsContent>
          <TabsContent value="quotes" className="space-y-6">
            />;
          </TabsContent>;
          <TabsContent value="quotes" className="space-y-6">;
        "name": "AWS Certified Developer";
        "issuing_organization": "Amazon Web Services";
        "issue_date": "2024-01-15"
      }
    ]
        "name": "AWS Certified Developer",
        "issuing_organization": "Amazon Web Services",
        "issue_date": "2024-01-15"
      }
    ];
  }
}`
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
=======

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}`;
              }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            />
          </TabsContent>
          <TabsContent value="quotes" className="space-y-6">
=======
            />;
          </TabsContent>;

          <TabsContent value="quotes" className="space-y-6">;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
}`;
              }}
            />
            
            <EndpointSection
              method="GET"
              endpoint="/api/quotes"
              description="List quote requests that you've created."
              note=""
              params={[
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" },
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },
                { name: "status", type: "string", description: "Filter by status (new, viewed, replied, archived)" }
              ]}
              codeExamples={{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/quotes" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/quotes', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }
}),

const data = await response.json(),
// // // console.log(data),`,
                python: `import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
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
}
;
response = requests.get(;
    'https: //api.ziontechgroup.com/v1/quotes',;
    headers=headers;
);
data = response.json();
print(data)`;
              }}
              responseExamples={{
                success: `{
  "data": [
    {
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
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  )
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
  // // // console.log('Received valid webhook:', event),
  
  // Respond to acknowledge receipt
  res.status(200).send('Webhook received')
}),`}
                language="javascript"
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
              
              <h4 className="text-md font-semibold mt-6 mb-2">Error Response Format</h4>
              <p className="text-zinc-400 mb-2">
                Error responses include a consistent JSON object with the following format:
              </p>
              
              <CodeBlock
                code={`{
  "error": {
    "code": "invalid_request",
    "message": "The request was invalid",
    "details": [
      {
        "field": "project_name",
        "message": "Project name is required"
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
      }
    ];
    "certifications": [
      {
        "name": "AWS Certified Developer";
        "issuing_organization": "Amazon Web Services";
        "issue_date": "2024-01-15"
      }
    ]
  }
}`
              }}
<<<<<<< HEAD
<<<<<<< HEAD
            />
          </TabsContent>
          <TabsContent value="quotes" className="space-y-6">
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


            />
          </TabsContent>
          <TabsContent value="quotes" className="space-y-6">
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <EndpointSection
              method="POST"
              endpoint="/api/quotes"
              description="Create a quote request for a talent."
              note="Requires quotes:write scope"
              params={[
                { name: "talent_id", type: "string", description: "ID of the talent to request a quote from", required: true }
                { name: "project_name", type: "string", description: "Name of the project", required: true }
                { name: "project_summary", type: "string", description: "Brief summary of the project", required: true }
                { name: "project_description", type: "string", description: "Detailed project description" }
                { name: "timeline", type: "string", description: "Expected timeline", required: true }
                { name: "budget_min", type: "number", description: "Minimum budget" }
                { name: "budget_max", type: "number", description: "Maximum budget" }
                { name: "requester_name", type: "string", description: "Name of the requester", required: true }
                { name: "requester_email", type: "string", description: "Email of the requester", required: true }
              ]}
              codeExamples={{
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                curl: `curl -X POST "https://api && api.ziontechgroup.com/v1/quotes" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
=======
            />;
          </TabsContent>;
          <TabsContent value="quotes" className="space - y-6">;
            <EndpointSection;
              method="POST";
              endpoint="/api / quotes";
              description="Create a quote request for a talent.";
              note="Requires quotes:write scope";
              params={[;
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
              code_examples={{
                curl: `curl -X POST "https://api.ziontechgroup.com / v1 / quotes" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json" \\;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  -d '{

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    "talent_id": "talent_abc123"
    "project_name": "E-commerce Website Redesign"
    "project_summary": "Redesign our outdated e-commerce website with modern UI"
    "project_description": "Our current website is 5 years old and needs a complete overhaul..."
    "timeline": "2-3 months"
    "budget_min": 8000
    "budget_max": 12000
    "requester_name": "John Doe",
    "requester_email": "john@example && example.com"
  }'`
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/quotes', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }
<<<<<<< HEAD
<<<<<<< HEAD
                curl: `curl -X POST "https://api.ziontechgroup.com/v1/quotes" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "talent_id": "talent_abc123";
    "project_name": "E-commerce Website Redesign";
    "project_summary": "Redesign our outdated e-commerce website with modern UI";
    "project_description": "Our current website is 5 years old and needs a complete overhaul...";
    "timeline": "2-3 months";
    "budget_min": 8000;
    "budget_max": 12000;
    "requester_name": "John Doe"
    "requester_email": "john@example.com"
  }'`;
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/quotes', {
  method: 'POST'
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
});
const data = await response.json();
console.log(data),`;
                python: `import requests
import json
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
}
<<<<<<< HEAD
  body: JSON && JSON.stringify({
=======
  body: JSON && JSON.stringify({
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    "requester_name": "John Doe",
    "requester_email": "john@example.com";
  }'`;
                javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / quotes', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
  }
  body: JSON.stringify ({
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    requester_email: 'john@example.com';
  });
});
;
const data = await response.json ();
console.log (data), `;
                python: `import requests;
import json;
<<<<<<< HEAD
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
}
payload = {
=======

headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




    'talent_id': 'talent_abc123project_name': 'E-commerce Website Redesignproject_summary': 'Redesign our outdated e-commerce website with modern UIproject_description': 'Our current website is 5 years old and needs a complete overhaul...timeline': '2-3 monthsbudget_min': 8000;
    'budget_max': 12000;
    'requester_name': 'John Doerequester_email': 'john@example.com'

}


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
response = requests && requests.post(
    'https: //api && api.ziontechgroup.com/v1/quotes'
    headers=headers,
    data=json && json.dumps(payload)
)
<<<<<<< HEAD
<<<<<<< HEAD
data = response && response.json()
print(data)`
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

data = response && response.json()

print(data)`
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    'talent_id': 'talent_abc123project_name': 'E - commerce Website Redesignproject_summary': 'Redesign our outdated e - commerce website with modern UIproject_description': 'Our current website is 5 years old and needs a complete overhaul...timeline': '2 - 3 monthsbudget_min': 8000;
    'budget_max': 12000;
    'requester_name': 'John Doerequester_email': 'john@example.com';
}
response = requests.post (
    'https: //api.ziontechgroup.com / v1 / quotes';
    headers = headers,
    data = json.dumps (payload));
data = response.json ();
print (data)`;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              }}
              response_examples={{
                success: `{
  "data": {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
    "created_at": "2025-05-16T14:30:15Z"
=======

    "created_at": "2025-05-16T14:30:15Z"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    "created_at": "2025-05-16T14:30:15Z"
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    "budget_max": 12000,
    "budget_display": "$8, 000 - $12, 000";
    "requester_name": "John Doe";
    "requester_email": "john@example.com";
    "status": "new";
    "created_at": "2025 - 05 - 16T14:30:15Z";
<<<<<<< HEAD
<<<<<<< HEAD
  }
}`;
              }}
            />;

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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
}`;
              }}

            />;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <EndpointSection
              method="GET"
              endpoint="/api/quotes"
              description="List quote requests that you've created."
              note=""
              params={[
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" }
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" }
                { name: "status", type: "string", description: "Filter by status (new, viewed, replied, archived)" }
              ]}
              codeExamples={{
<<<<<<< HEAD
<<<<<<< HEAD
=======
                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/quotes" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/quotes" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
  }
});
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  -H "Content-Type: application/json"`,
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/quotes', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }
})
<<<<<<< HEAD
<<<<<<< HEAD
const data = await response && response.json()
console && console.log(data),`
                python: `import requests
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

const data = await response && response.json()
console && console.log(data),`

                python: `import requests
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
const data = await response.json ();
console.log (data), `;
                python: `import requests;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
}

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
}
response = requests.get(
    'https: //api.ziontechgroup.com/v1/quotes'
    headers=headers
)
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



response = requests && requests.get(
    'https: //api && api.ziontechgroup.com/v1/quotes',
    headers=headers
)
<<<<<<< HEAD
<<<<<<< HEAD
data = response && response.json()
print(data)`
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

data = response.json()

print(data)`
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
response = requests.get (
    'https: //api.ziontechgroup.com / v1 / quotes',
    headers = headers);
data = response.json ();
print (data)`;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              }}
              response_examples={{
                success: `{
  "data": [;
    {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      "id": "quote_def456"
      "talent_id": "talent_abc123"
      "project_name": "E-commerce Website Redesign"
      "project_summary": "Redesign our outdated e-commerce website with modern UI",
      "budget_display": "$8,000 - $12,000"
      "status": "new"
      "created_at": "2025-05-16T14: 30:15Z"
      "viewed_at": null,
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      "replied_at": null
    }
    // More quotes...
  ]
  "meta": {
    "total": 5
    "page": 1
    "limit": 20
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      "project_name": "E - commerce Website Redesign";
      "project_summary": "Redesign our outdated e - commerce website with modern UI",
      "budget_display": "$8, 000 - $12, 000";
      "status": "new";
      "created_at": "2025 - 05 - 16T14: 30:15Z";
      "viewed_at": null,
      "replied_at": null;
    }
    // More quotes...;
<<<<<<< HEAD
<<<<<<< HEAD
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/quotes" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/quotes', {
  method: 'GET'
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }
});
const data = await response.json();
console.log(data),`;
                python: `import requests
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
}
response = requests.get(
    'https: //api.ziontechgroup.com/v1/quotes'
    headers=headers
)

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  ];
  "meta": {
    "total": 5;
    "page": 1;
<<<<<<< HEAD
<<<<<<< HEAD
            />;
          </TabsContent>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    "limit": 20;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
}`;
              }}

            />;
          </TabsContent>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <TabsContent value="webhooks" className="space-y-6">;
            <div className="prose prose-invert max-w-none">;
              <h3 className="text-lg font-semibold mb-2">Webhook Events</h3>;
              <p className="text-zinc-400 mb-4">;
                The Zion API can send webhook notifications when certain events occur in your account.;
                You can configure webhooks in the Webhooks tab of the Developer Dashboard.;
              </p>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <h4 className="text-md font-semibold mt-6 mb-2">Authentication</h4>;
              <p className="text-zinc-400 mb-4">;
                When you create a webhook, you can optionally provide a secret key.;
                If a secret is provided, each webhook request will include a signature in the;
                <code className="bg-zinc-800 px-1 py-0 && 0.5 rounded">X-Zion-Signature</code> header.;
                This signature is an HMAC SHA-256 hash of the request body using your webhook secret as the key.;
              </p>;
<<<<<<< HEAD
<<<<<<< HEAD
              <CodeBlock
                code={`import crypto from 'crypto'
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              <CodeBlock
                code={`import crypto from 'crypto'

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Function to verify webhook signature
function verifyWebhookSignature(): any (payload, signature, secret) {
  const hmac = crypto && crypto.createHmac('sha256', secret)
  const expectedSignature = hmac && hmac.update(payload).digest('hex')
  return crypto && crypto.timingSafeEqual(
    Buffer && Buffer.from(signature)
    Buffer && Buffer.from(expectedSignature)
  )
}

<<<<<<< HEAD



<<<<<<< HEAD
    "limit": 20
  }
}`
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
                code={`import crypto from 'crypto';
// Function to verify webhook signature
function verifyWebhookSignature(payload, signature, secret) {
  const hmac = crypto.createHmac('sha256', secret);
  const expectedSignature = hmac.update(payload).digest('hex');
  return crypto.timingSafeEqual(
    Buffer.from(signature);
    Buffer.from(expectedSignature)
  )
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Example usage in Express.js
app.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
  const signature = req.headers['x-zion-signature'];
  const payload = req.body.toString();
  const webhookSecret = process.env.WEBHOOK_SECRET;
  if (!verifyWebhookSignature(payload, signature, webhookSecret)) {
    return res.status(401).send('Invalid signature')
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  


<<<<<<< HEAD
  
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Process the webhook event
  const event = JSON.parse(payload);
  console.log('Received valid webhook:', event);
  // Respond to acknowledge receipt
  res.status(200).send('Webhook received')
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

// Example usage in Express && Express.js
app && app.post('/webhook', express && express.raw({type: 'application/json'}), (req, res) => {;
  const signature = req && req.headers['x-zion-signature'];
  const payload = req && req.body.toString();
  const webhookSecret = process && process.env.WEBHOOK_SECRET;
<<<<<<< HEAD
<<<<<<< HEAD
  if (!verifyWebhookSignature(payload, signature, webhookSecret)) {;
    return res && res.status(401).send('Invalid signature');
  }
  // Process the webhook event;
  const event = JSON && JSON.parse(payload);
  console && console.log('Received valid webhook:', event);
  // Respond to acknowledge receipt;
  res && res.status(200).send('Webhook received');
}),`}
                language="javascript";
                showLineNumbers={true}
              />;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  if (!verifyWebhookSignature(payload, signature, webhookSecret)) {;
    return res && res.status(401).send('Invalid signature');
  }

  // Process the webhook event;
  const event = JSON && JSON.parse(payload);
  console && console.log('Received valid webhook:', event);

  // Respond to acknowledge receipt;
  res && res.status(200).send('Webhook received');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}),`}
                language="javascript";
                showLineNumbers={true}

              />;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
              <h4 className="text-md font-semibold mt-6 mb-2">Sample Payloads</h4>;
              <p className="text-zinc-400 mb-2">;
                Here's an example of a <code className="bg-zinc-800 px-1 py-0 && 0.5 rounded">new_application</code> webhook payload: </p>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              <h4 className="text-md font-semibold mt-6 mb-2">Sample Payloads</h4>;
              <p className="text-zinc-400 mb-2">;
                Here's an example of a <code className="bg-zinc-800 px-1 py-0 && 0.5 rounded">new_application</code> webhook payload: </p>;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <CodeBlock
                code={`{
  "event_type": "new_application"
  "event_id": "evt_abc123def456"
  "timestamp": "2025-05-16T15:30:00Z"
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            />;
          </TabsContent>;
          <TabsContent value="webhooks" className="space - y-6">;
            <div className="prose prose - invert max - w-none">;
              <h3 className="text - lg font - semibold mb - 2">Webhook Events</h3>;
              <p className="text - zinc - 400 mb - 4">;
                The Zion API can send webhook notifications when certain events occur in your account.;
                You can configure webhooks in the Webhooks tab of the Developer Dashboard.;
              </p>;
              <h4 className="text - md font - semibold mt - 6 mb - 2">Authentication</h4>;
              <p className="text - zinc - 400 mb - 4">;
                When you create a webhook, you can optionally provide a secret key.;
                If a secret is provided, each webhook request will include a signature in the;
                <code className="bg - zinc - 800 px - 1 py - 0.5 rounded">X - Zion - Signature</code> header.;
                This signature is an HMAC SHA - 256 hash of the request body using your webhook secret as the key.;
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
    Buffer.from (signature);
    Buffer.from (expected_signature));
}
// Example usage in Express.js;
app.post ('/webhook', express.raw ({type: 'application / json'}), (req, res) => {
  const signature = req.headers['x - zion - signature'];
  const payload = req.body.to_string ();
  const webhook_secret = process.env.WEBHOOK_SECRET;
;
  if () {) {
  $2
}
    return res.status (401).send ('Invalid signature');
  }
  // Process the webhook event;
  const event = JSON.parse (payload);
  console.log ('Received valid webhook:', event);
;
  // Respond to acknowledge receipt;
  res.status (200).send ('Webhook received');
}), `}
                language="javascript";
                showLineNumbers={true}
              />;
              <h4 className="text - md font - semibold mt - 6 mb - 2">Event Types</h4>;
              <table className="w - full border - collapse mt - 2">;
                <thead>;
                  <tr className="border - b border - zinc - 800">;
                    <th className="py - 2 px - 4 text - left">Event Type</th>;
                    <th className="py - 2 px - 4 text - left">Description</th>;
                  </tr>;
                </thead>;
                <tbody>;
                  <tr className="border - b border - zinc - 800">;
                    <td className="py - 2 px - 4 font - mono text - sm">new_application</td>;
                    <td className="py - 2 px - 4">When a talent applies to one of your jobs</td>;
                  </tr>;
                  <tr className="border - b border - zinc - 800">;
                    <td className="py - 2 px - 4 font - mono text - sm">quote_received</td>;
                    <td className="py - 2 px - 4">When you receive a quote from talent</td>;
                  </tr>;
                  <tr className="border - b border - zinc - 800">;
                    <td className="py - 2 px - 4 font - mono text - sm">milestone_approved</td>;
                    <td className="py - 2 px - 4">When a project milestone is approved</td>;
                  </tr>;
                  <tr className="border - b border - zinc - 800">;
                    <td className="py - 2 px - 4 font - mono text - sm">talent_hired</td>;
                    <td className="py - 2 px - 4">When you hire talent for a project</td>;
                  </tr>;
                </tbody>;
              </table>;
              <h4 className="text - md font - semibold mt - 6 mb - 2">Sample Payloads</h4>;
              <p className="text - zinc - 400 mb - 2">;
                Here's an example of a <code className="bg - zinc - 800 px - 1 py - 0.5 rounded">new_application</code> webhook payload: </p>;
              <CodeBlock;
                code={`{
  "event_type": "new_application";
  "event_id": "evt_abc123def456";
  "timestamp": "2025 - 05 - 16T15:30:00Z";
<<<<<<< HEAD
<<<<<<< HEAD
  "data": {
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  "data": {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  "data": {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    "application_id": "app_123456"
    "job_id": "job_abc123"
    "talent_id": "talent_xyz789"
    "applied_at": "2025-05-16T15:28:30Z"
    "status": "new",
<<<<<<< HEAD
<<<<<<< HEAD
    "match_score": 85
    "applied_at": "2025 - 05 - 16T15:28:30Z";
    "status": "new",
    "match_score": 85;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    "match_score": 85
=======
    "applied_at": "2025 - 05 - 16T15:28:30Z";
    "status": "new",
    "match_score": 85;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
}`}
                language="json";
                showLineNumbers={true}
<<<<<<< HEAD
<<<<<<< HEAD
              />;
            </div>;
          </TabsContent>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              />;
            </div>;
          </TabsContent>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <TabsContent value="errors" className="space-y-6">;
            <div className="prose prose-invert max-w-none">;
              <h3 className="text-lg font-semibold mb-2">Error Responses</h3>;
              <p className="text-zinc-400 mb-4">;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              />;
            </div>;
          </TabsContent>;
          <TabsContent value="errors" className="space - y-6">;
            <div className="prose prose - invert max - w-none">;
              <h3 className="text - lg font - semibold mb - 2">Error Responses</h3>;
              <p className="text - zinc - 400 mb - 4">;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                The Zion API uses conventional HTTP status codes to indicate the success or failure of an API request.;
                In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error with the;
                provided information, and codes in the 5xx range indicate an error with our servers.;
              </p>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <table className="w - full border - collapse mt - 4">;
                <thead>;
                  <tr className="border - b border - zinc - 800">;
                    <th className="py - 2 px - 4 text - left">Status Code</th>;
                    <th className="py - 2 px - 4 text - left">Description</th>;
                  </tr>;
                </thead>;
                <tbody>;
                  <tr className="border - b border - zinc - 800">;
                    <td className="py - 2 px - 4"><code className="bg - zinc - 800 px - 1 py - 0.5 rounded">200 OK</code></td>;
                    <td className="py - 2 px - 4">The request was successful.</td>;
                  </tr>;
                  <tr className="border - b border - zinc - 800">;
                    <td className="py - 2 px - 4"><code className="bg - zinc - 800 px - 1 py - 0.5 rounded">201 Created</code></td>;
                    <td className="py - 2 px - 4">The resource was successfully created.</td>;
                  </tr>;
                  <tr className="border - b border - zinc - 800">;
                    <td className="py - 2 px - 4"><code className="bg - zinc - 800 px - 1 py - 0.5 rounded">400 Bad Request</code></td>;
                    <td className="py - 2 px - 4">The request was invalid or cannot be otherwise served.</td>;
                  </tr>;
                  <tr className="border - b border - zinc - 800">;
                    <td className="py - 2 px - 4"><code className="bg - zinc - 800 px - 1 py - 0.5 rounded">401 Unauthorized</code></td>;
                    <td className="py - 2 px - 4">Authentication credentials were missing or invalid.</td>;
                  </tr>;
                  <tr className="border - b border - zinc - 800">;
                    <td className="py - 2 px - 4"><code className="bg - zinc - 800 px - 1 py - 0.5 rounded">403 Forbidden</code></td>;
                    <td className="py - 2 px - 4">The request is understood, but it has been refused or access is not allowed.</td>;
                  </tr>;
                  <tr className="border - b border - zinc - 800">;
                    <td className="py - 2 px - 4"><code className="bg - zinc - 800 px - 1 py - 0.5 rounded">404 Not Found</code></td>;
                    <td className="py - 2 px - 4">The requested resource does not exist.</td>;
                  </tr>;
                  <tr className="border - b border - zinc - 800">;
                    <td className="py - 2 px - 4"><code className="bg - zinc - 800 px - 1 py - 0.5 rounded">422 Unprocessable Entity</code></td>;
                    <td className="py - 2 px - 4">The request was well - formed but was unable to be followed due to semantic errors.</td>;
                  </tr>;
                  <tr className="border - b border - zinc - 800">;
                    <td className="py - 2 px - 4"><code className="bg - zinc - 800 px - 1 py - 0.5 rounded">429 Too Many Requests</code></td>;
                    <td className="py - 2 px - 4">The request was rejected due to rate limiting.</td>;
                  </tr>;
                  <tr className="border - b border - zinc - 800">;
                    <td className="py - 2 px - 4"><code className="bg - zinc - 800 px - 1 py - 0.5 rounded">500 Internal Server Error</code></td>;
                    <td className="py - 2 px - 4">Something went wrong on our end.</td>;
                  </tr>;
                </tbody>;
              </table>;
              <h4 className="text - md font - semibold mt - 6 mb - 2">Error Response Format</h4>;
              <p className="text - zinc - 400 mb - 2">;
                Error responses include a consistent JSON object with the following format: </p>;
              <CodeBlock;
<<<<<<< HEAD
<<<<<<< HEAD
}),`}
                language="javascript"
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
                Here's an example of a <code className="bg-zinc-800 px-1 py-0.5 rounded">new_application</code> webhook payload: </p>
              <CodeBlock
                code={`{
  "event_type": "new_application";
  "event_id": "evt_abc123def456";
  "timestamp": "2025-05-16T15:30:00Z";
  "data": {
    "application_id": "app_123456";
    "job_id": "job_abc123";
    "talent_id": "talent_xyz789";
    "applied_at": "2025-05-16T15:28:30Z";
    "status": "new"
    "match_score": 85
  }
}`}
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
              <h4 className="text-md font-semibold mt-6 mb-2">Error Response Format</h4>
              <p className="text-zinc-400 mb-2">
                Error responses include a consistent JSON object with the following format: </p>
              <CodeBlock
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                code={`{
  "error": {
    "code": "invalid_request";
    "message": "The request was invalid";
<<<<<<< HEAD
<<<<<<< HEAD
        "field": "project_name",
        "message": "Project name is required";
=======
    "details": [;
      {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }
    ];
  }
}`}
<<<<<<< HEAD
    "details": [
      {
=======
    "details": [;
      {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        "field": "project_name"
        "field": "project_name",
        "message": "Project name is required"
      }
<<<<<<< HEAD
    ]
=======
    ];
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
}
// Helper component for API endpoint documentation
<<<<<<< HEAD


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
function EndpointSection({
  method
  endpoint
  description;
  note;
  params = [];
  codeExamples;
  responseExamples
}) {
  const [activeTab, setActiveTab] = useState("curl");
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
  
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
                language="json";

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
// // // console.log(data),`,;
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
  // // // console.log('Received valid webhook:', event),;
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
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                language="json";

              />;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <h4 className="text-md font-semibold mt-6 mb-2">Rate Limiting</h4>;
              <p className="text-zinc-400 mb-4">;
                The Zion API implements rate limiting to protect our infrastructure and ensure fair usage.;
                Rate limits are applied on a per-API key basis. If you exceed the rate limits, you will receive ;
<<<<<<< HEAD
<<<<<<< HEAD
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
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Limit</code>: Number of requests allowed in the time window</li>;
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Remaining</code>: Number of requests remaining in the current window</li>;
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Reset</code>: Unix timestamp when the rate limit resets</li>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                a <code className="bg-zinc-800 px-1 py-0 && 0.5 rounded">429 Too Many Requests</code> response.;
              </p>;

              <p className="text-zinc-400 mb-2">;
                Rate limit information is included in the response headers: </p>;

              <ul className="list-disc pl-6 space-y-1 text-zinc-400">;
                <li><code className="bg-zinc-800 px-1 py-0 && 0.5 rounded">X-RateLimit-Limit</code>: Number of requests allowed in the time window</li>;
                <li><code className="bg-zinc-800 px-1 py-0 && 0.5 rounded">X-RateLimit-Remaining</code>: Number of requests remaining in the current window</li>;
                <li><code className="bg-zinc-800 px-1 py-0 && 0.5 rounded">X-RateLimit-Reset</code>: Unix timestamp when the rate limit resets</li>;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </ul>;
            </div>;
          </TabsContent>;
        </Tabs>;
      </CardContent>;
    </Card>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
;
// Helper component for API endpoint documentation;
function EndpointSection({;
  method,;
  endpoint,;
  description,;
  note,;
  params = [],;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

// Helper component for API endpoint documentation;
function EndpointSection(): any ({ ;
  method, ;
  endpoint, ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  description;
  note;
  params = [];
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  codeExamples;
  responseExamples;
}) {;
  const [activeTab, setActiveTab] = useState("curl");
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="border border-zinc-800 rounded-md">;
      <div className="p-4">;
        <div className="flex items-center">;
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
            }>;
;
// Helper component for API endpoint documentation;
function EndpointSection({ ;
  method, ;
  endpoint, ;
  description,;
  note,;
  params = [],;
  codeExamples,;
  responseExamples;
}) {;
  const [activeTab, setActiveTab] = useState("curl"),;
  ;
  return (;
    <div className="border border-zinc-800 rounded-md">;
      <div className="p-4">;
        <div className="flex items-center">;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  return (

    <div className="border border-zinc-800 rounded-md">;
      <div className="p-4">;
        <div className="flex items-center">;

            }
          >
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {method}
          </Badge>;
          <span className="ml-2 font-mono text-sm text-white">{endpoint}</span>;
          {note && (;
            <Badge className="ml-auto bg-amber-800 text-amber-200 hover:bg-amber-800">;
              {note}
            </Badge>;
          )}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                language="json";
              />;
              <h4 className="text - md font - semibold mt - 6 mb - 2">Rate Limiting</h4>;
              <p className="text - zinc - 400 mb - 4">;
                The Zion API implements rate limiting to protect our infrastructure and ensure fair usage.;
                Rate limits are applied on a per - API key basis. If you exceed the rate limits, you will receive;
                a <code className="bg - zinc - 800 px - 1 py - 0.5 rounded">429 Too Many Requests</code> response.;
              </p>;
              <p className="text - zinc - 400 mb - 2">;
                Rate limit information is included in the response headers: </p>;
              <ul className="list - disc pl - 6 space - y-1 text - zinc - 400">;
                <li><code className="bg - zinc - 800 px - 1 py - 0.5 rounded">X - RateLimit - Limit</code>: Number of requests allowed in the time window</li>;
                <li><code className="bg - zinc - 800 px - 1 py - 0.5 rounded">X - RateLimit - Remaining</code>: Number of requests remaining in the current window</li>;
                <li><code className="bg - zinc - 800 px - 1 py - 0.5 rounded">X - RateLimit - Reset</code>: Unix timestamp when the rate limit resets</li>;
              </ul>;
            </div>;
          </TabsContent>;
        </Tabs>;
      </CardContent>;
    </Card>);
}
// Helper component for API endpoint documentation;
/**
 * EndpointSection - Function description
 */
function EndpointSection() {
  const [active_tab, setActiveTab] = useState ("curl");
;
  return (
    <div className="border border - zinc - 800 rounded - md">;
      <div className="p - 4">;
        <div className="flex items - center">;
          <Badge;
            variant="outline";
            className={
              method === 'GET';
                ? "border - green - 500 text - green - 400 font - mono";
                : method === 'POST';
                ? "border - blue - 500 text - blue - 400 font - mono";
                : method === 'PUT';
                ? "border - yellow - 500 text - yellow - 400 font - mono";
                : "border - red - 500 text - red - 400 font - mono";
            }
          >;
            {method}
          </Badge>;
          <span className="ml - 2 font - mono text - sm text - white">{endpoint}</span>;
          {note && (
            <Badge className="ml - auto bg - amber - 800 text - amber - 200 hover:bg - amber - 800">;
              {note}
            </Badge>)}
        </div>;
        <p className="mt - 2 text - zinc - 400">{description}</p>;
      </div>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {params.length > 0 && (
        <div className="border - t border - zinc - 800 p - 4">;
          <h4 className="font - medium mb - 2">Parameters</h4>;
          <table className="w - full">;
            <thead>;
              <tr className="text - left border - b border - zinc - 800 text - sm">;
                <th className="pb - 2">Name</th>;
                <th className="pb - 2">Type</th>;
                <th className="pb - 2">Description</th>;
              </tr>;
            </thead>;
            <tbody>;
              {params.map ((param, index) => (
                <tr key={index} className={index < params.length - 1 ? "border - b border - zinc - 800" : ""}>;
                  <td className="py - 2 font - mono text - sm">;
                    {param.name}
<<<<<<< HEAD
        </div>;
        <p className="mt-2 text-zinc-400">{description}</p>;
      </div>;
=======

        </div>;

        <p className="mt-2 text-zinc-400">{description}</p>;
      </div>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {params && params.length > 0 && (;
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
              {params && params.map((param, index) => (;
                <tr key={index} className={index < params && params.length - 1 ? "border-b border-zinc-800" : ""}>;
                  <td className="py-2 font-mono text-sm">;
                    {param && param.name}
                    {param && param.required && <span className="text-red-500">*</span>}
                  </td>;
                  <td className="py-2 text-sm text-zinc-400">{param && param.type}</td>;
                  <td className="py-2 text-sm text-zinc-400">{param && param.description}</td>;
                </tr>;
<<<<<<< HEAD
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
=======

              ))}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </tbody>;
          </table>;
        </div>;
      )}
<<<<<<< HEAD


      


<<<<<<< HEAD
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
                <tr key={index} className={index < params.length - 1 ? "border-b border-zinc-800" : ""}>
                  <td className="py-2 font-mono text-sm">
                    {param.name}
                    {param.required && <span className="text-red-500">*</span>}
                  </td>
                  <td className="py-2 text-sm text-zinc-400">{param.type}</td>
                  <td className="py-2 text-sm text-zinc-400">{param.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {codeExamples && (
        <div className="border-t border-zinc-800 p-4">
          <div className="flex items-center mb-2">
            <h4 className="font-medium">Request Example</h4>
            <div className="ml-auto flex border border-zinc-700 rounded-md overflow-hidden">
              {Object.keys(codeExamples).map((lang) => (
<<<<<<< HEAD
<<<<<<< HEAD
      ;
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {codeExamples && (;
        <div className="border-t border-zinc-800 p-4">;
          <div className="flex items-center mb-2">;
            <h4 className="font-medium">Request Example</h4>;
            <div className="ml-auto flex border border-zinc-700 rounded-md overflow-hidden">;
<<<<<<< HEAD
<<<<<<< HEAD
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
            </div>;
          </div>;
          <CodeBlock
            code={codeExamples[activeTab]}
            language={activeTab === "curl" ? "bash" : activeTab}
          />;
        </div>;
      )}
=======
              {Object && Object.keys(codeExamples).map((lang) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              {Object && Object.keys(codeExamples).map((lang) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <button
                  key={lang}
                  className={`px-3 py-1 text-xs font-medium ${
                    activeTab === lang
                      ? "bg-zinc-700 text-white"
                      : "text-zinc-400 hover:bg-zinc-800"
                  }`}
                  onClick={() => setActiveTab(lang)}
<<<<<<< HEAD
<<<<<<< HEAD
                >
                  {lang === "curl" ? "cURL" : lang === "javascript" ? "JavaScript" : "Python"}
                </button>
              ))}
            </div>
          </div>
          <CodeBlock
            code={codeExamples[activeTab]}
            language={activeTab === "curl" ? "bash" : activeTab}
          />
        </div>
      )}
      {responseExamples && (
        <div className="border-t border-zinc-800 p-4">
          <h4 className="font-medium mb-2">Response</h4>
          <CodeBlock
            code={responseExamples.success}
            language="json"
          />
        </div>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                >;
                  {lang === "curl" ? "cURL" : lang === "javascript" ? "JavaScript" : "Python"}
                </button>;
              ))}

            </div>;
          </div>;

          <CodeBlock
            code={codeExamples[activeTab]}
            language={activeTab === "curl" ? "bash" : activeTab}
          />;
        </div>;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      )}


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

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {param.required && <span className="text - red - 500">*</span>}
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


;

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </div>;
  );
}
;


<<<<<<< HEAD
<<<<<<< HEAD
  ),;}
;
 import CodeBlock from "./CodeBlock";
<CardHeader> <CardTitle className="text-xl flex items-center" > <BookOpen className="mr-2" size= {
  20 
}/> API Documentation </CardTitle> <CardDescription className="text-zinc-400" > Reference documentation for integrating with the Zion Marketplace API. </CardDescription> </CardHeader> <CardContent> <Alert className="bg-blue-900/30 border-blue-800 mb-6" > <Terminal className="h-4 w-4" /> <AlertDescription> Make sure to include your API key in all requests as a Bearer token in the Authorization header. </AlertDescription> </Alert> <Tabs defaultValue="jobs" className="space-y-4" > <TabsList className="bg-zinc-800 border-zinc-700" > <TabsTrigger value="jobs" >Jobs</TabsTrigger> <TabsTrigger value="talent" >Talent</TabsTrigger> <TabsTrigger value="quotes" >Quotes</TabsTrigger> <TabsTrigger value="webhooks" >Webhooks</TabsTrigger> <TabsTrigger value="errors" >Errors</TabsTrigger> </TabsList> <TabsContent value="jobs" className="space-y-6" > <EndpointSection python: `import requests headers = {
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json' 
}response = requests.get ('https: //api.ziontechgroup.com/v1/jobs';
params= {
  'limit': 10, 'category': 'development' 
};
}
}responseExamples= {
  {
  success: ` {
  "data" : [ {
  
}` 
}
}/> <EndpointSection const response = await fetch (\`https://api.ziontechgroup.com/v1/jobs/\$ {
  jobId 
}\`, {
  method: 'GET';
headers: {
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json' 
}
});
python: `import requests headers = {
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json' 
}job id 
}';
headers=headers) data = response.json () print (data) ` 
}
}responseExamples= {
  {
  success: ` {
  
}
}` 
}
}/> <EndpointSection deadline: '2025-06-30T23:59:59Z' 
}) 
});
python: `import requests import json headers = {
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json' 
}payload = {
  'title': 'Senior React Developerdescription': 'We need an experienced React developer...category': 'developmentskills': ['reacttypescriptnode.js'];
'budget': {
  'min': 5000;
'max': 10000;
'currency': 'USD' 
};
}response = requests.post ('https: //api.ziontechgroup.com/v1/jobs';
headers=headers;
data=json.dumps (payload) ) data = response.json () print (data) ` 
}
}responseExamples= {
  {
  success: ` {
  
}
}` 
}
}/> </TabsContent> <TabsContent value="talent" className="space-y-6" > <EndpointSection python: `import requests headers = {
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json' 
}response = requests.get ('https: //api.ziontechgroup.com/v1/talent';
params= {
  'skills': 'react, typescript' 
};
}
}responseExamples= {
  {
  success: ` {
  "data" : [ {
  
}` 
}
}/> <EndpointSection const response = await fetch (\`https://api.ziontechgroup.com/v1/talent/\$ {
  talentId 
}\`, {
  method: 'GET';
headers: {
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json' 
}
});
python: `import requests headers = {
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json' 
}talent id 
}';
headers=headers) data = response.json () print (data) ` 
}
}responseExamples= {
  {
  success: ` {
  ] 
}
}` 
}
}/> </TabsContent> <TabsContent value="quotes" className="space-y-6" > <EndpointSection python: `import requests import json headers = {
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json' 
}payload = {
  'talent id': 'talent abc123project name': 'E-commerce Website Redesignproject summary': 'Redesign our outdated e-commerce website with modern UIproject description': 'Our current website is 5 years old and needs a complete overhaul...timeline': '2-3 monthsbudget min': 8000;
'budget max': 12000;
'requester name': 'John Doerequester email': 'john@example.com' 
}headers=headers;
data=json.dumps (payload) ) data = response.json () print (data) ` 
}
}responseExamples= {
  {
  success: ` {
  
}` 
}
}/> <EndpointSection python: `import requests headers = {
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json' 
}headers=headers) data = response.json () print (data) ` 
}
}responseExamples= {
  {
  success: ` {
  "data" : [ {
  
}` 
}
}/> </TabsContent> <TabsContent value="webhooks" className="space-y-6"> <div className="prose prose-invert max-w-none"> <h3 className="text-lg font-semibold mb-2">Webhook Events</h3> <p className="text-zinc-400 mb-4"> The Zion API can send webhook notifications when certain events occur in your account. You can configure webhooks in the Webhooks tab of the Developer Dashboard. </p> <h4 className="text-md font-semibold mt-6 mb-2">Authentication</h4> <p className="text-zinc-400 mb-4"> When you create a webhook, you can optionally provide a secret key. If a secret is provided, each webhook request will include a signature in the <code className="bg-zinc-800 px-1 py-0.5 rounded" >X-Zion-Signature</code> header. This signature is an HMAC SHA-256 hash of the request body using your webhook secret as the key. </p> <CodeBlock //Respond to acknowledge receipt res.status (200) .send ('Webhook received');
});
` 
}/> <h4 className="text-md font-semibold mt-6 mb-2">Event Types</h4> <table className="w-full border-collapse mt-2"> <thead> <tr className="border-b border-zinc-800"> <th className="py-2 px-4 text-left">Event Type</th> <th className="py-2 px-4 text-left">Description</th> </tr> </thead> <tbody> <tr className="border-b border-zinc-800"> <td className="py-2 px-4 font-mono text-sm">new application</td> <td className="py-2 px-4">When a talent applies to one of your jobs</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4 font-mono text-sm">quote received</td> <td className="py-2 px-4">When you receive a quote from talent</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4 font-mono text-sm">milestone approved</td> <td className="py-2 px-4">When a project milestone is approved</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4 font-mono text-sm">talent hired</td> <td className="py-2 px-4">When you hire talent for a project</td> </tr> </tbody> </table> <h4 className="text-md font-semibold mt-6 mb-2">Sample Payloads</h4> <p className="text-zinc-400 mb-2"> Here's an example of a <code className="bg-zinc-800 px-1 py-0.5 rounded" >new application</code> webhook payload: </p> <CodeBlock /> </div> </TabsContent> <TabsContent value="errors" className="space-y-6"> <div className="prose prose-invert max-w-none"> <h3 className="text-lg font-semibold mb-2">Error Responses</h3> <p className="text-zinc-400 mb-4"> The Zion API uses conventional HTTP status codes to indicate the success or failure of an API request. In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error with the provided information, and codes in the 5xx range indicate an error with our servers. </p> <table className="w-full border-collapse mt-4"> <thead> <tr className="border-b border-zinc-800"> <th className="py-2 px-4 text-left">Status Code</th> <th className="py-2 px-4 text-left">Description</th> </tr> </thead> <tbody> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">200 OK</code></td> <td className="py-2 px-4">The request was successful.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">201 Created</code></td> <td className="py-2 px-4">The resource was successfully created.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">400 Bad Request</code></td> <td className="py-2 px-4">The request was invalid or cannot be otherwise served.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">401 Unauthorized</code></td> <td className="py-2 px-4">Authentication credentials were missing or invalid.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">403 Forbidden</code></td> <td className="py-2 px-4">The request is understood, but it has been refused or access is not allowed.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">404 Not Found</code></td> <td className="py-2 px-4">The requested resource does not exist.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">422 Unprocessable Entity</code></td> <td className="py-2 px-4">The request was well-formed but was unable to be followed due to semantic errors.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">429 Too Many Requests</code></td> <td className="py-2 px-4">The request was rejected due to rate limiting.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">500 Internal Server Error</code></td> <td className="py-2 px-4">Something went wrong on our end.</td> </tr> </tbody> </table> <h4 className="text-md font-semibold mt-6 mb-2">Error Response Format</h4> <p className="text-zinc-400 mb-2" > Error responses include a consistent JSON object with the following format: </p> <CodeBlock ] 
}
}` 
}language="json" /> <h4 className="text-md font-semibold mt-6 mb-2">Rate Limiting</h4> <p className="text-zinc-400 mb-4"> The Zion API implements rate limiting to protect our infrastructure and ensure fair usage. Rate limits are applied on a per-API key basis. If you exceed the rate limits, you will receive a <code className="bg-zinc-800 px-1 py-0.5 rounded">429 Too Many Requests</code> response. </p> <p className="text-zinc-400 mb-2"> Rate limit information is included in the response headers: </p> <ul className="list-disc pl-6 space-y-1 text-zinc-400"> <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Limit</code>: Number of requests allowed in the time window</li> <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Remaining</code>: Number of requests remaining in the current window</li> <li><code className="bg-zinc-800 px-1 py-0.5 rounded" >X-RateLimit-Reset</code>: Unix timestamp when the rate limit resets</li> </ul> </div> </TabsContent> </Tabs> </CardContent> </Card>) 
}//Helper component for API endpoint documentation > <Badge variant="outline" className= {
  method === 'GET'? "border-green-500 text-green-400 font-mono" : method === 'POST'? "border-blue-500 text-blue-400 font-mono" : method === 'PUT' > {
  method 
}</Badge> <span className="ml-2 font-mono text-sm text-white"> {
  endpoint 
}</span> {
  note && (<Badge className="ml-auto bg-amber-800 text-amber-200 hover:bg-amber-800"> {
  note 
}</Badge>) 
}</div> <p className="mt-2 text-zinc-400"> {
  description 
}</p> </div> {
  params.length > 0 && (<div className="border-t border-zinc-800 p-4"> <h4 className="font-medium mb-2">Parameters</h4> <table className="w-full"> <thead> <tr className="text-left border-b border-zinc-800 text-sm"> <th className="pb-2">Name</th> <th className="pb-2">Type</th> <th className="pb-2">Description</th> </tr> </thead> <tbody> </tr>) ) 
}</tbody> </table> </div>) 
}key= {
  lang 
}className= {
  `px-3 py-1 text-xs font-medium $ {
  activeTab === lang </button>) ) 
}</div> </div> <CodeBlock /> </div>) 
}<CodeBlock code= {
  responseExamples.success 
}language="json" /> </div>) 
}</div>) 
}
    </div>
  )
}

;
    </div>;
  );
}
;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
