<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
export function RecentActivity() {
  // Mock activity data
  const activities = $2;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";

import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export function RecentActivity() {
  // Mock activity data

  const activities = [
    {

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      id: "act-1"
      user: "Michael Chen"
      action: "posted a new job"
      target: "Senior React Developer"
      timestamp: "1h ago"
<<<<<<< HEAD

      id: "act-1",
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      id: "act-1",
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      user: "Michael Chen",
      action: "posted a new job",
      target: "Senior React Developer",
      timestamp: "1h ago",
<<<<<<< HEAD

      type: "job";
    };
      type: "job"
    }
    },

      type: "job"
    }
    },

=======
<<<<<<< HEAD
      type: "job"
    }
    {
      id: "act-2"
      user: "Sarah Wilson"
      action: "shortlisted"
      target: "5 candidates for UI/UX Designer"
      timestamp: "3h ago"
      type: "candidate"
    }
    {
      id: "act-3"
      user: "David Johnson"
      action: "scheduled an interview with"
      target: "Alex Morgan"
      timestamp: "Yesterday"
      type: "interview"
    }
=======
<<<<<<< HEAD
      type: "job";
    };
      type: "job"
    }
    },
=======

<<<<<<< HEAD
      type: "job";
    };
      type: "job"
    }
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    {
      id: "act-2"
      user: "Sarah Wilson"
      action: "shortlisted"
      target: "5 candidates for UI/UX Designer"
      timestamp: "3h ago"
      type: "candidate"

<<<<<<< HEAD
    },


    }
    },
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    },

      type: "job"
    }
    },

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    {
      id: "act-3"
      user: "David Johnson"
      action: "scheduled an interview with"
      target: "Alex Morgan"
      timestamp: "Yesterday"
      type: "interview"

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
    },


    }
    },
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    {
      id: "act-4"
      user: "Emily Davis"
      action: "added comments to"
      target: "Frontend Developer application"
      timestamp: "2d ago"
      type: "comment"
<<<<<<< HEAD
    }
=======
<<<<<<< HEAD
    }
  ],

  const getBadgeForType = $2;
      case "candidate":
        return <Badge variant = $2;
      case "interview":
        return <Badge variant = $2;
      case "comment":
        return <Badge variant = $2;
      default:
        return <Badge variant = $2;
=======
    }

<<<<<<< HEAD
  ];
  ],

=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  ];
  ],

<<<<<<< HEAD
=======
=======
import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
=======

  ],


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const getBadgeForType = (type: string) => {
    switch (type) {
      case "job": return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Job</Badge>,
      case "candidate":
        return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Candidate</Badge>,
      case "interview":
        return <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">Interview</Badge>,
      case "comment":

        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Comment</Badge>
      default:"
        return <Badge variant="outline">Activity</Badge>
    }

<<<<<<< HEAD
  },

=======
  },

<<<<<<< HEAD
=======
<<<<<<< HEAD
  }
  },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions from your team</CardDescription>
<<<<<<< HEAD
      </CardHeader>"
      <CardContent className="p-0">"
        <div className="divide-y divide-border">
          {activities.map((activity) => ("
            <div key={activity.id} className="p-4 flex items-start gap-3">"
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                {activity.user.charAt(0)}
=======
<<<<<<< HEAD
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
=======
      </CardHeader>"
      <CardContent className="p-0">"
        <div className="divide-y divide-border">
          {activities.map((activity) => ("
            <div key={activity.id} className="p-4 flex items-start gap-3">"
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                {activity.user.charAt(0)}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  </div>
                </div>
              </div>
            </div>
          ))}
<<<<<<< HEAD
=======
<<<<<<< HEAD
        </div>
        <div className="p-3 text-center border-t border-border">
          <button className="text-sm text-blue-500 font-medium hover: text-blue-700">
            View All Activity
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        </div>"
        <div className="p-3 text-center border-t border-border">"
          <button className="text-sm text-blue-500 font-medium hover: text-blue-700">
            View All Activity;
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          </button>
        </div>
      </CardContent>
    </Card>
  )
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
}
;
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from "react";"
import { Badge } from "@/components/ui/badge",;"
=======

}

import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;

import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
;
}

<<<<<<< HEAD
=======
=======

<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;

<<<<<<< HEAD
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export function RecentActivity() {;
  // Mock activity data;
  const activities = [;
>>>>>>> origin/chore/fix-lint-and-merge
    {;
      id: "act-1",;
      user: "Michael Chen",;
      action: "posted a new job",;
      target: "Senior React Developer",;
      timestamp: "1h ago",;
      type: "job";
<<<<<<< HEAD
    };
},;
=======
<<<<<<< HEAD
    },;
=======
    };
<<<<<<< HEAD
},;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    {;
      id: "act-2",;
      user: "Sarah Wilson",;
      action: "shortlisted",;
      target: "5 candidates for UI/UX Designer",;
      timestamp: "3h ago",;
      type: "candidate";
<<<<<<< HEAD
    };
},;
=======
<<<<<<< HEAD
    },;
=======
    };
<<<<<<< HEAD
},;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    {;
      type: "candidate"
};    {;
      id: "act-3",;
      user: "David Johnson",;
      action: "scheduled an interview with",;
      target: "Alex Morgan",;
      timestamp: "Yesterday",;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
      type: "interview";
<<<<<<< HEAD
    },;
=======
    };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    {;
      id: "act-4",;
      user: "Emily Davis",;
      action: "added comments to",;
      target: "Frontend Developer application",;
      timestamp: "2d ago",;
      type: "comment";
    }
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
  ];
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      case "job": return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Job</Badge>;
      case "candidate":;

        return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Candidate</Badge>;
      case "interview":;

        return <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">Interview</Badge>;
    }
  }

<<<<<<< HEAD
            <div key={activity && activity.id} className="p-4 flex items-start gap-3">;
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">;

=======
<<<<<<< HEAD
            <div key={activity && activity.id} className="p-4 flex items-start gap-3">;
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">;

=======
  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <Card>;
      <CardHeader>;
        <CardTitle>Recent Activity</CardTitle>;
        <CardDescription>Latest actions from your team</CardDescription>;
      </CardHeader>;
      <CardContent className="p-0">;
        <div className="divide-y divide-border">;
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  </div>;
                </div>;
              </div>;
            </div>;
          ))}
<<<<<<< HEAD

            View All Activity;

}
</Card>);
}
}
;
    </Card>);

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
<<<<<<< HEAD
  }
  switch (type) {
  }
=======
const getBadgeForType = (type: string) => {}
  switch (type) {"
>>>>>>> origin/chore/fix-lint-and-merge
  case "candidate": return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Candidate</Badge>;"
case "interview": return <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">Interview</Badge>;"
=======
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

<<<<<<< HEAD
=======
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            View All Activity;

<<<<<<< HEAD
=======



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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

}
;
    </Card>);
}
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
</Card>);
}
}
;
    </Card>);

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
<<<<<<< HEAD
  }
  switch (type) {
  }
=======
const getBadgeForType = (type: string) => {}
  switch (type) {"
>>>>>>> origin/chore/fix-lint-and-merge
  case "candidate": return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Candidate</Badge>;"
case "interview": return <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">Interview</Badge>;"
case "comment": return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Comment</Badge>;
default: 
}
<<<<<<< HEAD
};
}</div> View All Activity </button> </div> </CardContent> </Card>) 
}
    </Card>;
  );
}
;

}
;
    </Card>);
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
