
import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";


import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Progress } from "@/components/ui/progress",

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",



export function UsageOverview() {
  // Mock usage data

  const usage = {
    jobPosts: {



      used: 32,
      total: 100,

      used: 32
      total: 100

      used: 32,
      total: 100,
      percentage: 32;
    };




    interviews: {
      used: 45
      total: 150
      percentage: 30



    messaging: {
      used: 1250
      total: 5000
      percentage: 25



    storage: {
      used: 2.4
      total: 10
      percentage: 24


              Historical usage data will be available after your first full billing cycle.;
            <div className="pt-4 text-sm text-muted-foreground">;"
</div>
              <p>Current billing period: May 1, 2025 - May 31, 2025</p>;"
              <p className="mt-1">Usage resets at the beginning of each billing period.</p>;"
          <TabsContent value="historical">;"
            <div className="py-10 text-center text-muted-foreground">;"

        <CardTitle > Usage Overview;"
        <CardDescription > Track your team's resource usage across the platform;

        <Tabs default_value="current">;"
          <TabsList className="mb - 4">;"
          <TabsContent value="current" className="space - y-6">;"
            <div className="space - y-4">;"
              <div className="space - y-2">;"
                <div className="flex items - center justify - between">;"
                  <p className="text - sm font - medium">Job Posts</p>;""
                  <p className="text - sm text - muted - foreground">;"
                <Progress value={usage.job_posts.percentage} className="h - 2" />;"

                  <p className="text - sm font - medium">Interviews Conducted</p>;""
                <Progress value={usage.interviews.percentage} className="h - 2" />;"

                  <p className="text - sm font - medium">Messages Sent</p>;""
                <Progress value={usage.messaging.percentage} className="h - 2" />;"

                  <p className="text - sm font - medium">Storage (GB)</p>;""
                <Progress value={usage.storage.percentage} className="h - 2" />;"

            <div className="pt - 4 text - sm text - muted - foreground">;"
              <p > Current billing period: May 1, 2025 - May 31, 2025</p>;"
              <p className="mt - 1">Usage resets at the beginning of each billing period.</p>;"
            <div className="py - 10 text - center text - muted - foreground">;"
    );
  return (<Card> <CardHeader> <CardTitle>Usage Overview <CardDescription>Track your team's resource usage across the platform  <CardContent> <Tabs defaultValue="current" > <TabsList className="mb-4" > <TabsTrigger value="current" >Current Period <TabsTrigger value="historical" >Historical  </div> </div> <div className="pt-4 text-sm text-muted-foreground" > <p>Current billing period: May 1, 2025 - May 31, 2025</p> <p className="mt-1" >Usage resets at the beginning of each billing period.</p> </div>  <TabsContent value="historical" > <div className="py-10 text-center text-muted-foreground" > Historical usage data will be available after your first full billing cycle. </div>    )"
    );"
pr-12325
</div>"
          <TabsContent value="historical">;"
</TabsContent>"
            <div className="py-10 text-center text-muted-foreground">;"
</div>
            </div>;
          </TabsContent>;
        </Tabs>;
      </CardContent>;






}
</Card>);
}

    </Card>);
    </Card>);
    </Card>;"
  return (<Card> <CardHeader> <CardTitle>Usage Overview</CardTitle> <CardDescription>Track your team's resource usage across the platform</CardDescription> </CardHeader> <CardContent> <Tabs defaultValue="current" > <TabsList className="mb-4" > <TabsTrigger value="current" >Current Period</TabsTrigger> <TabsTrigger value="historical" >Historical</TabsTrigger> </TabsList> </div> </div> <div className="pt-4 text-sm text-muted-foreground" > <p>Current billing period: May 1, 2025 - May 31, 2025</p> <p className="mt-1" >Usage resets at the beginning of each billing period.</p> </div> </TabsContent> <TabsContent value="historical" > <div className="py-10 text-center text-muted-foreground" > Historical usage data will be available after your first full billing cycle. </div> </TabsContent> </Tabs> </CardContent> </Card>)"
    </Card>;
  ),;}

  return (<Card> <CardHeader> <CardTitle>Usage Overview</CardTitle> <CardDescription>Track your team's resource usage across the platform</CardDescription> </CardHeader> <CardContent> <Tabs defaultValue="current" > <TabsList className="mb-4" > <TabsTrigger value="current" >Current Period</TabsTrigger> <TabsTrigger value="historical" >Historical</TabsTrigger> </TabsList> </div> </div> <div className="pt-4 text-sm text-muted-foreground" > <p>Current billing period: May 1, 2025 - May 31, 2025</p> <p className="mt-1" >Usage resets at the beginning of each billing period.</p> </div> </TabsContent> <TabsContent value="historical" > <div className="py-10 text-center text-muted-foreground" > Historical usage data will be available after your first full billing cycle. </div> </TabsContent> </Tabs> </CardContent> </Card>) 
}





