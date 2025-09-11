<<<<<<< HEAD
<<<<<<< HEAD

import React from 'react'
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, Plus, Search, Calendar } from 'lucide-react'
export function QuickActions() {
  const actions = [
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Plus, Search, Calendar } from 'lucide-react';
export /**
 * QuickActions - Function description
 */
function QuickActions() {
  const actions = [;
    {
import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Calendar } from 'lucide-react'
export function QuickActions() {
  const actions = [
    {
      id: 'post-job'
      label: 'Post New Job'
      icon: <FileText className='h-5 w-5 mr-2' />
      description: 'Create a new job posting'
      color: 'bg-blue-100 dark:bg-blue-900/20'
    }
      id: 'add-member'
      label: 'Add Team Member'
      icon: <Plus className='h-5 w-5 mr-2' />
      description: 'Invite someone to your team'
      color: 'bg-green-100 dark:bg-green-900/20'
    }
    {
      id: 'find-talent'
      label: 'Find Talent'
      icon: <Search className='h-5 w-5 mr-2' />
      description: 'Search the talent pool'
      color: 'bg-purple-100 dark:bg-purple-900/20'
    }
    {
      id: 'schedule'
      label: 'Schedule Interview'
      icon: <Calendar className='h-5 w-5 mr-2' />
      description: 'Set up candidate interviews'
      color: 'bg-amber-100 dark:bg-amber-900/20'
    }
  ]


import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { FileText, Plus, Search, Calendar } from 'lucide-react'

import React from 'react';
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Plus, Search, Calendar } from 'lucide-react';
export function QuickActions() {;
  const actions = [;
    {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Plus, Search, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Calendar } from 'lucide-react';
<<<<<<< HEAD
=======


  return (
    <Card>;
      <CardHeader>;
        <CardTitle>Quick Actions</CardTitle>;
        <CardDescription>Fast access to common tasks</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>;
          {actions && actions.map(action => (;
            <Button

import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { FileText, Plus, Search, Calendar } from 'lucide-react'
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      id: 'post - job',
      label: 'Post New Job',
      icon: <FileText className='h - 5 w - 5 mr - 2' />,
      description: 'Create a new job posting',
      color: 'bg - blue - 100 dark:bg - blue - 900 / 20',
    },
      id: 'add - member',
      label: 'Add Team Member',
      icon: <Plus className='h - 5 w - 5 mr - 2' />,
      description: 'Invite someone to your team',
      color: 'bg - green - 100 dark:bg - green - 900 / 20',
    },
    {
      id: 'find - talent',
      label: 'Find Talent',
      icon: <Search className='h - 5 w - 5 mr - 2' />,
      description: 'Search the talent pool',
      color: 'bg - purple - 100 dark:bg - purple - 900 / 20',
    },
    {
      id: 'schedule',
      label: 'Schedule Interview',
      icon: <Calendar className='h - 5 w - 5 mr - 2' />,
      description: 'Set up candidate interviews',
      color: 'bg - amber - 100 dark:bg - amber - 900 / 20',
    },
<<<<<<< HEAD
  ];
  return (
    <Card>;
      <CardHeader>;
        <CardTitle > Quick Actions</CardTitle>;
        <CardDescription > Fast access to common tasks</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className='grid grid - cols - 1 sm:grid - cols - 2 gap - 4'>;
          {actions.map (action => (
            <Button;
=======
    {
      id: "schedule",
      label: "Schedule Interview",
      icon: <Calendar className="h-5 w-5 mr-2" />,
      description: "Set up candidate interviews",
      color: "bg-amber-100 dark:bg-amber-900/20"
    }
  ],

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              key={action.id}
              variant='outline'              className={`h - auto justify - start p - 4 ${action.color}`}
            >;
              <div className='flex flex - col items - start text - left'>;
                <div className='flex items - center'>;
                  {action.icon}
                  <span>{action.label}</span>;
                </div>;
<<<<<<< HEAD
                <span className='mt - 1 text - xs text - muted - foreground'>;
                  {action.description}
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
    },
    {
      id: "schedule",
      label: "Schedule Interview",
      icon: <Calendar className="h-5 w-5 mr-2" />,
      description: "Set up candidate interviews",
      color: "bg-amber-100 dark:bg-amber-900/20"
    }
  ];
  return (
  ],
=======

                <span className='mt - 1 text - xs text - muted - foreground'>;
                  {action.description}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Fast access to common tasks</CardDescription>
      </CardHeader>
      <CardContent>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {actions.map(action => (
            <Button
              key={action.id}
              variant='outline'              className={`h-auto justify-start p-4 ${action.color}`}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {actions.map(action => (
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {actions.map(action => (

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Button 
              key={action.id}
              variant="outline" 
              className={`h-auto justify-start p-4 ${action.color}`}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            >
              <div className="flex flex-col items-start text-left">
                <div className="flex items-center">
                  {action.icon}
                  <span>{action.label}</span>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
            <Button
                <span className='mt-1 text-xs text-muted-foreground'>
                  {action.description}
                </span>              </div>
                <span className="mt-1 text-xs text-muted-foreground">{action.description}</span>
          {actions.map(action => (
            <Button
            <Button 
=======

            <Button 

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

            <Button 

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <span className="mt-1 text-xs text-muted-foreground">{action.description}</span>
              </div>
            </Button>
import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { FileText, Plus, Search, Calendar } from 'lucide-react';
export function QuickActions() {;
  const actions = [;
    {;
      id: "post-job",;
      label: "Post New Job",;
      icon: <FileText className="h-5 w-5 mr-2" />,;
      description: "Create a new job posting",;
      color: "bg-blue-100 dark:bg-blue-900/20";
    },;
    {;
      id: "add-member",;
      label: "Add Team Member",;
      icon: <Plus className="h-5 w-5 mr-2" />,;
      description: "Invite someone to your team",;
      color: "bg-green-100 dark:bg-green-900/20";
    },;
    {;
      id: "find-talent",;
      label: "Find Talent",;
      icon: <Search className="h-5 w-5 mr-2" />,;
      description: "Search the talent pool",;
      color: "bg-purple-100 dark:bg-purple-900/20";
    },;
    {;
      id: "schedule",;
      label: "Schedule Interview",;
      icon: <Calendar className="h-5 w-5 mr-2" />,;
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
      <CardContent>;
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">;
          {actions.map(action => (;
            <Button;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              key={action.id}
              variant="outline"
              className={`h-auto justify-start p-4 ${action.color}`}
            >
<<<<<<< HEAD
              variant="outline"
              className={`h-auto justify-start p-4 ${action.color}`}
            >
              <div className="flex flex-col items-start text-left">
                <div className="flex items-center">
                  {action.icon}
                  <span>{action.label}</span>
                </div>
                <span className="mt-1 text-xs text-muted-foreground">{action.description}</span>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              key={action.id}
              variant="outline"
              className={`h-auto justify-start p-4 ${action.color}`}
            >

<<<<<<< HEAD
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {actions.map(action => (
            <Button
              key={action.id}
              variant="outline"

import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { FileText, Plus, Search, Calendar } from 'lucide-react';
;
export function QuickActions() {;
  const actions = [;
    {;
      id:"post-job",;
      label:"Post New Job",;
      icon:<FileText className="h-5 w-5 mr-2" />,;
      description:"Create a new job posting",;
      color:"bg-blue-100 dark:bg-blue-900/20";
    },;
    {;
      id:"add-member",;
      label:"Add Team Member",;
      icon:<Plus className="h-5 w-5 mr-2" />,;
      description:"Invite someone to your team",;
      color:"bg-green-100 dark:bg-green-900/20";
    },;
    {;
      id:"find-talent",;
      label:"Find Talent",;
      icon:<Search className="h-5 w-5 mr-2" />,;
      description:"Search the talent pool",;
      color:"bg-purple-100 dark:bg-purple-900/20";
    },;
    {;
      id:"schedule",;
      label:"Schedule Interview",;
      icon:<Calendar className="h-5 w-5 mr-2" />,;
      description:"Set up candidate interviews",;
      color:"bg-amber-100 dark:bg-amber-900/20";
    }
  ],;
;
  return (;
    <Card>;
      <CardHeader>;
        <CardTitle>Quick Actions</CardTitle>;
        <CardDescription>Fast access to common tasks</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">;
          {actions.map(action => (;
            <Button ;
              key={action.id}
              variant="outline" ;
              className={`h-auto justify-start p-4 ${action.color}`}
            >;
              <div className="flex flex-col items-start text-left">;
                <div className="flex items-center">;
                  {action.icon}
                  <span>{action.label}</span>;
                </div>;
                <span className="mt-1 text-xs text-muted-foreground">{action.description}</span>;
              </div>;
            </Button>;
          ))}
=======
              key={action && action.id}
              variant='outline'              className={`h-auto justify-start p-4 ${action && action.color}`}>;
              <div className='flex flex-col items-start text-left'>;
                <div className='flex items-center'>;
                  {action && action.icon}
                  <span>{action && action.label}</span>;
                </div>;

                <span className='mt-1 text-xs text-muted-foreground'>;
                  {action && action.description}
                </span>              </div>;
                <span className="mt-1 text-xs text-muted-foreground">{action && action.description}</span>;
          {actions && actions.map(action => (;
            <Button
              key={action && action.id}
              variant="outline" 
              className={`h-auto justify-start p-4 ${action && action.color}`}>;
              <div className="flex flex-col items-start text-left">;
                <div className="flex items-center">;
                  {action && action.icon}
                  <span>{action && action.label}</span>;
                </div>;
                <span className="mt-1 text-xs text-muted-foreground">{action && action.description}</span>;
              </div>;
            </Button>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


              <div className='flex flex-col items-start text-left'>
                <div className='flex items-center'>
                  {action.icon}
                  <span>{action.label}</span>
                </div>
                <span className='mt-1 text-xs text-muted-foreground'>
                  {action.description}
                </span>              </div>

              </div>

            </Button>
          ))}
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
      </CardContent>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      </CardContent>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </Card>;
  );
}
}
<<<<<<< HEAD
  );
}
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </span>              </div>;
                <span className="mt - 1 text - xs text - muted - foreground">{action.description}</span>;
          {actions.map (action => (
            <Button;
              key={action.id}
              variant="outline";
              className={`h - auto justify - start p - 4 ${action.color}`}
            >;
              <div className="flex flex - col items - start text - left">;
                <div className="flex items - center">;
                  {action.icon}
                  <span>{action.label}</span>;
                </div>;
                <span className="mt - 1 text - xs text - muted - foreground">{action.description}</span>;
              </div>;
            </Button>))}
        </div>;
      </CardContent>;
    </Card>);
}
<<<<<<< HEAD
        </div>;
      </CardContent>;
    </Card>;
  ),;}
 import { ;
  {;
  {;
  FileText, Plus,  Search, Calendar ;
 } from "lucide-react";
const actions = [ {;
  return (<Card> <CardHeader> <CardTitle>Quick Actions</CardTitle> <CardDescription>Fast access to common tasks</CardDescription> </CardHeader> <CardContent> </div> </Button>) ) ;
}</div> </CardContent> </Card>) ;
}'
          ))}
        </div>;
      </CardContent>;
    </Card>;
  );
};
}
}
;

<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
