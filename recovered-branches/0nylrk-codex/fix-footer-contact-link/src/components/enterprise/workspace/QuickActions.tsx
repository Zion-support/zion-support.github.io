
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
=======
import React from "react";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function QuickActions() {_const _actions = [
    {
<<<<<<< HEAD
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
=======
      id: "post-job", _label: "Post New Job", _icon: <FileText className="h-5 w-5 mr-2" />, _description: "Create a new job posting", _color: "bg-blue-100 dark:bg-blue-900/20"},
    {_id: "add-member", _label: "Add Team Member", _icon: <Plus className="h-5 w-5 mr-2" />, _description: "Invite someone to your team", _color: "bg-green-100 dark:bg-green-900/20"},
    {_id: "find-talent", _label: "Find Talent", _icon: <Search className="h-5 w-5 mr-2" />, _description: "Search the talent pool", _color: "bg-purple-100 dark:bg-purple-900/20"},
    {_id: "schedule", _label: "Schedule Interview", _icon: <Calendar className="h-5 w-5 mr-2" />, _description: "Set up candidate interviews", _color: "bg-amber-100 dark:bg-amber-900/20"}
  ];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Fast access to common tasks</CardDescription>
      </CardHeader>
      <CardContent>
<<<<<<< HEAD
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
=======
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {_actions.map(action => (
            <Button 
              key={action.id}
              variant="outline" 
              className={_`h-auto justify-start p-4 ${action.color}`}
            >
              <div className="flex flex-col items-start text-left">
                <div className="flex items-center">
                  {_action.icon}
                  <span>{_action.label}</span>
                </div>
                <span className="mt-1 text-xs text-muted-foreground">{_action.description}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
