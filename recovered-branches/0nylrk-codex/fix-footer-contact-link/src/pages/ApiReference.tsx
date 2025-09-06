
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from "react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
import {CodeBlock} from "@/components/developers/CodeBlock";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
export function ApiReference() {;
  const [activeEndpoint, setActiveEndpoint] = useState("get-jobs");
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React, { useState } from "react",
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",
import { CodeBlock } from "@/components/developers/CodeBlock";
=======
import React, { useState } from "react","
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",";
import { CodeBlock } from "@/components/developers/CodeBlock";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export function ApiReference() { return null; }
import { CodeBlock } from "@/components/developers/CodeBlock","
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
export function ApiReference() {
  const [activeEndpoint, setActiveEndpoint] = useState("get-jobs"),
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  // Sample endpoint data

  const endpoints = [
    {
      id: "get-jobs"
      method: "GET"
      path: "/api/jobs"
      description: "Retrieve a list of job postings with optional filtering"
      parameters: [
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
        { name: "status", type: "string", description: "Filter by job status (open, closed, draft)" }
        { name: "category", type: "string", description: "Filter by job category" }
        { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" }
        { name: "offset", type: "integer", description: "Pagination offset (default: 0)" }]
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        { name: "status", type: "string", description: "Filter by job status (open, closed, draft)" },
        { name: "category", type: "string", description: "Filter by job category" },
        { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },
        { name: "offset", type: "integer", description: "Pagination offset (default: 0)" }],
<<<<<<< HEAD
=======
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
export function ApiReference() {
  const [activeEndpoint, setActiveEndpoint] = useState("get-jobs"),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export function ApiReference() {
  const [activeEndpoint, setActiveEndpoint] = useState("get-jobs"),
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      responses: {
        "200": {
          description: "A list of jobs"
          example: `{
  "jobs": [
    {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
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
      path: "/api/jobs",,
  description: "Retrieve a list of job postings with optional filtering",;
      parameters: [;
        { name: "status", type: "string", description: "Filter by job status (open, closed, draft)" };
        { name: "category", type: "string", description: "Filter by job category" },;
        { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },;
        { name: "offset", type: "integer", description: "Pagination offset (default: 0)" }],;
      responses: {;
        "200": {,
  description: "A list of jobs",;
          example: `{;
  "jobs": [;
    {;
=======
export function ApiReference() { return null; }
        { name: "status", type: "string", description: "Filter by job status (open, closed, draft)" },"
        { name: "category", type: "string", description: "Filter by job category" },"
        { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },"
        { name: "offset", type: "integer", description: "Pagination offset (default: 0)" }],



      responses: {"
        "200": {"
          description: "A list of jobs"
          example: `{"
  "jobs": []
    {}
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      "id": "job-123";
import React, { useState } from './react';"
import ApiDocsLayout from "@/components / developers / ApiDocsLayout";'
import { CodeBlock } from '@/components / developers / CodeBlock';'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
export /**;
 * ApiReference - Function description;
 */
function ApiReference() { return null; }
        { name: "status", type: "string", description: "Filter by job status (open, closed, draft)" }"
        { name: "category", type: "string", description: "Filter by job category" },"
        { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },"
        { name: "offset", type: "integer", description: "Pagination offset (default: 0)" }],
      responses: {"
        "200": {"
          description: "A list of jobs",`
          example: `{"
  "jobs": [;
    {"
      "id": "job - 123";"
      "title": "Senior React Developer";'"
      "description": "We're looking for an experienced React developer...";"
      "category": "development";"
      "budget": {;"
        "min": 5000;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        "max": 10000,
=======
"
        "max": 10000,"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        "currency": "USD";
      }"
      "status": "open";"
      "created_at": "2023 - 05 - 10T15:30:00Z";
    }
    // More jobs...;
  ];"
  "count": 42;"
  "limit": 20;"
  "offset": 0;`
}`;



        }"
        "401": {"
          description: "Unauthorized"`
          example: `{}
        }"
        "429": {"
          description: "Rate limit exceeded"`
          example: `{"
  "error": "rate_limit_exceeded";
"
      "id": "job-123","
      "title": "Senior React Developer",'"
      "description": "We're looking for an experienced React developer...","
      "category": "development","
      "budget": {}
"
        "min": 5000,"
        "max": 10000,"
        "currency": "USD"
<<<<<<< HEAD
      }
      "status": "open";
      "created_at": "2023-05-10T15:30:00Z"
    }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        "min": 5000,
        "max": 10000,
        "currency": "USD"
      },
      "status": "open",
=======
      },"
      "status": "open","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      "created_at": "2023-05-10T15:30:00Z"
    },

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    // More jobs...
  ],"
  "count": 42,"
  "limit": 20,"
  "offset": 0;`
}`
<<<<<<< HEAD
<<<<<<< HEAD

        },

=======
        },

        }
        },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        "401": {
          description: "Unauthorized"
          example: `{
  "error": "invalid_token"
  "message": "The provided API key is invalid or expired"
=======
"
        "401": {"
          description: "Unauthorized"`
          example: `{"
  "error": "invalid_token""
  "message": "The provided API key is invalid or expired"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}`

<<<<<<< HEAD
        "429": {
          description: "Rate limit exceeded"
          example: `{

=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        },

        "429": {
          description: "Rate limit exceeded"
          example: `{

<<<<<<< HEAD
=======
        }
        },
        "429": {
          description: "Rate limit exceeded"
          example: `{
  "error": "rate_limit_exceeded";
  "message": "Rate limit exceeded. Please try again in 60 seconds"
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  "retry_after": 60
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        },
"
        "429": {"
          description: "Rate limit exceeded"`
          example: `{}
"
  "retry_after": 60;`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}`
        }
      }`
      requestExample: `curl -X GET \\
<<<<<<< HEAD
  https://api.zionai.com/v1/api/jobs?status=open&limit=10 \\
  -H "Authorization: Bearer YOUR_API_KEY"`  "error": "rate_limit_exceeded",
  "message": "Rate limit exceeded. Please try again in 60 seconds",
  "retry_after": 60
}`
        }
      },
      requestExample: `curl -X GET \\
  https://api.zionai.com/v1/api/jobs?status=open&limit=10 \\
  -H "Authorization: Bearer YOUR_API_KEY"`
    },
=======
  https://api.zionai.com/v1/api/jobs?status=open&limit=10 \\"`
  -H "Authorization: Bearer YOUR_API_KEY"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    {
      id: "post-jobs"
      method: "POST"
      path: "/api/jobs"
      description: "Create a new job posting"
<<<<<<< HEAD
<<<<<<< HEAD
      parameters: [
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  "message": "Rate limit exceeded. Please try again in 60 seconds",
  "retry_after": 60;
=======

    {"
      id: "post-jobs""
      method: "POST""
      path: "/api/jobs""
      description: "Create a new job posting"
      parameters: []
"
  "message": "Rate limit exceeded. Please try again in 60 seconds","
  "retry_after": 60;`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}`;
        }
      }`
      request_example: `curl -X GET \\;
  https://api.zionai.com / v1 / api / jobs?status = open & limit = 10 \\;"`
  -H "Authorization: Bearer YOUR_API_KEY"`;
    }
    {"
      id: "post - jobs","
      method: "POST","
      path: "/api / jobs","
      description: "Create a new job posting",
      parameters: [;"
        { name: "title", type: "string", required: true, description: "Job title" },"
        { name: "description", type: "string", required: true, description: "Detailed job description" },"
        { name: "category", type: "string", required: true, description: "Job category" },"
        { name: "budget", type: "object", required: true, description: "Budget information with min, max, and currency" }"
        { name: "skills", type: "array", description: "Array of required skills" },"
        { name: "deadline", type: "string", description: "Application deadline (ISO date format)" }],

"
        { name: "title", type: "string", required: true, description: "Job title" },"
        { name: "description", type: "string", required: true, description: "Detailed job description" },"
        { name: "category", type: "string", required: true, description: "Job category" },"
        { name: "budget", type: "object", required: true, description: "Budget information with min, max, and currency" },"
        { name: "skills", type: "array", description: "Array of required skills" },"
        { name: "deadline", type: "string", description: "Application deadline (ISO date format)" }],

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      responses: {
        "201": {
          description: "Job created successfully"
          example: `{
<<<<<<< HEAD
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  "id": "job-456",
  "title": "UX Designer",
  "description": "Looking for a UX designer with 3+ years experience...",
  "category": "design",
  "budget": {

        "400": {
          description: "Bad request"
          example: `{
  "error": "validation_error",
  "message": "Invalid input",
  "details": [
    {
<<<<<<< HEAD

=======
      "field": "title"
      "error": "Title is required"
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


      responses: {"
        "201": {"
          description: "Job created successfully"`
          example: `{}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    }
  ]`
}`
        }
<<<<<<< HEAD

import React, { useState } from "react",;
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",;
import { CodeBlock } from "@/components/developers/CodeBlock",;
=======
      }"
      "field": "title","
      "error": "Title is required"
      };"
import React, { useState } from "react",;"
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",;"
import { CodeBlock } from "@/components/developers/CodeBlock",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
export function ApiReference() { return null; }
        { name: "status", type: "string", description: "Filter by job status (open, closed, draft)" },;"
        { name: "category", type: "string", description: "Filter by job category" },;"
        { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },;"
        { name: "offset", type: "integer", description: "Pagination offset (default: 0)" }],;
      responses: {;"
        "200": {;"
          description: "A list of jobs",;`
          example: `{;"
  "jobs": [;
    {;"
      "id": "job-123",;"
      "title": "Senior React Developer",;'"
      "description": "We're looking for an experienced React developer...",;"
      "category": "development",;"
      "budget": {;"
        "min": 5000,;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        "max": 10000,;
        "currency": "USD";
      };
=======
      parameters: [        "max": 10000,;
        "currency": "USD"
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      parameters: [        "max": 10000,;
        "currency": "USD"
};
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      "status": "open";
      "created_at": "2023-05-10T15:30:00Z"
};
    // More jobs...;
  ];
  "count": 42;
  "limit": 20;
  "offset": 0;
}`
};
        "max": 10000,;
        "currency": "USD";        "max": 10000,;
        "currency": "USD";
        "401": {,
  description: "Unauthorized",;
          example: `{;
  "error": "invalid_token",;
  "message": "The provided API key is invalid or expired";
}`;  "message": "Rate limit exceeded. Please try again in 60 seconds",;
  "retry_after": 60;
}`;
        }        { name: "skills", type: "array", description: "Array of required skills" },;
        { name: "deadline", type: "string", description: "Application deadline (ISO date format)" }],;
      responses: {;
        "201": {,
  description: "Job created successfully",;
          example: `{;

<<<<<<< HEAD
<<<<<<< HEAD
  "id": "job-456";
<<<<<<< HEAD
=======
=======
=======

"
        "max": 10000,;"
        "currency": "USD";
      };"
      "status": "open";"
      "created_at": "2023-05-10T15:30:00Z";
    };
    // More jobs...;
  ];"
  "count": 42;"
  "limit": 20;"
  "offset": 0;`
}`;
        };

"
        "max": 10000,;"
        "currency": "USD";
"
        "401": {;"
          description: "Unauthorized",;`
          example: `{;"
  "error": "invalid_token",;"
  "message": "The provided API key is invalid or expired";`
}`;


"
  "message": "Rate limit exceeded. Please try again in 60 seconds",;"
  "retry_after": 60;`
}`;
        }



    {;"
      id: "post-jobs",;"
      method: "POST",;"
      path: "/api/jobs",;"
      description: "Create a new job posting",;
      parameters: [;"
        { name: "title", type: "string", required: true, description: "Job title" },;"
        { name: "description", type: "string", required: true, description: "Detailed job description" },;"
        { name: "category", type: "string", required: true, description: "Job category" },;


"
        { name: "skills", type: "array", description: "Array of required skills" },;"
        { name: "deadline", type: "string", description: "Application deadline (ISO date format)" }],;
      responses: {;"
        "201": {;"
          description: "Job created successfully",;`
          example: `{;

"
  "id": "job-456";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  "id": "job - 456";

"
  "id": "job-456";"
  "id": "job - 456";
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  "id": "job-456";
  "id": "job - 456";
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  "title": "UX Designer";
  "description": "Looking for a UX designer with 3+ years experience...";
  "category": "design";
  "budget": {;
=======
"
  "title": "UX Designer";"
  "description": "Looking for a UX designer with 3+ years experience...";"
  "category": "design";"
  "budget": {;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    "min": 3000;
"
    "max": 5000,"
    "currency": "USD";
  }"
  "status": "open";"
  "created_at": "2023 - 05 - 15T10:12:00Z";`
}`;



        }"
        "400": {"
          description: "Bad request"`
          example: `{"
  "error": "validation_error";"
  "message": "Invalid input";"
  "details": [;
    {}
"
    "max": 5000,;"
    "currency": "USD";
  };"
  "status": "open";"
  "created_at": "2023-05-15T10:12:00Z";`
}`;
        };"
        "400": {;"
          description: "Bad request",;`
          example: `{;"
  "error": "validation_error";"
  "message": "Invalid input";
"
  "details": [;
    {;"
      "field": "title",;"
      "error": "Title is required";

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
      "field": "title",
      "error": "Title is required";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
      "field": "title",
      "error": "Title is required";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  "id": "job-456";  "id": "job-456";
  "id": "job - 456";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  "id": "job-456";  "id": "job-456";
  "id": "job - 456";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
      "field": "title","
      "error": "Title is required";



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    }
  ];`
}`;
        }
<<<<<<< HEAD
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
=======
"
  "id": "job-456","
  "title": "UX Designer","
  "description": "Looking for a UX designer with 3+ years experience...","
  "category": "design","
  "budget": {}
"
    "min": 3000,"
    "max": 5000,"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    "currency": "USD"
  },"
  "status": "open","
  "created_at": "2023-05-15T10:12:00Z"`
}`
        },
<<<<<<< HEAD

        "400": {
          description: "Bad request"
          example: `{
  "error": "validation_error",
  "message": "Invalid input",
  "details": [
    {

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
<<<<<<< HEAD
=======
      },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      requestExample: `curl -X POST \\
  https://api.zionai.com/v1/api/jobs \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\      }
      request_example: `curl -X POST \\;
  https://api.zionai.com / v1 / api / jobs \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json" \\;
  -d '{
      };
=======
"
        "400": {"
          description: "Bad request"`
          example: `{"
  "error": "validation_error","
  "message": "Invalid input","
  "details": []
    {}`
      requestExample: `curl -X POST \\
  https://api.zionai.com/v1/api/jobs \\"
  -H "Authorization: Bearer YOUR_API_KEY" \\"
  -H "Content-Type: application/json" \\



      }`
      request_example: `curl -X POST \\;
  https://api.zionai.com / v1 / api / jobs \\;"
  -H "Authorization: Bearer YOUR_API_KEY" \\;"
  -H "Content - Type: application / json" \\;'
  -d '{}
      };`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      requestExample: `curl -X POST \\;
  https://api && api.zionai.com/v1/api/jobs \\;"
  -H "Authorization: Bearer YOUR_API_KEY" \\;"
  -H "Content-Type: application/json" \\;'
  -d '{;
<<<<<<< HEAD
    "title": "UX Designer";
    "description": "Looking for a UX designer with 3+ years experience...";
    "category": "design";
    "budget": {;
      "min": 3000;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


"
    "title": "UX Designer";"
    "description": "Looking for a UX designer with 3+ years experience...";"
    "category": "design";"
    "budget": {;"
      "min": 3000;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    "title": "UX Designer",
    "description": "Looking for a UX designer with 3+ years experience...",
    "category": "design",
    "budget": {
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

"
    "title": "UX Designer","
    "description": "Looking for a UX designer with 3+ years experience...","
    "category": "design","
    "budget": {}
"
      "min": 3000,"
      "max": 5000,"
      "currency": "USD"
<<<<<<< HEAD
    }
    "skills": ["Figma", "User Research", "Prototyping"];
    "deadline": "2023-07-01T00:00:00Z"
  }'`
    }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      "min": 3000,
      "max": 5000,
      "currency": "USD"
    },
    "skills": ["Figma", "User Research", "Prototyping"],
    "deadline": "2023-07-01T00:00:00Z"
=======
    },"
    "skills": ["Figma", "User Research", "Prototyping"],"
    "deadline": "2023-07-01T00:00:00Z"'`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  }'`
<<<<<<< HEAD
<<<<<<< HEAD
    },
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    {
=======
    },    {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    },    {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      id: "get-talent"
      method: "GET"
      path: "/api/talent"
      description: "Search for talent profiles with optional filtering"
<<<<<<< HEAD
<<<<<<< HEAD
      parameters: [
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      "max": 5000,
=======



    {"
      id: "get-talent""
      method: "GET""
      path: "/api/talent""
      description: "Search for talent profiles with optional filtering"
      parameters: []
"
      "max": 5000,"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      "currency": "USD";
    }"
    "skills": ["Figma", "User Research", "Prototyping"];"
    "deadline": "2023 - 07 - 01T00:00:00Z";'`
  }'`;
    }
    {"
      id: "get - talent","
      method: "GET","
      path: "/api / talent","
      description: "Search for talent profiles with optional filtering",
      parameters: [;"
        { name: "skills", type: "string", description: "Comma - separated list of skills" },
"
        { name: "skills", type: "string", description: "Comma-separated list of skills" },
"
        { name: "category", type: "string", description: "Filter by talent category" },"
        { name: "rate_min", type: "integer", description: "Minimum hourly rate" },"
        { name: "rate_max", type: "integer", description: "Maximum hourly rate" },"
        { name: "availability", type: "string", description: "Availability type (full - time, part - time)" }"
        { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },"
        { name: "offset", type: "integer", description: "Pagination offset (default: 0)" }],



<<<<<<< HEAD
=======
        { name: "skills", type: "string", description: "Comma-separated list of skills" }
        { name: "category", type: "string", description: "Filter by talent category" }
        { name: "rate_min", type: "integer", description: "Minimum hourly rate" }
        { name: "rate_max", type: "integer", description: "Maximum hourly rate" }
        { name: "availability", type: "string", description: "Availability type (full-time, part-time)" }
        { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" }
        { name: "offset", type: "integer", description: "Pagination offset (default: 0)" }]
        { name: "skills", type: "string", description: "Comma-separated list of skills" },
        { name: "category", type: "string", description: "Filter by talent category" },
        { name: "rate_min", type: "integer", description: "Minimum hourly rate" },
        { name: "rate_max", type: "integer", description: "Maximum hourly rate" },
        { name: "availability", type: "string", description: "Availability type (full-time, part-time)" },
        { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },
        { name: "offset", type: "integer", description: "Pagination offset (default: 0)" }],
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      responses: {
=======
      parameters: [      responses: {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      parameters: [      responses: {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        "200": {
          description: "A list of talent profiles"
          example: `{
  "talent": [;
    {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======

=======
      "id": "talent - 123";
      "full_name": "Jane Smith";
      "professional_title": "Full Stack Developer"
      "skills": ["React", "Node.js", "TypeScript"];
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      "max": 5000,;
      "currency": "USD"
};
    "skills": ["Figma", "User Research", "Prototyping"];
    "deadline": "2023-07-01T00:00:00Z";
  }'`
};
    {;
      id: "get-talent",;
      method: "GET",;
      path: "/api/talent",,
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
        "200": {,
  description: "A list of talent profiles",;
          example: `{;
  "talent": [;
    {;      "hourly_rate": 75;
      "availability": "full - time";
      "years_experience": 5;
      "location": "Remote, US";  ];
  "count": 38;
  "limit": 20;
  "offset": 0;
}`;
        }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


      },


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    // More talent profiles...
  ],
  "count": 38,
  "limit": 20,
  "offset": 0
}`
        }
<<<<<<< HEAD

  ];
  "count": 38;
  "limit": 20;
  "offset": 0;
}`;
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
      }
      },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      requestExample: `curl -X GET \\
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  https://api.zionai.com/v1/api/talent?skills=React,Node.js&limit=10 \\
=======
      responses: {"
        "200": {"
          description: "A list of talent profiles"`
          example: `{}
"
      "max": 5000,;"
      "currency": "USD";
    };"
    "skills": ["Figma", "User Research", "Prototyping"];"
    "deadline": "2023-07-01T00:00:00Z";'`
  }'`;
    };
    {;"
      id: "get-talent",;"
      method: "GET",;"
      path: "/api/talent",;"
      description: "Search for talent profiles with optional filtering",;
      parameters: [;"
        { name: "skills", type: "string", description: "Comma-separated list of skills" },;"
        { name: "category", type: "string", description: "Filter by talent category" },;"
        { name: "rate_min", type: "integer", description: "Minimum hourly rate" },;"
        { name: "rate_max", type: "integer", description: "Maximum hourly rate" },;"
        { name: "availability", type: "string", description: "Availability type (full-time, part-time)" };"
        { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },;"
        { name: "offset", type: "integer", description: "Pagination offset (default: 0)" }],;
      responses: {;"
        "200": {;"
          description: "A list of talent profiles",;`
          example: `{;"
  "talent": [;
    {;

"
      "id": "talent-123";"
      "full_name": "Jane Smith";"
      "professional_title": "Full Stack Developer",;"
      "skills": ["React", "Node && Node.js", "TypeScript"];


"
      "hourly_rate": 75;"
      "availability": "full - time";"
      "years_experience": 5;"
      "location": "Remote, US";
"
      "id": "talent-123","
      "full_name": "Jane Smith","
      "professional_title": "Full Stack Developer","
      "skills": ["React", "Node.js", "TypeScript"],"
      "hourly_rate": 75,"
      "availability": "full-time","
      "years_experience": 5,"
      "location": "Remote, US","
      "bio": "Experienced full stack developer with a focus on React and Node.js..."
    },
"
      "bio": "Experienced full stack developer with a focus on React and Node && Node.js...";
    };
    // More talent profiles...;

"
      "bio": "Experienced full stack developer with a focus on React and Node.js...";
    }
    // More talent profiles...;

`
      requestExample: `curl -X GET \\
  https://api.zionai.com/v1/api/talent?skills=React,Node.js&limit=10 \\"`
  -H "Authorization: Bearer YOUR_API_KEY"`
    }

  ];"
  "count": 38;"
  "limit": 20;"
  "offset": 0;`
}`;
        }
`
      requestExample: `curl -X GET \\
  https://api.zionai.com/v1/api/talent?skills=React,Node.js&limit=10 \\"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  -H "Authorization: Bearer YOUR_API_KEY"`
    }
<<<<<<< HEAD
=======
=======

      };`
      requestExample: `curl -X GET \\;
  https://api && api.zionai.com/v1/api/talent?skills=React,Node && Node.js&limit=10 \\;"`
  -H "Authorization: Bearer YOUR_API_KEY"`;
    }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  ];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  ],

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  // Find the active endpoint data;
  const activeEndpointData = endpoints && endpoints.find(e => e && e.id === activeEndpoint);




<<<<<<< HEAD
<<<<<<< HEAD
  return (
=======
=======
=======  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======  return (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  // Find the active endpoint data;
  const activeEndpointData = endpoints && endpoints.find(e => e && e.id === activeEndpoint);
  return (

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
      path:"/api/jobs",,
  description:"Retrieve a list of job postings with optional filtering",;
      parameters:[;
        { name:"status", type:"string", description:"Filter by job status (open, closed, draft)" },;
        { name:"category", type:"string", description:"Filter by job category" },;
        { name:"limit", type:"integer", description:"Number of results per page (default:20, max:100)" },;
        { name:"offset", type:"integer", description:"Pagination offset (default:0)" }],;
      responses:{;
        "200":{,
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
        "401":{,
  description:"Unauthorized",;
          example:`{;
  "error":"invalid_token",;
  "message":"The provided API key is invalid or expired";
}`;
        },;
        "429":{,
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
      path:"/api/jobs",,
  description:"Create a new job posting",;
      parameters:[;
        { name:"title", type:"string", required:true, description:"Job title" },;
        { name:"description", type:"string", required:true, description:"Detailed job description" },;
        { name:"category", type:"string", required:true, description:"Job category" },;
        { name:"budget", type:"object", required:true, description:"Budget information with min, max, and currency" },;
        { name:"skills", type:"array", description:"Array of required skills" },;
        { name:"deadline", type:"string", description:"Application deadline (ISO date format)" }],;
      responses:{;
        "201":{,
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
        "400":{,
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
      path:"/api/talent",,
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
        "200":{,
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
  return (
    <ApiDocsLayout>;
=======


  return (

    <ApiDocsLayout>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      <div className="grid md:grid-cols-5 gap-8">;
        {/* Endpoint list */}"
        <div className="md:col-span-1">;"
          <div className="sticky top-8">;"
            <h3 className="text-lg font-semibold text-white mb-4">Endpoints</h3>;"
            <ul className="space-y-2">;
<<<<<<< HEAD
=======

              {endpoints && endpoints.map((endpoint) => (;
                <li key={endpoint && endpoint.id}>;
                  <button;
                    onClick={() => setActiveEndpoint(endpoint && endpoint.id)}`
                    className={`w-full text-left px-3 py-2 rounded-md text-sm flex items-center ${;
                      activeEndpoint === endpoint && endpoint.id;"
                        ? "bg-zion-purple/20 text-zion-cyan";"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-900";`
                    }`}
                  >;
                    </span>;"
                    <span className="truncate">{endpoint && endpoint.path}</span>;
                  </button>;

      }`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      request_example: `curl -X GET \\;
  https://api.zionai.com / v1 / api / talent?skills = React, Node.js & limit = 10 \\;"`
  -H "Authorization: Bearer YOUR_API_KEY"`;
    }
  ];
;
  // Find the active endpoint data;
  const activeEndpointData = endpoints.find (e => e.id === active_endpoint);
;
  return (
<<<<<<< HEAD
    <ApiDocsLayout>;
      <div className="grid md:grid - cols - 5 gap-8">;
        {/* Endpoint list */}
        <div className="md:col - span-1">;
          <div className="sticky top-8">;
            <h3 className="text - lg font - semibold text - white mb-4">Endpoints</h3>;
            <ul className="space-y-2">;
=======
    <ApiDocsLayout>;"
      <div className="grid md:grid - cols - 5 gap - 8">;
        {/* Endpoint list */}"
        <div className="md:col - span - 1">;"
          <div className="sticky top - 8">;"
            <h3 className="text - lg font - semibold text - white mb - 4">Endpoints</h3>;"
            <ul className="space - y-2">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              {endpoints.map ((endpoint) => (
                <li key={endpoint.id}>;
                  <button;
                    on_click={() => setActiveEndpoint (endpoint.id)}`
                    className={`w - full text - left px - 3 py - 2 rounded - md text - sm flex items - center ${}
                      active_endpoint === endpoint.id;"
                        ? "bg - zion - purple / 20 text - zion - cyan";"
                        : "text - zinc - 400 hover:text - white hover:bg - zinc - 900";`
                    }`}
                  >;"`
                    <span className={`inline - block w - 16 font - mono ${endpoint.method === "GET" ? "text - green - 500" : endpoint.method === "POST" ? "text - blue - 500" : "text - yellow - 500"}`}>;
<<<<<<< HEAD
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
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      {endpoint.method}
                    </span>;"
                    <span className="truncate">{endpoint.path}</span>;
                  </button>;
<<<<<<< HEAD
                </li>))}
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            </ul>;
          </div>;
        </div>;

        {/* Endpoint details */}
<<<<<<< HEAD
        <div className="md:col - span-4">;
          {activeEndpointData ? (
            </ul>;
          </div>;
        </div>;

<<<<<<< HEAD
<<<<<<< HEAD
        {/* Endpoint details */}
<<<<<<< HEAD
=======
                </li>;              ))}
            </ul>;
          </div>;
        </div>;
;
        {/* Endpoint details */}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div className="md:col-span-4">;
          {activeEndpointData ? (;
            <div>;"
              <div className="flex items-center mb-6">;
"
              <Tabs defaultValue="docs">;"
                <TabsList className="mb-6">;"
                  <TabsTrigger value="docs">Documentation</TabsTrigger>;"
                  <TabsTrigger value="try">Try It</TabsTrigger>;
                </TabsList>;"
                <TabsContent value="docs">;
                  {/* Request section */}"
                  <div className="mb-8">;"
                    <h3 className="text-xl font-semibold text-white mb-4">Request</h3>;

                      <>;"
                        <h4 className="text-lg font-medium text-white mb-3">Parameters</h4>;"
                        <div className="overflow-x-auto mb-6">;"
                          <table className="w-full border-collapse">;
                            <thead>;"
                              <tr className="border-b border-zinc-800">;"
                                <th className="text-left py-2 px-4 text-zinc-400 font-medium">Name</th>;"
                                <th className="text-left py-2 px-4 text-zinc-400 font-medium">Type</th>;"
                                <th className="text-left py-2 px-4 text-zinc-400 font-medium">Required</th>;"
                                <th className="text-left py-2 px-4 text-zinc-400 font-medium">Description</th>;
                              </tr>;
                            </thead>;
                            <tbody>;


                              ))}

                            </tbody>;
                          </table>;
                        </div>;
                      </>;
                    )}

=======
<<<<<<< HEAD


<<<<<<< HEAD

                    <h4 className="text-lg font-medium text-white mb-3">Example Request</h4>
                    <CodeBlock 
                      code={activeEndpointData.requestExample} 


<<<<<<< HEAD
=======
  ];
  // Find the active endpoint data
  const activeEndpointData = endpoints.find(e => e.id === activeEndpoint);
  ],

  // Find the active endpoint data
  const activeEndpointData = endpoints.find(e => e.id === activeEndpoint),

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
                    <h4 className="text-lg font-medium text-white mb-3">Example Request</h4>
                    <CodeBlock
                      code={activeEndpointData.requestExample}

                    <h4 className="text-lg font-medium text-white mb-3">Example Request</h4>
                    <CodeBlock 
                      code={activeEndpointData.requestExample} 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      language="bash"
=======
        {/* Endpoint details */}                      language="bash"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        {/* Endpoint details */}                      language="bash"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                      showLineNumbers={true}
                    />
                  </div>
                  {/* Response section */}
                  <div>"
                    <h3 className="text-xl font-semibold text-white mb-4">Responses</h3>
                    {Object.entries(activeEndpointData.responses).map(([status, response]) => ("
                      <div key={status} className="mb-6">"
                        <div className="flex items-center mb-3">`
                          <span className={`inline-block px-2 py-1 text-xs font-medium rounded mr-3 ${'
                            status.startsWith('2') ? 'bg-green-950 text-green-500' :'
                            status === '401' |status === '403' ? 'bg-orange-950 text-orange-500' :
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                            'bg-red-950 text-red-500'
                          }`}>
                            {status}
                          </span>
                          <span className="text-white">{response.description}</span>
                        </div>

                        <CodeBlock
                          code={response.example}

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



"
                    <h4 className="text-lg font-medium text-white mb-3">Example Request</h4>;
                    <CodeBlock;
                      code={activeEndpointData && activeEndpointData.requestExample} "
                      language="bash"
                      showLineNumbers={true}
                    />;
                  </div>;
<<<<<<< HEAD
                    {Object && Object.entries(activeEndpointData && activeEndpointData.responses).map(([status, response]) => (;
                      <div key={status} className="mb-6">;
                        <div className="flex items-center mb-3">;
                          <spanclassName={`inline-block px-2 py-1 text-xs font-medium rounded mr-3 ${
                            status && status.startsWith('2') ? 'bg-green-950 text-green-500' : 
                            status === '401' || status === '403' ? 'bg-orange-950 text-orange-500' : 
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                            'bg-red-950 text-red-500'
                          }`}>;
                            {status}

                          </span>;
                          <span className="text-white">{response && response.description}</span>;
                        </div>;

                        <CodeBlock
                          code={response && response.example} 
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
                        <CodeBlock 
                          code={response.example} 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                    {Object && Object.entries(activeEndpointData && activeEndpointData.responses).map(([status, response]) => (;"
                      <div key={status} className="mb-6">;"
                        <div className="flex items-center mb-3">;`
                          <spanclassName={`inline-block px-2 py-1 text-xs font-medium rounded mr-3 ${'
                            status && status.startsWith('2') ? 'bg-green-950 text-green-500' : '
                            status === '401' || status === '403' ? 'bg-orange-950 text-orange-500' : '
                            'bg-red-950 text-red-500'`
                          }`}>;
                            {status}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

                        

                        <CodeBlock;
                          code={response.example} 
<<<<<<< HEAD
                          language="json"                        <CodeBlock 
                          code={response.example} 
                            'bg-red-950 text-red-500'
                          }`}>;
                            {status}
                          language="json"
=======


                        <CodeBlock;
                          code={response.example} '
                            'bg-red-950 text-red-500'`
                          }`}>;
                            {status}"
                          language="json"

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                          showLineNumbers={true}
                        />;
                      </div>;
                    ))}
<<<<<<< HEAD
                  </div>;
                </TabsContent>;
                <TabsContent value="try">;
                  <div className="p-8 border border-zinc-800 rounded-lg flex items-center justify-center">;
                    <div className="text-center">;
                      <p className="text-zinc-400 mb-3">Interactive API tester coming soon</p>;
                      <p className="text-zinc-600 text-sm">Try the Postman collection in the meantime</p>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======





>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    </div>;
                  </div>;
                </TabsContent>;
              </Tabs>;






;

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

export default ApiReference;

<<<<<<< HEAD
            <div className="p - 8 border border - zinc - 800 rounded - lg text-center">;
              <p className="text - zinc-400">Select an endpoint from the list to view details</p>;
=======

            </div>) : ("
            <div className="p - 8 border border - zinc - 800 rounded - lg text - center">;"
              <p className="text - zinc - 400">Select an endpoint from the list to view details</p>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            </div>)}
        </div>;
      </div>;
    </ApiDocsLayout>);
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

export default ApiReference;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
export default ApiReference;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
export default ApiReference;
;
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
                            'bg-red-950 text-red-500'
                          }`}>
                            {status}
                          </span>
                          <span className="text-white">{response.description}</span>
                        </div>
                        <CodeBlock
                          code={response.example}
                        
                        <CodeBlock 
                          code={response.example} 
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export default ApiReference;

;
export default ApiReference;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
