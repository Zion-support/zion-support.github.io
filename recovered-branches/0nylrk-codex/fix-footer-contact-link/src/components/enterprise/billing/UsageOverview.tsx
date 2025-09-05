
import React from "react";

export function UsageOverview() {_// Mock usage data
  const _usage = {
    jobPosts: {
      used: 32, _total: 100, _percentage: 32},
    interviews: {_used: 45, _total: 150, _percentage: 30},
    messaging: {_used: 1250, _total: 5000, _percentage: 25},
    storage: {_used: 2.4, _total: 10, _percentage: 24}
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Usage Overview</CardTitle>
        <CardDescription>Track your team's resource usage across the platform</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="current">
          <TabsList className="mb-4">
            <TabsTrigger value="current">Current Period</TabsTrigger>
            <TabsTrigger value="historical">Historical</TabsTrigger>
          </TabsList>
          
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
              </div>
            </div>
            
            <div className="pt-4 text-sm text-muted-foreground">
              <p>Current billing period: May 1, 2025 - May 31, 2025</p>
              <p className="mt-1">Usage resets at the beginning of each billing period.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="historical">
            <div className="py-10 text-center text-muted-foreground">
              Historical usage data will be available after your first full billing cycle.
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
