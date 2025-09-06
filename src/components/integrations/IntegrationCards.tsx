<<<<<<< HEAD
import React from 'react';
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======

import React from "react";
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { logDebug } from '@/utils/productionLogger';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,;
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  Check,
  ExternalLink,
  Slack,
  Briefcase,
  Users,;
} from 'lucide-react';

interface IntegrationCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  status?: 'connected' | 'disconnected' | 'pending';
  href?: string;
  onConnect?: () => void;

export function IntegrationCard({
  title,
  description,
  icon,
  status = 'disconnected',
  href,
  onConnect,
}: IntegrationCardProps) {
  return (
    <Card className='overflow-hidden'>
      <CardHeader className='pb-2'>
        <div className='flex justify-between items-start'>
          <div className='flex items-center gap-3'>
            <div className='h-9 w-9 flex items-center justify-center bg-muted rounded-md'>
              {icon}
            </div>
            <div>
              <h3 className='font-semibold'>{title}</h3>
            </div>
          </div>
          {status === 'connected' ? (
            <Badge
              variant='outline'
              className='bg-green-100 text-green-800 gap-1'
            >
              <Check className='h-3.5 w-3.5' />
              <span>Connected</span>
            </Badge>
          ) : status === 'pending' ? (
            <Badge variant='outline' className='bg-yellow-100 text-yellow-800'>
              Pending
            </Badge>
          ) : (
            <Badge variant='outline'>Not Connected</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className='pb-4'>
        <p className='text-sm text-muted-foreground'>{description}</p>
      </CardContent>
      <CardFooter className='pt-0'>
        {status === 'connected' ? (
          <Button variant='outline' className='w-full' asChild>
            <a
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-1'
            >
              <span>Manage</span>
              <ExternalLink className='h-3.5 w-3.5' />
            </a>
          </Button>
        ) : (
          <Button variant='default' className='w-full' onClick={onConnect}>
            <span>Connect</span>
<<<<<<< HEAD
            <ArrowRight className='ml-1.5 h-3.5 w-3.5' />          </Button>
=======
<<<<<<< HEAD
            <ArrowRight className='ml-1.5 h-3.5 w-3.5' />
=======

import React from "react";
import { logDebug } from '@/utils/productionLogger';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, ExternalLink, Slack, Briefcase, Users } from 'lucide-react'
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

interface IntegrationCardProps {
  title: string,
  description: string,
  icon: React.ReactNode,
  status?: "connected" | "disconnected" | "pending";
  href?: string;
  onConnect?: () => void
}

export function IntegrationCard({

  title;
  description;
  icon;
  status = "disconnected",

  href;
  onConnect}: IntegrationCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 flex items-center justify-center bg-muted rounded-md">
              {icon}
            </div>
            <div>
              <h3 className="font-semibold">{title}</h3>
            </div>
          </div>
          {status === "connected" ? (
            <Badge variant="outline" className="bg-green-100 text-green-800 gap-1">
              <Check className="h-3.5 w-3.5" />
              <span>Connected</span>
            </Badge>
          ) : status === "pending" ? (
            <Badge variant="outline" className="bg-yellow-100 text-yellow-800">Pending</Badge>
          ) : (
            <Badge variant="outline">Not Connected</Badge>
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
            </a>
          </Button>
        ) : (
          <Button variant="default" className="w-full" onClick={onConnect}>
            <span>Connect</span>
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          </Button>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        )}
      </CardFooter>
    </Card>
  );
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export function IntegrationCards() {
  return (
    <div className='grid md:grid-cols-3 gap-6'>
      <IntegrationCard
        title='Slack'
        description='Send notifications and interact with Zion from Slack.'
        icon={<Slack className='h-5 w-5' />}
        onConnect={() => logDebug('Connect Slack clicked')}
      />
      <IntegrationCard
        title='Salesforce'
        description='Sync leads and opportunities with Salesforce.'
        icon={<Briefcase className='h-5 w-5' />}
        onConnect={() => logDebug('Connect Salesforce clicked')}
      />
      <IntegrationCard
<<<<<<< HEAD
        title='Microsoft Teams'
        description='Receive updates through Microsoft Teams.'
        icon={<Users className='h-5 w-5' />}        onConnect={() => logDebug('Connect Teams clicked')}
      />
    </div>
  );
}
=======
<<<<<<< HEAD
        title='Microsoft Teams'
        description='Receive updates through Microsoft Teams.'
        icon={<Users className='h-5 w-5' />}
=======
}

export function IntegrationCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <IntegrationCard
        title="Slack"
        description="Send notifications and interact with Zion from Slack."
        icon={<Slack className="h-5 w-5" />}
        onConnect={() => logDebug('Connect Slack clicked')}
      />
      <IntegrationCard
        title="Salesforce"
        description="Sync leads and opportunities with Salesforce."
        icon={<Briefcase className="h-5 w-5" />}
        onConnect={() => logDebug('Connect Salesforce clicked')}
      />
      <IntegrationCard
        title="Microsoft Teams"
        description="Receive updates through Microsoft Teams."
        icon={<Users className="h-5 w-5" />}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        title="Microsoft Teams"
        description="Receive updates through Microsoft Teams."
        icon={<Users className="h-5 w-5" />}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        onConnect={() => logDebug('Connect Teams clicked')}
      />
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
