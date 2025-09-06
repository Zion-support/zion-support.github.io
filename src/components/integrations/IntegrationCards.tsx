<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
  ArrowRight,
  Check,
  ExternalLink,
  Slack,
  Briefcase,
  Users,
} from 'lucide-react'

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React from "react",
import { logDebug } from '@/utils/productionLogger',
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { ArrowRight, Check, ExternalLink, Slack, Briefcase, Users } from 'lucide-react'


<<<<<<< HEAD
=======
import React from 'react'
import { Button } from '@/components/ui/button'
import {
  Card
  CardContent
  CardFooter
  CardHeader
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
  ArrowRight
  Check
  ExternalLink
  Slack
  Briefcase
  Users
} from 'lucide-react'
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface IntegrationCardProps {
  title: string
  description: string
  icon: React.ReactNode
  status?: 'connected' | 'disconnected' | 'pending'
  href?: string
  onConnect?: () => void
<<<<<<< HEAD
export function IntegrationCard({
  title
  description
  icon
  status = 'disconnected'
  href
  onConnect
}: IntegrationCardProps) {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React from 'react';
import { Button } from '@/components/ui/button';
import {;
  Card,;
  CardContent,;
  CardFooter,;
  CardHeader,;
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {;
  ArrowRight,;
  Check,;
  ExternalLink,;
  Slack,;
  Briefcase,;
  Users,;
} from 'lucide-react';
<<<<<<< HEAD

}
<<<<<<< HEAD
=======

interface IntegrationCardProps {;
  title: string;
  description: string;
  icon: React && React.ReactNode;
  status?: 'connected' | 'disconnected' | 'pending';
  href?: string;
  onConnect?: () => void;




export function IntegrationCard({
}

}

=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export function IntegrationCard({
  title,
  description,
  icon,
  status = "disconnected",
  href,
  onConnect}: IntegrationCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 flex items-center justify-center bg-muted rounded-md">
<<<<<<< HEAD
  return (
    <Card className='overflow-hidden'>;
      <CardHeader className='pb-2'>;
        <div className='flex justify-between items-start'>;
          <div className='flex items-center gap-3'>;
            <div className='h-9 w-9 flex items-center justify-center bg-muted rounded-md'>;
            </div>;
            <div>;
              <h3 className='font-semibold'>{title}</h3>;
            </div>;
          </div>;
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
            </Badge>;
          ) : (;
            <Badge variant='outline'>Not Connected</Badge>;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
interface IntegrationCardProps {
  title: string
  description: string
  icon: React.ReactNode
  status?: "connected" | "disconnected" | "pending"
  href?: string
  onConnect?: () => void
              className='flex items-center gap-1'>;
              <span>Manage</span>;
              <ExternalLink className='h-3 && 3.5 w-3 && 3.5' />;
            </a>;
          </Button>;
        ) : (;
          <Button variant='default' className='w-full' onClick={onConnect}>;
            <span>Connect</span>;
            <ArrowRight className='ml-1 && 1.5 h-3 && 3.5 w-3 && 3.5' />          </Button>;
            <ArrowRight className="ml-1 && 1.5 h-3 && 3.5 w-3 && 3.5" />;
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
  return (
    <Card className="overflow-hidden">;
      <CardHeader className="pb-2">;
        <div className="flex justify-between items-start">;
          <div className="flex items-center gap-3">;
            <div className="h-9 w-9 flex items-center justify-center bg-muted rounded-md">;
              {icon}
            </div>;
            <div>;
              <h3 className="font-semibold">{title}</h3>;
            </div>;
          </div>;
          {status === "connected" ? (;
            <Badge variant="outline" className="bg-green-100 text-green-800 gap-1">;
              <Check className="h-3 && 3.5 w-3 && 3.5" />;
              <span>Connected</span>;
            </Badge>;
          ) : status === "pending" ? (;
            <Badge variant="outline" className="bg-yellow-100 text-yellow-800">Pending</Badge>;
          ) : (;
            <Badge variant="outline">Not Connected</Badge>;
          )}
        </div>;
      </CardHeader>;
      <CardContent className="pb-4">;
        <p className="text-sm text-muted-foreground">{description}</p>;
      </CardContent>;
      <CardFooter className="pt-0">;
        {status === "connected" ? (;
          <Button variant="outline" className="w-full" asChild>;
            <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">;
              <span>Manage</span>;
              <ExternalLink className="h-3 && 3.5 w-3 && 3.5" />;
            </a>;
          </Button>;
        ) : (;
          <Button variant="default" className="w-full" onClick={onConnect}>;
            <span>Connect</span>;
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
<<<<<<< HEAD
            <ArrowRight className='ml-1.5 h-3.5 w-3.5' />          </Button>
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
interface IntegrationCardProps {
  title: string
  description: string
  icon: React.ReactNode
  status?: "connected" | "disconnected" | "pending"
  href?: string
  onConnect?: () => void
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              className='flex items-center gap-1'>;
              <span>Manage</span>;
              <ExternalLink className='h-3 && 3.5 w-3 && 3.5' />;
            </a>;
          </Button>;
        ) : (;
          <Button variant='default' className='w-full' onClick={onConnect}>;
            <span>Connect</span>;
            <ArrowRight className='ml-1 && 1.5 h-3 && 3.5 w-3 && 3.5' />          </Button>;
            <ArrowRight className="ml-1 && 1.5 h-3 && 3.5 w-3 && 3.5" />;

            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </Button>
import React from "react",;
import { logDebug } from '@/utils/productionLogger',;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { ArrowRight, Check, ExternalLink, Slack, Briefcase, Users } from 'lucide-react';
<<<<<<< HEAD


=======
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

  return (
    <Card className="overflow-hidden">;
      <CardHeader className="pb-2">;
        <div className="flex justify-between items-start">;
          <div className="flex items-center gap-3">;
            <div className="h-9 w-9 flex items-center justify-center bg-muted rounded-md">;
              {icon}
            </div>;
            <div>;
              <h3 className="font-semibold">{title}</h3>;
            </div>;
          </div>;
          {status === "connected" ? (;
            <Badge variant="outline" className="bg-green-100 text-green-800 gap-1">;
              <Check className="h-3 && 3.5 w-3 && 3.5" />;
              <span>Connected</span>;
            </Badge>;
          ) : status === "pending" ? (;
            <Badge variant="outline" className="bg-yellow-100 text-yellow-800">Pending</Badge>;
          ) : (;
            <Badge variant="outline">Not Connected</Badge>;
          )}
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </Button>
import React from "react",;
import { logDebug } from '@/utils/productionLogger',;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { ArrowRight, Check, ExternalLink, Slack, Briefcase, Users } from 'lucide-react';
interface IntegrationCardProps {;
  title: string,;
  description: string,;
  icon: React.ReactNode,;
  status?: "connected" | "disconnected" | "pending",;
  href?: string,;
  onConnect?: () => void;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}

export function IntegrationCard({
  title;
  description;
  icon;
  status;
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
<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        </div>;
      </CardHeader>;
      <CardContent className="pb-4">;
        <p className="text-sm text-muted-foreground">{description}</p>;
      </CardContent>;
      <CardFooter className="pt-0">;
        {status === "connected" ? (;
          <Button variant="outline" className="w-full" asChild>;
            <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">;
              <span>Manage</span>;

              <ExternalLink className="h-3.5 w-3.5" />;

<<<<<<< HEAD
=======
            </a>;
          </Button>;
        ) : (;
          <Button variant="default" className="w-full" onClick={onConnect}>;
            <span>Connect</span>;

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
          </Button>
        )}
      </CardFooter>
    </Card>
  )
        </div>;
      </CardHeader>;
      <CardContent className="pb-4">;
        <p className="text-sm text-muted-foreground">{description}</p>;
      </CardContent>;
      <CardFooter className="pt-0">;
        {status === "connected" ? (;
          <Button variant="outline" className="w-full" asChild>;
            <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">;
              <span>Manage</span>;
              <ExternalLink className="h-3.5 w-3.5" />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            </a>;
          </Button>;
        ) : (;
          <Button variant="default" className="w-full" onClick={onConnect}>;
            <span>Connect</span>;
<<<<<<< HEAD

        )}

            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />;
          </Button>;
        )}

      </CardFooter>;
    </Card>;
  );




export function IntegrationCards() {
      <IntegrationCard
      />


}


=======
        )}

            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />;
          </Button>;
        )}
      </CardFooter>;
    </Card>;
  );




export function IntegrationCards() {
  return (
    <div className='grid md:grid-cols-3 gap-6'>;
      <IntegrationCard

  );
}

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export function IntegrationCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <IntegrationCard
<<<<<<< HEAD
        title='Slack'
        description='Send notifications and interact with Zion from Slack.'
        icon={<Slack className='h-5 w-5' />}
        onConnect={() => logDebug('Connect Slack clicked')}
      />
      <IntegrationCard
        title='Salesforce'
        description='Sync leads and opportunities with Salesforce.'
        icon={<Briefcase className='h-5 w-5' />}
        onConnect={() => logDebug('Connect Salesforce clicked')}      />
      <IntegrationCard
        title="Salesforce"
        description="Sync leads and opportunities with Salesforce."
        icon = {<Briefcase className="h-5 w-5" />,}
        onConnect = {() => logDebug('Connect Salesforce clicked'),}
      />
      <IntegrationCard
        title='Microsoft Teams'
        description='Receive updates through Microsoft Teams.'
        icon={<Users className='h-5 w-5' />}        onConnect={() => logDebug('Connect Teams clicked')}
      />
    </div>
  )
}        icon={<Briefcase className="h-5 w-5" />}

  );
}

export function IntegrationCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <IntegrationCard

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        title="Slack"
        description="Send notifications and interact with Zion from Slack."
        icon={<Slack className="h-5 w-5" />}
        onConnect={() => logDebug('Connect Slack clicked')}
<<<<<<< HEAD
      />
      <IntegrationCard
        title="Salesforce"
        description="Sync leads and opportunities with Salesforce."

        icon={<Briefcase className="h-5 w-5" />}


        onConnect={() => logDebug('Connect Salesforce clicked')}
      />
    </div>
  )
      />;
    </div>;
  );
}        icon={<Briefcase className="h-5 w-5" />}
        onConnect={() => logDebug('Connect Salesforce clicked')}
      />;
      <IntegrationCard
        title="Salesforce"
        description="Sync leads and opportunities with Salesforce."
        icon={<Briefcase className="h-5 w-5" />}
=======
      />;
      <IntegrationCard
        title='Salesforce'
        description='Sync leads and opportunities with Salesforce.'
        icon={<Briefcase className='h-5 w-5' />}
        onConnect={() => logDebug('Connect Salesforce clicked')}      />;
      <IntegrationCard
        title="Salesforce"
        description="Sync leads and opportunities with Salesforce."
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        onConnect={() => logDebug('Connect Salesforce clicked')}
      />
      <IntegrationCard
        title="Microsoft Teams"
        description="Receive updates through Microsoft Teams."
        icon={<Users className="h-5 w-5" />}
        onConnect={() => logDebug('Connect Teams clicked')}
<<<<<<< HEAD
        icon = {<Users className="h-5 w-5" />,}
        onConnect = {() => logDebug('Connect Teams clicked'),}
      />
    </div>;
  );
};
}
}
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      />;
    </div>;
  );
}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  );
}

import React from 'react';
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
} from 'lucide-react';
interface IntegrationCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  status?: 'connected' | 'disconnected' | 'pending';
  href?: string;
  on_connect?: () => void;
export /**
 * IntegrationCard - Function description
 */
function IntegrationCard() {
  return (
    <Card className='overflow - hidden'>;
      <CardHeader className='pb - 2'>;
        <div className='flex justify - between items - start'>;
          <div className='flex items - center gap - 3'>;
            <div className='h - 9 w - 9 flex items - center justify - center bg - muted rounded - md'>;
              {icon}
            </div>;
            <div>;
              <h3 className='font - semibold'>{title}</h3>;
            </div>;
          </div>;
          {status === 'connected' ? (
            <Badge;
              variant='outline';
              className='bg - green - 100 text - green - 800 gap - 1';
            >;
              <Check className='h - 3.5 w - 3.5' />;
              <span > Connected</span>;
            </Badge>) : status === 'pending' ? (
            <Badge variant='outline' className='bg - yellow - 100 text - yellow - 800'>;
              Pending;
            </Badge>) : (
            <Badge variant='outline'>Not Connected</Badge>)}
        </div>;
      </CardHeader>;
      <CardContent className='pb - 4'>;
        <p className='text - sm text - muted - foreground'>{description}</p>;
      </CardContent>;
      <CardFooter className='pt - 0'>;
        {status === 'connected' ? (
          <Button variant='outline' className='w - full' as_child>;
            <a;
              href={href}
              target='_blank';
              rel='noopener noreferrer';
              className='flex items - center gap - 1';
            >;
              <span > Manage</span>;
              <ExternalLink className='h - 3.5 w - 3.5' />;
            </a>;
          </Button>) : (
          <Button variant='default' className='w - full' on_click={on_connect}>;
            <span > Connect</span>;
            <ArrowRight className='ml - 1.5 h - 3.5 w - 3.5' />          </Button>;
            <ArrowRight className="ml - 1.5 h - 3.5 w - 3.5" />;
interface IntegrationCardProps {
  title: string,
  description: string,
  icon: React.ReactNode,
  status?: "connected" | "disconnected" | "pending";
  href?: string;
  on_connect?: () => void;
}
export /**
 * IntegrationCard - Function description
 */
function IntegrationCard() {
  return (
    <Card className="overflow - hidden">;
      <CardHeader className="pb - 2">;
        <div className="flex justify - between items - start">;
          <div className="flex items - center gap - 3">;
            <div className="h - 9 w - 9 flex items - center justify - center bg - muted rounded - md">;
              {icon}
            </div>;
            <div>;
              <h3 className="font - semibold">{title}</h3>;
            </div>;
          </div>;
          {status === "connected" ? (
            <Badge variant="outline" className="bg - green - 100 text - green - 800 gap - 1">;
              <Check className="h - 3.5 w - 3.5" />;
              <span > Connected</span>;
            </Badge>) : status === "pending" ? (
            <Badge variant="outline" className="bg - yellow - 100 text - yellow - 800">Pending</Badge>) : (
            <Badge variant="outline">Not Connected</Badge>)}
        </div>;
      </CardHeader>;
      <CardContent className="pb - 4">;
        <p className="text - sm text - muted - foreground">{description}</p>;
      </CardContent>;
      <CardFooter className="pt - 0">;
        {status === "connected" ? (
          <Button variant="outline" className="w - full" as_child>;
            <a href={href} target="_blank" rel="noopener noreferrer" className="flex items - center gap - 1">;
              <span > Manage</span>;
              <ExternalLink className="h - 3.5 w - 3.5" />;
            </a>;
          </Button>) : (
          <Button variant="default" className="w - full" on_click={on_connect}>;
            <span > Connect</span>;
            <ArrowRight className="ml - 1.5 h - 3.5 w - 3.5" />;
          </Button>)}
      </CardFooter>;
    </Card>);
export /**
 * IntegrationCards - Function description
 */
function IntegrationCards() {
  return (
    <div className='grid md:grid - cols - 3 gap - 6'>;
      <IntegrationCard;
        title='Slack';
        description='Send notifications and interact with Zion from Slack.';
        icon={<Slack className='h - 5 w - 5' />}
        on_connect={() => log_debug ('Connect Slack clicked')}
      />;
      <IntegrationCard;
        title='Salesforce';
        description='Sync leads and opportunities with Salesforce.';
        icon={<Briefcase className='h - 5 w - 5' />}
        on_connect={() => log_debug ('Connect Salesforce clicked')}      />;
      <IntegrationCard;
        title="Salesforce";
        description="Sync leads and opportunities with Salesforce.";
        icon = {<Briefcase className="h - 5 w - 5" />, }
        on_connect = {() => log_debug ('Connect Salesforce clicked'), }
      />;
      <IntegrationCard;
        title='Microsoft Teams';
        description='Receive updates through Microsoft Teams.';
        icon={<Users className='h - 5 w - 5' />}        on_connect={() => log_debug ('Connect Teams clicked')}
      />;
    </div>);
}        icon={<Briefcase className="h - 5 w - 5" />}
        on_connect={() => log_debug ('Connect Salesforce clicked')}
      />;
      <IntegrationCard;
        title="Microsoft Teams";
        description="Receive updates through Microsoft Teams.";
        icon={<Users className="h - 5 w - 5" />}
        on_connect={() => log_debug ('Connect Teams clicked')}
        icon = {<Users className="h - 5 w - 5" />, }
        on_connect = {() => log_debug ('Connect Teams clicked'), }
      />;
    </div>);
}
;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
