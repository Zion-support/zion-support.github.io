:src_backup/components/enterprise/workspace/QuickActions.tsx
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";"
import { Button } from "@/components/ui/button";
import { FileText, Plus, Search, Calendar } from 'lucide-react';'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';'
import { Calendar } from 'lucide-react';

import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { FileText, Plus, Search, Calendar } from 'lucide-react'

export function QuickActions() {
  const actions = [
    {
      id: "post-job",
      label: "Post New Job",
      icon: <FileText className="h-5 w-5 mr-2" />,
      description: "Create a new job posting",
      color: "bg-blue-100 dark:bg-blue-900/20"
    },
    {
      id: "add-member",
      label: "Add Team Member",
      icon: <Plus className="h-5 w-5 mr-2" />,
      description: "Invite someone to your team",
      color: "bg-green-100 dark:bg-green-900/20"
    },
    {
      id: "find-talent",
      label: "Find Talent",
      icon: <Search className="h-5 w-5 mr-2" />,
      description: "Search the talent pool",
      color: "bg-purple-100 dark:bg-purple-900/20"
  return (
    <Card>;
      <CardHeader>;
        <CardTitle>Quick Actions</CardTitle>;
        <CardDescription>Fast access to common tasks</CardDescription>;
      </CardHeader>;
      <CardContent>;'
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>;
          {actions && actions.map(action => (;
:src_backup/components/enterprise/workspace/QuickActions.tsx
            <Button
      id: 'post - job',
      label: 'Post New Job',
      icon: <FileText className='h - 5 w - 5 mr - 2' />,
      description: 'Create a new job posting',
            <Button;
'
      id: 'post - job','
      label: 'Post New Job','
      icon: <FileText className='h - 5 w - 5 mr - 2' />,'
      description: 'Create a new job posting','
      color: 'bg - blue - 100 dark:bg - blue - 900 / 20',
    },'
      id: 'add - member','
      label: 'Add Team Member','
      icon: <Plus className='h - 5 w - 5 mr - 2' />,'
      description: 'Invite someone to your team','
      color: 'bg - green - 100 dark:bg - green - 900 / 20',
    },
    {'
      id: 'find - talent','
      label: 'Find Talent','
      icon: <Search className='h - 5 w - 5 mr - 2' />,'
      description: 'Search the talent pool','
      color: 'bg - purple - 100 dark:bg - purple - 900 / 20',
    },
    {'
      id: 'schedule','
      label: 'Schedule Interview','
      icon: <Calendar className='h - 5 w - 5 mr - 2' />,'
      description: 'Set up candidate interviews','
      color: 'bg - amber - 100 dark:bg - amber - 900 / 20',
    },
  ];
  return (
    <Card>;
      <CardHeader>;
        <CardTitle > Quick Actions</CardTitle>;
        <CardDescription > Fast access to common tasks</CardDescription>;
      </CardHeader>;
      <CardContent>;'
        <div className='grid grid - cols - 1 sm:grid - cols - 2 gap - 4'>;
          {actions.map (action => (
            <Button;

:src_backup/components/enterprise/workspace/QuickActions.tsx
variant='outline'              className={`h - auto justify - start p - 4 ${action.color}`}
            >;'
              <div className='flex flex - col items - start text - left'>;'
                <div className='flex items - center'>;
                  {action.icon}
                  <span>{action.label}</span>;
                </div>;
'
                <span className='mt - 1 text - xs text - muted - foreground'>;
                  {action.description}

:src/components/enterprise/workspace/QuickActions.tsx

import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Plus, Search, Calendar } from 'lucide-react'
export function QuickActions() {
  const actions = null;
:src/components/enterprise/workspace/QuickActions.tsx
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Fast access to common tasks</CardDescription>
      </CardHeader>
      <CardContent>
:src_backup/components/enterprise/workspace/QuickActions.tsx


"
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
origin/cursor/automate-test-improve-and-merge-code-2533
          {actions.map(action => (
:src_backup/components/enterprise/workspace/QuickActions.tsx
            <Button 
              key={action.id}
              variant="outline" 
              className={`h-auto justify-start p-4 ${action.color}`}
:src_backup/components/enterprise/workspace/QuickActions.tsx
            >
              <div className="flex flex-col items-start text-left">

            <Button;
              key={action.id}"
              variant="outline" `
              className={`h-auto justify-start p-4 ${action.color}`}

            >"
              <div className="flex flex-col items-start text-left">"
                <div className="flex items-center">
                  {action.icon}
                  <span>{action.label}</span>
                </div>
:src_backup/components/enterprise/workspace/QuickActions.tsx

                <span className="mt-1 text-xs text-muted-foreground">{action.description}</span>
              </div>
            </Button>"
import React from "react",;"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;"
import { Button } from "@/components/ui/button",;'
import { FileText, Plus, Search, Calendar } from 'lucide-react';
:src_backup/components/enterprise/workspace/QuickActions.tsx
export function QuickActions() {;
  const actions = [;,
  const actions = [;
    {;
      id: "post-job",;
      label: "Post New Job",;
      icon: <FileText className="h-5 w-5 mr-2" />,,
  description: "Create a new job posting",;
      color: "bg-blue-100 dark:bg-blue-900/20";
    },;
    {;
      id: "add-member",;
      label: "Add Team Member",;
      icon: <Plus className="h-5 w-5 mr-2" />,,
  description: "Invite someone to your team",;
      color: "bg-green-100 dark:bg-green-900/20";
    },;
    {;
      id: "find-talent",;
      label: "Find Talent",;
      icon: <Search className="h-5 w-5 mr-2" />,,
  description: "Search the talent pool",;
      color: "bg-purple-100 dark:bg-purple-900/20";
    },;
    {;
      id: "schedule",;
      label: "Schedule Interview",;
icon: <Calendar className="h-5 w-5 mr-2" />,,
  description: "Set up candidate interviews";
      color: "bg-amber-100 dark:bg-amber-900/20";
    }
  ];
  return (;
    <Card>;
      <CardHeader>;
        <CardTitle>Quick Actions</CardTitle>;
        <CardDescription>Fast access to common tasks</CardDescription>;
      </CardHeader>;
      <CardContent>;"
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">;
          {actions.map(action => (;
            <Button;
:src_backup/components/enterprise/workspace/QuickActions.tsx
              key={action.id}
              variant="outline";
              className={`h-auto justify-start p-4 ${action.color}`}
            >;
              <div className="flex flex-col items-start text-left">;
                <div className="flex items-center">;

              key={action.id}"
              variant="outline"`
              className={`h-auto justify-start p-4 ${action.color}`}
            >

              key={action && action.id}'`
              variant='outline'              className={`h-auto justify-start p-4 ${action && action.color}`}>;'
              <div className='flex flex-col items-start text-left'>;'
                <div className='flex items-center'>;
                  {action && action.icon}
                  <span>{action && action.label}</span>;
                </div>;
:src_backup/components/enterprise/workspace/QuickActions.tsx
'
                <span className='mt-1 text-xs text-muted-foreground'>;
                  {action && action.description}
                </span>              </div>;"
                <span className="mt-1 text-xs text-muted-foreground">{action && action.description}</span>;
          {actions && actions.map(action => (;
:src_backup/components/enterprise/workspace/QuickActions.tsx
            <Button;
              key={action && action.id}"
              variant="outline" `
              className={`h-auto justify-start p-4 ${action && action.color}`}>;"
              <div className="flex flex-col items-start text-left">;"
                <div className="flex items-center">;
                  {action && action.icon}
                  <span>{action && action.label}</span>;
                </div>;"
                <span className="mt-1 text-xs text-muted-foreground">{action && action.description}</span>;
              </div>;
            </Button>;
:src_backup/components/enterprise/workspace/QuickActions.tsx

<div className='flex flex-col items-start text-left'>
                <div className='flex items-center'>
                  {action.icon}
<span>{action.label}</span>;
                </div>;
                <span className="mt-1 text-xs text-muted-foreground">{action.description}</span>;
              </div>;
            </Button>;
                  {action.description}
                </span>              </div>

                </span>
origin/cursor/automate-test-improve-and-merge-code-2533
              </div>
            </Button>
:src_backup/components/enterprise/workspace/QuickActions.tsx
          ))}
        </div>;
      </CardContent>;
    </Card>;
  );
}
:src_backup/components/enterprise/workspace/QuickActions.tsx
          {actions.map (action => (
            <Button;
              key={action.id}"
              variant="outline";`
              className={`h - auto justify - start p - 4 ${action.color}`}
:src_backup/components/enterprise/workspace/QuickActions.tsx
            >;
              <div className="flex flex - col items - start text-left">;
                <div className="flex items-center">;
                  {action.icon}
                  <span>{action.label}</span>;
                </div>;
                <span className="mt - 1 text - xs text - muted-foreground">{action.description}</span>;
              </div>;
            </Button>))}
        </div>;
      </CardContent>;
    </Card>);
}
:src_backup/components/enterprise/workspace/QuickActions.tsx

;

;

;
        </div>
      </CardContent>
    </Card>
  );
}
:src/components/enterprise/workspace/QuickActions.tsx
;'"`
