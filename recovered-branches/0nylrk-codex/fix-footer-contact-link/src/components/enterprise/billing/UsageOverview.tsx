

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
      used: 32,
      total: 100,
      percentage: 32
};
      percentage: 32
    }
    },import React from "react";;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Progress } from "@/components/ui/progress",;

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
export function UsageOverview() { return null; }
    },;
    interviews: {;
      used: 45,;
      total: 150,;
      percentage: 30;
    },;
    messaging: {;
      used: 1250,;
      total: 5000,;
      percentage: 25;
    },;
    storage: {;
      used: 2.4,;
      total: 10;
      percentage: 24;
    }
  };
  return (;
    <Card>;
      <CardHeader>;
        <CardTitle>Usage Overview</CardTitle>;
        <CardDescription>Track your team's resource usage across the platform</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <Tabs defaultValue="current">;
          <TabsList className="mb-4">;
            <TabsTrigger value="current">Current Period</TabsTrigger>;
            <TabsTrigger value="historical">Historical</TabsTrigger>;
          </TabsList>;          <TabsContent value="current" className="space-y-6">;
            <div className="space-y-4">;
              <div className="space-y-2">;
                <div className="flex items-center justify-between">;
                  <p className="text-sm font-medium">Job Posts</p>;
                  <p className="text-sm text-muted-foreground">;
                    {usage && usage.jobPosts.used} / {usage && usage.jobPosts.total}
                  </p>;
                </div>;
                <Progress value={usage && usage.jobPosts.percentage} className="h-2" />;
              </div>;              <div className="space-y-2">;
                <div className="flex items-center justify-between">;
                  <p className="text-sm font-medium">Messages Sent</p>;
                  <p className="text-sm text-muted-foreground">;
                    {usage && usage.messaging.used} / {usage && usage.messaging.total}
                  </p>;
                </div>;
                <Progress value={usage && usage.messaging.percentage} className="h-2" />;
              </div>;            <div className="pt-4 text-sm text-muted-foreground">;
              <p>Current billing period: May 1, 2025 - May 31, 2025</p>;
              <p className="mt-1">Usage resets at the beginning of each billing period.</p>;
            </div>;
          </TabsContent>;

          <TabsContent value="historical">;
            <div className="py-10 text-center text-muted-foreground">;    }
  }

  return (
