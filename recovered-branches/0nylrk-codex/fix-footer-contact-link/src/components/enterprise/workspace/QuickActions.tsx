

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
                </div>"

