export function ApiDocumentation() {
  return (

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
import { Badge } from "@/components/ui/badge";
import CodeBlock from "./CodeBlock";
import { Badge } from "@/components/ui/badge",;
import CodeBlock from "./CodeBlock",;
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
    <Card className="bg - zinc - 900 border - zinc - 800 text-white">;
      <CardHeader>;
        <CardTitle className="text - xl flex items-center">;
          <BookOpen className="mr-2" size={20} /> API Documentation;
        </CardTitle>;
        <CardDescription className="text - zinc-400">;
          Reference documentation for integrating with the Zion Marketplace API.;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <Alert className="bg - blue - 900 / 30 border - blue - 800 mb - 6">;
          <Terminal className="h - 4 w - 4" />;

;
      <CardContent>;
        <Alert className="bg-blue-900/30 border-blue-800 mb-6">;
          <Terminal className="h-4 w-4" />;
          <AlertDescription>;
            Make sure to include your API key in all requests as a Bearer token in the Authorization header.;
          </AlertDescription>;
        </Alert>;

        <Tabs default_value="jobs" className="space - y-4">;
          <TabsList className="bg - zinc - 800 border - zinc - 700">;

;
        <Tabs defaultValue="jobs" className="space-y-4">;
          <TabsList className="bg-zinc-800 border-zinc-700">;
            <TabsTrigger value="jobs">Jobs</TabsTrigger>;
            <TabsTrigger value="talent">Talent</TabsTrigger>;
            <TabsTrigger value="quotes">Quotes</TabsTrigger>;
            <TabsTrigger value="webhooks">Webhooks</TabsTrigger>;
            <TabsTrigger value="errors">Errors</TabsTrigger>;
          </TabsList>;

          <TabsContent value="jobs" className="space - y-6">;
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'

  }

                python: `import requests
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'

    'https: //api.ziontechgroup.com/v1/jobs',;
    params={'limit': 10, 'category': 'development'};

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
}
response = requests.get(
    'https: //api.ziontechgroup.com/v1/jobs'
    params={'limit': 10, 'category': 'development'}
    'https: //api.ziontechgroup.com/v1/jobs',;
    params={'limit': 10, 'category': 'development'};
    headers=headers
        <Alert className="bg - blue - 900 / 30 border - blue - 800 mb-6">;
          <Terminal className="h - 4 w-4" />;
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
                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/jobs?limit=10&category=development" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
  }

});
  -H "Content-Type: application/json"`,
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/jobs?limit=10&category=development', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }
})

const data = await response && response.json()
console && console.log(data),`

                python: `import requests});
                python: `import requests
const data = await response && response.json()
console && console.log(data),`
                python: `import requests
});
                python: `import requests
;
const data = await response.json ();
console.log (data), `;
                python: `import requests;
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
}

headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
}


export function ApiDocumentation() {
  return (

import {useState} from "react";""
import {BookOpen, Code, Copy, Terminal} from "lucide-react";""
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";""
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";""
import {Alert, AlertDescription} from "@/components/ui/alert";""
import {Badge} from "@/components/ui/badge";""
import CodeBlock from "./CodeBlock";""
import { useState } from "react",""
import { BookOpen, Code, Copy, Terminal } from "lucide-react",""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",""
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",""
import { Alert, AlertDescription } from "@/components/ui/alert",""
import { Badge } from "@/components/ui/badge";""
import { Badge } from "@/components/ui/badge",""
import CodeBlock from "./CodeBlock",")

"
import { useState } from "react",;""
import { BookOpen, Code, Copy, Terminal } from "lucide-react",;""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;""
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;""
import { Alert, AlertDescription } from "@/components/ui/alert",;""
import { Badge } from "@/components/ui/badge",;"
;"
import CodeBlock from "./CodeBlock",;"
;)
export function ApiDocumentation() {;
  return (;"
    <Card className="bg-zinc-900 border-zinc-800 text-white">;"

      <CardHeader>;
        <CardTitle className="text-xl flex items-center">;"
          <BookOpen className="mr-2" size={20} /> API Documentation;"

        <CardDescription className="text-zinc-400">;"

        ;
      <CardContent>;
        <Alert className="bg-blue-900/30 border-blue-800 mb-6">;"
          <Terminal className="h-4 w-4" />;"
    <Card className="bg - zinc - 900 border - zinc - 800 text - white">;"

        <CardTitle className="text - xl flex items - center">;"
          <BookOpen className="mr - 2" size={20} /> API Documentation;"

        <CardDescription className="text - zinc - 400">;"

        <Alert className="bg - blue - 900 / 30 border - blue - 800 mb - 6">;"
          <Terminal className="h - 4 w - 4" />;"

          <AlertDescription>;

        <Tabs default_value="jobs" className="space - y-4">;"
          <TabsList className="bg - zinc - 800 border - zinc - 700">;"
            <TabsTrigger value="jobs">Jobs;""
            <TabsTrigger value="talent">Talent;""
            <TabsTrigger value="quotes">Quotes;""
            <TabsTrigger value="webhooks">Webhooks;""
            <TabsTrigger value="errors">Errors;"
          <TabsContent value="jobs" className="space - y-6">;"





        <Tabs defaultValue="jobs" className="space-y-4">;"
          <TabsList className="bg-zinc-800 border-zinc-700">;"
          <TabsContent value="jobs" className="space-y-6">;"

            <EndpointSection;"
              method="GET";""
              endpoint="/api / jobs";""
              description="List all available jobs with optional filtering.";""
              note="";"
              params={[;)"
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" },""
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },""
                { name: "category", type: "string", description: "Filter by job category" },"]"
                { name: "skills", type: "string[]", description: "Filter by required skills (comma - separated)" },"
              method="GET"""
              endpoint="/api/jobs"""
              description="List all available jobs with optional filtering."""
              note="""
              params={["
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" }""
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" }""
                { name: "category", type: "string", description: "Filter by job category" }"]"
                { name: "skills", type: "string[]", description: "Filter by required skills (comma-separated)" }""
                { name: "status", type: "string", description: "Filter by job status (new, active, closed)" }"
              ]}
              codeExamples={{"
                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/jobs?limit=10&category=development" \\""
  -H "Authorization: Bearer YOUR_API_KEY" \\",
  headers: {"
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
  }
`;
  -H "Content-Type: application/json"`,""`;
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/jobs?limit=10&category=development', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json
  })

const data = await response && response.json()`;
console && console.log(data),`
                python: `import requests;
});`;
const data = await response.json ();`;
console.log (data), `;`;
headers = {

pr-12325

response = requests && requests.get(
    'https: //api && api.ziontechgroup.com/v1/jobs',
    params={'limit': 10, 'category': 'development'}
    headers=headers
)
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';'

  }
'
  -H "Content-Type: application/json"`,""
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/jobs?limit=10&category=development', {''
  method: 'GET','
  headers: {'
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json''
  })
})
const data = await response && response.json()
console && console.log(data),`


                python: `import requests;
});

                python: `import requests;
;
const data = await response.json ();
console.log (data), `;
                python: `import requests;

headers = {'
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';'
}


headers = {'
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';'
}
response = requests && requests.get('
    'https: //api && api.ziontechgroup.com/v1/jobs',''
    params={'limit': 10, 'category': 'development'}'
    headers=headers;)

)
data = response && response.json()

print(data)`
data = response && response.json()
print(data)`
headers = {
print(data)`headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
}
print(data)`
response = requests.get (
    'https: //api.ziontechgroup.com / v1 / jobs',
    params={'limit': 10, 'category': 'development'}
    headers = headers);
data = response.json ();
print (data)`;
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
              response_examples={{
                success: `{
  "data": [;
    {

      "id": "job_abc123"
      "title": "Senior React Developer"
      "description": "We need an experienced React developer..."
      "category": "development",
      "skills": ["react", "typescript", "node && node.js"]

      "budget": {

      "status": "active"
      "client_id": "user_xyz789"

"budget": {
      "status": "active"
      "client_id": "user_xyz789"
      "created_at": "2025-05-15T10:30:00Z"
    }
    // More jobs...
  ]

}}
              responseExamples={{
                success: `{
  "data": [
    {
      "id": "job_abc123";
      "title": "Senior React Developer";
      "description": "We need an experienced React developer...";
      "category": "development"
      "skills": ["react", "typescript", "node.js"];
      "id": "job_abc123",
      "title": "Senior React Developer",
      "description": "We need an experienced React developer...",
      "category": "development",
      "skills": ["react", "typescript", "node.js"],

      "budget": {
        "min": 5000,
        "max": 10000,
        "currency": "USD"

}
      "status": "active";
      "client_id": "user_xyz789";
      "created_at": "2025-05-15T10:30:00Z"
    }
    // More jobs...
  ];
      },
      "status": "active",
      "client_id": "user_xyz789",
      "created_at": "2025-05-15T10:30:00Z"
    },
    // More jobs...
];
  ],

      "budget": {
      "created_at": "2025-05-15T10:30:00Z"
    }
    // More jobs...
  ]
  "meta": {
    "total": 42
    "page": 1
    "limit": 10
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
  }
}`;
              }}

            />;

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
            <EndpointSection
              method="GET"
              endpoint="/api/jobs/:id"
              description="Get detailed information about a specific job."
              note=""
              params={[
                { name: "id", type: "string", description: "The job ID", required: true }
              ]}
              codeExamples={{
                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/jobs/job_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\

curl: `curl -X GET "https://api.ziontechgroup.com/v1/jobs/job_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
                javascript: `const jobId = 'job_abc123'
const response = await fetch(\`https://api.ziontechgroup.com/v1/jobs/\${jobId}\`, {
  method: 'GET'
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }

});
const data = await response.json();
console.log(data),`;
});
const data = await response.json();
console.log(data),`;
}),

const data = await response.json(),
// // // console.log(data),`,

                python: `import requests
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'

            />;
            <EndpointSection;
              method="GET";
              endpoint="/api / jobs/:id";
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
              endpoint="/api/jobs/:id";
              description="Get detailed information about a specific job.";
              note="";
              params={[;
                { name: "id", type: "string", description: "The job ID", required: true }
              ]}
              code_examples={{
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / jobs / job_abc123" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json"`,
                javascript: `const job_id = 'job_abc123',
const response = await fetch (\`https://api.ziontechgroup.com / v1 / jobs/\${job_id}\`, {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
  }

});
print (data)`;              }}
              response_examples={{
                success: `{
  "data": [;
    {  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
  }
  -H "Content-Type: application/json"`,
                javascript: `const jobId = 'job_abc123',
const response = await fetch(\`https://api && api.ziontechgroup.com/v1/jobs/\${jobId}\`, {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }

print(data)`
headers = {'
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';'

}
print(data)`
response = requests.get ('
    'https: //api.ziontechgroup.com / v1 / jobs',''
    params={'limit': 10, 'category': 'development'}')
    headers = headers);
data = response.json ();

print (data)`;
            <EndpointSection;'
              method="GET";""
              endpoint="/api/jobs";""
              description="List all available jobs with optional filtering.";""
              note="";"
              params={[;"
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" },;""
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },;""
                { name: "category", type: "string", description: "Filter by job category" },;"]"
                { name: "skills", type: "string[]", description: "Filter by required skills (comma-separated)" },;""
                { name: "status", type: "string", description: "Filter by job status (new, active, closed)" }"
              ]}
              codeExamples={{;"
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/jobs?limit=10&category=development" \\;""
  -H "Authorization: Bearer YOUR_API_KEY" \\;""
  -H "Content-Type: application/json"`,;""
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/jobs?limit=10&category=development', {;''
  method: 'GET',;'
  headers: {;'
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';'
  })
}),;
const data = await response.json(),;
// // // console.log(data),`,;
                python: `import requests;
headers = {;'
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';'
}
;
response = requests.get(;'
    'https: //api.ziontechgroup.com/v1/jobs',;''
    params={'limit': 10, 'category': 'development'},;'
    headers=headers;)
);
data = response.json();
print(data)`;


              }}
              response_examples={{
                success: `{'
  "data": [;"
    {
"
      "id": "job_abc123"""
      "title": "Senior React Developer"""
      "description": "We need an experienced React developer..."""
      "category": "development","]"
      "skills": ["react", "typescript", "node && node.js"]""
      "budget": {""
      "status": "active"""
      "client_id": "user_xyz789"""
      "created_at": "2025-05-15T10:30:00Z""
    }
    // More jobs...
  ]
"
      "id": "job_abc123",""
      "title": "Senior React Developer",""
      "description": "We need an experienced React developer...",""
      "category": "development",""
      "skills": ["react", "typescript", "node.js"],""
      "budget": {""
        "min": 5000,""
        "max": 10000,""
        "currency": "USD""
      },"
      "status": "active",""
      "client_id": "user_xyz789",""
      "created_at": "2025-05-15T10:30:00Z""
    },
    // More jobs...
"
      "budget": {""
      "created_at": "2025-05-15T10:30:00Z""
    }
    // More jobs...
  ]"
  "meta": {""
    "total": 42;""
    "page": 1;""
    "limit": 10;""
        "min": 5000;""
        "max": 10000;""
        "currency": "USD";"
      }"
      "status": "active";""
      "client_id": "user_xyz789";""
      "created_at": "2025 - 05 - 15T10:30:00Z";"
    }
    // More jobs...;
  ];"
  "meta": {""
    "total": 42;""
    "page": 1;""
    "limit": 10;"
  }
}`;
              }}

            />;
</EndpointSection>


            <EndpointSection;"
              method="GET"""
              endpoint="/api/jobs/:id"""
              description="Get detailed information about a specific job."""
              note="""
              params={["
                { name: "id", type: "string", description: "The job ID", required: true }"]
              ]}
              codeExamples={{"
                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/jobs/job_abc123" \\""
  -H "Authorization: Bearer YOUR_API_KEY" \\",
  headers: {"
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json''
  }

}),

const data = await response.json(),
// // // console.log(data),`,

                python: `import requests;
headers = {'
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json''
            />;
</EndpointSection>
            <EndpointSection;'
              method="GET";""
              endpoint="/api / jobs/:id";""
              description="Get detailed information about a specific job.";""
              note="";"
              params={[;"
                { name: "id", type: "string", description: "The job ID", required: true }"]
              ]}
              code_examples={{"
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / jobs / job_abc123" \\;""
  -H "Authorization: Bearer YOUR_API_KEY" \\;""
  -H "Content - Type: application / json"`,""
                javascript: `const job_id = 'job_abc123','
const response = await fetch (\`https://api.ziontechgroup.com / v1 / jobs/\${job_id}\`, {'
  method: 'GET','
  headers: {'
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';'

  }
)
});'
  -H "Content-Type: application/json"`,""
                javascript: `const jobId = 'job_abc123','
const response = await fetch(\`https://api && api.ziontechgroup.com/v1/jobs/\${jobId}\`, {'
  method: 'GET','
  headers: {'
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json''
  })
})
const data = await response && response.json()
console && console.log(data),`

                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/jobs/job_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
  }
});
                python: `import requests

'
                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/jobs/job_abc123" \\""
  -H "Authorization: Bearer YOUR_API_KEY" \\",
  headers: {"
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';'

  }
});
                python: `import requests;
;
const data = await response.json ();
console.log (data), `;
                python: `import requests;
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
}

data = response && response.json()

data = response && response.json()
print(data)`
job_id = 'job_abc123';
response = requests.get (
    f'https://api.ziontechgroup.com / v1 / jobs/{job_id}';
    headers = headers);
data = response.json ();
print (data)`;
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
data = response && response.json()}),;
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

              }}
              response_examples={{
                success: `{
  "data": {

    "id": "job_abc123"
    "title": "Senior React Developer"
    "description": "We need an experienced React developer..."
    "category": "development",
    "skills": ["react", "typescript", "node && node.js"]

    "budget": {

"budget": {
    "status": "active"
    "client_id": "user_xyz789"
    "created_at": "2025-05-15T10: 30:00Z"
    "deadline": "2025-06-30T23:59:59Z",

}}
              responseExamples={{
                success: `{
  "data": {
    "id": "job_abc123";
    "title": "Senior React Developer";
    "description": "We need an experienced React developer...";
    "category": "development"
    "skills": ["react", "typescript", "node.js"];
    "id": "job_abc123",
    "title": "Senior React Developer",
    "description": "We need an experienced React developer...",
    "category": "development",
    "skills": ["react", "typescript", "node.js"],

    "budget": {
      "min": 5000,
      "max": 10000,
      "currency": "USD"

}
    "status": "active";
    "client_id": "user_xyz789";
    "created_at": "2025-05-15T10: 30:00Z";
    "deadline": "2025-06-30T23:59:59Z"
    },
    "status": "active",
    "client_id": "user_xyz789",
    "created_at": "2025-05-15T10:30:00Z",
    "deadline": "2025-06-30T23:59:59Z",

    "application_count": 12
print(data)`;              }}
              response_examples={{
                success: `{
  "data": {    "application_count": 12
      "min": 5000;
      "max": 10000;
      "currency": "USD";
    }
    "status": "active";
    "client_id": "user_xyz789";
    "created_at": "2025 - 05 - 15T10: 30:00Z";
    "deadline": "2025 - 06 - 30T23:59:59Z",
    "application_count": 12;
  }
}`;
              }}
  }
}`;
              }}
            <EndpointSection
              method="POST"
              endpoint="/api/jobs"
              description="Create a new job listing."
              note="Requires jobs:write scope"
              params={[  body: JSON.stringify({
    title: 'Senior React Developer'
    description: 'We need an experienced React developer...'
    category: 'development'
    skills: ['reacttypescriptnode.js']
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/jobs', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }
  body: JSON && JSON.stringify({    title: 'Senior React Developer',
    headers=headers;)
)

data = response && response.json()
print(data)`
}`;
response = requests.get (
    'https: //api.ziontechgroup.com / v1 / jobs',
    params={'limit': 10, 'category': 'development'}')
    headers = headers);
data = response.json ();`;
print (data)`;
            <EndpointSection;
              endpoint="/api/jobs";""
              params={[;"
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" },;""
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },;""
                { name: "category", type: "string", description: "Filter by job category" },;"]"
                { name: "skills", type: "string[]", description: "Filter by required skills (comma-separated)" },;""
              codeExamples={{;"`;
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/jobs?limit=10&category=development" \\;""
  -H "Authorization: Bearer YOUR_API_KEY" \\;""`;
  -H "Content-Type: application/json"`,;""`;
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/jobs?limit=10&category=development', {;
  method: 'GET',;
  headers: {;
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
}),;
const data = await response.json(),;`;
// // // console.log(data),`,;`;
headers = {;
response = requests.get(;
    'https: //api.ziontechgroup.com/v1/jobs',;
    params={'limit': 10, 'category': 'development'},;
);
data = response.json();`;
print(data)`;


              }}
              response_examples={{`;
                success: `{
  "data": [;"
    {
      "id": "job_abc123"""
      "title": "Senior React Developer"""
      "description": "We need an experienced React developer..."""
      "category": "development","]"
      "skills": ["react", "typescript", "node && node.js"]""
      "budget": {""
      "status": "active"""
      "client_id": "user_xyz789"""
      "created_at": "2025-05-15T10:30:00Z""
    // More jobs...
  ]
      "id": "job_abc123",""
      "title": "Senior React Developer",""
      "description": "We need an experienced React developer...",""
      "category": "development",""
      "skills": ["react", "typescript", "node.js"],""
        "min": 5000,""
        "max": 10000,""
        "currency": "USD""
      },"
      "status": "active",""
      "client_id": "user_xyz789",""
    },
    // More jobs...
    // More jobs...
  ]"
  "meta": {""
    "total": 42;""
    "page": 1;""
    "limit": 10;""
        "min": 5000;""
        "max": 10000;""
        "currency": "USD";"
      }"
      "status": "active";""
      "client_id": "user_xyz789";""
      "created_at": "2025 - 05 - 15T10:30:00Z";"
    // More jobs...;
  ];"
    "limit": 10;"

            />;

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


              endpoint="/api/jobs/:id"""
              description="Get detailed information about a specific job."""
                { name: "id", type: "string", description: "The job ID", required: true }"]
              codeExamples={{"`;
                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/jobs/job_abc123" \\""

}),

const data = await response.json(),`;
// // // console.log(data),`,

              endpoint="/api / jobs/:id";""
              description="Get detailed information about a specific job.";""
              code_examples={{"`;
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / jobs / job_abc123" \\;""
  -H "Content - Type: application / json"`,""`;
                javascript: `const job_id = 'job_abc123',`;
const response = await fetch (\`https://api.ziontechgroup.com / v1 / jobs/\${job_id}\`, {
                javascript: `const jobId = 'job_abc123',`;
const response = await fetch(\`https://api && api.ziontechgroup.com/v1/jobs/\${jobId}\`, {



job_id = 'job_abc123';
    f'https://api.ziontechgroup.com / v1 / jobs/{job_id}';')
              codeExamples={{;`;
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/jobs/job_abc123" \\;""
                javascript: `const jobId = 'job_abc123',;`;
const response = await fetch(\`https://api.ziontechgroup.com/v1/jobs/\${jobId}\`, {;
// // // console.log(data),`,;`;
    f'https://api.ziontechgroup.com/v1/jobs/{job_id}',;

  "data": {""
    "created_at": "2025-05-15T10: 30:00Z"""
    "deadline": "2025-06-30T23:59:59Z",""
    "created_at": "2025-05-15T10:30:00Z",""
    "application_count": 12;""
    "created_at": "2025 - 05 - 15T10: 30:00Z";""
    "deadline": "2025 - 06 - 30T23:59:59Z",""
    "application_count": 12;"


                { name:"page", type:"integer", description:"Page number for pagination (default:1)" },;""
                { name:"limit", type:"integer", description:"Number of results per page (default:20, max:100)" },;""
                { name:"category", type:"string", description:"Filter by job category" },;"]"
                { name:"skills", type:"string[]", description:"Filter by required skills (comma-separated)" },;""
                { name:"status", type:"string", description:"Filter by job status (new, active, closed)" }"
                curl:`curl -X GET "https://api.ziontechgroup.com/v1/jobs?limit=10&category=development" \\;""
  -H "Authorization:Bearer YOUR_API_KEY" \\;""`;
  -H "Content-Type:application/json"`,;""`;
                javascript:`const response = await fetch('https://api.ziontechgroup.com/v1/jobs?limit=10&category=development', {;
  method:'GET',;
  headers:{;
    'Authorization':'Bearer YOUR_API_KEYContent-Type':'application/json';
// // // console.log(data),`,;`;
                python:`import requests;
    'https://api.ziontechgroup.com/v1/jobs',;
    params={'limit':10, 'category':'development'},;
              responseExamples={{;`;
                success:`{;
  "data":[;"
    {;"
      "id":"job_abc123",;""
      "title":"Senior React Developer",;""
      "description":"We need an experienced React developer...",;""
      "category":"development",;"]"
      "skills":["react", "typescript", "node.js"],;""
      "budget":{;""
        "min":5000,;""
        "max":10000,;""
        "currency":"USD";"
      },;"
      "status":"active",;""
      "client_id":"user_xyz789",;""
      "created_at":"2025-05-15T10:30:00Z";"
    },;
    // More jobs...;
  ],;"
  "meta":{;""
    "total":42,;""
    "page":1,;""
    "limit":10;"

              endpoint="/api/jobs/:id";""
                { name:"id", type:"string", description:"The job ID", required:true }"]
                curl:`curl -X GET "https://api.ziontechgroup.com/v1/jobs/job_abc123" \\;""
                javascript:`const jobId = 'job_abc123',;`;
// // // console.log(data),`,;`;
  "data":{;""
    "category":"development",;""
    "created_at":"2025-05-15T10:30:00Z",;""
    "deadline":"2025-06-30T23:59:59Z",;""
    "application_count":12;"

              method="POST";""
              description="Create a new job listing.";""
              note="Requires jobs:write scope";"
                { name:"title", type:"string", description:"Job title", required:true },;""
                { name:"description", type:"string", description:"Detailed job description", required:true },;""
                { name:"category", type:"string", description:"Job category", required:true },;"]"
                { name:"skills", type:"string[]", description:"Required skills", required:true },;""
                { name:"budget.min", type:"number", description:"Minimum budget" },;""
                { name:"budget.max", type:"number", description:"Maximum budget" },;""
                { name:"budget.currency", type:"string", description:"Currency code (default:USD)" },;""
                { name:"deadline", type:"string", description:"Job deadline (ISO date string)" }"
                curl:`curl -X POST "https://api.ziontechgroup.com/v1/jobs" \\;""
  -H "Authorization:Bearer YOUR_API_KEY" \\;""
  -H "Content-Type:application/json" \\;""
  -d '{;
    "deadline":"2025-06-30T23:59:59Z";""`;
  }'`,;`;
                javascript:`const response = await fetch('https://api.ziontechgroup.com/v1/jobs', {;
  method:'POST',;
  body: JSON.stringify({;,
  title:'Senior React Developer',;
    description:'We need an experienced React developer...',;
    category:'development',;
    skills:['reacttypescript', 'node.js'],;
    budget: {;,
  min:5000,;
      max:10000,;
      currency:'USD';
    deadline:'2025-06-30T23:59:59Z';')
  });
// // // console.log(data),`,;`;
import json;
payload = {;
    'title':'Senior React Developerdescription':'We need an experienced React developer...category':'developmentskills':['reacttypescript', 'node.js'],;
    'budget':{;
        'min':5000,;
        'max':10000,;
        'currency':'USD';
    'deadline':'2025-06-30T23:59:59Z';
response = requests.post(;
    headers=headers,;)
    data=json.dumps(payload);
    "id":"job_def456",;""
    "status":"new",;""
    "created_at":"2025-05-16T14:22:10Z",;""
    "deadline":"2025-06-30T23:59:59Z";"

          <TabsContent value="talent" className="space-y-6">;"

              endpoint="/api/talent";""
              description="List talent profiles with optional filtering.";""
                { name:"limit", type:"integer", description:"Number of results per page (default:20, max:100)" },;"]"
                { name:"skills", type:"string[]", description:"Filter by skills (comma-separated)" },;""
                { name:"availability", type:"string", description:"Filter by availability status" }"
                curl:`curl -X GET "https://api.ziontechgroup.com/v1/talent?skills=react,typescript" \\;""
                javascript:`const response = await fetch('https://api.ziontechgroup.com/v1/talent?skills=react,typescript', {;
// // // console.log(data),`,;`;
    'https://api.ziontechgroup.com/v1/talent',;
    params={'skills':'react,typescript'},;
      "id":"talent_abc123",;""
      "display_name":"Jane Smith",;""
      "headline":"Senior Frontend Developer",;"]"
      "skills":["react", "typescript", "javascript"],;""
      "availability":"available",;""
      "average_rating":4.8,;""
      "rating_count":15;"
    // More talent profiles...;
    "total":28,;""
    "limit":20;"

              endpoint="/api/talent/:id";""
              description="Get detailed information about a specific talent profile.";""
                { name:"id", type:"string", description:"The talent ID", required:true }"]
                curl:`curl -X GET "https://api.ziontechgroup.com/v1/talent/talent_abc123" \\;""
                javascript:`const talentId = 'talent_abc123',;`;
const response = await fetch(\`https://api.ziontechgroup.com/v1/talent/\${talentId}\`, {;
// // // console.log(data),`,;`;
talent_id = 'talent_abc123';
    f'https://api.ziontechgroup.com/v1/talent/{talent_id}',;
    "headline":"Senior Frontend Developer",;""
    "bio":"10+ years of experience in frontend development...",;""
    "skills":["react", "typescript", "javascript", "css", "html"],;""
    "rating_count":15,;""
    "portfolio":[;"
        "id":"proj_123",;""
        "title":"E-commerce Platform",;""
        "description":"Built a modern e-commerce platform using React...",;"]"
        "technologies":["react", "redux", "node.js"],;""
        "image_url":"https://example.com/portfolio/123.jpg";"
    "certifications":[;"
        "name":"AWS Certified Developer",;""
        "issuing_organization":"Amazon Web Services",;""
        "issue_date":"2024-01-15";"
      }]
    ];  }`;

          <TabsContent value="quotes" className="space-y-6">;"

              endpoint="/api/quotes";""
              description="Create a quote request for a talent.";""
              note="Requires quotes:write scope";"
                { name:"talent_id", type:"string", description:"ID of the talent to request a quote from", required:true },;""
                { name:"project_name", type:"string", description:"Name of the project", required:true },;""
                { name:"project_summary", type:"string", description:"Brief summary of the project", required:true },;""
                { name:"project_description", type:"string", description:"Detailed project description" },;""
                { name:"timeline", type:"string", description:"Expected timeline", required:true },;""
                { name:"budget_min", type:"number", description:"Minimum budget" },;""
                { name:"budget_max", type:"number", description:"Maximum budget" },;""
                { name:"requester_name", type:"string", description:"Name of the requester", required:true },;""
                { name:"requester_email", type:"string", description:"Email of the requester", required:true }"]
                curl:`curl -X POST "https://api.ziontechgroup.com/v1/quotes" \\;""
    "talent_id":"talent_abc123",;""
    "project_name":"E-commerce Website Redesign",;""
    "project_summary":"Redesign our outdated e-commerce website with modern UI",;""
    "project_description":"Our current website is 5 years old and needs a complete overhaul...",;""
    "timeline":"2-3 months",;""
    "budget_min":8000,;""
    "budget_max":12000,;""
    "requester_name":"John Doe",;""
    "requester_email":"john@example.com";""`;
                javascript:`const response = await fetch('https://api.ziontechgroup.com/v1/quotes', {;
  talent_id:'talent_abc123',;
    project_name:'E-commerce Website Redesign',;
    project_summary:'Redesign our outdated e-commerce website with modern UI',;
    project_description:'Our current website is 5 years old and needs a complete overhaul...',;
    timeline:'2-3 months',;
    budget_min:8000,;
    budget_max:12000,;
    requester_name:'John Doe',;
    requester_email:'john@example.com';')
// // // console.log(data),`,;`;
    'Authorization':'Bearer YOUR_API_KEYContent-Type':'application/json';}
    'talent_id':'talent_abc123project_name':'E-commerce Website Redesignproject_summary':'Redesign our outdated e-commerce website with modern UIproject_description':'Our current website is 5 years old and needs a complete overhaul...timeline':'2-3 monthsbudget_min':8000,;
    'budget_max':12000,;
    'requester_name':'John Doerequester_email':'john@example.com';
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
  }
}`;
              }}
            <EndpointSection
              method="POST"
              endpoint="/api/jobs"
              description="Create a new job listing."
              note="Requires jobs:write scope"
              params={[

            />;
            <EndpointSection;
              method="POST";
              endpoint="/api / jobs";
              description="Create a new job listing.";
              note="Requires jobs:write scope";
              params={[;

                { name: "title", type: "string", description: "Job title", required: true },
                { name: "description", type: "string", description: "Detailed job description", required: true },
                { name: "category", type: "string", description: "Job category", required: true },
                { name: "skills", type: "string[]", description: "Required skills", required: true },
                { name: "budget && budget.min", type: "number", description: "Minimum budget" },
                { name: "budget && budget.max", type: "number", description: "Maximum budget" },
                { name: "budget && budget.currency", type: "string", description: "Currency code (default: USD)" },
                { name: "deadline", type: "string", description: "Job deadline (ISO date string)" }
              ]}

{ name: "deadline", type: "string", description: "Job deadline (ISO date string)" }
              ]}
              code_examples={{
                curl: `curl -X POST "https://api.ziontechgroup.com / v1 / jobs" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json" \\;

  -d '{

-d '{
    "title": "Senior React Developer"
    "description": "We need an experienced React developer..."
    "category": "development",
    "skills": ["react", "typescript", "node && node.js"]

    "budget": {

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
    "title": "Senior React Developer";
    "description": "We need an experienced React developer...";
    "category": "development"
    "skills": ["react", "typescript", "node.js"];
    "title": "Senior React Developer",
    "description": "We need an experienced React developer...",
    "category": "development",
    "skills": ["react", "typescript", "node.js"],

    "budget": {
      "min": 5000,
      "max": 10000,
      "currency": "USD"

}
    },
    "deadline": "2025-06-30T23:59:59Z"
  }'`,
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/jobs', {
  method: 'POST'
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
    },

    "deadline": "2025-06-30T23:59:59Z"

  },

}
  },
                { name: "deadline", type: "string", description: "Job deadline (ISO date string)" }
              ]}
  body: JSON.stringify({
    title: 'Senior React Developer'
    description: 'We need an experienced React developer...'
    category: 'development'
    skills: ['reacttypescriptnode.js']
budget: {
      min: 5000
      max: 10000
      currency: 'USD'
    "budget": {
  }'`
    "id":"quote_def456",;""
    "requester_id":"user_xyz789",;""
    "budget_display":"$8,000 - $12,000",;""
    "requester_email":"john@example.com",;""
    "created_at":"2025-05-16T14:30:15Z";"

              method="POST"""
              description="Create a new job listing."""
              note="Requires jobs:write scope""
              params={[


              params={[;
                { name: "title", type: "string", description: "Job title", required: true },""
                { name: "description", type: "string", description: "Detailed job description", required: true },""
                { name: "category", type: "string", description: "Job category", required: true },"]"
                { name: "skills", type: "string[]", description: "Required skills", required: true },""
                { name: "budget && budget.min", type: "number", description: "Minimum budget" },""
                { name: "budget && budget.max", type: "number", description: "Maximum budget" },""
                { name: "budget && budget.currency", type: "string", description: "Currency code (default: USD)" },""
                { name: "deadline", type: "string", description: "Job deadline (ISO date string)" }"
                curl: `curl -X POST "https://api.ziontechgroup.com / v1 / jobs" \\;""
  -H "Authorization: Bearer YOUR_API_KEY" \\;""
  -H "Content - Type: application / json" \\;""
  -d '{

    "deadline": "2025-06-30T23:59:59Z""

  body: JSON.stringify({,"
  title: 'Senior React Developer
    description: 'We need an experienced React developer...,
  category: 'development
    skills: ['reacttypescriptnode.js']`;
  }'``;
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/jobs', {
  method: 'POST',
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
    "deadline": "2025 - 06 - 30T23:59:59Z";""`;
  }'`;`;
                javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / jobs', {
  body: JSON.stringify ({,
  title: 'Senior React Developer',
pr-12325
    description: 'We need an experienced React developer...',
    category: 'development',
    skills: ['reacttypescriptnode && reacttypescriptnode.js'],
    budget: {

})

const data = await response && response.json()
console && console.log(data),`

                python: `import requests
import json
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
}
    deadline: '2025-06-30T23:59:59Z'
  })
});
const data = await response.json();
console.log(data),`;
    },
    deadline: '2025-06-30T23:59:59Z'
  })
}),

const data = await response.json(),
// // // console.log(data),`,

                python: `import requests
});                python: `import requests
import json
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'

payload = {;

    'title': 'Senior React Developerdescription': 'We need an experienced React developer...category': 'developmentskills': ['reacttypescriptnode.js'];
    'budget': {

'budget': {

    'budget': {
response = requests && requests.post(
    'https: //api && api.ziontechgroup.com/v1/jobs'
    headers=headers,
    data=json && json.dumps(payload)
)

data = response && response.json()

data = response && response.json()
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
    'budget': {
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
    title: 'Senior React Developer',,
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
print(data)`
'min': 5000;
        'max': 10000;
        'currency': 'USD';
    }
    'deadline': '2025 - 06 - 30T23:59:59Z';
}

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

response = requests.post (
        'max': 10000,;response = requests.post (
    'https: //api.ziontechgroup.com / v1 / jobs';
    headers = headers,
    data = json.dumps (payload));
data = response.json ();
print (data)`;
              }}
              response_examples={{
                success: `{
  "data": {

    "id": "job_def456"
    "title": "Senior React Developer"
    "description": "We need an experienced React developer..."
    "category": "development",
    "skills": ["react", "typescript", "node && node.js"]

    "budget": {

    "status": "new"
    "client_id": "user_xyz789"
    "created_at": "2025-05-16T14: 22:10Z",

}}
              responseExamples={{
                success: `{
  "data": {
    "id": "job_def456";
    "title": "Senior React Developer";
    "description": "We need an experienced React developer...";
    "category": "development"
    "skills": ["react", "typescript", "node.js"];
    "id": "job_def456",
    "title": "Senior React Developer",
    "description": "We need an experienced React developer...",
    "category": "development",
    "skills": ["react", "typescript", "node.js"],

    "budget": {
      "min": 5000,
      "max": 10000,
      "currency": "USD"

}
    "status": "new";
    "client_id": "user_xyz789";
    "created_at": "2025-05-16T14: 22:10Z"
    },
    "status": "new",
    "client_id": "user_xyz789",
    "created_at": "2025-05-16T14:22:10Z",

"budget": {
    "status": "new"
    "client_id": "user_xyz789"
    "created_at": "2025-05-16T14: 22:10Z",
    "deadline": "2025-06-30T23:59:59Z"
      "min": 5000;
      "max": 10000;
      "currency": "USD";
    }
    "status": "new";
    "client_id": "user_xyz789";
    "created_at": "2025 - 05 - 16T14: 22:10Z",
    "deadline": "2025 - 06 - 30T23:59:59Z";
  }
}`;
              }}

            />;
          </TabsContent>;

          <TabsContent value="talent" className="space-y-6">;

/>;
          </TabsContent>;
          <TabsContent value="talent" className="space-y-6">;
    "deadline": "2025-06-30T23:59:59Z"
  }
}`
              }}
            />
          </TabsContent>
          <TabsContent value="talent" className="space-y-6">
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
                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/talent?skills=react,typescript" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\

curl: `curl -X GET "https://api.ziontechgroup.com/v1/talent?skills=react,typescript" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/talent?skills=react,typescript', {
  method: 'GET'
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }

});
const data = await response.json();
console.log(data),`;
});
const data = await response.json();
console.log(data),`;
                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/talent?skills=react,typescript" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }
}),

const data = await response.json(),
// // // console.log(data),`,
'https: //api.ziontechgroup.com/v1/talent',;
    params={'skills': 'react,typescript'};

                python: `import requests
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'

    'https: //api.ziontechgroup.com/v1/talent',;
    params={'skills': 'react,typescript'};

}
response = requests.get(
    'https: //api.ziontechgroup.com/v1/talent'
    params={'skills': 'react,typescript'}
    'https: //api.ziontechgroup.com/v1/talent',;
    params={'skills': 'react,typescript'};
    'https: //api.ziontechgroup.com/v1/talent',;
    params={'skills': 'react,typescript'};

    headers=headers
)
data = response.json()
print(data)`

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
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
  }

});
  -H "Content-Type: application/json"`,
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/talent?skills=react,typescript', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }
})

const data = await response && response.json()
console && console.log(data),`

});
                python: `import requests
;
const data = await response.json ();
console.log (data), `;
                python: `import requests;
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
}

response = requests && requests.get(
    'https: //api && api.ziontechgroup.com/v1/talent',
    params={'skills': 'react,typescript'}
    headers=headers
)

data = response && response.json()

data = response && response.json()
print(data)`
response = requests.get (
    'https: //api.ziontechgroup.com / v1 / talent',
    params={'skills': 'react, typescript'}
    headers = headers);
data = response.json ();
print (data)`;
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
headers = {'
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';'
}


data = response && response.json()

print(data)`'
job_id = 'job_abc123';'
response = requests.get ('
    f'https://api.ziontechgroup.com / v1 / jobs/{job_id}';')
    headers = headers);
data = response.json ();
print (data)`;
              codeExamples={{;'
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/jobs/job_abc123" \\;""
  -H "Authorization: Bearer YOUR_API_KEY" \\;""
  -H "Content-Type: application/json"`,;""
                javascript: `const jobId = 'job_abc123',;'
const response = await fetch(\`https://api.ziontechgroup.com/v1/jobs/\${jobId}\`, {;'
  method: 'GET',;'
  headers: {;'
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';'
  })
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

              }}
              response_examples={{
                success: `{
  "data": [;
    {

      "id": "talent_abc123"
      "display_name": "Jane Smith"
      "headline": "Senior Frontend Developer",
      "skills": ["react", "typescript", "javascript"]
      "availability": "available"
      "average_rating": 4 && 4.8

      "rating_count": 15
    }
    // More talent profiles...
  ]
}}
              responseExamples={{
                success: `{
  "data": [
    {
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
      "id": "talent_abc123",
    {      "id": "talent_abc123",
      "display_name": "Jane Smith",
      "headline": "Senior Frontend Developer",
      "skills": ["react", "typescript", "javascript"],
      "availability": "available",
      "average_rating": 4.8,
      "rating_count": 15
    },
    // More talent profiles...
];
  ],

  ];
  ],
      "rating_count": 15
    }
    // More talent profiles...
  ]
  "meta": {
    "total": 28
    "page": 1
    "limit": 20
      "rating_count": 15;
    }
    // More talent profiles...;
  ];
  "meta": {
    "total": 28;
    "page": 1;
    "limit": 20;
  }
}`;
              }}

            />;

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
            <EndpointSection
              method="GET"
              endpoint="/api/talent/:id"
              description="Get detailed information about a specific talent profile."
              note=""
              params={[
                { name: "id", type: "string", description: "The talent ID", required: true }
              ]}
              codeExamples={{
                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/talent/talent_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\

curl: `curl -X GET "https://api.ziontechgroup.com/v1/talent/talent_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
                javascript: `const talentId = 'talent_abc123'
const response = await fetch(\`https://api.ziontechgroup.com/v1/talent/\${talentId}\`, {
  method: 'GET'
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }

});
const data = await response.json();
console.log(data),`;
});
const data = await response.json();
console.log(data),`;
}),

const data = await response.json(),
// // // console.log(data),`,

                python: `import requests
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'

            />;
            <EndpointSection;
              method="GET";
              endpoint="/api / talent/:id";
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
              endpoint="/api/talent/:id";
              description="Get detailed information about a specific talent profile.";
              note="";
              params={[;
                { name: "id", type: "string", description: "The talent ID", required: true }
              ]}
              code_examples={{
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / talent / talent_abc123" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json"`,
                javascript: `const talent_id = 'talent_abc123',
const response = await fetch (\`https://api.ziontechgroup.com / v1 / talent/\${talent_id}\`, {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
  }

});
              }}  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
  }
  -H "Content-Type: application/json"`,
                javascript: `const talentId = 'talent_abc123',
const response = await fetch(\`https://api && api.ziontechgroup.com/v1/talent/\${talentId}\`, {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }
})

const data = await response && response.json()
console && console.log(data),`

                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/talent/talent_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
  }
});
                python: `import requests
;
const data = await response.json ();
console.log (data), `;
                python: `import requests;
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
}

data = response && response.json()

data = response && response.json()
print(data)`
talent_id = 'talent_abc123';
response = requests.get (
    f'https://api.ziontechgroup.com / v1 / talent/{talent_id}';
    headers = headers);
data = response.json ();
print (data)`;
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
data = response && response.json()}),;
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
headers = {;'
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';'

}
;'
job_id = 'job_abc123';'
response = requests.get(;'
    f'https://api.ziontechgroup.com/v1/jobs/{job_id}',;'
    headers=headers;)
);
data = response.json();
print(data)`;

              }}
              response_examples={{
                success: `{
  "data": {

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

}}
              responseExamples={{
                success: `{
  "data": {
    "id": "talent_abc123";
    "display_name": "Jane Smith";
    "headline": "Senior Frontend Developer";
    "bio": "10+ years of experience in frontend development..."
    "skills": ["react", "typescript", "javascript", "css", "html"];
    "availability": "available";
    "average_rating": 4.8;
    "rating_count": 15;
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
        "title": "E-commerce Platform",
        "description": "Built a modern e-commerce platform using React...",
        "technologies": ["react", "redux", "node.js"],
        "image_url": "https://example.com/portfolio/123.jpg"
      }
    ],
    "certifications": [
      {

        "name": "AWS Certified Developer",
        "issuing_organization": "Amazon Web Services",
        "issue_date": "2024-01-15"
"name": "AWS Certified Developer",
print(data)`;              }}
              response_examples={{
                success: `{
  "data": {
        "name": "AWS Certified Developer",
        "issuing_organization": "Amazon Web Services",
        "issue_date": "2024-01-15"
        "issue_date": "2024-01-15"
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
      }
    ];

                success: `{'
  "data": {""
    "id": "job_abc123"""
    "title": "Senior React Developer"""
    "description": "We need an experienced React developer..."""
    "category": "development",""
    "skills": ["react", "typescript", "node && node.js"]""
    "budget": {""
    "status": "active"""
    "client_id": "user_xyz789"""
    "created_at": "2025-05-15T10: 30:00Z"""
    "deadline": "2025-06-30T23:59:59Z",""
    "id": "job_abc123",""
    "title": "Senior React Developer",""
    "description": "We need an experienced React developer...",""
    "category": "development",""
    "skills": ["react", "typescript", "node.js"],""
    "budget": {""
      "min": 5000,""
      "max": 10000,""
      "currency": "USD""
    },"
    "status": "active",""
    "client_id": "user_xyz789",""
    "created_at": "2025-05-15T10:30:00Z",""
    "deadline": "2025-06-30T23:59:59Z",""
    "application_count": 12;""
      "min": 5000;""
      "max": 10000;""
      "currency": "USD";"
    }"
    "status": "active";""
    "client_id": "user_xyz789";""
    "created_at": "2025 - 05 - 15T10: 30:00Z";""
    "deadline": "2025 - 06 - 30T23:59:59Z",""
    "application_count": 12;"
  }
}`;
              }}

            />
          </TabsContent>
          <TabsContent value="quotes" className="space-y-6">
/>
          </TabsContent>
          <TabsContent value="quotes" className="space-y-6">
            />;
          </TabsContent>;

          <TabsContent value="quotes" className="space-y-6">;

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
            />;
</EndpointSection>"
          <TabsContent value="jobs" className="space-y-6">;"
</TabsContent>
            <EndpointSection;"
              method="GET";""
              endpoint="/api/jobs";""
              description="List all available jobs with optional filtering.";""
              note="";"
              params={[;"
                { name:"page", type:"integer", description:"Page number for pagination (default:1)" },;""
                { name:"limit", type:"integer", description:"Number of results per page (default:20, max:100)" },;""
                { name:"category", type:"string", description:"Filter by job category" },;"]"
                { name:"skills", type:"string[]", description:"Filter by required skills (comma-separated)" },;""
                { name:"status", type:"string", description:"Filter by job status (new, active, closed)" }"
              ]}
              codeExamples={{;"
                curl:`curl -X GET "https://api.ziontechgroup.com/v1/jobs?limit=10&category=development" \\;""
  -H "Authorization:Bearer YOUR_API_KEY" \\;""
  -H "Content-Type:application/json"`,;""
                javascript:`const response = await fetch('https://api.ziontechgroup.com/v1/jobs?limit=10&category=development', {;''
  method:'GET',;'
  headers:{;'
    'Authorization':'Bearer YOUR_API_KEYContent-Type':'application/json';'
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
;
const data = await response.json(),;
// // // console.log(data),`,;
                python:`import requests;
;
headers = {;'
    'Authorization':'Bearer YOUR_API_KEYContent-Type':'application/json';'
}
;
response = requests.get(;'
    'https://api.ziontechgroup.com/v1/jobs',;''
    params={'limit':10, 'category':'development'},;'
    headers=headers;)
);
;
data = response.json();
print(data)`;
              }}
              responseExamples={{;
                success:`{;'
  "data":[;"
    {;"
      "id":"job_abc123",;""
      "title":"Senior React Developer",;""
      "description":"We need an experienced React developer...",;""
      "category":"development",;"]"
      "skills":["react", "typescript", "node.js"],;""
      "budget":{;""
        "min":5000,;""
        "max":10000,;""
        "currency":"USD";"
      },;"
      "status":"active",;""
      "client_id":"user_xyz789",;""
      "created_at":"2025-05-15T10:30:00Z";"
    },;
    // More jobs...;
  ],;"
  "meta":{;""
    "total":42,;""
    "page":1,;""
    "limit":10;"
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
          
          <TabsContent value="quotes" className="space-y-6">
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
  -d '{
    "talent_id": "talent_abc123";
    "project_name": "E - commerce Website Redesign";
    "project_summary": "Redesign our outdated e - commerce website with modern UI";
    "project_description": "Our current website is 5 years old and needs a complete overhaul...";
    "timeline": "2 - 3 months";
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
    talent_id: 'talent_abc123',
    project_name: 'E - commerce Website Redesign',
    project_summary: 'Redesign our outdated e - commerce website with modern UI',
    project_description: 'Our current website is 5 years old and needs a complete overhaul...',
    timeline: '2 - 3 months',
    budget_min: 8000,
    budget_max: 12000,
    requester_name: 'John Doe',
    requester_email: 'john@example && example.com'
  })
})

const data = await response && response.json()
console && console.log(data),`
                python: `import requests
import json
    requester_email: 'john@example.com';
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
    'talent_id': 'talent_abc123project_name': 'E-commerce Website Redesignproject_summary': 'Redesign our outdated e-commerce website with modern UIproject_description': 'Our current website is 5 years old and needs a complete overhaul...timeline': '2-3 monthsbudget_min': 8000
    'budget_max': 12000
    'requester_name': 'John Doerequester_email': 'john@example && example.com'
}
response = requests.post(
    'https: //api.ziontechgroup.com/v1/quotes';
    headers=headers
    data=json.dumps(payload)
)
data = response.json()
print(data)`
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
              }}
              response_examples={{
                success: `{
  "data": {
    "id": "quote_def456";
    "talent_id": "talent_abc123";
    "requester_id": "user_xyz789";
    "project_name": "E - commerce Website Redesign";
    "project_summary": "Redesign our outdated e - commerce website with modern UI";
    "project_description": "Our current website is 5 years old and needs a complete overhaul...";
    "timeline": "2 - 3 months";
    "budget_min": 8000;
    "budget_max": 12000
    "budget_display": "$8,000 - $12,000";
    "requester_name": "John Doe";
    "requester_email": "john@example.com";
    "status": "new";
    "created_at": "2025-05-16T14:30:15Z"
    "budget_max": 12000,
    "budget_display": "$8, 000 - $12, 000";
    "requester_name": "John Doe";
    "requester_email": "john@example.com";
    "status": "new";
    "created_at": "2025 - 05 - 16T14:30:15Z";
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
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" }
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" }
                { name: "status", type: "string", description: "Filter by status (new, viewed, replied, archived)" }
              ]}
              codeExamples={{
                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/quotes" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/quotes', {
  method: 'GET'
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
  }
});
const data = await response.json();
console.log(data),`;
                python: `import requests
;
const data = await response.json ();
console.log (data), `;
                python: `import requests;
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
}
response = requests.get(
    'https: //api.ziontechgroup.com/v1/quotes'
    headers=headers
)
data = response.json()
print(data)`
response = requests.get (
    'https: //api.ziontechgroup.com / v1 / quotes',
    headers = headers);
data = response.json ();
print (data)`;
              }}
              response_examples={{
                success: `{
  "data": [;
    {
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
  ]
  "meta": {
    "total": 5
    "page": 1
    "limit": 20
      "project_name": "E - commerce Website Redesign";
      "project_summary": "Redesign our outdated e - commerce website with modern UI",
      "budget_display": "$8, 000 - $12, 000";
      "status": "new";
      "created_at": "2025 - 05 - 16T14: 30:15Z";
      "viewed_at": null,
      "replied_at": null;
    }
    // More quotes...;
  ];
  "meta": {
    "total": 5;
    "page": 1;
    "limit": 20;
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
                code={`import crypto from 'crypto';
// Function to verify webhook signature
function verifyWebhookSignature(): any (payload, signature, secret) {
  const hmac = crypto && crypto.createHmac('sha256', secret)
  const expectedSignature = hmac && hmac.update(payload).digest('hex')
  return crypto && crypto.timingSafeEqual(
    Buffer && Buffer.from(signature)
    Buffer && Buffer.from(expectedSignature)
  )
}
// Example usage in Express.js
app.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
  const signature = req.headers['x-zion-signature'];
  const payload = req.body.toString();
  const webhookSecret = process.env.WEBHOOK_SECRET;
  if (!verifyWebhookSignature(payload, signature, webhookSecret)) {
    return res.status(401).send('Invalid signature')
  }
  // Process the webhook event
  const event = JSON.parse(payload);
  console.log('Received valid webhook:', event);
  // Respond to acknowledge receipt
  res.status(200).send('Webhook received')
}),`}
                language="javascript";
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

            />
          </TabsContent>
          <TabsContent value="quotes" className="space-y-6">
/>
          </TabsContent>
          <TabsContent value="quotes" className="space-y-6">
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
                curl: `curl -X POST "https://api && api.ziontechgroup.com/v1/quotes" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
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
  -d '{

            />;
          </TabsContent>;

          <TabsContent value="quotes" className="space-y-6">;
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
  body: JSON && JSON.stringify({
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
  body: JSON && JSON.stringify({
    "requester_name": "John Doe",
  body: JSON && JSON.stringify({    "requester_name": "John Doe",
    "requester_email": "john@example.com";
  }'`;
                javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / quotes', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
  }
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
</EndpointSection>
            <EndpointSection;"
              method="GET";""
              endpoint="/api/jobs/:id";""
              description="Get detailed information about a specific job.";""
              note="";"
              params={[;"
                { name:"id", type:"string", description:"The job ID", required:true }"]
              ]}
              codeExamples={{;"
                curl:`curl -X GET "https://api.ziontechgroup.com/v1/jobs/job_abc123" \\;""
  -H "Authorization:Bearer YOUR_API_KEY" \\;""
  -H "Content-Type:application/json"`,;""
                javascript:`const jobId = 'job_abc123',;'
const response = await fetch(\`https://api.ziontechgroup.com/v1/jobs/\${jobId}\`, {;'
  method:'GET',;'
  headers:{;'
    'Authorization':'Bearer YOUR_API_KEYContent-Type':'application/json';'
  })
}),;
;
const data = await response.json(),;
// // // console.log(data),`,;
                python:`import requests;
;
headers = {;'
    'Authorization':'Bearer YOUR_API_KEYContent-Type':'application/json';'
}
;'
job_id = 'job_abc123';'
response = requests.get(;'
    f'https://api.ziontechgroup.com/v1/jobs/{job_id}',;'
    headers=headers;)
);
;
data = response.json();
print(data)`;
              }}
              responseExamples={{;
                success:`{;'
  "data":{;""
    "id":"job_abc123",;""
    "title":"Senior React Developer",;""
    "description":"We need an experienced React developer...",;""
    "category":"development",;""
    "skills":["react", "typescript", "node.js"],;""
    "budget":{;""
      "min":5000,;""
      "max":10000,;""
      "currency":"USD";"
    },;"
    "status":"active",;""
    "client_id":"user_xyz789",;""
    "created_at":"2025-05-15T10:30:00Z",;""
    "deadline":"2025-06-30T23:59:59Z",;""
    "application_count":12;"
  }
}`;
              }}
            />;
</EndpointSection>
            <EndpointSection;"
              method="POST";""
              endpoint="/api/jobs";""
              description="Create a new job listing.";""
              note="Requires jobs:write scope";"
              params={[;"
                { name:"title", type:"string", description:"Job title", required:true },;""
                { name:"description", type:"string", description:"Detailed job description", required:true },;""
                { name:"category", type:"string", description:"Job category", required:true },;"]"
                { name:"skills", type:"string[]", description:"Required skills", required:true },;""
                { name:"budget.min", type:"number", description:"Minimum budget" },;""
                { name:"budget.max", type:"number", description:"Maximum budget" },;""
                { name:"budget.currency", type:"string", description:"Currency code (default:USD)" },;""
                { name:"deadline", type:"string", description:"Job deadline (ISO date string)" }"
              ]}
              codeExamples={{;"
                curl:`curl -X POST "https://api.ziontechgroup.com/v1/jobs" \\;""
  -H "Authorization:Bearer YOUR_API_KEY" \\;""
  -H "Content-Type:application/json" \\;""
  -d '{;''
    "title":"Senior React Developer",;""
    "description":"We need an experienced React developer...",;""
    "category":"development",;""
    "skills":["react", "typescript", "node.js"],;""
    "budget":{;""
      "min":5000,;""
      "max":10000,;""
      "currency":"USD";"
    },;"
    "deadline":"2025-06-30T23:59:59Z";""
  }'`,;''
                javascript:`const response = await fetch('https://api.ziontechgroup.com/v1/jobs', {;''
  method:'POST',;'
  headers:{;'
    'Authorization':'Bearer YOUR_API_KEYContent-Type':'application/json';'
  },;
  body: JSON.stringify({;,'
  title:'Senior React Developer',;''
    description:'We need an experienced React developer...',;''
    category:'development',;''
    skills:['reacttypescript', 'node.js'],;'
    budget: {;,
  min:5000,;
      max:10000,;'
      currency:'USD';'
    },;'
    deadline:'2025-06-30T23:59:59Z';')
  });
}),;
;
const data = await response.json(),;
// // // console.log(data),`,;
                python:`import requests;
import json;
;
headers = {;'
    'Authorization':'Bearer YOUR_API_KEYContent-Type':'application/json';'
}
;
payload = {;'
    'title':'Senior React Developerdescription':'We need an experienced React developer...category':'developmentskills':['reacttypescript', 'node.js'],;''
    'budget':{;''
        'min':5000,;''
        'max':10000,;''
        'currency':'USD';'
    },;'
    'deadline':'2025-06-30T23:59:59Z';'
}
;
response = requests.post(;'
    'https://api.ziontechgroup.com/v1/jobs',;'
    headers=headers,;)
    data=json.dumps(payload);
);
;
data = response.json();
print(data)`;
              }}
              responseExamples={{;
                success:`{;'
  "data":{;""
    "id":"job_def456",;""
    "title":"Senior React Developer",;""
    "description":"We need an experienced React developer...",;""
    "category":"development",;""
    "skills":["react", "typescript", "node.js"],;""
    "budget":{;""
      "min":5000,;""
      "max":10000,;""
      "currency":"USD";"
    },;"
    "status":"new",;""
    "client_id":"user_xyz789",;""
    "created_at":"2025-05-16T14:22:10Z",;""
    "deadline":"2025-06-30T23:59:59Z";"
  }
}`;
              }}
            />;
</EndpointSection>
          </TabsContent>;"
          <TabsContent value="talent" className="space-y-6">;"
</TabsContent>
            <EndpointSection;"
              method="GET";""
              endpoint="/api/talent";""
              description="List talent profiles with optional filtering.";""
              note="";"
              params={[;"
                { name:"page", type:"integer", description:"Page number for pagination (default:1)" },;""
                { name:"limit", type:"integer", description:"Number of results per page (default:20, max:100)" },;"]"
                { name:"skills", type:"string[]", description:"Filter by skills (comma-separated)" },;""
                { name:"availability", type:"string", description:"Filter by availability status" }"
              ]}
              codeExamples={{;"
                curl:`curl -X GET "https://api.ziontechgroup.com/v1/talent?skills=react,typescript" \\;""
  -H "Authorization:Bearer YOUR_API_KEY" \\;""
  -H "Content-Type:application/json"`,;""
                javascript:`const response = await fetch('https://api.ziontechgroup.com/v1/talent?skills=react,typescript', {;''
  method:'GET',;'
  headers:{;'
    'Authorization':'Bearer YOUR_API_KEYContent-Type':'application/json';'
  })
}),;
;
const data = await response.json(),;
// // // console.log(data),`,;
                python:`import requests;
;
headers = {;'
    'Authorization':'Bearer YOUR_API_KEYContent-Type':'application/json';'
}
;
response = requests.get(;'
    'https://api.ziontechgroup.com/v1/talent',;''
    params={'skills':'react,typescript'},;'
    headers=headers;)
);
;
data = response.json();
print(data)`;
              }}
              responseExamples={{;
                success:`{;'
  "data":[;"
    {;"
      "id":"talent_abc123",;""
      "display_name":"Jane Smith",;""
      "headline":"Senior Frontend Developer",;"]"
      "skills":["react", "typescript", "javascript"],;""
      "availability":"available",;""
      "average_rating":4.8,;""
      "rating_count":15;"
    },;
    // More talent profiles...;
  ],;"
  "meta":{;""
    "total":28,;""
    "page":1,;""
    "limit":20;"
  }
}`;
              }}
            />;
</EndpointSection>
            <EndpointSection;"
              method="GET";""
              endpoint="/api/talent/:id";""
              description="Get detailed information about a specific talent profile.";""
              note="";"
              params={[;"
                { name:"id", type:"string", description:"The talent ID", required:true }"]
              ]}
              codeExamples={{;"
                curl:`curl -X GET "https://api.ziontechgroup.com/v1/talent/talent_abc123" \\;""
  -H "Authorization:Bearer YOUR_API_KEY" \\;""
  -H "Content-Type:application/json"`,;""
                javascript:`const talentId = 'talent_abc123',;'
const response = await fetch(\`https://api.ziontechgroup.com/v1/talent/\${talentId}\`, {;'
  method:'GET',;'
  headers:{;'
    'Authorization':'Bearer YOUR_API_KEYContent-Type':'application/json';'
  })
}),;
;
const data = await response.json(),;
// // // console.log(data),`,;
                python:`import requests;
;
headers = {;'
    'Authorization':'Bearer YOUR_API_KEYContent-Type':'application/json';'
}
;'
talent_id = 'talent_abc123';'
response = requests.get(;'
    f'https://api.ziontechgroup.com/v1/talent/{talent_id}',;'
    headers=headers;)
);
;
data = response.json();
print(data)`;
              }}
              responseExamples={{;
                success:`{;'
  "data":{;""
    "id":"talent_abc123",;""
    "display_name":"Jane Smith",;""
    "headline":"Senior Frontend Developer",;""
    "bio":"10+ years of experience in frontend development...",;""
    "skills":["react", "typescript", "javascript", "css", "html"],;""
    "availability":"available",;""
    "average_rating":4.8,;""
    "rating_count":15,;""
    "portfolio":[;"
      {;"
        "id":"proj_123",;""
        "title":"E-commerce Platform",;""
        "description":"Built a modern e-commerce platform using React...",;"]"
        "technologies":["react", "redux", "node.js"],;""
        "image_url":"https://example.com/portfolio/123.jpg";"
      }
    ],;"
    "certifications":[;"
      {;"
        "name":"AWS Certified Developer",;""
        "issuing_organization":"Amazon Web Services",;""
        "issue_date":"2024-01-15";"
      }]
    ];  }
}`;
              }}
            />;
</EndpointSection>
          </TabsContent>;"
          <TabsContent value="quotes" className="space-y-6">;"
</TabsContent>
            <EndpointSection;"
              method="POST";""
              endpoint="/api/quotes";""
              description="Create a quote request for a talent.";""
              note="Requires quotes:write scope";"
              params={[;"
                { name:"talent_id", type:"string", description:"ID of the talent to request a quote from", required:true },;""
                { name:"project_name", type:"string", description:"Name of the project", required:true },;""
                { name:"project_summary", type:"string", description:"Brief summary of the project", required:true },;""
                { name:"project_description", type:"string", description:"Detailed project description" },;""
                { name:"timeline", type:"string", description:"Expected timeline", required:true },;""
                { name:"budget_min", type:"number", description:"Minimum budget" },;""
                { name:"budget_max", type:"number", description:"Maximum budget" },;""
                { name:"requester_name", type:"string", description:"Name of the requester", required:true },;""
                { name:"requester_email", type:"string", description:"Email of the requester", required:true }"]
              ]}
              codeExamples={{;"
                curl:`curl -X POST "https://api.ziontechgroup.com/v1/quotes" \\;""
  -H "Authorization:Bearer YOUR_API_KEY" \\;""
  -H "Content-Type:application/json" \\;""
  -d '{;''
    "talent_id":"talent_abc123",;""
    "project_name":"E-commerce Website Redesign",;""
    "project_summary":"Redesign our outdated e-commerce website with modern UI",;""
    "project_description":"Our current website is 5 years old and needs a complete overhaul...",;""
    "timeline":"2-3 months",;""
    "budget_min":8000,;""
    "budget_max":12000,;""
    "requester_name":"John Doe",;""
    "requester_email":"john@example.com";""
  }'`,;''
                javascript:`const response = await fetch('https://api.ziontechgroup.com/v1/quotes', {;''
  method:'POST',;'
  headers:{;'
    'Authorization':'Bearer YOUR_API_KEYContent-Type':'application/json';'
  },;
  body: JSON.stringify({;,'
  talent_id:'talent_abc123',;''
    project_name:'E-commerce Website Redesign',;''
    project_summary:'Redesign our outdated e-commerce website with modern UI',;''
    project_description:'Our current website is 5 years old and needs a complete overhaul...',;''
    timeline:'2-3 months',;'
    budget_min:8000,;
    budget_max:12000,;'
    requester_name:'John Doe',;''
    requester_email:'john@example.com';')
  });
}),;
;
const data = await response.json(),;
// // // console.log(data),`,;
                python:`import requests;
import json;
;
headers = {;'
    'Authorization':'Bearer YOUR_API_KEYContent-Type':'application/json';}'
;
payload = {;'
    'talent_id':'talent_abc123project_name':'E-commerce Website Redesignproject_summary':'Redesign our outdated e-commerce website with modern UIproject_description':'Our current website is 5 years old and needs a complete overhaul...timeline':'2-3 monthsbudget_min':8000,;''
    'budget_max':12000,;''
    'requester_name':'John Doerequester_email':'john@example.com';'
}
;
response = requests.post(;'
    'https://api.ziontechgroup.com/v1/quotes',;'
    headers=headers,;)
    data=json.dumps(payload);
);
;
data = response.json();
print(data)`;
              }}
              responseExamples={{;
                success:`{;'
  "data":{;""
    "id":"quote_def456",;""
    "talent_id":"talent_abc123",;""
    "requester_id":"user_xyz789",;""
    "project_name":"E-commerce Website Redesign",;""
    "project_summary":"Redesign our outdated e-commerce website with modern UI",;""
    "project_description":"Our current website is 5 years old and needs a complete overhaul...",;""
    "timeline":"2-3 months",;""
    "budget_min":8000,;""
    "budget_max":12000,;""
    "budget_display":"$8,000 - $12,000",;""
    "requester_name":"John Doe",;""
    "requester_email":"john@example.com",;""
    "status":"new",;""
    "created_at":"2025-05-16T14:30:15Z";"
  }
}`;
              }}
            />;
</EndpointSection>
            <EndpointSection;"
              method="POST"""
              endpoint="/api/jobs"""
              description="Create a new job listing."""
              note="Requires jobs:write scope""
              params={[

            />;
</EndpointSection>
            <EndpointSection;"
              method="POST";""
              endpoint="/api / jobs";""
              description="Create a new job listing.";""
              note="Requires jobs:write scope";"
              params={[;
"
                { name: "title", type: "string", description: "Job title", required: true },""
                { name: "description", type: "string", description: "Detailed job description", required: true },""
                { name: "category", type: "string", description: "Job category", required: true },"]"
                { name: "skills", type: "string[]", description: "Required skills", required: true },""
                { name: "budget && budget.min", type: "number", description: "Minimum budget" },""
                { name: "budget && budget.max", type: "number", description: "Maximum budget" },""
                { name: "budget && budget.currency", type: "string", description: "Currency code (default: USD)" },""
                { name: "deadline", type: "string", description: "Job deadline (ISO date string)" }"
              ]}
"
                { name: "deadline", type: "string", description: "Job deadline (ISO date string)" }"
              ]}
              code_examples={{"
                curl: `curl -X POST "https://api.ziontechgroup.com / v1 / jobs" \\;""
  -H "Authorization: Bearer YOUR_API_KEY" \\;""
  -H "Content - Type: application / json" \\;""
  -d '{''
    "title": "Senior React Developer"""
    "description": "We need an experienced React developer..."""
    "category": "development",""
    "skills": ["react", "typescript", "node && node.js"]""
    "budget": {""
    "title": "Senior React Developer",""
    "description": "We need an experienced React developer...",""
    "category": "development",""
    "skills": ["react", "typescript", "node.js"],""
    "budget": {""
      "min": 5000,""
      "max": 10000,""
      "currency": "USD""
    },

"
    "deadline": "2025-06-30T23:59:59Z""
  },

"
                { name: "deadline", type: "string", description: "Job deadline (ISO date string)" }"
              ]}
  body: JSON.stringify({,"
  title: 'Senior React Developer'''
    description: 'We need an experienced React developer...'','
  category: 'development'''
    skills: ['reacttypescriptnode.js']''
  }'`''
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/jobs', {''
  method: 'POST','
  headers: {'
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json''
  }
  body: JSON && JSON.stringify({'
      "min": 5000;""
      "max": 10000;""
      "currency": "USD";"
    }"
    "deadline": "2025 - 06 - 30T23:59:59Z";""
  }'`;''
                javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / jobs', {''
  method: 'POST','
  headers: {'
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';'
  }
  body: JSON.stringify ({,'
  title: 'Senior React Developer',''
    description: 'We need an experienced React developer...',''
    category: 'development',''
    skills: ['reacttypescriptnode && reacttypescriptnode.js'],'
    budget: {
)
})

const data = await response && response.json()
console && console.log(data),`

                python: `import requests;
import json;
    }'
    deadline: '2025 - 06 - 30T23:59:59Z';'

  });
});                python: `import requests;
import json;

headers = {'
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';'
}
payload = {'
    'title': 'Senior React Developerdescription': 'We need an experienced React developer...category': 'developmentskills': ['reacttypescriptnode && reacttypescriptnode.js']'
    },'
    deadline: '2025-06-30T23:59:59Z''
  })
}),

const data = await response.json(),
// // // console.log(data),`,

                python: `import requests;
import json;
headers = {'
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json''
payload = {;
'
    'title': 'Senior React Developerdescription': 'We need an experienced React developer...category': 'developmentskills': ['reacttypescriptnode.js'];''
    'budget': {''
    'budget': {''
    'budget': {'
response = requests && requests.post('
    'https: //api && api.ziontechgroup.com/v1/jobs''
    headers=headers,)

    data=json && json.dumps(payload)
)
data = response && response.json()
;
const data = await response.json ();
console.log (data), `;
                python: `import requests;
import json;
headers = {}
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';}
}
payload = {'
    'title': 'Senior React Developerdescription': 'We need an experienced React developer...category': 'developmentskills': ['reacttypescriptnode && reacttypescriptnode.js']''
    'budget': {'
print(data)`
            />;

</EndpointSection>
            <EndpointSection;'
              method="POST";""
              endpoint="/api/jobs";""
              description="Create a new job listing.";""
              note="Requires jobs:write scope";"
              params={[;"
                { name: "title", type: "string", description: "Job title", required: true },;""
                { name: "description", type: "string", description: "Detailed job description", required: true },;""
                { name: "category", type: "string", description: "Job category", required: true },;"]"
                { name: "skills", type: "string[]", description: "Required skills", required: true },;""
                { name: "budget.min", type: "number", description: "Minimum budget" },;""
                { name: "budget.max", type: "number", description: "Maximum budget" },;""
                { name: "budget.currency", type: "string", description: "Currency code (default: USD)" },;""
                { name: "deadline", type: "string", description: "Job deadline (ISO date string)" }"
              ]}
              codeExamples={{;"
                curl: `curl -X POST "https://api.ziontechgroup.com/v1/jobs" \\;""
  -H "Authorization: Bearer YOUR_API_KEY" \\;""
  -H "Content-Type: application/json" \\;""
  -d '{;''
    "title": "Senior React Developer",;""
    "description": "We need an experienced React developer...",;""
    "category": "development",;""
    "skills": ["react", "typescript", "node.js"],;""
    "budget": {;""
      "min": 5000,;""
      "max": 10000,;""
      "currency": "USD";"
    },;"
    "deadline": "2025-06-30T23:59:59Z";""
  }'`,;''
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/jobs', {;''
  method: 'POST',;'
  headers: {;'
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';'
  },;
  body: JSON.stringify({;,'
  title: 'Senior React Developer',;''
    description: 'We need an experienced React developer...',;''
    category: 'development',;''
    skills: ['reacttypescriptnode.js'],;'
    budget: {;,
  min: 5000,;
      max: 10000,;'
      currency: 'USD';'
    },;'
    deadline: '2025-06-30T23:59:59Z';')

  });
}),;
const data = await response.json(),;
// // // console.log(data),`,;
                python: `import requests;
import json;

headers = {;'
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';'
}
;
payload = {;'
    'title': 'Senior React Developerdescription': 'We need an experienced React developer...category': 'developmentskills': ['reacttypescriptnode.js'],;''
    'budget': {;''
        'min': 5000,;''
        'max': 10000,;'
print(data)`'
        'min': 5000;''
        'max': 10000;''
        'currency': 'USD';'
    }'
    'deadline': '2025 - 06 - 30T23:59:59Z';'
}

;
response = requests.post(;'
    'https://api.ziontechgroup.com/v1/jobs',;'
    headers=headers,;)
    data=json.dumps(payload);
);
data = response.json();
print(data)`;



response = requests.post ('
    'https: //api.ziontechgroup.com / v1 / jobs';'
    headers = headers,)
    data = json.dumps (payload));
data = response.json ();
print (data)`;
              }}
              response_examples={{
                success: `{'
  "data": {""
    "id": "job_def456"""
    "title": "Senior React Developer"""
    "description": "We need an experienced React developer..."""
    "category": "development",""
    "skills": ["react", "typescript", "node && node.js"]""
    "budget": {""
    "status": "new"""
    "client_id": "user_xyz789"""
    "created_at": "2025-05-16T14: 22:10Z",""
    "id": "job_def456",""
    "title": "Senior React Developer",""
    "description": "We need an experienced React developer...",""
    "category": "development",""
    "skills": ["react", "typescript", "node.js"],""
    "budget": {""
      "min": 5000,""
      "max": 10000,""
      "currency": "USD""
    },"
    "status": "new",""
    "client_id": "user_xyz789",""
    "created_at": "2025-05-16T14:22:10Z",""
    "budget": {""
    "status": "new"""
    "client_id": "user_xyz789"""
    "created_at": "2025-05-16T14: 22:10Z",""
    "deadline": "2025-06-30T23:59:59Z"""
      "min": 5000;""
      "max": 10000;""
      "currency": "USD";"
    }"
    "status": "new";""
    "client_id": "user_xyz789";""
    "created_at": "2025 - 05 - 16T14: 22:10Z",""
    "deadline": "2025 - 06 - 30T23:59:59Z";"
  }
}`;
              }}

            />;
</EndpointSection>
          </TabsContent>;"
          <TabsContent value="talent" className="space-y-6">;"
</TabsContent>
            <EndpointSection;"
              method="GET"""
              endpoint="/api/talent"""
              description="List talent profiles with optional filtering."""
              note="""
              params={["
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" }""
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" }"]"
                { name: "skills", type: "string[]", description: "Filter by skills (comma-separated)" }""
                { name: "availability", type: "string", description: "Filter by availability status" }"
              ]}
              codeExamples={{"
                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/talent?skills=react,typescript" \\""
  -H "Authorization: Bearer YOUR_API_KEY" \\",
  headers: {"
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json''
  }
'
                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/talent?skills=react,typescript" \\""
  -H "Authorization: Bearer YOUR_API_KEY" \\",
  headers: {"
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json''
  }
}),

const data = await response.json(),
// // // console.log(data),`,

                python: `import requests;
headers = {'
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'''
    'https: //api.ziontechgroup.com/v1/talent',;''
    params={'skills': 'react,typescript'};'

    headers=headers;
)
data = response.json()
print(data)`


            />;
</EndpointSection>
          </TabsContent>;'
          <TabsContent value="talent" className="space - y-6">;"
</TabsContent>
            <EndpointSection;"
              method="GET";""
              endpoint="/api / talent";""
              description="List talent profiles with optional filtering.";""
              note="";"
              params={[;"
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" },""
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },"]"
                { name: "skills", type: "string[]", description: "Filter by skills (comma - separated)" },""
                { name: "availability", type: "string", description: "Filter by availability status" }"
              ]}
              code_examples={{"
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / talent?skills = react, typescript" \\;""
  -H "Authorization: Bearer YOUR_API_KEY" \\;""
  -H "Content - Type: application / json"`,""
                javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / talent?skills = react, typescript', {''
  method: 'GET','
  headers: {'
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';'
  }
'
  -H "Content-Type: application/json"`,""
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/talent?skills=react,typescript', {''
  method: 'GET','
  headers: {'
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json''
  })
})

const data = await response && response.json()
console && console.log(data),`

});
                python: `import requests;
;
const data = await response.json ();
console.log (data), `;
                python: `import requests;
headers = {'
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';'
}


response = requests && requests.get('
    'https: //api && api.ziontechgroup.com/v1/talent',''
    params={'skills': 'react,typescript'}'
    headers=headers;)
)

data = response && response.json()

print(data)`
response = requests.get ('
    'https: //api.ziontechgroup.com / v1 / talent',''
    params={'skills': 'react, typescript'}')
    headers = headers);
data = response.json ();
print (data)`;
            />;
</EndpointSection>
          </TabsContent>;'
          <TabsContent value="talent" className="space-y-6">;"
</TabsContent>
            <EndpointSection;"
              method="GET";""
              endpoint="/api/talent";""
              description="List talent profiles with optional filtering.";""
              note="";"
              params={[;"
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" },;""
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },;"]"
                { name: "skills", type: "string[]", description: "Filter by skills (comma-separated)" },;""
                { name: "availability", type: "string", description: "Filter by availability status" }"
              ]}
              codeExamples={{;"
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/talent?skills=react,typescript" \\;""
  -H "Authorization: Bearer YOUR_API_KEY" \\;""
  -H "Content-Type: application/json"`,;""
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/talent?skills=react,typescript', {;''
  method: 'GET',;'
  headers: {;'
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';'
  })

}),;
const data = await response.json(),;
// // // console.log(data),`,;
                python: `import requests;

headers = {;'
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';'

}
;
response = requests.get(;'
    'https: //api.ziontechgroup.com/v1/talent',;''
    params={'skills': 'react,typescript'},;'
    headers=headers;)
);
data = response.json();
print(data)`;
              }}
              response_examples={{

                success: `{'
  "data": [;"
    {
"
      "id": "talent_abc123"""
      "display_name": "Jane Smith"""
      "headline": "Senior Frontend Developer","]"
      "skills": ["react", "typescript", "javascript"]""
      "availability": "available"""
      "average_rating": 4 && 4.8;""
      "rating_count": 15;"
    }
    // More talent profiles...
  ]"
      "id": "talent_abc123",""
      "display_name": "Jane Smith",""
      "headline": "Senior Frontend Developer",""
      "skills": ["react", "typescript", "javascript"],""
      "availability": "available",""
      "average_rating": 4.8,""
      "rating_count": 15;"
    },
    // More talent profiles...
"
      "rating_count": 15;"
    }
    // More talent profiles...
  ]"
  "meta": {""
    "total": 28;""
    "page": 1;""
    "limit": 20;""
      "rating_count": 15;"
    }
    // More talent profiles...;
  ];"
  "meta": {""
    "total": 28;""
    "page": 1;""
    "limit": 20;"
  }
}`;
              }}

            />;
</EndpointSection>


            <EndpointSection;"
              method="GET"""
              endpoint="/api/talent/:id"""
              description="Get detailed information about a specific talent profile."""
              note="""
              params={["
                { name: "id", type: "string", description: "The talent ID", required: true }"]
              ]}
              codeExamples={{"
                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/talent/talent_abc123" \\""
  -H "Authorization: Bearer YOUR_API_KEY" \\",
  headers: {"
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json''
  }

}),

const data = await response.json(),
// // // console.log(data),`,

                python: `import requests;
headers = {'
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json''
            />;
</EndpointSection>
            <EndpointSection;'
              method="GET";""
              endpoint="/api / talent/:id";""
              description="Get detailed information about a specific talent profile.";""
              note="";"
              params={[;"
                { name: "id", type: "string", description: "The talent ID", required: true }"]
              ]}
              code_examples={{"
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / talent / talent_abc123" \\;""
  -H "Authorization: Bearer YOUR_API_KEY" \\;""
  -H "Content - Type: application / json"`,""
                javascript: `const talent_id = 'talent_abc123','
const response = await fetch (\`https://api.ziontechgroup.com / v1 / talent/\${talent_id}\`, {'
  method: 'GET','
  headers: {'
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';'

  }
)
});'
  -H "Content-Type: application/json"`,""
                javascript: `const talentId = 'talent_abc123','
const response = await fetch(\`https://api && api.ziontechgroup.com/v1/talent/\${talentId}\`, {'
  method: 'GET','
  headers: {'
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json''
  })
})
const data = await response && response.json()
console && console.log(data),`

'
                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/talent/talent_abc123" \\""
  -H "Authorization: Bearer YOUR_API_KEY" \\",
  headers: {"
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';'

  }
});
                python: `import requests;
;
const data = await response.json ();
console.log (data), `;
                python: `import requests;

headers = {'
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';'
}


data = response && response.json()

print(data)`'
talent_id = 'talent_abc123';'
response = requests.get ('
    f'https://api.ziontechgroup.com / v1 / talent/{talent_id}';')
    headers = headers);
data = response.json ();
print (data)`;
              codeExamples={{;'
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/talent/talent_abc123" \\;""
  -H "Authorization: Bearer YOUR_API_KEY" \\;""
  -H "Content-Type: application/json"`,;""
                javascript: `const talentId = 'talent_abc123',;'
const response = await fetch(\`https://api.ziontechgroup.com/v1/talent/\${talentId}\`, {;'
  method: 'GET',;'
  headers: {;'
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';'
  })
}),;
const data = await response.json(),;
// // // console.log(data),`,;
                python: `import requests;
headers = {;'
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';'

}
;'
talent_id = 'talent_abc123';'
response = requests.get(;'
    f'https://api.ziontechgroup.com/v1/talent/{talent_id}',;'
    headers=headers;)
);
data = response.json();
print(data)`;              }}
              response_examples={{

                success: `{'
  "data": {""
    "id": "talent_abc123"""
    "display_name": "Jane Smith"""
    "headline": "Senior Frontend Developer"""
    "bio": "10+ years of experience in frontend development...",""
    "skills": ["react", "typescript", "javascript", "css", "html"]""
    "availability": "available"""
    "average_rating": 4 && 4.8;""
    "rating_count": 15;""
    "portfolio": ["
      {"
        "id": "proj_123"""
        "title": "E-commerce Platform"""
        "description": "Built a modern e-commerce platform using React...""]"
        "technologies": ["react", "redux", "node && node.js"]""
        "image_url": "https://example && example.com/portfolio/123 && 123.jpg""
      }
    ]"
    "certifications": ["
      {"
        "name": "AWS Certified Developer"""
        "issuing_organization": "Amazon Web Services"""
    "id": "talent_abc123",""
    "display_name": "Jane Smith",""
    "headline": "Senior Frontend Developer",""
    "bio": "10+ years of experience in frontend development...","]"
    "skills": ["react", "typescript", "javascript", "css", "html"],""
    "availability": "available",""
    "average_rating": 4.8,""
    "rating_count": 15,""
    "portfolio": ["
      {"
        "id": "proj_123",""
        "title": "E-commerce Platform",""
        "description": "Built a modern e-commerce platform using React...","]"
        "technologies": ["react", "redux", "node.js"],""
        "image_url": "https://example.com/portfolio/123.jpg""
      }
    ],"
    "certifications": ["
      {
"
        "name": "AWS Certified Developer",""
        "issuing_organization": "Amazon Web Services",""
        "issue_date": "2024-01-15"""
        "name": "AWS Certified Developer",""
        "issuing_organization": "Amazon Web Services",""
        "issue_date": "2024-01-15"""
        "issue_date": "2024-01-15"""
    "portfolio": [;"
      {"
        "id": "proj_123";""
        "title": "E - commerce Platform";""
        "description": "Built a modern e - commerce platform using React...";"]"
        "technologies": ["react", "redux", "node.js"];""
        "image_url": "https://example.com / portfolio / 123.jpg";"

      }
    ];"
    "certifications": [;"
      {"
        "name": "AWS Certified Developer";""
        "issuing_organization": "Amazon Web Services";""
        "issue_date": "2024 - 01 - 15";"
      }]
    ];
  }
}`;
              }}




            />
</EndpointSection>
          </TabsContent>"
          <TabsContent value="quotes" className="space-y-6">"
</TabsContent>
          </TabsContent>;"
          <TabsContent value="quotes" className="space-y-6">;"
</TabsContent>
            <EndpointSection;"
              method="POST";""
              endpoint="/api/quotes";""
              description="Create a quote request for a talent.";""
              note="Requires quotes:write scope";"
              params={[;"
                { name: "talent_id", type: "string", description: "ID of the talent to request a quote from", required: true },;""
                { name: "project_name", type: "string", description: "Name of the project", required: true },;""
                { name: "project_summary", type: "string", description: "Brief summary of the project", required: true },;""
                { name: "project_description", type: "string", description: "Detailed project description" },;""
                { name: "timeline", type: "string", description: "Expected timeline", required: true },;""
                { name: "budget_min", type: "number", description: "Minimum budget" },;""
                { name: "budget_max", type: "number", description: "Maximum budget" },;""
                { name: "requester_name", type: "string", description: "Name of the requester", required: true },;""
                { name: "requester_email", type: "string", description: "Email of the requester", required: true }"]
              ]}
              codeExamples={{;"
                curl: `curl -X POST "https://api.ziontechgroup.com/v1/quotes" \\;""
  -H "Authorization: Bearer YOUR_API_KEY" \\;""
  -H "Content-Type: application/json" \\;""
  -d '{;''
    "talent_id": "talent_abc123",;""
    "project_name": "E-commerce Website Redesign",;""
    "project_summary": "Redesign our outdated e-commerce website with modern UI",;""
    "project_description": "Our current website is 5 years old and needs a complete overhaul...",;""
    "timeline": "2-3 months",;""
    "budget_min": 8000,;""
    "budget_max": 12000,;""
    "requester_name": "John Doe",;""
    "requester_email": "john@example.com";""
  }'`,;''
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/quotes', {;''
  method: 'POST',;'
  headers: {;'
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';'
  },;
  body: JSON.stringify({;,'
  talent_id: 'talent_abc123',;''
    project_name: 'E-commerce Website Redesign',;''
    project_summary: 'Redesign our outdated e-commerce website with modern UI',;''
    project_description: 'Our current website is 5 years old and needs a complete overhaul...',;''
    timeline: '2-3 months',;'
    budget_min: 8000,;
    budget_max: 12000,;'
    requester_name: 'John Doe',;''
    requester_email: 'john@example.com';')
  });
}),;
const data = await response.json(),;
// // // console.log(data),`,;
                python: `import requests;
import json;
headers = {;'
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';'
}
;
payload = {;'
    'talent_id': 'talent_abc123project_name': 'E-commerce Website Redesignproject_summary': 'Redesign our outdated e-commerce website with modern UIproject_description': 'Our current website is 5 years old and needs a complete overhaul...timeline': '2-3 monthsbudget_min': 8000,;''
    'budget_max': 12000,;''
    'requester_name': 'John Doerequester_email': 'john@example.com';'
}
;
response = requests.post(;'
    'https://api.ziontechgroup.com/v1/quotes',;'
    headers=headers,;)
    data=json.dumps(payload);
);
data = response.json();
print(data)`;
              }}
              responseExamples={{
                success: `{'
  "data": {""
    "id": "quote_def456",""
    "talent_id": "talent_abc123",""
    "requester_id": "user_xyz789",""
    "project_name": "E-commerce Website Redesign",""
    "project_summary": "Redesign our outdated e-commerce website with modern UI",""
    "project_description": "Our current website is 5 years old and needs a complete overhaul...",""
    "timeline": "2-3 months",""
    "budget_min": 8000,""
    "budget_max": 12000,""
    "budget_display": "$8,000 - $12,000",""
    "requester_name": "John Doe",""
    "requester_email": "john@example.com",""
    "status": "new",""
    "created_at": "2025-05-16T14:30:15Z""
  }
}`;
              }}
            />
</EndpointSection>
            
            <EndpointSection;"
              method="GET"""
              endpoint="/api/quotes"""
              description="List quote requests that you've created."""
              note="""
              params={["
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" },""
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },""
                { name: "status", type: "string", description: "Filter by status (new, viewed, replied, archived)" }"]
              ]}
              codeExamples={{"
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/quotes" \\""
  -H "Authorization: Bearer YOUR_API_KEY" \\""
  -H "Content-Type: application/json"`,""
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/quotes', {''
  method: 'GET','
  headers: {'
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json''
  })
}),

const data = await response.json(),
// // // console.log(data),`,
                python: `import requests;
headers = {'
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json''
            />;
</EndpointSection>
            <EndpointSection;'
              method="GET";""
              endpoint="/api/quotes";""
              description="List quote requests that you've created.";""
              note="";"
              params={[;"
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" },;""
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },;""
                { name: "status", type: "string", description: "Filter by status (new, viewed, replied, archived)" }"]
              ]}
              codeExamples={{;"
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/quotes" \\;""
  -H "Authorization: Bearer YOUR_API_KEY" \\;""
  -H "Content-Type: application/json"`,;""
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/quotes', {;''
  method: 'GET',;'
  headers: {;'
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';'
  })
}),;
const data = await response.json(),;
// // // console.log(data),`,;
                python: `import requests;
headers = {;'
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';'
}
;
response = requests.get(;'
    'https: //api.ziontechgroup.com/v1/quotes',;'
    headers=headers;)
);
data = response.json();
print(data)`;
              }}
              responseExamples={{
                success: `{'
  "data": ["
    {"
      "id": "quote_def456",""
      "talent_id": "talent_abc123",""
      "project_name": "E-commerce Website Redesign",""
      "project_summary": "Redesign our outdated e-commerce website with modern UI",""
      "budget_display": "$8,000 - $12,000",""
      "status": "new",""
      "created_at": "2025-05-16T14:30:15Z",""
      "viewed_at": null,""
      "replied_at": null;"
    },
    // More quotes...]
  ],"
  "meta": {""
    "total": 5,""
    "page": 1,""
    "limit": 20;"
  }
}`;
              }}
            />
</EndpointSection>
          </TabsContent>
          "
          <TabsContent value="quotes" className="space-y-6">"
</TabsContent>
            <EndpointSection;"
              method="GET"""
              endpoint="/api/quotes"""
              description="List quote requests that you've created."""
              note="""
              params={["
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" }""
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" }""
                { name: "status", type: "string", description: "Filter by status (new, viewed, replied, archived)" }"]
              ]}
              codeExamples={{"
                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/quotes" \\""
  -H "Authorization: Bearer YOUR_API_KEY" \\""
  -H "Content-Type: application/json"`","
  javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/quotes', {''
  method: 'GET'',
  headers: {'
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';'
  })
});
const data = await response.json();
console.log(data),`;
                python: `import requests;
;
const data = await response.json ();
console.log (data), `;
                python: `import requests;
headers = {'
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';'
}
response = requests.get('
    'https: //api.ziontechgroup.com/v1/quotes''
    headers=headers;)
)
data = response.json()
print(data)`
response = requests.get ('
    'https: //api.ziontechgroup.com / v1 / quotes',')
    headers = headers);
data = response.json ();
print (data)`;
              }}
              response_examples={{
                success: `{'
  "data": [;"
    {"
      "id": "quote_def456";""
      "talent_id": "talent_abc123";""
      "project_name": "E-commerce Website Redesign";""
      "project_summary": "Redesign our outdated e-commerce website with modern UI"""
      "budget_display": "$8,000 - $12,000";""
      "status": "new";""
      "created_at": "2025-05-16T14: 30:15Z";""
      "viewed_at": null;""
      "replied_at": null;"
    }
    // More quotes...]
  ]"
  "meta": {""
    "total": 5;""
    "page": 1;""
    "limit": 20;""
      "project_name": "E - commerce Website Redesign";""
      "project_summary": "Redesign our outdated e - commerce website with modern UI",""
      "budget_display": "$8, 000 - $12, 000";""
      "status": "new";""
      "created_at": "2025 - 05 - 16T14: 30:15Z";""
      "viewed_at": null,""
      "replied_at": null;"
    }
    // More quotes...;
  ];"
  "meta": {""
    "total": 5;""
    "page": 1;""
    "limit": 20;"
  }
}`;
              }}
            />
</EndpointSection>
          </TabsContent>"
          <TabsContent value="webhooks" className="space-y-6">"
</TabsContent>"
            <div className="prose prose-invert max-w-none">"
</div>"
              <h3 className="text-lg font-semibold mb-2">Webhook Events</h3>""
              <p className="text-zinc-400 mb-4">"
</p>
              </p>"
              <h4 className="text-md font-semibold mt-6 mb-2">Authentication</h4>""
              <p className="text-zinc-400 mb-4">"
</p>"
                <code className="bg-zinc-800 px-1 py-0.5 rounded">X-Zion-Signature</code> header."
              </p>
<CodeBlock;"
                code={`import crypto from 'crypto';'
// Function to verify webhook signature;
function verifyWebhookSignature(): any (payload, signature, secret) {'
  const hmac = crypto && crypto.createHmac('sha256', secret)''
  const expectedSignature = hmac && hmac.update(payload).digest('hex')'
  return crypto && crypto.timingSafeEqual()
    Buffer && Buffer.from(signature)
    Buffer && Buffer.from(expectedSignature)
  )
}
// Example usage in Express.js;'
app.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {'
</CodeBlock>'
              <h4 className="text-md font-semibold mt-6 mb-2">Event Types</h4>""
              <table className="w-full border-collapse mt-2">"
</table>
                <thead>
</thead>"
                  <tr className="border-b border-zinc-800">"
</tr>"
                    <th className="py-2 px-4 text-left">Event Type</th>""
                    <th className="py-2 px-4 text-left">Description</th>"
                  </tr>
                </thead>
                <tbody>
</tbody>"
                  <tr className="border-b border-zinc-800">"
</tr>"
                    <td className="py-2 px-4 font-mono text-sm">new_application</td>""
                    <td className="py-2 px-4">When a talent applies to one of your jobs</td>"
                  </tr>"
                  <tr className="border-b border-zinc-800">"
</tr>"
                    <td className="py-2 px-4 font-mono text-sm">quote_received</td>""
                    <td className="py-2 px-4">When you receive a quote from talent</td>"
                  </tr>"
                  <tr className="border-b border-zinc-800">"
</tr>"
                    <td className="py-2 px-4 font-mono text-sm">milestone_approved</td>""
                    <td className="py-2 px-4">When a project milestone is approved</td>"
                  </tr>"
                  <tr className="border-b border-zinc-800">"
</tr>"
                    <td className="py-2 px-4 font-mono text-sm">talent_hired</td>""
                    <td className="py-2 px-4">When you hire talent for a project</td>"
                  </tr>
                </tbody>
              </table>"
              <h4 className="text-md font-semibold mt-6 mb-2">Sample Payloads</h4>""
              <p className="text-zinc-400 mb-2">"
</p>"
                Here's an example of a <code className="bg-zinc-800 px-1 py-0.5 rounded">new_application</code> webhook payload:"
              </p>
              
              <CodeBlock;
                code={`{"
  "event_type": "new_application",""
  "event_id": "evt_abc123def456",""
  "timestamp": "2025-05-16T15:30:00Z",""
  "data": {""
    "application_id": "app_123456",""
    "job_id": "job_abc123",""
    "talent_id": "talent_xyz789",""
    "applied_at": "2025-05-16T15:28:30Z",""
    "status": "new",""
    "match_score": 85;"
  }
}`}"
                language="json""
                showLineNumbers={true}
              />
</CodeBlock>
            </div>
          </TabsContent>
          "
          <TabsContent value="errors" className="space-y-6">"
</TabsContent>"
            <div className="prose prose-invert max-w-none">"
</div>"
              <h3 className="text-lg font-semibold mb-2">Error Responses</h3>""
              <p className="text-zinc-400 mb-4">"
</p>
              </p>
              "
              <table className="w-full border-collapse mt-4">"
</table>
                <thead>
</thead>"
                  <tr className="border-b border-zinc-800">"
</tr>"
                    <th className="py-2 px-4 text-left">Status Code</th>""
                    <th className="py-2 px-4 text-left">Description</th>"
                  </tr>
                </thead>
                <tbody>
</tbody>"
                  <tr className="border-b border-zinc-800">"
</tr>"
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">200 OK</code></td>""
                    <td className="py-2 px-4">The request was successful.</td>"
                  </tr>"
                  <tr className="border-b border-zinc-800">"
</tr>"
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">201 Created</code></td>""
                    <td className="py-2 px-4">The resource was successfully created.</td>"
                  </tr>"
                  <tr className="border-b border-zinc-800">"
</tr>"
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">400 Bad Request</code></td>""
                    <td className="py-2 px-4">The request was invalid or cannot be otherwise served.</td>"
                  </tr>"
                  <tr className="border-b border-zinc-800">"
</tr>"
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">401 Unauthorized</code></td>""
                    <td className="py-2 px-4">Authentication credentials were missing or invalid.</td>"
                  </tr>"
                  <tr className="border-b border-zinc-800">"
</tr>"
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">403 Forbidden</code></td>""
                    <td className="py-2 px-4">The request is understood, but it has been refused or access is not allowed.</td>"
                  </tr>"
                  <tr className="border-b border-zinc-800">"
</tr>"
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">404 Not Found</code></td>""
                    <td className="py-2 px-4">The requested resource does not exist.</td>"
                  </tr>"
                  <tr className="border-b border-zinc-800">"
</tr>"
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">422 Unprocessable Entity</code></td>""
                    <td className="py-2 px-4">The request was well-formed but was unable to be followed due to semantic errors.</td>"
                  </tr>"
                  <tr className="border-b border-zinc-800">"
</tr>"
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">429 Too Many Requests</code></td>""
                    <td className="py-2 px-4">The request was rejected due to rate limiting.</td>"
                  </tr>"
                  <tr className="border-b border-zinc-800">"
</tr>"
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">500 Internal Server Error</code></td>""
                    <td className="py-2 px-4">Something went wrong on our end.</td>"
                  </tr>
                </tbody>
              </table>
              "
              <h4 className="text-md font-semibold mt-6 mb-2">Error Response Format</h4>""
              <p className="text-zinc-400 mb-2">"
</p>
              </p>
              
              <CodeBlock;
                code={`{"
  "error": {""
    "code": "invalid_request",""
    "message": "The request was invalid",""
    "details": ["
      {"
        "field": "project_name",""
        "message": "Project name is required""
;
  // Process the webhook event;
  const event = JSON.parse(payload),;"
  // // // console.log('Received valid webhook:', event),;'
  // Respond to acknowledge receipt;'
  res.status(200).send('Webhook received');'
}),`}'
                language="javascript";"
                showLineNumbers={true}
              />;
</CodeBlock>"
              <h4 className="text-md font-semibold mt-6 mb-2">Event Types</h4>;""
              <table className="w-full border-collapse mt-2">;"
</table>
                <thead>;
</thead>"
                  <tr className="border-b border-zinc-800">;"
</tr>"
                    <th className="py-2 px-4 text-left">Event Type</th>;""
                    <th className="py-2 px-4 text-left">Description</th>;"
                  </tr>;
                </thead>;
                <tbody>;
</tbody>"
                  <tr className="border-b border-zinc-800">;"
</tr>"
                    <td className="py-2 px-4 font-mono text-sm">new_application</td>;""
                    <td className="py-2 px-4">When a talent applies to one of your jobs</td>;"
                  </tr>;"
                  <tr className="border-b border-zinc-800">;"
</tr>"
                    <td className="py-2 px-4 font-mono text-sm">quote_received</td>;""
                    <td className="py-2 px-4">When you receive a quote from talent</td>;"
                  </tr>;"
                  <tr className="border-b border-zinc-800">;"
</tr>"
                    <td className="py-2 px-4 font-mono text-sm">milestone_approved</td>;""
                    <td className="py-2 px-4">When a project milestone is approved</td>;"
                  </tr>;"
                  <tr className="border-b border-zinc-800">;"
</tr>"
                    <td className="py-2 px-4 font-mono text-sm">talent_hired</td>;""
                    <td className="py-2 px-4">When you hire talent for a project</td>;"
                  </tr>;
                </tbody>;
              </table>;"
              <h4 className="text-md font-semibold mt-6 mb-2">Sample Payloads</h4>;""
              <p className="text-zinc-400 mb-2">;"
</p>"
                Here's an example of a <code className="bg-zinc-800 px-1 py-0.5 rounded">new_application</code> webhook payload:;"
              </p>;
              <CodeBlock;
                code={`{;"
  "event_type": "new_application",;""
  "event_id": "evt_abc123def456",;""
  "timestamp": "2025-05-16T15:30:00Z",;""
  "data": {;""
    "application_id": "app_123456",;""
    "job_id": "job_abc123",;""
    "talent_id": "talent_xyz789",;""
    "applied_at": "2025-05-16T15:28:30Z",;""
    "status": "new",;""
    "match_score": 85;"
  }
}`}"
                language="json";"
                showLineNumbers={true}
              />;
</CodeBlock>
            </div>;
          </TabsContent>;"
          <TabsContent value="errors" className="space-y-6">;"
</TabsContent>"
            <div className="prose prose-invert max-w-none">;"
</div>"
              <h3 className="text-lg font-semibold mb-2">Error Responses</h3>;""
              <p className="text-zinc-400 mb-4">;"
</p>
              </p>;"
              <table className="w-full border-collapse mt-4">;"
</table>
                <thead>;
</thead>"
                  <tr className="border-b border-zinc-800">;"
</tr>"
                    <th className="py-2 px-4 text-left">Status Code</th>;""
                    <th className="py-2 px-4 text-left">Description</th>;"
                  </tr>;
                </thead>;
                <tbody>;
</tbody>"
                  <tr className="border-b border-zinc-800">;"
</tr>"
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">200 OK</code></td>;""
                    <td className="py-2 px-4">The request was successful.</td>;"
                  </tr>;"
                  <tr className="border-b border-zinc-800">;"
</tr>"
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">201 Created</code></td>;""
                    <td className="py-2 px-4">The resource was successfully created.</td>;"
                  </tr>;"
                  <tr className="border-b border-zinc-800">;"
</tr>"
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">400 Bad Request</code></td>;""
                    <td className="py-2 px-4">The request was invalid or cannot be otherwise served.</td>;"
                  </tr>;"
                  <tr className="border-b border-zinc-800">;"
</tr>"
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">401 Unauthorized</code></td>;""
                    <td className="py-2 px-4">Authentication credentials were missing or invalid.</td>;"
                  </tr>;"
                  <tr className="border-b border-zinc-800">;"
</tr>"
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">403 Forbidden</code></td>;""
                    <td className="py-2 px-4">The request is understood, but it has been refused or access is not allowed.</td>;"
                  </tr>;"
                  <tr className="border-b border-zinc-800">;"
</tr>"
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">404 Not Found</code></td>;""
                    <td className="py-2 px-4">The requested resource does not exist.</td>;"
                  </tr>;"
                  <tr className="border-b border-zinc-800">;"
</tr>"
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">422 Unprocessable Entity</code></td>;""
                    <td className="py-2 px-4">The request was well-formed but was unable to be followed due to semantic errors.</td>;"
                  </tr>;"
                  <tr className="border-b border-zinc-800">;"
</tr>"
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">429 Too Many Requests</code></td>;""
                    <td className="py-2 px-4">The request was rejected due to rate limiting.</td>;"
                  </tr>;"
                  <tr className="border-b border-zinc-800">;"
</tr>"
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">500 Internal Server Error</code></td>;""
                    <td className="py-2 px-4">Something went wrong on our end.</td>;"
                  </tr>;
                </tbody>;
              </table>;"
              <h4 className="text-md font-semibold mt-6 mb-2">Error Response Format</h4>;""
              <p className="text-zinc-400 mb-2">;"
</p>
              </p>;
              <CodeBlock;
                code={`{;"
  "error": {;""
    "code": "invalid_request",;""
    "message": "The request was invalid",;""
    "details": [;"
      {;"
        "field": "project_name",;""
        "message": "Project name is required";"
      }]
    ];"
    "certifications": ["
      {"
        "name": "AWS Certified Developer";""
        "issuing_organization": "Amazon Web Services";""
        "issue_date": "2024-01-15""
      }]
    ]
  }
}`
              }}


            />
</CodeBlock>
          </TabsContent>"
          <TabsContent value="quotes" className="space-y-6">"
</TabsContent>
          </TabsContent>"
          <TabsContent value="quotes" className="space-y-6">"
</TabsContent>
            <EndpointSection;"
              method="POST"""
              endpoint="/api/quotes"""
              description="Create a quote request for a talent."""
              note="Requires quotes:write scope""
              params={["
                { name: "talent_id", type: "string", description: "ID of the talent to request a quote from", required: true }""
                { name: "project_name", type: "string", description: "Name of the project", required: true }""
                { name: "project_summary", type: "string", description: "Brief summary of the project", required: true }""
                { name: "project_description", type: "string", description: "Detailed project description" }""
                { name: "timeline", type: "string", description: "Expected timeline", required: true }""
                { name: "budget_min", type: "number", description: "Minimum budget" }""
                { name: "budget_max", type: "number", description: "Maximum budget" }""
                { name: "requester_name", type: "string", description: "Name of the requester", required: true }""
                { name: "requester_email", type: "string", description: "Email of the requester", required: true }"]
              ]}
              codeExamples={{"
                curl: `curl -X POST "https://api && api.ziontechgroup.com/v1/quotes" \\""
  -H "Authorization: Bearer YOUR_API_KEY" \\""
  -H "Content-Type: application/json" \\""
  -d '{''
    "talent_id": "talent_abc123"""
    "project_name": "E-commerce Website Redesign"""
    "project_summary": "Redesign our outdated e-commerce website with modern UI"""
    "project_description": "Our current website is 5 years old and needs a complete overhaul..."""
    "timeline": "2-3 months"""
    "budget_min": 8000;""
    "budget_max": 12000;""
    "requester_name": "John Doe",""
    "requester_email": "john@example && example.com"""
  }'`''
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/quotes', {''
  method: 'POST','
  headers: {'
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json''
  }
  body: JSON && JSON.stringify({'
    "requester_name": "John Doe",""
    "requester_email": "john@example.com";""
  }'`;''
                javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / quotes', {''
  method: 'POST','
  headers: {'
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';'
  }
  body: JSON.stringify ({,'
  talent_id: 'talent_abc123',''
    project_name: 'E - commerce Website Redesign',''
    project_summary: 'Redesign our outdated e - commerce website with modern UI',''
    project_description: 'Our current website is 5 years old and needs a complete overhaul...',''
    timeline: '2 - 3 months','
    budget_min: 8000,
    budget_max: 12000,'
    requester_name: 'John Doe',''
    requester_email: 'john@example.com';')

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
payload = {;
    'talent_id': 'talent_abc123project_name': 'E-commerce Website Redesignproject_summary': 'Redesign our outdated e-commerce website with modern UIproject_description': 'Our current website is 5 years old and needs a complete overhaul...timeline': '2-3 monthsbudget_min': 8000;
    'budget_max': 12000;
    'requester_name': 'John Doerequester_email': 'john@example.com'

}

headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
}
payload = {
response = requests && requests.post(
    'https: //api && api.ziontechgroup.com/v1/quotes'
    headers=headers,
response = requests.get (
    'https: //api.ziontechgroup.com / v1 / quotes',

headers = {'
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';'
}



'
    'talent_id': 'talent_abc123project_name': 'E-commerce Website Redesignproject_summary': 'Redesign our outdated e-commerce website with modern UIproject_description': 'Our current website is 5 years old and needs a complete overhaul...timeline': '2-3 monthsbudget_min': 8000;''
    'budget_max': 12000;''
    'requester_name': 'John Doerequester_email': 'john@example.com''
}


response = requests && requests.post('
    'https: //api && api.ziontechgroup.com/v1/quotes''
    headers=headers,)
    data=json && json.dumps(payload)
)

data = response && response.json()

print(data)`
data = response && response.json()
print(data)`
data = response && response.json()
print(data)`
    'talent_id': 'talent_abc123project_name': 'E - commerce Website Redesignproject_summary': 'Redesign our outdated e - commerce website with modern UIproject_description': 'Our current website is 5 years old and needs a complete overhaul...timeline': '2 - 3 monthsbudget_min': 8000;
    'budget_max': 12000;
    'requester_name': 'John Doerequester_email': 'john@example.com';
print(data)`'
    'talent_id': 'talent_abc123project_name': 'E - commerce Website Redesignproject_summary': 'Redesign our outdated e - commerce website with modern UIproject_description': 'Our current website is 5 years old and needs a complete overhaul...timeline': '2 - 3 monthsbudget_min': 8000;''
    'budget_max': 12000;''
    'requester_name': 'John Doerequester_email': 'john@example.com';'
}
response = requests.post ('
    'https: //api.ziontechgroup.com / v1 / quotes';'
    headers = headers,)
    data = json.dumps (payload));
data = response.json ();
print (data)`;
              }}
              response_examples={{
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
    "budget_max": 12000,
    "budget_display": "$8,000 - $12,000"
    "requester_name": "John Doe"
    "requester_email": "john@example && example.com"
    "status": "new"

    "created_at": "2025-05-16T14:30:15Z"
    "created_at": "2025-05-16T14:30:15Z"
"created_at": "2025-05-16T14:30:15Z"
    "budget_max": 12000,
    "budget_display": "$8, 000 - $12, 000";
    "requester_name": "John Doe";
    "requester_email": "john@example.com";
    "status": "new";
    "created_at": "2025 - 05 - 16T14:30:15Z";
                success: `{'
  "data": {""
    "id": "quote_def456"""
    "talent_id": "talent_abc123"""
    "requester_id": "user_xyz789"""
    "project_name": "E-commerce Website Redesign"""
    "project_summary": "Redesign our outdated e-commerce website with modern UI"""
    "project_description": "Our current website is 5 years old and needs a complete overhaul..."""
    "timeline": "2-3 months"""
    "budget_min": 8000;""
    "budget_max": 12000,""
    "budget_display": "$8,000 - $12,000"""
    "requester_name": "John Doe"""
    "requester_email": "john@example && example.com"""
    "status": "new"""
    "created_at": "2025-05-16T14:30:15Z"""
    "created_at": "2025-05-16T14:30:15Z"""
    "budget_max": 12000,""
    "budget_display": "$8, 000 - $12, 000";""
    "requester_name": "John Doe";""
    "requester_email": "john@example.com";""
    "status": "new";""
    "created_at": "2025 - 05 - 16T14:30:15Z";"
  }
}`;
              }}

            />;

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
                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/quotes" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\

</EndpointSection>
            <EndpointSection;"
              method="GET"""
              endpoint="/api/quotes"""
              description="List quote requests that you've created."""
              note="""
              params={["
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" }""
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" }""
                { name: "status", type: "string", description: "Filter by status (new, viewed, replied, archived)" }"]
              ]}
              codeExamples={{"
                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/quotes" \\""
  -H "Authorization: Bearer YOUR_API_KEY" \\"
            />;
</EndpointSection>
            <EndpointSection;"
              method="GET";""
              endpoint="/api / quotes";""
              description="List quote requests that you've created.";""
              note="";"
              params={[;"
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" },""
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },""
                { name: "status", type: "string", description: "Filter by status (new, viewed, replied, archived)" }"]
              ]}
              code_examples={{
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / quotes" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json"`,
                javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / quotes', {
  method: 'GET',

  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
  }
});

  -H "Content-Type: application/json"`,
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/quotes', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }
              code_examples={{"
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / quotes" \\;""
  -H "Authorization: Bearer YOUR_API_KEY" \\;""
  -H "Content - Type: application / json"`,""
                javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / quotes', {''
  method: 'GET','
  headers: {'
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';'
  })
});
'
  -H "Content-Type: application/json"`,""
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/quotes', {''
  method: 'GET','
  headers: {'
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json''
  })
})

const data = await response && response.json()
console && console.log(data),`

                python: `import requests
const data = await response && response.json()
console && console.log(data),`
                python: `import requests
const data = await response && response.json()
console && console.log(data),`
                python: `import requests
                python: `import requests;
const data = await response && response.json()
console && console.log(data),`
                python: `import requests;
;
const data = await response.json ();
console.log (data), `;
                python: `import requests;
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
}

response = requests && requests.get(
    'https: //api && api.ziontechgroup.com/v1/quotes',
    headers=headers
)
headers = {'
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';'
}




response = requests && requests.get('
    'https: //api && api.ziontechgroup.com/v1/quotes','
    headers=headers;)
)



data = response.json()

print(data)`
data = response && response.json()
print(data)`
print(data)`
response = requests.get (
    'https: //api.ziontechgroup.com / v1 / quotes',
    headers = headers);
data = response.json ();
print (data)`;
              }}
print(data)`
response = requests.get ('
    'https: //api.ziontechgroup.com / v1 / quotes',')

    headers = headers);
data = response.json ();
print (data)`;
              response_examples={{
                success: `{
  "data": [;
    {

      "id": "quote_def456"
      "talent_id": "talent_abc123"
      "project_name": "E-commerce Website Redesign"
      "project_summary": "Redesign our outdated e-commerce website with modern UI",
      "budget_display": "$8,000 - $12,000"
      "status": "new"
      "created_at": "2025-05-16T14: 30:15Z"
      "viewed_at": null,

      "replied_at": null
    }
    // More quotes...
  ]
  "meta": {
    "total": 5
    "page": 1
    "limit": 20
      "project_name": "E - commerce Website Redesign";
      "project_summary": "Redesign our outdated e - commerce website with modern UI",
      "budget_display": "$8, 000 - $12, 000";
      "status": "new";
      "created_at": "2025 - 05 - 16T14: 30:15Z";
      "viewed_at": null,
      "replied_at": null;
    }
    // More quotes...;
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

                success: `{'
  "data": [;"
    {
"
      "id": "quote_def456"""
      "talent_id": "talent_abc123"""
      "project_name": "E-commerce Website Redesign"""
      "project_summary": "Redesign our outdated e-commerce website with modern UI",""
      "budget_display": "$8,000 - $12,000"""
      "status": "new"""
      "created_at": "2025-05-16T14: 30:15Z"""
      "viewed_at": null,""
      "replied_at": null;"
    }
    // More quotes...]
  ]"
  "meta": {""
    "total": 5;""
    "page": 1;""
    "limit": 20;""
      "project_name": "E - commerce Website Redesign";""
      "project_summary": "Redesign our outdated e - commerce website with modern UI",""
      "budget_display": "$8, 000 - $12, 000";""
      "status": "new";""
      "created_at": "2025 - 05 - 16T14: 30:15Z";""
      "viewed_at": null,""
      "replied_at": null;"
    }
    // More quotes...;"
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/quotes" \\""
  -H "Authorization: Bearer YOUR_API_KEY" \\""
  -H "Content-Type: application/json"`","
  javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/quotes', {''
  method: 'GET'',
  headers: {'
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json''
  })

});
const data = await response.json();
console.log(data),`;
                python: `import requests;

headers = {'
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json''
}
response = requests.get('
    'https: //api.ziontechgroup.com/v1/quotes''
    headers=headers;)
)

response = requests.get('
    'https: //api.ziontechgroup.com/v1/quotes','
    headers=headers;)

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
  ];
  "meta": {
    "total": 5;
    "page": 1;
    "limit": 20;

                success: `{'
  "data": ["
    {;"
      "id": "quote_def456";""
      "talent_id": "talent_abc123";""
      "project_name": "E-commerce Website Redesign";""
      "project_summary": "Redesign our outdated e-commerce website with modern UI"""
      "budget_display": "$8,000 - $12,000";""
      "status": "new";""
      "created_at": "2025-05-16T14: 30:15Z";""
      "viewed_at": null;""
      "replied_at": null;"
    }
    // More quotes...]
  ];"
  "meta": {""
    "total": 5;""
    "page": 1;""
    "limit": 20;"
  }

}`;
              }}
            />;
</EndpointSection>
          </TabsContent>;

            />;
          </TabsContent>;
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
          <TabsContent value=\"webhooks\" className=\"space-y-6\" />;
            <div className=\"prose prose-invert max-w-none\" />;
              <h3 className=\"text-lg font-semibold mb-2\" />Webhook Events</h3>;
              <p className=\"text-zinc-400 mb-4\" />;
                The Zion API can send webhook notifications when certain events occur in your account.;
                You can configure webhooks in the Webhooks tab of the Developer Dashboard.;
              </p>;
              <h4 className=\"text-md font-semibold mt-6 mb-2\" />Authentication</h4>;
              <p className=\"text-zinc-400 mb-4\" />;
                When you create a webhook, you can optionally provide a secret key.;
                If a secret is provided, each webhook request will include a signature in the;
                <code className=\"bg-zinc-800 px-1 py-0 && 0.5 rounded\" />X-Zion-Signature</code> header.;
                This signature is an HMAC SHA-256 hash of the request body using your webhook secret as the key.;
              </p>;

              <CodeBlock
                code={`import crypto from 'crypto'

              <CodeBlock
                code={`import crypto from 'crypto'
<CodeBlock
                code={`import crypto from 'crypto'
// Function to verify webhook signature
function verifyWebhookSignature(): any (payload, signature, secret) {
  const hmac = crypto && crypto.createHmac('sha256', secret)
  const expectedSignature = hmac && hmac.update(payload).digest('hex')
  return crypto && crypto.timingSafeEqual(
    Buffer && Buffer.from(signature)
    Buffer && Buffer.from(expectedSignature)
  )
}

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
// Example usage in Express.js
app.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
  const signature = req.headers['x-zion-signature'];
  const payload = req.body.toString();
  const webhookSecret = process.env.WEBHOOK_SECRET;
  if (!verifyWebhookSignature(payload, signature, webhookSecret)) {
    return res.status(401).send('Invalid signature')
  }


  // Process the webhook event
  const event = JSON.parse(payload);
  console.log('Received valid webhook:', event);
  // Respond to acknowledge receipt
  res.status(200).send('Webhook received')

// Example usage in Express && Express.js
app && app.post('/webhook', express && express.raw({type: 'application/json'}), (req, res) => {;
  const signature = req && req.headers['x-zion-signature'];
  const payload = req && req.body.toString();
  const webhookSecret = process && process.env.WEBHOOK_SECRET;

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

  if (!verifyWebhookSignature(payload, signature, webhookSecret)) {;
    return res && res.status(401).send('Invalid signature');
              <CodeBlock;
code={`import crypto from 'crypto';  // Process the webhook event;
const event = JSON.parse(payload);
  console.log('Received valid webhook:', event);
  // Respond to acknowledge receipt;
res.status(200).send('Webhook received')}
// Example usage in Express && Express.js;}
app && app.post('/webhook', express && express.raw({type: 'application/json'}), (req, res) = /> {;
  const signature = req && req.headers['x-zion-signature'];
  const payload = req && req.body.toString();
  const webhookSecret = process && process.env.WEBHOOK_SECRET;
  if (!verifyWebhookSignature(payload, signature, webhookSecret)) {;}
    return res && res.status(401).send('Invalid signature');}
  }
  // Process the webhook event;
  const event = JSON && JSON.parse(payload);
  console && console.log('Received valid webhook:', event);
  // Respond to acknowledge receipt;
  res && res.status(200).send('Webhook received');
}),`}
                language=\"javascript\";
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
  if (!verifyWebhookSignature(payload, signature, webhookSecret)) {;}
    return res && res.status(401).send('Invalid signature');}
  }
  // Process the webhook event;
  const event = JSON && JSON.parse(payload);
  console && console.log('Received valid webhook:', event);
  // Respond to acknowledge receipt;
  res && res.status(200).send('Webhook received');
}),`}
                language=\"javascript\";
                showLineNumbers={true}
              />;
              <p className=\"text-zinc-400 mb-2\" />;
            />
          </TabsContent>
          <TabsContent value=\"quotes\" className=\"space-y-6\" />
  }
}`;
              }}
            <EndpointSection;
method=\"POST\"
              endpoint=\"/api/quotes\"
              description=\"Create a quote request for a talent.\"
              note=\"Requires quotes:write scope\"
              params={[}
                { name: \"talent_id\", type: \"string\", description: \"ID of the talent to request a quote from\", required: true }
                { name: \"project_name\", type: \"string\", description: \"Name of the project\", required: true }
                { name: \"project_summary\", type: \"string\", description: \"Brief summary of the project\", required: true }
                { name: \"project_description\", type: \"string\", description: \"Detailed project description\" }
                { name: \"timeline\", type: \"string\", description: \"Expected timeline\", required: true }
                { name: \"budget_min\", type: \"number\", description: \"Minimum budget\" }
                { name: \"budget_max\", type: \"number\", description: \"Maximum budget\" }
                { name: \"requester_name\", type: \"string\", description: \"Name of the requester\", required: true }
                { name: \"requester_email\", type: \"string\", description: \"Email of the requester\", required: true }
              ]}
              codeExamples={{
                curl: `curl -X POST \"https://api && api.ziontechgroup.com/v1/quotes\" \\
  -H \"Authorization: Bearer YOUR_API_KEY\" \\
  -H \"Content-Type: application/json\" \\
            />;
          </TabsContent>;
          <TabsContent value=\"quotes\" className=\"space-y-6\" />;
            <EndpointSection;
              method=\"POST\";
              endpoint=\"/api / quotes\";
              description=\"Create a quote request for a talent.\";
              note=\"Requires quotes:write scope\";}
              params={[;}
                { name: \"talent_id\", type: \"string\", description: \"ID of the talent to request a quote from\", required: true },
                { name: \"project_name\", type: \"string\", description: \"Name of the project\", required: true },
                { name: \"project_summary\", type: \"string\", description: \"Brief summary of the project\", required: true },
                { name: \"project_description\", type: \"string\", description: \"Detailed project description\" },
                { name: \"timeline\", type: \"string\", description: \"Expected timeline\", required: true },
                { name: \"budget_min\", type: \"number\", description: \"Minimum budget\" },
                { name: \"budget_max\", type: \"number\", description: \"Maximum budget\" },
                { name: \"requester_name\", type: \"string\", description: \"Name of the requester\", required: true },
                { name: \"requester_email\", type: \"string\", description: \"Email of the requester\", required: true }
              ]}
              code_examples={{
                curl: `curl -X POST \"https://api.ziontechgroup.com / v1 / quotes\" \\;
  -H \"Authorization: Bearer YOUR_API_KEY\" \\;
  -H \"Content - Type: application / json\" \\;
  -d '{
headers = {}
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';}
}
    'talent_id': 'talent_abc123project_name': 'E-commerce Website Redesignproject_summary': 'Redesign our outdated e-commerce website with modern UIproject_description': 'Our current website is 5 years old and needs a complete overhaul...timeline': '2-3 monthsbudget_min': 8000;
    'budget_max': 12000;
    'requester_name': 'John Doerequester_email': 'john@example.com'
}

<h4 className="text-md font-semibold mt-6 mb-2">Sample Payloads</h4>;
              <p className="text-zinc-400 mb-2">;
                Here's an example of a <code className="bg-zinc-800 px-1 py-0 && 0.5 rounded">new_application</code> webhook payload: </p>;
response = requests && requests.post(
    'https: //api && api.ziontechgroup.com/v1/quotes'
    headers=headers,
    data=json && json.dumps(payload)
)

data = response && response.json()

    "match_score": 85
    "applied_at": "2025 - 05 - 16T15:28:30Z";
    "status": "new",
    "match_score": 85;
            <div className="prose prose-invert max-w-none">;
              <h3 className="text-lg font-semibold mb-2">Error Responses</h3>;
              <p className="text-zinc-400 mb-4">;
                The Zion API uses conventional HTTP status codes to indicate the success or failure of an API request.;
    \"match_score\": 85;
    \"applied_at\": \"2025 - 05 - 16T15:28:30Z\";
    \"status\": \"new\",
    \"match_score\": 85;
            <div className=\"prose prose-invert max-w-none\" />;
              <h3 className=\"text-lg font-semibold mb-2\" />Error Responses</h3>;
              <p className=\"text-zinc-400 mb-4\" />;
                In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error with the;
                provided information, and codes in the 5xx range indicate an error with our servers.;
              </p>;
              <table className=\"w - full border - collapse mt-4\" />;
                <thead />;
                  <tr className=\"border - b border - zinc-800\" />;
                    <th className=\"py - 2 px - 4 text-left\" />Status Code</th>;
                    <th className=\"py - 2 px - 4 text-left\" />Description</th>;
                  </tr>;
                </thead>;
                <tbody />;
                  <tr className=\"border - b border - zinc-800\" />;
                    <td className=\"py - 2 px-4\" /><code className=\"bg - zinc - 800 px - 1 py-0.5 rounded\" />200 OK</code></td>;
                    <td className=\"py - 2 px-4\" />The request was successful.</td>;
                  </tr>;
                  <tr className=\"border - b border - zinc-800\" />;
                    <td className=\"py - 2 px-4\" /><code className=\"bg - zinc - 800 px - 1 py-0.5 rounded\" />201 Created</code></td>;
                    <td className=\"py - 2 px-4\" />The resource was successfully created.</td>;
                  </tr>;
                  <tr className=\"border - b border - zinc-800\" />;
                    <td className=\"py - 2 px-4\" /><code className=\"bg - zinc - 800 px - 1 py-0.5 rounded\" />400 Bad Request</code></td>;
                    <td className=\"py - 2 px-4\" />The request was invalid or cannot be otherwise served.</td>;
                  </tr>;
                  <tr className=\"border - b border - zinc-800\" />;
                    <td className=\"py - 2 px-4\" /><code className=\"bg - zinc - 800 px - 1 py-0.5 rounded\" />401 Unauthorized</code></td>;
                    <td className=\"py - 2 px-4\" />Authentication credentials were missing or invalid.</td>;
                  </tr>;
                  <tr className=\"border - b border - zinc-800\" />;
                    <td className=\"py - 2 px-4\" /><code className=\"bg - zinc - 800 px - 1 py-0.5 rounded\" />403 Forbidden</code></td>;
                    <td className=\"py - 2 px-4\" />The request is understood, but it has been refused or access is not allowed.</td>;
                  </tr>;
                  <tr className=\"border - b border - zinc-800\" />;
                    <td className=\"py - 2 px-4\" /><code className=\"bg - zinc - 800 px - 1 py-0.5 rounded\" />404 Not Found</code></td>;
                    <td className=\"py - 2 px-4\" />The requested resource does not exist.</td>;
                  </tr>;
                  <tr className=\"border - b border - zinc-800\" />;
                    <td className=\"py - 2 px-4\" /><code className=\"bg - zinc - 800 px - 1 py-0.5 rounded\" />422 Unprocessable Entity</code></td>;
                    <td className=\"py - 2 px-4\" />The request was well - formed but was unable to be followed due to semantic errors.</td>;
                  </tr>;
                  <tr className=\"border - b border - zinc-800\" />;
                    <td className=\"py - 2 px-4\" /><code className=\"bg - zinc - 800 px - 1 py-0.5 rounded\" />429 Too Many Requests</code></td>;
                    <td className=\"py - 2 px-4\" />The request was rejected due to rate limiting.</td>;
                  </tr>;
                  <tr className=\"border - b border - zinc-800\" />;
                    <td className=\"py - 2 px-4\" /><code className=\"bg - zinc - 800 px - 1 py-0.5 rounded\" />500 Internal Server Error</code></td>;
                    <td className=\"py - 2 px-4\" />Something went wrong on our end.</td>;
                  </tr>;
                </tbody>;
              </table>;
              <h4 className=\"text - md font - semibold mt - 6 mb-2\" />Error Response Format</h4>;
              <p className=\"text - zinc - 400 mb-2\" />;
                Error responses include a consistent JSON object with the following format: </p>;
              <CodeBlock;
                code={`{
  \"error\": {
    \"code\": \"invalid_request\";
    \"message\": \"The request was invalid\";  description;
  note;
  params = [];
  codeExamples;

    deadline: '2025 - 06 - 30T23:59:59Z';
payload = {
    'title': 'Senior React Developerdescription': 'We need an experienced React developer...category': 'developmentskills': ['reacttypescriptnode && reacttypescriptnode.js']
    deadline: '2025-06-30T23:59:59Z

// // // console.log(data),`,

    'title': 'Senior React Developerdescription': 'We need an experienced React developer...category': 'developmentskills': ['reacttypescriptnode.js'];
    'budget': {
response = requests && requests.post(
    'https: //api && api.ziontechgroup.com/v1/jobs
    headers=headers,)
    data=json && json.dumps(payload)


    'budget': {`;

                { name: "title", type: "string", description: "Job title", required: true },;""
                { name: "description", type: "string", description: "Detailed job description", required: true },;""
                { name: "category", type: "string", description: "Job category", required: true },;"]"
                { name: "skills", type: "string[]", description: "Required skills", required: true },;""
                { name: "budget.min", type: "number", description: "Minimum budget" },;""
                { name: "budget.max", type: "number", description: "Maximum budget" },;""
                { name: "budget.currency", type: "string", description: "Currency code (default: USD)" },;""
                curl: `curl -X POST "https://api.ziontechgroup.com/v1/jobs" \\;""
  -H "Content-Type: application/json" \\;""
    "title": "Senior React Developer",;""
    "description": "We need an experienced React developer...",;""
    "category": "development",;""
    "skills": ["react", "typescript", "node.js"],;""
    "budget": {;""
      "min": 5000,;""
      "max": 10000,;""
    "deadline": "2025-06-30T23:59:59Z";""`;
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/jobs', {;
  method: 'POST',;
  title: 'Senior React Developer',;
    description: 'We need an experienced React developer...',;
    category: 'development',;
    skills: ['reacttypescriptnode.js'],;
  min: 5000,;
      max: 10000,;
      currency: 'USD';
    deadline: '2025-06-30T23:59:59Z';')
// // // console.log(data),`,;`;
    'title': 'Senior React Developerdescription': 'We need an experienced React developer...category': 'developmentskills': ['reacttypescriptnode.js'],;
    'budget': {;
        'min': 5000,;
        'max': 10000,;`;
        'min': 5000;
        'max': 10000;
        'currency': 'USD';
    'deadline': '2025 - 06 - 30T23:59:59Z';




response = requests.post (
    'https: //api.ziontechgroup.com / v1 / jobs';
    headers = headers,)
    data = json.dumps (payload));
    "id": "job_def456"""
    "status": "new"""
    "created_at": "2025-05-16T14: 22:10Z",""
    "id": "job_def456",""
    "status": "new",""
    "created_at": "2025-05-16T14:22:10Z",""
    "deadline": "2025-06-30T23:59:59Z"""
    "status": "new";""
    "created_at": "2025 - 05 - 16T14: 22:10Z",""
    "deadline": "2025 - 06 - 30T23:59:59Z";"



              endpoint="/api/talent"""
              description="List talent profiles with optional filtering."""
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" }"]"
                { name: "skills", type: "string[]", description: "Filter by skills (comma-separated)" }""
                { name: "availability", type: "string", description: "Filter by availability status" }"
                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/talent?skills=react,typescript" \\""

// // // console.log(data),`,
    'https: //api.ziontechgroup.com/v1/talent',;
    params={'skills': 'react,typescript'};
    headers=headers;
data = response.json()`;


          <TabsContent value="talent" className="space - y-6">;"

              endpoint="/api / talent";""
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },"]"
                { name: "skills", type: "string[]", description: "Filter by skills (comma - separated)" },""
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / talent?skills = react, typescript" \\;""
                javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / talent?skills = react, typescript', {
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/talent?skills=react,typescript', {




    'https: //api && api.ziontechgroup.com/v1/talent',
    params={'skills': 'react,typescript'}

    'https: //api.ziontechgroup.com / v1 / talent',
    params={'skills': 'react, typescript'}')


                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },;"]"
                { name: "skills", type: "string[]", description: "Filter by skills (comma-separated)" },;""
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/talent?skills=react,typescript" \\;""
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/talent?skills=react,typescript', {;
// // // console.log(data),`,;`;
    params={'skills': 'react,typescript'},;


      "id": "talent_abc123"""
      "display_name": "Jane Smith"""
      "headline": "Senior Frontend Developer","]"
      "skills": ["react", "typescript", "javascript"]""
      "availability": "available"""
      "average_rating": 4 && 4.8;""
      "rating_count": 15;"
    // More talent profiles...
      "id": "talent_abc123",""
      "display_name": "Jane Smith",""
      "headline": "Senior Frontend Developer",""
      "skills": ["react", "typescript", "javascript"],""
      "availability": "available",""
      "average_rating": 4.8,""
    // More talent profiles...
    // More talent profiles...
    "total": 28;""
    "limit": 20;""
    // More talent profiles...;
    "limit": 20;"




              endpoint="/api/talent/:id"""
              description="Get detailed information about a specific talent profile."""
                { name: "id", type: "string", description: "The talent ID", required: true }"]
                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/talent/talent_abc123" \\""


// // // console.log(data),`,

              endpoint="/api / talent/:id";""
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / talent / talent_abc123" \\;""
                javascript: `const talent_id = 'talent_abc123',`;
const response = await fetch (\`https://api.ziontechgroup.com / v1 / talent/\${talent_id}\`, {
                javascript: `const talentId = 'talent_abc123',`;
const response = await fetch(\`https://api && api.ziontechgroup.com/v1/talent/\${talentId}\`, {



    f'https://api.ziontechgroup.com / v1 / talent/{talent_id}';')
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/talent/talent_abc123" \\;""
                javascript: `const talentId = 'talent_abc123',;`;
// // // console.log(data),`,;`;

    "headline": "Senior Frontend Developer"""
    "bio": "10+ years of experience in frontend development...",""
    "skills": ["react", "typescript", "javascript", "css", "html"]""
    "rating_count": 15;""
    "portfolio": ["
      {"
        "id": "proj_123"""
        "title": "E-commerce Platform"""
        "description": "Built a modern e-commerce platform using React...""]"
        "technologies": ["react", "redux", "node && node.js"]""
        "image_url": "https://example && example.com/portfolio/123 && 123.jpg""
    "certifications": ["
        "name": "AWS Certified Developer"""
        "issuing_organization": "Amazon Web Services"""
    "bio": "10+ years of experience in frontend development...","]"
    "skills": ["react", "typescript", "javascript", "css", "html"],""
    "rating_count": 15,""
        "id": "proj_123",""
        "title": "E-commerce Platform",""
        "description": "Built a modern e-commerce platform using React...","]"
        "technologies": ["react", "redux", "node.js"],""
        "image_url": "https://example.com/portfolio/123.jpg""
    ],"
        "name": "AWS Certified Developer",""
        "issuing_organization": "Amazon Web Services",""
        "issue_date": "2024-01-15"""
    "portfolio": [;"
        "id": "proj_123";""
        "title": "E - commerce Platform";""
        "description": "Built a modern e - commerce platform using React...";"]"
        "technologies": ["react", "redux", "node.js"];""
        "image_url": "https://example.com / portfolio / 123.jpg";"
    "certifications": [;"
        "name": "AWS Certified Developer";""
        "issuing_organization": "Amazon Web Services";""
        "issue_date": "2024 - 01 - 15";"
    ];



            />

          <TabsContent value="quotes" className="space-y-6">"


                { name: "talent_id", type: "string", description: "ID of the talent to request a quote from", required: true },;""
                { name: "project_name", type: "string", description: "Name of the project", required: true },;""
                { name: "project_summary", type: "string", description: "Brief summary of the project", required: true },;""
                { name: "project_description", type: "string", description: "Detailed project description" },;""
                { name: "timeline", type: "string", description: "Expected timeline", required: true },;""
                { name: "budget_min", type: "number", description: "Minimum budget" },;""
                { name: "budget_max", type: "number", description: "Maximum budget" },;""
                { name: "requester_name", type: "string", description: "Name of the requester", required: true },;""
                { name: "requester_email", type: "string", description: "Email of the requester", required: true }"]
                curl: `curl -X POST "https://api.ziontechgroup.com/v1/quotes" \\;""
    "talent_id": "talent_abc123",;""
    "project_name": "E-commerce Website Redesign",;""
    "project_summary": "Redesign our outdated e-commerce website with modern UI",;""
    "project_description": "Our current website is 5 years old and needs a complete overhaul...",;""
    "timeline": "2-3 months",;""
    "budget_min": 8000,;""
    "budget_max": 12000,;""
    "requester_name": "John Doe",;""
    "requester_email": "john@example.com";""`;
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/quotes', {;
  talent_id: 'talent_abc123',;
    project_name: 'E-commerce Website Redesign',;
    project_summary: 'Redesign our outdated e-commerce website with modern UI',;
    project_description: 'Our current website is 5 years old and needs a complete overhaul...',;
    timeline: '2-3 months',;
    budget_min: 8000,;
    budget_max: 12000,;
    requester_name: 'John Doe',;
    requester_email: 'john@example.com';')
// // // console.log(data),`,;`;
    'talent_id': 'talent_abc123project_name': 'E-commerce Website Redesignproject_summary': 'Redesign our outdated e-commerce website with modern UIproject_description': 'Our current website is 5 years old and needs a complete overhaul...timeline': '2-3 monthsbudget_min': 8000,;
    'budget_max': 12000,;
    'requester_name': 'John Doerequester_email': 'john@example.com';
              responseExamples={{`;
    "id": "quote_def456",""
    "talent_id": "talent_abc123",""
    "requester_id": "user_xyz789",""
    "project_name": "E-commerce Website Redesign",""
    "project_summary": "Redesign our outdated e-commerce website with modern UI",""
    "project_description": "Our current website is 5 years old and needs a complete overhaul...",""
    "timeline": "2-3 months",""
    "budget_min": 8000,""
    "budget_max": 12000,""
    "budget_display": "$8,000 - $12,000",""
    "requester_name": "John Doe",""
    "requester_email": "john@example.com",""
    "created_at": "2025-05-16T14:30:15Z""

            
              endpoint="/api/quotes"""
              description="List quote requests that you've created."""
                { name: "status", type: "string", description: "Filter by status (new, viewed, replied, archived)" }"]
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/quotes" \\""
  -H "Authorization: Bearer YOUR_API_KEY" \\""`;
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/quotes', {

// // // console.log(data),`,`;

              description="List quote requests that you've created.";""
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/quotes" \\;""
// // // console.log(data),`,;`;
    'https: //api.ziontechgroup.com/v1/quotes',;
  "data": ["
      "created_at": "2025-05-16T14:30:15Z",""
      "viewed_at": null,""
      "replied_at": null;"
    // More quotes...]
    "total": 5,""
    "page": 1,""

          

                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/quotes" \\""
  -H "Content-Type: application/json"`","`;
  method: 'GET,
const data = await response.json();`;
console.log(data),`;`;
response = requests.get(
    'https: //api.ziontechgroup.com/v1/quotes
    'https: //api.ziontechgroup.com / v1 / quotes',')
      "id": "quote_def456";""
      "talent_id": "talent_abc123";""
      "project_name": "E-commerce Website Redesign";""
      "project_summary": "Redesign our outdated e-commerce website with modern UI"""
      "budget_display": "$8,000 - $12,000";""
      "created_at": "2025-05-16T14: 30:15Z";""
      "viewed_at": null;""
    // More quotes...]
    "total": 5;""
      "project_name": "E - commerce Website Redesign";""
      "project_summary": "Redesign our outdated e - commerce website with modern UI",""
      "budget_display": "$8, 000 - $12, 000";""
      "created_at": "2025 - 05 - 16T14: 30:15Z";""
    // More quotes...;

          <TabsContent value="webhooks" className="space-y-6">"
            <div className="prose prose-invert max-w-none">"
  description;
  note;
  params = [];
  codeExamples;}
  responseExamples;}
}) {;
  const [activeTab, setActiveTab] = useState(\"curl\");function EndpointSection({ 

          </TabsContent>;
          </TabsContent>;"
          <TabsContent value="webhooks" className="space-y-6">;"
</TabsContent>"
            <div className="prose prose-invert max-w-none">;"
</div>"
              <h3 className="text-lg font-semibold mb-2">Webhook Events</h3>""
              <p className="text-zinc-400 mb-4">"
</p>
              </p>"
              <h4 className="text-md font-semibold mt-6 mb-2">Authentication</h4>""
                <code className="bg-zinc-800 px-1 py-0.5 rounded">X-Zion-Signature</code> header."
<CodeBlock;"`;
                code={`import crypto from 'crypto';
// Function to verify webhook signature;
function verifyWebhookSignature(): any (payload, signature, secret) {
  const hmac = crypto && crypto.createHmac('sha256', secret)
  const expectedSignature = hmac && hmac.update(payload).digest('hex')
  return crypto && crypto.timingSafeEqual()
    Buffer && Buffer.from(signature)
    Buffer && Buffer.from(expectedSignature)
// Example usage in Express.js;
app.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {

              <h4 className="text-md font-semibold mt-6 mb-2">Event Types</h4>""
              <table className="w-full border-collapse mt-2">"
</table>
                <thead>
</thead>"
                  <tr className="border-b border-zinc-800">"
</tr>"
                    <th className="py-2 px-4 text-left">Event Type</th>""
                    <th className="py-2 px-4 text-left">Description</th>"
                  </tr>
                </thead>
                <tbody>
</tbody>"
                    <td className="py-2 px-4 font-mono text-sm">new_application</td>""
                    <td className="py-2 px-4">When a talent applies to one of your jobs</td>"
                    <td className="py-2 px-4 font-mono text-sm">quote_received</td>""
                    <td className="py-2 px-4">When you receive a quote from talent</td>"
                    <td className="py-2 px-4 font-mono text-sm">milestone_approved</td>""
                    <td className="py-2 px-4">When a project milestone is approved</td>"
                    <td className="py-2 px-4 font-mono text-sm">talent_hired</td>""
                    <td className="py-2 px-4">When you hire talent for a project</td>"
                </tbody>
              </table>"
              <h4 className="text-md font-semibold mt-6 mb-2">Sample Payloads</h4>""
              <p className="text-zinc-400 mb-2">"
                Here's an example of a <code className="bg-zinc-800 px-1 py-0.5 rounded">new_application</code> webhook payload:"
              
              <CodeBlock;`;
                code={`{"
  "event_type": "new_application",""
  "event_id": "evt_abc123def456",""
  "timestamp": "2025-05-16T15:30:00Z",""
    "application_id": "app_123456",""
    "job_id": "job_abc123",""
    "talent_id": "talent_xyz789",""
    "applied_at": "2025-05-16T15:28:30Z",""
    "match_score": 85;"
}`}"
                language="json""
                showLineNumbers={true}
              <CodeBlock
                code={`{
  "event_type": "new_application"
  "event_id": "evt_abc123def456"
  "timestamp": "2025-05-16T15:30:00Z"
            />;
          </TabsContent>;
          <TabsContent value="webhooks" className="space - y-6">;
            <div className="prose prose - invert max - w-none">;
              <h3 className="text - lg font - semibold mb - 2">Webhook Events</h3>;
              <p className="text - zinc - 400 mb - 4">;
                The Zion API can send webhook notifications when certain events occur in your account.;
                You can configure webhooks in the Webhooks tab of the Developer Dashboard.;

            </div>
          
          <TabsContent value="errors" className="space-y-6">"
              <h3 className="text-lg font-semibold mb-2">Error Responses</h3>""
              <table className="w-full border-collapse mt-4">"
                    <th className="py-2 px-4 text-left">Status Code</th>""
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">200 OK</code></td>""
                    <td className="py-2 px-4">The request was successful.</td>"
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">201 Created</code></td>""
                    <td className="py-2 px-4">The resource was successfully created.</td>"
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">400 Bad Request</code></td>""
                    <td className="py-2 px-4">The request was invalid or cannot be otherwise served.</td>"
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">401 Unauthorized</code></td>""
                    <td className="py-2 px-4">Authentication credentials were missing or invalid.</td>"
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">403 Forbidden</code></td>""
                    <td className="py-2 px-4">The request is understood, but it has been refused or access is not allowed.</td>"
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">404 Not Found</code></td>""
                    <td className="py-2 px-4">The requested resource does not exist.</td>"
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">422 Unprocessable Entity</code></td>""
                    <td className="py-2 px-4">The request was well-formed but was unable to be followed due to semantic errors.</td>"
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">429 Too Many Requests</code></td>""
                    <td className="py-2 px-4">The request was rejected due to rate limiting.</td>"
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">500 Internal Server Error</code></td>""
                    <td className="py-2 px-4">Something went wrong on our end.</td>"
              <h4 className="text-md font-semibold mt-6 mb-2">Error Response Format</h4>""
              
  "error": {""
    "code": "invalid_request",""
    "message": "The request was invalid",""
    "details": ["
        "field": "project_name",""
        "message": "Project name is required""
  // Process the webhook event;
  const event = JSON.parse(payload),;"
  // // // console.log('Received valid webhook:', event),;
  // Respond to acknowledge receipt;
  res.status(200).send('Webhook received');`;
}),`}
                language="javascript";"
              <h4 className="text-md font-semibold mt-6 mb-2">Event Types</h4>;""
              <table className="w-full border-collapse mt-2">;"
                <thead>;
                  <tr className="border-b border-zinc-800">;"
                    <th className="py-2 px-4 text-left">Event Type</th>;""
                    <th className="py-2 px-4 text-left">Description</th>;"
                  </tr>;
                </thead>;
                <tbody>;
                    <td className="py-2 px-4 font-mono text-sm">new_application</td>;""
                    <td className="py-2 px-4">When a talent applies to one of your jobs</td>;"
                  </tr>;"
                    <td className="py-2 px-4 font-mono text-sm">quote_received</td>;""
                    <td className="py-2 px-4">When you receive a quote from talent</td>;"
                    <td className="py-2 px-4 font-mono text-sm">milestone_approved</td>;""
                    <td className="py-2 px-4">When a project milestone is approved</td>;"
                    <td className="py-2 px-4 font-mono text-sm">talent_hired</td>;""
                    <td className="py-2 px-4">When you hire talent for a project</td>;"
                </tbody>;
              </table>;"
              <h4 className="text-md font-semibold mt-6 mb-2">Sample Payloads</h4>;""
              <p className="text-zinc-400 mb-2">;"
                Here's an example of a <code className="bg-zinc-800 px-1 py-0.5 rounded">new_application</code> webhook payload:;"
              </p>;
                code={`{;"
  "event_type": "new_application",;""
  "event_id": "evt_abc123def456",;""
  "timestamp": "2025-05-16T15:30:00Z",;""
  "data": {;""
    "application_id": "app_123456",;""
    "job_id": "job_abc123",;""
    "talent_id": "talent_xyz789",;""
    "applied_at": "2025-05-16T15:28:30Z",;""
    "status": "new",;""
                language="json";"

            </div>;
          <TabsContent value="errors" className="space-y-6">;"
            <div className="prose prose-invert max-w-none">;"
              <h3 className="text-lg font-semibold mb-2">Error Responses</h3>;""
              <p className="text-zinc-400 mb-4">;"
              </p>;"
              <table className="w-full border-collapse mt-4">;"
                    <th className="py-2 px-4 text-left">Status Code</th>;""
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">200 OK</code></td>;""
                    <td className="py-2 px-4">The request was successful.</td>;"
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">201 Created</code></td>;""
                    <td className="py-2 px-4">The resource was successfully created.</td>;"
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">400 Bad Request</code></td>;""
                    <td className="py-2 px-4">The request was invalid or cannot be otherwise served.</td>;"
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">401 Unauthorized</code></td>;""
                    <td className="py-2 px-4">Authentication credentials were missing or invalid.</td>;"
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">403 Forbidden</code></td>;""
                    <td className="py-2 px-4">The request is understood, but it has been refused or access is not allowed.</td>;"
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">404 Not Found</code></td>;""
                    <td className="py-2 px-4">The requested resource does not exist.</td>;"
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">422 Unprocessable Entity</code></td>;""
                    <td className="py-2 px-4">The request was well-formed but was unable to be followed due to semantic errors.</td>;"
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">429 Too Many Requests</code></td>;""
                    <td className="py-2 px-4">The request was rejected due to rate limiting.</td>;"
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">500 Internal Server Error</code></td>;""
                    <td className="py-2 px-4">Something went wrong on our end.</td>;"
              <h4 className="text-md font-semibold mt-6 mb-2">Error Response Format</h4>;""
  "error": {;""
    "code": "invalid_request",;""
    "message": "The request was invalid",;""
    "details": [;"
        "field": "project_name",;""
        "message": "Project name is required";"
        "issue_date": "2024-01-15""
}`





              description="Create a quote request for a talent."""
              note="Requires quotes:write scope""
                { name: "talent_id", type: "string", description: "ID of the talent to request a quote from", required: true }""
                { name: "project_name", type: "string", description: "Name of the project", required: true }""
                { name: "project_summary", type: "string", description: "Brief summary of the project", required: true }""
                { name: "project_description", type: "string", description: "Detailed project description" }""
                { name: "timeline", type: "string", description: "Expected timeline", required: true }""
                { name: "budget_min", type: "number", description: "Minimum budget" }""
                { name: "budget_max", type: "number", description: "Maximum budget" }""
                { name: "requester_name", type: "string", description: "Name of the requester", required: true }""
                curl: `curl -X POST "https://api && api.ziontechgroup.com/v1/quotes" \\""
  -H "Authorization: Bearer YOUR_API_KEY" \\""
  -H "Content-Type: application/json" \\""
    "talent_id": "talent_abc123"""
    "project_name": "E-commerce Website Redesign"""
    "project_description": "Our current website is 5 years old and needs a complete overhaul..."""
    "timeline": "2-3 months"""
    "budget_min": 8000;""
    "budget_max": 12000;""
    "requester_email": "john@example && example.com"""`;
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/quotes', {
                javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / quotes', {
  talent_id: 'talent_abc123',
    project_name: 'E - commerce Website Redesign',
    project_summary: 'Redesign our outdated e - commerce website with modern UI',
    project_description: 'Our current website is 5 years old and needs a complete overhaul...',
    timeline: '2 - 3 months',
    budget_min: 8000,
    budget_max: 12000,
    requester_name: 'John Doe',





    'talent_id': 'talent_abc123project_name': 'E-commerce Website Redesignproject_summary': 'Redesign our outdated e-commerce website with modern UIproject_description': 'Our current website is 5 years old and needs a complete overhaul...timeline': '2-3 monthsbudget_min': 8000;
    'budget_max': 12000;
    'requester_name': 'John Doerequester_email': 'john@example.com


    'https: //api && api.ziontechgroup.com/v1/quotes

data = response && response.json()`;
    'talent_id': 'talent_abc123project_name': 'E - commerce Website Redesignproject_summary': 'Redesign our outdated e - commerce website with modern UIproject_description': 'Our current website is 5 years old and needs a complete overhaul...timeline': '2 - 3 monthsbudget_min': 8000;
    'https: //api.ziontechgroup.com / v1 / quotes';
    "id": "quote_def456"""
    "requester_id": "user_xyz789"""
    "budget_display": "$8,000 - $12,000"""
    "requester_name": "John Doe"""
    "requester_email": "john@example && example.com"""
    "created_at": "2025-05-16T14:30:15Z"""
    "requester_name": "John Doe";""
    "requester_email": "john@example.com";""
    "created_at": "2025 - 05 - 16T14:30:15Z";"


  -H "Authorization: Bearer YOUR_API_KEY" \\"

              endpoint="/api / quotes";""
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / quotes" \\;""

console && console.log(data),``;




    'https: //api && api.ziontechgroup.com/v1/quotes',



data = response.json()
print(data)``;
      "created_at": "2025-05-16T14: 30:15Z"""
    // More quotes...]
    // More quotes...;"`;

    'https: //api.ziontechgroup.com/v1/quotes',

    // More quotes...]


          <TabsContent value="webhooks" className="space-y-6">;"
              <h3 className="text-lg font-semibold mb-2">Webhook Events</h3>;""
              <h4 className="text-md font-semibold mt-6 mb-2">Authentication</h4>;""
                <code className="bg-zinc-800 px-1 py-0 && 0.5 rounded">X-Zion-Signature</code> header.;"
                code={`import crypto from 'crypto
// Function to verify webhook signature;





// Example usage in Express.js;


  -H "Content-Type: application/json" \\"

          <TabsContent value="quotes" className="space - y-6">;"

                { name: "talent_id", type: "string", description: "ID of the talent to request a quote from", required: true },""
                { name: "project_name", type: "string", description: "Name of the project", required: true },""
                { name: "project_summary", type: "string", description: "Brief summary of the project", required: true },""
                { name: "project_description", type: "string", description: "Detailed project description" },""
                { name: "timeline", type: "string", description: "Expected timeline", required: true },""
                { name: "budget_min", type: "number", description: "Minimum budget" },""
                { name: "budget_max", type: "number", description: "Maximum budget" },""
                { name: "requester_name", type: "string", description: "Name of the requester", required: true },""
                curl: `curl -X POST "https://api.ziontechgroup.com / v1 / quotes" \\;""




payload = {`;
    // More quotes...]
    // More quotes...;
// Function to verify webhook signature;
function verifyWebhookSignature(): any (payload, signature, secret) {"
  "event_type": "new_application"""
  "event_id": "evt_abc123def456"""
  "timestamp": "2025-05-16T15:30:00Z""

          <TabsContent value="webhooks" className="space - y-6">;"
            <div className="prose prose - invert max - w-none">;"
              <h3 className="text - lg font - semibold mb - 2">Webhook Events</h3>;""
              <p className="text - zinc - 400 mb - 4">;"
              <h4 className="text - md font - semibold mt - 6 mb - 2">Authentication</h4>;""
                <code className="bg - zinc - 800 px - 1 py - 0.5 rounded">X - Zion - Signature</code> header.;"
// Function to verify webhook signature;
/**
 * verifyWebhookSignature - Function description;
 */
function verifyWebhookSignature() {
  const hmac = crypto.create_hmac ('sha256', secret);
  const expected_signature = hmac.update (payload).digest ('hex');
  return crypto.timingSafeEqual ()
    Buffer.from (signature);
    Buffer.from (expected_signature));
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
  "data": {

"data": {
    "application_id": "app_123456"
    "job_id": "job_abc123"
    "talent_id": "talent_xyz789"
    "applied_at": "2025-05-16T15:28:30Z"
    "status": "new",

    "match_score": 85
"applied_at": "2025 - 05 - 16T15:28:30Z";
    "status": "new",
    "match_score": 85;
  "data": {
    "match_score": 85
    "applied_at": "2025 - 05 - 16T15:28:30Z";
    "status": "new",
    "match_score": 85;
  }
}`}
                language="json";
                showLineNumbers={true}

              />;
            </div>;
          </TabsContent>;

/>;
            </div>;
          </TabsContent>;
          <TabsContent value="errors" className="space-y-6">;
            <div className="prose prose-invert max-w-none">;
              <h3 className="text-lg font-semibold mb-2">Error Responses</h3>;
              <p className="text-zinc-400 mb-4">;
              />;
            </div>;
          </TabsContent>;
          <TabsContent value="errors" className="space - y-6">;
            <div className="prose prose - invert max - w-none">;
              <h3 className="text - lg font - semibold mb - 2">Error Responses</h3>;
              <p className="text - zinc - 400 mb - 4">;

                The Zion API uses conventional HTTP status codes to indicate the success or failure of an API request.;
                In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error with the;
                provided information, and codes in the 5xx range indicate an error with our servers.;
              </p>;

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
                code={`{
  "error": {
    "code": "invalid_request";
    "message": "The request was invalid";
    "details": [;
      {

      }
    ];
  }
}`}

"field": "project_name",
        "message": "Project name is required";
      }
    ];
  }
}`}
    "details": [
      {
        "field": "project_name"
        "field": "project_name",
        "message": "Project name is required"
      }
    ]
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

function EndpointSection({
  method
  endpoint

              <h4 className="text - md font - semibold mt - 6 mb - 2">Event Types</h4>;""
              <table className="w - full border - collapse mt - 2">;"
                  <tr className="border - b border - zinc - 800">;"
                    <th className="py - 2 px - 4 text - left">Event Type</th>;""
                    <th className="py - 2 px - 4 text - left">Description</th>;"
                    <td className="py - 2 px - 4 font - mono text - sm">new_application</td>;""
                    <td className="py - 2 px - 4">When a talent applies to one of your jobs</td>;"
                    <td className="py - 2 px - 4 font - mono text - sm">quote_received</td>;""
                    <td className="py - 2 px - 4">When you receive a quote from talent</td>;"
                    <td className="py - 2 px - 4 font - mono text - sm">milestone_approved</td>;""
                    <td className="py - 2 px - 4">When a project milestone is approved</td>;"
                    <td className="py - 2 px - 4 font - mono text - sm">talent_hired</td>;""
                    <td className="py - 2 px - 4">When you hire talent for a project</td>;"
              <h4 className="text - md font - semibold mt - 6 mb - 2">Sample Payloads</h4>;""
              <p className="text - zinc - 400 mb - 2">;"
                Here's an example of a <code className="bg - zinc - 800 px - 1 py - 0.5 rounded">new_application</code> webhook payload: </p>;"
  "event_type": "new_application";""
  "event_id": "evt_abc123def456";""
  "timestamp": "2025 - 05 - 16T15:30:00Z";""
    "application_id": "app_123456"""
    "job_id": "job_abc123"""
    "talent_id": "talent_xyz789"""
    "applied_at": "2025-05-16T15:28:30Z"""
    "match_score": 85;""
    "applied_at": "2025 - 05 - 16T15:28:30Z";""


          <TabsContent value="errors" className="space - y-6">;"
              <h3 className="text - lg font - semibold mb - 2">Error Responses</h3>;""
              <table className="w - full border - collapse mt - 4">;"
                    <th className="py - 2 px - 4 text - left">Status Code</th>;""
                    <td className="py - 2 px - 4"><code className="bg - zinc - 800 px - 1 py - 0.5 rounded">200 OK</code></td>;""
                    <td className="py - 2 px - 4">The request was successful.</td>;"
                    <td className="py - 2 px - 4"><code className="bg - zinc - 800 px - 1 py - 0.5 rounded">201 Created</code></td>;""
                    <td className="py - 2 px - 4">The resource was successfully created.</td>;"
                    <td className="py - 2 px - 4"><code className="bg - zinc - 800 px - 1 py - 0.5 rounded">400 Bad Request</code></td>;""
                    <td className="py - 2 px - 4">The request was invalid or cannot be otherwise served.</td>;"
                    <td className="py - 2 px - 4"><code className="bg - zinc - 800 px - 1 py - 0.5 rounded">401 Unauthorized</code></td>;""
                    <td className="py - 2 px - 4">Authentication credentials were missing or invalid.</td>;"
                    <td className="py - 2 px - 4"><code className="bg - zinc - 800 px - 1 py - 0.5 rounded">403 Forbidden</code></td>;""
                    <td className="py - 2 px - 4">The request is understood, but it has been refused or access is not allowed.</td>;"
                    <td className="py - 2 px - 4"><code className="bg - zinc - 800 px - 1 py - 0.5 rounded">404 Not Found</code></td>;""
                    <td className="py - 2 px - 4">The requested resource does not exist.</td>;"
                    <td className="py - 2 px - 4"><code className="bg - zinc - 800 px - 1 py - 0.5 rounded">422 Unprocessable Entity</code></td>;""
                    <td className="py - 2 px - 4">The request was well - formed but was unable to be followed due to semantic errors.</td>;"
                    <td className="py - 2 px - 4"><code className="bg - zinc - 800 px - 1 py - 0.5 rounded">429 Too Many Requests</code></td>;""
                    <td className="py - 2 px - 4">The request was rejected due to rate limiting.</td>;"
                    <td className="py - 2 px - 4"><code className="bg - zinc - 800 px - 1 py - 0.5 rounded">500 Internal Server Error</code></td>;""
                    <td className="py - 2 px - 4">Something went wrong on our end.</td>;"
              <h4 className="text - md font - semibold mt - 6 mb - 2">Error Response Format</h4>;""
                Error responses include a consistent JSON object with the following format: </p>;
    "code": "invalid_request";""
    "message": "The request was invalid";""

}`}

pr-12325
  description;
  note;
  params = [];
  codeExamples;
  responseExamples
}) {
  const [activeTab, setActiveTab] = useState("curl");

  responseExamples;
}) {;
  const [activeTab, setActiveTab] = useState("curl");function EndpointSection({ 
}) {"
  const [activeTab, setActiveTab] = useState("curl");"
function EndpointSection({ 
pr-12325
}) {"
  const [activeTab, setActiveTab] = useState("curl");"
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
  
              <h4 className="text-md font-semibold mt-6 mb-2">Rate Limiting</h4>;
              <p className="text-zinc-400 mb-4">;
                The Zion API implements rate limiting to protect our infrastructure and ensure fair usage.;
                Rate limits are applied on a per-API key basis. If you exceed the rate limits, you will receive ;
                a <code className="bg-zinc-800 px-1 py-0 && 0.5 rounded">429 Too Many Requests</code> response.;
language="json";
              />;
              <h4 className="text-md font-semibold mt-6 mb-2">Rate Limiting</h4>;
              <p className="text-zinc-400 mb-4">;
                The Zion API implements rate limiting to protect our infrastructure and ensure fair usage.;
                Rate limits are applied on a per-API key basis. If you exceed the rate limits, you will receive;
                a <code className="bg-zinc-800 px-1 py-0.5 rounded">429 Too Many Requests</code> response.;
              </p>;
                a <code className="bg-zinc-800 px-1 py-0 && 0.5 rounded">429 Too Many Requests</code> response.;              </p>;

              <p className="text-zinc-400 mb-2">;
                Rate limit information is included in the response headers: </p>;

              <ul className="list-disc pl-6 space-y-1 text-zinc-400">;
                <li><code className="bg-zinc-800 px-1 py-0 && 0.5 rounded">X-RateLimit-Limit</code>: Number of requests allowed in the time window</li>;
                <li><code className="bg-zinc-800 px-1 py-0 && 0.5 rounded">X-RateLimit-Remaining</code>: Number of requests remaining in the current window</li>;
                <li><code className="bg-zinc-800 px-1 py-0 && 0.5 rounded">X-RateLimit-Reset</code>: Unix timestamp when the rate limit resets</li>;
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
              </ul>;
                <li><code className="bg-zinc-800 px-1 py-0 && 0.5 rounded">X-RateLimit-Reset</code>: Unix timestamp when the rate limit resets</li>;              </ul>;
            </div>;
          </TabsContent>;
        </Tabs>;
      </CardContent>;
    </Card>;
  );
}

// Helper component for API endpoint documentation;
function EndpointSection(): any ({ ;
  method, ;
  endpoint, ;
  description;
  note;
  params = [];
;
// Helper component for API endpoint documentation;
function EndpointSection({;
  method,;
  endpoint,;
  description,;
  note,;
  params = [],;
  description;
  params = [];  description;
  note;
  params = [];
  codeExamples;
  responseExamples;
}) {;
  const [activeTab, setActiveTab] = useState("curl");

  return (

    <div className="border border-zinc-800 rounded-md">;
      <div className="p-4">;
        <div className="flex items-center">;
            }
          >
            {method}
          </Badge>;
          <span className="ml-2 font-mono text-sm text-white">{endpoint}</span>;
          {note && (;
            <Badge className="ml-auto bg-amber-800 text-amber-200 hover:bg-amber-800">;
              {note}
            </Badge>;
          )}

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
                language="json";
              />;
              <h4 className="text - md font - semibold mt - 6 mb-2">Rate Limiting</h4>;
              <p className="text - zinc - 400 mb-4">;
                The Zion API implements rate limiting to protect our infrastructure and ensure fair usage.;
                Rate limits are applied on a per - API key basis. If you exceed the rate limits, you will receive;
                a <code className="bg - zinc - 800 px - 1 py-0.5 rounded">429 Too Many Requests</code> response.;
              </p>;
              <p className="text - zinc - 400 mb-2">;
                Rate limit information is included in the response headers: </p>;
              <ul className="list - disc pl - 6 space - y-1 text - zinc-400">;
                <li><code className="bg - zinc - 800 px - 1 py-0.5 rounded">X - RateLimit - Limit</code>: Number of requests allowed in the time window</li>;
                <li><code className="bg - zinc - 800 px - 1 py-0.5 rounded">X - RateLimit - Remaining</code>: Number of requests remaining in the current window</li>;
                <li><code className="bg - zinc - 800 px - 1 py-0.5 rounded">X - RateLimit - Reset</code>: Unix timestamp when the rate limit resets</li>;
  responseExamples;)
}) {"
  const [activeTab, setActiveTab] = useState("curl"),"
  return ("
    <div className="border border-zinc-800 rounded-md">"
</CodeBlock>"
      <div className="p-4">"
</div>"
        <div className="flex items-center">"
</div>
          <Badge;"
            variant="outline""
            className={"
              method === 'GET'''
                ? "border-green-500 text-green-400 font-mono"""
                : method === 'POST'''
                ? "border-blue-500 text-blue-400 font-mono"""
                : method === 'PUT'''
                ? "border-yellow-500 text-yellow-400 font-mono"""
                : "border-red-500 text-red-400 font-mono"""
                language="json";"
              />;
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
    <div className="border border - zinc - 800 rounded-md">;
      <div className="p-4">;
        <div className="flex items-center">;
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
          <span className="ml-2 font-mono text-sm text-white">{endpoint}</span>;
          {note && (;
            <Badge className="ml-auto bg-amber-800 text-amber-200 hover:bg-amber-800">;
              {note}
            </Badge>)}
        </div>;
        <p className="mt - 2 text - zinc - 400">{description}</p>;
      </div>;

      {params.length > 0 && (
        <div className="border - t border - zinc - 800 p - 4">;
          <h4 className="font - medium mb - 2">Parameters</h4>;
          <table className="w - full">;
          >;      {params.length > 0 && (
        <div className="border - t border - zinc - 800 p-4">;
          <h4 className="font - medium mb-2">Parameters</h4>;
          <table className="w-full">;
            <thead>;
              <tr className="text - left border - b border - zinc - 800 text-sm">;
                <th className="pb-2">Name</th>;
                <th className="pb-2">Type</th>;
                <th className="pb-2">Description</th>;
              </tr>;
            </thead>;
            <tbody>;
              {params.map ((param, index) => (
                <tr key={index} className={index < params.length - 1 ? "border - b border - zinc - 800" : ""}>;
                  <td className="py - 2 font - mono text-sm">;
                    {param.name}

        </div>;

        <p className="mt-2 text-zinc-400">{description}</p>;
      </div>;

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

              ))}
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
              ))}
            </tbody>;
          </table>;
        </div>;
      )}

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
      {codeExamples && (
              ))}            </tbody>;
          </table>;
        </div>;
      )}      {codeExamples && (
        <div className="border-t border-zinc-800 p-4">
          <div className="flex items-center mb-2">
            <h4 className="font-medium">Request Example</h4>
            <div className="ml-auto flex border border-zinc-700 rounded-md overflow-hidden">
              {Object.keys(codeExamples).map((lang) => (
;
      {codeExamples && (;
        <div className="border-t border-zinc-800 p-4">;
          <div className="flex items-center mb-2">;
            <h4 className="font-medium">Request Example</h4>;
            <div className="ml-auto flex border border-zinc-700 rounded-md overflow-hidden">;
              {Object && Object.keys(codeExamples).map((lang) => (;
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
                <button
              {Object.keys(codeExamples).map((lang) => (                <button
                  key={lang}
                  className={`px-3 py-1 text-xs font-medium ${
                    activeTab === lang
                      ? "bg-zinc-700 text-white"
                      : "text-zinc-400 hover:bg-zinc-800"
                  }`}
                  onClick={() => setActiveTab(lang)}
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
      )}

      {responseExamples && (;
        <div className="border-t border-zinc-800 p-4">;
          <h4 className="font-medium mb-2">Response</h4>;
          <CodeBlock
            code={responseExamples && responseExamples.success}
            language="json"
{lang === "curl" ? "cURL" :lang === "javascript" ? "JavaScript" :"Python"}
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
  );
}    </div>;
  );
}
;

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
  responseExamples;)
  const [activeTab, setActiveTab] = useState("curl"),"
  return ("
    <div className="border border-zinc-800 rounded-md">"
      <div className="p-4">"
        <div className="flex items-center">"

    </Card>;"
    <div className="border border-zinc-800 rounded-md">;"
</div>"
      <div className="p-4">;"
</div>"
        <div className="flex items-center">;"
</div>
          </Badge>;"
          <span className="ml-2 font-mono text-sm text-white">{endpoint}</span>;""
            <Badge className="ml-auto bg-amber-800 text-amber-200 hover:bg-amber-800">;"
</Badge>
            </Badge>;"
    <div className="border border-zinc-800 rounded-md">;"
</div>"
      <div className="p-4">;"
</div>"
        <div className="flex items-center">;"
</div>
          <Badge;"
            variant="outline""
            className={"
              method === 'GET
                ? "border-green-500 text-green-400 font-mono"""
                : method === 'POST
                ? "border-blue-500 text-blue-400 font-mono"""
                : method === 'PUT
                ? "border-yellow-500 text-yellow-400 font-mono"""
                : "border-red-500 text-red-400 font-mono"""

              <h4 className="text-md font-semibold mt-6 mb-2">Rate Limiting</h4>;""
                a <code className="bg-zinc-800 px-1 py-0 && 0.5 rounded">429 Too Many Requests</code> response.;"
                Rate limit information is included in the response headers: </p>;"
              <ul className="list-disc pl-6 space-y-1 text-zinc-400">;"
</ul>"
                <li><code className="bg-zinc-800 px-1 py-0 && 0.5 rounded">X-RateLimit-Limit</code>: Number of requests allowed in the time window</li>;""
                <li><code className="bg-zinc-800 px-1 py-0 && 0.5 rounded">X-RateLimit-Remaining</code>: Number of requests remaining in the current window</li>;""
                <li><code className="bg-zinc-800 px-1 py-0 && 0.5 rounded">X-RateLimit-Reset</code>: Unix timestamp when the rate limit resets</li>;"
              </ul>;
    <div className="border border-zinc-800 rounded-md">;"
      <div className="p-4">;"
        <div className="flex items-center">;"
          <span className="ml-2 font-mono text-sm text-white">{endpoint}</span>;""
            <Badge className="ml-auto bg-amber-800 text-amber-200 hover:bg-amber-800">;"

                : "border-red-500 text-red-400 font-mono""
            }>;
              <h4 className="text - md font - semibold mt - 6 mb - 2">Rate Limiting</h4>;""
                a <code className="bg - zinc - 800 px - 1 py - 0.5 rounded">429 Too Many Requests</code> response.;"
              <ul className="list - disc pl - 6 space - y-1 text - zinc - 400">;"
                <li><code className="bg - zinc - 800 px - 1 py - 0.5 rounded">X - RateLimit - Limit</code>: Number of requests allowed in the time window</li>;""
                <li><code className="bg - zinc - 800 px - 1 py - 0.5 rounded">X - RateLimit - Remaining</code>: Number of requests remaining in the current window</li>;""
                <li><code className="bg - zinc - 800 px - 1 py - 0.5 rounded">X - RateLimit - Reset</code>: Unix timestamp when the rate limit resets</li>;"
    );"

              </ul>;
            </div>;
          </TabsContent>;
        </Tabs>;

      </CardContent>;)
    </Card>);"
    <div className="border border - zinc - 800 rounded - md">;"
      <div className="p - 4">;"
        <div className="flex items - center">;"
            variant="outline";"
              method === 'GET';
                ? "border - green - 500 text - green - 400 font - mono";""
                : method === 'POST';
                ? "border - blue - 500 text - blue - 400 font - mono";""
                : method === 'PUT';
                ? "border - yellow - 500 text - yellow - 400 font - mono";""
                : "border - red - 500 text - red - 400 font - mono";"
          >;


            )}
        </div>;"
        <p className="mt - 2 text - zinc - 400">{description}</p>;"
        <div className="border - t border - zinc - 800 p - 4">;"
          <h4 className="font - medium mb - 2">Parameters</h4>;""
          <table className="w - full">;"
              <tr className="text - left border - b border - zinc - 800 text - sm">;"
                <th className="pb - 2">Name</th>;""
                <th className="pb - 2">Type</th>;""
                <th className="pb - 2">Description</th>;"
                <tr key={index} className={index < params.length - 1 ? "border - b border - zinc - 800" : ""}>;"
                  <td className="py - 2 font - mono text - sm">;"
</td>
        <p className="mt-2 text-zinc-400">{description}</p>;"
        <div className="border-t border-zinc-800 p-4">;"
          <h4 className="font-medium mb-2">Parameters</h4>;""
          <table className="w-full">;"
              <tr className="text-left border-b border-zinc-800 text-sm">;"
                <th className="pb-2">Name</th>;""
                <th className="pb-2">Type</th>;""
                <th className="pb-2">Description</th>;"
                <tr key={index} className={index < params && params.length - 1 ? "border-b border-zinc-800" : ""}>;"
                  <td className="py-2 font-mono text-sm">;"
</td>"
                    {param && param.required && <span className="text-red-500">*</span>}"
                  </td>;"
                  <td className="py-2 text-sm text-zinc-400">{param && param.type}</td>;""
                  <td className="py-2 text-sm text-zinc-400">{param && param.description}</td>;"
          </table>;
        <div className="border-t border-zinc-800 p-4">"
          <div className="flex items-center mb-2">"
            <h4 className="font-medium">Request Example</h4>""
            <div className="ml-auto flex border border-zinc-700 rounded-md overflow-hidden">"
          <div className="flex items-center mb-2">;"
            <h4 className="font-medium">Request Example</h4>;""
            <div className="ml-auto flex border border-zinc-700 rounded-md overflow-hidden">;"
                <button;
                  key={lang}`;
                  className={`px-3 py-1 text-xs font-medium ${;
                    activeTab === lang ;"
                      ? "bg-zinc-700 text-white" ;""
                      :"text-zinc-400 hover:bg-zinc-800";"`;
                  onClick={() => setActiveTab(lang)}
</button>
          <CodeBlock;
            code={codeExamples[activeTab]}"
            language={activeTab === "curl" ? "bash" : activeTab}"

                  className={`px-3 py-1 text-xs font-medium ${
                    activeTab === lang;"
                      ? "bg-zinc-700 text-white"""
                      : "text-zinc-400 hover:bg-zinc-800""`;
                </button>;

          <h4 className="font-medium mb-2">Response</h4>;"
            code={responseExamples && responseExamples.success}"

            language="json""

          />;
</CodeBlock>
        </div>;

    </div>;"
                    {param.required && <span className="text - red - 500">*</span>}"
                  <td className="py - 2 text - sm text - zinc - 400">{param.type}</td>;""
                  <td className="py - 2 text - sm text - zinc - 400">{param.description}</td>;"
                </tr>))}
        </div>)}"
          <div className="flex items - center mb - 2">;"
            <h4 className="font - medium">Request Example</h4>;""
            <div className="ml - auto flex border border - zinc - 700 rounded - md overflow - hidden">;"
                  className={`px - 3 py - 1 text - xs font - medium ${
                    active_tab === lang;"
                      ? "bg - zinc - 700 text - white";""
                      : "text - zinc - 400 hover:bg - zinc - 800";"`;
                  on_click={() => setActiveTab (lang)}
                </button>))}
            code={code_examples[active_tab]}"
            language={active_tab === "curl" ? "bash" : active_tab}"

          <h4 className="font - medium mb - 2">Response</h4>;"
            code={response_examples.success}"

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

  ),;}
;
 import CodeBlock from "./CodeBlock";
<CardHeader> <CardTitle className="text-xl flex items-center" > <BookOpen className="mr-2" size= {
  20 
}/> API Documentation </CardTitle> <CardDescription className="text-zinc-400" > Reference documentation for integrating with the Zion Marketplace API. </CardDescription> </CardHeader> <CardContent> <Alert className="bg-blue-900/30 border-blue-800 mb-6" > <Terminal className="h-4 w-4" /> <AlertDescription> Make sure to include your API key in all requests as a Bearer token in the Authorization header. </AlertDescription> </Alert> <Tabs defaultValue="jobs" className="space-y-4" > <TabsList className="bg-zinc-800 border-zinc-700" > <TabsTrigger value="jobs" >Jobs</TabsTrigger> <TabsTrigger value="talent" >Talent</TabsTrigger> <TabsTrigger value="quotes" >Quotes</TabsTrigger> <TabsTrigger value="webhooks" >Webhooks</TabsTrigger> <TabsTrigger value="errors" >Errors</TabsTrigger> </TabsList> <TabsContent value="jobs" className="space-y-6" > <EndpointSection python: `import requests headers = {
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json' 
<CardHeader> <CardTitle className="text-xl flex items-center" > <BookOpen className="mr-2" size= {"
"`;
}/> API Documentation  <CardDescription className="text-zinc-400" > Reference documentation for integrating with the Zion Marketplace API.   <CardContent> <Alert className="bg-blue-900/30 border-blue-800 mb-6" > <Terminal className="h-4 w-4" /> <AlertDescription> Make sure to include your API key in all requests as a Bearer token in the Authorization header.   <Tabs defaultValue="jobs" className="space-y-4" > <TabsList className="bg-zinc-800 border-zinc-700" > <TabsTrigger value="jobs" >Jobs <TabsTrigger value="talent" >Talent <TabsTrigger value="quotes" >Quotes <TabsTrigger value="webhooks" >Webhooks <TabsTrigger value="errors" >Errors  <TabsContent value="jobs" className="space-y-6" > <EndpointSection python: `import requests headers = {""
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json
}response = requests.get ('https: //api.ziontechgroup.com/v1/jobs';
params= {
  'limit': 10, 'category': 'development
};
}responseExamples= {
  {`;
  success: ` {
  "data" : [ {"`;
}/> <EndpointSection const response = await fetch (\`https://api.ziontechgroup.com/v1/jobs/\$ {
  jobId;`;
}\`, {"
  method: 'GET';',
python: `import requests headers = {
}job id;
}';`;
headers=headers) data = response.json () print (data) ` 
  
}/> <EndpointSection deadline: '2025-06-30T23:59:59Z
}/>  <TabsContent value="talent" className="space-y-6" > <EndpointSection python: `import requests headers = {"
}/> <EndpointSection const response = await fetch (\`https://api.ziontechgroup.com/v1/talent/\$ {
  talentId;`;
}talent id;
  success: ` {]
}/>  <TabsContent value="quotes" className="space-y-6" > <EndpointSection python: `import requests import json headers = {"
}/> <EndpointSection python: `import requests headers = {"
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json`;
}headers=headers) data = response.json () print (data) ` 
}/>  <TabsContent value="webhooks" className="space-y-6"> <div className="prose prose-invert max-w-none"> <h3 className="text-lg font-semibold mb-2">Webhook Events</h3> <p className="text-zinc-400 mb-4"> The Zion API can send webhook notifications when certain events occur in your account. You can configure webhooks in the Webhooks tab of the Developer Dashboard. </p> <h4 className="text-md font-semibold mt-6 mb-2">Authentication</h4> <p className="text-zinc-400 mb-4"> When you create a webhook, you can optionally provide a secret key. If a secret is provided, each webhook request will include a signature in the <code className="bg-zinc-800 px-1 py-0.5 rounded" >X-Zion-Signature</code> header. This signature is an HMAC SHA-256 hash of the request body using your webhook secret as the key. </p> <CodeBlock //Respond to acknowledge receipt res.status (200) .send ('Webhook received');
}/> <h4 className="text-md font-semibold mt-6 mb-2">Event Types</h4> <table className="w-full border-collapse mt-2"> <thead> <tr className="border-b border-zinc-800"> <th className="py-2 px-4 text-left">Event Type</th> <th className="py-2 px-4 text-left">Description</th> </tr> </thead> <tbody> <tr className="border-b border-zinc-800"> <td className="py-2 px-4 font-mono text-sm">new application</td> <td className="py-2 px-4">When a talent applies to one of your jobs</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4 font-mono text-sm">quote received</td> <td className="py-2 px-4">When you receive a quote from talent</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4 font-mono text-sm">milestone approved</td> <td className="py-2 px-4">When a project milestone is approved</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4 font-mono text-sm">talent hired</td> <td className="py-2 px-4">When you hire talent for a project</td> </tr> </tbody> </table> <h4 className="text-md font-semibold mt-6 mb-2">Sample Payloads</h4> <p className="text-zinc-400 mb-2"> Here's an example of a <code className="bg-zinc-800 px-1 py-0.5 rounded" >new application</code> webhook payload: </p> <CodeBlock /> </div>  <TabsContent value="errors" className="space-y-6"> <div className="prose prose-invert max-w-none"> <h3 className="text-lg font-semibold mb-2">Error Responses</h3> <p className="text-zinc-400 mb-4"> The Zion API uses conventional HTTP status codes to indicate the success or failure of an API request. In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error with the provided information, and codes in the 5xx range indicate an error with our servers. </p> <table className="w-full border-collapse mt-4"> <thead> <tr className="border-b border-zinc-800"> <th className="py-2 px-4 text-left">Status Code</th> <th className="py-2 px-4 text-left">Description</th> </tr> </thead> <tbody> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">200 OK</code></td> <td className="py-2 px-4">The request was successful.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">201 Created</code></td> <td className="py-2 px-4">The resource was successfully created.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">400 Bad Request</code></td> <td className="py-2 px-4">The request was invalid or cannot be otherwise served.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">401 Unauthorized</code></td> <td className="py-2 px-4">Authentication credentials were missing or invalid.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">403 Forbidden</code></td> <td className="py-2 px-4">The request is understood, but it has been refused or access is not allowed.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">404 Not Found</code></td> <td className="py-2 px-4">The requested resource does not exist.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">422 Unprocessable Entity</code></td> <td className="py-2 px-4">The request was well-formed but was unable to be followed due to semantic errors.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">429 Too Many Requests</code></td> <td className="py-2 px-4">The request was rejected due to rate limiting.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">500 Internal Server Error</code></td> <td className="py-2 px-4">Something went wrong on our end.</td> </tr> </tbody> </table> <h4 className="text-md font-semibold mt-6 mb-2">Error Response Format</h4> <p className="text-zinc-400 mb-2" > Error responses include a consistent JSON object with the following format: </p> <CodeBlock ]"
}` "
}language="json" /> <h4 className="text-md font-semibold mt-6 mb-2">Rate Limiting</h4> <p className="text-zinc-400 mb-4"> The Zion API implements rate limiting to protect our infrastructure and ensure fair usage. Rate limits are applied on a per-API key basis. If you exceed the rate limits, you will receive a <code className="bg-zinc-800 px-1 py-0.5 rounded">429 Too Many Requests</code> response. </p> <p className="text-zinc-400 mb-2"> Rate limit information is included in the response headers: </p> <ul className="list-disc pl-6 space-y-1 text-zinc-400"> <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Limit</code>: Number of requests allowed in the time window</li> <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Remaining</code>: Number of requests remaining in the current window</li> <li><code className="bg-zinc-800 px-1 py-0.5 rounded" >X-RateLimit-Reset</code>: Unix timestamp when the rate limit resets</li> </ul> </div>    )""
}//Helper component for API endpoint documentation > <Badge variant="outline" className= {""
  method === 'GET'? "border-green-500 text-green-400 font-mono" : method === 'POST'? "border-blue-500 text-blue-400 font-mono" : method === 'PUT' > {

} <span className="ml-2 font-mono text-sm text-white"> {"
</span>
}</span> {"
  note && (<Badge className="ml-auto bg-amber-800 text-amber-200 hover:bg-amber-800"> {"
}) "
}</div> <p className="mt-2 text-zinc-400"> {"
}</p> </div> {"
  params.length > 0 && (<div className="border-t border-zinc-800 p-4"> <h4 className="font-medium mb-2">Parameters</h4> <table className="w-full"> <thead> <tr className="text-left border-b border-zinc-800 text-sm"> <th className="pb-2">Name</th> <th className="pb-2">Type</th> <th className="pb-2">Description</th> </tr> </thead> <tbody> </tr>) )"
}</tbody> </table> </div>) 
  activeTab === lang </button>) ) 
}</div> </div> <CodeBlock /> </div>) 

}<CodeBlock code= {
  responseExamples.success;"
}language="json" /> </div>)"

}</div>) 
    </div>;"`;
pr-12325
    </div>
    </div>;"

;
    </div>;
  );
}
;
