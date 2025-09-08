<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {FileText, Plus, Users, Search, Calendar} from "lucide-react";

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button";
import { FileText, Plus, Users, Search, Calendar } from "lucide-react";
<<<<<<< HEAD

import { Button } from "@/components/ui/button",

import { FileText, Plus, Users, Search, Calendar } from "lucide-react",


=======
export function QuickActions() {
  const actions = $2;
      label: "Post New Job",
      icon: <FileText className = $2;
      description: "Create a new job posting",
      color: "bg-blue-100 dark:bg-blue-900/20"
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button";
import { FileText, Plus, Users, Search, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button",

import { FileText, Plus, Users, Search, Calendar } from "lucide-react",
>>>>>>> origin/cursor/delete-old-data-records-6bba

export function QuickActions() {

  const actions = [
    {

<<<<<<< HEAD
=======

      id: "post-job"
      label: "Post New Job"
      icon: <FileText className="h-5 w-5 mr-2" />
      description: "Create a new job posting"
>>>>>>> origin/cursor/delete-old-data-records-6bba


      id: "post-job",
      label: "Post New Job",
      icon: <FileText className="h-5 w-5 mr-2" />,
      description: "Create a new job posting",
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      color: "bg-blue-100 dark:bg-blue-900/20";
    };
      color: "bg-blue-100 dark:bg-blue-900/20"
    }
    },

      color: "bg-blue-100 dark:bg-blue-900/20"
    }
    },

    {
<<<<<<< HEAD


=======
      }
      "id": "id","
    "label": "Schedule Interview""
      "icon": <Calendar className="h-5 w-5 mr-2" />"
      "description": "Set up candidate interviews""
      "color": "bg-amber-100 "dark":bg-amber-900/20""
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";"
import { FileText, Plus, Users, Search, Calendar } from "lucide-react",;"
      <CardHeader>;
        <CardTitle>Quick Actions</CardTitle>;
        <CardDescription>Fast access to common tasks</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className="grid grid-cols-1 "sm":grid-cols-2 gap-4">;"
          {actions && actions.map(action => { return (; }
            <Button
}
key={action && action.id}
variant="outline";"
              className={`h-auto justify-start p-4 ${action && action.color}`}>;`
              <div className="flex flex-col items-start text-left">;"
                <div className="flex items-center">;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
    {
      id: "add-member"
      label: "Add Team Member"
      icon: <Plus className="h-5 w-5 mr-2" />
      description: "Invite someone to your team"
      color: "bg-green-100 dark:bg-green-900/20"


<<<<<<< HEAD

=======
    },

},


    }
    },
>>>>>>> origin/cursor/delete-old-data-records-6bba
    {
      id: "find-talent"
      label: "Find Talent"
      icon: <Search className="h-5 w-5 mr-2" />
      description: "Search the talent pool"
      color: "bg-purple-100 dark:bg-purple-900/20"


<<<<<<< HEAD
=======
    },

},

    }
    },
>>>>>>> origin/cursor/delete-old-data-records-6bba

    {
      id: "schedule"
      label: "Schedule Interview"
      icon: <Calendar className="h-5 w-5 mr-2" />
      description: "Set up candidate interviews"
      color: "bg-amber-100 dark:bg-amber-900/20"


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

              variant="outline" 
              className={`h-auto justify-start p-4 ${action && action.color}`}>;
              <div className="flex flex-col items-start text-left">;
                <div className="flex items-center">;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  {action && action.icon}
                  <span>{action && action.label}</span>;
                </div>;
                <span className="mt-1 text-xs text-muted-foreground">{action && action.description}</span>;              </div>;
            </Button>;
          ))}
        </div>;
      </CardContent>;
    </Card>;
  );
}

import { FileText, Plus, Users, Search, Calendar } from './lucide-react';
export /**;
 * QuickActions - Function description;
 */
function QuickActions() {}
  const actions = [;
    {"
      id: "post - job","
      label: "Post New Job","
      icon: <FileText className="h - 5 w - 5 mr - 2" />,"
      description: "Create a new job posting","
      color: "bg - blue - 100 dark:bg - blue - 900 / 20";
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
    {"
      id: "add - member","
      label: "Add Team Member","
      icon: <Plus className="h - 5 w - 5 mr - 2" />,"
      description: "Invite someone to your team","
      color: "bg - green - 100 dark:bg - green - 900 / 20";
    }
    {"
      id: "find - talent","
      label: "Find Talent","
      icon: <Search className="h - 5 w - 5 mr - 2" />,"
      description: "Search the talent pool","
      color: "bg - purple - 100 dark:bg - purple - 900 / 20";
    }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    {"
      id: "schedule","
      label: "Schedule Interview","
      icon: <Calendar className="h - 5 w - 5 mr - 2" />,"
      description: "Set up candidate interviews","

      color: "bg - amber - 100 dark:bg - amber - 900 / 20";
    }
  ];
;
  return (


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

<<<<<<< HEAD

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
>>>>>>> origin/cursor/delete-old-data-records-6bba

    <Card>;
      <CardHeader>;
        <CardTitle>Quick Actions</CardTitle>;
        <CardDescription>Fast access to common tasks</CardDescription>;
      </CardHeader>;

<<<<<<< HEAD
      <CardContent>;
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

              </div>;
            </Button>;
          ))}
        </div>;
      </CardContent>;
    </Card>;


    <Card>;

      <CardHeader>;
        <CardTitle > Quick Actions</CardTitle>;
        <CardDescription > Fast access to common tasks</CardDescription>;
      </CardHeader>;

            <Button;
              key={action.id}"
              variant="outline";
              className={`h - auto justify - start p - 4 ${action.color}`}
            >;"
              <div className="flex flex - col items - start text - left">;"
                <div className="flex items - center">;
                  {action.icon}

            <Button;
              key={action.id}
              variant="outline";
              className={`h - auto justify - start p - 4 ${action.color}`}
            >;
              <div className="flex flex - col items - start text - left">;
                <div className="flex items - center">;
                  {action.icon}

<<<<<<< HEAD

                  <span>{action.label}</span>
                </div>"

=======
                  <span>{action.label}</span>
                </div>"
                  <span>{action.label}</span>
                </div>"
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <span className="mt-1 text-xs text-muted-foreground">{action.description}</span>
              </div>
            </Button>


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          ))}
        </div>
      </CardContent>
    </Card>

  )
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
