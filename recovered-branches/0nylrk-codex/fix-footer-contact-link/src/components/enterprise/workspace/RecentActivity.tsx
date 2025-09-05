
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
=======
import React from &quot;react&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function RecentActivity() {
  // Mock activity data
  const activities = [
    {
      id: &quot;act-1&quot;,
      user: &quot;Michael Chen&quot;,
      action: &quot;posted a new job&quot;,
      target: &quot;Senior React Developer&quot;,
      timestamp: &quot;1h ago&quot;,
      type: &quot;job&quot;
    },
    {
      id: &quot;act-2&quot;,
      user: &quot;Sarah Wilson&quot;,
      action: &quot;shortlisted&quot;,
      target: &quot;5 candidates for UI/UX Designer&quot;,
      timestamp: &quot;3h ago&quot;,
      type: &quot;candidate&quot;
    },
    {
      id: &quot;act-3&quot;,
      user: &quot;David Johnson&quot;,
      action: &quot;scheduled an interview with&quot;,
      target: &quot;Alex Morgan&quot;,
      timestamp: &quot;Yesterday&quot;,
      type: &quot;interview&quot;
    },
    {
      id: &quot;act-4&quot;,
      user: &quot;Emily Davis&quot;,
      action: &quot;added comments to&quot;,
      target: &quot;Frontend Developer application&quot;,
      timestamp: &quot;2d ago&quot;,
      type: &quot;comment&quot;
    }
  ],

  const getBadgeForType = (type: string) => {
    switch (type) {
<<<<<<< HEAD
      case "job": return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Job</Badge>,
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      case "candidate":
        return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Candidate</Badge>,
      case "interview":
        return <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">Interview</Badge>,
      case "comment":
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Comment</Badge>,
      default:
<<<<<<< HEAD
        return <Badge variant="outline">Activity</Badge>
=======
      case &quot;job&quot;:
        return <Badge variant=&quot;outline&quot; className=&quot;bg-blue-100 text-blue-800 border-blue-200&quot;>Job</Badge>;
      case &quot;candidate&quot;:
        return <Badge variant=&quot;outline&quot; className=&quot;bg-green-100 text-green-800 border-green-200&quot;>Candidate</Badge>;
      case &quot;interview&quot;:
        return <Badge variant=&quot;outline&quot; className=&quot;bg-purple-100 text-purple-800 border-purple-200&quot;>Interview</Badge>;
      case &quot;comment&quot;:
        return <Badge variant=&quot;outline&quot; className=&quot;bg-amber-100 text-amber-800 border-amber-200&quot;>Comment</Badge>;
      default:
        return <Badge variant=&quot;outline&quot;>Activity</Badge>;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },
=======
        return <Badge variant="outline">Activity</Badge>;}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (_<Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions from your team</CardDescription>
      </CardHeader>
<<<<<<< HEAD
      <CardContent className=&quot;p-0&quot;>
        <div className=&quot;divide-y divide-border&quot;>
          {activities.map((activity) => (
            <div key={activity.id} className=&quot;p-4 flex items-start gap-3&quot;>
              <div className=&quot;w-8 h-8 rounded-full bg-muted flex items-center justify-center&quot;>
                {activity.user.charAt(0)}
              </div>
              <div className=&quot;flex-1&quot;>
                <div className=&quot;flex flex-col sm:flex-row sm:items-center sm:justify-between&quot;>
                  <p className=&quot;text-sm&quot;>
                    <span className=&quot;font-medium&quot;>{activity.user}</span>{&quot; &quot;}
                    {activity.action}{&quot; &quot;}
                    <span className=&quot;font-medium&quot;>{activity.target}</span>
                  </p>
                  <div className=&quot;flex items-center gap-2 mt-1 sm:mt-0&quot;>
                    {getBadgeForType(activity.type)}
                    <span className=&quot;text-xs text-muted-foreground&quot;>{activity.timestamp}</span>
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
<<<<<<< HEAD
        <div className="p-3 text-center border-t border-border">
          <button className="text-sm text-blue-500 font-medium hover: text-blue-700">
=======
        <div className=&quot;p-3 text-center border-t border-border&quot;>
          <button className=&quot;text-sm text-blue-500 font-medium hover:text-blue-700&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            View All Activity
          </button>
        </div>
      </CardContent>
    </Card>
  )
}
