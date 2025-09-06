<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/workspace/QuickActions.tsx

<<<<<<< HEAD

import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {FileText, Plus, Users, Search, Calendar} from "lucide-react";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { FileText, Plus, Users, Search, Calendar } from "lucide-react";
=======
import { Button } from "@/components/ui/button",
import { FileText, Plus, Users, Search, Calendar } from "lucide-react",

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function QuickActions() {

  const actions = [
    {
<<<<<<< HEAD

<<<<<<< HEAD
      color: "bg-blue-100 dark:bg-blue-900/20"

=======

=======
<<<<<<< HEAD
      id: "post-job"
      label: "Post New Job"
      icon: <FileText className="h-5 w-5 mr-2" />
      description: "Create a new job posting"
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      id: "post-job",
      label: "Post New Job",
      icon: <FileText className="h-5 w-5 mr-2" />,
      description: "Create a new job posting",
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
      color: "bg-blue-100 dark:bg-blue-900/20";
    };
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      color: "bg-blue-100 dark:bg-blue-900/20"
<<<<<<< HEAD
    }
=======
    },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {
      id: "add-member"
      label: "Add Team Member"
      icon: <Plus className="h-5 w-5 mr-2" />
      description: "Invite someone to your team"
      color: "bg-green-100 dark:bg-green-900/20"
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
    {
      id: "find-talent"
      label: "Find Talent"
      icon: <Search className="h-5 w-5 mr-2" />
      description: "Search the talent pool"
      color: "bg-purple-100 dark:bg-purple-900/20"
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
    {
      id: "schedule"
      label: "Schedule Interview"
      icon: <Calendar className="h-5 w-5 mr-2" />
      description: "Set up candidate interviews"
      color: "bg-amber-100 dark:bg-amber-900/20"
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
  ],

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Fast access to common tasks</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {actions.map(action => (
            <Button
              key={action.id}
              variant="outline"
              className={`h-auto justify-start p-4 ${action.color}`}
            >
              <div className="flex flex-col items-start text-left">
                <div className="flex items-center">
                  {action.icon}
<<<<<<< HEAD
=======
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/workspace/QuickActions.tsx
import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {FileText, Plus, Users, Search, Calendar} from "lucide-react";
export function QuickActions() {;
  const actions = [;
    {;
      id: "post-job",;
      label: "Post New Job",;
      icon: <FileText className="h-5 w-5 mr-2" />,;
      description: "Create a new job posting",;
      color: "bg-blue-100 dark:bg-blue-900/20";
    };
    {;
      id: "add-member",;
      label: "Add Team Member",;
      icon: <Plus className="h-5 w-5 mr-2" />,;
      description: "Invite someone to your team",;
      color: "bg-green-100 dark:bg-green-900/20";
    };
    {;
      id: "find-talent",;
      label: "Find Talent",;
      icon: <Search className="h-5 w-5 mr-2" />,;
      description: "Search the talent pool",;
      color: "bg-purple-100 dark:bg-purple-900/20";
    };
    {;
      id: "schedule",;
      label: "Schedule Interview",;
      icon: <Calendar className="h-5 w-5 mr-2" />,;
      description: "Set up candidate interviews",;
      color: "bg-amber-100 dark:bg-amber-900/20";
import React from './react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { FileText, Plus, Users, Search, Calendar } from './lucide-react';
export /**
 * QuickActions - Function description
 */
function QuickActions() {
  const actions = [;
    {
      id: "post - job",
      label: "Post New Job",
      icon: <FileText className="h - 5 w - 5 mr - 2" />,
      description: "Create a new job posting",
      color: "bg - blue - 100 dark:bg - blue - 900 / 20";
    }
    {
      id: "add - member",
      label: "Add Team Member",
      icon: <Plus className="h - 5 w - 5 mr - 2" />,
      description: "Invite someone to your team",
      color: "bg - green - 100 dark:bg - green - 900 / 20";
    }
    {
      id: "find - talent",
      label: "Find Talent",
      icon: <Search className="h - 5 w - 5 mr - 2" />,
      description: "Search the talent pool",
      color: "bg - purple - 100 dark:bg - purple - 900 / 20";
    }
    {
      id: "schedule",
      label: "Schedule Interview",
      icon: <Calendar className="h - 5 w - 5 mr - 2" />,
      description: "Set up candidate interviews",
      color: "bg - amber - 100 dark:bg - amber - 900 / 20";
    }
  ];
;
  return (
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/workspace/QuickActions.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/workspace/QuickActions.tsx
=======

=======
                  <span>{action.label}</span>
                </div>
                <span className="mt-1 text-xs text-muted-foreground">{action.description}</span>
              </div>
            </Button>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { FileText, Plus, Users, Search, Calendar } from "lucide-react",;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/workspace/QuickActions.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/workspace/QuickActions.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <Card>;
      <CardHeader>;
        <CardTitle>Quick Actions</CardTitle>;
        <CardDescription>Fast access to common tasks</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              </div>;
            </Button>;
          ))}
        </div>;
      </CardContent>;
    </Card>;
<<<<<<< HEAD
  );
}
    <Card>;
      <CardHeader>;
        <CardTitle > Quick Actions</CardTitle>;
        <CardDescription > Fast access to common tasks</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className="grid grid - cols - 1 sm:grid - cols - 2 gap - 4">;
          {actions.map (action => (
            <Button;
              key={action.id}
              variant="outline";
              className={`h - auto justify - start p - 4 ${action.color}`}
            >;
              <div className="flex flex - col items - start text - left">;
                <div className="flex items - center">;
                  {action.icon}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
          {actions.map(action => (;
            <Button;
              key={action.id}
              variant="outline";
              className={`h-auto justify-start p-4 ${action.color}`}
            >
              <div className="flex flex-col items-start text-left">
                <div className="flex items-center">
                  {action.icon}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <span>{action.label}</span>
                </div>
                <span className="mt-1 text-xs text-muted-foreground">{action.description}</span>
              </div>
            </Button>
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          ))}
        </div>
      </CardContent>
    </Card>
  )
<<<<<<< HEAD
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/workspace/QuickActions.tsx
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
=======
  ),;}
 const actions = [ {
  return (<Card> <CardHeader> <CardTitle>Quick Actions</CardTitle> <CardDescription>Fast access to common tasks</CardDescription> </CardHeader> <CardContent> </div> </Button>) ) 
}</div> </CardContent> </Card>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/workspace/QuickActions.tsx
=======
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
