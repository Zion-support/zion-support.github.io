:src_backup/components/integrations/IntegrationCards.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import React from "react",
import { logDebug } from '@/utils/productionLogger',
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { ArrowRight, Check, ExternalLink, Slack, Briefcase, Users } from 'lucide-react'

<<<<<<< HEAD:src_backup/components/integrations/IntegrationCards.tsx
interface IntegrationCardProps {
  title: string,
  description: string,
  icon: React.ReactNode,
  status?: "connected" | "disconnected" | "pending",
  href?: string,
  onConnect?: () => void
}

:src/components/integrations/IntegrationCards.tsx
<<<<<<< HEAD
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/integrations/IntegrationCards.tsx
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/IntegrationCards.tsx
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
:src/components/integrations/IntegrationCards.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
interface IntegrationCardProps {
  title: string,
  description: string,
  icon: React.ReactNode,
  status?: 'connected' | 'disconnected' | 'pending''
  href?: string
  onConnect?: () => void

:src_backup/components/integrations/IntegrationCards.tsx
import React from 'react';
=======
interface IntegrationCardProps {}
  title: string;
  description: string;
  icon: React.ReactNode;
  status?: 'connected' | 'disconnected' | 'pending'
  href?: string;
  onConnect?: () => void;
'
import React from 'react';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/integrations/IntegrationCards.tsx
import { Button } from '@/components/ui/button';
import {;
  Card,;
  CardContent,;
  CardFooter,;
  CardHeader,;'
} from '@/components/ui/card';'
import { Badge } from '@/components/ui/badge';
import {;
pr-12325
  ArrowRight,;
  Check,;
  ExternalLink,;
  Slack,;
  Briefcase,;
  Users,;'
} from 'lucide-react';
}

:src_backup/components/integrations/IntegrationCards.tsx
interface IntegrationCardProps {;
  title: string;
  description: string;
  icon: React && React.ReactNode;'
  status?: 'connected' | 'disconnected' | 'pending';
  href?: string;
  onConnect?: () => void;

<<<<<<< HEAD:src_backup/components/integrations/IntegrationCards.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export function IntegrationCard({
  title,
  description,
  icon,
  status = "disconnected",
  href,
:src_backup/components/integrations/IntegrationCards.tsx
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
            </Link>
          </Button>
        ) : (
          <Button variant="default" className="w-full" onClick={onConnect}>
            <span>Connect</span>
  status?: "connected" | "disconnected" | "pending"
  href?: string;
  onConnect?: () => void'
              className='flex items-center gap-1'>;
              <span>Manage</span>;'
              <ExternalLink className='h-3 && 3.5 w-3 && 3.5' />;
            </a>;
          </Button>;
        ) : (;'
          <Button variant='default' className='w-full' onClick={onConnect}>;
            <span>Connect</span>;'
            <ArrowRight className='ml-1 && 1.5 h-3 && 3.5 w-3 && 3.5' />          </Button>;"
            <ArrowRight className="ml-1 && 1.5 h-3 && 3.5 w-3 && 3.5" />;
:src_backup/components/integrations/IntegrationCards.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </Button>"
import React from "react",;'
import { logDebug } from '@/utils/productionLogger',;"
import { Button } from "@/components/ui/button",;"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",;"
import { Badge } from "@/components/ui/badge",;'
import { ArrowRight, Check, ExternalLink, Slack, Briefcase, Users } from 'lucide-react';
interface IntegrationCardProps {;
  title: string,;
  description: string,;
:src_backup/components/integrations/IntegrationCards.tsx
icon: React.ReactNode,;
  status?: "connected" | "disconnected" | "pending",;
  href?: string,;
  onConnect?: () => void;
}
;
export function IntegrationCard({;
  title,;
  description,;
  icon,;
  status = "disconnected";
  href;
  onConnect}: IntegrationCardProps) {;
  return (;
  status?: "connected" | "disconnected" | "pending";
  href?: string;
  onConnect?: () => void;

}

export function IntegrationCard(): any ({;
              className='flex items-center gap-1'
            >
              <span>Manage</span>
              <ExternalLink className='h-3.5 w-3.5' />
            </a>
          </Button>
        ) : (
          <Button variant='default' className='w-full' onClick={onConnect}>
            <span>Connect</span>
            <ArrowRight className='ml-1.5 h-3.5 w-3.5' />
export function IntegrationCard({
origin/cursor/automate-test-improve-and-merge-code-2533
  title;
  description;
  icon;
"
  status = "disconnected";
  href;
  onConnect}: IntegrationCardProps) {;

:src_backup/components/integrations/IntegrationCards.tsx
  return (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    <Card className="overflow-hidden">;
      <CardHeader className="pb-2">;
        <div className="flex justify-between items-start">;
          <div className="flex items-center gap-3">;
=======
  return ("
    <Card className="overflow-hidden">;"
      <CardHeader className="pb-2">;"
        <div className="flex justify-between items-start">;"
          <div className="flex items-center gap-3">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/integrations/IntegrationCards.tsx
            <div className="h-9 w-9 flex items-center justify-center bg-muted rounded-md">;
              {icon}
            </div>;
            <div>;"
              <h3 className="font-semibold">{title}</h3>;
            </div>;
:src_backup/components/integrations/IntegrationCards.tsx
          </div>;
          {status === "connected" ? (;
            <Badge variant="outline" className="bg-green-100 text-green-800 gap-1">;
<Check className="h-3.5 w-3.5" />;
              <Check className="h-3 && 3.5 w-3 && 3.5" />;
:src_backup/components/integrations/IntegrationCards.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <span>Connected</span>;
            </Badge>;"
          ) : status === "pending" ? (;"
            <Badge variant="outline" className="bg-yellow-100 text-yellow-800">Pending</Badge>;
          ) : (;"
            <Badge variant="outline">Not Connected</Badge>;
          )}
:src_backup/components/integrations/IntegrationCards.tsx
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/IntegrationCards.tsx
        </div>;
      </CardHeader>;"
      <CardContent className="pb-4">;"
        <p className="text-sm text-muted-foreground">{description}</p>;
      </CardContent>;"
      <CardFooter className="pt-0">;"
        {status === "connected" ? (;"
          <Button variant="outline" className="w-full" asChild>;"
            <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">;
              <span>Manage</span>;
:src_backup/components/integrations/IntegrationCards.tsx

              <ExternalLink className="h-3.5 w-3.5" />;
            </a>;
          </Button>;
        ) : (;"
          <Button variant="default" className="w-full" onClick={onConnect}>;
            <span>Connect</span>;
:src_backup/components/integrations/IntegrationCards.tsx

<<<<<<< HEAD
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/integrations/IntegrationCards.tsx
        </div>
      </CardHeader>"
      <CardContent className="pb-4">"
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>"
      <CardFooter className="pt-0">"
        {status === "connected" ? ("
          <Button variant="outline" className="w-full" asChild>"
            <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <span>Manage</span>"
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </Button>
        ) : ("
          <Button variant="default" className="w-full" onClick={onConnect}>
:src_backup/components/integrations/IntegrationCards.tsx
            <span>Connect</span>
<<<<<<< HEAD
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/IntegrationCards.tsx
          </Button>
        )}
:src_backup/components/integrations/IntegrationCards.tsx
<<<<<<< HEAD:src/components/integrations/IntegrationCards.tsx
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />;
          </Button>;
        )}
      </CardFooter>;
    </Card>;
  );
:src_backup/components/integrations/IntegrationCards.tsx
<<<<<<< HEAD
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
      </CardFooter>
    </Card>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
export function IntegrationCards() {
  return (
    <div className='grid md:grid-cols-3 gap-6'>;
      <IntegrationCard
  );
:src_backup/components/integrations/IntegrationCards.tsx

=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/IntegrationCards.tsx
}

export function IntegrationCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <IntegrationCard
:src_backup/components/integrations/IntegrationCards.tsx
        title="Slack"
        description="Send notifications and interact with Zion from Slack."
        icon={<Slack className="h-5 w-5" />}
=======

export function IntegrationCards() {}
  return (';
    <div className='grid md:grid-cols-3 gap-6'>;
      <IntegrationCard;
  );
}

export function IntegrationCards() {}
  return ("
    <div className="grid md:grid-cols-3 gap-6">;
      <IntegrationCard;
"
        title="Slack""
        description="Send notifications and interact with Zion from Slack.""
        icon={<Slack className="h-5 w-5" />}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/integrations/IntegrationCards.tsx
        onConnect={() => logDebug('Connect Slack clicked')}
      />
      <IntegrationCard"
        title="Salesforce""
        description="Sync leads and opportunities with Salesforce."
:src_backup/components/integrations/IntegrationCards.tsx
<<<<<<< HEAD:src/components/integrations/IntegrationCards.tsx
<<<<<<< HEAD

        icon={<Briefcase className="h-5 w-5" />}
        onConnect={() => logDebug('Connect Salesforce clicked')}
      />
      <IntegrationCard
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        title="Microsoft Teams"
        description="Receive updates through Microsoft Teams."
        icon={<Users className="h-5 w-5" />}
=======
      <IntegrationCard"
        title="Microsoft Teams""
        description="Receive updates through Microsoft Teams.""
        icon={<Users className="h-5 w-5" />}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/integrations/IntegrationCards.tsx
        onConnect={() => logDebug('Connect Teams clicked')}
:src_backup/components/integrations/IntegrationCards.tsx

<<<<<<< HEAD
}

<<<<<<< HEAD:src/components/integrations/IntegrationCards.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/integrations/IntegrationCards.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/IntegrationCards.tsx
      />;
    </div>;
  );
}
:src_backup/components/integrations/IntegrationCards.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  );
}
'
import React from 'react';'
import { Button } from '@/components / ui / button';
import {}
  Card,
  CardContent,
  CardFooter,
  CardHeader,';
} from '@/components / ui / card';'
import { Badge } from '@/components / ui / badge';
  ArrowRight,
  Check,
  ExternalLink,
  Slack,
  Briefcase,
  Users,'
} from 'lucide-react';
:src_backup/components/integrations/IntegrationCards.tsx
interface IntegrationCardProps {}
  title: string;
  description: string;
  icon: React.ReactNode;'
  status?: 'connected' | 'disconnected' | 'pending';
  href?: string;
  on_connect?: () => void;
export /**;
 * IntegrationCard - Function description;
 */
function IntegrationCard() {}
  return ('
    <Card className='overflow - hidden'>;'
      <CardHeader className='pb - 2'>;'
        <div className='flex justify - between items - start'>;'
          <div className='flex items - center gap - 3'>;'
            <div className='h - 9 w - 9 flex items - center justify - center bg - muted rounded - md'>;
              {icon}
            </div>;
            <div>;'
              <h3 className='font - semibold'>{title}</h3>;
            </div>;
:src_backup/components/integrations/IntegrationCards.tsx
          </div>;'
          {status === 'connected' ? (
            <Badge;'
              variant='outline';'
              className='bg - green - 100 text - green - 800 gap - 1';
            >;'
              <Check className='h - 3.5 w - 3.5' />;
:src_backup/components/integrations/IntegrationCards.tsx
              <span > Connected</span>;'
            </Badge>) : status === 'pending' ? ('
            <Badge variant='outline' className='bg - yellow - 100 text - yellow - 800'>;
              Pending;
            </Badge>) : ('
            <Badge variant='outline'>Not Connected</Badge>)}
        </div>;
      </CardHeader>;'
      <CardContent className='pb - 4'>;'
        <p className='text - sm text - muted - foreground'>{description}</p>;
:src_backup/components/integrations/IntegrationCards.tsx
      </CardContent>;'
      <CardFooter className='pt - 0'>;'
        {status === 'connected' ? ('
          <Button variant='outline' className='w - full' as_child>;
            <a;
              href={href}'
              target='_blank';'
              rel='noopener noreferrer';'
              className='flex items - center gap - 1';
            >;
              <span > Manage</span>;'
              <ExternalLink className='h - 3.5 w - 3.5' />;
            </a>;
          </Button>) : ('
          <Button variant='default' className='w - full' on_click={on_connect}>;
            <span > Connect</span>;'
            <ArrowRight className='ml - 1.5 h - 3.5 w - 3.5' />          </Button>;"
            <ArrowRight className="ml - 1.5 h - 3.5 w - 3.5" />;
interface IntegrationCardProps {}
  title: string,
  description: string,
  icon: React.ReactNode,"
  status?: "connected" | "disconnected" | "pending";
  href?: string;
  on_connect?: () => void;
}
export /**;
 * IntegrationCard - Function description;
 */
function IntegrationCard() {}
  return ("
    <Card className="overflow - hidden">;"
      <CardHeader className="pb - 2">;"
        <div className="flex justify - between items - start">;"
          <div className="flex items - center gap - 3">;"
            <div className="h - 9 w - 9 flex items - center justify - center bg - muted rounded - md">;
              {icon}
            </div>;
            <div>;"
              <h3 className="font - semibold">{title}</h3>;
            </div>;
:src_backup/components/integrations/IntegrationCards.tsx
          </div>;"
          {status === "connected" ? ("
            <Badge variant="outline" className="bg - green - 100 text - green - 800 gap - 1">;"
              <Check className="h - 3.5 w - 3.5" />;
              <span > Connected</span>;"
            </Badge>) : status === "pending" ? ("
            <Badge variant="outline" className="bg - yellow - 100 text - yellow - 800">Pending</Badge>) : ("
            <Badge variant="outline">Not Connected</Badge>)}
        </div>;
      </CardHeader>;"
      <CardContent className="pb - 4">;"
        <p className="text - sm text - muted - foreground">{description}</p>;
:src_backup/components/integrations/IntegrationCards.tsx
      </CardContent>;"
      <CardFooter className="pt - 0">;"
        {status === "connected" ? ("
          <Button variant="outline" className="w - full" as_child>;"
            <a href={href} target="_blank" rel="noopener noreferrer" className="flex items - center gap - 1">;
              <span > Manage</span>;"
              <ExternalLink className="h - 3.5 w - 3.5" />;
            </a>;
          </Button>) : ("
          <Button variant="default" className="w - full" on_click={on_connect}>;
            <span > Connect</span>;"
            <ArrowRight className="ml - 1.5 h - 3.5 w - 3.5" />;
          </Button>)}
      </CardFooter>;
    </Card>);
export /**;
 * IntegrationCards - Function description;
 */
function IntegrationCards() {}
  return ('
    <div className='grid md:grid - cols - 3 gap - 6'>;
:src_backup/components/integrations/IntegrationCards.tsx
      <IntegrationCard;'
        title='Slack';'
        description='Send notifications and interact with Zion from Slack.';'
        icon={<Slack className='h - 5 w - 5' />}'
        on_connect={() => log_debug ('Connect Slack clicked')}
      />;
      <IntegrationCard;'
        title='Salesforce';'
        description='Sync leads and opportunities with Salesforce.';'
        icon={<Briefcase className='h - 5 w - 5' />}'
        on_connect={() => log_debug ('Connect Salesforce clicked')}      />;
      <IntegrationCard;"
        title="Salesforce";"
        description="Sync leads and opportunities with Salesforce.";"
        icon = {<Briefcase className="h - 5 w - 5" />, }'
        on_connect = {() => log_debug ('Connect Salesforce clicked'), }
      />;
      <IntegrationCard;'
        title='Microsoft Teams';'
        description='Receive updates through Microsoft Teams.';'
        icon={<Users className='h - 5 w - 5' />}        on_connect={() => log_debug ('Connect Teams clicked')}
      />;
    </div>);"
}        icon={<Briefcase className="h - 5 w - 5" />}'
        on_connect={() => log_debug ('Connect Salesforce clicked')}
      />;
      <IntegrationCard;"
        title="Microsoft Teams";"
        description="Receive updates through Microsoft Teams.";"
        icon={<Users className="h - 5 w - 5" />}'
        on_connect={() => log_debug ('Connect Teams clicked')}"
        icon = {<Users className="h - 5 w - 5" />, }'
        on_connect = {() => log_debug ('Connect Teams clicked'), }
      />;
    </div>);
}
:src_backup/components/integrations/IntegrationCards.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
<<<<<<< HEAD:src/components/integrations/IntegrationCards.tsx
<<<<<<< HEAD
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/integrations/IntegrationCards.tsx
=======
}}}}
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/IntegrationCards.tsx
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
:src/components/integrations/IntegrationCards.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
;'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/integrations/IntegrationCards.tsx
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/IntegrationCards.tsx
