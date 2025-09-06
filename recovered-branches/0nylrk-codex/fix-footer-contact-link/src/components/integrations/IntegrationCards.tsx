<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationCards.tsx


<<<<<<< HEAD
import React from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",

=======



========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationCards.tsx
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {ArrowRight, Check, ExternalLink} from "lucide-react";
<<<<<<< HEAD
<<<<<<< HEAD
interface IntegrationCardProps {;
  title: string,;
  description: string,;
  icon: React && React.ReactNode,;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationCards.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationCards.tsx
  status?: "connected" | "disconnected" | "pending";
  href?: string;
  onConnect?: () => void;
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationCards.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationCards.tsx
export function IntegrationCard(): any ({;
  title;
  description;
  icon;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
interface IntegrationCardProps {

  title: string
  description: string
  icon: React.ReactNode

  status?: "connected" | "disconnected" | "pending";
  href?: string;
import { Badge } from "@/components/ui/badge",
import { ArrowRight, Check, ExternalLink } from "lucide-react",

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface IntegrationCardProps {
  title: string,
  description: string,
  icon: React.ReactNode,
  status?: "connected" | "disconnected" | "pending",
  href?: string,
<<<<<<< HEAD
<<<<<<< HEAD

  onConnect?: () => void
}

<<<<<<< HEAD
export function IntegrationCard({

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  onConnect?: () => void
}

export function IntegrationCard({;
  title;
  description;
  icon;
  status = "disconnected";
  href;
export function IntegrationCard({
  title;
  description;
  icon;
  status;
  title,
  description,
  icon,
  status = "disconnected",
  href,
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </Button>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { ArrowRight, Check, ExternalLink } from "lucide-react",;
interface IntegrationCardProps {;
  title: string,;
  description: string,;
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
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  status = "disconnected";
  href;
  onConnect}: IntegrationCardProps) {;
  return (
=======

import React from "react",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { ArrowRight, Check, ExternalLink } from "lucide-react",;
;
interface IntegrationCardProps {;
  title:string,;
  description:string,;
  icon:React.ReactNode,;
  status?:"connected" | "disconnected" | "pending",;
  href?:string,;
  onConnect?:() => void;
}
;
export function IntegrationCard({;
  title,;
  description,;
  icon,;
  status = "disconnected",;
  href,;
  onConnect} IntegrationCardProps) {;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
  status = "disconnected";
  href;
  onConnect}: IntegrationCardProps) {;
  return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
              <Check className="h-3 && 3.5 w-3 && 3.5" />;
=======
              <Check className="h-3.5 w-3.5" />;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <span>Connected</span>;
            </Badge>;
          ) : status === "pending" ? (;
            <Badge variant="outline" className="bg-yellow-100 text-yellow-800">Pending</Badge>;
          ) : (;
<<<<<<< HEAD
=======
              <Check className="h-3.5 w-3.5" />;
              <span>Connected</span>;
            </Badge>;
          ) :status === "pending" ? (;
            <Badge variant="outline" className="bg-yellow-100 text-yellow-800">Pending</Badge>;
          ) :(;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
              <ExternalLink className="h-3 && 3.5 w-3 && 3.5" />;
=======
              <ExternalLink className="h-3.5 w-3.5" />;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </a>;
          </Button>;
        ) : (;
          <Button variant="default" className="w-full" onClick={onConnect}>;
            <span>Connect</span>;
<<<<<<< HEAD
            <ArrowRight className="ml-1 && 1.5 h-3 && 3.5 w-3 && 3.5" />;
=======
              <ExternalLink className="h-3.5 w-3.5" />;
            </a>;
          </Button>;
        ) :(;
          <Button variant="default" className="w-full" onClick={onConnect}>;
            <span>Connect</span>;
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          </Button>;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        )}
      </CardFooter>;
    </Card>;
<<<<<<< HEAD
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationCards.tsx
<<<<<<< HEAD

=======


export function IntegrationCards() {;

=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export function IntegrationCards() {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
    <div className="grid md:grid-cols-3 gap-6">;
      {/* Integration cards would go here */}
<<<<<<< HEAD
    </div>
  )

=======

    </div>;
  );
}

=======
========
export function IntegrationCards() {;
  return (
    <div className="grid md:grid-cols-3 gap-6">;
      {/* Integration cards would go here */}
    </div>;
  );
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationCards.tsx
import React from './react';
import { Button } from '@/components / ui / button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import { ArrowRight, Check, ExternalLink } from './lucide-react';
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
}
export /**
 * IntegrationCards - Function description
 */
function IntegrationCards() {
  return (
    <div className="grid md:grid - cols - 3 gap - 6">;
      {/* Integration cards would go here */}
    </div>);
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationCards.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
  ),;
}
;
export function IntegrationCards() {;
  return (;
    <div className="grid md:grid-cols-3 gap-6">;
      {/* Integration cards would go here */}
    </div>;
  ),;}
 interface IntegrationCardProps {
  title: string;
description: string;
icon: React.ReactNode;
status?: "connected" | "disconnected" | "pending";
href?: string;
<span>Connected</span> </Badge>) : status === "pending" ? (<Badge variant="outline" className="bg-yellow-100 text-yellow-800" >Pending</Badge>) : (<Badge variant="outline" >Not Connected</Badge>) 
}</div> </CardHeader> <span>Manage</span> <ExternalLink className="h-3.5 w-3.5" /> </Link> </Button>) : (<span>Connect</span> <ArrowRight className="ml-1.5 h-3.5 w-3.5" /> </Button>) 
}</CardFooter> </Card>) 
}{
  /* Integration cards would go here */ 
}</div>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationCards.tsx
=======
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />;
          </Button>;
        )}
      </CardFooter>
    </Card>
  )
}

export function IntegrationCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {/* Integration cards would go here */}
    </div>
  )
}
}
;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
