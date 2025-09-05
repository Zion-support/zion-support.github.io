
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { FileText, Plus, Users, Search, Calendar } from "lucide-react",import React from "react";

export function QuickActions() {_const _actions = [
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
                <span className=&quot;mt-1 text-xs text-muted-foreground&quot;>{action.description}</span>              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
