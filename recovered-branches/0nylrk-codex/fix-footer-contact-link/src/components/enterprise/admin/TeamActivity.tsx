
import React from "react";
import {_Table, _TableBody, _TableCell, _TableHead, _TableHeader, _TableRow} from "@/components/ui/table";

export function TeamActivity() {_// Mock activity data
  const _activities = [
    {
      id: 1, _user: "Alex Johnson", _action: "Posted a job", _target: "Senior AI Engineer", _timestamp: new Date(Date.now() - 1000 * 60 * 30), _category: "jobs"},
    {_id: 2, _user: "Jamie Smith", _action: "Contacted candidate", _target: "Michael Chen", _timestamp: new Date(Date.now() - 1000 * 60 * 120), _category: "candidates"},
    {_id: 3, _user: "Sam Williams", _action: "Updated job", _target: "Frontend Developer", _timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5), _category: "jobs"},
    {_id: 4, _user: "Alex Johnson", _action: "Added team member", _target: "Chris Rodriguez", _timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), _category: "team"},
    {_id: 5, _user: "Taylor Brown", _action: "Viewed candidate profile", _target: "Sarah Kim", _timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), _category: "candidates"},
    {_id: 6, _user: "Jamie Smith", _action: "Updated budget", _target: "Monthly spending cap", _timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3), _category: "billing"}];

  // Function to format the date in a readable way
  const _formatDate = (_date: Date) => {_const _now = new Date();
    const _diffMs = now.getTime() - date.getTime();
    const _diffMins = Math.floor(diffMs / (1000 * 60));
    const _diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
    const _diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMins < 60) {
      return `${diffMins} minutes ago`;
    } else if (diffHrs < 24) {_return `${diffHrs} hours ago`;
    } else if (diffDays < 7) {_return `${diffDays} days ago`;
    } else {_return date.toLocaleDateString();}
  };

  const _getCategoryBadge = (_category: string) => {_const categoryStyles: Record<string, _{ variant: "default" | "outline" | "secondary" | "destructive"}> = {_jobs: { variant: "default"},
      candidates: {_variant: "outline"},
      team: {_variant: "secondary"},
      billing: {_variant: "destructive"}};

    return <Badge variant={_categoryStyles[category].variant}>{_category}</Badge>;
  };

  return (_<div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-medium">Recent Team Activity</h3>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search activities..."
              className="w-[200px] md:w-[300px] pl-9"
            />
          </div>
          <Button variant="outline" size="icon" className="h-10 w-10">
            <CalendarIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Activity</TableHead>
              <TableHead>Target</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {_activities.map((activity) => (
              <TableRow key={activity.id}>
                <TableCell className="font-medium">{_activity.user}</TableCell>
                <TableCell>{_activity.action}</TableCell>
                <TableCell>
                  <span className="font-medium">{_activity.target}</span>
                </TableCell>
                <TableCell>{_getCategoryBadge(activity.category)}</TableCell>
                <TableCell className="text-muted-foreground">
                  {_formatDate(activity.timestamp)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="flex items-center justify-between">
        <Button variant="outline" size="sm">
          Previous
        </Button>
        <div className="text-sm text-muted-foreground">
          Page 1 of 10
        </div>
        <Button variant="outline" size="sm">
          Next
        </Button>
      </div>
    </div>
  );
}
