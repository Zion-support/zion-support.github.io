
<<<<<<< HEAD



=======
export function ApiDocumentation() {

export /**
 * ApiDocumentation - Function description
 */
function ApiDocumentation() {

          Reference documentation for integrating with the Zion Marketplace API.;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;

          Reference documentation for integrating with the Zion Marketplace API.;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;

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

import { Badge } from "@/components/ui/badge";
import CodeBlock from "./CodeBlock";

export function ApiDocumentation() {
  return (

          <Terminal className="h-4 w-4" />;
import { useState } from './react';'
import { BookOpen, Code, Copy, Terminal } from './lucide-react';'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';'
import { Alert, AlertDescription } from '@/components / ui / alert';'
import { Badge } from '@/components / ui / badge';'
import CodeBlock from "./CodeBlock";"
export /**
 * ApiDocumentation - Function description
 */
function ApiDocumentation() {
}
return (;
    <Card className="bg - zinc - 900 border - zinc - 800 text-white">;"
      <CardHeader>;
        <CardTitle className="text - xl flex items-center">;"
          <BookOpen className="mr-2" size={20} /> API Documentation;"
        </CardTitle>;
        <CardDescription className="text - zinc-400">;"
          Reference documentation for integrating with the Zion Marketplace API.;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <Alert className="bg - blue - 900 / 30 border - blue - 800 mb-6">;"
          <Terminal className="h - 4 w-4" />;"
)
data = response.json()
print(data)``import { useState } from "react",;"
import { BookOpen, Code, Copy, Terminal } from "lucide-react",;"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;"
import { Alert, AlertDescription } from "@/components/ui/alert",;"
import { Badge } from "@/components/ui/badge",;"
import CodeBlock from "CodeBlock";"
export function ApiDocumentation() {;
  }
  return (;
    <Card className="bg-zinc-900 border-zinc-800 text-white">;"
      <CardHeader>;
        <CardTitle className="text-xl flex items-center">;"
          <BookOpen className="mr-2" size={20} /> API Documentation;"
        </CardTitle>;
        <CardDescription className="text-zinc-400">;"
          Reference documentation for integrating with the Zion Marketplace API.;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <Alert className="bg-blue-900/30 border-blue-800 mb-6">;"
          <Terminal className="h-4 w-4" />;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <AlertDescription>;
            Make sure to include your API key in all requests as a Bearer token in the Authorization header.;
          </AlertDescription>;
        </Alert>;
<<<<<<< HEAD


=======
            <TabsTrigger value="jobs">Jobs</TabsTrigger>;
            <TabsTrigger value="talent">Talent</TabsTrigger>;
            <TabsTrigger value="quotes">Quotes</TabsTrigger>;
            <TabsTrigger value="webhooks">Webhooks</TabsTrigger>;
            <TabsTrigger value="errors">Errors</TabsTrigger>;
          </TabsList>;
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
>>>>>>> origin/cursor/delete-old-data-records-6bba

    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'

  }

<<<<<<< HEAD

                python: `import requests
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'

    'https: //api.ziontechgroup.com/v1/jobs',;
    params={'limit': 10, 'category': 'development'};


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    headers=headers

)
data = response.json()
print(data)`

<<<<<<< HEAD
import { useState } from "react",;
import { BookOpen, Code, Copy, Terminal } from "lucide-react",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Alert, AlertDescription } from "@/components/ui/alert",;
import { Badge } from "@/components/ui/badge",;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import CodeBlock from "./CodeBlock",;
export function ApiDocumentation() { return null; }
          <BookOpen className="mr-2" size={20} /> API Documentation;
        </CardTitle>;"
        <CardDescription className="text-zinc-400">;
          Reference documentation for integrating with the Zion Marketplace API.;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;"
        <Alert className="bg-blue-900/30 border-blue-800 mb-6">;"
          <Terminal className="h-4 w-4" />;
          <AlertDescription>;
            Make sure to include your API key in all requests as a Bearer token in the Authorization header.;
          </AlertDescription>;
        </Alert>;"
        <Tabs defaultValue="jobs" className="space-y-4">;"
          <TabsList className="bg-zinc-800 border-zinc-700">;"
            <TabsTrigger value="jobs">Jobs</TabsTrigger>;"
            <TabsTrigger value="talent">Talent</TabsTrigger>;"
            <TabsTrigger value="quotes">Quotes</TabsTrigger>;"
            <TabsTrigger value="webhooks">Webhooks</TabsTrigger>;"
            <TabsTrigger value="errors">Errors</TabsTrigger>;
          </TabsList>;"
          <TabsContent value="jobs" className="space-y-6">;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

            <EndpointSection;"
              method="GET";"
              endpoint="/api / jobs";"
              description="List all available jobs with optional filtering.";"
              note="";
              params={[;"
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" },"
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },"
                { name: "category", type: "string", description: "Filter by job category" },"
                { name: "skills", type: "string[]", description: "Filter by required skills (comma - separated)" },
            <EndpointSection"
              method="GET""
              endpoint="/api/jobs""
              description="List all available jobs with optional filtering.""
              note=""
              params={["
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" }"
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" }"
                { name: "category", type: "string", description: "Filter by job category" }"
                { name: "skills", type: "string[]", description: "Filter by required skills (comma-separated)" }"
                { name: "status", type: "string", description: "Filter by job status (new, active, closed)" }
              ]}
              codeExamples={{"`
                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/jobs?limit=10&category=development" \\"
  -H "Authorization: Bearer YOUR_API_KEY" \\

  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
  }

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  -H "Content-Type: application/json"`,

                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/jobs?limit=10&category=development', {

  method: 'GET',
  headers: {'
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
<<<<<<< HEAD

  }
})


                python: `import requests

response = requests && requests.get(
    'https: //api && api.ziontechgroup.com/v1/jobs',
    params={'limit': 10, 'category': 'development'}

    headers=headers
)

=======
  }

    headers=headers

)
data = response.json()
print(data)`


import CodeBlock from "./CodeBlock",;
export function ApiDocumentation() { return null; }
          <BookOpen className="mr-2" size={20} /> API Documentation;
        </CardTitle>;"
        <CardDescription className="text-zinc-400">;
          Reference documentation for integrating with the Zion Marketplace API.;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;"
        <Alert className="bg-blue-900/30 border-blue-800 mb-6">;"
          <Terminal className="h-4 w-4" />;
          <AlertDescription>;
            Make sure to include your API key in all requests as a Bearer token in the Authorization header.;
          </AlertDescription>;
        </Alert>;"
        <Tabs defaultValue="jobs" className="space-y-4">;"
          <TabsList className="bg-zinc-800 border-zinc-700">;"
            <TabsTrigger value="jobs">Jobs</TabsTrigger>;"
            <TabsTrigger value="talent">Talent</TabsTrigger>;"
            <TabsTrigger value="quotes">Quotes</TabsTrigger>;"
            <TabsTrigger value="webhooks">Webhooks</TabsTrigger>;"
            <TabsTrigger value="errors">Errors</TabsTrigger>;"
          </TabsList>;
          <TabsContent value="jobs" className="space-y-6">;"
                "javascript": `const response = await fetch('"https"://api && api.ziontechgroup.com/v1/jobs?limit=10&category=development', {'
  }
  "method": 'GET','
  "headers": {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json''
  }
})
const data = await response && response.json();
console && console.log(data),``                "python": `import requests});`                "python": `import requests`;
const data = await response.json ();
console.log (data), `;`                "python": `import requests;`headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';'
}

response = requests && requests.get(
    '"https": //api && api.ziontechgroup.com/v1/jobs','
    params={'limit': 10, 'category': 'development'}'
    headers=headers
)
>>>>>>> origin/cursor/delete-old-data-records-6bba

data = response && response.json()
print(data)`headers = {`    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';'
}
print(data)``response = requests.get (
    '"https": //api.ziontechgroup.com / v1 / jobs','
    params={'limit': 10, 'category': 'development'}'
    headers = headers);
data = response.json ();
print (data)`;              }`              response_examples={
                }
                "success": `{`  "data": [;"
    {  "headers": {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';'
  }
  -H "Content-"Type": application/json"`,`                "javascript": `const jobId = 'job_abc123','
const response = await fetch(\`"https"://api && api.ziontechgroup.com/v1/jobs/\${jobId}\`, {`  }
  "method": 'GET','
  "headers": {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json''
  }
})
const data = await response && response.json();
console && console.log(data),``  "headers": {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';'
  }
});
                "python": `import requests`;
const data = await response.json ();
console.log (data), `;`                "python": `import requests;`headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';'
}

<<<<<<< HEAD

=======
data = response && response.json()}),;
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
console.log (data), `;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                python: `import requests;

headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
}

headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
}
response = requests && requests.get(
    'https: //api && api.ziontechgroup.com/v1/jobs',

    params={'limit': 10, 'category': 'development'}
    headers=headers;
)

print(data)`

    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
}`
print(data)`

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
const data = await response.json(),;`
// // // console.log(data),`,;`
                python: `import requests;
headers = {;'
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
}
;
response = requests.get(;'
    'https: //api.ziontechgroup.com/v1/jobs',;'
    params={'limit': 10, 'category': 'development'},;
    headers=headers;
);
data = response.json();`
print(data)`;

              }}
              response_examples={{}`
                success: `{"
  "data": [;

<<<<<<< HEAD
    {
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      "id": "job_abc123"
      "title": "Senior React Developer"
      "description": "We need an experienced React developer..."
      "category": "development",

      "skills": ["react", "typescript", "node && node.js"]

<<<<<<< HEAD
      "budget": {
      "status": "active"
      "client_id": "user_xyz789"

=======
"
>>>>>>> origin/cursor/delete-old-data-records-6bba
      "created_at": "2025-05-15T10:30:00Z"
    }
    // More jobs...
  ]

<<<<<<< HEAD


      "skills": ["react", "typescript", "node.js"],



=======

"
      "id": "job_abc123","
      "title": "Senior React Developer","
      "description": "We need an experienced React developer...","
      "category": "development","

      "skills": ["react", "typescript", "node.js"],
>>>>>>> origin/cursor/delete-old-data-records-6bba
      "budget": {
        "min": 5000,
        "max": 10000,

        "currency": "USD"

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      },
      "status": "active",
      "client_id": "user_xyz789",
      "created_at": "2025-05-15T10:30:00Z"
    },
    // More jobs...
<<<<<<< HEAD

=======
  "meta": {
    "total": 42,
    "page": 1,
    "limit": 10
  }
}`
              }}
            />

"
      "budget": {"
      "created_at": "2025-05-15T10:30:00Z"
    }
    // More jobs...

        "currency": "USD";
      }"
      "status": "active";"
      "client_id": "user_xyz789";"
      "created_at": "2025 - 05 - 15T10:30:00Z";
    }
    // More jobs...;
  ];"
  "meta": {"
    "total": 42;"
    "page": 1;"
    "limit": 10;

}`;
              }}


            <EndpointSection"
              method="GET""
              endpoint="/api/jobs/:id""
              description="Get detailed information about a specific job.""

              note=""
              params={["
                { name: "id", type: "string", description: "The job ID", required: true }
              ]}


  headers: {

    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }

}),

const data = await response.json(),`
// // // console.log(data),`,


            />;
            <EndpointSection;"
              method="GET";"
              endpoint="/api / jobs/:id";

"
              description="Get detailed information about a specific job.";"
              note="";
              params={[;"
                { name: "id", type: "string", description: "The job ID", required: true }
              ]}

"`
  -H "Content-Type: application/json"`,'`
                javascript: `const jobId = 'job_abc123',`
const response = await fetch(\`https://api && api.ziontechgroup.com/v1/jobs/\${jobId}\`, {'

  method: 'GET',

    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
  }


});
  -H "Content-Type: application/json"`,
                javascript: `const jobId = 'job_abc123',
const response = await fetch(\`https://api && api.ziontechgroup.com/v1/jobs/\${jobId}\`, {
  method: 'GET',
  headers: {

    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }
})

const data = await response && response.json()`
console && console.log(data),`

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

print(data)`
>>>>>>> origin/cursor/delete-old-data-records-6bba

job_id = 'job_abc123';
response = requests.get (
    f'https://api.ziontechgroup.com / v1 / jobs/{job_id}';
    headers = headers);
data = response.json ();
print (data)`;

<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

}),;
const data = await response.json(),;
// // // console.log(data),`,;`                "python": `import requests;`headers = {;
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';'
}
;
job_id = 'job_abc123';'
response = requests.get(;
    f'"https"://api.ziontechgroup.com/v1/jobs/{job_id}',;'
    headers=headers;
);

<<<<<<< HEAD
data = response.json();
print(data)`;



=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
              }}
              response_examples={{
                success: `{
  "data": {

    "id": "job_abc123"
    "title": "Senior React Developer"
    "description": "We need an experienced React developer..."
    "category": "development",

    "skills": ["react", "typescript", "node && node.js"]
<<<<<<< HEAD

    "budget": {
    "status": "active"
    "client_id": "user_xyz789"
    "created_at": "2025-05-15T10: 30:00Z"
    "deadline": "2025-06-30T23:59:59Z",


    "skills": ["react", "typescript", "node.js"],



=======

"
    "status": "active""
    "client_id": "user_xyz789""
    "created_at": "2025-05-15T10: 30:00Z""
    "deadline": "2025-06-30T23:59:59Z",

"
    "id": "job_abc123","
    "title": "Senior React Developer","
    "description": "We need an experienced React developer...","
    "category": "development","

    "skills": ["react", "typescript", "node.js"],
>>>>>>> origin/cursor/delete-old-data-records-6bba
    "budget": {
      "min": 5000,
      "max": 10000,

      "currency": "USD"

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    },
    "status": "active",
    "client_id": "user_xyz789",
    "created_at": "2025-05-15T10:30:00Z",

    "deadline": "2025-06-30T23:59:59Z",
<<<<<<< HEAD


    "application_count": 12

=======

    "application_count": 12


>>>>>>> origin/cursor/delete-old-data-records-6bba
      "min": 5000;
      "max": 10000;

      "currency": "USD";
    }"
    "status": "active";"
    "client_id": "user_xyz789";"
    "created_at": "2025 - 05 - 15T10: 30:00Z";"
    "deadline": "2025 - 06 - 30T23:59:59Z","
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

            <EndpointSection
              method="POST"
              endpoint="/api/jobs"
              description="Create a new job listing."
              note="Requires jobs:write scope"
              params={[


              note="Requires jobs:write scope";
              params={[;



              code_examples={{
                curl: `curl -X POST "https://api.ziontechgroup.com / v1 / jobs" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;

  -H "Content - Type: application / json" \\;



    "title": "Senior React Developer"
    "description": "We need an experienced React developer..."
    "category": "development",
    "skills": ["react", "typescript", "node && node.js"]


    "budget": {


    "title": "Senior React Developer",
    "description": "We need an experienced React developer...",
    "category": "development",
    "skills": ["react", "typescript", "node.js"],



    "budget": {
      "min": 5000,
      "max": 10000,

      "currency": "USD"


  });

});
;
const data = await response.json ();
console.log (data), `;
                python: `import requests;
import json;
=======


            />;
            <EndpointSection;"
              method="POST";"
              endpoint="/api / jobs";"
              description="Create a new job listing.";"

    }
    },
    "deadline": "2025-06-30T23:59:59Z"
  }'`,
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/jobs', {
  method: 'POST'
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
    }
    "description": 'We need an experienced React developer...','
    "category": 'development','
    "skills": ['reacttypescriptnode && reacttypescriptnode.js'],'
    "budget": {
                }
                "python": `import requests`import json
    }
    "deadline": '2025 - 06 - "30T23":"59":59Z';'
  });
});                "python": `import requests`import json,
>>>>>>> origin/cursor/delete-old-data-records-6bba
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json''
}
<<<<<<< HEAD
payload = {
    'title': 'Senior React Developerdescription': 'We need an experienced React developer...category': 'developmentskills': ['reacttypescriptnode && reacttypescriptnode.js']




=======
payload = {;
    'title': 'Senior React Developerdescription': 'We need an experienced React developer...category': 'developmentskills': ['reacttypescriptnode.js'];'
    'budget': {'
}
response = requests && requests.post(
    '"https": //api && api.ziontechgroup.com/v1/jobs''
    headers=headers,
    data=json && json.dumps(payload)
)


    }
    deadline: '2025-06-30T23:59:59Z'
  })
});
const data = await response.json();
console.log(data),`;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    },

    deadline: '2025-06-30T23:59:59Z'
  })
}),

const data = await response.json(),`
// // // console.log(data),`,

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                python: `import requests

import json
headers = {

<<<<<<< HEAD

    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'

payload = {;


response = requests && requests.post(

    'https: //api && api.ziontechgroup.com/v1/jobs'

=======
    'budget': {


response = requests && requests.post(
    'https: //api && api.ziontechgroup.com/v1/jobs'
>>>>>>> origin/cursor/delete-old-data-records-6bba
    headers=headers,
    data=json && json.dumps(payload)
)

<<<<<<< HEAD
    }
    'deadline': '2025-06-30T23:59:59Z'
}
response = requests.post(
    'https: //api.ziontechgroup.com/v1/jobs';
    headers=headers
    data=json.dumps(payload)
)
data = response.json()
print(data)`
            />;
            <EndpointSection;
              method="POST";
              endpoint="/api/jobs";
              description="Create a new job listing.";
              note="Requires jobs:write scope";
=======
;
data = response && response.json()
;
const data = await response.json ();
console.log (data), `;`                "python": `import requests;`import json;
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';'
}
payload = {
    'title': 'Senior React Developerdescription': 'We need an experienced React developer...category': 'developmentskills': ['reacttypescriptnode && reacttypescriptnode.js']'
    'budget': {'
}
print(data)`` />;            <EndpointSection;
              method="POST";"
              endpoint="/api/jobs";"
              description="Create a new job listing.";"
              note="Requires "jobs":write scope";"
>>>>>>> origin/cursor/delete-old-data-records-6bba
              params={[;
                { "name": "title", "type": "string", "description": "Job title", "required": true },;"
                { "name": "description", "type": "string", "description": "Detailed job description", "required": true },;"
                { "name": "category", "type": "string", "description": "Job category", "required": true },;"
                { "name": "skills", "type": "string[]", "description": "Required skills", "required": true },;"
                { "name": "budget.min", "type": "number", "description": "Minimum budget" },;"
                { "name": "budget.max", "type": "number", "description": "Maximum budget" },;"
                { "name": "budget.currency", "type": "string", "description": "Currency code ("default": USD)" },;"
                { "name": "deadline", "type": "string", "description": "Job deadline (ISO date string)" }"
              ]}
              codeExamples={;
                }
                "curl": `curl -X POST ""https"://api.ziontechgroup.com/v1/jobs" \\;"
  -H ""Authorization": Bearer YOUR_API_KEY" \\;"
  -H "Content-"Type": application/json" \\;"
  -d '{;'
    "title": "Senior React Developer",;"
    "description": "We need an experienced React developer...",;"
    "category": "development",;"
    "skills": ["react", "typescript", "node.js"],;"
    "budget": {;"
      "min": 5000,;"
      "max": 10000,;"
      "currency": "USD";"
    },;
    "deadline": "2025-06-"30T23":"59":59Z";"
  }'`,;`                "javascript": `const response = await fetch('"https"://api.ziontechgroup.com/v1/jobs', {;'
  }
  "method": 'POST',;'
  "headers": {;
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';'
  },;
  "body": JSON.stringify({;
    }
    "title": 'Senior React Developer',,'
  "description": 'We need an experienced React developer...',;'
    "category": 'development',;'
    "skills": ['reacttypescriptnode.js'],;'
    "budget": {;
      }
      "min": 5000,;
      "max": 10000,;
      "currency": 'USD';'
    },;
    "deadline": '2025-06-"30T23":"59":59Z';'
  });
}),;
const data = await response.json(),;
// // // console.log(data),`,;`                "python": `import requests;`import json;
headers = {;
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';'
}
;
payload = {;
<<<<<<< HEAD
    'title': 'Senior React Developerdescription': 'We need an experienced React developer...category': 'developmentskills': ['reacttypescriptnode.js'],;
    'budget': {;
        'min': 5000,;
        'max': 10000,;
=======
    'title': 'Senior React Developerdescription': 'We need an experienced React developer...category': 'developmentskills': ['reacttypescriptnode.js'],;'
    'budget': {;'
        'min': 5000,;'
        'max': 10000,;response = requests.post ('
    '"https": //api.ziontechgroup.com / v1 / jobs';'
    }
    headers = headers,
    data = json.dumps (payload));
data = response.json ();
print (data)`;`    '"https": //api.ziontechgroup.com/v1/talent',;'
    params={'skills': 'react,typescript'};'
console.log (data), `;`                "python": `import requests;`import json;
headers = {

}
response = requests.get(;

    headers=headers;
);
data = response.json();
print(data)`;`              }}
              response_examples={{

  }
});
                "python": `import requests`;

print(data)`

    'deadline': '2025 - 06 - 30T23:59:59Z';
}
        'currency': 'USD';
    },;
    'deadline': '2025-06-30T23:59:59Z';
}
;

    'https://api.ziontechgroup.com/v1/jobs',;
    headers=headers,;
    data=json.dumps(payload);
);

print(data)`;

    'https: //api.ziontechgroup.com / v1 / jobs';
    headers = headers,
    data = json.dumps (payload));
data = response.json ();`
print (data)`;


              }}
              response_examples={{
                success: `{
  "data": {


              }}
              response_examples={{}`
                success: `{"
  "data": {}
"
    "id": "job_def456""
    "title": "Senior React Developer""
    "description": "We need an experienced React developer...""
    "category": "development","
    "skills": ["react", "typescript", "node && node.js"]

"
    "id": "job_def456","
    "title": "Senior React Developer","
    "description": "We need an experienced React developer...","
    "category": "development","

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
      "min": 5000;
      "max": 10000;

      "currency": "USD";
    }"
    "status": "new";"
    "client_id": "user_xyz789";"
    "created_at": "2025 - 05 - 16T14: 22:10Z","
    "deadline": "2025 - 06 - 30T23:59:59Z";

  }`
}`;
              }}

            <EndpointSection"
              method="GET""
              endpoint="/api/talent""
              description="List talent profiles with optional filtering.""

              note=""
              params={["
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" }"
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" }"
                { name: "skills", type: "string[]", description: "Filter by skills (comma-separated)" }"
                { name: "availability", type: "string", description: "Filter by availability status" }
              ]}

              codeExamples={{}
  headers: {'
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }

"`
                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/talent?skills=react,typescript" \\"
  -H "Authorization: Bearer YOUR_API_KEY" \\
  headers: {'

    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }

});
const data = await response.json();
console.log(data),`;
});
const data = await response.json();
console.log(data),`;
}),

const data = await response.json(),`
// // // console.log(data),`,

`
                python: `import requests;
headers = {'
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'

'
    'https: //api.ziontechgroup.com/v1/talent',;'
    params={'skills': 'react,typescript'};

}
response = requests.get(
    'https: //api.ziontechgroup.com/v1/talent'
    params={'skills': 'react,typescript'}
    'https: //api.ziontechgroup.com/v1/talent',;
    params={'skills': 'react,typescript'};

    headers=headers
)
data = response.json()
print(data)``}),;
const data = await response.json(),;
// // // console.log(data),`,;`                "python": `import requests;`headers = {;
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';'
            />;
          </TabsContent>;"
          <TabsContent value="talent" className="space - y-6">;
            <EndpointSection;"
              method="GET";"
              endpoint="/api / talent";"
              description="List talent profiles with optional filtering.";"
              note="";
              params={[;"
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" },"
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },"
                { name: "skills", type: "string[]", description: "Filter by skills (comma - separated)" },"
                { name: "availability", type: "string", description: "Filter by availability status" }
              ]}
              code_examples={{"`
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / talent?skills = react, typescript" \\;"
  -H "Authorization: Bearer YOUR_API_KEY" \\;"`
  -H "Content - Type: application / json"`,'`
                javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / talent?skills = react, typescript', {'
  method: 'GET',


    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
  }
"`
  -H "Content-Type: application/json"`,'`
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/talent?skills=react,typescript', {'
>>>>>>> origin/cursor/delete-old-data-records-6bba

  method: 'GET',
  headers: {'
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }
})
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

const data = await response && response.json()`
console && console.log(data),`

<<<<<<< HEAD

response = requests && requests.get(
    'https: //api && api.ziontechgroup.com/v1/talent',
=======

});
`
                python: `import requests;

    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
}

response = requests && requests.get('
    'https: //api && api.ziontechgroup.com/v1/talent','
>>>>>>> origin/cursor/delete-old-data-records-6bba

    params={'skills': 'react,typescript'}
    headers=headers;
)
<<<<<<< HEAD


`
print(data)`

=======
data = response && response.json()
print(data)`
response = requests.get (
    'https: //api.ziontechgroup.com / v1 / talent',
response = requests.get ('
    'https: //api.ziontechgroup.com / v1 / talent','
>>>>>>> origin/cursor/delete-old-data-records-6bba
    params={'skills': 'react, typescript'}
    headers = headers);
data = response.json ();`
print (data)`;


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
}),;
const data = await response.json(),;`
// // // console.log(data),`,;`
                python: `import requests;
headers = {;'
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
}
;
response = requests.get(;
    '"https": //api.ziontechgroup.com/v1/talent',;'
    params={'skills': 'react,typescript'},;'
    headers=headers;
);
<<<<<<< HEAD
data = response.json();`
print(data)`;





=======
data = response.json();
print(data)`;`              }
              response_examples={
                }
                "success": `{`  "data": [;"
    {      "id": "talent_abc123","
      "display_name": "Jane Smith","
      "headline": "Senior Frontend Developer","
      "skills": ["react", "typescript", "javascript"],"
      "availability": "available","
      "average_rating": 4.8,"
      "rating_count": 15"
    },
    // More talent profiles...
  ];
  ],
      "rating_count": 15"
>>>>>>> origin/cursor/delete-old-data-records-6bba
              }}
              response_examples={{}`
                success: `{"
  "data": [;

<<<<<<< HEAD
    {
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      "id": "talent_abc123"
      "display_name": "Jane Smith"
      "headline": "Senior Frontend Developer",
      "skills": ["react", "typescript", "javascript"]
      "availability": "available"
      "average_rating": 4 && 4.8

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      "rating_count": 15

    }
    // More talent profiles...
  ]


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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      "rating_count": 15
    }
    // More talent profiles...
  ]
  "meta": {"
    "total": 28"
    "page": 1"
    "limit": 20"
      "rating_count": 15;"
    }
    // More talent profiles...;
  ];
  "meta": {"
    "total": 28;"
    "page": 1;"
<<<<<<< HEAD
    "limit": 20;
  }`
}`;


=======
    "limit": 20;"
  }
}`;`              }  "headers": {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';'
  }
  -H "Content-"Type": application/json"`,`                "javascript": `const talentId = 'talent_abc123','
const response = await fetch(\`"https"://api && api.ziontechgroup.com/v1/talent/\${talentId}\`, {`  }
  "method": 'GET','
  "headers": {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json''
  }
})
const data = await response && response.json();
console && console.log(data),``  "headers": {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';'
  }
});
                "python": `import requests`;
const data = await response.json ();
console.log (data), `;`                "python": `import requests;`headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';'
}

data = response && response.json()}),;
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

                python: `import requests
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'


              note="";
              params={[;"
                { name: "id", type: "string", description: "The talent ID", required: true }
              ]}
<<<<<<< HEAD
=======

"`
  -H "Content-Type: application/json"`,'`
                javascript: `const talentId = 'talent_abc123',`
const response = await fetch(\`https://api && api.ziontechgroup.com/v1/talent/\${talentId}\`, {'

  method: 'GET',
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======

});
>>>>>>> origin/cursor/delete-old-data-records-6bba
  -H "Content-Type: application/json"`,
                javascript: `const talentId = 'talent_abc123',
const response = await fetch(\`https://api && api.ziontechgroup.com/v1/talent/\${talentId}\`, {
  method: 'GET',
  headers: {

    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }
})
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

const data = await response && response.json()`
console && console.log(data),`

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

print(data)`

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
talent_id = 'talent_abc123';
response = requests.get (
    f'https://api.ziontechgroup.com / v1 / talent/{talent_id}';
    headers = headers);
data = response.json ();
print (data)`;

<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

}),;
const data = await response.json(),;
// // // console.log(data),`,;`                "python": `import requests;`headers = {;
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';'
}
;
talent_id = 'talent_abc123';'
response = requests.get(;
    f'"https"://api.ziontechgroup.com/v1/talent/{talent_id}',;'
    headers=headers;
);

<<<<<<< HEAD
data = response.json();
print(data)`;



=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
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
    ]"
    "certifications": []
      {"
        "name": "AWS Certified Developer""
        "issuing_organization": "Amazon Web Services"
<<<<<<< HEAD



    "rating_count": 15,



=======

"
    "id": "talent_abc123","
    "display_name": "Jane Smith","
    "headline": "Senior Frontend Developer","
    "bio": "10+ years of experience in frontend development...","
    "skills": ["react", "typescript", "javascript", "css", "html"],"
    "availability": "available","
    "average_rating": 4.8,"

    "rating_count": 15,
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        "name": "AWS Certified Developer",
        "issuing_organization": "Amazon Web Services",

        "issue_date": "2024-01-15"
<<<<<<< HEAD

=======


        "name": "AWS Certified Developer",
        "issuing_organization": "Amazon Web Services",
        "issue_date": "2024-01-15"
        "issue_date": "2024-01-15"


>>>>>>> origin/cursor/delete-old-data-records-6bba
    "portfolio": [;
      {"
        "id": "proj_123";"
        "title": "E - commerce Platform";"
        "description": "Built a modern e - commerce platform using React...";"
        "technologies": ["react", "redux", "node.js"];"
        "image_url": ""https"://example.com / portfolio / 123.jpg";"
      }
    ];
    "certifications": [;"
      {
        "name": "AWS Certified Developer";"
        "issuing_organization": "Amazon Web Services";"
<<<<<<< HEAD
        "issue_date": "2024 - 01 - 15";


=======
        "issue_date": "2024 - 01 - 15";"
      }
    ];
>>>>>>> origin/cursor/delete-old-data-records-6bba
      }
    ];


<<<<<<< HEAD




  }
}`;
              }}



          
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
            />

            />;
          </TabsContent>;

  });
});
;
const data = await response.json ();
console.log (data), `;`                "python": `import requests;`import json;
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';'
}
    'talent_id': 'talent_abc123project_name': 'E-commerce Website Redesignproject_summary': 'Redesign our outdated e-commerce website with modern UIproject_description': 'Our current website is 5 years old and needs a complete overhaul...timeline': '2-3 monthsbudget_min': 8000;'
    'budget_max': 12000;'
    'requester_name': 'John Doerequester_email': 'john@example.com''
}
response = requests.get (
    '"https": //api.ziontechgroup.com / v1 / quotes','
    headers = headers);
data = response.json ();
print (data)`;`              response_examples={
                }
                "success": `{`  "data": [;"
    {
      "id": "quote_def456""
      "talent_id": "talent_abc123""
      "project_name": "E-commerce Website Redesign""
      "project_summary": "Redesign our outdated e-commerce website with modern UI","
      "budget_display": "$8,000 - $12,000""
      "status": "new""
      "created_at": "2025-05-"16T14": "30":15Z""
      "viewed_at": null,"
      "replied_at": null"
    }
    // More quotes...
  ]
  "meta": {"
    "total": 5"
    "page": 1"
    "limit": 20"
      "project_name": "E - commerce Website Redesign";"
      "project_summary": "Redesign our outdated e - commerce website with modern UI","
      "budget_display": "$8, 000 - $12, 000";"
      "status": "new";"
      "created_at": "2025 - 05 - "16T14": "30":15Z";"
      "viewed_at": null,"
      "replied_at": null;"
    }
    // More quotes...;
  -H ""Authorization": Bearer YOUR_API_KEY" \\"
  -H "Content-"Type": application/json"``                "javascript": `const response = await fetch('"https"://api.ziontechgroup.com/v1/quotes', {'
  }
  "method": 'GET''
  "headers": {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json''
  }
});
const data = await response.json();
console.log(data),`;`                "python": `import requests`headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json''
}
response = requests.get(
    '"https": //api.ziontechgroup.com/v1/quotes''
    headers=headers
)

response = requests.get(

    'https://api.ziontechgroup.com/v1/quotes',;
    headers=headers,;
    data=json.dumps(payload);
);

            />
          </TabsContent>"
          <TabsContent value="quotes" className="space-y-6">

            <EndpointSection"
              method="POST""
              endpoint="/api/quotes""
              description="Create a quote request for a talent.""
              note="Requires quotes:write scope"
              params={["
                { name: "talent_id", type: "string", description: "ID of the talent to request a quote from", required: true }"
                { name: "project_name", type: "string", description: "Name of the project", required: true }"
                { name: "project_summary", type: "string", description: "Brief summary of the project", required: true }"
                { name: "project_description", type: "string", description: "Detailed project description" }"
                { name: "timeline", type: "string", description: "Expected timeline", required: true }"
                { name: "budget_min", type: "number", description: "Minimum budget" }"
                { name: "budget_max", type: "number", description: "Maximum budget" }"
                { name: "requester_name", type: "string", description: "Name of the requester", required: true }"
                { name: "requester_email", type: "string", description: "Email of the requester", required: true }
              ]}

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
  headers: {'
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }

    "requester_name": "John Doe",

    "requester_email": "john@example.com";
  }'`;
                javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / quotes', {

  method: 'POST',
  headers: {'
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
  }

    requester_email: 'john@example.com';
  });
});
;
const data = await response.json ();`
console.log (data), `;`
                python: `import requests;
import json;

    'talent_id': 'talent_abc123project_name': 'E-commerce Website Redesignproject_summary': 'Redesign our outdated e-commerce website with modern UIproject_description': 'Our current website is 5 years old and needs a complete overhaul...timeline': '2-3 monthsbudget_min': 8000;
    'budget_max': 12000;
    'requester_name': 'John Doerequester_email': 'john@example.com'

}

response = requests && requests.post('
    'https: //api && api.ziontechgroup.com/v1/quotes'
    headers=headers,
    data=json && json.dumps(payload)
)

data = response && response.json()`
print(data)`
'
    'talent_id': 'talent_abc123project_name': 'E - commerce Website Redesignproject_summary': 'Redesign our outdated e - commerce website with modern UIproject_description': 'Our current website is 5 years old and needs a complete overhaul...timeline': '2 - 3 monthsbudget_min': 8000;'
    'budget_max': 12000;'
    'requester_name': 'John Doerequester_email': 'john@example.com';
}
response = requests.post ('
    'https: //api.ziontechgroup.com / v1 / quotes';
    headers = headers,
    data = json.dumps (payload));
data = response.json ();`
print (data)`;

              }}
              response_examples={{}`
                success: `{"
  "data": {}
"
    "id": "quote_def456""
    "talent_id": "talent_abc123""
    "requester_id": "user_xyz789""
    "project_name": "E-commerce Website Redesign""
    "project_summary": "Redesign our outdated e-commerce website with modern UI""
    "project_description": "Our current website is 5 years old and needs a complete overhaul...""
    "timeline": "2-3 months""
    "budget_min": 8000"
    "budget_max": 12000,"
    "budget_display": "$8,000 - $12,000""
    "requester_name": "John Doe""
    "requester_email": "john@example && example.com""
    "status": "new"

"
    "created_at": "2025-05-16T14:30:15Z"
"
    "budget_max": 12000,"
    "budget_display": "$8, 000 - $12, 000";"
    "requester_name": "John Doe";"
    "requester_email": "john@example.com";"
    "status": "new";"
    "created_at": "2025 - 05 - 16T14:30:15Z";

  }`
}`;
              }}
            />;

payload = {}
payload = {;'
    'talent_id': 'talent_abc123project_name': 'E-commerce Website Redesignproject_summary': 'Redesign our outdated e-commerce website with modern UIproject_description': 'Our current website is 5 years old and needs a complete overhaul...timeline': '2-3 monthsbudget_min': 8000;'
    'budget_max': 12000;'
    'requester_name': 'John Doerequester_email': 'john@example.com'
}
response = requests.post('
    'https: //api.ziontechgroup.com/v1/quotes';
    headers=headers;
    data=json.dumps(payload)
)
data = response.json()`
print(data)`
              }}
              responseExamples={{}`
                success: `{"
  "data": {"
    "id": "quote_def456";"
    "talent_id": "talent_abc123";"
    "requester_id": "user_xyz789";"
    "project_name": "E-commerce Website Redesign";"
    "project_summary": "Redesign our outdated e-commerce website with modern UI";"
    "project_description": "Our current website is 5 years old and needs a complete overhaul...";"
    "timeline": "2-3 months";"
    "budget_min": 8000;"
    "budget_max": 12000"
    "budget_display": "$8,000 - $12,000";"
    "requester_name": "John Doe";"
    "requester_email": "john@example.com";"
    "status": "new";"
    "created_at": "2025-05-16T14:30:15Z"
  }`
}`
              }}
            />

            <EndpointSection"
              method="GET""
              endpoint="/api/quotes"'"
              description="List quote requests that you've created.""
              note=""
              params={["
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" }"
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" }"
                { name: "status", type: "string", description: "Filter by status (new, viewed, replied, archived)" }
              ]}
              codeExamples={{}
            />;
            <EndpointSection;"
              method="GET";"
              endpoint="/api / quotes";'"
              description="List quote requests that you've created.";"
              note="";
              params={[;"
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" },"
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },"
                { name: "status", type: "string", description: "Filter by status (new, viewed, replied, archived)" }
              ]}
              code_examples={{"`
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / quotes" \\;"
  -H "Authorization: Bearer YOUR_API_KEY" \\;"`
  -H "Content - Type: application / json"`,'`
                javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / quotes', {'
  method: 'GET',

  headers: {'
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
  }
});

"`
  -H "Content-Type: application/json"`,'`
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/quotes', {'
  method: 'GET',
  headers: {'
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }
})

const data = await response && response.json()`
console && console.log(data),``
                python: `import requests;
;
const data = await response.json ();`
console.log (data), `;`
                python: `import requests;

headers = {'
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
}

response = requests.get(
    'https: //api.ziontechgroup.com/v1/quotes'
    headers=headers
)

response = requests && requests.get('
    'https: //api && api.ziontechgroup.com/v1/quotes',
    headers=headers;
)

data = response.json()

`
print(data)`

response = requests.get (

    'https: //api.ziontechgroup.com / v1 / quotes',
    headers = headers);
data = response.json ();`
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
    "certifications": [
      {
        "name": "AWS Certified Developer";
        "issuing_organization": "Amazon Web Services";
        "issue_date": "2024-01-15"
      }
    ]
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
}`
              }}

<<<<<<< HEAD

=======
            />
          </TabsContent>
          <TabsContent value="quotes" className="space-y-6">

            />
          </TabsContent>
          <TabsContent value="quotes" className="space-y-6">
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                curl: `curl -X POST "https://api && api.ziontechgroup.com/v1/quotes" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


=======
  body: JSON && JSON.stringify({
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
    requester_email: 'john@example.com';
  });
});
;
const data = await response.json ();
console.log (data), `;
                python: `import requests;
import json;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
}

    'talent_id': 'talent_abc123project_name': 'E-commerce Website Redesignproject_summary': 'Redesign our outdated e-commerce website with modern UIproject_description': 'Our current website is 5 years old and needs a complete overhaul...timeline': '2-3 monthsbudget_min': 8000;
    'budget_max': 12000;
    'requester_name': 'John Doerequester_email': 'john@example.com'

}


response = requests && requests.post(
    'https: //api && api.ziontechgroup.com/v1/quotes'
    headers=headers,
    data=json && json.dumps(payload)
)
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

data = response && response.json()

print(data)`

<<<<<<< HEAD
=======
data = response && response.json()
print(data)`
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              }}
              response_examples={{
                success: `{
  "data": {

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


    "created_at": "2025-05-16T14:30:15Z"

=======

    "created_at": "2025-05-16T14:30:15Z"
    "created_at": "2025-05-16T14:30:15Z"
    "created_at": "2025-05-16T14:30:15Z"
>>>>>>> origin/cursor/delete-old-data-records-6bba
    "budget_max": 12000,
    "budget_display": "$8, 000 - $12, 000";
    "requester_name": "John Doe";
    "requester_email": "john@example.com";
    "status": "new";
    "created_at": "2025 - 05 - 16T14:30:15Z";
<<<<<<< HEAD


=======

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
}`;
              }}

            />;

  }
}`;
              }}
            />;

<<<<<<< HEAD



=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/quotes" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\


=======
                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/quotes" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\

>>>>>>> origin/cursor/delete-old-data-records-6bba
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


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
  }
});

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  -H "Content-Type: application/json"`,
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/quotes', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }
})
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

const data = await response && response.json()
console && console.log(data),`

                python: `import requests

<<<<<<< HEAD
=======
const data = await response && response.json()
console && console.log(data),`
                python: `import requests
>>>>>>> origin/cursor/delete-old-data-records-6bba
;
const data = await response.json ();
console.log (data), `;
                python: `import requests;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
}


<<<<<<< HEAD

response = requests && requests.get(
    'https: //api && api.ziontechgroup.com/v1/quotes',

    headers=headers
)


data = response.json()

=======
response = requests && requests.get(
    'https: //api && api.ziontechgroup.com/v1/quotes',
    headers=headers
)
data = response && response.json()
print(data)`
print(data)`
>>>>>>> origin/cursor/delete-old-data-records-6bba
response = requests.get (
    'https: //api.ziontechgroup.com / v1 / quotes',
    headers = headers);
data = response.json ();
print (data)`;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              }}
              response_examples={{
                success: `{
  "data": [;
    {
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      "id": "quote_def456"
      "talent_id": "talent_abc123"
      "project_name": "E-commerce Website Redesign"
      "project_summary": "Redesign our outdated e-commerce website with modern UI",
      "budget_display": "$8,000 - $12,000"
      "status": "new"
      "created_at": "2025-05-16T14: 30:15Z"
      "viewed_at": null,
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      "replied_at": null
    }
    // More quotes...
  ]
  "meta": {
    "total": 5
    "page": 1
    "limit": 20

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


=======

                curl: `curl -X GET "https://api.ziontechgroup.com/v1/quotes" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/quotes', {

>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
});
const data = await response.json();`
console.log(data),`;`
                python: `import requests;
headers = {'
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
}
response = requests.get('
    'https: //api.ziontechgroup.com/v1/quotes'
    headers=headers;
)

response = requests.get('
    'https: //api.ziontechgroup.com/v1/quotes',
    headers=headers;
)

data = response.json()`
print(data)`
              }}
              responseExamples={{}`
                success: `{"
  "data": []
    {;"
      "id": "quote_def456";"
      "talent_id": "talent_abc123";"
      "project_name": "E-commerce Website Redesign";"
      "project_summary": "Redesign our outdated e-commerce website with modern UI""
      "budget_display": "$8,000 - $12,000";"
      "status": "new";"
      "created_at": "2025-05-"16T14": "30":15Z";"
      "viewed_at": null"
<<<<<<< HEAD
      "replied_at": null;

=======
      "replied_at": null"
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
    // More quotes...
}`;`              }
            />;
          </TabsContent>;
<<<<<<< HEAD


=======
          <TabsContent value="webhooks" className="space-y-6">;"
            <div className="prose prose-invert max-w-none">;"
              <h3 className="text-lg font-semibold mb-2">Webhook Events</h3>;"
              <p className="text-zinc-400 mb-4">;"
                The Zion API can send webhook notifications when certain events occur in your account.;
                You can configure webhooks in the Webhooks tab of the Developer Dashboard.;
              </p>;
              <h4 className="text-md font-semibold mt-6 mb-2">Authentication</h4>;"
              <p className="text-zinc-400 mb-4">;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              <h4 className="text-md font-semibold mt-6 mb-2">Authentication</h4>;

              <p className="text-zinc-400 mb-4">;
                When you create a webhook, you can optionally provide a secret key.;
<<<<<<< HEAD
                If a secret is provided, each webhook request will include a signature in the;"
                <code className="bg-zinc-800 px-1 py-0 && 0.5 rounded">X-Zion-Signature</code> header.;

                This signature is an HMAC SHA-256 hash of the request body using your webhook secret as the key.;
              </p>;


              <CodeBlock'`
                code={`import crypto from 'crypto'

=======
                If a secret is provided, each webhook request will include a signature in the;
                <code className="bg-zinc-800 px-1 py-0 && 0.5 rounded">X-Zion-Signature</code> header.;"
                This signature is an HMAC SHA-256 hash of the request body using your webhook secret as the key.;
              </p>;
              <CodeBlock,
code={`import crypto from 'crypto'  // Process the webhook event'

              <CodeBlock'`
                code={`import crypto from 'crypto'
;
// Function to verify webhook signature;
function verifyWebhookSignature(): any (payload, signature, secret) {'
  const hmac = crypto && crypto.createHmac('sha256', secret)'
// Function to verify webhook signature
function verifyWebhookSignature(): any (payload, signature, secret) {
  const hmac = crypto && crypto.createHmac('sha256', secret)
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const expectedSignature = hmac && hmac.update(payload).digest('hex')
  return crypto && crypto.timingSafeEqual(
    Buffer && Buffer.from(signature)
    Buffer && Buffer.from(expectedSignature)
  )
}

<<<<<<< HEAD





  // Process the webhook event

  const event = JSON.parse(payload);

  console.log('Received valid webhook:', event);
  // Respond to acknowledge receipt
  res.status(200).send('Webhook received')
=======
  }
  const event = JSON.parse(payload);
  console.log('Received valid "webhook":', event);'
  // Respond to acknowledge receipt,
res.status(200).send('Webhook received')'
// Example usage in Express && Express.js,
app && app.post('/webhook', express && express.raw({"type": 'application/json'}), (req, res) => {;'
  }
  const signature = req && req.headers['x-zion-signature'];'
  const payload = req && req.body.toString();
  const webhookSecret = process && process.env.WEBHOOK_SECRET;

  if (!verifyWebhookSignature(payload, signature, webhookSecret)) {;
    }
    return res && res.status(401).send('Invalid signature');'
  const event = JSON.parse(payload);

  }

  // Process the webhook event;
  const event = JSON && JSON.parse(payload);
  console && console.log('Received valid "webhook":', event);'
  // Respond to acknowledge receipt;
  res && res.status(200).send('Webhook received');'
}),`}`                language="javascript";"
                showLineNumbers={true}

              />;

  if (!verifyWebhookSignature(payload, signature, webhookSecret)) {;

    return res && res.status(401).send('Invalid signature');
  }
  // Process the webhook event;
  const event = JSON && JSON.parse(payload);'
  console && console.log('Received valid webhook:', event);
  // Respond to acknowledge receipt;'
  res && res.status(200).send('Webhook received');`
}),`}"
                language="javascript";
                showLineNumbers={true}
              />;
>>>>>>> origin/cursor/delete-old-data-records-6bba

                    <td className="py-2 px-4">When you hire talent for a project</td>;
                  </tr>;
                </tbody>;
              </table>;
<<<<<<< HEAD


              <p className="text-zinc-400 mb-2">;
=======

              <p className="text-zinc-400 mb-2">;
            />
          </TabsContent>
          <TabsContent value="quotes" className="space-y-6">"
  }
}`;`              }
            <EndpointSection,
method="POST""
              endpoint="/api/quotes""
              description="Create a quote request for a talent.""
              note="Requires "quotes":write scope""
              params={[
                { "name": "talent_id", "type": "string", "description": "ID of the talent to request a quote from", "required": true }"
                { "name": "project_name", "type": "string", "description": "Name of the project", "required": true }"
                { "name": "project_summary", "type": "string", "description": "Brief summary of the project", "required": true }"
                { "name": "project_description", "type": "string", "description": "Detailed project description" }"
                { "name": "timeline", "type": "string", "description": "Expected timeline", "required": true }"
                { "name": "budget_min", "type": "number", "description": "Minimum budget" }"
                { "name": "budget_max", "type": "number", "description": "Maximum budget" }"
                { "name": "requester_name", "type": "string", "description": "Name of the requester", "required": true }"
                { "name": "requester_email", "type": "string", "description": "Email of the requester", "required": true }"
              ]}
              codeExamples={
                }
                "curl": `curl -X POST ""https"://api && api.ziontechgroup.com/v1/quotes" \\"
  -H ""Authorization": Bearer YOUR_API_KEY" \\"
  -H "Content-"Type": application/json" \\" />;
          </TabsContent>;
          <TabsContent value="quotes" className="space-y-6">;"
            <EndpointSection;
              method="POST";"
              endpoint="/api / quotes";"
              description="Create a quote request for a talent.";"
              note="Requires "quotes":write scope";"
              params={[;
                { "name": "talent_id", "type": "string", "description": "ID of the talent to request a quote from", "required": true },"
                { "name": "project_name", "type": "string", "description": "Name of the project", "required": true },"
                { "name": "project_summary", "type": "string", "description": "Brief summary of the project", "required": true },"
                { "name": "project_description", "type": "string", "description": "Detailed project description" },"
                { "name": "timeline", "type": "string", "description": "Expected timeline", "required": true },"
                { "name": "budget_min", "type": "number", "description": "Minimum budget" },"
                { "name": "budget_max", "type": "number", "description": "Maximum budget" },"
                { "name": "requester_name", "type": "string", "description": "Name of the requester", "required": true },"
                { "name": "requester_email", "type": "string", "description": "Email of the requester", "required": true }"
              ]}
              code_examples={
                }
                "curl": `curl -X POST ""https"://api.ziontechgroup.com / v1 / quotes" \\;"  -H ""Authorization": Bearer YOUR_API_KEY" \\;"
  -H "Content - "Type": application / json" \\;"
  -d '{'
}
headers = {
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';'
}
    'talent_id': 'talent_abc123project_name': 'E-commerce Website Redesignproject_summary': 'Redesign our outdated e-commerce website with modern UIproject_description': 'Our current website is 5 years old and needs a complete overhaul...timeline': '2-3 monthsbudget_min': 8000;'
    'budget_max': 12000;'
    'requester_name': 'John Doerequester_email': 'john@example.com''
}
    "match_score": 85"
    "applied_at": "2025 - 05 - "16T15":"28":30Z";"
    "status": "new","
    "match_score": 85;"
            <div className="prose prose-invert max-w-none">;"
              <h3 className="text-lg font-semibold mb-2">Error Responses</h3>;"
              <p className="text-zinc-400 mb-4">;"
                In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error with the;
                provided information, and codes in the 5xx range indicate an error with our servers.;
              </p>;
              <table className="w - full border - collapse mt-4">;"
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
  "data": {
  "data": {
>>>>>>> origin/cursor/delete-old-data-records-6bba

    "application_id": "app_123456"
    "job_id": "job_abc123"
    "talent_id": "talent_xyz789"
    "applied_at": "2025-05-16T15:28:30Z"
    "status": "new",
<<<<<<< HEAD


=======
    "match_score": 85
    "applied_at": "2025 - 05 - 16T15:28:30Z";
    "status": "new",
    "match_score": 85;
            />
          </TabsContent>"
          <TabsContent value="quotes" className="space-y-6">
  }`
}`;
              }}
            <EndpointSection"
              method="POST""
              endpoint="/api/quotes""
              description="Create a quote request for a talent.""
              note="Requires quotes:write scope"
              params={["
                { name: "talent_id", type: "string", description: "ID of the talent to request a quote from", required: true }"
                { name: "project_name", type: "string", description: "Name of the project", required: true }"
                { name: "project_summary", type: "string", description: "Brief summary of the project", required: true }"
                { name: "project_description", type: "string", description: "Detailed project description" }"
                { name: "timeline", type: "string", description: "Expected timeline", required: true }"
                { name: "budget_min", type: "number", description: "Minimum budget" }"
                { name: "budget_max", type: "number", description: "Maximum budget" }"
                { name: "requester_name", type: "string", description: "Name of the requester", required: true }"
                { name: "requester_email", type: "string", description: "Email of the requester", required: true }
              ]}
              codeExamples={{"`
                curl: `curl -X POST "https://api && api.ziontechgroup.com/v1/quotes" \\"
  -H "Authorization: Bearer YOUR_API_KEY" \\"
  -H "Content-Type: application/json" \\
            />;

              note="Requires quotes:write scope";
              params={[;"
                { name: "talent_id", type: "string", description: "ID of the talent to request a quote from", required: true },"
                { name: "project_name", type: "string", description: "Name of the project", required: true },"
                { name: "project_summary", type: "string", description: "Brief summary of the project", required: true },"
                { name: "project_description", type: "string", description: "Detailed project description" },"
                { name: "timeline", type: "string", description: "Expected timeline", required: true },"
                { name: "budget_min", type: "number", description: "Minimum budget" },"
                { name: "budget_max", type: "number", description: "Maximum budget" },"
                { name: "requester_name", type: "string", description: "Name of the requester", required: true },"
                { name: "requester_email", type: "string", description: "Email of the requester", required: true }
              ]}
              code_examples={{"`
                curl: `curl -X POST "https://api.ziontechgroup.com / v1 / quotes" \\;"
  -H "Authorization: Bearer YOUR_API_KEY" \\;"
  -H "Content - Type: application / json" \\;'
  -d '{}
headers = {'
    'Authorization': 'Bearer YOUR_API_KEYContent - Type': 'application / json';
}'
    'talent_id': 'talent_abc123project_name': 'E-commerce Website Redesignproject_summary': 'Redesign our outdated e-commerce website with modern UIproject_description': 'Our current website is 5 years old and needs a complete overhaul...timeline': '2-3 monthsbudget_min': 8000;'
    'budget_max': 12000;'
    'requester_name': 'John Doerequester_email': 'john@example.com'

}
>>>>>>> origin/cursor/delete-old-data-records-6bba

    "match_score": 85
    "applied_at": "2025 - 05 - 16T15:28:30Z";
    "status": "new",
    "match_score": 85;

<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
}`}
                language="json";
                showLineNumbers={true}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

              />;
            </div>;
          </TabsContent>;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <TabsContent value="errors" className="space-y-6">;
            <div className="prose prose-invert max-w-none">;
              <h3 className="text-lg font-semibold mb-2">Error Responses</h3>;
              <p className="text-zinc-400 mb-4">;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              />;
            </div>;
          </TabsContent>;
          <TabsContent value="errors" className="space - y-6">;
            <div className="prose prose - invert max - w-none">;
              <h3 className="text - lg font - semibold mb - 2">Error Responses</h3>;
              <p className="text - zinc - 400 mb - 4">;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                The Zion API uses conventional HTTP status codes to indicate the success or failure of an API request.;
                In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error with the;
                provided information, and codes in the 5xx range indicate an error with our servers.;
              </p>;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              <table className="w - full border - collapse mt - 4">;
                <thead>;
                  <tr className="border - b border - zinc-800">;"
                    <th className="py - 2 px - 4 text-left">Status Code</th>;"
                    <th className="py - 2 px - 4 text-left">Description</th>;"
                  </tr>;
                </thead>;
                <tbody>;
                  <tr className="border - b border - zinc-800">;"
                    <td className="py - 2 px-4"><code className="bg - zinc - 800 px - 1 py-0.5 rounded">200 OK</code></td>;"
                    <td className="py - 2 px-4">The request was successful.</td>;"
                  </tr>;
                  <tr className="border - b border - zinc-800">;"
                    <td className="py - 2 px-4"><code className="bg - zinc - 800 px - 1 py-0.5 rounded">201 Created</code></td>;"
                    <td className="py - 2 px-4">The resource was successfully created.</td>;"
                  </tr>;
                  <tr className="border - b border - zinc-800">;"
                    <td className="py - 2 px-4"><code className="bg - zinc - 800 px - 1 py-0.5 rounded">400 Bad Request</code></td>;"
                    <td className="py - 2 px-4">The request was invalid or cannot be otherwise served.</td>;"
                  </tr>;
                  <tr className="border - b border - zinc-800">;"
                    <td className="py - 2 px-4"><code className="bg - zinc - 800 px - 1 py-0.5 rounded">401 Unauthorized</code></td>;"
                    <td className="py - 2 px-4">Authentication credentials were missing or invalid.</td>;"
                  </tr>;
                  <tr className="border - b border - zinc-800">;"
                    <td className="py - 2 px-4"><code className="bg - zinc - 800 px - 1 py-0.5 rounded">403 Forbidden</code></td>;"
                    <td className="py - 2 px-4">The request is understood, but it has been refused or access is not allowed.</td>;"
                  </tr>;
                  <tr className="border - b border - zinc-800">;"
                    <td className="py - 2 px-4"><code className="bg - zinc - 800 px - 1 py-0.5 rounded">404 Not Found</code></td>;"
                    <td className="py - 2 px-4">The requested resource does not exist.</td>;"
                  </tr>;
                  <tr className="border - b border - zinc-800">;"
                    <td className="py - 2 px-4"><code className="bg - zinc - 800 px - 1 py-0.5 rounded">422 Unprocessable Entity</code></td>;"
                    <td className="py - 2 px-4">The request was well - formed but was unable to be followed due to semantic errors.</td>;"
                  </tr>;
                  <tr className="border - b border - zinc-800">;"
                    <td className="py - 2 px-4"><code className="bg - zinc - 800 px - 1 py-0.5 rounded">429 Too Many Requests</code></td>;"
                    <td className="py - 2 px-4">The request was rejected due to rate limiting.</td>;"
                  </tr>;
                  <tr className="border - b border - zinc-800">;"
                    <td className="py - 2 px-4"><code className="bg - zinc - 800 px - 1 py-0.5 rounded">500 Internal Server Error</code></td>;"
                    <td className="py - 2 px-4">Something went wrong on our end.</td>;"
                  </tr>;
                </tbody>;
              </table>;
              <h4 className="text - md font - semibold mt - 6 mb-2">Error Response Format</h4>;"
              <p className="text - zinc - 400 mb-2">;"
                Error responses include a consistent JSON object with the following "format": </p>;
              <CodeBlock;
<<<<<<< HEAD


=======
                code={`{`  "error": {"
    "code": "invalid_request";"
    "message": "The request was invalid";  description;"
  }
  note;
  params = [];
  codeExamples;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                code={`{
  "error": {
    "code": "invalid_request";

<<<<<<< HEAD
    "message": "The request was invalid";
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      }
    ];
  }`
}`}

<<<<<<< HEAD

    "message": "The request was invalid";  description;

=======
    "message": "The request was invalid";  description;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  note;
  params = [];
  codeExamples;

  description;
  note;
  params = [];
  codeExamples;
<<<<<<< HEAD



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
          <Badge"
            variant="outline"
            className={'
              method === 'GET'"
                ? "border-green-500 text-green-400 font-mono"'
                : method === 'POST'"
                ? "border-blue-500 text-blue-400 font-mono"'
                : method === 'PUT'"
                ? "border-yellow-500 text-yellow-400 font-mono""
                : "border-red-500 text-red-400 font-mono"


                language="json";

              />;


              <h4 className="text-md font-semibold mt-6 mb-2">Rate Limiting</h4>;
              <p className="text-zinc-400 mb-4">;
                The Zion API implements rate limiting to protect our infrastructure and ensure fair usage.;
                Rate limits are applied on a per-API key basis. If you exceed the rate limits, you will receive ;


            </div>;
          </TabsContent>;
        </Tabs>;
      </CardContent>;
    </Card>;
  );
}



=======
  responseExamples
}) {
  const [activeTab, setActiveTab] = useState("curl");

    "message": "The request was invalid";  description;
  note;
  params = [];
  codeExamples;

  description;
  note;
  params = [];
  codeExamples;

    <div className="border border-zinc-800 rounded-md">;
      <div className="p-4">;
        <div className="flex items-center">;
          <Badge
            variant="outline" 

            className={
              }
              method === 'GET''
                ? "border-green-500 text-green-400 font-mono""
                : method === 'POST''
                ? "border-blue-500 text-blue-400 font-mono""
                : method === 'PUT''
                ? "border-yellow-500 text-yellow-400 font-mono""
                : "border-red-500 text-red-400 font-mono""
            }>;
;
// Helper component for API endpoint documentation;
function EndpointSection() {;
  }
  const [activeTab, setActiveTab] = useState("curl"),;"
  ;
  return (;
    <div className="border border-zinc-800 rounded-md">;"
      <div className="p-4">;"
        <div className="flex items-center">;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD
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

=======
              <h4 className="text - md font - semibold mt - 6 mb-2">Rate Limiting</h4>;"
              <p className="text - zinc - 400 mb-4">;"
                The Zion API implements rate limiting to protect our infrastructure and ensure fair usage.;
                Rate limits are applied on a per - API key basis. If you exceed the rate limits, you will receive;
                a <code className="bg - zinc - 800 px - 1 py-0.5 rounded">429 Too Many Requests</code> response.;"
              </p>;
              <p className="text - zinc - 400 mb-2">;"
                Rate limit information is included in the response "headers": </p>;
              <ul className="list - disc pl - 6 space - y-1 text - zinc-400">;"
                <li><code className="bg - zinc - 800 px - 1 py-0.5 rounded">X - RateLimit - Limit</code>: Number of requests allowed in the time window</li>;"
                <li><code className="bg - zinc - 800 px - 1 py-0.5 rounded">X - RateLimit - Remaining</code>: Number of requests remaining in the current window</li>;"
                <li><code className="bg - zinc - 800 px - 1 py-0.5 rounded">X - RateLimit - Reset</code>: Unix timestamp when the rate limit resets</li>;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
function EndpointSection() {
  }
  const [active_tab, setActiveTab] = useState ("curl");"
;
return (;
    <div className="border border - zinc - 800 rounded-md">;"
      <div className="p-4">;"
        <div className="flex items-center">;"
          <Badge;
            variant="outline";"
            className={
              }
              method === 'GET';'
                ? "border - green - 500 text - green - 400 font - mono";"
                : method === 'POST';'
                ? "border - blue - 500 text - blue - 400 font - mono";"
                : method === 'PUT';'
                ? "border - yellow - 500 text - yellow - 400 font - mono";"
                : "border - red - 500 text - red - 400 font - mono";"
            }
      {params.length > 0 && (
        <div className="border - t border - zinc - 800 p - 4">;
          <h4 className="font - medium mb - 2">Parameters</h4>;
          <table className="w - full">;
          >;      {params.length > 0 && (
        <div className="border - t border - zinc - 800 p-4">;"
          <h4 className="font - medium mb-2">Parameters</h4>;"
          <table className="w-full">;"
            <thead>;
<<<<<<< HEAD
              <tr className="text - left border - b border - zinc - 800 text-sm">;
                <th className="pb-2">Name</th>;
                <th className="pb-2">Type</th>;
                <th className="pb-2">Description</th>;

=======
              <tr className="text - left border - b border - zinc - 800 text-sm">;"
                <th className="pb-2">Name</th>;"
                <th className="pb-2">Type</th>;"
                <th className="pb-2">Description</th>;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
              </tr>;
            </thead>;
            <tbody>;
              {params.map ((param, index) => (
<<<<<<< HEAD

                <tr key={index} className={index < params.length - 1 ? "border - b border - zinc - 800" : ""}>;
                  <td className="py - 2 font - mono text-sm">;

=======
                <tr key={index} className={index < params.length - 1 ? "border - b border - zinc - 800" : ""}>;"
                  <td className="py - 2 font - mono text-sm">;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    {param.name}
              ))}            </tbody>;
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

<<<<<<< HEAD
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
            </tbody>;

          </table>;
        </div>;


      {codeExamples && (

            <div className="ml-auto flex border border-zinc-700 rounded-md overflow-hidden">

      {codeExamples && (;"
        <div className="border-t border-zinc-800 p-4">;"
          <div className="flex items-center mb-2">;"
            <h4 className="font-medium">Request Example</h4>;"
            <div className="ml-auto flex border border-zinc-700 rounded-md overflow-hidden">;

                <button;
                  key={lang}`
                  className={`px-3 py-1 text-xs font-medium ${}
                    activeTab === lang"
=======

          </table>;
        </div>;
      )}      {codeExamples && (
        <div className="border-t border-zinc-800 p-4">"
          <div className="flex items-center mb-2">"
            <h4 className="font-medium">Request Example</h4>"
            <div className="ml-auto flex border border-zinc-700 rounded-md overflow-hidden">"
              {Object.keys(codeExamples).map((lang) => (                <button
}
key={lang}
                  className={`px-3 py-1 text-xs font-medium ${`                    }
                    activeTab === lang
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      ? "bg-zinc-700 text-white""
                      : "text-zinc-400 "hover":bg-zinc-800""
                  }`}`
                  onClick={() => setActiveTab(lang)}

<<<<<<< HEAD
                >;

=======
      {responseExamples && (;
        <div className="border-t border-zinc-800 p-4">;"
          <h4 className="font-medium mb-2">Response</h4>;"
          <CodeBlock
}
code={responseExamples && responseExamples.success}
            language="json""
                  {lang === "curl" ? "cURL" :lang === "javascript" ? "JavaScript" :"Python"}"
                </button>;              ))}
>>>>>>> origin/cursor/delete-old-data-records-6bba
            </div>;
          </div>;
          <CodeBlock ;
            code={codeExamples[activeTab]}
<<<<<<< HEAD

=======
            language={activeTab === "curl" ? "bash" :activeTab}" />;
        </div>;
      )}
      ;
      {responseExamples && (;
        <div className="border-t border-zinc-800 p-4">;"
          <h4 className="font-medium mb-2">Response</h4>;"
          <CodeBlock;
            }
            code={responseExamples.success}
            language="json";" />;
        </div>;
      )}
    </div>;
  );
}    </div>;
  );
}
;

                >
                  {lang === curl" ? "cURL : lang === javascript" ? "JavaScript : Python"}
>>>>>>> origin/cursor/delete-old-data-records-6bba
            language={activeTab === "curl" ? "bash" : activeTab}
          />;
        </div>;
      )}


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <button

                  key={lang}
                  className={`px-3 py-1 text-xs font-medium ${
                    activeTab === lang
                      ? "bg-zinc-700 text-white"
                      : "text-zinc-400 hover:bg-zinc-800"
                  }`}
                  onClick={() => setActiveTab(lang)}
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

=======
>
                  {lang === "curl" ? "cURL" : lang === "javascript" ? "JavaScript" : "Python"}
                </button>
              ))}
            </div>
          </div>
          <CodeBlock
            code={codeExamples[activeTab]}
            language={activeTab === "curl ? bash" : activeTab}
          />
        </div>
      )}
      {responseExamples && (
        <div className="border-t border-zinc-800 p-4>
          <h4 className=font-medium mb-2">Response</h4>
          <CodeBlock
            code={responseExamples.success}
            language="json"
          />
        </div>
>>>>>>> origin/cursor/delete-old-data-records-6bba
      )}

      {responseExamples && (;
        <div className="border-t border-zinc-800 p-4">;
          <h4 className="font-medium mb-2">Response</h4>;
          <CodeBlock
            code={responseExamples && responseExamples.success}
            language="json"

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      ;
      {responseExamples && (;
        <div className="border-t border-zinc-800 p-4">;
          <h4 className="font-medium mb-2">Response</h4>;
          <CodeBlock;
            code={responseExamples.success}
            language="json";

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          />;
        </div>;
      )}
    </div>;


                    {param.required && <span className="text - red - 500">*</span>}
                  </td>;
                  <td className="py - 2 text - sm text - zinc - 400">{param.type}</td>;

                  <td className="py - 2 text - sm text - zinc - 400">{param.description}</td>;
                </tr>))}
            </tbody>;
          </table>;
        </div>)}

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

            language="json";

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

<<<<<<< HEAD


;


=======
;

;
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba




<<<<<<< HEAD
=======
    </div>;
  );
}

;
>>>>>>> origin/cursor/delete-old-data-records-6bba
