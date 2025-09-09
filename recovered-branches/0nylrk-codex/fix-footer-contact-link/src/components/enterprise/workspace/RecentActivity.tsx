import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",      id: "act-1",
      user: "Michael Chen",
      action: "posted a new job",
      target: "Senior React Developer",
      timestamp: "1h ago",      type: "job"
    }
    },

    {
      id: "act-4"
      user: "Emily Davis"
      action: "added comments to"
      target: "Frontend Developer application"
      timestamp: "2d ago"
      type: "comment"

    }
}

  const getBadgeForType = (type: string) => {
    switch (type) {
      }
      case "job": return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Job</Badge>,"
      case "candidate":"
return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Candidate</Badge>,;"
      case "interview":"
return <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">Interview</Badge>,;"
      case "comment":"
return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Comment</Badge>;"
      "default":
return <Badge variant="outline">Activity</Badge>;"
    }

  },

  }
  }
  },

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions from your team</CardDescription>
  );
};