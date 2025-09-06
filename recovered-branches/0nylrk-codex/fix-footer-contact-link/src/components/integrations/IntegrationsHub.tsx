<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

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
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IntegrationCards } from "./IntegrationCards";
import { ZapierIntegration } from "./ZapierIntegration";
import { Badge } from "@/components/ui/badge";

<<<<<<< HEAD
=======
import { WebhookManager } from "./WebhookManager";
import { IntegrationsSyncLog } from "./IntegrationsSyncLog";
export function IntegrationsHub() {;
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
  

<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        <div className="flex gap-2">
          <Button variant="outline">View Documentation</Button>
          <Button>Connect New Integration</Button>
        </div>
      </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

      


      
      
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Status</CardTitle>
<<<<<<< HEAD
              <Badge variant="outline" className="bg-green-100 text-green-800">Healthy</Badge>
=======
<<<<<<< HEAD
              <Badge variant="outline" className="bg-green-100 text-green-800">Healthy</Badge>
=======
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
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
<<<<<<< HEAD
                <span className="text-muted-foreground">Connected Services</span>
=======
<<<<<<< HEAD
                <span className="text-muted-foreground">Connected Services</span>
=======
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
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

        


        
        
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
                  <p className="text-muted-foreground">New job application received</p>
=======
<<<<<<< HEAD
                  <p className="text-muted-foreground">New job application received</p>
=======
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
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
            <Button variant="outline" className="w-full">
              View All Activity
            </Button>
          </CardFooter>
        </Card>
      </div>

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

      


            <Button variant="outline" className="w-full">View All Activity</Button>
          </CardFooter>
        </Card>
      </div>
      
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 md: w-[400px]">
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
          <TabsTrigger value="zapier">Zapier</TabsTrigger>
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
        </TabsList>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

        


        
        
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        <div className="mt-6">
          <TabsContent value="marketplace" className="m-0">
            <IntegrationCards />
          </TabsContent>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
          <TabsContent value="zapier" className="m-0">
            <ZapierIntegration />
          </TabsContent>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          
          <TabsContent value="zapier" className="m-0">
            <ZapierIntegration />
          </TabsContent>
          
<<<<<<< HEAD
=======
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          <TabsContent value="webhooks" className="m-0">
            <Card>
              <CardHeader>
                <CardTitle>Webhook Management</CardTitle>
                <CardDescription>
<<<<<<< HEAD
                  Set up webhook endpoints to receive real-time updates from your Zion platform.
=======
<<<<<<< HEAD
                  Set up webhook endpoints to receive real-time updates from your Zion platform.
=======
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
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                </CardDescription>
              </CardHeader>
              <CardContent>
                <WebhookManager />
              </CardContent>
            </Card>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

            


            
            
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Synchronization Log</CardTitle>
                <CardDescription>
<<<<<<< HEAD
                  View the history of synchronization events between integrations.
=======
<<<<<<< HEAD
                  View the history of synchronization events between integrations.
=======
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
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
=======
<<<<<<< HEAD
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
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
=======
<<<<<<< HEAD
<<<<<<< HEAD
export function IntegrationsHub() {;
  const [activeTab, setActiveTab] = useState("marketplace");
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    <div className="space-y-6">;
      <div className="flex justify-between items-center">;
        <div>;
          <h1 className="text-3xl font-bold">Integrations Hub</h1>;
          <p className="text-muted-foreground mt-1">;
            Connect your platform with the tools and services you use every day;
          </p>;
        </div>;
        <div className="flex gap-2">;
          <Button variant="outline">View Documentation</Button>;
          <Button>Connect New Integration</Button>;
        </div>;
      </div>;
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;
        <Card>;
          <CardHeader className="pb-2">;
            <div className="flex justify-between items-center">;
              <CardTitle className="text-lg">Status</CardTitle>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
              <Badge variant="outline" className="bg-green-100 text-green-800">;
=======
import React, { useState } from './react';
import { Button  } from '@/components / ui / button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { Tabs, TabsContent, TabsList, TabsTrigger  } from '@/components / ui / tabs';
import { IntegrationCards  } from './IntegrationCards';
import { ZapierIntegration  } from './ZapierIntegration';
import { Badge  } from '@/components / ui / badge';
import { WebhookManager  } from './WebhookManager';
import { IntegrationsSyncLog  } from './IntegrationsSyncLog';
export /**
 * IntegrationsHub - Function description
 */
function IntegrationsHub() {
  const [active_tab, setActiveTab] = useState ("marketplace");
;
=======
export function IntegrationsHub() {;
  const [activeTab, setActiveTab] = useState("marketplace");
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  return (
                Healthy;
              </Badge>;
            </div>;
          </CardHeader>;
          <CardContent>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              </div>;
            </div>;
          </CardContent>;
        </Card>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
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
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                    New job application received;
                  </p>;
                </div>;
                <Badge variant="outline">5m ago</Badge>;
              </li>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                </div>;
                <Badge variant="outline">2h ago</Badge>;
              </li>;
            </ul>;
          </CardContent>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
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
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>;
          <TabsTrigger value="zapier">Zapier</TabsTrigger>;
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>;
        </TabsList>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
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
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                </CardDescription>;
              </CardHeader>;
              <CardContent>;
                <WebhookManager />;
              </CardContent>;
            </Card>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
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
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
=======
<<<<<<< HEAD
  );
}
;
=======
<<<<<<< HEAD

<<<<<<< HEAD
    </div>;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  );
    </div>);
}

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
;
  );
}
;
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
