<<<<<<< HEAD
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
=======
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
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  Card,
  CardContent,
  CardDescription,
  CardFooter,
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
  CardHeader,
  CardTitle,;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IntegrationCards } from "./IntegrationCards";
import { ZapierIntegration } from "./ZapierIntegration";
import { Badge } from "@/components/ui/badge";

<<<<<<< HEAD
"
import { WebhookManager } from "./WebhookManager";"
import { IntegrationsSyncLog } from "./IntegrationsSyncLog";
=======
<<<<<<< HEAD
import { WebhookManager } from "./WebhookManager";
import { IntegrationsSyncLog } from "./IntegrationsSyncLog";
export function IntegrationsHub() {
  const [activeTab, setActiveTab] = useState($2);
=======
<<<<<<< HEAD
"
import { WebhookManager } from "./WebhookManager";"
=======
export function IntegrationsHub() {
  const [activeTab, setActiveTab] = useState("marketplace");



import { WebhookManager } from "./WebhookManager";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { IntegrationsSyncLog } from "./IntegrationsSyncLog";
<<<<<<< HEAD
export function IntegrationsHub() {;
  const [activeTab, setActiveTab] = useState("marketplace");

>>>>>>> merged-prs-20250907-203621
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Integrations Hub</h1>
          <p className="text-muted-foreground mt-1">
            Connect your platform with the tools and services you use every day
          </p>
        </div>
<<<<<<< HEAD
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <div className="flex gap-2">
          <Button variant="outline">View Documentation</Button>
          <Button>Connect New Integration</Button>
        </div>
<<<<<<< HEAD

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

=======
<<<<<<< HEAD
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
=======
<<<<<<< HEAD

=======
      </div>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      


<<<<<<< HEAD
      
      
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Status</CardTitle>
<<<<<<< HEAD
              <Badge variant="outline" className="bg-green-100 text-green-800">
                Healthy
              </Badge>
              <Badge variant="outline" className="bg-green-100 text-green-800">Healthy</Badge>
<Badge variant="outline" className="bg-green-100 text-green-800">Healthy</Badge>
              <Badge variant="outline" className="bg-green-100 text-green-800">Healthy</Badge>              <Badge variant="outline" className="bg-green-100 text-green-800">Healthy</Badge>
=======
<<<<<<< HEAD
              <Badge variant="outline" className="bg-green-100 text-green-800">Healthy</Badge>
=======
<<<<<<< HEAD
              <Badge variant="outline" className="bg-green-100 text-green-800">Healthy</Badge>
=======
              <Badge variant="outline" className="bg-green-100 text-green-800">
                Healthy
              </Badge>
<<<<<<< HEAD
              <Badge variant="outline" className="bg-green-100 text-green-800">Healthy</Badge>
<Badge variant="outline" className="bg-green-100 text-green-800">Healthy</Badge>
              <Badge variant="outline" className="bg-green-100 text-green-800">Healthy</Badge>              <Badge variant="outline" className="bg-green-100 text-green-800">Healthy</Badge>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
<<<<<<< HEAD
                <span className="text-muted-foreground">
                  Connected Services
                </span>
                <span className="text-muted-foreground">Connected Services</span>
<span className="text-muted-foreground">Connected Services</span>
                <span className="text-muted-foreground">Connected Services</span>                <span className="text-muted-foreground">Connected Services</span>
=======
<<<<<<< HEAD
                <span className="text-muted-foreground">Connected Services</span>
=======
<<<<<<< HEAD
                <span className="text-muted-foreground">Connected Services</span>
=======
                <span className="text-muted-foreground">
                  Connected Services
                </span>
<<<<<<< HEAD
                <span className="text-muted-foreground">Connected Services</span>
<span className="text-muted-foreground">Connected Services</span>
                <span className="text-muted-foreground">Connected Services</span>                <span className="text-muted-foreground">Connected Services</span>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                <span className="font-medium">7 / 12</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Last Sync</span>
                <span className="font-medium">2 mins ago</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Pending Webhooks</span>
                <span className="font-medium">0</span>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

import React, { useState } from "react";""
import { Button } from "@/components/ui/button";"
import {
  // TODO: Implement
}
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,;
"
} from "@/components/ui/card";""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";""
import { IntegrationCards } from "./IntegrationCards";""
import { ZapierIntegration } from "./ZapierIntegration";""
import { Badge } from "@/components/ui/badge";""
import { WebhookManager } from "./WebhookManager";""
import { IntegrationsSyncLog } from "./IntegrationsSyncLog";"
export function IntegrationsHub() {;"
  const [activeTab, setActiveTab] = useState("marketplace");"
export function IntegrationsHub() {"
  const [activeTab, setActiveTab] = useState("marketplace");"
  return ("
    <div className="space-y-6">"
</div>"
      <div className="flex justify-between items-center">"
</div>
        <div>
</div>"
          <h1 className="text-3xl font-bold">Integrations Hub</h1>""
          <p className="text-muted-foreground mt-1">"
</p>
          </p>
        </div>"
    <div className="space-y-6">"
</div>"
      <div className="flex justify-between items-center">"
</div>
        <div>
</div>"
          <h1 className="text-3xl font-bold">Integrations Hub</h1>""
          <p className="text-muted-foreground mt-1">"
</p>
          </p>
        </div>"
        <div className="flex gap-2">"
</div>"
          <Button variant="outline">View Documentation</Button>"
          <Button>Connect New Integration</Button>
        </div>
      </div>

      "
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">"
</div>
        <Card>
</Card>"
          <CardHeader className="pb-2">"
</CardHeader>"
            <div className="flex justify-between items-center">"
</div>"
              <CardTitle className="text-lg">Status</CardTitle>""
              <Badge variant="outline" className="bg-green-100 text-green-800">"
</Badge>
              </Badge>"
              <Badge variant="outline" className="bg-green-100 text-green-800">Healthy</Badge>"
            </div>
          </CardHeader>
          <CardContent>
</CardContent>"
            <div className="space-y-2">"
</div>"
              <div className="flex justify-between text-sm">"
</div>"
                <span className="text-muted-foreground">"
</span>
                </span>"
                <span className="text-muted-foreground">Connected Services</span>""
                <span className="font-medium">7 / 12</span>"
              </div>"
              <div className="flex justify-between text-sm">"
</div>"
                <span className="text-muted-foreground">Last Sync</span>""
                <span className="font-medium">2 mins ago</span>"
              </div>"
              <div className="flex justify-between text-sm">"
</div>"
                <span className="text-muted-foreground">Pending Webhooks</span>""
                <span className="font-medium">0</span>"

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              </div>
            </div>
          </CardContent>
        </Card>
<<<<<<< HEAD

=======
<<<<<<< HEAD
        <Card className="md:col-span-2">
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        


<<<<<<< HEAD
        
        
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <Card className="md:col-span-2">

        <Card className="md:col-span-2">

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
                  <p className="text-muted-foreground">New job application received</p>
<p className="text-muted-foreground">New job application received</p>
                  <p className="text-muted-foreground">New job application received</p>                  <p className="text-muted-foreground">New job application received</p>
=======
<<<<<<< HEAD
                  <p className="text-muted-foreground">New job application received</p>
=======
<<<<<<< HEAD
                  <p className="text-muted-foreground">New job application received</p>
=======
                  <p className="text-muted-foreground">
                    New job application received
                  </p>
<<<<<<< HEAD
                  <p className="text-muted-foreground">New job application received</p>
<p className="text-muted-foreground">New job application received</p>
                  <p className="text-muted-foreground">New job application received</p>                  <p className="text-muted-foreground">New job application received</p>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
            <Button variant="outline" className="w-full">View All Activity</Button>
          </CardFooter>
        </Card>
      </div>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 md: w-[400px]">
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
          <TabsTrigger value="zapier">Zapier</TabsTrigger>
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
        </TabsList>
        <div className="mt-6">
          <TabsContent value="marketplace" className="m-0">
            <IntegrationCards />
          </TabsContent>
          <TabsContent value="zapier" className="m-0">
            <ZapierIntegration />
          </TabsContent>
          <TabsContent value="webhooks" className="m-0">
=======
<<<<<<< HEAD

      


            <Button variant="outline" className="w-full">View All Activity</Button>
          </CardFooter>
        </Card>
      </div>
      
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <Button variant="outline" className="w-full">
              View All Activity
            </Button>
          </CardFooter>
        </Card>

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

      


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">

        <TabsList className="grid grid-cols-3 md: w-[400px]">
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
          <TabsTrigger value="zapier">Zapier</TabsTrigger>

          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
        </TabsList>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        


<<<<<<< HEAD
        
        
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <div className="mt-6">

        <div className="mt-6">

          <TabsContent value="marketplace" className="m-0">
            <IntegrationCards />
          </TabsContent>

<<<<<<< HEAD
          <TabsContent value="webhooks" className="m-0">

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
          <TabsContent value="zapier" className="m-0">
            <ZapierIntegration />
          </TabsContent>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          
          <TabsContent value="zapier" className="m-0">
            <ZapierIntegration />
          </TabsContent>
          
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <TabsContent value="webhooks" className="m-0">

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <Card>
              <CardHeader>
                <CardTitle>Webhook Management</CardTitle>
                <CardDescription>
<<<<<<< HEAD

            <Card className="mt-6">

              <CardHeader>
                <CardTitle>Synchronization Log</CardTitle>
                <CardDescription>

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

            <Card className="mt-6">
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
                  Set up webhook endpoints to receive real-time updates from your Zion platform.
=======
                  Set up webhook endpoints to receive real-time updates from
                  your Zion platform.
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                </CardDescription>
              </CardHeader>
              <CardContent>
                <WebhookManager />
              </CardContent>
            </Card>
<<<<<<< HEAD
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Synchronization Log</CardTitle>
                <CardDescription>
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

              <CardHeader>
                <CardTitle>Synchronization Log</CardTitle>
                <CardDescription>

<<<<<<< HEAD
=======

<<<<<<< HEAD
            
            
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Synchronization Log</CardTitle>
                <CardDescription>
<<<<<<< HEAD
                  View the history of synchronization events between
                  integrations.
                  View the history of synchronization events between integrations.

=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
                  View the history of synchronization events between integrations.
=======
                  View the history of synchronization events between
                  integrations.
<<<<<<< HEAD
                  View the history of synchronization events between integrations.

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                </CardDescription>
              </CardHeader>
              <CardContent>
                <IntegrationsSyncLog />

        "
        <Card className="md:col-span-2">"
</Card>"
          <CardHeader className="pb-2">"
</CardHeader>"
            <CardTitle className="text-lg">Recent Activity</CardTitle>"
          </CardHeader>"
          <CardContent className="pb-0">"
</CardContent>"
            <ul className="space-y-2 text-sm">"
</ul>"
              <li className="flex justify-between items-center pb-2 border-b">"
</li>
                <div>
</div>"
                  <p className="font-medium">Slack notification sent</p>""
                  <p className="text-muted-foreground">"
</p>
                  </p>"
                  <p className="text-muted-foreground">New job application received</p>"
                </div>"
                <Badge variant="outline">5m ago</Badge>"
              </li>"
              <li className="flex justify-between items-center pb-2 border-b">"
</li>
                <div>
</div>"
                  <p className="font-medium">Google Calendar sync</p>""
                  <p className="text-muted-foreground">Interview scheduled</p>"
                </div>"
                <Badge variant="outline">1h ago</Badge>"
              </li>"
              <li className="flex justify-between items-center">"
</li>
                <div>
</div>"
                  <p className="font-medium">Zapier webhook trigger</p>""
                  <p className="text-muted-foreground">Contract signed</p>"
                </div>"
                <Badge variant="outline">2h ago</Badge>"
              </li>
            </ul>
          </CardContent>"
          <CardFooter className="pt-4">"
</CardFooter>"
            <Button variant="outline" className="w-full">"
</Button>
            </Button>
          </CardFooter>
        </Card>
      </div>

"
            <Button variant="outline" className="w-full">View All Activity</Button>"
          </CardFooter>
        </Card>
      </div>
      "
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">"
</Tabs>"
        <TabsList className="grid grid-cols-3 md: w-[400px]">"
</TabsList>"
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>""
          <TabsTrigger value="zapier">Zapier</TabsTrigger>""
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>"
        </TabsList>

        "
        <div className="mt-6">"
</div>"
          <TabsContent value="marketplace" className="m-0">"
</TabsContent>
            <IntegrationCards />
</IntegrationCards>
          </TabsContent>

          "
          <TabsContent value="zapier" className="m-0">"
</TabsContent>
            <ZapierIntegration />
</ZapierIntegration>
          </TabsContent>

"
          <TabsContent value="webhooks" className="m-0">"
</TabsContent>
            <Card>
</Card>
              <CardHeader>
</CardHeader>
                <CardTitle>Webhook Management</CardTitle>
                <CardDescription>
</CardDescription>
                </CardDescription>
              </CardHeader>
              <CardContent>
</CardContent>

                <WebhookManager />
</WebhookManager>
              </CardContent>

            </Card>

            "
            <Card className="mt-6">"
</Card>
              <CardHeader>
</CardHeader>
                <CardTitle>Synchronization Log</CardTitle>
                <CardDescription>
</CardDescription>
                </CardDescription>
              </CardHeader>
              <CardContent>
</CardContent>

                <IntegrationsSyncLog />
</IntegrationsSyncLog>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  )
<<<<<<< HEAD
=======
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;"
import { IntegrationCards } from "./IntegrationCards",;"
import { ZapierIntegration } from "./ZapierIntegration",;"
import { Badge } from "@/components/ui/badge",;"
import { WebhookManager } from "./WebhookManager",;"
import { IntegrationsSyncLog } from "./IntegrationsSyncLog",;"
=======

<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD

  )
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export function IntegrationsHub() {;
  const [activeTab, setActiveTab] = useState("marketplace");
  return (

  );
}
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======

>>>>>>> origin/chore/fix-lint-and-merge
export function IntegrationsHub() {;
  const [activeTab, setActiveTab] = useState("marketplace");
  return (

  );
}

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
export function IntegrationsHub() {;
  const [activeTab, setActiveTab] = useState("marketplace");

=======
;
export function IntegrationsHub() {;
  const [activeTab, setActiveTab] = useState("marketplace"),;
  ;
  return (;
export function IntegrationsHub() {;
  const [activeTab, setActiveTab] = useState("marketplace");
<<<<<<< HEAD

=======
  return (;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className="space-y-6">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <div className="flex justify-between items-center">;
        <div>;"
          <h1 className="text-3xl font-bold">Integrations Hub</h1>;"
          <p className="text-muted-foreground mt-1">;
            Connect your platform with the tools and services you use every day;
          </p>;
        </div>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
        ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <div className="flex gap-2">;

          <Button variant="outline">View Documentation</Button>;
          <Button>Connect New Integration</Button>;
        </div>;
      </div>;
<<<<<<< HEAD

  return (

                  </p>;
                </div>;"
                <Badge variant="outline">5m ago</Badge>;
=======
<<<<<<< HEAD
      ;
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;
        <Card>;
          <CardHeader className="pb-2">;
            <div className="flex justify-between items-center">;
              <CardTitle className="text-lg">Status</CardTitle>;
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
              </div>;
            </div>;
          </CardContent>;
        </Card>;
<<<<<<< HEAD
=======

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    New job application received;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  </p>;
                </div>;"
                <Badge variant="outline">5m ago</Badge>;
<<<<<<< HEAD
=======
              </li>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
                </div>;
                <Badge variant="outline">2h ago</Badge>;
              </li>;
            </ul>;
          </CardContent>;
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

          <CardFooter className="pt - 4">;
            <Button variant="outline" className="w - full">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

              View All Activity;
            </Button>;
          </CardFooter>;
        </Card>;
<<<<<<< HEAD
      </div>;
=======
<<<<<<< HEAD
      </div>;
=======
      </div>;

      <Tabs value={active_tab} onValueChange={setActiveTab} className="w - full">;
        <TabsList className="grid grid - cols - 3 md: w-[400px]">;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>;
          <TabsTrigger value="zapier">Zapier</TabsTrigger>;
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>;
        </TabsList>;
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                </CardDescription>;
              </CardHeader>;
              <CardContent>;
                <WebhookManager />;
              </CardContent>;
            </Card>;
<<<<<<< HEAD
            ;
            <Card className="mt-6">;
              <CardHeader>;
                <CardTitle>Synchronization Log</CardTitle>;
                <CardDescription>;
                  View the history of synchronization events between integrations.;
=======

            <Card className="mt - 6">;
              <CardHeader>;
                <CardTitle > Synchronization Log</CardTitle>;

                <CardDescription>;
                  View the history of synchronization events between;
                  integrations.;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

  );
    </div>);
}
    </div>;
  );}
 space-y-6"> <div className=" flex justify-between items-center"> <div> <h1 className=" text-3xl font-bold">Integrations Hub</h1> <p className=" text-muted-foreground mt-1"> Connect your platform with the tools and services you use every day </p> </div> <div className=" flex gap-2"> <Button variant=" outline">View Documentation</Button> <Button>Connect New Integration</Button> </div> </div> <div className=" grid grid-cols-1 md:grid-cols-3 gap-4"> <Card> <CardHeader className=" pb-2"> <div className=" flex justify-between items-center"> <CardTitle className=" text-lg">Status</CardTitle> <Badge variant=" outline"className=" bg-green-100 text-green-800">Healthy</Badge> </div> </CardHeader> <CardContent> <div className=" space-y-2"> <div className=" flex justify-between text-sm"> <span className=" text-muted-foreground">Connected Services</span> <span className=" font-medium">7 /12</span> </div> <div className=" flex justify-between text-sm"> <span className=" text-muted-foreground">Last Sync</span> <span className=" font-medium">2 mins ago</span> </div> <div className=" flex justify-between text-sm"> <span className=" text-muted-foreground">Pending Webhooks</span> <span className=" font-medium">0</span> </div> </div> </CardContent> </Card> <Card className=" md:col-span-2"> <CardHeader className=" pb-2"> <CardTitle className=" text-lg">Recent Activity</CardTitle> </CardHeader> <CardContent className=" pb-0"> <ul className=" space-y-2 text-sm"> <li className=" flex justify-between items-center pb-2 border-b"> <div> <p className=" font-medium">Slack notification sent</p> <p className=" text-muted-foreground">New job application received</p> </div> <Badge variant=" outline">5m ago</Badge> </li> <li className=" flex justify-between items-center pb-2 border-b"> <div> <p className=" font-medium">Google Calendar sync</p> <p className=" text-muted-foreground">Interview scheduled</p> </div> <Badge variant=" outline">1h ago</Badge> </li> <li className=" flex justify-between items-center"> <div> <p className=" font-medium">Zapier webhook trigger</p> <p className=" text-muted-foreground">Contract signed</p> </div> <Badge variant=" outline">2h ago</Badge> </li> </ul> </CardContent> <CardFooter className=" pt-4"> <Button variant=" outline"className=" w-full">View All Activity</Button> </CardFooter> </Card> </div> <TabsTrigger value="marketplace">Marketplace</TabsTrigger> <TabsTrigger value="zapier">Zapier</TabsTrigger> <TabsTrigger value="webhooks">Webhooks</TabsTrigger> mt-6" > <TabsContent value="marketplace" className="m-0" > <IntegrationCards /> </TabsContent> <TabsContent value="zapier" className="m-0" > <ZapierIntegration /> </TabsContent> <TabsContent value="webhooks" className="m-0" > <Card> <CardHeader> <CardTitle>Webhook Management</CardTitle> <CardDescription> Set up webhook endpoints to receive real-time updates from your Zion platform. </CardDescription> </CardHeader> <CardContent> <WebhookManager /> </CardContent> </Card> <Card className="mt-6" > <CardHeader> <CardTitle>Synchronization Log</CardTitle> <CardDescription> View the history of synchronization events between integrations. </CardDescription> </CardHeader> <CardContent> <IntegrationsSyncLog /> </CardContent> </Card> </TabsContent> </div> </Tabs> </div>) 
>>>>>>> merged-prs-20250907-203621
}
    </div>;
  );
}
<<<<<<< HEAD
;
=======
;
=======
    </div>;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  );
=======
    </div>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
