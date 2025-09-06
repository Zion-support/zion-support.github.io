import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
export function RecentActivity() {
  // Mock activity data

  const activities = [
    {
      id: "act-1",
      user: "Michael Chen",
      action: "posted a new job",
      target: "Senior React Developer",
      timestamp: "1h ago",
      type: "job"
    }
    },


    {
      id: "act-2"
      user: "Sarah Wilson"
      action: "shortlisted"
      target: "5 candidates for UI/UX Designer"
      timestamp: "3h ago"
      type: "candidate"
    {
      id: "act-3"
      user: "David Johnson"
      action: "scheduled an interview with"
      target: "Alex Morgan"
      timestamp: "Yesterday"
      type: "interview"
    {
      id: "act-4"
      user: "Emily Davis"
      action: "added comments to"
      target: "Frontend Developer application"
      timestamp: "2d ago"
      type: "comment"
    }
}


import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;

export function RecentActivity() {;
  // Mock activity data;
  const activities = [;
    {;
      id: "act-1",;
      user: "Michael Chen",;
      action: "posted a new job",;
      target: "Senior React Developer",;
      timestamp: "1h ago",;
      type: "job";
    {;
      id: "act-2",;
      user: "Sarah Wilson",;
      action: "shortlisted",;
      target: "5 candidates for UI/UX Designer",;
      timestamp: "3h ago",;
      type: "candidate";
    {;
      id: "act-3",;
      user: "David Johnson",;
      action: "scheduled an interview with",;
      target: "Alex Morgan",;
      timestamp: "Yesterday",;
      type: "interview";
    {;
      id: "act-4",;
      user: "Emily Davis",;
      action: "added comments to",;
      target: "Frontend Developer application",;
      timestamp: "2d ago",;
      type: "comment";
    }
      case "job": return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Job</Badge>;
      case "candidate":;
        return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Candidate</Badge>;
      case "interview":;
        return <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">Interview</Badge>;
    }
  }

  return (
    <Card>;
      <CardHeader>;
        <CardTitle>Recent Activity</CardTitle>;
        <CardDescription>Latest actions from your team</CardDescription>;
      </CardHeader>;
      <CardContent className="p-0">;
        <div className="divide-y divide-border">;
          {activities && activities.map((activity) => (;
            <div key={activity && activity.id} className="p-4 flex items-start gap-3">;
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">;
                  </div>;
                </div>;
              </div>;
            </div>;
          ))}
            View All Activity;
          </button>;
        </div>;
      </CardContent>;




}
;
    </Card>);
}
