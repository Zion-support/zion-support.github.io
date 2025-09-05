
import React from "react";

export function QuickActions() {_const _actions = [
    {
      id: "post-job", _label: "Post New Job", _icon: <FileText className="h-5 w-5 mr-2" />, _description: "Create a new job posting", _color: "bg-blue-100 dark:bg-blue-900/20"},
    {_id: "add-member", _label: "Add Team Member", _icon: <Plus className="h-5 w-5 mr-2" />, _description: "Invite someone to your team", _color: "bg-green-100 dark:bg-green-900/20"},
    {_id: "find-talent", _label: "Find Talent", _icon: <Search className="h-5 w-5 mr-2" />, _description: "Search the talent pool", _color: "bg-purple-100 dark:bg-purple-900/20"},
    {_id: "schedule", _label: "Schedule Interview", _icon: <Calendar className="h-5 w-5 mr-2" />, _description: "Set up candidate interviews", _color: "bg-amber-100 dark:bg-amber-900/20"}
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Fast access to common tasks</CardDescription>
      </CardHeader>
      <CardContent>
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
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
