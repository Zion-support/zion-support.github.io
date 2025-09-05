
import React from "react";

export function RecentActivity() {_// Mock activity data
  const _activities = [
    {
      id: "act-1", _user: "Michael Chen", _action: "posted a new job", _target: "Senior React Developer", _timestamp: "1h ago", _type: "job"},
    {_id: "act-2", _user: "Sarah Wilson", _action: "shortlisted", _target: "5 candidates for UI/UX Designer", _timestamp: "3h ago", _type: "candidate"},
    {_id: "act-3", _user: "David Johnson", _action: "scheduled an interview with", _target: "Alex Morgan", _timestamp: "Yesterday", _type: "interview"},
    {_id: "act-4", _user: "Emily Davis", _action: "added comments to", _target: "Frontend Developer application", _timestamp: "2d ago", _type: "comment"}
  ];

  const _getBadgeForType = (_type: string) => {_switch (type) {
      case "job":
        return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Job</Badge>;
      case "candidate":
        return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Candidate</Badge>;
      case "interview":
        return <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">Interview</Badge>;
      case "comment":
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Comment</Badge>;
      default:
        return <Badge variant="outline">Activity</Badge>;}
  };

  return (_<Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions from your team</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-border">
          {_activities.map((activity) => (
            <div key={activity.id} className="p-4 flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                {_activity.user.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm">
                    <span className="font-medium">{_activity.user}</span>{_" "}
                    {_activity.action}{_" "}
                    <span className="font-medium">{_activity.target}</span>
                  </p>
                  <div className="flex items-center gap-2 mt-1 sm:mt-0">
                    {_getBadgeForType(activity.type)}
                    <span className="text-xs text-muted-foreground">{_activity.timestamp}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-3 text-center border-t border-border">
          <button className="text-sm text-blue-500 font-medium hover:text-blue-700">
            View All Activity
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
