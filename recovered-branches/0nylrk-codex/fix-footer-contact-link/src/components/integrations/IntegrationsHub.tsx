
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
  const [activeTab, setActiveTab] = useState("marketplace"),import React, {_useState} from "react";

export function IntegrationsHub() {_const [activeTab, _setActiveTab] = useState("marketplace");
  
  return (
    <div className=&quot;space-y-6&quot;>
      <div className=&quot;flex justify-between items-center&quot;>
        <div>
          <h1 className=&quot;text-3xl font-bold&quot;>Integrations Hub</h1>
          <p className=&quot;text-muted-foreground mt-1&quot;>
            Connect your platform with the tools and services you use every day
          </p>
        </div>
        
        <div className=&quot;flex gap-2&quot;>
          <Button variant=&quot;outline&quot;>View Documentation</Button>
          <Button>Connect New Integration</Button>
        </div>
      </div>
      
      <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-4&quot;>
        <Card>
          <CardHeader className=&quot;pb-2&quot;>
            <div className=&quot;flex justify-between items-center&quot;>
              <CardTitle className=&quot;text-lg&quot;>Status</CardTitle>
              <Badge variant=&quot;outline&quot; className=&quot;bg-green-100 text-green-800&quot;>Healthy</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className=&quot;space-y-2&quot;>
              <div className=&quot;flex justify-between text-sm&quot;>
                <span className=&quot;text-muted-foreground&quot;>Connected Services</span>
                <span className=&quot;font-medium&quot;>7 / 12</span>
              </div>
              <div className=&quot;flex justify-between text-sm&quot;>
                <span className=&quot;text-muted-foreground&quot;>Last Sync</span>
                <span className=&quot;font-medium&quot;>2 mins ago</span>
              </div>
              <div className=&quot;flex justify-between text-sm&quot;>
                <span className=&quot;text-muted-foreground&quot;>Pending Webhooks</span>
                <span className=&quot;font-medium&quot;>0</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className=&quot;md:col-span-2&quot;>
          <CardHeader className=&quot;pb-2&quot;>
            <CardTitle className=&quot;text-lg&quot;>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className=&quot;pb-0&quot;>
            <ul className=&quot;space-y-2 text-sm&quot;>
              <li className=&quot;flex justify-between items-center pb-2 border-b&quot;>
                <div>
                  <p className=&quot;font-medium&quot;>Slack notification sent</p>
                  <p className=&quot;text-muted-foreground&quot;>New job application received</p>
                </div>
                <Badge variant=&quot;outline&quot;>5m ago</Badge>
              </li>
              <li className=&quot;flex justify-between items-center pb-2 border-b&quot;>
                <div>
                  <p className=&quot;font-medium&quot;>Google Calendar sync</p>
                  <p className=&quot;text-muted-foreground&quot;>Interview scheduled</p>
                </div>
                <Badge variant=&quot;outline&quot;>1h ago</Badge>
              </li>
              <li className=&quot;flex justify-between items-center&quot;>
                <div>
                  <p className=&quot;font-medium&quot;>Zapier webhook trigger</p>
                  <p className=&quot;text-muted-foreground&quot;>Contract signed</p>
                </div>
                <Badge variant=&quot;outline&quot;>2h ago</Badge>
              </li>
            </ul>
          </CardContent>
          <CardFooter className=&quot;pt-4&quot;>
            <Button variant=&quot;outline&quot; className=&quot;w-full&quot;>View All Activity</Button>
          </CardFooter>
        </Card>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 md: w-[400px]">          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
          <TabsTrigger value="zapier">Zapier</TabsTrigger>
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
      <Tabs value={activeTab} onValueChange={setActiveTab} className=&quot;w-full&quot;>
        <TabsList className=&quot;grid grid-cols-3 md:w-[400px]&quot;>
          <TabsTrigger value=&quot;marketplace&quot;>Marketplace</TabsTrigger>
          <TabsTrigger value=&quot;zapier&quot;>Zapier</TabsTrigger>
          <TabsTrigger value=&quot;webhooks&quot;>Webhooks</TabsTrigger>
        </TabsList>
        
        <div className=&quot;mt-6&quot;>
          <TabsContent value=&quot;marketplace&quot; className=&quot;m-0&quot;>
            <IntegrationCards />
          </TabsContent>
          
          <TabsContent value=&quot;zapier&quot; className=&quot;m-0&quot;>
            <ZapierIntegration />
          </TabsContent>
          
          <TabsContent value=&quot;webhooks&quot; className=&quot;m-0&quot;>
            <Card>
              <CardHeader>
                <CardTitle>Webhook Management</CardTitle>
                <CardDescription>
                  Set up webhook endpoints to receive real-time updates from your Zion platform.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <WebhookManager />
              </CardContent>
            </Card>
            
            <Card className=&quot;mt-6&quot;>
              <CardHeader>
                <CardTitle>Synchronization Log</CardTitle>
                <CardDescription>
                  View the history of synchronization events between integrations.
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
  )
}
