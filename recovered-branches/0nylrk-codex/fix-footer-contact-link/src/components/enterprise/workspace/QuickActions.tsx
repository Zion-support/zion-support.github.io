<<<<<<< HEAD




<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {FileText, Plus, Users, Search, Calendar} from "lucide-react";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button";
import { FileText, Plus, Users, Search, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button",
import { FileText, Plus, Users, Search, Calendar } from "lucide-react",

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export function QuickActions() {

  const actions = [
    {
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      id: "post-job"
      label: "Post New Job"
      icon: <FileText className="h-5 w-5 mr-2" />
      description: "Create a new job posting"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      color: "bg-blue-100 dark:bg-blue-900/20";
    };
      color: "bg-blue-100 dark:bg-blue-900/20"
    }
    },
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      color: "bg-blue-100 dark:bg-blue-900/20"
    }
    },


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    {
      id: "add-member"
      label: "Add Team Member"
      icon: <Plus className="h-5 w-5 mr-2" />
      description: "Invite someone to your team"
      color: "bg-green-100 dark:bg-green-900/20"
<<<<<<< HEAD

=======
    }
    },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    {
      id: "schedule"
      label: "Schedule Interview"
      icon: <Calendar className="h-5 w-5 mr-2" />
      description: "Set up candidate interviews"
      color: "bg-amber-100 dark:bg-amber-900/20"
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
<<<<<<< HEAD
    }
  ];
;
=======

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  <span>{action.label}</span>
                </div>
                <span className="mt-1 text-xs text-muted-foreground">{action.description}</span>
              </div>
            </Button>
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          ))}
        </div>
      </CardContent>
    </Card>
  )
<<<<<<< HEAD
<<<<<<< HEAD
}
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
