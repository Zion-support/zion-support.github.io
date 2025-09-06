<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsHub.tsx

=======


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsHub.tsx
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsHub.tsx

=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {

<<<<<<< HEAD
=======

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
<<<<<<< HEAD
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,;
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsHub.tsx
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IntegrationCards } from "./IntegrationCards";
import { ZapierIntegration } from "./ZapierIntegration";
import { Badge } from "@/components/ui/badge";
<<<<<<< HEAD
import { WebhookManager } from "./WebhookManager";
import { IntegrationsSyncLog } from "./IntegrationsSyncLog";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsHub.tsx

<<<<<<< HEAD
=======

export function IntegrationsHub() {
  const [activeTab, setActiveTab] = useState("marketplace");


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

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
=======
export function IntegrationsHub() {
  const [activeTab, setActiveTab] = useState("marketplace");
<<<<<<< HEAD
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Integrations Hub</h1>
          <p className="text-muted-foreground mt-1">
            Connect your platform with the tools and services you use every day
          </p>
        </div>
=======

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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="flex gap-2">
          <Button variant="outline">View Documentation</Button>
          <Button>Connect New Integration</Button>
        </div>
      </div>
<<<<<<< HEAD

<<<<<<< HEAD
=======

      


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Status</CardTitle>
<<<<<<< HEAD
              <Badge variant="outline" className="bg-green-100 text-green-800">
                Healthy
              </Badge>
=======
              <Badge variant="outline" className="bg-green-100 text-green-800">Healthy</Badge>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
<<<<<<< HEAD
                <span className="text-muted-foreground">
                  Connected Services
                </span>
=======
                <span className="text-muted-foreground">Connected Services</span>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

        


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
        
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
                  <p className="text-muted-foreground">
                    New job application received
                  </p>
=======
                  <p className="text-muted-foreground">New job application received</p>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
            <Button variant="outline" className="w-full">
              View All Activity
            </Button>
          </CardFooter>
        </Card>
      </div>

<<<<<<< HEAD
=======

      


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
            <Button variant="outline" className="w-full">View All Activity</Button>
          </CardFooter>
        </Card>
      </div>
<<<<<<< HEAD
=======
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 md: w-[400px]">
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
          <TabsTrigger value="zapier">Zapier</TabsTrigger>
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
        </TabsList>
<<<<<<< HEAD

<<<<<<< HEAD
=======

        


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
        
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="mt-6">
          <TabsContent value="marketplace" className="m-0">
            <IntegrationCards />
          </TabsContent>
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
          <TabsContent value="zapier" className="m-0">
            <ZapierIntegration />
          </TabsContent>
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          
          <TabsContent value="zapier" className="m-0">
            <ZapierIntegration />
          </TabsContent>
          
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <TabsContent value="webhooks" className="m-0">
            <Card>
              <CardHeader>
                <CardTitle>Webhook Management</CardTitle>
                <CardDescription>
<<<<<<< HEAD
                  Set up webhook endpoints to receive real-time updates from
                  your Zion platform.
=======
                  Set up webhook endpoints to receive real-time updates from your Zion platform.
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </CardDescription>
              </CardHeader>
              <CardContent>
                <WebhookManager />
              </CardContent>
            </Card>
<<<<<<< HEAD

<<<<<<< HEAD
=======

            


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
            
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Synchronization Log</CardTitle>
                <CardDescription>
<<<<<<< HEAD
                  View the history of synchronization events between
                  integrations.
=======
                  View the history of synchronization events between integrations.
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  )
========
export function IntegrationsHub() {;
  const [activeTab, setActiveTab] = useState("marketplace");
  return (
=======

>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsHub.tsx
=======
<<<<<<< HEAD
<<<<<<< HEAD
  );
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  )
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsHub.tsx
export function IntegrationsHub() {;
  const [activeTab, setActiveTab] = useState("marketplace");
  return (;

========
;
export function IntegrationsHub() {;
  const [activeTab, setActiveTab] = useState("marketplace"),;
  ;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsHub.tsx
=======
export function IntegrationsHub() {;
  const [activeTab, setActiveTab] = useState("marketplace");
  return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
        ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="flex gap-2">;
          <Button variant="outline">View Documentation</Button>;
          <Button>Connect New Integration</Button>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
      ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;
        <Card>;
          <CardHeader className="pb-2">;
            <div className="flex justify-between items-center">;
              <CardTitle className="text-lg">Status</CardTitle>;
<<<<<<< HEAD
<<<<<<< HEAD
              <Badge variant="outline" className="bg-green-100 text-green-800">;
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
                Healthy;
              </Badge>;
            </div>;
          </CardHeader>;
          <CardContent>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsHub.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsHub.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsHub.tsx

========
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsHub.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </div>;
            </div>;
          </CardContent>;
        </Card>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsHub.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsHub.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsHub.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsHub.tsx
                    New job application received;
                  </p>;
                </div>;
                <Badge variant="outline">5m ago</Badge>;
              </li>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsHub.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsHub.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsHub.tsx

========
=======
        ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsHub.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </div>;
                <Badge variant="outline">2h ago</Badge>;
              </li>;
            </ul>;
          </CardContent>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsHub.tsx

          <CardFooter className="pt - 4">;
            <Button variant="outline" className="w - full">;

========
<<<<<<< HEAD
          <CardFooter className="pt - 4">;
            <Button variant="outline" className="w - full">;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsHub.tsx
              View All Activity;
            </Button>;
          </CardFooter>;
        </Card>;
      </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsHub.tsx

      <Tabs value={active_tab} onValueChange={setActiveTab} className="w - full">;
        <TabsList className="grid grid - cols - 3 md: w-[400px]">;

========
      <Tabs value={active_tab} onValueChange={setActiveTab} className="w - full">;
        <TabsList className="grid grid - cols - 3 md: w-[400px]">;
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <CardFooter className="pt-4">;
            <Button variant="outline" className="w-full">View All Activity</Button>;
          </CardFooter>;
        </Card>;
      </div>;
<<<<<<< HEAD
      ;
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;
        <TabsList className="grid grid-cols-3 md:w-[400px]">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsHub.tsx
=======
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;
        <TabsList className="grid grid-cols-3 md: w-[400px]">;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>;
          <TabsTrigger value="zapier">Zapier</TabsTrigger>;
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>;
        </TabsList>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsHub.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsHub.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsHub.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsHub.tsx
                  your Zion platform.;
=======
        ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="mt-6">;
          <TabsContent value="marketplace" className="m-0">;
            <IntegrationCards />;
          </TabsContent>;
<<<<<<< HEAD
          ;
          <TabsContent value="zapier" className="m-0">;
            <ZapierIntegration />;
          </TabsContent>;
          ;
=======
          <TabsContent value="zapier" className="m-0">;
            <ZapierIntegration />;
          </TabsContent>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <TabsContent value="webhooks" className="m-0">;
            <Card>;
              <CardHeader>;
                <CardTitle>Webhook Management</CardTitle>;
                <CardDescription>;
                  Set up webhook endpoints to receive real-time updates from your Zion platform.;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </CardDescription>;
              </CardHeader>;
              <CardContent>;
                <WebhookManager />;
              </CardContent>;
            </Card>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsHub.tsx

            <Card className="mt - 6">;
              <CardHeader>;
                <CardTitle > Synchronization Log</CardTitle>;

========
<<<<<<< HEAD
            <Card className="mt - 6">;
              <CardHeader>;
                <CardTitle > Synchronization Log</CardTitle>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsHub.tsx
                <CardDescription>;
                  View the history of synchronization events between;
                  integrations.;
=======
            ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <Card className="mt-6">;
              <CardHeader>;
                <CardTitle>Synchronization Log</CardTitle>;
                <CardDescription>;
                  View the history of synchronization events between integrations.;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsHub.tsx

    </div>;

<<<<<<< HEAD
  );
}
;

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  );
=======
    </div>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
<<<<<<< HEAD
    </div>);
}
=======
    </div>;
  );}
 space-y-6"> <div className=" flex justify-between items-center"> <div> <h1 className=" text-3xl font-bold">Integrations Hub</h1> <p className=" text-muted-foreground mt-1"> Connect your platform with the tools and services you use every day </p> </div> <div className=" flex gap-2"> <Button variant=" outline">View Documentation</Button> <Button>Connect New Integration</Button> </div> </div> <div className=" grid grid-cols-1 md:grid-cols-3 gap-4"> <Card> <CardHeader className=" pb-2"> <div className=" flex justify-between items-center"> <CardTitle className=" text-lg">Status</CardTitle> <Badge variant=" outline"className=" bg-green-100 text-green-800">Healthy</Badge> </div> </CardHeader> <CardContent> <div className=" space-y-2"> <div className=" flex justify-between text-sm"> <span className=" text-muted-foreground">Connected Services</span> <span className=" font-medium">7 /12</span> </div> <div className=" flex justify-between text-sm"> <span className=" text-muted-foreground">Last Sync</span> <span className=" font-medium">2 mins ago</span> </div> <div className=" flex justify-between text-sm"> <span className=" text-muted-foreground">Pending Webhooks</span> <span className=" font-medium">0</span> </div> </div> </CardContent> </Card> <Card className=" md:col-span-2"> <CardHeader className=" pb-2"> <CardTitle className=" text-lg">Recent Activity</CardTitle> </CardHeader> <CardContent className=" pb-0"> <ul className=" space-y-2 text-sm"> <li className=" flex justify-between items-center pb-2 border-b"> <div> <p className=" font-medium">Slack notification sent</p> <p className=" text-muted-foreground">New job application received</p> </div> <Badge variant=" outline">5m ago</Badge> </li> <li className=" flex justify-between items-center pb-2 border-b"> <div> <p className=" font-medium">Google Calendar sync</p> <p className=" text-muted-foreground">Interview scheduled</p> </div> <Badge variant=" outline">1h ago</Badge> </li> <li className=" flex justify-between items-center"> <div> <p className=" font-medium">Zapier webhook trigger</p> <p className=" text-muted-foreground">Contract signed</p> </div> <Badge variant=" outline">2h ago</Badge> </li> </ul> </CardContent> <CardFooter className=" pt-4"> <Button variant=" outline"className=" w-full">View All Activity</Button> </CardFooter> </Card> </div> <TabsTrigger value="marketplace">Marketplace</TabsTrigger> <TabsTrigger value="zapier">Zapier</TabsTrigger> <TabsTrigger value="webhooks">Webhooks</TabsTrigger> mt-6" > <TabsContent value="marketplace" className="m-0" > <IntegrationCards /> </TabsContent> <TabsContent value="zapier" className="m-0" > <ZapierIntegration /> </TabsContent> <TabsContent value="webhooks" className="m-0" > <Card> <CardHeader> <CardTitle>Webhook Management</CardTitle> <CardDescription> Set up webhook endpoints to receive real-time updates from your Zion platform. </CardDescription> </CardHeader> <CardContent> <WebhookManager /> </CardContent> </Card> <Card className="mt-6" > <CardHeader> <CardTitle>Synchronization Log</CardTitle> <CardDescription> View the history of synchronization events between integrations. </CardDescription> </CardHeader> <CardContent> <IntegrationsSyncLog /> </CardContent> </Card> </TabsContent> </div> </Tabs> </div>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsHub.tsx
=======
    </div>;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  );
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
