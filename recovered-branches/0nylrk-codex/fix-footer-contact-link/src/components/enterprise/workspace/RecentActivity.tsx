


<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function RecentActivity() {
  // Mock activity data

  const activities = [
    {

<<<<<<< HEAD
<<<<<<< HEAD
      id: "act-1"
      user: "Michael Chen"
      action: "posted a new job"
      target: "Senior React Developer"
      timestamp: "1h ago"
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      id: "act-1",
      user: "Michael Chen",
      action: "posted a new job",
      target: "Senior React Developer",
      timestamp: "1h ago",
<<<<<<< HEAD
<<<<<<< HEAD
      type: "job";
    };
      type: "job"
    }
    },
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      id: "act-2"
      user: "Sarah Wilson"
      action: "shortlisted"
      target: "5 candidates for UI/UX Designer"
      timestamp: "3h ago"
      type: "candidate"
<<<<<<< HEAD

<<<<<<< HEAD
    },


    }
    },
=======

    },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
    },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      id: "act-3"
      user: "David Johnson"
      action: "scheduled an interview with"
      target: "Alex Morgan"
      timestamp: "Yesterday"
      type: "interview"
<<<<<<< HEAD

<<<<<<< HEAD
    },


    }
    },
=======

    },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
    },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      id: "act-4"
      user: "Emily Davis"
      action: "added comments to"
      target: "Frontend Developer application"
      timestamp: "2d ago"
      type: "comment"
    }
<<<<<<< HEAD

<<<<<<< HEAD

  ];
  ],

=======
import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
=======

  ],


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  ];
  ],

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const getBadgeForType = (type: string) => {
    switch (type) {
      case "job": return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Job</Badge>,
      case "candidate":
        return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Candidate</Badge>,
      case "interview":
        return <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">Interview</Badge>,
      case "comment":
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Comment</Badge>
      default:
        return <Badge variant="outline">Activity</Badge>
    }
<<<<<<< HEAD

  },

<<<<<<< HEAD
  }
  },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
  },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions from your team</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-border">
          {activities.map((activity) => (
            <div key={activity.id} className="p-4 flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                {activity.user.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm">
                    <span className="font-medium">{activity.user}</span>{" "}
                    {activity.action}{" "}
                    <span className="font-medium">{activity.target}</span>
                  </p>
                  <div className="flex items-center gap-2 mt-1 sm:mt-0">
                    {getBadgeForType(activity.type)}
                    <span className="text-xs text-muted-foreground">{activity.timestamp}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-3 text-center border-t border-border">
          <button className="text-sm text-blue-500 font-medium hover: text-blue-700">
            View All Activity
          </button>
        </div>
      </CardContent>
    </Card>
  )

<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;

<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
;
}
import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
    },;
=======
    };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    };
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {;
      id: "act-2",;
      user: "Sarah Wilson",;
      action: "shortlisted",;
      target: "5 candidates for UI/UX Designer",;
      timestamp: "3h ago",;
      type: "candidate";
<<<<<<< HEAD
<<<<<<< HEAD
    },;
=======
    };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    };
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {;
      id: "act-3",;
      user: "David Johnson",;
      action: "scheduled an interview with",;
      target: "Alex Morgan",;
      timestamp: "Yesterday",;
      type: "interview";
<<<<<<< HEAD
<<<<<<< HEAD
    },;
=======
    };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    };
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {;
      id: "act-4",;
      user: "Emily Davis",;
      action: "added comments to",;
      target: "Frontend Developer application",;
      timestamp: "2d ago",;
      type: "comment";
    }
<<<<<<< HEAD
<<<<<<< HEAD
      id:"act-1",;
      user:"Michael Chen",;
      action:"posted a new job",;
      target:"Senior React Developer",;
      timestamp:"1h ago",;
      type:"job";
    },;
    {;
      id:"act-2",;
      user:"Sarah Wilson",;
      action:"shortlisted",;
      target:"5 candidates for UI/UX Designer",;
      timestamp:"3h ago",;
      type:"candidate";
    },;
    {;
      id:"act-3",;
      user:"David Johnson",;
      action:"scheduled an interview with",;
      target:"Alex Morgan",;
      timestamp:"Yesterday",;
      type:"interview";
    },;
    {;
      id:"act-4",;
      user:"Emily Davis",;
      action:"added comments to",;
      target:"Frontend Developer application",;
      timestamp:"2d ago",;
      type:"comment";
    }
  ],;
;
  const getBadgeForType = (type:string) => {;
    switch (type) {;
      case "job":return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Job</Badge>,;
  ],;
  const getBadgeForType = (type: string) => {;
    switch (type) {;
      case "job": return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Job</Badge>,;
      case "candidate":;
        return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Candidate</Badge>,;
      case "interview":;
        return <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">Interview</Badge>,;
    }
  },;
;
  return (;
      case "comment":;
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Comment</Badge>;
      default:;
        return <Badge variant="outline">Activity</Badge>;
    }
  };
  return (;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  ];

  const getBadgeForType = (type: string) => {;
    switch (type) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      case "job": return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Job</Badge>;
      case "candidate":;
        return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Candidate</Badge>;
      case "interview":;
        return <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">Interview</Badge>;

      case "comment":;
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Comment</Badge>,;
      default:;
        return <Badge variant="outline">Activity</Badge>;

    }
  }

  return (
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <Card>;
      <CardHeader>;
        <CardTitle>Recent Activity</CardTitle>;
        <CardDescription>Latest actions from your team</CardDescription>;
      </CardHeader>;
      <CardContent className="p-0">;
        <div className="divide-y divide-border">;
<<<<<<< HEAD
<<<<<<< HEAD
          {activities.map((activity) => (;
            <div key={activity.id} className="p-4 flex items-start gap-3">;
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">;
                {activity.user.charAt(0)}
                    <span className="font-medium">{activity.user}</span>{" "}
                    {activity.action}{" "}
                    <span className="font-medium">{activity.target}</span>;
                  </p>;
                  <div className="flex items-center gap-2 mt-1 sm:mt-0">;
                    {getBadgeForType(activity.type)}
                    <span className="text-xs text-muted-foreground">{activity.timestamp}</span>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {activities && activities.map((activity) => (;
            <div key={activity && activity.id} className="p-4 flex items-start gap-3">;
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">;
                {activity && activity.user.charAt(0)}
              </div>;
              <div className="flex-1">;
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">;
                  <p className="text-sm">;
                    <span className="font-medium">{activity && activity.user}</span>{" "}
                    {activity && activity.action}{" "}
                    <span className="font-medium">{activity && activity.target}</span>;
                  </p>;
                  <div className="flex items-center gap-2 mt-1 sm:mt-0">;
                    {getBadgeForType(activity && activity.type)}
                    <span className="text-xs text-muted-foreground">{activity && activity.timestamp}</span>;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </div>;
                </div>;
              </div>;
            </div>;
          ))}
<<<<<<< HEAD
<<<<<<< HEAD
        </div>;
        ;
        <div className="p-3 text-center border-t border-border">;
          <button className="text-sm text-blue-500 font-medium hover:text-blue-700">;
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm">
                    <span className="font-medium">{activity.user}</span>{" "}
                    {activity.action}{" "}
                    <span className="font-medium">{activity.target}</span>
                  </p>
                  <div className="flex items-center gap-2 mt-1 sm:mt-0">
                    {getBadgeForType(activity.type)}
                    <span className="text-xs text-muted-foreground">{activity.timestamp}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>;
        <div className="p-3 text-center border-t border-border">;
          <button className="text-sm text-blue-500 font-medium hover: text-blue-700">;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        </div>;

        <div className="p-3 text-center border-t border-border">;
          <button className="text-sm text-blue-500 font-medium hover: text-blue-700">;
=======
import React from './react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
export /**
 * RecentActivity - Function description
 */
function RecentActivity() {
  // Mock activity data;
  const activities = [;
    {
      id: "act - 1",
      user: "Michael Chen",
      action: "posted a new job",
      target: "Senior React Developer",
      timestamp: "1h ago",
      type: "job";
    }
    {
      id: "act - 2",
      user: "Sarah Wilson",
      action: "shortlisted",
      target: "5 candidates for UI / UX Designer",
      timestamp: "3h ago",
      type: "candidate";
    }
    {
      id: "act - 3",
      user: "David Johnson",
      action: "scheduled an interview with",
      target: "Alex Morgan",
      timestamp: "Yesterday",
      type: "interview";
    }
    {
      id: "act - 4",
      user: "Emily Davis",
      action: "added comments to",
      target: "Frontend Developer application",
      timestamp: "2d ago",
      type: "comment";
    }
  ];
;
  const getBadgeForType = (type: string) =>: any {
    switch (type) {
      case "job": return <Badge variant="outline" className="bg - blue - 100 text - blue - 800 border - blue - 200">Job</Badge>;
      case "candidate":;
        return <Badge variant="outline" className="bg - green - 100 text - green - 800 border - green - 200">Candidate</Badge>;
      case "interview":;
        return <Badge variant="outline" className="bg - purple - 100 text - purple - 800 border - purple - 200">Interview</Badge>;
      case "comment":;
        return <Badge variant="outline" className="bg - amber - 100 text - amber - 800 border - amber - 200">Comment</Badge>,
      default:;
        return <Badge variant="outline">Activity</Badge>;
    }
  }
;
  return (
    <Card>;
      <CardHeader>;
        <CardTitle > Recent Activity</CardTitle>;
        <CardDescription > Latest actions from your team</CardDescription>;
      </CardHeader>;
      <CardContent className="p - 0">;
        <div className="divide - y divide - border">;
          {activities.map ((activity) => (
            <div key={activity.id} className="p - 4 flex items - start gap - 3">;
              <div className="w - 8 h - 8 rounded - full bg - muted flex items - center justify - center">;
                {activity.user.char_at (0)}
              </div>;
              <div className="flex - 1">;
                <div className="flex flex - col sm:flex - row sm:items - center sm:justify - between">;
                  <p className="text - sm">;
                    <span className="font - medium">{activity.user}</span>{" "}
                    {activity.action}{" "}
                    <span className="font - medium">{activity.target}</span>;
                  </p>;
                  <div className="flex items - center gap - 2 mt - 1 sm:mt - 0">;
                    {getBadgeForType (activity.type)}
                    <span className="text - xs text - muted - foreground">{activity.timestamp}</span>;
                  </div>;
                </div>;
              </div>;
            </div>))}
        </div>;
        <div className="p - 3 text - center border - t border - border">;
          <button className="text - sm text - blue - 500 font - medium hover: text - blue - 700">;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            View All Activity;
          </button>;
        </div>;
      </CardContent>;




<<<<<<< HEAD
<<<<<<< HEAD
}
    </Card>);
    </Card>;
  ); export function RecentActivity () {
  //Mock activity data const activities = [ {
  id: "act-1";
user: "Michael Chen";
action: "posted a new job";
target: "Senior React Developer";
timestamp: "1h ago";
type: "job" 
};
{
  id: "act-2";
user: "Sarah Wilson";
action: "shortlisted";
target: "5 candidates for UI/UX Designer";
timestamp: "3h ago";
type: "candidate" 
};
{
  id: "act-3";
user: "David Johnson";
action: "scheduled an interview with";
target: "Alex Morgan";
timestamp: "Yesterday";
type: "interview" 
};
{
  id: "act-4";
user: "Emily Davis";
action: "added comments to";
target: "Frontend Developer application";
timestamp: "2d ago";
type: "comment" 
}];
const getBadgeForType = (type: string) => {
  switch (type) {
  case "candidate": return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Candidate</Badge>;
case "interview": return <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">Interview</Badge>;
case "comment": return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Comment</Badge>;
default: 
}
};
}</div> View All Activity </button> </div> </CardContent> </Card>) 
}
    </Card>;
  );
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    </Card>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
