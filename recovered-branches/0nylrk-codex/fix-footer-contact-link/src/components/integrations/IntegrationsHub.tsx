

<<<<<<< HEAD
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;


import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import React, { useState } from "react";"
import { Button } from "@/components/ui/button";
import {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  Card,
  CardContent,
  CardDescription,
  CardFooter,
<<<<<<< HEAD
  CardHeader,;
  CardTitle,;
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  CardHeader,
  CardTitle,;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IntegrationCards } from "./IntegrationCards";
import { ZapierIntegration } from "./ZapierIntegration";
import { Badge } from "@/components/ui/badge";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======


"
} from "@/components/ui/card";"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";"
import { IntegrationCards } from "./IntegrationCards";"
import { ZapierIntegration } from "./ZapierIntegration";"
import { Badge } from "@/components/ui/badge";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

"
import { WebhookManager } from "./WebhookManager";"
import { IntegrationsSyncLog } from "./IntegrationsSyncLog";
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======

import { WebhookManager } from "./WebhookManager";
import { IntegrationsSyncLog } from "./IntegrationsSyncLog";
export function IntegrationsHub() {;
  const [activeTab, setActiveTab] = useState("marketplace");

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

export function IntegrationsHub() {
  const [activeTab, setActiveTab] = useState("marketplace");


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <div className="flex gap-2">
          <Button variant="outline">View Documentation</Button>
          <Button>Connect New Integration</Button>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
      </div>

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

      


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
=======
      </div>      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      </div>      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Status</CardTitle>
              <Badge variant="outline" className="bg-green-100 text-green-800">
                Healthy
              </Badge>
              <Badge variant="outline" className="bg-green-100 text-green-800">Healthy</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  Connected Services
                </span>
                <span className="text-muted-foreground">Connected Services</span>
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

        


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
        
        
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <Card className="md:col-span-2">
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        
        
        <Card className="md:col-span-2">
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="pb-0">
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between items-center pb-2 border-b">
                <div>
                  <p className="font-medium">Slack notification sent</p>
                  <p className="text-muted-foreground">
                    New job application received
                  </p>
                  <p className="text-muted-foreground">New job application received</p>
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
            <Button variant="outline" className="w-full">
              View All Activity
            </Button>
          </CardFooter>
        </Card>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      </div>
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      </div>

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

      


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <Button variant="outline" className="w-full">View All Activity</Button>
          </CardFooter>
        </Card>
      </div>
      
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
=======
      </div>      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      </div>      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <TabsList className="grid grid-cols-3 md: w-[400px]">
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
          <TabsTrigger value="zapier">Zapier</TabsTrigger>
=======
export function IntegrationsHub() { return null; }
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">"
        <TabsList className="grid grid-cols-3 md: w-[400px]">"
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>"
          <TabsTrigger value="zapier">Zapier</TabsTrigger>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        </TabsList>
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        </TabsList>
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


        


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
        
        
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <div className="mt-6">
=======


"
        <div className="mt-6">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        
        
        <div className="mt-6">
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <TabsContent value="marketplace" className="m-0">
            <IntegrationCards />
          </TabsContent>

<<<<<<< HEAD
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
          
=======
          "
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

          
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <TabsContent value="zapier" className="m-0">
            <ZapierIntegration />
          </TabsContent>
          


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <TabsContent value="webhooks" className="m-0">
=======
        </TabsList>          <TabsContent value="webhooks" className="m-0">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        </TabsList>          <TabsContent value="webhooks" className="m-0">
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          <TabsContent value="webhooks" className="m-0">
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <Card>
              <CardHeader>
                <CardTitle>Webhook Management</CardTitle>
                <CardDescription>
<<<<<<< HEAD
<<<<<<< HEAD
                  Set up webhook endpoints to receive real-time updates from your Zion platform.                  Set up webhook endpoints to receive real-time updates from your Zion platform.
=======


                  Set up webhook endpoints to receive real-time updates from your Zion platform.

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                  Set up webhook endpoints to receive real-time updates from
                  your Zion platform.
                  Set up webhook endpoints to receive real-time updates from your Zion platform.
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                </CardDescription>
              </CardHeader>
              <CardContent>
                <WebhookManager />
              </CardContent>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            </Card>
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            </Card>
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


            


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
            
            
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <Card className="mt-6">
=======
            </Card>            <Card className="mt-6">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            </Card>            <Card className="mt-6">
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              <CardHeader>
                <CardTitle>Synchronization Log</CardTitle>
                <CardDescription>
<<<<<<< HEAD
                  View the history of synchronization events between integrations.                  View the history of synchronization events between integrations.
=======


                  View the history of synchronization events between integrations.

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Synchronization Log</CardTitle>
                <CardDescription>
                  View the history of synchronization events between
                  integrations.
                  View the history of synchronization events between integrations.
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  );
}
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD
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
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
export function IntegrationsHub() {;
  const [activeTab, setActiveTab] = useState("marketplace");
<<<<<<< HEAD
=======
  )"
import React, { useState } from "react",;"
import { Button } from "@/components/ui/button",;"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;"
import { IntegrationCards } from "./IntegrationCards",;"
import { ZapierIntegration } from "./ZapierIntegration",;"
import { Badge } from "@/components/ui/badge",;"
import { WebhookManager } from "./WebhookManager",;"
import { IntegrationsSyncLog } from "./IntegrationsSyncLog",;
"
    <div className="space-y-6">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  return (;

    <div className="space-y-6">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      <div className="flex justify-between items-center">;
        <div>;"
          <h1 className="text-3xl font-bold">Integrations Hub</h1>;"
          <p className="text-muted-foreground mt-1">;
            Connect your platform with the tools and services you use every day;
          </p>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <div className="flex gap-2">;
=======
"
        <div className="flex gap-2">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <Button variant="outline">View Documentation</Button>;
          <Button>Connect New Integration</Button>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;
        <Card>;"
          <CardHeader className="pb-2">;"
            <div className="flex justify-between items-center">;"
              <CardTitle className="text-lg">Status</CardTitle>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              <Badge variant="outline" className="bg-green-100 text-green-800">;
;
<<<<<<< HEAD
=======
=======
export function IntegrationsHub() {;
  const [activeTab, setActiveTab] = useState("marketplace");
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
              <Badge variant="outline" className="bg-green-100 text-green-800">;  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
              <Badge variant="outline" className="bg-green-100 text-green-800">;  return (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
              <Badge variant="outline" className="bg-green-100 text-green-800">;
  return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                Healthy;
              </Badge>;
            </div>;
          </CardHeader>;
<<<<<<< HEAD
<<<<<<< HEAD
          <CardContent>;              </div>;
            </div>;
          </CardContent>;
        </Card>;                    New job application received;
=======
          <CardContent>;
"
            <div className="space - y-2">;"
              <div className="flex justify - between text - sm">;"
                <span className="text - muted - foreground">;
                  Connected Services;
                </span>;"
                <span className="font - medium">7 / 12</span>;
              </div>;"
              <div className="flex justify - between text - sm">;"
                <span className="text - muted - foreground">Last Sync</span>;"
                <span className="font - medium">2 mins ago</span>;
              </div>;"
              <div className="flex justify - between text - sm">;"
                <span className="text - muted - foreground">Pending Webhooks</span>;"
                <span className="font - medium">0</span>;



              </div>;
            </div>;
          </CardContent>;
        </Card>;



                    New job application received;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          <CardContent>;

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

              </div>;
            </div>;
          </CardContent>;
        </Card>;

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

                    New job application received;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  </p>;
                </div>;"
                <Badge variant="outline">5m ago</Badge>;
<<<<<<< HEAD
<<<<<<< HEAD
              </li>;                </div>;
=======
              </li>;
"
              <li className="flex justify - between items - center pb - 2 border - b">;
                <div>;"
                  <p className="font - medium">Google Calendar sync</p>;"
                  <p className="text - muted - foreground">Interview scheduled</p>;
                </div>;"
                <Badge variant="outline">1h ago</Badge>;
              </li>;"
              <li className="flex justify - between items - center">;
                <div>;"
                  <p className="font - medium">Zapier webhook trigger</p>;"
                  <p className="text - muted - foreground">Contract signed</p>;



                </div>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              </li>;

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

                </div>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <Badge variant="outline">2h ago</Badge>;
              </li>;
            </ul>;
          </CardContent>;

<<<<<<< HEAD
<<<<<<< HEAD
          <CardFooter className="pt-4">;
            <Button variant="outline" className="w-full">;
=======
          <CardFooter className="pt - 4">;
            <Button variant="outline" className="w - full">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

              View All Activity;
            </Button>;
          </CardFooter>;
        </Card>;
      </div>;

<<<<<<< HEAD
      <Tabs value={active_tab} onValueChange={setActiveTab} className="w-full">;
        <TabsList className="grid grid - cols-3 md: w-[400px]">;                </CardDescription>;
=======

"
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>;"
          <TabsTrigger value="zapier">Zapier</TabsTrigger>;"
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>;
        </TabsList>;



                </CardDescription>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      <Tabs value={active_tab} onValueChange={setActiveTab} className="w - full">;
        <TabsList className="grid grid - cols - 3 md: w-[400px]">;

          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>;
          <TabsTrigger value="zapier">Zapier</TabsTrigger>;
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>;
        </TabsList>;

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
                </CardDescription>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              </CardHeader>;
              <CardContent>;
                <WebhookManager />;
              </CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD
            </Card>;                </CardDescription>;
=======
            </Card>;



                </CardDescription>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            </Card>;

            <Card className="mt - 6">;
              <CardHeader>;
                <CardTitle > Synchronization Log</CardTitle>;

                <CardDescription>;
                  View the history of synchronization events between;
                  integrations.;
                </CardDescription>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              </CardHeader>;
              <CardContent>;
                <IntegrationsSyncLog />;
              </CardContent>;
            </Card>;
          </TabsContent>;
        </div>;
      </Tabs>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

    </div>;
=======
=======
<<<<<<< HEAD

<<<<<<< HEAD
    </div>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

}
=======

    </div>;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


  );
    </div>);
}
<<<<<<< HEAD
    </div>;
  );}"
 space-y-6"> <div className=" flex justify-between items-center"> <div> <h1 className=" text-3xl font-bold">Integrations Hub</h1> <p className=" text-muted-foreground mt-1"> Connect your platform with the tools and services you use every day </p> </div> <div className=" flex gap-2"> <Button variant=" outline">View Documentation</Button> <Button>Connect New Integration</Button> </div> </div> <div className=" grid grid-cols-1 md:grid-cols-3 gap-4"> <Card> <CardHeader className=" pb-2"> <div className=" flex justify-between items-center"> <CardTitle className=" text-lg">Status</CardTitle> <Badge variant=" outline"className=" bg-green-100 text-green-800">Healthy</Badge> </div> </CardHeader> <CardContent> <div className=" space-y-2"> <div className=" flex justify-between text-sm"> <span className=" text-muted-foreground">Connected Services</span> <span className=" font-medium">7 /12</span> </div> <div className=" flex justify-between text-sm"> <span className=" text-muted-foreground">Last Sync</span> <span className=" font-medium">2 mins ago</span> </div> <div className=" flex justify-between text-sm"> <span className=" text-muted-foreground">Pending Webhooks</span> <span className=" font-medium">0</span> </div> </div> </CardContent> </Card> <Card className=" md:col-span-2"> <CardHeader className=" pb-2"> <CardTitle className=" text-lg">Recent Activity</CardTitle> </CardHeader> <CardContent className=" pb-0"> <ul className=" space-y-2 text-sm"> <li className=" flex justify-between items-center pb-2 border-b"> <div> <p className=" font-medium">Slack notification sent</p> <p className=" text-muted-foreground">New job application received</p> </div> <Badge variant=" outline">5m ago</Badge> </li> <li className=" flex justify-between items-center pb-2 border-b"> <div> <p className=" font-medium">Google Calendar sync</p> <p className=" text-muted-foreground">Interview scheduled</p> </div> <Badge variant=" outline">1h ago</Badge> </li> <li className=" flex justify-between items-center"> <div> <p className=" font-medium">Zapier webhook trigger</p> <p className=" text-muted-foreground">Contract signed</p> </div> <Badge variant=" outline">2h ago</Badge> </li> </ul> </CardContent> <CardFooter className=" pt-4"> <Button variant=" outline"className=" w-full">View All Activity</Button> </CardFooter> </Card> </div> <TabsTrigger value="marketplace">Marketplace</TabsTrigger> <TabsTrigger value="zapier">Zapier</TabsTrigger> <TabsTrigger value="webhooks">Webhooks</TabsTrigger> mt-6" > <TabsContent value="marketplace" className="m-0" > <IntegrationCards /> </TabsContent> <TabsContent value="zapier" className="m-0" > <ZapierIntegration /> </TabsContent> <TabsContent value="webhooks" className="m-0" > <Card> <CardHeader> <CardTitle>Webhook Management</CardTitle> <CardDescription> Set up webhook endpoints to receive real-time updates from your Zion platform. </CardDescription> </CardHeader> <CardContent> <WebhookManager /> </CardContent> </Card> <Card className="mt-6" > <CardHeader> <CardTitle>Synchronization Log</CardTitle> <CardDescription> View the history of synchronization events between integrations. </CardDescription> </CardHeader> <CardContent> <IntegrationsSyncLog /> </CardContent> </Card> </TabsContent> </div> </Tabs> </div>) 
}
    </div>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

  );
    </div>);
}
    </div>;
  );}
 space-y-6"> <div className=" flex justify-between items-center"> <div> <h1 className=" text-3xl font-bold">Integrations Hub</h1> <p className=" text-muted-foreground mt-1"> Connect your platform with the tools and services you use every day </p> </div> <div className=" flex gap-2"> <Button variant=" outline">View Documentation</Button> <Button>Connect New Integration</Button> </div> </div> <div className=" grid grid-cols-1 md:grid-cols-3 gap-4"> <Card> <CardHeader className=" pb-2"> <div className=" flex justify-between items-center"> <CardTitle className=" text-lg">Status</CardTitle> <Badge variant=" outline"className=" bg-green-100 text-green-800">Healthy</Badge> </div> </CardHeader> <CardContent> <div className=" space-y-2"> <div className=" flex justify-between text-sm"> <span className=" text-muted-foreground">Connected Services</span> <span className=" font-medium">7 /12</span> </div> <div className=" flex justify-between text-sm"> <span className=" text-muted-foreground">Last Sync</span> <span className=" font-medium">2 mins ago</span> </div> <div className=" flex justify-between text-sm"> <span className=" text-muted-foreground">Pending Webhooks</span> <span className=" font-medium">0</span> </div> </div> </CardContent> </Card> <Card className=" md:col-span-2"> <CardHeader className=" pb-2"> <CardTitle className=" text-lg">Recent Activity</CardTitle> </CardHeader> <CardContent className=" pb-0"> <ul className=" space-y-2 text-sm"> <li className=" flex justify-between items-center pb-2 border-b"> <div> <p className=" font-medium">Slack notification sent</p> <p className=" text-muted-foreground">New job application received</p> </div> <Badge variant=" outline">5m ago</Badge> </li> <li className=" flex justify-between items-center pb-2 border-b"> <div> <p className=" font-medium">Google Calendar sync</p> <p className=" text-muted-foreground">Interview scheduled</p> </div> <Badge variant=" outline">1h ago</Badge> </li> <li className=" flex justify-between items-center"> <div> <p className=" font-medium">Zapier webhook trigger</p> <p className=" text-muted-foreground">Contract signed</p> </div> <Badge variant=" outline">2h ago</Badge> </li> </ul> </CardContent> <CardFooter className=" pt-4"> <Button variant=" outline"className=" w-full">View All Activity</Button> </CardFooter> </Card> </div> <TabsTrigger value="marketplace">Marketplace</TabsTrigger> <TabsTrigger value="zapier">Zapier</TabsTrigger> <TabsTrigger value="webhooks">Webhooks</TabsTrigger> mt-6" > <TabsContent value="marketplace" className="m-0" > <IntegrationCards /> </TabsContent> <TabsContent value="zapier" className="m-0" > <ZapierIntegration /> </TabsContent> <TabsContent value="webhooks" className="m-0" > <Card> <CardHeader> <CardTitle>Webhook Management</CardTitle> <CardDescription> Set up webhook endpoints to receive real-time updates from your Zion platform. </CardDescription> </CardHeader> <CardContent> <WebhookManager /> </CardContent> </Card> <Card className="mt-6" > <CardHeader> <CardTitle>Synchronization Log</CardTitle> <CardDescription> View the history of synchronization events between integrations. </CardDescription> </CardHeader> <CardContent> <IntegrationsSyncLog /> </CardContent> </Card> </TabsContent> </div> </Tabs> </div>) 
}
    </div>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  );
}
;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  );
}
;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


  );
}
;

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
