<<<<<<< HEAD
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

import React from "react",
import { logDebug } from '@/utils/productionLogger',
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { ArrowRight, Check, ExternalLink, Slack, Briefcase, Users } from 'lucide-react'
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> main
interface IntegrationCardProps {
  title: string
  description: string
  icon: React.ReactNode
  status?: 'connected' | 'disconnected' | 'pending'
  href?: string
  onConnect?: () => void
<<<<<<< HEAD
<<<<<<< HEAD
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
}

=======
=======
}

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


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

}

interface IntegrationCardProps {;
  title: string;
  description: string;
  icon: React && React.ReactNode;
  status?: 'connected' | 'disconnected' | 'pending';
  href?: string;
  onConnect?: () => void;




>>>>>>> main
export function IntegrationCard({
  title,
  description,
  icon,
  status = "disconnected",
  href,
  onConnect}: IntegrationCardProps) {
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
            </Link>
          </Button>
        ) : (
          <Button variant="default" className="w-full" onClick={onConnect}>
            <span>Connect</span>
<<<<<<< HEAD
            <ArrowRight className='ml-1.5 h-3.5 w-3.5' />          </Button>
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
=======
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
          )}
        </div>;
      </CardHeader>;
      <CardContent className='pb-4'>;
        <p className='text-sm text-muted-foreground'>{description}</p>;
      </CardContent>;
      <CardFooter className='pt-0'>;
        {status === 'connected' ? (;
          <Button variant='outline' className='w-full' asChild>;
            <a
              href={href}
              target='_blank'
              rel='noopener noreferrer'


import React from "react";
import { logDebug } from '@/utils/productionLogger';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, ExternalLink, Slack, Briefcase, Users } from 'lucide-react'
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';


>>>>>>> main
interface IntegrationCardProps {
  title: string
  description: string
  icon: React.ReactNode
  status?: "connected" | "disconnected" | "pending"
  href?: string
  onConnect?: () => void
<<<<<<< HEAD
=======
=======
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

>>>>>>> main
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
<<<<<<< HEAD
  icon: React.ReactNode,;
  status?: "connected" | "disconnected" | "pending",;
  href?: string,;
  onConnect?: () => void;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
=======
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

>>>>>>> main
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
<<<<<<< HEAD
        )}
      </CardFooter>
    </Card>
  )
=======
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
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />;
          </Button>;
        )}
      </CardFooter>;
    </Card>;
  );
}

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

>>>>>>> main
export function IntegrationCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <IntegrationCard
<<<<<<< HEAD
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
=======
=======


>>>>>>> main
        title="Slack"
        description="Send notifications and interact with Zion from Slack."
        icon={<Slack className="h-5 w-5" />}
        onConnect={() => logDebug('Connect Slack clicked')}
      />
      <IntegrationCard
        title="Salesforce"
        description="Sync leads and opportunities with Salesforce."
<<<<<<< HEAD
        icon={<Briefcase className="h-5 w-5" />}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        onConnect={() => logDebug('Connect Salesforce clicked')}
      />
=======

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
>>>>>>> main
      <IntegrationCard
        title="Microsoft Teams"
        description="Receive updates through Microsoft Teams."
        icon={<Users className="h-5 w-5" />}
        onConnect={() => logDebug('Connect Teams clicked')}
<<<<<<< HEAD
<<<<<<< HEAD
        icon = {<Users className="h-5 w-5" />,}
        onConnect = {() => logDebug('Connect Teams clicked'),}
      />
    </div>;
  );
};
}
<<<<<<< HEAD
=======
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======


}


>>>>>>> main
      />;
    </div>;
  );
}
<<<<<<< HEAD
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

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
>>>>>>> main
