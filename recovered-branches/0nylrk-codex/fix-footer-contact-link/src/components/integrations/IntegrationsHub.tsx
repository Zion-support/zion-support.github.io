
<<<<<<< HEAD

import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {

<<<<<<< HEAD
<<<<<<< HEAD

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IntegrationCards } from "./IntegrationCards";
import { ZapierIntegration } from "./ZapierIntegration";
import { Badge } from "@/components/ui/badge";

<<<<<<< HEAD
export function IntegrationsHub() {
  const [activeTab, setActiveTab] = useState("marketplace");



import { WebhookManager } from "./WebhookManager";
import { IntegrationsSyncLog } from "./IntegrationsSyncLog";
<<<<<<< HEAD
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
  
=======


export function IntegrationsHub() {
  const [activeTab, setActiveTab] = useState("marketplace");


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import { WebhookManager } from "./WebhookManager";
import { IntegrationsSyncLog } from "./IntegrationsSyncLog";
export function IntegrationsHub() {;
  const [activeTab, setActiveTab] = useState("marketplace");


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="flex gap-2">
          <Button variant="outline">View Documentation</Button>
          <Button>Connect New Integration</Button>
        </div>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      


<<<<<<< HEAD
      
      
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Status</CardTitle>
<<<<<<< HEAD
<<<<<<< HEAD
              <Badge variant="outline" className="bg-green-100 text-green-800">Healthy</Badge>
=======
              <Badge variant="outline" className="bg-green-100 text-green-800">
                Healthy
              </Badge>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              <Badge variant="outline" className="bg-green-100 text-green-800">
                Healthy
              </Badge>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
<<<<<<< HEAD
<<<<<<< HEAD
                <span className="text-muted-foreground">Connected Services</span>
=======
                <span className="text-muted-foreground">
                  Connected Services
                </span>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                <span className="text-muted-foreground">
                  Connected Services
                </span>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        


<<<<<<< HEAD
        
        
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
                  <p className="text-muted-foreground">New job application received</p>
=======
                  <p className="text-muted-foreground">
                    New job application received
                  </p>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  <p className="text-muted-foreground">
                    New job application received
                  </p>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

      


            <Button variant="outline" className="w-full">View All Activity</Button>
          </CardFooter>
        </Card>
      </div>
      
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Button variant="outline" className="w-full">
              View All Activity
            </Button>
          </CardFooter>
        </Card>
      </div>
<<<<<<< HEAD


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 md: w-[400px]">
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
          <TabsTrigger value="zapier">Zapier</TabsTrigger>
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
        </TabsList>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        


<<<<<<< HEAD
        
        
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="mt-6">
          <TabsContent value="marketplace" className="m-0">
            <IntegrationCards />
          </TabsContent>
<<<<<<< HEAD

<<<<<<< HEAD
          <TabsContent value="zapier" className="m-0">
            <ZapierIntegration />
          </TabsContent>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          <TabsContent value="zapier" className="m-0">
            <ZapierIntegration />
          </TabsContent>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          
          <TabsContent value="zapier" className="m-0">
            <ZapierIntegration />
          </TabsContent>
          
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <TabsContent value="webhooks" className="m-0">
            <Card>
              <CardHeader>
                <CardTitle>Webhook Management</CardTitle>
                <CardDescription>
<<<<<<< HEAD
<<<<<<< HEAD
                  Set up webhook endpoints to receive real-time updates from your Zion platform.
=======
                  Set up webhook endpoints to receive real-time updates from
                  your Zion platform.
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  Set up webhook endpoints to receive real-time updates from
                  your Zion platform.
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </CardDescription>
              </CardHeader>
              <CardContent>
                <WebhookManager />
              </CardContent>
            </Card>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            


<<<<<<< HEAD
            
            
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Synchronization Log</CardTitle>
                <CardDescription>
<<<<<<< HEAD
<<<<<<< HEAD
                  View the history of synchronization events between integrations.
=======
                  View the history of synchronization events between
                  integrations.
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  View the history of synchronization events between
                  integrations.
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

  )
export function IntegrationsHub() {;
  const [activeTab, setActiveTab] = useState("marketplace");
  return (

  );
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
;
export function IntegrationsHub() {;
  const [activeTab, setActiveTab] = useState("marketplace"),;
  ;
  return (;
export function IntegrationsHub() {;
  const [activeTab, setActiveTab] = useState("marketplace");
  return (;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export function IntegrationsHub() {;
  const [activeTab, setActiveTab] = useState("marketplace");
  return (;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className="space-y-6">;
      <div className="flex justify-between items-center">;
        <div>;
          <h1 className="text-3xl font-bold">Integrations Hub</h1>;
          <p className="text-muted-foreground mt-1">;
            Connect your platform with the tools and services you use every day;
          </p>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
        ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="flex gap-2">;
          <Button variant="outline">View Documentation</Button>;
          <Button>Connect New Integration</Button>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
      ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;
        <Card>;
          <CardHeader className="pb-2">;
            <div className="flex justify-between items-center">;
              <CardTitle className="text-lg">Status</CardTitle>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  return (
    <div className="space - y-6">;
      <div className="flex justify - between items - center">;
        <div>;
          <h1 className="text - 3xl font - bold">Integrations Hub</h1>;
          <p className="text - muted - foreground mt - 1">;
            Connect your platform with the tools and services you use every day;
          </p>;
        </div>;
        <div className="flex gap - 2">;
          <Button variant="outline">View Documentation</Button>;
          <Button > Connect New Integration</Button>;
        </div>;
      </div>;
      <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 4">;
        <Card>;
          <CardHeader className="pb - 2">;
            <div className="flex justify - between items - center">;
              <CardTitle className="text - lg">Status</CardTitle>;
              <Badge variant="outline" className="bg - green - 100 text - green - 800">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                Healthy;
              </Badge>;
            </div>;
          </CardHeader>;
          <CardContent>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>;
            </div>;
          </CardContent>;
        </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    New job application received;
                  </p>;
                </div>;
                <Badge variant="outline">5m ago</Badge>;
              </li>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>;
                <Badge variant="outline">2h ago</Badge>;
              </li>;
            </ul>;
          </CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD
      <Tabs value={active_tab} onValueChange={setActiveTab} className="w - full">;
        <TabsList className="grid grid - cols - 3 md: w-[400px]">;
          <CardFooter className="pt-4">;
            <Button variant="outline" className="w-full">View All Activity</Button>;
          </CardFooter>;
        </Card>;
      </div>;
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;
        <TabsList className="grid grid-cols-3 md: w-[400px]">;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          <CardFooter className="pt - 4">;
            <Button variant="outline" className="w - full">;

              View All Activity;
            </Button>;
          </CardFooter>;
        </Card>;
      </div>;

      <Tabs value={active_tab} onValueChange={setActiveTab} className="w - full">;
        <TabsList className="grid grid - cols - 3 md: w-[400px]">;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>;
          <TabsTrigger value="zapier">Zapier</TabsTrigger>;
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>;
        </TabsList>;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </CardDescription>;
              </CardHeader>;
              <CardContent>;
                <WebhookManager />;
              </CardContent>;
            </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
            ;
            <Card className="mt-6">;
              <CardHeader>;
                <CardTitle>Synchronization Log</CardTitle>;
                <CardDescription>;
                  View the history of synchronization events between integrations.;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            <Card className="mt - 6">;
              <CardHeader>;
                <CardTitle > Synchronization Log</CardTitle>;

                <CardDescription>;
                  View the history of synchronization events between;
                  integrations.;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD

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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </div>;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  );
<<<<<<< HEAD
=======
    </div>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
