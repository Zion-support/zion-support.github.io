<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/workspace/QuickActions.tsx

<<<<<<< HEAD

=======
=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
========
<<<<<<< HEAD
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { Button } from '@/components / ui / button';
=======
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import { FileText, Plus, Search, Calendar } from 'lucide-react';
export /**
 * QuickActions - Function description
 */
function QuickActions() {
  const actions = [;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/workspace/QuickActions.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {
import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Calendar } from 'lucide-react'
export function QuickActions() {
  const actions = [
    {
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/workspace/QuickActions.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { FileText, Plus, Search, Calendar } from 'lucide-react'

<<<<<<< HEAD

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

========
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
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Plus, Search, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Calendar } from 'lucide-react';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/workspace/QuickActions.tsx
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
<<<<<<<< HEAD:src/components/enterprise/workspace/QuickActions.tsx
========
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
              key={action.id}
              variant='outline'              className={`h - auto justify - start p - 4 ${action.color}`}
            >;
              <div className='flex flex - col items - start text - left'>;
                <div className='flex items - center'>;
                  {action.icon}
                  <span>{action.label}</span>;
                </div>;
                <span className='mt - 1 text - xs text - muted - foreground'>;
                  {action.description}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function QuickActions() {
  const actions = [
    {
      id: "post-job",
      label: "Post New Job",
<<<<<<< HEAD
      icon: <FileText className = "h-5 w-5 mr-2" />,
      description: "Create a new job posting",
      color: "bg-blue-100 dark:bg-blue-900/20"
    };
    {
      id: "add-member",
      label: "Add Team Member",
      icon: <Plus className = "h-5 w-5 mr-2" />,
      description: "Invite someone to your team",
      color: "bg-green-100 dark:bg-green-900/20"
    };
    {
      id: "find-talent",
      label: "Find Talent",
      icon: <Search className = "h-5 w-5 mr-2" />,
      description: "Search the talent pool",
      color: "bg-purple-100 dark:bg-purple-900/20"
    };
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/workspace/QuickActions.tsx
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {
      id: "schedule",
      label: "Schedule Interview",
      icon: <Calendar className="h-5 w-5 mr-2" />,
      description: "Set up candidate interviews",
      color: "bg-amber-100 dark:bg-amber-900/20"
    }
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/workspace/QuickActions.tsx
  ],
<<<<<<< HEAD

========
  ];
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/workspace/QuickActions.tsx
  return (
=======
>>>>>>> 
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  ],

  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Fast access to common tasks</CardDescription>
      </CardHeader>
      <CardContent>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/workspace/QuickActions.tsx
<<<<<<< HEAD

<<<<<<< HEAD
            >
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {actions.map(action => (
            <Button
              key={action.id}
              variant='outline'              className={`h-auto justify-start p-4 ${action.color}`}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>             >
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {actions.map(action => (
            <Button 
              key={action.id}
              variant="outline" 
              className={`h-auto justify-start p-4 ${action.color}`}
            >
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <div className="flex flex-col items-start text-left">
                <div className="flex items-center">
                  {action.icon}
                  <span>{action.label}</span>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
            <Button
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                <span className='mt-1 text-xs text-muted-foreground'>
                  {action.description}
                </span>              </div>
                <span className="mt-1 text-xs text-muted-foreground">{action.description}</span>
          {actions.map(action => (
            <Button
            <Button 
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              key={action.id}
              variant="outline"
              className={`h-auto justify-start p-4 ${action.color}`}
            >
<<<<<<< HEAD
<<<<<<< HEAD

              <div className='flex flex-col items-start text-left'>
=======
>>>>>>>               key={action.id}
              variant="outline"
              className={`h-auto justify-start p-4 ${action.color}`}
            >
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      </CardContent>
    </Card>
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              key={action.id}
              variant="outline"
              className={`h-auto justify-start p-4 ${action.color}`}
            >

========
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {actions.map(action => (
            <Button
              key={action.id}
              variant="outline"
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
        </div>
      </CardContent>
    </Card>
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/workspace/QuickActions.tsx
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
<<<<<<< HEAD

>>>>>>>               <div className='flex flex-col items-start text-left'>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              <div className='flex flex-col items-start text-left'>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <div className='flex items-center'>
                  {action.icon}
                  <span>{action.label}</span>
                </div>
                <span className='mt-1 text-xs text-muted-foreground'>
                  {action.description}
                </span>              </div>

              </div>

            </Button>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          ))}
        </div>;
<<<<<<< HEAD

      </CardContent>;
=======
>>>>>>>       </CardContent>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    </Card>;
  );
}
<<<<<<<< HEAD:src/components/enterprise/workspace/QuickActions.tsx
<<<<<<< HEAD

<<<<<<< HEAD
=======
}
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
  );
}
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/workspace/QuickActions.tsx
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
