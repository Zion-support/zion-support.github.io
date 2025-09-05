
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { logDebug } from '@/utils/productionLogger',
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { ArrowRight, Check, ExternalLink, Slack, Briefcase, Users } from 'lucide-react'

interface IntegrationCardProps {
  title: string,
  description: string,
  icon: React.ReactNode,
  status?: "connected" | "disconnected" | "pending",
  href?: string,
  onConnect?: () => void
=======
import React from &quot;react&quot;;
import { logDebug } from '@/utils/productionLogger';
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent, CardFooter, CardHeader } from &quot;@/components/ui/card&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { ArrowRight, Check, ExternalLink, Slack, Briefcase, Users } from 'lucide-react'
=======
import React from "react";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

interface IntegrationCardProps {_title: string;
  description: string;
  icon: React.ReactNode;
  status?: &quot;connected&quot; | &quot;disconnected&quot; | &quot;pending&quot;;
  href?: string;
<<<<<<< HEAD
  onConnect?: () => void;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
}

export function IntegrationCard({
  title,
  description,
  icon,
  status = &quot;disconnected&quot;,
  href,
  onConnect}: IntegrationCardProps) {
  return (
    <Card className=&quot;overflow-hidden&quot;>
      <CardHeader className=&quot;pb-2&quot;>
        <div className=&quot;flex justify-between items-start&quot;>
          <div className=&quot;flex items-center gap-3&quot;>
            <div className=&quot;h-9 w-9 flex items-center justify-center bg-muted rounded-md&quot;>
              {icon}
            </div>
            <div>
              <h3 className=&quot;font-semibold&quot;>{title}</h3>
            </div>
          </div>
          {status === &quot;connected&quot; ? (
            <Badge variant=&quot;outline&quot; className=&quot;bg-green-100 text-green-800 gap-1&quot;>
              <Check className=&quot;h-3.5 w-3.5&quot; />
=======
  onConnect?: () => void;}

export function IntegrationCard(_{_title, _description, _icon, _status = "disconnected", _href, _onConnect}: IntegrationCardProps) {_return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 flex items-center justify-center bg-muted rounded-md">
              {icon}
            </div>
            <div>
              <h3 className="font-semibold">{_title}</h3>
            </div>
          </div>
          {_status === "connected" ? (
            <Badge variant="outline" className="bg-green-100 text-green-800 gap-1">
              <Check className="h-3.5 w-3.5" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <span>Connected</span>
            </Badge>
          ) : status === &quot;pending&quot; ? (
            <Badge variant=&quot;outline&quot; className=&quot;bg-yellow-100 text-yellow-800&quot;>Pending</Badge>
          ) : (
            <Badge variant=&quot;outline&quot;>Not Connected</Badge>
          )}
        </div>
      </CardHeader>
<<<<<<< HEAD
      <CardContent className=&quot;pb-4&quot;>
        <p className=&quot;text-sm text-muted-foreground&quot;>{description}</p>
      </CardContent>
      <CardFooter className=&quot;pt-0&quot;>
        {status === &quot;connected&quot; ? (
          <Button variant=&quot;outline&quot; className=&quot;w-full&quot; asChild>
            <a href={href} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;flex items-center gap-1&quot;>
=======
      <CardContent className="pb-4">
        <p className="text-sm text-muted-foreground">{_description}</p>
      </CardContent>
      <CardFooter className="pt-0">
        {_status === "connected" ? (
          <Button variant="outline" className="w-full" asChild>
            <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <span>Manage</span>
              <ExternalLink className=&quot;h-3.5 w-3.5&quot; />
            </Link>
          </Button>
        ) : (
<<<<<<< HEAD
          <Button variant=&quot;default&quot; className=&quot;w-full&quot; onClick={onConnect}>
=======
          <Button variant="default" className="w-full" onClick={_onConnect}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <span>Connect</span>
            <ArrowRight className=&quot;ml-1.5 h-3.5 w-3.5&quot; />
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

<<<<<<< HEAD
export function IntegrationCards() {
  return (
    <div className=&quot;grid md:grid-cols-3 gap-6&quot;>
      <IntegrationCard
        title=&quot;Slack&quot;
        description=&quot;Send notifications and interact with Zion from Slack.&quot;
        icon={<Slack className=&quot;h-5 w-5&quot; />}
        onConnect={() => logDebug('Connect Slack clicked')}
      />
      <IntegrationCard
        title=&quot;Salesforce&quot;
        description=&quot;Sync leads and opportunities with Salesforce.&quot;
        icon={<Briefcase className=&quot;h-5 w-5&quot; />}
        onConnect={() => logDebug('Connect Salesforce clicked')}
      />
      <IntegrationCard
        title=&quot;Microsoft Teams&quot;
        description=&quot;Receive updates through Microsoft Teams.&quot;
        icon={<Users className=&quot;h-5 w-5&quot; />}
        onConnect={() => logDebug('Connect Teams clicked')}
=======
export function IntegrationCards() {_return (_<div className="grid md:grid-cols-3 gap-6">
      <IntegrationCard
        title="Slack"
        description="Send notifications and interact with Zion from Slack."
        icon={<Slack className="h-5 w-5" />}
        onConnect={_() => logDebug('Connect Slack clicked')}
      />
      <IntegrationCard
        title="Salesforce"
        description="Sync leads and opportunities with Salesforce."
        icon={_<Briefcase className="h-5 w-5" />}
        onConnect={_() => logDebug('Connect Salesforce clicked')}
      />
      <IntegrationCard
        title="Microsoft Teams"
        description="Receive updates through Microsoft Teams."
        icon={_<Users className="h-5 w-5" />}
        onConnect={_() => logDebug('Connect Teams clicked')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      />
    </div>
  )
}
