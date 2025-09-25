import React,
 { useState } from "react",
import { Button } from "@/components/ui/button",
import {
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { IntegrationCards } from "./IntegrationCards",
import { ZapierIntegration } from "./ZapierIntegration",
import { Badge } from "@/components/ui/badge",
import { WebhookManager } from "./WebhookManager",
import { IntegrationsSyncLog } from "./IntegrationsSyncLog",
import React,
 { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { IntegrationCards } from "./IntegrationCards",
import { ZapierIntegration } from "./ZapierIntegration",
import { Badge } from "@/components/ui/badge",
import { WebhookManager } from "./WebhookManager",
import { IntegrationsSyncLog } from "./IntegrationsSyncLog",
import React,
 { useState } from './react',
import { Button  } from '@/components / ui / button',
import { Tabs, TabsContent, TabsList, TabsTrigger  } from '@/components / ui / tabs',
import { IntegrationCards  } from './IntegrationCards',
import { ZapierIntegration  } from './ZapierIntegration',
import { Badge  } from '@/components / ui / badge',
import { WebhookManager  } from './WebhookManager',
import { IntegrationsSyncLog  } from './IntegrationsSyncLog',
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
export function IntegrationsHub() {;
const [activeTab, setActiveTab] = useState("marketplace"),
export function IntegrationsHub() {;
const [activeTab, setActiveTab] = useState("marketplace"),
        <div className="flex gap-2">,
          <Button variant="outline">View Documentation
          <Button>Connect New Integration
        
      </div>
      <div className="grid grid-cols-1 md: grid-cols-3 gap-4">,
        <Card>,
          <CardHeader className="pb-2">,
            <div className="flex justify-between items-center">,
              <CardTitle className="text-lg">Status
              <Badge variant="outline" className="bg-green-100 text-green-800">,
                Healthy,

          <CardContent>,
            <div className="space-y-2">,
              <div className="flex justify-between text-sm">,
                <span className="text-muted-foreground">,
                  Connected Services,
                
                <span className="font-medium">7 / 12
              
              <div className="flex justify-between text-sm">,
                <span className="text-muted-foreground">Last Sync
                <span className="font-medium">2 mins ago
              
              <div className="flex justify-between text-sm">,
                <span className="text-muted-foreground">Pending Webhooks
                <span className="font-medium">0

        </Card>
        <Card className="md:col-span-2">,
          <CardHeader className="pb-2">,
            <CardTitle className="text-lg">Recent Activity
          
          <CardContent className="pb-0">,
            <ul className="space-y-2 text-sm">,
              <li className="flex justify-between items-center pb-2 border-b">,
                <div>,
                  <p className="font-medium">Slack notification sent
                  <p className="text-muted-foreground">,
                    New job application received,

                <Badge variant="outline">5m ago
              
              <li className="flex justify-between items-center pb-2 border-b">,
                <div>,
                  <p className="font-medium">Google Calendar sync
                  <p className="text-muted-foreground">Interview scheduled
                
                <Badge variant="outline">1h ago
              
              <li className="flex justify-between items-center">,
                <div>,
                  <p className="font-medium">Zapier webhook trigger
                  <p className="text-muted-foreground">Contract signed
                
                <Badge variant="outline">2h ago

          <CardFooter className="pt-4">,
            <Button variant="outline" className="w-full">,
              View All Activity,

      </div>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">,
        <TabsList className="grid grid-cols-3 md: w-[400px]">
          <TabsTrigger value="marketplace">Marketplace
          <TabsTrigger value="zapier">Zapier
          <TabsTrigger value="webhooks">Webhooks
        </TabsList>
        <div className="mt-6">,
          <TabsContent value="marketplace" className="m-0">,
            <IntegrationCards />,
          
          <TabsContent value="zapier" className="m-0">,
            <ZapierIntegration />,
          
          <TabsContent value="zapier" className="m-0">,
            <ZapierIntegration />,
          </TabsContent>
          <TabsContent value="webhooks" className="m-0">,
            <Card>,
              <CardHeader>,
                <CardTitle>Webhook Management
                <CardDescription>,
                  Set up webhook endpoints to receive real-time updates from,
                  your Zion platform.,

              <CardContent>,
                <WebhookManager />,
              
            </Card>
            <Card className="mt-6">,
              <CardHeader>,
                <CardTitle>Synchronization Log
                <CardDescription>,
                  View the history of synchronization events between,
                  integrations.,

              <CardContent>,
                <IntegrationsSyncLog />,

    </div>)}
),
export function IntegrationsHub() {;
const [activeTab, setActiveTab] = useState("marketplace"),;
return (
    <div className="space-y-6">,
      <div className="flex justify-between items-center">,
        <div>,
          <h1 className="text-3xl font-bold">Integrations Hub
          <p className="text-muted-foreground mt-1">,
            Connect your platform with the tools and services you use every day,

        <div className="flex gap-2">,
          <Button variant="outline">View Documentation
          <Button>Connect New Integration

      <div className="grid grid-cols-1 md: grid-cols-3 gap-4">,
        <Card>,
          <CardHeader className="pb-2">,
            <div className="flex justify-between items-center">,
              <CardTitle className="text-lg">Status
              <Badge variant="outline" className="bg-green-100 text-green-800">,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components / ui / card',
export /**,
 * IntegrationsHub - Function description,
 */,;
function IntegrationsHub() {;
const [active_tab, setActiveTab] = useState ("marketplace"),;
return (
    <div className="space - y-6">,
      <div className="flex justify - between items - center">,
        <div>,
          <h1 className="text - 3xl font - bold">Integrations Hub
          <p className="text - muted - foreground mt - 1">,
            Connect your platform with the tools and services you use every day,

        <div className="flex gap - 2">,
          <Button variant="outline">View Documentation
          <Button > Connect New Integration

      <div className="grid grid - cols - 1 md: grid - cols - 3 gap - 4">,
        <Card>,
          <CardHeader className="pb - 2">,
            <div className="flex justify - between items - center">,
              <CardTitle className="text - lg">Status
              <Badge variant="outline" className="bg - green - 100 text - green - 800">,
                Healthy,

          <CardContent>,
            <div className="space-y-2">,
              <div className="flex justify-between text-sm">,
                <span className="text-muted-foreground">,
                  Connected Services,
                
                <span className="font-medium">7 / 12
              
              <div className="flex justify-between text-sm">,
                <span className="text-muted-foreground">Last Sync
                <span className="font-medium">2 mins ago
              
              <div className="flex justify - between text - sm">,
                <span className="text - muted - foreground">Pending Webhooks
                <span className="font - medium">0

        <Card className="md:col - span - 2">,
          <CardHeader className="pb - 2">,
            <CardTitle className="text - lg">Recent Activity
          
          <CardContent className="pb - 0">,
            <ul className="space - y-2 text - sm">,
              <li className="flex justify - between items - center pb - 2 border - b">,
                <div>,
                  <p className="font - medium">Slack notification sent
                  <p className="text - muted - foreground">,
                    New job application received,

                <Badge variant="outline">5m ago
              
              <li className="flex justify - between items - center pb - 2 border - b">,
                <div>,
                  <p className="font - medium">Google Calendar sync
                  <p className="text - muted - foreground">Interview scheduled
                
                <Badge variant="outline">1h ago
              
              <li className="flex justify - between items - center">,
                <div>,
                  <p className="font - medium">Zapier webhook trigger
                  <p className="text - muted - foreground">Contract signed
                
                <Badge variant="outline">2h ago

          <CardFooter className="pt - 4">,
            <Button variant="outline" className="w - full">,
              View All Activity,

      <Tabs value={active_tab} onValueChange={setActiveTab} className="w - full">,
        <TabsList className="grid grid - cols - 3 md: w-[400px]">,
          <TabsTrigger value="marketplace">Marketplace
          <TabsTrigger value="zapier">Zapier
          <TabsTrigger value="webhooks">Webhooks
        
        <div className="mt - 6">,
          <TabsContent value="marketplace" className="m - 0">,
            <IntegrationCards />,
          
          <TabsContent value="zapier" className="m - 0">,
            <ZapierIntegration />,
          
          <TabsContent value="webhooks" className="m - 0">,
            <Card>,
              <CardHeader>,
                <CardTitle > Webhook Management
                <CardDescription>,
                  Set up webhook endpoints to receive real - time updates from,
                  your Zion platform.,

              <CardContent>,
                <WebhookManager />,

            <Card className="mt - 6">,
              <CardHeader>,
                <CardTitle > Synchronization Log
                <CardDescription>,
                  View the history of synchronization events between,
                  integrations.,

              <CardContent>,
                <IntegrationsSyncLog />,

    </div>
