<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx

<<<<<<< HEAD

import React, { useState } from "react",
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",

=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { useState } from "react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
import {CodeBlock} from "@/components/developers/CodeBlock";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
export function ApiReference() {;
  const [activeEndpoint, setActiveEndpoint] = useState("get-jobs");
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React, { useState } from "react",
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",
<<<<<<< HEAD
import { CodeBlock } from "@/components/developers/CodeBlock";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export function ApiReference() {
  const [activeEndpoint, setActiveEndpoint] = useState("get-jobs");
=======
import { CodeBlock } from "@/components/developers/CodeBlock",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",

export function ApiReference() {
  const [activeEndpoint, setActiveEndpoint] = useState("get-jobs"),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Sample endpoint data

  const endpoints = [
    {
      id: "get-jobs"
      method: "GET"
      path: "/api/jobs"
      description: "Retrieve a list of job postings with optional filtering"
      parameters: [
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
        { name: "status", type: "string", description: "Filter by job status (open, closed, draft)" }
        { name: "category", type: "string", description: "Filter by job category" }
        { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" }
        { name: "offset", type: "integer", description: "Pagination offset (default: 0)" }]
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        { name: "status", type: "string", description: "Filter by job status (open, closed, draft)" },
        { name: "category", type: "string", description: "Filter by job category" },
        { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },
        { name: "offset", type: "integer", description: "Pagination offset (default: 0)" }],
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      responses: {
        "200": {
          description: "A list of jobs"
          example: `{
  "jobs": [
    {
<<<<<<< HEAD

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React, { useState } from "react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
import {CodeBlock} from "@/components/developers/CodeBlock";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
export function ApiReference() {;
  const [activeEndpoint, setActiveEndpoint] = useState("get-jobs");
  // Sample endpoint data;
  const endpoints = [;
    {;
      id: "get-jobs",;
      method: "GET",;
      path: "/api/jobs",;
      description: "Retrieve a list of job postings with optional filtering",;
      parameters: [;
        { name: "status", type: "string", description: "Filter by job status (open, closed, draft)" };
        { name: "category", type: "string", description: "Filter by job category" },;
        { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },;
        { name: "offset", type: "integer", description: "Pagination offset (default: 0)" }],;
      responses: {;
        "200": {;
          description: "A list of jobs",;
          example: `{;
  "jobs": [;
    {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx
      "id": "job-123";
import React, { useState } from './react';
import ApiDocsLayout from "@/components / developers / ApiDocsLayout";
import { CodeBlock } from '@/components / developers / CodeBlock';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
export /**
 * ApiReference - Function description
 */
function ApiReference() {
  const [active_endpoint, setActiveEndpoint] = useState ("get - jobs");
;
  // Sample endpoint data;
  const endpoints = [;
    {
      id: "get - jobs",
      method: "GET",
      path: "/api / jobs",
      description: "Retrieve a list of job postings with optional filtering",
      parameters: [;
        { name: "status", type: "string", description: "Filter by job status (open, closed, draft)" }
        { name: "category", type: "string", description: "Filter by job category" },
        { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },
        { name: "offset", type: "integer", description: "Pagination offset (default: 0)" }],
      responses: {
        "200": {
          description: "A list of jobs",
          example: `{
  "jobs": [;
    {
      "id": "job - 123";
      "title": "Senior React Developer";
      "description": "We're looking for an experienced React developer...";
      "category": "development";
      "budget": {;
        "min": 5000;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx
        "max": 10000,
        "currency": "USD";
      }
      "status": "open";
      "created_at": "2023 - 05 - 10T15:30:00Z";
    }
    // More jobs...;
  ];
  "count": 42;
  "limit": 20;
  "offset": 0;
}`;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx
        }
        "401": {
          description: "Unauthorized"
          example: `{
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx

  "error": "invalid_token",
  "message": "The provided API key is invalid or expired";
}`;

========
  "error": "invalid_token",
  "message": "The provided API key is invalid or expired";
}`;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx
        }
        "429": {
          description: "Rate limit exceeded"
          example: `{
  "error": "rate_limit_exceeded";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      "id": "job-123",
      "title": "Senior React Developer",
      "description": "We're looking for an experienced React developer...",
      "category": "development",
      "budget": {
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
        "min": 5000;
        "max": 10000
        "currency": "USD"
      }
      "status": "open";
      "created_at": "2023-05-10T15:30:00Z"
    }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
        "min": 5000,
        "max": 10000,
        "currency": "USD"
      },
      "status": "open",
      "created_at": "2023-05-10T15:30:00Z"
    },
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    // More jobs...
  ],
  "count": 42,
  "limit": 20,
  "offset": 0
}`
<<<<<<< HEAD

<<<<<<< HEAD
=======
        },

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
        }
=======
        },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        "401": {
          description: "Unauthorized"
          example: `{
  "error": "invalid_token"
  "message": "The provided API key is invalid or expired"
}`
<<<<<<< HEAD

<<<<<<< HEAD
=======
        },

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        "429": {
          description: "Rate limit exceeded"
          example: `{

<<<<<<< HEAD
=======
<<<<<<< HEAD
        }
=======
        },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        "429": {
          description: "Rate limit exceeded"
          example: `{
<<<<<<< HEAD
  "error": "rate_limit_exceeded";
  "message": "Rate limit exceeded. Please try again in 60 seconds"
  "retry_after": 60
}`
        }
      }
      requestExample: `curl -X GET \\
  https://api.zionai.com/v1/api/jobs?status=open&limit=10 \\
  -H "Authorization: Bearer YOUR_API_KEY"`
    }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  "error": "rate_limit_exceeded",
  "message": "Rate limit exceeded. Please try again in 60 seconds",
  "retry_after": 60
}`
        }
      },
      requestExample: `curl -X GET \\
  https://api.zionai.com/v1/api/jobs?status=open&limit=10 \\
  -H "Authorization: Bearer YOUR_API_KEY"`
    },
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {
      id: "post-jobs"
      method: "POST"
      path: "/api/jobs"
      description: "Create a new job posting"
      parameters: [
<<<<<<< HEAD

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx
  "message": "Rate limit exceeded. Please try again in 60 seconds",
  "retry_after": 60;
}`;
        }
      }
      request_example: `curl -X GET \\;
  https://api.zionai.com / v1 / api / jobs?status = open & limit = 10 \\;
  -H "Authorization: Bearer YOUR_API_KEY"`;
    }
    {
      id: "post - jobs",
      method: "POST",
      path: "/api / jobs",
      description: "Create a new job posting",
      parameters: [;
        { name: "title", type: "string", required: true, description: "Job title" },
        { name: "description", type: "string", required: true, description: "Detailed job description" },
        { name: "category", type: "string", required: true, description: "Job category" },
        { name: "budget", type: "object", required: true, description: "Budget information with min, max, and currency" }
        { name: "skills", type: "array", description: "Array of required skills" },
        { name: "deadline", type: "string", description: "Application deadline (ISO date format)" }],
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx

=======

=======
<<<<<<< HEAD
        { name: "title", type: "string", required: true, description: "Job title" }
        { name: "description", type: "string", required: true, description: "Detailed job description" }
        { name: "category", type: "string", required: true, description: "Job category" }
        { name: "budget", type: "object", required: true, description: "Budget information with min, max, and currency" }
        { name: "skills", type: "array", description: "Array of required skills" }
        { name: "deadline", type: "string", description: "Application deadline (ISO date format)" }]
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        { name: "title", type: "string", required: true, description: "Job title" },
        { name: "description", type: "string", required: true, description: "Detailed job description" },
        { name: "category", type: "string", required: true, description: "Job category" },
        { name: "budget", type: "object", required: true, description: "Budget information with min, max, and currency" },
        { name: "skills", type: "array", description: "Array of required skills" },
        { name: "deadline", type: "string", description: "Application deadline (ISO date format)" }],
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      responses: {
        "201": {
          description: "Job created successfully"
          example: `{
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  "id": "job-456",
  "title": "UX Designer",
  "description": "Looking for a UX designer with 3+ years experience...",
  "category": "design",
  "budget": {
<<<<<<< HEAD

=======
<<<<<<< HEAD
    "min": 3000;
    "max": 5000
    "currency": "USD"
  }
  "status": "open";
  "created_at": "2023-05-15T10:12:00Z"
}`
        }
=======
    "min": 3000,
    "max": 5000,
    "currency": "USD"
  },
  "status": "open",
  "created_at": "2023-05-15T10:12:00Z"
}`
        },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        "400": {
          description: "Bad request"
          example: `{
  "error": "validation_error",
  "message": "Invalid input",
  "details": [
    {
<<<<<<< HEAD

=======
<<<<<<< HEAD
      "field": "title"
      "error": "Title is required"
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
  ]
}`
        }
<<<<<<< HEAD

=======
<<<<<<< HEAD
      }
=======
      "field": "title",
      "error": "Title is required"
=======
      };
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React, { useState } from "react",;
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",;
import { CodeBlock } from "@/components/developers/CodeBlock",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
export function ApiReference() {;
  const [activeEndpoint, setActiveEndpoint] = useState("get-jobs"),;
  // Sample endpoint data;
  const endpoints = [;
    {;
      id: "get-jobs",;
      method: "GET",;
      path: "/api/jobs",;
      description: "Retrieve a list of job postings with optional filtering",;
      parameters: [;
        { name: "status", type: "string", description: "Filter by job status (open, closed, draft)" },;
        { name: "category", type: "string", description: "Filter by job category" },;
        { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },;
        { name: "offset", type: "integer", description: "Pagination offset (default: 0)" }],;
      responses: {;
        "200": {;
          description: "A list of jobs",;
          example: `{;
  "jobs": [;
    {;
      "id": "job-123",;
      "title": "Senior React Developer",;
      "description": "We're looking for an experienced React developer...",;
      "category": "development",;
      "budget": {;
        "min": 5000,;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx
        "max": 10000,;
        "currency": "USD";
      };
      "status": "open";
      "created_at": "2023-05-10T15:30:00Z";
    };
    // More jobs...;
  ];
  "count": 42;
  "limit": 20;
  "offset": 0;
}`;
        };
=======
        "max": 10000,;
        "currency": "USD";
      },;
      "status": "open",;
      "created_at": "2023-05-10T15:30:00Z";
    },;
    // More jobs...;
  ],;
  "count": 42,;
  "limit": 20,;
  "offset": 0;
}`;
        },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        "401": {;
          description: "Unauthorized",;
          example: `{;
  "error": "invalid_token",;
  "message": "The provided API key is invalid or expired";
}`;
<<<<<<< HEAD
        };
        "429": {;
          description: "Rate limit exceeded",;
          example: `{;
  "error": "rate_limit_exceeded";
=======
        },;
        "429": {;
          description: "Rate limit exceeded",;
          example: `{;
  "error": "rate_limit_exceeded",;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  "message": "Rate limit exceeded. Please try again in 60 seconds",;
  "retry_after": 60;
}`;
        }
<<<<<<< HEAD
      };
      requestExample: `curl -X GET \\;
  https://api && api.zionai.com/v1/api/jobs?status=open&limit=10 \\;
  -H "Authorization: Bearer YOUR_API_KEY"`;
    };
=======
      },;
      requestExample: `curl -X GET \\;
  https://api.zionai.com/v1/api/jobs?status=open&limit=10 \\;
  -H "Authorization: Bearer YOUR_API_KEY"`;
    },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {;
      id: "post-jobs",;
      method: "POST",;
      path: "/api/jobs",;
      description: "Create a new job posting",;
      parameters: [;
        { name: "title", type: "string", required: true, description: "Job title" },;
        { name: "description", type: "string", required: true, description: "Detailed job description" },;
        { name: "category", type: "string", required: true, description: "Job category" },;
<<<<<<< HEAD
        { name: "budget", type: "object", required: true, description: "Budget information with min, max, and currency" };
=======
        { name: "budget", type: "object", required: true, description: "Budget information with min, max, and currency" },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        { name: "skills", type: "array", description: "Array of required skills" },;
        { name: "deadline", type: "string", description: "Application deadline (ISO date format)" }],;
      responses: {;
        "201": {;
          description: "Job created successfully",;
          example: `{;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx
  "id": "job-456";
  "id": "job - 456";
  "title": "UX Designer";
  "description": "Looking for a UX designer with 3+ years experience...";
  "category": "design";
  "budget": {;
    "min": 3000;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx
    "max": 5000,
    "currency": "USD";
  }
  "status": "open";
  "created_at": "2023 - 05 - 15T10:12:00Z";
}`;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx
        }
        "400": {
          description: "Bad request"
          example: `{
  "error": "validation_error";
  "message": "Invalid input";
  "details": [;
    {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx
    "max": 5000,;
    "currency": "USD";
  };
  "status": "open";
  "created_at": "2023-05-15T10:12:00Z";
}`;
        };
        "400": {;
          description: "Bad request",;
          example: `{;
  "error": "validation_error";
  "message": "Invalid input";
=======
  "id": "job-456",;
  "title": "UX Designer",;
  "description": "Looking for a UX designer with 3+ years experience...",;
  "category": "design",;
  "budget": {;
    "min": 3000,;
    "max": 5000,;
    "currency": "USD";
  },;
  "status": "open",;
  "created_at": "2023-05-15T10:12:00Z";
}`;
        },;
        "400": {;
          description: "Bad request",;
          example: `{;
  "error": "validation_error",;
  "message": "Invalid input",;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  "details": [;
    {;
      "field": "title",;
      "error": "Title is required";
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx
      "field": "title",
      "error": "Title is required";
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
  ];
}`;
        }
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx
<<<<<<< HEAD
      },
=======

  "id": "job-456",
  "title": "UX Designer",
  "description": "Looking for a UX designer with 3+ years experience...",
  "category": "design",
  "budget": {

    "min": 3000,
    "max": 5000,
    "currency": "USD"
  },
  "status": "open",
  "created_at": "2023-05-15T10:12:00Z"
}`
        },

        "400": {
          description: "Bad request"
          example: `{
  "error": "validation_error",
  "message": "Invalid input",
  "details": [
    {


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
      },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      requestExample: `curl -X POST \\
  https://api.zionai.com/v1/api/jobs \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx
      }
      request_example: `curl -X POST \\;
  https://api.zionai.com / v1 / api / jobs \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json" \\;
  -d '{
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx
      };
      requestExample: `curl -X POST \\;
  https://api && api.zionai.com/v1/api/jobs \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content-Type: application/json" \\;
  -d '{;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx
    "title": "UX Designer";
    "description": "Looking for a UX designer with 3+ years experience...";
    "category": "design";
    "budget": {;
      "min": 3000;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx

=======
  -d '{
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    "title": "UX Designer",
    "description": "Looking for a UX designer with 3+ years experience...",
    "category": "design",
    "budget": {
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
      "min": 3000;
      "max": 5000
      "currency": "USD"
    }
    "skills": ["Figma", "User Research", "Prototyping"];
    "deadline": "2023-07-01T00:00:00Z"
  }'`
    }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      "min": 3000,
      "max": 5000,
      "currency": "USD"
    },
    "skills": ["Figma", "User Research", "Prototyping"],
    "deadline": "2023-07-01T00:00:00Z"
  }'`
    },
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {
      id: "get-talent"
      method: "GET"
      path: "/api/talent"
      description: "Search for talent profiles with optional filtering"
      parameters: [
<<<<<<< HEAD

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx
      "max": 5000,
      "currency": "USD";
    }
    "skills": ["Figma", "User Research", "Prototyping"];
    "deadline": "2023 - 07 - 01T00:00:00Z";
  }'`;
    }
    {
      id: "get - talent",
      method: "GET",
      path: "/api / talent",
      description: "Search for talent profiles with optional filtering",
      parameters: [;
        { name: "skills", type: "string", description: "Comma - separated list of skills" },
=======

        { name: "skills", type: "string", description: "Comma-separated list of skills" },

        { name: "category", type: "string", description: "Filter by talent category" },
        { name: "rate_min", type: "integer", description: "Minimum hourly rate" },
        { name: "rate_max", type: "integer", description: "Maximum hourly rate" },
        { name: "availability", type: "string", description: "Availability type (full - time, part - time)" }
        { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },
        { name: "offset", type: "integer", description: "Pagination offset (default: 0)" }],
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx
=======
<<<<<<< HEAD
        { name: "skills", type: "string", description: "Comma-separated list of skills" }
        { name: "category", type: "string", description: "Filter by talent category" }
        { name: "rate_min", type: "integer", description: "Minimum hourly rate" }
        { name: "rate_max", type: "integer", description: "Maximum hourly rate" }
        { name: "availability", type: "string", description: "Availability type (full-time, part-time)" }
        { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" }
        { name: "offset", type: "integer", description: "Pagination offset (default: 0)" }]
=======
        { name: "skills", type: "string", description: "Comma-separated list of skills" },
        { name: "category", type: "string", description: "Filter by talent category" },
        { name: "rate_min", type: "integer", description: "Minimum hourly rate" },
        { name: "rate_max", type: "integer", description: "Maximum hourly rate" },
        { name: "availability", type: "string", description: "Availability type (full-time, part-time)" },
        { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },
        { name: "offset", type: "integer", description: "Pagination offset (default: 0)" }],
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      responses: {
        "200": {
          description: "A list of talent profiles"
          example: `{
<<<<<<< HEAD
  "talent": [;
    {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx

<<<<<<< HEAD
    // More talent profiles...
  ],
  "count": 38,
  "limit": 20,
  "offset": 0
}`
        }

=======
========
      "id": "talent - 123";
      "full_name": "Jane Smith";
      "professional_title": "Full Stack Developer"
      "skills": ["React", "Node.js", "TypeScript"];
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx
      "max": 5000,;
      "currency": "USD";
    };
    "skills": ["Figma", "User Research", "Prototyping"];
    "deadline": "2023-07-01T00:00:00Z";
  }'`;
    };
    {;
      id: "get-talent",;
      method: "GET",;
      path: "/api/talent",;
      description: "Search for talent profiles with optional filtering",;
      parameters: [;
        { name: "skills", type: "string", description: "Comma-separated list of skills" },;
        { name: "category", type: "string", description: "Filter by talent category" },;
        { name: "rate_min", type: "integer", description: "Minimum hourly rate" },;
        { name: "rate_max", type: "integer", description: "Maximum hourly rate" },;
        { name: "availability", type: "string", description: "Availability type (full-time, part-time)" };
        { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },;
        { name: "offset", type: "integer", description: "Pagination offset (default: 0)" }],;
      responses: {;
        "200": {;
          description: "A list of talent profiles",;
          example: `{;
  "talent": [;
    {;
      "id": "talent-123";
      "full_name": "Jane Smith";
      "professional_title": "Full Stack Developer",;
      "skills": ["React", "Node && Node.js", "TypeScript"];
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx
      "hourly_rate": 75;
      "availability": "full - time";
      "years_experience": 5;
      "location": "Remote, US";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx


=======
  "talent": [
    {
<<<<<<< HEAD
      "id": "talent-123";
      "full_name": "Jane Smith";
      "professional_title": "Full Stack Developer"
      "skills": ["React", "Node.js", "TypeScript"];
      "hourly_rate": 75;
      "availability": "full-time";
      "years_experience": 5;
      "location": "Remote, US";
      "bio": "Experienced full stack developer with a focus on React and Node.js..."
    }
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      "id": "talent-123",
      "full_name": "Jane Smith",
      "professional_title": "Full Stack Developer",
      "skills": ["React", "Node.js", "TypeScript"],
      "hourly_rate": 75,
      "availability": "full-time",
      "years_experience": 5,
      "location": "Remote, US",
      "bio": "Experienced full stack developer with a focus on React and Node.js..."
    },
<<<<<<< HEAD


    // More talent profiles...
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx
      "bio": "Experienced full stack developer with a focus on React and Node && Node.js...";
    };
    // More talent profiles...;
      "bio": "Experienced full stack developer with a focus on React and Node.js...";
    }
    // More talent profiles...;
  ];
  "count": 38;
  "limit": 20;
  "offset": 0;
}`;
        }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx


      },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    // More talent profiles...
  ],
  "count": 38,
  "limit": 20,
  "offset": 0
}`
        }
<<<<<<< HEAD
      }
=======
      },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      requestExample: `curl -X GET \\
  https://api.zionai.com/v1/api/talent?skills=React,Node.js&limit=10 \\
  -H "Authorization: Bearer YOUR_API_KEY"`
    }
<<<<<<< HEAD
<<<<<<< HEAD

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx
      };
      requestExample: `curl -X GET \\;
  https://api && api.zionai.com/v1/api/talent?skills=React,Node && Node.js&limit=10 \\;
  -H "Authorization: Bearer YOUR_API_KEY"`;
    }
  ];
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx
=======

  ],


  // Find the active endpoint data;
  const activeEndpointData = endpoints && endpoints.find(e => e && e.id === activeEndpoint);




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
  // Find the active endpoint data;
  const activeEndpointData = endpoints && endpoints.find(e => e && e.id === activeEndpoint);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx
  return (
=======

import React, { useState } from "react",;
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",;
import { CodeBlock } from "@/components/developers/CodeBlock",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
;
export function ApiReference() {;
  const [activeEndpoint, setActiveEndpoint] = useState("get-jobs"),;
;
  // Sample endpoint data;
  const endpoints = [;
    {;
      id:"get-jobs",;
      method:"GET",;
      path:"/api/jobs",;
      description:"Retrieve a list of job postings with optional filtering",;
      parameters:[;
        { name:"status", type:"string", description:"Filter by job status (open, closed, draft)" },;
        { name:"category", type:"string", description:"Filter by job category" },;
        { name:"limit", type:"integer", description:"Number of results per page (default:20, max:100)" },;
        { name:"offset", type:"integer", description:"Pagination offset (default:0)" }],;
      responses:{;
        "200":{;
          description:"A list of jobs",;
          example:`{;
  "jobs":[;
    {;
      "id":"job-123",;
      "title":"Senior React Developer",;
      "description":"We're looking for an experienced React developer...",;
      "category":"development",;
      "budget":{;
        "min":5000,;
        "max":10000,;
        "currency":"USD";
      },;
      "status":"open",;
      "created_at":"2023-05-10T15:30:00Z";
    },;
    // More jobs...;
  ],;
  "count":42,;
  "limit":20,;
  "offset":0;
}`;
        },;
        "401":{;
          description:"Unauthorized",;
          example:`{;
  "error":"invalid_token",;
  "message":"The provided API key is invalid or expired";
}`;
        },;
        "429":{;
          description:"Rate limit exceeded",;
          example:`{;
  "error":"rate_limit_exceeded",;
  "message":"Rate limit exceeded. Please try again in 60 seconds",;
  "retry_after":60;
}`;
        }
      },;
      requestExample:`curl -X GET \\;
  https://api.zionai.com/v1/api/jobs?status=open&limit=10 \\;
  -H "Authorization:Bearer YOUR_API_KEY"`;
    },;
    {;
      id:"post-jobs",;
      method:"POST",;
      path:"/api/jobs",;
      description:"Create a new job posting",;
      parameters:[;
        { name:"title", type:"string", required:true, description:"Job title" },;
        { name:"description", type:"string", required:true, description:"Detailed job description" },;
        { name:"category", type:"string", required:true, description:"Job category" },;
        { name:"budget", type:"object", required:true, description:"Budget information with min, max, and currency" },;
        { name:"skills", type:"array", description:"Array of required skills" },;
        { name:"deadline", type:"string", description:"Application deadline (ISO date format)" }],;
      responses:{;
        "201":{;
          description:"Job created successfully",;
          example:`{;
  "id":"job-456",;
  "title":"UX Designer",;
  "description":"Looking for a UX designer with 3+ years experience...",;
  "category":"design",;
  "budget":{;
    "min":3000,;
    "max":5000,;
    "currency":"USD";
  },;
  "status":"open",;
  "created_at":"2023-05-15T10:12:00Z";
}`;
        },;
        "400":{;
          description:"Bad request",;
          example:`{;
  "error":"validation_error",;
  "message":"Invalid input",;
  "details":[;
    {;
      "field":"title",;
      "error":"Title is required";
    }
  ];
}`;
        }
      },;
      requestExample:`curl -X POST \\;
  https://api.zionai.com/v1/api/jobs \\;
  -H "Authorization:Bearer YOUR_API_KEY" \\;
  -H "Content-Type:application/json" \\;
  -d '{;
    "title":"UX Designer",;
    "description":"Looking for a UX designer with 3+ years experience...",;
    "category":"design",;
    "budget":{;
      "min":3000,;
      "max":5000,;
      "currency":"USD";
    },;
    "skills":["Figma", "User Research", "Prototyping"],;
    "deadline":"2023-07-01T00:00:00Z";
  }'`;
    },;
    {;
      id:"get-talent",;
      method:"GET",;
      path:"/api/talent",;
      description:"Search for talent profiles with optional filtering",;
      parameters:[;
        { name:"skills", type:"string", description:"Comma-separated list of skills" },;
        { name:"category", type:"string", description:"Filter by talent category" },;
        { name:"rate_min", type:"integer", description:"Minimum hourly rate" },;
        { name:"rate_max", type:"integer", description:"Maximum hourly rate" },;
        { name:"availability", type:"string", description:"Availability type (full-time, part-time)" },;
        { name:"limit", type:"integer", description:"Number of results per page (default:20, max:100)" },;
        { name:"offset", type:"integer", description:"Pagination offset (default:0)" }],;
      responses:{;
        "200":{;
          description:"A list of talent profiles",;
          example:`{;
  "talent":[;
    {;
      "id":"talent-123",;
      "full_name":"Jane Smith",;
      "professional_title":"Full Stack Developer",;
      "skills":["React", "Node.js", "TypeScript"],;
      "hourly_rate":75,;
      "availability":"full-time",;
      "years_experience":5,;
      "location":"Remote, US",;
      "bio":"Experienced full stack developer with a focus on React and Node.js...";
    },;
    // More talent profiles...;
  ],;
  "count":38,;
  "limit":20,;
  "offset":0;
}`;
        }
      },;
      requestExample:`curl -X GET \\;
  https://api.zionai.com/v1/api/talent?skills=React,Node.js&limit=10 \\;
  -H "Authorization:Bearer YOUR_API_KEY"`;
    }
  ],;
;
  // Find the active endpoint data;
  const activeEndpointData = endpoints.find(e => e.id === activeEndpoint),;
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <ApiDocsLayout>;
      <div className="grid md:grid-cols-5 gap-8">;
        {/* Endpoint list */}
        <div className="md:col-span-1">;
          <div className="sticky top-8">;
            <h3 className="text-lg font-semibold text-white mb-4">Endpoints</h3>;
            <ul className="space-y-2">;
<<<<<<< HEAD
              {endpoints && endpoints.map((endpoint) => (;
                <li key={endpoint && endpoint.id}>;
                  <button
                    onClick={() => setActiveEndpoint(endpoint && endpoint.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm flex items-center ${;
                      activeEndpoint === endpoint && endpoint.id;
                        ? "bg-zion-purple/20 text-zion-cyan";
                        : "text-zinc-400 hover:text-white hover:bg-zinc-900";
                    }`}
                  >;
                    <span className={`inline-block w-16 font-mono ${endpoint && endpoint.method === "GET" ? "text-green-500" : endpoint && endpoint.method === "POST" ? "text-blue-500" : "text-yellow-500"}`}>;
                      {endpoint && endpoint.method}
                    </span>;
                    <span className="truncate">{endpoint && endpoint.path}</span>;
                  </button>;
                </li>;
              ))}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx
      }
      request_example: `curl -X GET \\;
  https://api.zionai.com / v1 / api / talent?skills = React, Node.js & limit = 10 \\;
  -H "Authorization: Bearer YOUR_API_KEY"`;
    }
  ];
;
  // Find the active endpoint data;
  const activeEndpointData = endpoints.find (e => e.id === active_endpoint);
;
  return (
    <ApiDocsLayout>;
      <div className="grid md:grid - cols - 5 gap - 8">;
        {/* Endpoint list */}
        <div className="md:col - span - 1">;
          <div className="sticky top - 8">;
            <h3 className="text - lg font - semibold text - white mb - 4">Endpoints</h3>;
            <ul className="space - y-2">;
              {endpoints.map ((endpoint) => (
                <li key={endpoint.id}>;
                  <button;
                    on_click={() => setActiveEndpoint (endpoint.id)}
                    className={`w - full text - left px - 3 py - 2 rounded - md text - sm flex items - center ${
                      active_endpoint === endpoint.id;
                        ? "bg - zion - purple / 20 text - zion - cyan";
                        : "text - zinc - 400 hover:text - white hover:bg - zinc - 900";
                    }`}
                  >;
                    <span className={`inline - block w - 16 font - mono ${endpoint.method === "GET" ? "text - green - 500" : endpoint.method === "POST" ? "text - blue - 500" : "text - yellow - 500"}`}>;
=======
              {endpoints.map((endpoint) => (;
                <li key={endpoint.id}>;
                  <button;
                    onClick={() => setActiveEndpoint(endpoint.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm flex items-center ${;
                      activeEndpoint === endpoint.id;
                        ? "bg-zion-purple/20 text-zion-cyan";
                        :"text-zinc-400 hover:text-white hover:bg-zinc-900";
                    }`}
                  >;
                    <span className={`inline-block w-16 font-mono ${endpoint.method === "GET" ? "text-green-500" :endpoint.method === "POST" ? "text-blue-500" :"text-yellow-500"}`}>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      {endpoint.method}
                    </span>;
                    <span className="truncate">{endpoint.path}</span>;
                  </button>;
<<<<<<< HEAD
                </li>))}
            </ul>;
          </div>;
        </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx

        {/* Endpoint details */}
        <div className="md:col - span - 4">;
          {activeEndpointData ? (

========
        {/* Endpoint details */}
        <div className="md:col - span - 4">;
          {activeEndpointData ? (
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx
            </ul>;
          </div>;
        </div>;
        {/* Endpoint details */}
=======
                </li>;              ))}
            </ul>;
          </div>;
        </div>;
;
        {/* Endpoint details */}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <div className="md:col-span-4">;
          {activeEndpointData ? (;
            <div>;
              <div className="flex items-center mb-6">;
<<<<<<< HEAD
                <spanclassName={`inline-block px-2 py-1 text-xs font-medium rounded mr-3 ${
                  activeEndpointData && activeEndpointData.method === "GET" ? "bg-green-950 text-green-500" : 
                  activeEndpointData && activeEndpointData.method === "POST" ? "bg-blue-950 text-blue-500" : 
                  "bg-yellow-950 text-yellow-500"
                }`}>;
                  {activeEndpointData && activeEndpointData.method}
                </span>;
                <span className="font-mono text-lg text-white">{activeEndpointData && activeEndpointData.path}</span>;
              </div>;
              <p className="text-zinc-400 mb-8">{activeEndpointData && activeEndpointData.description}</p>;
=======
                <span className={`inline-block px-2 py-1 text-xs font-medium rounded mr-3 ${;
                  activeEndpointData.method === "GET" ? "bg-green-950 text-green-500" :;
                  activeEndpointData.method === "POST" ? "bg-blue-950 text-blue-500" :;
                  "bg-yellow-950 text-yellow-500";
                }`}>;
                  {activeEndpointData.method}
                </span>;
                <span className="font-mono text-lg text-white">{activeEndpointData.path}</span>;
              </div>;
;
              <p className="text-zinc-400 mb-8">{activeEndpointData.description}</p>;
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <Tabs defaultValue="docs">;
                <TabsList className="mb-6">;
                  <TabsTrigger value="docs">Documentation</TabsTrigger>;
                  <TabsTrigger value="try">Try It</TabsTrigger>;
                </TabsList>;
                <TabsContent value="docs">;
                  {/* Request section */}
                  <div className="mb-8">;
                    <h3 className="text-xl font-semibold text-white mb-4">Request</h3>;
<<<<<<< HEAD
                    {activeEndpointData && activeEndpointData.parameters && activeEndpointData && activeEndpointData.parameters.length > 0 && (;
=======
                    ;
                    {activeEndpointData.parameters && activeEndpointData.parameters.length > 0 && (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      <>;
                        <h4 className="text-lg font-medium text-white mb-3">Parameters</h4>;
                        <div className="overflow-x-auto mb-6">;
                          <table className="w-full border-collapse">;
                            <thead>;
                              <tr className="border-b border-zinc-800">;
                                <th className="text-left py-2 px-4 text-zinc-400 font-medium">Name</th>;
                                <th className="text-left py-2 px-4 text-zinc-400 font-medium">Type</th>;
                                <th className="text-left py-2 px-4 text-zinc-400 font-medium">Required</th>;
                                <th className="text-left py-2 px-4 text-zinc-400 font-medium">Description</th>;
                              </tr>;
                            </thead>;
                            <tbody>;
<<<<<<< HEAD
                              {activeEndpointData && activeEndpointData.parameters.map((param, index) => (;
                                <tr key={param && param.name} className={index < activeEndpointData && activeEndpointData.parameters.length - 1 ? "border-b border-zinc-800" : ""}>;
                                  <td className="py-2 px-4 text-white font-mono">{param && param.name}</td>;
                                  <td className="py-2 px-4 text-blue-400 font-mono">{param && param.type}</td>;
                                  <td className="py-2 px-4 text-zinc-300">{param && param.required ? "Yes" : "No"}</td>;
                                  <td className="py-2 px-4 text-zinc-300">{param && param.description}</td>;
                                </tr>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx
                              ))}
=======
                              {activeEndpointData.parameters.map((param, index) => (;
                                <tr key={param.name} className={index < activeEndpointData.parameters.length - 1 ? "border-b border-zinc-800" :""}>;
                                  <td className="py-2 px-4 text-white font-mono">{param.name}</td>;
                                  <td className="py-2 px-4 text-blue-400 font-mono">{param.type}</td>;
                                  <td className="py-2 px-4 text-zinc-300">{param.required ? "Yes" :"No"}</td>;
                                  <td className="py-2 px-4 text-zinc-300">{param.description}</td>;
                                </tr>;                              ))}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                            </tbody>;
                          </table>;
                        </div>;
                      </>;
                    )}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx

=======



                    <h4 className="text-lg font-medium text-white mb-3">Example Request</h4>
                    <CodeBlock 
                      code={activeEndpointData.requestExample} 


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  ];
  // Find the active endpoint data
  const activeEndpointData = endpoints.find(e => e.id === activeEndpoint);
=======
  ],

  // Find the active endpoint data
  const activeEndpointData = endpoints.find(e => e.id === activeEndpoint),

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <ApiDocsLayout>
      <div className="grid md:grid-cols-5 gap-8">
        {/* Endpoint list */}
        <div className="md:col-span-1">
          <div className="sticky top-8">
            <h3 className="text-lg font-semibold text-white mb-4">Endpoints</h3>
            <ul className="space-y-2">
              {endpoints.map((endpoint) => (
                <li key={endpoint.id}>
                  <button
                    onClick={() => setActiveEndpoint(endpoint.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm flex items-center ${
                      activeEndpoint === endpoint.id
                        ? "bg-zion-purple/20 text-zion-cyan"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                    }`}
                  >
                    <span className={`inline-block w-16 font-mono ${endpoint.method === "GET" ? "text-green-500" : endpoint.method === "POST" ? "text-blue-500" : "text-yellow-500"}`}>
                      {endpoint.method}
                    </span>
                    <span className="truncate">{endpoint.path}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Endpoint details */}
        <div className="md:col-span-4">
          {activeEndpointData ? (
            <div>
              <div className="flex items-center mb-6">
                <span className={`inline-block px-2 py-1 text-xs font-medium rounded mr-3 ${
                  activeEndpointData.method === "GET" ? "bg-green-950 text-green-500" :
                  activeEndpointData.method === "POST" ? "bg-blue-950 text-blue-500" :
                  "bg-yellow-950 text-yellow-500"
                }`}>
                  {activeEndpointData.method}
                </span>
                <span className="font-mono text-lg text-white">{activeEndpointData.path}</span>
              </div>
              <p className="text-zinc-400 mb-8">{activeEndpointData.description}</p>
              <Tabs defaultValue="docs">
                <TabsList className="mb-6">
                  <TabsTrigger value="docs">Documentation</TabsTrigger>
                  <TabsTrigger value="try">Try It</TabsTrigger>
                </TabsList>
                <TabsContent value="docs">
                  {/* Request section */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Request</h3>
                    {activeEndpointData.parameters && activeEndpointData.parameters.length > 0 && (
                      <>
                        <h4 className="text-lg font-medium text-white mb-3">Parameters</h4>
                        <div className="overflow-x-auto mb-6">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="border-b border-zinc-800">
                                <th className="text-left py-2 px-4 text-zinc-400 font-medium">Name</th>
                                <th className="text-left py-2 px-4 text-zinc-400 font-medium">Type</th>
                                <th className="text-left py-2 px-4 text-zinc-400 font-medium">Required</th>
                                <th className="text-left py-2 px-4 text-zinc-400 font-medium">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              {activeEndpointData.parameters.map((param, index) => (
                                <tr key={param.name} className={index < activeEndpointData.parameters.length - 1 ? "border-b border-zinc-800" : ""}>
                                  <td className="py-2 px-4 text-white font-mono">{param.name}</td>
                                  <td className="py-2 px-4 text-blue-400 font-mono">{param.type}</td>
                                  <td className="py-2 px-4 text-zinc-300">{param.required ? "Yes" : "No"}</td>
                                  <td className="py-2 px-4 text-zinc-300">{param.description}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </>
                    )}
<<<<<<< HEAD
                    <h4 className="text-lg font-medium text-white mb-3">Example Request</h4>
                    <CodeBlock
                      code={activeEndpointData.requestExample}
=======

                    <h4 className="text-lg font-medium text-white mb-3">Example Request</h4>
                    <CodeBlock 
                      code={activeEndpointData.requestExample} 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      language="bash"
                      showLineNumbers={true}
                    />
                  </div>
                  {/* Response section */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Responses</h3>
                    {Object.entries(activeEndpointData.responses).map(([status, response]) => (
                      <div key={status} className="mb-6">
                        <div className="flex items-center mb-3">
                          <span className={`inline-block px-2 py-1 text-xs font-medium rounded mr-3 ${
                            status.startsWith('2') ? 'bg-green-950 text-green-500' :
                            status === '401' |status === '403' ? 'bg-orange-950 text-orange-500' :
<<<<<<< HEAD
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx
                    <h4 className="text-lg font-medium text-white mb-3">Example Request</h4>;
                    <CodeBlock
                      code={activeEndpointData && activeEndpointData.requestExample} 
                      language="bash"
                      showLineNumbers={true}
                    />;
                  </div>;
                  {/* Response section */}
                  <div>;
                    <h3 className="text-xl font-semibold text-white mb-4">Responses</h3>;
                    {Object && Object.entries(activeEndpointData && activeEndpointData.responses).map(([status, response]) => (;
                      <div key={status} className="mb-6">;
                        <div className="flex items-center mb-3">;
                          <spanclassName={`inline-block px-2 py-1 text-xs font-medium rounded mr-3 ${
                            status && status.startsWith('2') ? 'bg-green-950 text-green-500' : 
                            status === '401' || status === '403' ? 'bg-orange-950 text-orange-500' : 
                            'bg-red-950 text-red-500'
                          }`}>;
                            {status}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx
<<<<<<< HEAD
                          </span>
                          <span className="text-white">{response.description}</span>
                        </div>

                        <CodeBlock 
                          code={response.example} 

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx
                          </span>;
                          <span className="text-white">{response && response.description}</span>;
                        </div>;
                        <CodeBlock
                          code={response && response.example} 
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx

=======

                        
=======

                        <CodeBlock 
                          code={response.example} 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx
                          language="json"
=======
;
                    <h4 className="text-lg font-medium text-white mb-3">Example Request</h4>;
                    <CodeBlock ;
                      code={activeEndpointData.requestExample} ;
                      language="bash";
                      showLineNumbers={true}
                    />;
                  </div>;
;
                  {/* Response section */}
                  <div>;
                    <h3 className="text-xl font-semibold text-white mb-4">Responses</h3>;
                    ;
                    {Object.entries(activeEndpointData.responses).map(([status, response]) => (;
                      <div key={status} className="mb-6">;
                        <div className="flex items-center mb-3">;
                          <span className={`inline-block px-2 py-1 text-xs font-medium rounded mr-3 ${;
                            status.startsWith('2') ? 'bg-green-950 text-green-500' :;
                            status === '401' || status === '403' ? 'bg-orange-950 text-orange-500' :;
                            'bg-red-950 text-red-500';
                          }`}>;
                            {status}
                          </span>;
                          <span className="text-white">{response.description}</span>;
                        </div>;
                        ;
                        <CodeBlock ;
                          code={response.example} ;
                          language="json";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                          showLineNumbers={true}
                        />;
                      </div>;
                    ))}
                  </div>;
                </TabsContent>;
                <TabsContent value="try">;
                  <div className="p-8 border border-zinc-800 rounded-lg flex items-center justify-center">;
                    <div className="text-center">;
                      <p className="text-zinc-400 mb-3">Interactive API tester coming soon</p>;
                      <p className="text-zinc-600 text-sm">Try the Postman collection in the meantime</p>;
<<<<<<< HEAD
            <div>;
              <div className="flex items - center mb - 6">;
                <span className={`inline - block px - 2 py - 1 text - xs font - medium rounded mr - 3 ${
                  activeEndpointData.method === "GET" ? "bg - green - 950 text - green - 500" :;
                  activeEndpointData.method === "POST" ? "bg - blue - 950 text - blue - 500" :;
                  "bg - yellow - 950 text - yellow - 500";
                }`}>;
                  {activeEndpointData.method}
                </span>;
                <span className="font - mono text - lg text - white">{activeEndpointData.path}</span>;
              </div>;
              <p className="text - zinc - 400 mb - 8">{activeEndpointData.description}</p>;
              <Tabs default_value="docs">;
                <TabsList className="mb - 6">;
                  <TabsTrigger value="docs">Documentation</TabsTrigger>;
                  <TabsTrigger value="try">Try It</TabsTrigger>;
                </TabsList>;
                <TabsContent value="docs">;
                  {/* Request section */}
                  <div className="mb - 8">;
                    <h3 className="text - xl font - semibold text - white mb - 4">Request</h3>;
                    {activeEndpointData.parameters && activeEndpointData.parameters.length > 0 && (
                      <>;
                        <h4 className="text - lg font - medium text - white mb - 3">Parameters</h4>;
                        <div className="overflow - x-auto mb - 6">;
                          <table className="w - full border - collapse">;
                            <thead>;
                              <tr className="border - b border - zinc - 800">;
                                <th className="text - left py - 2 px - 4 text - zinc - 400 font - medium">Name</th>;
                                <th className="text - left py - 2 px - 4 text - zinc - 400 font - medium">Type</th>;
                                <th className="text - left py - 2 px - 4 text - zinc - 400 font - medium">Required</th>;
                                <th className="text - left py - 2 px - 4 text - zinc - 400 font - medium">Description</th>;
                              </tr>;
                            </thead>;
                            <tbody>;
                              {activeEndpointData.parameters.map ((param, index) => (
                                <tr key={param.name} className={index < activeEndpointData.parameters.length - 1 ? "border - b border - zinc - 800" : ""}>;
                                  <td className="py - 2 px - 4 text - white font - mono">{param.name}</td>;
                                  <td className="py - 2 px - 4 text - blue - 400 font - mono">{param.type}</td>;
                                  <td className="py - 2 px - 4 text - zinc - 300">{param.required ? "Yes" : "No"}</td>;
                                  <td className="py - 2 px - 4 text - zinc - 300">{param.description}</td>;
                                </tr>))}
                            </tbody>;
                          </table>;
                        </div>;
                      </>)}
                    <h4 className="text - lg font - medium text - white mb - 3">Example Request</h4>;
                    <CodeBlock;
                      code={activeEndpointData.request_example}
                      language="bash";
                      showLineNumbers={true}
                    />;
                  </div>;
                  {/* Response section */}
                  <div>;
                    <h3 className="text - xl font - semibold text - white mb - 4">Responses</h3>;
                    {Object.entries (activeEndpointData.responses).map (([status, response]) => (
                      <div key={status} className="mb - 6">;
                        <div className="flex items - center mb - 3">;
                          <span className={`inline - block px - 2 py - 1 text - xs font - medium rounded mr - 3 ${
                            status.starts_with ('2') ? 'bg - green - 950 text - green - 500' :;
                            status === '401' || status === '403' ? 'bg - orange - 950 text - orange - 500' :;
                            'bg - red - 950 text - red - 500';
                          }`}>;
                            {status}
                          </span>;
                          <span className="text - white">{response.description}</span>;
                        </div>;
                        <CodeBlock;
                          code={response.example}
                          language="json";
                          showLineNumbers={true}
                        />;
                      </div>))}
                  </div>;
                </TabsContent>;
                <TabsContent value="try">;
                  <div className="p - 8 border border - zinc - 800 rounded - lg flex items - center justify - center">;
                    <div className="text - center">;
                      <p className="text - zinc - 400 mb - 3">Interactive API tester coming soon</p>;
                      <p className="text - zinc - 600 text - sm">Try the Postman collection in the meantime</p>;
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    </div>;
                  </div>;
                </TabsContent>;
              </Tabs>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx



=======
;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default ApiReference;

=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx
            </div>) : (
            <div className="p - 8 border border - zinc - 800 rounded - lg text - center">;
              <p className="text - zinc - 400">Select an endpoint from the list to view details</p>;
            </div>)}
        </div>;
      </div>;
    </ApiDocsLayout>);
}
<<<<<<< HEAD

export default ApiReference;

;
export default ApiReference;

=======
export default ApiReference;
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
            </div>;
          ) :(;
            <div className="p-8 border border-zinc-800 rounded-lg text-center">;
              <p className="text-zinc-400">Select an endpoint from the list to view details</p>;
            </div>;
          )}
        </div>;
      </div>;
    </ApiDocsLayout>;
  ),;}
;
export default ApiReference,;
 
};
//More jobs... ];
"count" : 42;
"limit" : 20;
"offset" : 0 
}` 
};
}
};
requestExample: `curl -X GET \\ https://api.zionai.com/v1/api/jobs?status=open&limit=10 \\ -H "Authorization: Bearer YOUR API KEY" ` 
};
] 
}` 
}
};
requestExample: `curl -X POST \\ https://api.zionai.com/v1/api/jobs \\ //More talent profiles... ];
"count" : 38;
"limit" : 20;
"offset" : 0 
}` 
}
};
requestExample: `curl -X GET \\ https://api.zionai.com/v1/api/talent?skills=React, Node.js&limit=10 \\ -H "Authorization: Bearer YOUR API KEY" ` 
}];
//Find the active endpoint data <button onClick= {
  () => setActiveEndpoint (endpoint.id) 
}className= {
  `w-full text-left px-3 py-2 rounded-md text-sm flex items-center $ {
  activeEndpoint === endpoint.id </button> </li>) ) 
}</ul> </div> </div> <Tabs defaultValue="docs" > <TabsList className="mb-6" > <TabsTrigger value="docs" >Documentation</TabsTrigger> <TabsTrigger value="try" >Try It</TabsTrigger> </TabsList> {
  activeEndpointData.parameters && activeEndpointData.parameters.length > 0 && (<> <h4 className="text-lg font-medium text-white mb-3" >Parameters</h4> <div className="overflow-x-auto mb-6" > <table className="w-full border-collapse" > <thead> <tr className="border-b border-zinc-800" > <th className="text-left py-2 px-4 text-zinc-400 font-medium" >Name</th> <th className="text-left py-2 px-4 text-zinc-400 font-medium" >Type</th> <th className="text-left py-2 px-4 text-zinc-400 font-medium" >Required</th> <th className="text-left py-2 px-4 text-zinc-400 font-medium" >Description</th> </tr> </thead> <tbody> </tr>) ) 
}</tbody> </table> </div> </>) 
}<h4 className="text-lg font-medium text-white mb-3" >Example Request</h4> <CodeBlock /> </div> {
  /* Response section */ 
}<div> <h3 className="text-xl font-semibold text-white mb-4">Responses</h3> {
  Object.entries (activeEndpointData.responses) .map ( ([status, response]) => (<div key= {
  status 
}className="mb-6"> <div className="flex items-center mb-3"> <span className= {
  `inline-block px-2 py-1 text-xs font-medium rounded mr-3 $ {
  status.startsWith ('2') ? 'bg-green-950 text-green-500' : status === '401' || status === '403' ? 'bg-orange-950 text-orange-500' : 'bg-red-950 text-red-500' 
}` 
}> {
  status 
}</span> /> </div>) ) 
}</div> </TabsContent> <TabsContent value="try"> <div className="p-8 border border-zinc-800 rounded-lg flex items-center justify-center"> <div className="text-center"> <p className="text-zinc-400 mb-3">Interactive API tester coming soon</p> <p className="text-zinc-600 text-sm">Try the Postman collection in the meantime</p> </div> </div> </TabsContent> </Tabs> </div>) : (<div className="p-8 border border-zinc-800 rounded-lg text-center"> <p className="text-zinc-400">Select an endpoint from the list to view details</p> </div>) 
}</div> </div> </ApiDocsLayout>) 
}export default ApiReference;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiReference.tsx
=======
                            'bg-red-950 text-red-500'
                          }`}>
                            {status}
                          </span>
                          <span className="text-white">{response.description}</span>
                        </div>
<<<<<<< HEAD
<<<<<<< HEAD
                        <CodeBlock
                          code={response.example}
=======
                        
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                        <CodeBlock 
                          code={response.example} 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                          language="json"
                          showLineNumbers={true}
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="try">
                  <div className="p-8 border border-zinc-800 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-zinc-400 mb-3">Interactive API tester coming soon</p>
                      <p className="text-zinc-600 text-sm">Try the Postman collection in the meantime</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          ) : (
            <div className="p-8 border border-zinc-800 rounded-lg text-center">
              <p className="text-zinc-400">Select an endpoint from the list to view details</p>
            </div>
          )}
        </div>
      </div>
    </ApiDocsLayout>
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default ApiReference;

=======
;
export default ApiReference;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
