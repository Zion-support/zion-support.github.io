<<<<<<< HEAD

<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

import React from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",

=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import {ArrowRight, Check, ExternalLink} from "lucide-react";
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import {ArrowRight, Check, ExternalLink} from "lucide-react";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

interface IntegrationCardProps {;
  title: string,;
  description: string,;
  icon: React && React.ReactNode,;

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import React from "react";"
import {Button} from "@/components/ui/button";"
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";"
import {Badge} from "@/components/ui/badge";"
import {ArrowRight, Check, ExternalLink} from "lucide-react";
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  status?: "connected" | "disconnected" | "pending";
  href?: string;
  onConnect?: () => void;
}

<<<<<<< HEAD
export function IntegrationCard(): any ({;
=======

export function IntegrationCard(): any ({;
  title;
  description;
  icon;
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


export function IntegrationCard(): any ({;
  title;
  description;
  icon;
interface IntegrationCardProps {
  title: string,
  description: string,
  icon: React.ReactNode,
  status?: "connected" | "disconnected" | "pending",
  href?: string,

  onConnect?: () => void
}




  onConnect?: () => void
}

export function IntegrationCard({;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  title;
  description;
  icon;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
interface IntegrationCardProps {
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

=======
"
import React from "react","
import { Button } from "@/components/ui/button","
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",";
import { Badge } from "@/components/ui/badge";"
import { ArrowRight, Check, ExternalLink } from "lucide-react";
interface IntegrationCardProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
interface IntegrationCardProps {;
  title: string,;
  description: string,;
  icon: React && React.ReactNode,;
"
  status?: "connected" | "disconnected" | "pending";
  href?: string;"
import { Badge } from "@/components/ui/badge","
import { ArrowRight, Check, ExternalLink } from "lucide-react",


<<<<<<< HEAD
export function IntegrationCard(): any ({;
  title;
  description;
  icon;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface IntegrationCardProps {
=======
interface IntegrationCardProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  title: string,
  description: string,
  icon: React.ReactNode,"
  status?: "connected" | "disconnected" | "pending",
  href?: string,

;
export function IntegrationCard({;
=======
import {ArrowRight, Check, ExternalLink} from "lucide-react";export function IntegrationCard({;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import {ArrowRight, Check, ExternalLink} from "lucide-react";export function IntegrationCard({;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  title;
  description;
  icon;"
  status = "disconnected";
  href;
export function IntegrationCard({};
  title;
  description;
  icon;
  status;
  title,
  description,
  icon,"
  status = "disconnected",
  href,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======



>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  onConnect}: IntegrationCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
=======

  onConnect}: IntegrationCardProps) {}
  return ("
    <Card className="overflow-hidden">"
      <CardHeader className="pb-2">"
        <div className="flex justify-between items-start">"
          <div className="flex items-center gap-3">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <div className="h-9 w-9 flex items-center justify-center bg-muted rounded-md">
              {icon}
            </div>
            <div>"
              <h3 className="font-semibold">{title}</h3>
            </div>
          </div>"
          {status === "connected" ? ("
            <Badge variant="outline" className="bg-green-100 text-green-800 gap-1">"
              <Check className="h-3.5 w-3.5" />
              <span>Connected</span>
            </Badge>"
          ) : status === "pending" ? ("
            <Badge variant="outline" className="bg-yellow-100 text-yellow-800">Pending</Badge>
          ) : ("
            <Badge variant="outline">Not Connected</Badge>
          )}
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
            </Link>
          </Button>
        ) : ("
          <Button variant="default" className="w-full" onClick={onConnect}>
            <span>Connect</span>"
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          </Button>
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react",;
=======
          </Button>import React from "react",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          </Button>import React from "react",;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          </Button>

import React from "react",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
=======


"
import React from "react",;"
import { Button } from "@/components/ui/button",;"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",;"
import { Badge } from "@/components/ui/badge",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { ArrowRight, Check, ExternalLink } from "lucide-react",;
interface IntegrationCardProps {;
  title: string,;
  description: string,;
  icon: React.ReactNode,;"
  status?: "connected" | "disconnected" | "pending",;
  href?: string,;
  onConnect?: () => void;
}
;
<<<<<<< HEAD
export function IntegrationCard({;
  title,;
  description,;
<<<<<<< HEAD
  icon,;            <Badge variant="outline">Not Connected</Badge>;
=======
export function IntegrationCard() { return null; }
}
  return (
"
    <Card className="overflow-hidden">;"
      <CardHeader className="pb-2">;"
        <div className="flex justify-between items-start">;"
          <div className="flex items-center gap-3">;"
=======
  icon,;
  status = "disconnected";
  href;
  onConnect}: IntegrationCardProps) {;
  return (

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
  status = "disconnected";
  href;
  onConnect}: IntegrationCardProps) {;
  status?: "connected" | "disconnected" | "pending";
  href?: string;
  onConnect?: () => void;
}
  return (
    <Card className="overflow-hidden">;
      <CardHeader className="pb-2">;
        <div className="flex justify-between items-start">;
          <div className="flex items-center gap-3">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <div className="h-9 w-9 flex items-center justify-center bg-muted rounded-md">;
              {icon}
            </div>;
            <div>;
<<<<<<< HEAD

              <span>Connected</span>;
            </Badge>;"
          ) : status === "pending" ? (;"
            <Badge variant="outline" className="bg-yellow-100 text-yellow-800">Pending</Badge>;
          ) : (;
"
            <Badge variant="outline">Not Connected</Badge>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          )}
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
<<<<<<< HEAD
<<<<<<< HEAD
              <ExternalLink className="h-3 && 3.5 w-3 && 3.5" />;            </a>;
=======

            </a>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              <ExternalLink className="h-3 && 3.5 w-3 && 3.5" />;
            </a>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          </Button>;
        ) : (;"
          <Button variant="default" className="w-full" onClick={onConnect}>;
            <span>Connect</span>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            <ArrowRight className="ml-1 && 1.5 h-3 && 3.5 w-3 && 3.5" />;
          </Button>;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
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
=======
=======
            <ArrowRight className="ml-1 && 1.5 h-3 && 3.5 w-3 && 3.5" />;
          </Button>;


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          </Button>;


=======
            <ArrowRight className="ml-1 && 1.5 h-3 && 3.5 w-3 && 3.5" />;          </Button>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            <ArrowRight className="ml-1 && 1.5 h-3 && 3.5 w-3 && 3.5" />;          </Button>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        )}
      </CardFooter>;
    </Card>;
<<<<<<< HEAD
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


export function IntegrationCards() {;
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



export function IntegrationCards() { return null; }
export function IntegrationCards() {}
  return (";
    <div className="grid md:grid-cols-3 gap-6">;
      {/* Integration cards would go here */}
<<<<<<< HEAD
    </div>
  )
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
}


export function IntegrationCards() {;




export function IntegrationCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6">;
      {/* Integration cards would go here */}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

    </div>;
  );
}

<<<<<<< HEAD


        )}
=======
}        )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}        )}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        )}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      </CardFooter>;
    </Card>;
  );
}
<<<<<<< HEAD
import React from './react';
import { Button } from '@/components / ui / button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
=======

import React from './react';'
import { Button } from '@/components / ui / button';'
import { Card, CardContent, CardFooter, CardHeader } from '@/components / ui / card';'
import { Badge } from '@/components / ui / badge';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { ArrowRight, Check, ExternalLink } from './lucide-react';
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
<<<<<<< HEAD
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
<<<<<<< HEAD
            <ArrowRight className="ml - 1.5 h - 3.5 w-3.5" />;
=======
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
          </div>;
        </div>;
      </CardHeader>;"
      <CardContent className="pb - 4">;"
        <p className="text - sm text - muted - foreground">{description}</p>;
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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            <ArrowRight className="ml - 1.5 h - 3.5 w - 3.5" />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          </Button>)}
      </CardFooter>;
    </Card>);
}
export /**;
 * IntegrationCards - Function description;
 */
<<<<<<< HEAD
function IntegrationCards() {
  return (
    <div className="grid md:grid - cols - 3 gap - 6">;
      {/* Integration cards would go here */}
    </div>);
}

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

export function IntegrationCards() {
  return (
=======
function IntegrationCards() {}
  return ("
    <div className="grid md:grid - cols - 3 gap - 6">;
      {/* Integration cards would go here */}


export function IntegrationCards() {}
  return ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    <div className="grid md:grid-cols-3 gap-6">
      {/* Integration cards would go here */}
    </div>
  )
}
};
;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
