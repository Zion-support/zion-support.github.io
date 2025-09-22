
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
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import React, { useState } from "react";"
import { Button } from "@/components/ui/button";
import {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  Card,
  CardContent,
  CardDescription,
  CardFooter,
CardHeader,;
  CardTitle,;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

"
import { WebhookManager } from "./WebhookManager";"
import { IntegrationsSyncLog } from "./IntegrationsSyncLog";
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

export function IntegrationsHub() {
  const [activeTab, setActiveTab] = useState("marketplace");

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <div className="flex gap-2">
          <Button variant="outline">View Documentation</Button>
          <Button>Connect New Integration</Button>
        </div>
<<<<<<< HEAD
      </div>
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
=======
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      </div>      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Status</CardTitle>
              <Badge variant="outline" className="bg-green-100 text-green-800">
                Healthy
              </Badge>
              <Badge variant="outline" className="bg-green-100 text-green-800">Healthy</Badge>
<Badge variant="outline" className="bg-green-100 text-green-800">Healthy</Badge>
              <Badge variant="outline" className="bg-green-100 text-green-800">Healthy</Badge>              <Badge variant="outline" className="bg-green-100 text-green-800">Healthy</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  Connected Services
                </span>
                <span className="text-muted-foreground">Connected Services</span>
<span className="text-muted-foreground">Connected Services</span>
                <span className="text-muted-foreground">Connected Services</span>                <span className="text-muted-foreground">Connected Services</span>
                <span className="font-medium">7 / 12</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Last Sync</span>
                <span className="font-medium">2 mins ago</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Pending Webhooks</span>
                <span className="font-medium">0</span>

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

              </div>
            </div>
          </CardContent>
        </Card>
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <Card className="md:col-span-2">
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<p className="text-muted-foreground">New job application received</p>
                  <p className="text-muted-foreground">New job application received</p>                  <p className="text-muted-foreground">New job application received</p>
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
      </div>
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            <Button variant="outline" className="w-full">View All Activity</Button>
          </CardFooter>
        </Card>
      </div>

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
=======
      </div>      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
<Button variant="outline" className="w-full">View All Activity</Button>
          </CardFooter>
        </Card>
      </div>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      </div>      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
        </TabsList>
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <div className="mt-6">
=======

"
        <div className="mt-6">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <div className="mt-6">
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <TabsContent value="marketplace" className="m-0">
            <IntegrationCards />
          </TabsContent>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <TabsContent value="zapier" className="m-0">
            <ZapierIntegration />
          </TabsContent>
<TabsContent value="zapier" className="m-0">
            <ZapierIntegration />
          </TabsContent>

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <TabsContent value="webhooks" className="m-0">

=======
        </TabsList>          <TabsContent value="webhooks" className="m-0">
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          <TabsContent value="webhooks" className="m-0">
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
        </TabsList>          <TabsContent value="webhooks" className="m-0">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            <Card>
              <CardHeader>
                <CardTitle>Webhook Management</CardTitle>
                <CardDescription>
Set up webhook endpoints to receive real-time updates from your Zion platform.                  Set up webhook endpoints to receive real-time updates from your Zion platform.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <WebhookManager />
              </CardContent>
<<<<<<< HEAD
            </Card>
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
View the history of synchronization events between integrations.                  View the history of synchronization events between integrations.
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
  );
}

)
export function IntegrationsHub() {;
  const [activeTab, setActiveTab] = useState("marketplace");
  return (

  );
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

=======
  return (;

;
export function IntegrationsHub() {;
  const [activeTab, setActiveTab] = useState("marketplace"),;
  ;
  return (;
export function IntegrationsHub() {;
  const [activeTab, setActiveTab] = useState("marketplace");
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

        <div className="flex gap-2">;
=======
"
        <div className="flex gap-2">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <Button variant="outline">View Documentation</Button>;
          <Button>Connect New Integration</Button>;
        </div>;
      </div>;

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;
        <Card>;"
          <CardHeader className="pb-2">;"
            <div className="flex justify-between items-center">;"
              <CardTitle className="text-lg">Status</CardTitle>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              <Badge variant="outline" className="bg-green-100 text-green-800">;
;
<<<<<<< HEAD
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
export function IntegrationsHub() {;
  const [activeTab, setActiveTab] = useState("marketplace");
  return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                Healthy;
              </Badge>;
            </div>;
          </CardHeader>;
<CardContent>;              </div>;
            </div>;
          </CardContent>;
        </Card>;                    New job application received;
                  </p>;
                </div>;"
                <Badge variant="outline">5m ago</Badge>;
</li>;                </div>;
                <Badge variant="outline">2h ago</Badge>;
              </li>;
            </ul>;
          </CardContent>;

<<<<<<< HEAD
          <CardFooter className="pt-4">;
            <Button variant="outline" className="w-full">;

              View All Activity;
            </Button>;
          </CardFooter>;
        </Card>;
      </div>;

<Tabs value={active_tab} onValueChange={setActiveTab} className="w-full">;
        <TabsList className="grid grid - cols-3 md: w-[400px]">;                </CardDescription>;
=======
      <Tabs value={active_tab} onValueChange={setActiveTab} className="w - full">;
        <TabsList className="grid grid - cols - 3 md: w-[400px]">;

<Tabs value={active_tab} onValueChange={setActiveTab} className="w - full">;
        <TabsList className="grid grid - cols - 3 md: w-[400px]">;
          <CardFooter className="pt-4">;
            <Button variant="outline" className="w-full">View All Activity</Button>;
          </CardFooter>;
        </Card>;
      </div>;
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;
        <TabsList className="grid grid-cols-3 md: w-[400px]">;
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
                </CardDescription>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              </CardHeader>;
              <CardContent>;
                <WebhookManager />;
              </CardContent>;
</Card>;                </CardDescription>;
              </CardHeader>;
              <CardContent>;
                <IntegrationsSyncLog />;

    </div>"
    <div className="space-y-6">;"
</div>"
      <div className="flex justify-between items-center">;"
</div>
        <div>;
</div>"
          <h1 className="text-3xl font-bold">Integrations Hub</h1>;""
          <p className="text-muted-foreground mt-1">;"
</p>
          </p>;
        </div>;"
        <div className="flex gap-2">;"
</div>"
          <Button variant="outline">View Documentation</Button>;"
          <Button>Connect New Integration</Button>;
        </div>;
      </div>;"
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;"
</div>
        <Card>;
</Card>"
          <CardHeader className="pb-2">;"
</CardHeader>"
            <div className="flex justify-between items-center">;"
</div>"
              <CardTitle className="text-lg">Status</CardTitle>;""
              <Badge variant="outline" className="bg-green-100 text-green-800">;"
</Badge>
              </Badge>;
            </div>;
          </CardHeader>;
          <CardContent>;
</CardContent>
"
            <div className="space - y-2">;"
</div>"
              <div className="flex justify - between text - sm">;"
</div>"
                <span className="text - muted - foreground">;"
</span>
                </span>;"
                <span className="font - medium">7 / 12</span>;"
              </div>;"
              <div className="flex justify - between text - sm">;"
</div>"
                <span className="text - muted - foreground">Last Sync</span>;""
                <span className="font - medium">2 mins ago</span>;"
              </div>;"
              <div className="flex justify - between text - sm">;"
</div>"
                <span className="text - muted - foreground">Pending Webhooks</span>;""
                <span className="font - medium">0</span>;"
              </div>;
            </div>;
          </CardContent>;
        </Card>;"
        <Card className="md:col - span - 2">;"
</Card>"
          <CardHeader className="pb - 2">;"
</CardHeader>"
            <CardTitle className="text - lg">Recent Activity</CardTitle>;"
          </CardHeader>;"
          <CardContent className="pb - 0">;"
</CardContent>"
            <ul className="space - y-2 text - sm">;"
</ul>"
              <li className="flex justify - between items - center pb - 2 border - b">;"
</li>
                <div>;
</div>"
                  <p className="font - medium">Slack notification sent</p>;""
                  <p className="text - muted - foreground">;"
</p>
                  </p>;
                </div>;"
                <Badge variant="outline">5m ago</Badge>;"
              </li>;"
              <li className="flex justify - between items - center pb - 2 border - b">;"
</li>
                <div>;
</div>"
                  <p className="font - medium">Google Calendar sync</p>;""
                  <p className="text - muted - foreground">Interview scheduled</p>;"
                </div>;"
                <Badge variant="outline">1h ago</Badge>;"
              </li>;"
              <li className="flex justify - between items - center">;"
</li>
                <div>;
</div>"
                  <p className="font - medium">Zapier webhook trigger</p>;""
                  <p className="text - muted - foreground">Contract signed</p>;"
                </div>;"
                <Badge variant="outline">2h ago</Badge>;"
              </li>;
            </ul>;
          </CardContent>;"
          <CardFooter className="pt - 4">;"
</CardFooter>"
            <Button variant="outline" className="w - full">;"
</Button>
            </Button>;
          </CardFooter>;
        </Card>;
      </div>;"
      <Tabs value={active_tab} onValueChange={setActiveTab} className="w - full">;"
</Tabs>"
        <TabsList className="grid grid - cols - 3 md: w-[400px]">;"
</TabsList>"
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>;""
          <TabsTrigger value="zapier">Zapier</TabsTrigger>;""
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>;"
        </TabsList>;"
        <div className="mt - 6">;"
</div>"
          <TabsContent value="marketplace" className="m - 0">;"
</TabsContent>
            <IntegrationCards />;
</IntegrationCards>
          </TabsContent>;"
          <TabsContent value="zapier" className="m - 0">;"
</TabsContent>
            <ZapierIntegration />;
</ZapierIntegration>
          </TabsContent>;"
          <TabsContent value="webhooks" className="m - 0">;"
</TabsContent>
            <Card>;
</Card>
              <CardHeader>;
</CardHeader>
                <CardTitle > Webhook Management</CardTitle>;
                <CardDescription>;
</CardDescription>
                </CardDescription>;
              </CardHeader>;
              <CardContent>;
</CardContent>

                <WebhookManager />;
</WebhookManager>
              </CardContent>;

            </Card>;"
            <Card className="mt - 6">;"
</Card>
              <CardHeader>;
</CardHeader>
                <CardTitle > Synchronization Log</CardTitle>;
                <CardDescription>;
</CardDescription>
                </CardDescription>;
              </CardHeader>;
              <CardContent>;
</CardContent>

                <IntegrationsSyncLog />;
</IntegrationsSyncLog>
              </CardContent>;
            </Card>;
          </TabsContent>;
        </div>;
      </Tabs>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

    </div>;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
</div>;
  );}"
 space-y-6"> <div className=" flex justify-between items-center"> <div> <h1 className=" text-3xl font-bold">Integrations Hub</h1> <p className=" text-muted-foreground mt-1"> Connect your platform with the tools and services you use every day </p> </div> <div className=" flex gap-2"> <Button variant=" outline">View Documentation</Button> <Button>Connect New Integration</Button> </div> </div> <div className=" grid grid-cols-1 md:grid-cols-3 gap-4"> <Card> <CardHeader className=" pb-2"> <div className=" flex justify-between items-center"> <CardTitle className=" text-lg">Status</CardTitle> <Badge variant=" outline"className=" bg-green-100 text-green-800">Healthy</Badge> </div> </CardHeader> <CardContent> <div className=" space-y-2"> <div className=" flex justify-between text-sm"> <span className=" text-muted-foreground">Connected Services</span> <span className=" font-medium">7 /12</span> </div> <div className=" flex justify-between text-sm"> <span className=" text-muted-foreground">Last Sync</span> <span className=" font-medium">2 mins ago</span> </div> <div className=" flex justify-between text-sm"> <span className=" text-muted-foreground">Pending Webhooks</span> <span className=" font-medium">0</span> </div> </div> </CardContent> </Card> <Card className=" md:col-span-2"> <CardHeader className=" pb-2"> <CardTitle className=" text-lg">Recent Activity</CardTitle> </CardHeader> <CardContent className=" pb-0"> <ul className=" space-y-2 text-sm"> <li className=" flex justify-between items-center pb-2 border-b"> <div> <p className=" font-medium">Slack notification sent</p> <p className=" text-muted-foreground">New job application received</p> </div> <Badge variant=" outline">5m ago</Badge> </li> <li className=" flex justify-between items-center pb-2 border-b"> <div> <p className=" font-medium">Google Calendar sync</p> <p className=" text-muted-foreground">Interview scheduled</p> </div> <Badge variant=" outline">1h ago</Badge> </li> <li className=" flex justify-between items-center"> <div> <p className=" font-medium">Zapier webhook trigger</p> <p className=" text-muted-foreground">Contract signed</p> </div> <Badge variant=" outline">2h ago</Badge> </li> </ul> </CardContent> <CardFooter className=" pt-4"> <Button variant=" outline"className=" w-full">View All Activity</Button> </CardFooter> </Card> </div> <TabsTrigger value="marketplace">Marketplace</TabsTrigger> <TabsTrigger value="zapier">Zapier</TabsTrigger> <TabsTrigger value="webhooks">Webhooks</TabsTrigger> mt-6" > <TabsContent value="marketplace" className="m-0" > <IntegrationCards /> </TabsContent> <TabsContent value="zapier" className="m-0" > <ZapierIntegration /> </TabsContent> <TabsContent value="webhooks" className="m-0" > <Card> <CardHeader> <CardTitle>Webhook Management</CardTitle> <CardDescription> Set up webhook endpoints to receive real-time updates from your Zion platform. </CardDescription> </CardHeader> <CardContent> <WebhookManager /> </CardContent> </Card> <Card className="mt-6" > <CardHeader> <CardTitle>Synchronization Log</CardTitle> <CardDescription> View the history of synchronization events between integrations. </CardDescription> </CardHeader> <CardContent> <IntegrationsSyncLog /> </CardContent> </Card> </TabsContent> </div> </Tabs> </div>) 
}
    </div>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  );
}
;
  );
}
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
=======
  );
}
;  );  );
}
;

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
  return ("
    <div className="space-y-6">"
</div>"
      <div className="flex justify-between items-center">"
</div>
        <div>
          <h1 className="text-3xl font-bold">Integrations Hub</h1>""
          <p className="text-muted-foreground mt-1">"
</p>
        <div className="flex gap-2">"
          <Button variant="outline">View Documentation"
          <Button>Connect New Integration

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">"
        <Card>
          <CardHeader className="pb-2">"
              <CardTitle className="text-lg">Status""
              <Badge variant="outline" className="bg-green-100 text-green-800">"

              <Badge variant="outline" className="bg-green-100 text-green-800">Healthy"
          <CardContent>
            <div className="space-y-2">"
              <div className="flex justify-between text-sm">"
                <span className="text-muted-foreground">"
</span>
                </span>"
                <span className="text-muted-foreground">Connected Services</span>""
                <span className="font-medium">7 / 12</span>"
                <span className="text-muted-foreground">Last Sync</span>""
                <span className="font-medium">2 mins ago</span>"
                <span className="text-muted-foreground">Pending Webhooks</span>""
                <span className="font-medium">0</span>"

        <Card className="md:col-span-2">"
            <CardTitle className="text-lg">Recent Activity"
          <CardContent className="pb-0">"
            <ul className="space-y-2 text-sm">"
</ul>"
              <li className="flex justify-between items-center pb-2 border-b">"
</li>
                  <p className="font-medium">Slack notification sent</p>""
                  <p className="text-muted-foreground">"
                  </p>"
                  <p className="text-muted-foreground">New job application received</p>"
                <Badge variant="outline">5m ago"
              </li>"
                  <p className="font-medium">Google Calendar sync</p>""
                  <p className="text-muted-foreground">Interview scheduled</p>"
                <Badge variant="outline">1h ago"
              <li className="flex justify-between items-center">"
                  <p className="font-medium">Zapier webhook trigger</p>""
                  <p className="text-muted-foreground">Contract signed</p>"
                <Badge variant="outline">2h ago"
            </ul>
          <CardFooter className="pt-4">"
            <Button variant="outline" className="w-full">"

            <Button variant="outline" className="w-full">View All Activity"
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">"
        <TabsList className="grid grid-cols-3 md: w-[400px]">"
          <TabsTrigger value="marketplace">Marketplace""
          <TabsTrigger value="zapier">Zapier""
          <TabsTrigger value="webhooks">Webhooks"

        <div className="mt-6">"
          <TabsContent value="marketplace" className="m-0">"

            <IntegrationCards />

          <TabsContent value="zapier" className="m-0">"

            <ZapierIntegration />

          <TabsContent value="webhooks" className="m-0">"

              <CardHeader>

                <CardTitle>Webhook Management
                <CardDescription>

                <WebhookManager />

            <Card className="mt-6">"

                <CardTitle>Synchronization Log

                <IntegrationsSyncLog />

    <div className="space-y-6">;"
      <div className="flex justify-between items-center">;"
        <div>;
          <h1 className="text-3xl font-bold">Integrations Hub</h1>;""
          <p className="text-muted-foreground mt-1">;"
          </p>;
        </div>;"
        <div className="flex gap-2">;"
          <Button variant="outline">View Documentation;"
          <Button>Connect New Integration;
        </div>;
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;"
        <Card>;
          <CardHeader className="pb-2">;"
              <CardTitle className="text-lg">Status;""
              <Badge variant="outline" className="bg-green-100 text-green-800">;"

              ;
          <CardContent>;

            <div className="space - y-2">;"
              <div className="flex justify - between text - sm">;"
                <span className="text - muted - foreground">;"
                </span>;"
                <span className="font - medium">7 / 12</span>;"
                <span className="text - muted - foreground">Last Sync</span>;""
                <span className="font - medium">2 mins ago</span>;"
                <span className="text - muted - foreground">Pending Webhooks</span>;""
                <span className="font - medium">0</span>;"
        ;"
        <Card className="md:col - span - 2">;"
          <CardHeader className="pb - 2">;"
            <CardTitle className="text - lg">Recent Activity;"
          <CardContent className="pb - 0">;"
            <ul className="space - y-2 text - sm">;"
              <li className="flex justify - between items - center pb - 2 border - b">;"
                  <p className="font - medium">Slack notification sent</p>;""
                  <p className="text - muted - foreground">;"
                <Badge variant="outline">5m ago;"
              </li>;"
                  <p className="font - medium">Google Calendar sync</p>;""
                  <p className="text - muted - foreground">Interview scheduled</p>;"
                <Badge variant="outline">1h ago;"
              <li className="flex justify - between items - center">;"
                  <p className="font - medium">Zapier webhook trigger</p>;""
                  <p className="text - muted - foreground">Contract signed</p>;"
                <Badge variant="outline">2h ago;"
              </li>;
            </ul>;
          <CardFooter className="pt - 4">;"
            <Button variant="outline" className="w - full">;"

      <Tabs value={active_tab} onValueChange={setActiveTab} className="w - full">;"
        <TabsList className="grid grid - cols - 3 md: w-[400px]">;"
          <TabsTrigger value="marketplace">Marketplace;""
          <TabsTrigger value="zapier">Zapier;""
          <TabsTrigger value="webhooks">Webhooks;"
        <div className="mt - 6">;"
          <TabsContent value="marketplace" className="m - 0">;"

            <IntegrationCards />;

          <TabsContent value="zapier" className="m - 0">;"

            <ZapierIntegration />;

          <TabsContent value="webhooks" className="m - 0">;"

              <CardHeader>;

                <CardTitle > Webhook Management;
                <CardDescription>;

                <WebhookManager />;

            <Card className="mt - 6">;"

                <CardTitle > Synchronization Log;

                <IntegrationsSyncLog />;

    </div>;)
    </div>);
 space-y-6"> <div className=" flex justify-between items-center"> <div> <h1 className=" text-3xl font-bold">Integrations Hub</h1> <p className=" text-muted-foreground mt-1"> Connect your platform with the tools and services you use every day </p> </div> <div className=" flex gap-2"> <Button variant=" outline">View Documentation <Button>Connect New Integration </div> </div> <div className=" grid grid-cols-1 md:grid-cols-3 gap-4"> <Card> <CardHeader className=" pb-2"> <div className=" flex justify-between items-center"> <CardTitle className=" text-lg">Status <Badge variant=" outline"className=" bg-green-100 text-green-800">Healthy </div>  <CardContent> <div className=" space-y-2"> <div className=" flex justify-between text-sm"> <span className=" text-muted-foreground">Connected Services</span> <span className=" font-medium">7 /12</span> </div> <div className=" flex justify-between text-sm"> <span className=" text-muted-foreground">Last Sync</span> <span className=" font-medium">2 mins ago</span> </div> <div className=" flex justify-between text-sm"> <span className=" text-muted-foreground">Pending Webhooks</span> <span className=" font-medium">0</span> </div> </div>   <Card className=" md:col-span-2"> <CardHeader className=" pb-2"> <CardTitle className=" text-lg">Recent Activity  <CardContent className=" pb-0"> <ul className=" space-y-2 text-sm"> <li className=" flex justify-between items-center pb-2 border-b"> <div> <p className=" font-medium">Slack notification sent</p> <p className=" text-muted-foreground">New job application received</p> </div> <Badge variant=" outline">5m ago </li> <li className=" flex justify-between items-center pb-2 border-b"> <div> <p className=" font-medium">Google Calendar sync</p> <p className=" text-muted-foreground">Interview scheduled</p> </div> <Badge variant=" outline">1h ago </li> <li className=" flex justify-between items-center"> <div> <p className=" font-medium">Zapier webhook trigger</p> <p className=" text-muted-foreground">Contract signed</p> </div> <Badge variant=" outline">2h ago </li> </ul>  <CardFooter className=" pt-4"> <Button variant=" outline"className=" w-full">View All Activity   </div> <TabsTrigger value="marketplace">Marketplace <TabsTrigger value="zapier">Zapier <TabsTrigger value="webhooks">Webhooks mt-6" > <TabsContent value="marketplace" className="m-0" > <IntegrationCards />  <TabsContent value="zapier" className="m-0" > <ZapierIntegration />  <TabsContent value="webhooks" className="m-0" > <Card> <CardHeader> <CardTitle>Webhook Management <CardDescription> Set up webhook endpoints to receive real-time updates from your Zion platform.   <CardContent> <WebhookManager />   <Card className="mt-6" > <CardHeader> <CardTitle>Synchronization Log <CardDescription> View the history of synchronization events between integrations.   <CardContent> <IntegrationsSyncLog />    </div>  </div>)"
pr-12325

    </div>;)
    </div>);
    </div>);
    </div>;"
 space-y-6"> <div className=" flex justify-between items-center"> <div> <h1 className=" text-3xl font-bold">Integrations Hub</h1> <p className=" text-muted-foreground mt-1"> Connect your platform with the tools and services you use every day </p> </div> <div className=" flex gap-2"> <Button variant=" outline">View Documentation</Button> <Button>Connect New Integration</Button> </div> </div> <div className=" grid grid-cols-1 md:grid-cols-3 gap-4"> <Card> <CardHeader className=" pb-2"> <div className=" flex justify-between items-center"> <CardTitle className=" text-lg">Status</CardTitle> <Badge variant=" outline"className=" bg-green-100 text-green-800">Healthy</Badge> </div> </CardHeader> <CardContent> <div className=" space-y-2"> <div className=" flex justify-between text-sm"> <span className=" text-muted-foreground">Connected Services</span> <span className=" font-medium">7 /12</span> </div> <div className=" flex justify-between text-sm"> <span className=" text-muted-foreground">Last Sync</span> <span className=" font-medium">2 mins ago</span> </div> <div className=" flex justify-between text-sm"> <span className=" text-muted-foreground">Pending Webhooks</span> <span className=" font-medium">0</span> </div> </div> </CardContent> </Card> <Card className=" md:col-span-2"> <CardHeader className=" pb-2"> <CardTitle className=" text-lg">Recent Activity</CardTitle> </CardHeader> <CardContent className=" pb-0"> <ul className=" space-y-2 text-sm"> <li className=" flex justify-between items-center pb-2 border-b"> <div> <p className=" font-medium">Slack notification sent</p> <p className=" text-muted-foreground">New job application received</p> </div> <Badge variant=" outline">5m ago</Badge> </li> <li className=" flex justify-between items-center pb-2 border-b"> <div> <p className=" font-medium">Google Calendar sync</p> <p className=" text-muted-foreground">Interview scheduled</p> </div> <Badge variant=" outline">1h ago</Badge> </li> <li className=" flex justify-between items-center"> <div> <p className=" font-medium">Zapier webhook trigger</p> <p className=" text-muted-foreground">Contract signed</p> </div> <Badge variant=" outline">2h ago</Badge> </li> </ul> </CardContent> <CardFooter className=" pt-4"> <Button variant=" outline"className=" w-full">View All Activity</Button> </CardFooter> </Card> </div> <TabsTrigger value="marketplace">Marketplace</TabsTrigger> <TabsTrigger value="zapier">Zapier</TabsTrigger> <TabsTrigger value="webhooks">Webhooks</TabsTrigger> mt-6" > <TabsContent value="marketplace" className="m-0" > <IntegrationCards /> </TabsContent> <TabsContent value="zapier" className="m-0" > <ZapierIntegration /> </TabsContent> <TabsContent value="webhooks" className="m-0" > <Card> <CardHeader> <CardTitle>Webhook Management</CardTitle> <CardDescription> Set up webhook endpoints to receive real-time updates from your Zion platform. </CardDescription> </CardHeader> <CardContent> <WebhookManager /> </CardContent> </Card> <Card className="mt-6" > <CardHeader> <CardTitle>Synchronization Log</CardTitle> <CardDescription> View the history of synchronization events between integrations. </CardDescription> </CardHeader> <CardContent> <IntegrationsSyncLog /> </CardContent> </Card> </TabsContent> </div> </Tabs> </div>)"
    </div>;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
