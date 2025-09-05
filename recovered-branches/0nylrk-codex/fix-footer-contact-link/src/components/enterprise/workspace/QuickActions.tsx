
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { FileText, Plus, Users, Search, Calendar } from "lucide-react",
=======
import React from &quot;react&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { FileText, Plus, Users, Search, Calendar } from &quot;lucide-react&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export function QuickActions() {
  const actions = [
    {
      id: &quot;post-job&quot;,
      label: &quot;Post New Job&quot;,
      icon: <FileText className=&quot;h-5 w-5 mr-2&quot; />,
      description: &quot;Create a new job posting&quot;,
      color: &quot;bg-blue-100 dark:bg-blue-900/20&quot;
    },
    {
      id: &quot;add-member&quot;,
      label: &quot;Add Team Member&quot;,
      icon: <Plus className=&quot;h-5 w-5 mr-2&quot; />,
      description: &quot;Invite someone to your team&quot;,
      color: &quot;bg-green-100 dark:bg-green-900/20&quot;
    },
    {
      id: &quot;find-talent&quot;,
      label: &quot;Find Talent&quot;,
      icon: <Search className=&quot;h-5 w-5 mr-2&quot; />,
      description: &quot;Search the talent pool&quot;,
      color: &quot;bg-purple-100 dark:bg-purple-900/20&quot;
    },
    {
      id: &quot;schedule&quot;,
      label: &quot;Schedule Interview&quot;,
      icon: <Calendar className=&quot;h-5 w-5 mr-2&quot; />,
      description: &quot;Set up candidate interviews&quot;,
      color: &quot;bg-amber-100 dark:bg-amber-900/20&quot;
    }
  ],

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Fast access to common tasks</CardDescription>
      </CardHeader>
      <CardContent>
        <div className=&quot;grid grid-cols-1 sm:grid-cols-2 gap-4&quot;>
          {actions.map(action => (
            <Button 
              key={action.id}
              variant=&quot;outline&quot; 
              className={`h-auto justify-start p-4 ${action.color}`}
            >
              <div className=&quot;flex flex-col items-start text-left&quot;>
                <div className=&quot;flex items-center&quot;>
                  {action.icon}
                  <span>{action.label}</span>
                </div>
                <span className=&quot;mt-1 text-xs text-muted-foreground&quot;>{action.description}</span>
              </div>
            </Button>
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
    <Card>;
      <CardHeader>;
        <CardTitle>Quick Actions</CardTitle>;
        <CardDescription>Fast access to common tasks</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">;
          {actions.map(action => (;
            <Button;
              key={action.id}
              variant="outline";
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          ))}
        </div>;
      </CardContent>;
    </Card>;
  );
}
;