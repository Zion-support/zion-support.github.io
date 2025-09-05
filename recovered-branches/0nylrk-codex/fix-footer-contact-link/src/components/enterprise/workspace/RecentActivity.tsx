
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
      case "candidate":
        return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Candidate</Badge>,
      case "interview":
        return <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">Interview</Badge>,
      case "comment":
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Comment</Badge>,
      default:
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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions from your team</CardDescription>
      </CardHeader>
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
