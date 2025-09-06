<<<<<<< HEAD




<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  status?: "connected" | "disconnected" | "pending";
  href?: string;
  onConnect?: () => void;
}
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export function IntegrationCard(): any ({;
  title;
  description;
  icon;
<<<<<<< HEAD
=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
interface IntegrationCardProps {

interface IntegrationCardProps {;
  title: string,;
  description: string,;
  icon: React && React.ReactNode,;

  status?: "connected" | "disconnected" | "pending";
  href?: string;
import { Badge } from "@/components/ui/badge",
import { ArrowRight, Check, ExternalLink } from "lucide-react",

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

export function IntegrationCard(): any ({;
  title;
  description;
  icon;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

  onConnect?: () => void
}

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======



>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  status = "disconnected";
  href;
  onConnect}: IntegrationCardProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
  status = "disconnected";
  href;
  onConnect}: IntegrationCardProps) {;
  return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  status = "disconnected";
  href;
  onConnect}: IntegrationCardProps) {;
  status?: "connected" | "disconnected" | "pending";
  href?: string;
  onConnect?: () => void;
}
  return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <Card className="overflow-hidden">;
      <CardHeader className="pb-2">;
        <div className="flex justify-between items-start">;
          <div className="flex items-center gap-3">;
            <div className="h-9 w-9 flex items-center justify-center bg-muted rounded-md">;
              {icon}
            </div>;
            <div>;
<<<<<<< HEAD
              <h3 className="font-semibold">{title}</h3>;
            </div>;
          </div>;
          {status === "connected" ? (;
            <Badge variant="outline" className="bg-green-100 text-green-800 gap-1">;
<<<<<<< HEAD
              <Check className="h-3 && 3.5 w-3 && 3.5" />;
=======
              <Check className="h-3.5 w-3.5" />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
              <ExternalLink className="h-3 && 3.5 w-3 && 3.5" />;
=======
              <ExternalLink className="h-3.5 w-3.5" />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          </Button>;



        )}
      </CardFooter>;
    </Card>;
<<<<<<< HEAD
  );
}
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


export function IntegrationCards() {;




export function IntegrationCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6">;
      {/* Integration cards would go here */}

    </div>;
  );
}

<<<<<<< HEAD
=======
=======
export function IntegrationCards() {;
  return (
    <div className="grid md:grid-cols-3 gap-6">;
      {/* Integration cards would go here */}
    </div>;
  );
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        )}
      </CardFooter>;
    </Card>;
  );
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
    </div>);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======

}
;

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
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />;
          </Button>;
        )}
      </CardFooter>
    </Card>
  )
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
