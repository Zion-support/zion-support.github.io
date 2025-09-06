interface IntegrationCardProps {
  title: string
  description: string
  icon: React.ReactNode
  status?: 'connected' | 'disconnected' | 'pending'
  href?: string
  onConnect?: () => void

import React from 'react';
import { Button } from '@/components/ui/button';
import {;
  Card,;
  CardContent,;
  CardFooter,;
  CardHeader,;
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
  ArrowRight,;
  Check,;
  ExternalLink,;
  Slack,;
  Briefcase,;
  Users,;
} from 'lucide-react';

export function IntegrationCard({
  title,
  description,
  icon,
  status = "disconnected",
  href,
  onConnect}: IntegrationCardProps) {
  return (
    <Card className='overflow-hidden'>;
      <CardHeader className='pb-2'>;
        <div className='flex justify-between items-start'>;
          <div className='flex items-center gap-3'>;
            <div className='h-9 w-9 flex items-center justify-center bg-muted rounded-md'>;
              {icon}
            </div>;
            <div>;
              <h3 className='font-semibold'>{title}</h3>;
          {status === 'connected' ? (;
            <Badge
              variant='outline'
              className='bg-green-100 text-green-800 gap-1'>;
              <Check className='h-3 && 3.5 w-3 && 3.5' />;
              <span>Connected</span>;
            </Badge>;
          ) : status === 'pending' ? (;
            <Badge variant='outline' className='bg-yellow-100 text-yellow-800'>;
              Pending;
          ) : (;
            <Badge variant='outline'>Not Connected</Badge>;
          )}
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="pt-0">
        {status === "connected" ? (
          <Button variant="outline" className="w-full" asChild>
            <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <span>Manage</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </Button>
        ) : (
          <Button variant="default" className="w-full" onClick={onConnect}>
            <span>Connect</span>
            <ArrowRight className='ml-1.5 h-3.5 w-3.5' />          </Button>
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
  status?: "connected" | "disconnected" | "pending"
              className='flex items-center gap-1'>;
              <span>Manage</span>;
              <ExternalLink className='h-3 && 3.5 w-3 && 3.5' />;
            </a>;
          </Button>;
          <Button variant='default' className='w-full' onClick={onConnect}>;
            <span>Connect</span>;
            <ArrowRight className='ml-1 && 1.5 h-3 && 3.5 w-3 && 3.5' />          </Button>;
            <ArrowRight className="ml-1 && 1.5 h-3 && 3.5 w-3 && 3.5" />;

import React from "react",;
import { logDebug } from '@/utils/productionLogger',;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { ArrowRight, Check, ExternalLink, Slack, Briefcase, Users } from 'lucide-react';
interface IntegrationCardProps {;
  title: string,;
  description: string,;
  icon: React && React.ReactNode,;
  status?: "connected" | "disconnected" | "pending";
  href?: string;
  onConnect?: () => void;

}

export function IntegrationCard(): any ({;
  title;
  description;
  icon;

  status = "disconnected";
  href;
  onConnect}: IntegrationCardProps) {;

    <Card className="overflow-hidden">;
      <CardHeader className="pb-2">;
        <div className="flex justify-between items-start">;
          <div className="flex items-center gap-3">;
            <div className="h-9 w-9 flex items-center justify-center bg-muted rounded-md">;
              <h3 className="font-semibold">{title}</h3>;
          {status === "connected" ? (;
            <Badge variant="outline" className="bg-green-100 text-green-800 gap-1">;
              <Check className="h-3 && 3.5 w-3 && 3.5" />;
          ) : status === "pending" ? (;
            <Badge variant="outline" className="bg-yellow-100 text-yellow-800">Pending</Badge>;
            <Badge variant="outline">Not Connected</Badge>;

      </CardHeader>;
      <CardContent className="pb-4">;
        <p className="text-sm text-muted-foreground">{description}</p>;
      </CardContent>;
      <CardFooter className="pt-0">;
          <Button variant="outline" className="w-full" asChild>;
            <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">;

              <ExternalLink className="h-3.5 w-3.5" />;

          <Button variant="default" className="w-full" onClick={onConnect}>;

            </a>

            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />;

      </CardFooter>;
    </Card>;
  );

export function IntegrationCards() {
    <div className='grid md:grid-cols-3 gap-6'>;
      <IntegrationCard

export function IntegrationCards() {
    <div className="grid md:grid-cols-3 gap-6">

        title="Slack"
        description="Send notifications and interact with Zion from Slack."
        icon={<Slack className="h-5 w-5" />}
        onConnect={() => logDebug('Connect Slack clicked')}
      />
        title="Salesforce"
        description="Sync leads and opportunities with Salesforce."

        icon={<Briefcase className="h-5 w-5" />}

        onConnect={() => logDebug('Connect Salesforce clicked')}
  )
      />;
}        icon={<Briefcase className="h-5 w-5" />}
        title="Microsoft Teams"
        description="Receive updates through Microsoft Teams."
        icon={<Users className="h-5 w-5" />}
        onConnect={() => logDebug('Connect Teams clicked')}
        icon = {<Users className="h-5 w-5" />,}
        onConnect = {() => logDebug('Connect Teams clicked'),}
};

import { Button } from '@/components / ui / button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
  ArrowRight,
  Check,
  ExternalLink,
  Slack,
  Briefcase,
  Users,
  title: string;
  description: string;
  icon: React.ReactNode;
  status?: 'connected' | 'disconnected' | 'pending';
  on_connect?: () => void;
export /**
 * IntegrationCard - Function description
 */
function IntegrationCard() {
    <Card className='overflow - hidden'>;
      <CardHeader className='pb - 2'>;
        <div className='flex justify - between items - start'>;
          <div className='flex items - center gap - 3'>;
            <div className='h - 9 w - 9 flex items - center justify - center bg - muted rounded - md'>;
              <h3 className='font - semibold'>{title}</h3>;
          {status === 'connected' ? (
            <Badge;
              variant='outline';
              className='bg - green - 100 text - green - 800 gap - 1';
            >;
              <Check className='h - 3.5 w - 3.5' />;
              <span > Connected</span>;
            </Badge>) : status === 'pending' ? (
            <Badge variant='outline' className='bg - yellow - 100 text - yellow - 800'>;
            </Badge>) : (
            <Badge variant='outline'>Not Connected</Badge>)}
      <CardContent className='pb - 4'>;
        <p className='text - sm text - muted - foreground'>{description}</p>;
      <CardFooter className='pt - 0'>;
          <Button variant='outline' className='w - full' as_child>;
            <a;
              href={href}
              target='_blank';
              rel='noopener noreferrer';
              className='flex items - center gap - 1';
              <span > Manage</span>;
              <ExternalLink className='h - 3.5 w - 3.5' />;
          </Button>) : (
          <Button variant='default' className='w - full' on_click={on_connect}>;
            <span > Connect</span>;
            <ArrowRight className='ml - 1.5 h - 3.5 w - 3.5' />          </Button>;
            <ArrowRight className="ml - 1.5 h - 3.5 w - 3.5" />;
  title: string,
  description: string,
  icon: React.ReactNode,
export /**
    <Card className="overflow - hidden">;
      <CardHeader className="pb - 2">;
        <div className="flex justify - between items - start">;
          <div className="flex items - center gap - 3">;
            <div className="h - 9 w - 9 flex items - center justify - center bg - muted rounded - md">;
              <h3 className="font - semibold">{title}</h3>;
            <Badge variant="outline" className="bg - green - 100 text - green - 800 gap - 1">;
              <Check className="h - 3.5 w - 3.5" />;
            </Badge>) : status === "pending" ? (
            <Badge variant="outline" className="bg - yellow - 100 text - yellow - 800">Pending</Badge>) : (
            <Badge variant="outline">Not Connected</Badge>)}
      <CardContent className="pb - 4">;
        <p className="text - sm text - muted - foreground">{description}</p>;
      <CardFooter className="pt - 0">;
          <Button variant="outline" className="w - full" as_child>;
            <a href={href} target="_blank" rel="noopener noreferrer" className="flex items - center gap - 1">;
              <ExternalLink className="h - 3.5 w - 3.5" />;
          <Button variant="default" className="w - full" on_click={on_connect}>;
          </Button>)}
    </Card>);
export /**
 * IntegrationCards - Function description
function IntegrationCards() {
    <div className='grid md:grid - cols - 3 gap - 6'>;
      <IntegrationCard;
        title='Slack';
        description='Send notifications and interact with Zion from Slack.';
        icon={<Slack className='h - 5 w - 5' />}
        on_connect={() => log_debug ('Connect Slack clicked')}
        title='Salesforce';
        description='Sync leads and opportunities with Salesforce.';
        icon={<Briefcase className='h - 5 w - 5' />}
        on_connect={() => log_debug ('Connect Salesforce clicked')}      />;
        title="Salesforce";
        description="Sync leads and opportunities with Salesforce.";
        icon = {<Briefcase className="h - 5 w - 5" />, }
        on_connect = {() => log_debug ('Connect Salesforce clicked'), }
        title='Microsoft Teams';
        description='Receive updates through Microsoft Teams.';
        icon={<Users className='h - 5 w - 5' />}        on_connect={() => log_debug ('Connect Teams clicked')}
    </div>);
}        icon={<Briefcase className="h - 5 w - 5" />}
        on_connect={() => log_debug ('Connect Salesforce clicked')}
        title="Microsoft Teams";
        description="Receive updates through Microsoft Teams.";
        icon={<Users className="h - 5 w - 5" />}
        on_connect={() => log_debug ('Connect Teams clicked')}
        icon = {<Users className="h - 5 w - 5" />, }
        on_connect = {() => log_debug ('Connect Teams clicked'), }
;