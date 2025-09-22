<<<<<<< HEAD

<<<<<<< HEAD
import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
<<<<<<< HEAD
import { Badge } from "@/components/ui/badge",
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { Badge } from "@/components/ui/badge",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export function RecentActivity() {
  // Mock activity data

  const activities = [
    {
id: "act-1"
      user: "Michael Chen"
      action: "posted a new job"
      target: "Senior React Developer"
      timestamp: "1h ago"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      id: "act-1",
      user: "Michael Chen",
      action: "posted a new job",
      target: "Senior React Developer",
      timestamp: "1h ago",

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      type: "job";
    };
      type: "job"
    }
    },
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
import React from "react",";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";"
import { Badge } from "@/components/ui/badge";"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card","
import { Badge } from "@/components/ui/badge",

export function RecentActivity() {};
  // Mock activity data;
  const activities = []
    {}
"
      id: "act-1","
      user: "Michael Chen","
      action: "posted a new job","
      target: "Senior React Developer","
      timestamp: "1h ago",

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      type: "job"
    }
    },

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    {
      id: "act-2"
      user: "Sarah Wilson"
      action: "shortlisted"
      target: "5 candidates for UI/UX Designer"
      timestamp: "3h ago"
      type: "candidate"

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    {
      id: "act-3"
      user: "David Johnson"
      action: "scheduled an interview with"
      target: "Alex Morgan"
      timestamp: "Yesterday"
      type: "interview"

}
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { Badge } from "@/components/ui/badge",      id: "act-1",
=======

id: "act-1"
      user: "Michael Chen"
      action: "posted a new job"
      target: "Senior React Developer"
      timestamp: "1h ago"
      id: "act-1",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      user: "Michael Chen",
      action: "posted a new job",
      target: "Senior React Developer",
      timestamp: "1h ago",

type: "job";
    };
      type: "job"
    }
    },
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

    },

},

    }
    },
    {
      id: "act-3"
      user: "David Johnson"
      action: "scheduled an interview with"
      target: "Alex Morgan"
      timestamp: "Yesterday"
      type: "interview"

    },

},

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const getBadgeForType = (type: string) => {
    switch (type) {
      case "job": return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Job</Badge>,
      case "candidate":
        return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Candidate</Badge>,
      case "interview":
        return <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">Interview</Badge>,
      case "comment":
=======
    {"
      id: "act-4""
      user: "Emily Davis""
      action: "added comments to""
      target: "Frontend Developer application""
      timestamp: "2d ago""
      type: "comment"
    }

  const getBadgeForType = (type: string) => {}
    switch (type) {"
      case "job": return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Job</Badge>,"
      case "candidate":"
        return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Candidate</Badge>,"
      case "interview":"
        return <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">Interview</Badge>,"
      case "comment":"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Comment</Badge>
      default:"
        return <Badge variant="outline">Activity</Badge>
    }
<<<<<<< HEAD

  },

}
  },
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

  },

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions from your team</CardDescription>
      </CardHeader>"
      <CardContent className="p-0">"
        <div className="divide-y divide-border">
          {activities.map((activity) => ("
            <div key={activity.id} className="p-4 flex items-start gap-3">"
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                {activity.user.charAt(0)}
              </div>"
              <div className="flex-1">"
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">"
                  <p className="text-sm">"
                    <span className="font-medium">{activity.user}</span>{" "}"
                    {activity.action}{" "}"
                    <span className="font-medium">{activity.target}</span>
                  </p>"
                  <div className="flex items-center gap-2 mt-1 sm:mt-0">
                    {getBadgeForType(activity.type)}"
                    <span className="text-xs text-muted-foreground">{activity.timestamp}</span>

import React from "react";""
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";""
import {Badge} from "@/components/ui/badge";""
import React from "react",""
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";""
import { Badge } from "@/components/ui/badge";""
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",""
import { Badge } from "@/components/ui/badge","
export function RecentActivity() {
  // Mock activity data;
  const activities = [
    {

"
      id: "act-1",""
      user: "Michael Chen",""
      action: "posted a new job",""
      target: "Senior React Developer",""
      timestamp: "1h ago",""
      type: "job";"
    };"
      type: "job""
    }
    },"
      type: "job""
    }
    },

    {"
      id: "act-2"","
  user: "Sarah Wilson"""
      action: "shortlisted"","
  target: "5 candidates for UI/UX Designer"""
      timestamp: "3h ago"","
  type: "candidate""
    },

    {"
      id: "act-3"","
  user: "David Johnson"""
      action: "scheduled an interview with"","
  target: "Alex Morgan"""
      timestamp: "Yesterday"","
  type: "interview""
    },

    {"
      id: "act-4"","
  user: "Emily Davis"""
      action: "added comments to"","
  target: "Frontend Developer application"""
      timestamp: "2d ago"","
  type: "comment""
    }
"
import React from "react";""
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";""
import {Badge} from "@/components/ui/badge";"
  const getBadgeForType = (type: string) => {
    switch (type) {"
      case "job": return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Job</Badge>,""
        return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Candidate</Badge>,""
        return <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">Interview</Badge>,""
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Comment</Badge>""
        return <Badge variant="outline">Activity</Badge>"
    <Card>
</Card>
      <CardHeader>
</CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions from your team</CardDescription>
      </CardHeader>"
      <CardContent className="p-0">"
</CardContent>"
        <div className="divide-y divide-border">"
</div>"
            <div key={activity.id} className="p-4 flex items-start gap-3">"
</div>"
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">"
</div>
              </div>"
              <div className="flex-1">"
</div>"
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">"
</div>"
                  <p className="text-sm">"
</p>"
                    <span className="font-medium">{activity.user}</span>{" "}""
                    <span className="font-medium">{activity.target}</span>"
                  </p>"
                  <div className="flex items-center gap-2 mt-1 sm:mt-0">"
</div>"
                    <span className="text-xs text-muted-foreground">{activity.timestamp}</span>"

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>"
        <div className="p-3 text-center border-t border-border">"
          <button className="text-sm text-blue-500 font-medium hover: text-blue-700">
            View All Activity;
          </button>
        </div>
      </CardContent>
    </Card>
  )
<<<<<<< HEAD
}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;

import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
;
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
    };
},;
    {;
      id: "act-2",;
      user: "Sarah Wilson",;
      action: "shortlisted",;
      target: "5 candidates for UI/UX Designer",;
      timestamp: "3h ago",;
      type: "candidate";
    };
},;
    {;
      type: "candidate"
};    {;
      id: "act-3",;
      user: "David Johnson",;
      action: "scheduled an interview with",;
      target: "Alex Morgan",;
      timestamp: "Yesterday",;
<<<<<<< HEAD
      type: "interview";
<<<<<<< HEAD
<<<<<<< HEAD
    };
=======
      type: "interview";
    };
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    {;
      id: "act-4",;
      user: "Emily Davis",;
      action: "added comments to",;
      target: "Frontend Developer application",;
      timestamp: "2d ago",;
      type: "comment";
    }
<<<<<<< HEAD
  ];

  const getBadgeForType = (type: string) => {;
    switch (type) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      case "job": return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Job</Badge>;
      case "candidate":;
=======
      case "job": return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Job</Badge>;
      case "candidate":;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
      type: "interview";      case "candidate":;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Candidate</Badge>;
      case "interview":;
=======
"
import React from "react",;"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;"
import { Badge } from "@/components/ui/badge",;

export function RecentActivity() { return null; }
    }
"
      case "job": return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Job</Badge>;"
      case "candidate":;"
        return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Candidate</Badge>;"
      case "interview":;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        return <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">Interview</Badge>;
    }
  }

return (          {activities && activities.map((activity) => (;
            <div key={activity && activity.id} className="p-4 flex items-start gap-3">;
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">;
                  </div>;
                </div>;
              </div>;
            </div>;
          ))}

<div className="p-3 text-center border-t border-border">;
<<<<<<< HEAD
<<<<<<< HEAD
          <button className="text-sm text-blue-500 font-medium hover: text-blue-700">;
<<<<<<< HEAD
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
}
;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

            View All Activity;
=======
          <button className="text-sm text-blue-500 font-medium hover: text-blue-700">;            View All Activity;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          <button className="text-sm text-blue-500 font-medium hover: text-blue-700">;
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
            View All Activity;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          </button>;
        </div>;
      </CardContent>;

<<<<<<< HEAD
}
</Card>);
}
}
;
    </Card>);
}}
=======
}}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    </Card>);
    </Card>;
  ); export function RecentActivity () {}
  //Mock activity data const activities = [ {";
  id: "act-1";"
user: "Michael Chen";"
action: "posted a new job";"
target: "Senior React Developer";"
timestamp: "1h ago";"
type: "job" 
};
{"
  id: "act-2";"
user: "Sarah Wilson";"
action: "shortlisted";"
target: "5 candidates for UI/UX Designer";"
timestamp: "3h ago";"
type: "candidate" 
};
{"
  id: "act-3";"
user: "David Johnson";"
action: "scheduled an interview with";"
target: "Alex Morgan";"
timestamp: "Yesterday";"
type: "interview" 
};
{"
  id: "act-4";"
user: "Emily Davis";"
action: "added comments to";"
target: "Frontend Developer application";"
timestamp: "2d ago";"
type: "comment" 
}];
const getBadgeForType = (type: string) => {}
  switch (type) {"
  case "candidate": return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Candidate</Badge>;"
case "interview": return <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">Interview</Badge>;"
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
;
    </Card>);
}
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

import React from "react";""
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";""
import {Badge} from "@/components/ui/badge";""
import React from "react",""
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";""
import { Badge } from "@/components/ui/badge";""
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",""
import { Badge } from "@/components/ui/badge","
export function RecentActivity() {
  // Mock activity data;
  const activities = [
    {

"
      id: "act-1",""
      user: "Michael Chen",""
      action: "posted a new job",""
      target: "Senior React Developer",""
      timestamp: "1h ago",""
      type: "job";"
    };"
      type: "job""
    }
    },"
    },

    {"
      id: "act-2"","
  user: "Sarah Wilson"""
      action: "shortlisted"","
  target: "5 candidates for UI/UX Designer"""
      timestamp: "3h ago"","
  type: "candidate""

      id: "act-3"","
  user: "David Johnson"""
      action: "scheduled an interview with"","
  target: "Alex Morgan"""
      timestamp: "Yesterday"","
  type: "interview""

      id: "act-4"","
  user: "Emily Davis"""
      action: "added comments to"","
  target: "Frontend Developer application"""
      timestamp: "2d ago"","
  type: "comment""
import {Badge} from "@/components/ui/badge";"
  const getBadgeForType = (type: string) => {
    switch (type) {"
      case "job": return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Job,""
        return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Candidate,""
        return <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">Interview,""
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Comment""
        return <Badge variant="outline">Activity"
    <Card>

      <CardHeader>

        <CardTitle>Recent Activity
        <CardDescription>Latest actions from your team
      <CardContent className="p-0">"
        <div className="divide-y divide-border">"

        </div>;"
        <div className="p-3 text-center border-t border-border">;"
</div>"
            <div key={activity.id} className="p-4 flex items-start gap-3">"
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">"
</div>
              <div className="flex-1">"
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">"
                  <p className="text-sm">"
</p>"
                    <span className="font-medium">{activity.user}</span>{" "}""
                    <span className="font-medium">{activity.target}</span>"
                  <div className="flex items-center gap-2 mt-1 sm:mt-0">"
                    <span className="text-xs text-muted-foreground">{activity.timestamp}</span>"
        <div className="p-3 text-center border-t border-border">"
          <button className="text-sm text-blue-500 font-medium hover: text-blue-700">"
</button>
      case "job": return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Job;""
        return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Candidate;""
        return <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">Interview;"
    <Card>;

      <CardHeader>;

        <CardTitle>Recent Activity;
        <CardDescription>Latest actions from your team;
      ;"
      <CardContent className="p-0">;"
        <div className="divide-y divide-border">;"
            <div key={activity && activity.id} className="p-4 flex items-start gap-3">;"
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">;"
              </div>;"
              <div className="flex-1">;"
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">;"
                  <p className="text-sm">;"
                    <span className="font-medium">{activity && activity.user}</span>{" "}""
                    <span className="font-medium">{activity && activity.target}</span>;"
                  </p>;"
                  <div className="flex items-center gap-2 mt-1 sm:mt-0">;"
                    <span className="text-xs text-muted-foreground">{activity && activity.timestamp}</span>;""
                  </div>;
        <div className="p-3 text-center border-t border-border">;"
          <button className="text-sm text-blue-500 font-medium hover: text-blue-700">;"
          </button>;
      ;
    );
  case "candidate": return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Candidate;""
case "interview": return <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">Interview;""
case "comment": return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Comment;"
}</div> View All Activity </button> </div>  ) 
    );]"
pr-12325
        </div>;
      </CardContent>;
    </Card>);
    </Card>);
    </Card>;"
  case "candidate": return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Candidate</Badge>;""
case "interview": return <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">Interview</Badge>;""
case "comment": return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Comment</Badge>;"

}</div> View All Activity </button> </div> </CardContent> </Card>) 
    </Card>;

    </Card>);]"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
