
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Progress } from "@/components/ui/progress",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",import React from "react";

export function UsageOverview() {_// Mock usage data
  const _usage = {
    jobPosts: {
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
                <Progress value={usage.storage.percentage} className=&quot;h-2&quot; />              </div>
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
