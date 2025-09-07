

import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;

<<<<<<< HEAD

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {

  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,;

=======
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IntegrationCards } from "./IntegrationCards";
import { ZapierIntegration } from "./ZapierIntegration";
import { Badge } from "@/components/ui/badge";
<<<<<<< HEAD

import { WebhookManager } from "./WebhookManager";
import { IntegrationsSyncLog } from "./IntegrationsSyncLog";
export function IntegrationsHub() {;
  const [activeTab, setActiveTab] = useState("marketplace");


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
  

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        <div className="flex gap-2">
          <Button variant="outline">View Documentation</Button>
          <Button>Connect New Integration</Button>
        </div>
<<<<<<< HEAD
      </div>


      


      
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
=======
      </div>      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Status</CardTitle>
<<<<<<< HEAD
              <Badge variant="outline" className="bg-green-100 text-green-800">
                Healthy
              </Badge>
              <Badge variant="outline" className="bg-green-100 text-green-800">Healthy</Badge>
=======
              <Badge variant="outline" className="bg-green-100 text-green-800">Healthy</Badge>              <Badge variant="outline" className="bg-green-100 text-green-800">Healthy</Badge>
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
=======
                <span className="text-muted-foreground">Connected Services</span>                <span className="text-muted-foreground">Connected Services</span>
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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


        


        
        
        <Card className="md:col-span-2">
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
=======
                  <p className="text-muted-foreground">New job application received</p>                  <p className="text-muted-foreground">New job application received</p>
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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


      


            <Button variant="outline" className="w-full">View All Activity</Button>
          </CardFooter>
        </Card>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
=======
      </div>      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        <TabsList className="grid grid-cols-3 md: w-[400px]">
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
          <TabsTrigger value="zapier">Zapier</TabsTrigger>
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
<<<<<<< HEAD
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
        </TabsList>          <TabsContent value="webhooks" className="m-0">
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
            <Card>
              <CardHeader>
                <CardTitle>Webhook Management</CardTitle>
                <CardDescription>
<<<<<<< HEAD
                  Set up webhook endpoints to receive real-time updates from
                  your Zion platform.
                  Set up webhook endpoints to receive real-time updates from your Zion platform.
=======
                  Set up webhook endpoints to receive real-time updates from your Zion platform.                  Set up webhook endpoints to receive real-time updates from your Zion platform.
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                </CardDescription>
              </CardHeader>
              <CardContent>
                <WebhookManager />
              </CardContent>
<<<<<<< HEAD
            </Card>


            


            
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Synchronization Log</CardTitle>
                <CardDescription>
                  View the history of synchronization events between
                  integrations.
                  View the history of synchronization events between integrations.
=======
            </Card>            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Synchronization Log</CardTitle>
                <CardDescription>
                  View the history of synchronization events between integrations.                  View the history of synchronization events between integrations.
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
  return (;

    <div className="space-y-6">;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      <div className="flex justify-between items-center">;
        <div>;
          <h1 className="text-3xl font-bold">Integrations Hub</h1>;
          <p className="text-muted-foreground mt-1">;
            Connect your platform with the tools and services you use every day;
          </p>;
        </div>;
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        <div className="flex gap-2">;
          <Button variant="outline">View Documentation</Button>;
          <Button>Connect New Integration</Button>;
        </div>;
      </div>;
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;
        <Card>;
          <CardHeader className="pb-2">;
            <div className="flex justify-between items-center">;
              <CardTitle className="text-lg">Status</CardTitle>;
<<<<<<< HEAD
              <Badge variant="outline" className="bg-green-100 text-green-800">;
  return (
=======
              <Badge variant="outline" className="bg-green-100 text-green-800">;  return (
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                Healthy;
              </Badge>;
            </div>;
          </CardHeader>;
<<<<<<< HEAD
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
                  </p>;
                </div>;
                <Badge variant="outline">5m ago</Badge>;
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
=======
          <CardContent>;              </div>;
            </div>;
          </CardContent>;
        </Card>;                    New job application received;
                  </p>;
                </div>;
                <Badge variant="outline">5m ago</Badge>;
              </li>;                </div>;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                <Badge variant="outline">2h ago</Badge>;
              </li>;
            </ul>;
          </CardContent>;

<<<<<<< HEAD
          <CardFooter className="pt - 4">;
            <Button variant="outline" className="w - full">;
=======
          <CardFooter className="pt-4">;
            <Button variant="outline" className="w-full">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

              View All Activity;
            </Button>;
          </CardFooter>;
        </Card>;
      </div>;

<<<<<<< HEAD
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
=======
      <Tabs value={active_tab} onValueChange={setActiveTab} className="w-full">;
        <TabsList className="grid grid - cols-3 md: w-[400px]">;                </CardDescription>;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
              </CardHeader>;
              <CardContent>;
                <WebhookManager />;
              </CardContent>;
<<<<<<< HEAD
            </Card>;

            <Card className="mt - 6">;
              <CardHeader>;
                <CardTitle > Synchronization Log</CardTitle>;

                <CardDescription>;
                  View the history of synchronization events between;
                  integrations.;
                </CardDescription>;
=======
            </Card>;                </CardDescription>;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
=======
  );
}
;  );  );
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
}
;
