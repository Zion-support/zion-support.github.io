


import React from "react";
import { logDebug  } from '@/utils/productionLogger';
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, ExternalLink, Slack, Briefcase, Users } from 'lucide-react'


interface IntegrationCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;

  status?: "connected" | "disconnected" | "pending";
  href?: string;
  onConnect?: () => void
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
origin/cursor/automate-test-improve-and-merge-code-2533
interface IntegrationCardProps {
  title: string,
  description: string,
  icon: React.ReactNode,
  status?: 'connected' | 'disconnected' | 'pending''
  href?: string
  onConnect?: () => void


interface IntegrationCardProps {
  // TODO: Implement
}
  title: string;,
  description: string;
  icon: React.ReactNode;
  status?: 'connected' | 'disconnected' | 'pending
  href?: string;
  onConnect?: () => void;
pr-12325
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
pr-12325
  ArrowRight,;
  Check,;
  ExternalLink,;
  Slack,;
  Briefcase,;
  Users,;
} from 'lucide-react';
}

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
              <Check className="h-3.5 w-3.5" />;
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
              <ExternalLink className="h-3.5 w-3.5" />;
            </a>;
          </Button>;
        ) : (;
          <Button variant="default" className="w-full" onClick={onConnect}>;
            <span>Connect</span>;
        </div>
      </CardHeader>
      <CardContent className="pb-4">"
        <p className="text-sm text-muted-foreground">{description}</p>"
      </CardContent>
      <CardFooter className="pt-0">"
        {status === "connected" ? ("
          <Button variant="outline" className="w-full" asChild>"
            <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">"
              <span>Manage</span>
              <ExternalLink className="h-3.5 w-3.5" />"
            </a>
          </Button>
        ) : (
          <Button variant="default" className="w-full" onClick={onConnect}>"
            <span>Connect</span>
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />"
          </Button>
        )}
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />;
          </Button>;
        )}
      </CardFooter>;
    </Card>;
  );




      </CardFooter>
    </Card>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
export function IntegrationCards() {
  return (
    <div className='grid md:grid-cols-3 gap-6'>;
      <IntegrationCard
  );
}
export function IntegrationCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6">"
      <IntegrationCard
        title="Slack""
        description="Send notifications and interact with Zion from Slack.""
        icon={<Slack className="h-5 w-5" />}"
        onConnect={() => logDebug('Connect Slack clicked')}'
      />
      <IntegrationCard
        title="Salesforce""
        description="Sync leads and opportunities with Salesforce.""
        icon={<Briefcase className="h-5 w-5" />}"
        onConnect={() => logDebug('Connect Salesforce clicked')}'
      />
    </div>
  )
      />;
    </div>;
  );
}        icon={<Briefcase className="h-5 w-5" />}"
        onConnect={() => logDebug('Connect Salesforce clicked')}'
      />;
      <IntegrationCard
        title="Microsoft Teams""
        description="Receive updates through Microsoft Teams.""
        icon={<Users className="h-5 w-5" />}"
        onConnect={() => logDebug('Connect Teams clicked')}'
}
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
        onConnect={() => logDebug('Connect Teams clicked')}
      />;
    </div>;
  );
}
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
  title: string;,
  description: string;,
  icon: React.ReactNode;,
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
          {status === 'connected' ? ('
            <Badge;
              variant='outline';
              className='bg - green - 100 text - green - 800 gap - 1';
            >;
              <Check className='h - 3.5 w - 3.5' />;
              <span > Connected</span>;
            </Badge>) : status === 'pending' ? ('
            <Badge variant='outline' className='bg - yellow - 100 text - yellow - 800'>;
              Pending;
            </Badge>) : (
            <Badge variant='outline'>Not Connected</Badge>)}'
        </div>;
      </CardHeader>;
      <CardContent className='pb - 4'>;
        <p className='text - sm text - muted - foreground'>{description}</p>;
      </CardContent>;
      <CardFooter className='pt - 0'>;
        {status === 'connected' ? ('
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
          {status === "connected" ? ("
            <Badge variant="outline" className="bg - green - 100 text - green - 800 gap - 1">;
              <Check className="h - 3.5 w - 3.5" />;
              <span > Connected</span>;
            </Badge>) : status === "pending" ? ("
            <Badge variant="outline" className="bg - yellow - 100 text - yellow - 800">Pending</Badge>) : ("
            <Badge variant="outline">Not Connected</Badge>)}"
        </div>;
      </CardHeader>;
      <CardContent className="pb - 4">;
        <p className="text - sm text - muted - foreground">{description}</p>;
      </CardContent>;
      <CardFooter className="pt - 0">;
        {status === "connected" ? ("
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
        icon={<Slack className='h - 5 w - 5' />}'
        on_connect={() => log_debug ('Connect Slack clicked')}'
      />;
      <IntegrationCard;
        title='Salesforce';
        description='Sync leads and opportunities with Salesforce.';
        icon={<Briefcase className='h - 5 w - 5' />}'
        on_connect={() => log_debug ('Connect Salesforce clicked')}      />;
      <IntegrationCard;
        title="Salesforce";
        description="Sync leads and opportunities with Salesforce.";
        icon = {<Briefcase className="h - 5 w - 5" />, }"
        on_connect = {() => log_debug ('Connect Salesforce clicked'), }'
      />;
      <IntegrationCard;
        title='Microsoft Teams';
        description='Receive updates through Microsoft Teams.';
        icon={<Users className='h - 5 w - 5' />}        on_connect={() => log_debug ('Connect Teams clicked')}'
      />;
    </div>);
}        icon={<Briefcase className="h - 5 w - 5" />}"
        on_connect={() => log_debug ('Connect Salesforce clicked')}'
      />;
      <IntegrationCard;
        title="Microsoft Teams";
        description="Receive updates through Microsoft Teams.";
        icon={<Users className="h - 5 w - 5" />}"
        on_connect={() => log_debug ('Connect Teams clicked')}'
        icon = {<Users className="h - 5 w - 5" />, }"
        on_connect = {() => log_debug ('Connect Teams clicked'), }'
      />;
    </div>);
}
;
}}}}
;
        icon = {<Briefcase className="h-5 w-5" />,}
        onConnect = {() => logDebug('Connect Salesforce clicked'),}
      />
      <IntegrationCard
        title='Microsoft Teams'
        description='Receive updates through Microsoft Teams.'
        icon={<Users className='h-5 w-5' />}
        onConnect={() => logDebug('Connect Teams clicked')}
        icon = {<Users className="h-5 w-5" />,}
        onConnect = {() => logDebug('Connect Teams clicked'),}
      />
    </div>
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
  status = "disconnected","
  href,)
  onConnect}: IntegrationCardProps) {
  return ("
    <Card className='overflow-hidden'>;

      <CardHeader className='pb-2'>;

        <div className='flex justify-between items-start'>;
</div>
          <div className='flex items-center gap-3'>;
            <div className='h-9 w-9 flex items-center justify-center bg-muted rounded-md'>;
            </div>;
            <div>;
              <h3 className='font-semibold'>{title}</h3>;
            <Badge;
              variant='outline
              className='bg-green-100 text-green-800 gap-1'>;

              <Check className='h-3 && 3.5 w-3 && 3.5' />;

              <span>Connected</span>;
            ;
            <Badge variant='outline' className='bg-yellow-100 text-yellow-800'>;

            <Badge variant='outline'>Not Connected;
      <CardContent className='pb-4'>;

        <p className='text-sm text-muted-foreground'>{description}</p>;
      <CardFooter className='pt-0'>;

          <Button variant='outline' className='w-full' asChild>;

            <a;
              href={href}
              target='_blank
              rel='noopener noreferrer
import React from "react";""
import { logDebug } from '@/utils/productionLogger';
import { Button } from "@/components/ui/button";""
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";""
import { Badge } from "@/components/ui/badge";""
import { ArrowRight, Check, ExternalLink, Slack, Briefcase, Users } from 'lucide-react
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
  // TODO: Implement
  status?: "connected" | "disconnected" | "pending""
  href?: string;)
</a>
              <span>Manage</span>;"
              <ExternalLink className='h-3 && 3.5 w-3 && 3.5' />;

            </a>;
          <Button variant='default' className='w-full' onClick={onConnect}>;

            <span>Connect</span>;
            <ArrowRight className='ml-1 && 1.5 h-3 && 3.5 w-3 && 3.5' />          ;

            <ArrowRight className="ml-1 && 1.5 h-3 && 3.5 w-3 && 3.5" />;"
"
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />"

    <Card className="overflow-hidden">;"
      <CardHeader className="pb-2">;"
        <div className="flex justify-between items-start">;"
</div>"
          <div className="flex items-center gap-3">;"
            <div className="h-9 w-9 flex items-center justify-center bg-muted rounded-md">;"
              <h3 className="font-semibold">{title}</h3>;"
          </div>;"
            <Badge variant="outline" className="bg-green-100 text-green-800 gap-1">;"
              <Check className="h-3 && 3.5 w-3 && 3.5" />;"

            ;"
            <Badge variant="outline" className="bg-yellow-100 text-yellow-800">Pending;""
            <Badge variant="outline">Not Connected;"
      <CardContent className="pb-4">;"
        <p className="text-sm text-muted-foreground">{description}</p>;"
      <CardFooter className="pt-0">;"
          <Button variant="outline" className="w-full" asChild>;"
            <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">;"
              <ExternalLink className="h-3.5 w-3.5" />;"

          <Button variant="default" className="w-full" onClick={onConnect}>;"

      <CardContent className="pb-4">"
        <p className="text-sm text-muted-foreground">{description}</p>"
      <CardFooter className="pt-0">"
          <Button variant="outline" className="w-full" asChild>"
            <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">"
              <span>Manage</span>"
              <ExternalLink className="h-3.5 w-3.5" />"

          <Button variant="default" className="w-full" onClick={onConnect}>"

            <span>Connect</span>"

            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />;"

    <div className='grid md:grid-cols-3 gap-6'>;
      <IntegrationCard;
  );

export function IntegrationCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6">"

      <IntegrationCard;"
        title="Slack"""
        description="Send notifications and interact with Zion from Slack."""
        icon={<Slack className="h-5 w-5" />}"

        title="Salesforce"""
        description="Sync leads and opportunities with Salesforce."""
        icon={<Briefcase className="h-5 w-5" />}"

}        icon={<Briefcase className="h-5 w-5" />}"

        title="Microsoft Teams"""
        description="Receive updates through Microsoft Teams."""
        icon={<Users className="h-5 w-5" />}"

    <Card className='overflow - hidden'>;

      <CardHeader className='pb - 2'>;

        <div className='flex justify - between items - start'>;
          <div className='flex items - center gap - 3'>;
            <div className='h - 9 w - 9 flex items - center justify - center bg - muted rounded - md'>;
              <h3 className='font - semibold'>{title}</h3>;
              variant='outline';
              className='bg - green - 100 text - green - 800 gap - 1';
            >;

              <Check className='h - 3.5 w - 3.5' />;

              <span > Connected</span>;)
            ) : status === 'pending' ? (
            <Badge variant='outline' className='bg - yellow - 100 text - yellow - 800'>;
)
            ) : ()
            <Badge variant='outline'>Not Connected)}
      <CardContent className='pb - 4'>;

        <p className='text - sm text - muted - foreground'>{description}</p>;
      <CardFooter className='pt - 0'>;

          <Button variant='outline' className='w - full' as_child>;

              target='_blank';
              rel='noopener noreferrer';
              className='flex items - center gap - 1';
              <span > Manage</span>;
              <ExternalLink className='h - 3.5 w - 3.5' />;

          ) : (
          <Button variant='default' className='w - full' on_click={on_connect}>;

            <span > Connect</span>;
            <ArrowRight className='ml - 1.5 h - 3.5 w - 3.5' />          ;

            <ArrowRight className="ml - 1.5 h - 3.5 w - 3.5" />;"
    <Card className="overflow - hidden">;"
      <CardHeader className="pb - 2">;"
        <div className="flex justify - between items - start">;"
          <div className="flex items - center gap - 3">;"
            <div className="h - 9 w - 9 flex items - center justify - center bg - muted rounded - md">;"
              <h3 className="font - semibold">{title}</h3>;"
            <Badge variant="outline" className="bg - green - 100 text - green - 800 gap - 1">;"
              <Check className="h - 3.5 w - 3.5" />;"

              <span > Connected</span>;)"
            ) : status === "pending" ? (")"
            <Badge variant="outline" className="bg - yellow - 100 text - yellow - 800">Pending) : (")"
            <Badge variant="outline">Not Connected)}"
      <CardContent className="pb - 4">;"
        <p className="text - sm text - muted - foreground">{description}</p>;"
      <CardFooter className="pt - 0">;"
          <Button variant="outline" className="w - full" as_child>;"
            <a href={href} target="_blank" rel="noopener noreferrer" className="flex items - center gap - 1">;"
              <span > Manage</span>;"
              <ExternalLink className="h - 3.5 w - 3.5" />;"

          ) : ("
          <Button variant="default" className="w - full" on_click={on_connect}>;"

            <span > Connect</span>;"
          )}
    );"
    <div className='grid md:grid - cols - 3 gap - 6'>;
        title='Slack';
        description='Send notifications and interact with Zion from Slack.';
        icon={<Slack className='h - 5 w - 5' />}

        title='Salesforce';
        description='Sync leads and opportunities with Salesforce.';
        icon={<Briefcase className='h - 5 w - 5' />}

        title="Salesforce";""
        description="Sync leads and opportunities with Salesforce.";""
        icon = {<Briefcase className="h - 5 w - 5" />, }"

        title='Microsoft Teams';
        description='Receive updates through Microsoft Teams.';
        icon={<Users className='h - 5 w - 5' />}        on_connect={() => log_debug ('Connect Teams clicked')}

    </div>);
}        icon={<Briefcase className="h - 5 w - 5" />}"

        title="Microsoft Teams";""
        description="Receive updates through Microsoft Teams.";""
        icon={<Users className="h - 5 w - 5" />}"
        icon = {<Users className="h - 5 w - 5" />, }"

    </div>);"
pr-12325
