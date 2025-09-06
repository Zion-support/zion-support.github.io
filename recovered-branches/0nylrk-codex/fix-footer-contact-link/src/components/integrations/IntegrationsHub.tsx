<<<<<<< HEAD


import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IntegrationCards } from "./IntegrationCards";
import { ZapierIntegration } from "./ZapierIntegration";
import { Badge } from "@/components/ui/badge";
<<<<<<< HEAD
<<<<<<< HEAD
=======

export function IntegrationsHub() {
  const [activeTab, setActiveTab] = useState("marketplace");


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import { WebhookManager } from "./WebhookManager";
import { IntegrationsSyncLog } from "./IntegrationsSyncLog";

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

export function IntegrationsHub() {
  const [activeTab, setActiveTab] = useState("marketplace");


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Integrations Hub</h1>
          <p className="text-muted-foreground mt-1">
            Connect your platform with the tools and services you use every day
          </p>
        </div>
export function IntegrationsHub() {
  const [activeTab, setActiveTab] = useState("marketplace");
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Integrations Hub</h1>
          <p className="text-muted-foreground mt-1">
            Connect your platform with the tools and services you use every day
          </p>
        </div>

import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { IntegrationCards } from "./IntegrationCards",
import { ZapierIntegration } from "./ZapierIntegration",
import { Badge } from "@/components/ui/badge",
import { WebhookManager } from "./WebhookManager",
import { IntegrationsSyncLog } from "./IntegrationsSyncLog",
export function IntegrationsHub() {
  const [activeTab, setActiveTab] = useState("marketplace"),
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <div className="flex gap-2">
          <Button variant="outline">View Documentation</Button>
          <Button>Connect New Integration</Button>
        </div>
      </div>
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Status</CardTitle>
<<<<<<< HEAD
<<<<<<< HEAD
              <Badge variant="outline" className="bg-green-100 text-green-800">
                Healthy
              </Badge>
=======
              <Badge variant="outline" className="bg-green-100 text-green-800">Healthy</Badge>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
              <Badge variant="outline" className="bg-green-100 text-green-800">Healthy</Badge>
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
<<<<<<< HEAD
<<<<<<< HEAD
                <span className="text-muted-foreground">
                  Connected Services
                </span>
=======
                <span className="text-muted-foreground">Connected Services</span>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                <span className="text-muted-foreground">Connected Services</span>
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                <span className="font-medium">7 / 12</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Last Sync</span>
                <span className="font-medium">2 mins ago</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Pending Webhooks</span>
                <span className="font-medium">0</span>
              </div>
            </div>
          </CardContent>
        </Card>
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

        


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
        
        
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <Card className="md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="pb-0">
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between items-center pb-2 border-b">
                <div>
                  <p className="font-medium">Slack notification sent</p>
<<<<<<< HEAD
<<<<<<< HEAD
                  <p className="text-muted-foreground">
                    New job application received
                  </p>
=======
                  <p className="text-muted-foreground">New job application received</p>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                  <p className="text-muted-foreground">New job application received</p>
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                </div>
                <Badge variant="outline">5m ago</Badge>
              </li>
              <li className="flex justify-between items-center pb-2 border-b">
                <div>
                  <p className="font-medium">Google Calendar sync</p>
                  <p className="text-muted-foreground">Interview scheduled</p>
                </div>
                <Badge variant="outline">1h ago</Badge>
              </li>
              <li className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Zapier webhook trigger</p>
                  <p className="text-muted-foreground">Contract signed</p>
                </div>
                <Badge variant="outline">2h ago</Badge>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="pt-4">
<<<<<<< HEAD
<<<<<<< HEAD
            <Button variant="outline" className="w-full">
              View All Activity
            </Button>
          </CardFooter>
        </Card>
      </div>
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
            <Button variant="outline" className="w-full">View All Activity</Button>
          </CardFooter>
        </Card>
      </div>
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 md: w-[400px]">
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
          <TabsTrigger value="zapier">Zapier</TabsTrigger>
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
        </TabsList>
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

        


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
        
        
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <div className="mt-6">
          <TabsContent value="marketplace" className="m-0">
            <IntegrationCards />
          </TabsContent>
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
          <TabsContent value="zapier" className="m-0">
            <ZapierIntegration />
          </TabsContent>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          
          <TabsContent value="zapier" className="m-0">
            <ZapierIntegration />
          </TabsContent>
          
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <TabsContent value="webhooks" className="m-0">
            <Card>
              <CardHeader>
                <CardTitle>Webhook Management</CardTitle>
                <CardDescription>
<<<<<<< HEAD
<<<<<<< HEAD
                  Set up webhook endpoints to receive real-time updates from
                  your Zion platform.
=======
                  Set up webhook endpoints to receive real-time updates from your Zion platform.
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                  Set up webhook endpoints to receive real-time updates from your Zion platform.
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                </CardDescription>
              </CardHeader>
              <CardContent>
                <WebhookManager />
              </CardContent>
            </Card>
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

            


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
            
            
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Synchronization Log</CardTitle>
                <CardDescription>
<<<<<<< HEAD
<<<<<<< HEAD
                  View the history of synchronization events between
                  integrations.
=======
                  View the history of synchronization events between integrations.
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                  View the history of synchronization events between integrations.
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                </CardDescription>
              </CardHeader>
              <CardContent>
                <IntegrationsSyncLog />
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
<<<<<<< HEAD
  );
}
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======


=======
=======

  )
export function IntegrationsHub() {;
  const [activeTab, setActiveTab] = useState("marketplace");
  return (

  );
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  )
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { IntegrationCards } from "./IntegrationCards",;
import { ZapierIntegration } from "./ZapierIntegration",;
import { Badge } from "@/components/ui/badge",;
import { WebhookManager } from "./WebhookManager",;
import { IntegrationsSyncLog } from "./IntegrationsSyncLog",;
<<<<<<< HEAD
<<<<<<< HEAD
export function IntegrationsHub() {;
  const [activeTab, setActiveTab] = useState("marketplace");
  return (;

=======
;
export function IntegrationsHub() {;
  const [activeTab, setActiveTab] = useState("marketplace"),;
  ;
  return (;
export function IntegrationsHub() {;
  const [activeTab, setActiveTab] = useState("marketplace");
  return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <div className="space-y-6">;
      <div className="flex justify-between items-center">;
        <div>;
          <h1 className="text-3xl font-bold">Integrations Hub</h1>;
          <p className="text-muted-foreground mt-1">;
            Connect your platform with the tools and services you use every day;
          </p>;
        </div>;
<<<<<<< HEAD

=======
        ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <div className="flex gap-2">;
          <Button variant="outline">View Documentation</Button>;
          <Button>Connect New Integration</Button>;
        </div>;
      </div>;
<<<<<<< HEAD

=======
      ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;
        <Card>;
          <CardHeader className="pb-2">;
            <div className="flex justify-between items-center">;
              <CardTitle className="text-lg">Status</CardTitle>;
<<<<<<< HEAD
              <Badge variant="outline" className="bg-green-100 text-green-800">;
;
<<<<<<< HEAD
=======
=======
export function IntegrationsHub() {;
  const [activeTab, setActiveTab] = useState("marketplace");
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                Healthy;
              </Badge>;
            </div>;
          </CardHeader>;
          <CardContent>;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            <div className="space - y-2">;
              <div className="flex justify - between text - sm">;
                <span className="text - muted - foreground">;
                  Connected Services;
                </span>;
                <span className="font - medium">7 / 12</span>;
              </div>;
              <div className="flex justify - between text - sm">;
                <span className="text - muted - foreground">Last Sync</span>;
                <span className="font - medium">2 mins ago</span>;
              </div>;
              <div className="flex justify - between text - sm">;
                <span className="text - muted - foreground">Pending Webhooks</span>;
                <span className="font - medium">0</span>;
<<<<<<< HEAD

=======
              <Badge variant="outline" className="bg-green-100 text-green-800">Healthy</Badge>;
            </div>;
          </CardHeader>;
          <CardContent>;
            <div className="space-y-2">;
              <div className="flex justify-between text-sm">;
                <span className="text-muted-foreground">Connected Services</span>;
                <span className="font-medium">7 / 12</span>;
              </div>;
              <div className="flex justify-between text-sm">;
                <span className="text-muted-foreground">Last Sync</span>;
                <span className="font-medium">2 mins ago</span>;
              </div>;
              <div className="flex justify-between text-sm">;
                <span className="text-muted-foreground">Pending Webhooks</span>;
                <span className="font-medium">0</span>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              </div>;
            </div>;
          </CardContent>;
        </Card>;
<<<<<<< HEAD
<<<<<<< HEAD

        <Card className="md:col - span - 2">;
          <CardHeader className="pb - 2">;
            <CardTitle className="text - lg">Recent Activity</CardTitle>;
          </CardHeader>;
          <CardContent className="pb - 0">;
            <ul className="space - y-2 text - sm">;
              <li className="flex justify - between items - center pb - 2 border - b">;
                <div>;
                  <p className="font - medium">Slack notification sent</p>;
                  <p className="text - muted - foreground">;

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    New job application received;
                  </p>;
                </div>;
                <Badge variant="outline">5m ago</Badge>;
              </li>;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              <li className="flex justify - between items - center pb - 2 border - b">;
                <div>;
                  <p className="font - medium">Google Calendar sync</p>;
                  <p className="text - muted - foreground">Interview scheduled</p>;
                </div>;
                <Badge variant="outline">1h ago</Badge>;
              </li>;
              <li className="flex justify - between items - center">;
                <div>;
                  <p className="font - medium">Zapier webhook trigger</p>;
                  <p className="text - muted - foreground">Contract signed</p>;
<<<<<<< HEAD

=======
        ;
        <Card className="md:col-span-2">;
          <CardHeader className="pb-2">;
            <CardTitle className="text-lg">Recent Activity</CardTitle>;
          </CardHeader>;
          <CardContent className="pb-0">;
            <ul className="space-y-2 text-sm">;
              <li className="flex justify-between items-center pb-2 border-b">;
                <div>;
                  <p className="font-medium">Slack notification sent</p>;
                  <p className="text-muted-foreground">New job application received</p>;
                </div>;
                <Badge variant="outline">5m ago</Badge>;
              </li>;
              <li className="flex justify-between items-center pb-2 border-b">;
                <div>;
                  <p className="font-medium">Google Calendar sync</p>;
                  <p className="text-muted-foreground">Interview scheduled</p>;
                </div>;
                <Badge variant="outline">1h ago</Badge>;
              </li>;
              <li className="flex justify-between items-center">;
                <div>;
                  <p className="font-medium">Zapier webhook trigger</p>;
                  <p className="text-muted-foreground">Contract signed</p>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                </div>;
                <Badge variant="outline">2h ago</Badge>;
              </li>;
            </ul>;
          </CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD

          <CardFooter className="pt - 4">;
            <Button variant="outline" className="w - full">;

              View All Activity;
            </Button>;
          </CardFooter>;
        </Card>;
      </div>;

      <Tabs value={active_tab} onValueChange={setActiveTab} className="w - full">;
        <TabsList className="grid grid - cols - 3 md: w-[400px]">;

=======
      <Tabs value={active_tab} onValueChange={setActiveTab} className="w - full">;
        <TabsList className="grid grid - cols - 3 md: w-[400px]">;
          <CardFooter className="pt-4">;
            <Button variant="outline" className="w-full">View All Activity</Button>;
          </CardFooter>;
        </Card>;
      </div>;
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;
        <TabsList className="grid grid-cols-3 md: w-[400px]">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>;
          <TabsTrigger value="zapier">Zapier</TabsTrigger>;
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>;
        </TabsList>;
<<<<<<< HEAD
<<<<<<< HEAD

        <div className="mt - 6">;
          <TabsContent value="marketplace" className="m - 0">;
            <IntegrationCards />;
          </TabsContent>;
          <TabsContent value="zapier" className="m - 0">;
            <ZapierIntegration />;
          </TabsContent>;
          <TabsContent value="webhooks" className="m - 0">;
            <Card>;
              <CardHeader>;
                <CardTitle > Webhook Management</CardTitle>;
                <CardDescription>;
                  Set up webhook endpoints to receive real - time updates from;

                  your Zion platform.;
=======
                  your Zion platform.;
        ;
        <div className="mt-6">;
          <TabsContent value="marketplace" className="m-0">;
            <IntegrationCards />;
          </TabsContent>;
          <TabsContent value="zapier" className="m-0">;
            <ZapierIntegration />;
          </TabsContent>;
          <TabsContent value="webhooks" className="m-0">;
            <Card>;
              <CardHeader>;
                <CardTitle>Webhook Management</CardTitle>;
                <CardDescription>;
                  Set up webhook endpoints to receive real-time updates from your Zion platform.;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                </CardDescription>;
              </CardHeader>;
              <CardContent>;
                <WebhookManager />;
              </CardContent>;
            </Card>;
<<<<<<< HEAD
<<<<<<< HEAD

            <Card className="mt - 6">;
              <CardHeader>;
                <CardTitle > Synchronization Log</CardTitle>;

                <CardDescription>;
                  View the history of synchronization events between;
                  integrations.;
=======
            ;
            <Card className="mt-6">;
              <CardHeader>;
                <CardTitle>Synchronization Log</CardTitle>;
                <CardDescription>;
                  View the history of synchronization events between integrations.;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                </CardDescription>;
              </CardHeader>;
              <CardContent>;
                <IntegrationsSyncLog />;
              </CardContent>;
            </Card>;
          </TabsContent>;
        </div>;
      </Tabs>;
<<<<<<< HEAD

    </div>;
=======
=======
<<<<<<< HEAD

<<<<<<< HEAD
    </div>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  );
=======
    </div>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
=======

  );
    </div>);
}
    </div>;
  );}
 space-y-6"> <div className=" flex justify-between items-center"> <div> <h1 className=" text-3xl font-bold">Integrations Hub</h1> <p className=" text-muted-foreground mt-1"> Connect your platform with the tools and services you use every day </p> </div> <div className=" flex gap-2"> <Button variant=" outline">View Documentation</Button> <Button>Connect New Integration</Button> </div> </div> <div className=" grid grid-cols-1 md:grid-cols-3 gap-4"> <Card> <CardHeader className=" pb-2"> <div className=" flex justify-between items-center"> <CardTitle className=" text-lg">Status</CardTitle> <Badge variant=" outline"className=" bg-green-100 text-green-800">Healthy</Badge> </div> </CardHeader> <CardContent> <div className=" space-y-2"> <div className=" flex justify-between text-sm"> <span className=" text-muted-foreground">Connected Services</span> <span className=" font-medium">7 /12</span> </div> <div className=" flex justify-between text-sm"> <span className=" text-muted-foreground">Last Sync</span> <span className=" font-medium">2 mins ago</span> </div> <div className=" flex justify-between text-sm"> <span className=" text-muted-foreground">Pending Webhooks</span> <span className=" font-medium">0</span> </div> </div> </CardContent> </Card> <Card className=" md:col-span-2"> <CardHeader className=" pb-2"> <CardTitle className=" text-lg">Recent Activity</CardTitle> </CardHeader> <CardContent className=" pb-0"> <ul className=" space-y-2 text-sm"> <li className=" flex justify-between items-center pb-2 border-b"> <div> <p className=" font-medium">Slack notification sent</p> <p className=" text-muted-foreground">New job application received</p> </div> <Badge variant=" outline">5m ago</Badge> </li> <li className=" flex justify-between items-center pb-2 border-b"> <div> <p className=" font-medium">Google Calendar sync</p> <p className=" text-muted-foreground">Interview scheduled</p> </div> <Badge variant=" outline">1h ago</Badge> </li> <li className=" flex justify-between items-center"> <div> <p className=" font-medium">Zapier webhook trigger</p> <p className=" text-muted-foreground">Contract signed</p> </div> <Badge variant=" outline">2h ago</Badge> </li> </ul> </CardContent> <CardFooter className=" pt-4"> <Button variant=" outline"className=" w-full">View All Activity</Button> </CardFooter> </Card> </div> <TabsTrigger value="marketplace">Marketplace</TabsTrigger> <TabsTrigger value="zapier">Zapier</TabsTrigger> <TabsTrigger value="webhooks">Webhooks</TabsTrigger> mt-6" > <TabsContent value="marketplace" className="m-0" > <IntegrationCards /> </TabsContent> <TabsContent value="zapier" className="m-0" > <ZapierIntegration /> </TabsContent> <TabsContent value="webhooks" className="m-0" > <Card> <CardHeader> <CardTitle>Webhook Management</CardTitle> <CardDescription> Set up webhook endpoints to receive real-time updates from your Zion platform. </CardDescription> </CardHeader> <CardContent> <WebhookManager /> </CardContent> </Card> <Card className="mt-6" > <CardHeader> <CardTitle>Synchronization Log</CardTitle> <CardDescription> View the history of synchronization events between integrations. </CardDescription> </CardHeader> <CardContent> <IntegrationsSyncLog /> </CardContent> </Card> </TabsContent> </div> </Tabs> </div>) 
}
    </div>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  );
}
;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
