<<<<<<< HEAD
=======
<<<<<<< HEAD




<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {FileText, Plus, Users, Search, Calendar} from "lucide-react";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button";
import { FileText, Plus, Users, Search, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button",
import { FileText, Plus, Users, Search, Calendar } from "lucide-react",

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
export function QuickActions() {

  const actions = [
    {
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
      id: "post-job"
      label: "Post New Job"
      icon: <FileText className="h-5 w-5 mr-2" />
      description: "Create a new job posting"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      id: "post-job",
      label: "Post New Job",
      icon: <FileText className="h-5 w-5 mr-2" />,
      description: "Create a new job posting",
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      color: "bg-blue-100 dark:bg-blue-900/20";
    };
      color: "bg-blue-100 dark:bg-blue-900/20"
    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      color: "bg-blue-100 dark:bg-blue-900/20"
    }
    },


<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    {
      id: "add-member"
      label: "Add Team Member"
      icon: <Plus className="h-5 w-5 mr-2" />
      description: "Invite someone to your team"
      color: "bg-green-100 dark:bg-green-900/20"
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

    },


=======
    },


    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    {
      id: "find-talent"
      label: "Find Talent"
      icon: <Search className="h-5 w-5 mr-2" />
      description: "Search the talent pool"
      color: "bg-purple-100 dark:bg-purple-900/20"
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

    },


=======
    },


    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    {
      id: "schedule"
      label: "Schedule Interview"
      icon: <Calendar className="h-5 w-5 mr-2" />
      description: "Set up candidate interviews"
      color: "bg-amber-100 dark:bg-amber-900/20"
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {FileText, Plus, Users, Search, Calendar} from "lucide-react";

=======
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

                  <span>{action.label}</span>
                </div>
                <span className="mt-1 text-xs text-muted-foreground">{action.description}</span>
              </div>
            </Button>
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { FileText, Plus, Users, Search, Calendar } from "lucide-react",;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
=======
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
          ))}
        </div>;
      </CardContent>;
    </Card>;
  );
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

=======

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { FileText, Plus, Users, Search, Calendar } from "lucide-react",;
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

=======
    }
  ];
  return (;
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <Card>;
      <CardHeader>;
        <CardTitle>Quick Actions</CardTitle>;
        <CardDescription>Fast access to common tasks</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">;
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              </div>;
            </Button>;
          ))}
        </div>;
      </CardContent>;
    </Card>;
<<<<<<< HEAD
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <Card>;
      <CardHeader>;
        <CardTitle > Quick Actions</CardTitle>;
        <CardDescription > Fast access to common tasks</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className="grid grid - cols - 1 sm:grid - cols - 2 gap - 4">;
          {actions.map (action => (
<<<<<<< HEAD
=======
          {actions.map(action => (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <Button;
              key={action.id}
              variant="outline";
              className={`h - auto justify - start p - 4 ${action.color}`}
            >;
              <div className="flex flex - col items - start text - left">;
                <div className="flex items - center">;
                  {action.icon}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  <span>{action.label}</span>
                </div>
                <span className="mt-1 text-xs text-muted-foreground">{action.description}</span>
              </div>
            </Button>

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          ))}
        </div>
      </CardContent>
    </Card>
  )
<<<<<<< HEAD
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  ),;}
 const actions = [ {
  return (<Card> <CardHeader> <CardTitle>Quick Actions</CardTitle> <CardDescription>Fast access to common tasks</CardDescription> </CardHeader> <CardContent> </div> </Button>) ) 
}</div> </CardContent> </Card>) 
}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
