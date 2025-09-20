import React, { useState } from 'react';
import { useState } from 'react';
import { BookOpen, Terminal import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
 from 'react';"
import { BookOpen, Terminal import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';"
import { Alert, AlertDescription } from '@/components/ui/alert';"
import { Badge } from '@/components/ui/badge';"
import CodeBlock from "./CodeBlock";
export function ApiDocumentation() {
"
    return (<Card className="bg-zinc-900 border-zinc-800 text-white">
      <CardHeader>"
        <CardTitle className="text-xl flex items-center">"
          <BookOpen className="mr-2" size={20}/> API Documentation
        </CardTitle>"
        <CardDescription className="text-zinc-400">
          Reference documentation for integrating with the Zion Marketplace API.</CardDescription>
      </CardHeader>
      <CardContent>"
        <Alert className="bg-blue-900/30 border-blue-800 mb-6">"
          <Terminal className="h-4 w-4"/>
          <AlertDescription>
            Make sure to include your API key in all requests as a Bearer token in the Authorization header.</AlertDescription>
        </Alert>"
        <Tabs defaultValue="jobs" className="space-y-4">"
          <TabsList className="bg-zinc-800 border-zinc-700">"
            <TabsTrigger value="jobs">Jobs</TabsTrigger>"
            <TabsTrigger value="talent">Talent</TabsTrigger>"
            <TabsTrigger value="quotes">Quotes</TabsTrigger>"
            <TabsTrigger value="webhooks">Webhooks</TabsTrigger>"
            <TabsTrigger value="errors">Errors</TabsTrigger>
          </TabsList>"
          <TabsContent value="jobs" className="space-y-6">"
            <EndpointSection method="GET" endpoint="/api/jobs" description="List all available jobs with optional filtering." note="" params = {
  [{ name: "page", type: "integer",
  description: "Page number for pagination (default: 1)"
},
            { name: "limit", type: "integer", description: "Number of results per page(default: 20, max: 100)" },
            { name: "category", type: "string", description: "Filter by job category" },
            { name: "skills", type: "string[]", description: "Filter by required skills(comma-separated)" },
  required: true
},
            { name: "description", type: "string", description: "Detailed job description", required: true },
            { name: "category", type: "string", description: "Job category", required: true },
            { name: "skills", type: "string[]", description: "Required skills", required: true },
            { name: "budget.min", type: "number", description: "Minimum budget" },
            { name: "budget.max", type: "number", description: "Maximum budget" },
            { name: "budget.currency", type: "string", description: "Currency code(default: USD)" },
  [{ name: "page", type: "integer",
  description: "Page number for pagination(default: 1)"
},
            { name: "limit", type: "integer", description: "Number of results per page(default: 20, max: 100)" },
            { name: "skills", type: "string[]", description: "Filter by skills(comma-separated)" },
  required: true
},
            { name: "project_name", type: "string", description: "Name of the project", required: true },
            { name: "project_summary", type: "string", description: "Brief summary of the project", required: true },
            { name: "project_description", type: "string", description: "Detailed project description" },
            { name: "timeline", type: "string", description: "Expected timeline", required: true },
            { name: "budget_min", type: "number", description: "Minimum budget" },
            { name: "budget_max", type: "number", description: "Maximum budget" },
            { name: "requester_name", type: "string", description: "Name of the requester", required: true },
  [{ name: "page", type: "integer",
  description: "Page number for pagination(default: 1)"
},
            { name: "limit", type: "integer", description: "Number of results per page(default: 20, max: 100)" },
