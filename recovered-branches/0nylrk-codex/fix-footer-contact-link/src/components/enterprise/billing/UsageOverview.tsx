
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Progress } from "@/components/ui/progress",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
=======
import React from &quot;react&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Progress } from &quot;@/components/ui/progress&quot;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import React from "react";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function UsageOverview() {_// Mock usage data
  const _usage = {
    jobPosts: {
<<<<<<< HEAD
      used: 32,
      total: 100,
      percentage: 32
    },
    interviews: {
      used: 45,
      total: 150,
      percentage: 30
    },
    messaging: {
      used: 1250,
      total: 5000,
      percentage: 25
    },
    storage: {
      used: 2.4,
      total: 10,
      percentage: 24
    }
  },
=======
      used: 32, _total: 100, _percentage: 32},
    interviews: {_used: 45, _total: 150, _percentage: 30},
    messaging: {_used: 1250, _total: 5000, _percentage: 25},
    storage: {_used: 2.4, _total: 10, _percentage: 24}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <Card>
      <CardHeader>
        <CardTitle>Usage Overview</CardTitle>
        <CardDescription>Track your team's resource usage across the platform</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue=&quot;current&quot;>
          <TabsList className=&quot;mb-4&quot;>
            <TabsTrigger value=&quot;current&quot;>Current Period</TabsTrigger>
            <TabsTrigger value=&quot;historical&quot;>Historical</TabsTrigger>
          </TabsList>
          
<<<<<<< HEAD
          <TabsContent value=&quot;current&quot; className=&quot;space-y-6&quot;>
            <div className=&quot;space-y-4&quot;>
              <div className=&quot;space-y-2&quot;>
                <div className=&quot;flex items-center justify-between&quot;>
                  <p className=&quot;text-sm font-medium&quot;>Job Posts</p>
                  <p className=&quot;text-sm text-muted-foreground&quot;>
                    {usage.jobPosts.used} / {usage.jobPosts.total}
                  </p>
                </div>
                <Progress value={usage.jobPosts.percentage} className=&quot;h-2&quot; />
              </div>
              
              <div className=&quot;space-y-2&quot;>
                <div className=&quot;flex items-center justify-between&quot;>
                  <p className=&quot;text-sm font-medium&quot;>Interviews Conducted</p>
                  <p className=&quot;text-sm text-muted-foreground&quot;>
                    {usage.interviews.used} / {usage.interviews.total}
                  </p>
                </div>
                <Progress value={usage.interviews.percentage} className=&quot;h-2&quot; />
              </div>
              
              <div className=&quot;space-y-2&quot;>
                <div className=&quot;flex items-center justify-between&quot;>
                  <p className=&quot;text-sm font-medium&quot;>Messages Sent</p>
                  <p className=&quot;text-sm text-muted-foreground&quot;>
                    {usage.messaging.used} / {usage.messaging.total}
                  </p>
                </div>
                <Progress value={usage.messaging.percentage} className=&quot;h-2&quot; />
              </div>
              
              <div className=&quot;space-y-2&quot;>
                <div className=&quot;flex items-center justify-between&quot;>
                  <p className=&quot;text-sm font-medium&quot;>Storage (GB)</p>
                  <p className=&quot;text-sm text-muted-foreground&quot;>
                    {usage.storage.used} / {usage.storage.total} GB
                  </p>
                </div>
                <Progress value={usage.storage.percentage} className=&quot;h-2&quot; />
=======
          <TabsContent value="current" className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Job Posts</p>
                  <p className="text-sm text-muted-foreground">
                    {_usage.jobPosts.used} / {_usage.jobPosts.total}
                  </p>
                </div>
                <Progress value={_usage.jobPosts.percentage} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Interviews Conducted</p>
                  <p className="text-sm text-muted-foreground">
                    {_usage.interviews.used} / {_usage.interviews.total}
                  </p>
                </div>
                <Progress value={_usage.interviews.percentage} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Messages Sent</p>
                  <p className="text-sm text-muted-foreground">
                    {_usage.messaging.used} / {_usage.messaging.total}
                  </p>
                </div>
                <Progress value={_usage.messaging.percentage} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Storage (GB)</p>
                  <p className="text-sm text-muted-foreground">
                    {_usage.storage.used} / {_usage.storage.total} GB
                  </p>
                </div>
                <Progress value={_usage.storage.percentage} className="h-2" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            </div>
            
            <div className=&quot;pt-4 text-sm text-muted-foreground&quot;>
              <p>Current billing period: May 1, 2025 - May 31, 2025</p>
              <p className=&quot;mt-1&quot;>Usage resets at the beginning of each billing period.</p>
            </div>
          </TabsContent>
          
          <TabsContent value=&quot;historical&quot;>
            <div className=&quot;py-10 text-center text-muted-foreground&quot;>
              Historical usage data will be available after your first full billing cycle.
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
