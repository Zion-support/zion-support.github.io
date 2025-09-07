

import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button";
import { FileText, Plus, Users, Search, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button",
import { FileText, Plus, Users, Search, Calendar } from "lucide-react",
      id: "post-job",
      label: "Post New Job",
      icon: <FileText className="h-5 w-5 mr-2" />,
      description: "Create a new job posting",      color: "bg-blue-100 dark:bg-blue-900/20"
    }
    },

    {
      id: "schedule"
      label: "Schedule Interview"
      icon: <Calendar className="h-5 w-5 mr-2" />
      description: "Set up candidate interviews"
      color: "bg-amber-100 dark:bg-amber-900/20"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { FileText, Plus, Users, Search, Calendar } from "lucide-react",;
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
                <span className="mt-1 text-xs text-muted-foreground">{action && action.description}</span>;              </div>;
            </Button>;
          ))}
        </div>;
      </CardContent>;
    </Card>;
  );
}
      <CardHeader>;
        <CardTitle > Quick Actions</CardTitle>;
        <CardDescription > Fast access to common tasks</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className="grid grid - cols - 1 sm:grid - cols - 2 gap-4">;
          {actions.map (action => (
          {actions.map(action => (;
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
}



import React from "react";""
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";""
import {Button} from "@/components/ui/button";""
import {FileText, Plus, Users, Search, Calendar} from "lucide-react";""
import React from "react",""
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",""
import { Button } from "@/components/ui/button";""
import { FileText, Plus, Users, Search, Calendar } from "lucide-react";""
import { Button } from "@/components/ui/button",""
import { FileText, Plus, Users, Search, Calendar } from "lucide-react","
export function QuickActions() {

  const actions = [
    {

"
      id: "post-job",""
      label: "Post New Job",""
      icon: <FileText className="h-5 w-5 mr-2" />,"
      icon: <Plus className="h-5 w-5 mr-2" />"
      icon: <Search className="h-5 w-5 mr-2" />"
      icon: <Calendar className="h-5 w-5 mr-2" />"
      icon: <FileText className="h-5 w-5 mr-2" />,;"
      icon: <Plus className="h-5 w-5 mr-2" />,;"
      icon: <Search className="h-5 w-5 mr-2" />,;"
      icon: <Calendar className="h-5 w-5 mr-2" />,;"

    <Card>;

      <CardHeader>;

        <CardTitle>Quick Actions;
        <CardDescription>Fast access to common tasks;
      ;
      <CardContent>;
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">;"
</Calendar>
    <Card>;
</Card>
      <CardHeader>;
</CardHeader>
        <CardTitle>Quick Actions</CardTitle>;
        <CardDescription>Fast access to common tasks</CardDescription>;
      </CardHeader>;
      <CardContent>;
</CardContent>"
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">;"
</div>
            <Button;
              key={action && action.id}"
              variant="outline""
              className={`h-auto justify-start p-4 ${action && action.color}`}>;
</Button>"
              <div className="flex flex-col items-start text-left">;"
</div>"
                <div className="flex items-center">;"
</div>
                  <span>{action && action.label}</span>;
                </div>;"
                <span className="mt-1 text-xs text-muted-foreground">{action && action.description}</span>;"
              </div>;

            </Button>;
        </div>;
      </CardContent>;

    </Card>;"
      icon: <FileText className="h - 5 w - 5 mr - 2" />,"
</FileText>"
      icon: <Plus className="h - 5 w - 5 mr - 2" />,"
</Plus>"
      icon: <Search className="h - 5 w - 5 mr - 2" />,"
</Search>"
      icon: <Calendar className="h - 5 w - 5 mr - 2" />,"
</Calendar>
    <Card>;
</Card>
      <CardHeader>;
</CardHeader>
        <CardTitle>Quick Actions</CardTitle>;
        <CardDescription>Fast access to common tasks</CardDescription>;
      </CardHeader>;
      <CardContent>;
</CardContent>"
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">;"
</div>
            <Button;
              key={action && action.id}"
              variant="outline""
              className={`h-auto justify-start p-4 ${action && action.color}`}>;
</Button>"
              <div className="flex flex-col items-start text-left">;"
</div>"
                <div className="flex items-center">;"
</div>
                  <span>{action && action.label}</span>;
                </div>;"
                <span className="mt-1 text-xs text-muted-foreground">{action && action.description}</span>;"
              </div>;
            </Button>;
        </div>;
      </CardContent>;
    </Card>;
    <Card>;
</Card>
      <CardHeader>;
</CardHeader>
        <CardTitle > Quick Actions</CardTitle>;
        <CardDescription > Fast access to common tasks</CardDescription>;
      </CardHeader>;
      <CardContent>;
</CardContent>"
        <div className="grid grid - cols - 1 sm:grid - cols - 2 gap - 4">;"
</div>
            <Button;
              key={action && action.id}"
              variant="outline""
              className={`h-auto justify-start p-4 ${action && action.color}`}>;
              <div className="flex flex-col items-start text-left">;"
</div>"
                <div className="flex items-center">;"
                  <span>{action && action.label}</span>;
                </div>;"
                <span className="mt-1 text-xs text-muted-foreground">{action && action.description}</span>;"
              </div>;
    ;"
      icon: <FileText className="h - 5 w - 5 mr - 2" />,"
      icon: <Plus className="h - 5 w - 5 mr - 2" />,"
      icon: <Search className="h - 5 w - 5 mr - 2" />,"
      icon: <Calendar className="h - 5 w - 5 mr - 2" />,"



              variant="outline""`;


        <CardTitle > Quick Actions;
        <CardDescription > Fast access to common tasks;
        <div className="grid grid - cols - 1 sm:grid - cols - 2 gap - 4">;"
              key={action.id}"
              variant="outline";"`;
              className={`h - auto justify - start p - 4 ${action.color}`}
            >;
              <div className="flex flex - col items - start text - left">;"
                <div className="flex items - center">;"
                  <span>{action.label}</span>
                <span className="mt-1 text-xs text-muted-foreground">{action.description}</span>"
            
      
    
  return (<Card> <CardHeader> <CardTitle>Quick Actions <CardDescription>Fast access to common tasks  <CardContent> </div> ) ) 

}</div>  ) ]"`;
pr-12325
              </div>
            </Button>
        </div>
      </CardContent>
    </Card>
  return (<Card> <CardHeader> <CardTitle>Quick Actions</CardTitle> <CardDescription>Fast access to common tasks</CardDescription> </CardHeader> <CardContent> </div> </Button>) ) 
</Card>
}</div> </CardContent> </Card>) ]"

