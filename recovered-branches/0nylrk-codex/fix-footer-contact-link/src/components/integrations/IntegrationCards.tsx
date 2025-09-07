<<<<<<< HEAD
import React from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
interface IntegrationCardProps {
  title: string,
  description: string,
  icon: React.ReactNode,
  status?: "connected" | "disconnected" | "pending",
  href?: string,
  onConnect?: () => void
}
export function IntegrationCard({
  title,
  description,
  icon,
  status = $2;
  href,
=======
status?: "connected" | "disconnected" | "pending";

  href?: string;
  onConnect?: () => void;
}

  title;
  description;

<<<<<<< HEAD
import React from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
interface IntegrationCardProps {
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {ArrowRight, Check, ExternalLink} from "lucide-react";
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

interface IntegrationCardProps {;
  title: string,;
  description: string,;
  icon: React && React.ReactNode,;
<<<<<<< HEAD
"
  status?: "connected" | "disconnected" | "pending";
  href?: string;"
import { Badge } from "@/components/ui/badge","
import { ArrowRight, Check, ExternalLink } from "lucide-react",

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  status?: "connected" | "disconnected" | "pending";
  href?: string;
  onConnect?: () => void;
}
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export function IntegrationCard(): any ({;
  title;
  description;
  icon;
<<<<<<< HEAD
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

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface IntegrationCardProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  title: string,
  description: string,
  icon: React.ReactNode,"
  status?: "connected" | "disconnected" | "pending",
  href?: string,

<<<<<<< HEAD
;
export function IntegrationCard({;
=======
<<<<<<< HEAD

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
=======
  onConnect?: () => void
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  title;
  description;
  icon;"
  status = "disconnected";

  href;
export function IntegrationCard({};
  title;
  description;
  icon;

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
  onConnect}: IntegrationCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
<<<<<<< HEAD
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
        )}
      </CardFooter>
    </Card>
  )
}
export function IntegrationCards() {
  return (
=======

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
=======
          </Button>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from "react",;

import { ArrowRight, Check, ExternalLink } from "lucide-react",;
interface IntegrationCardProps {;
  title: string,,
  description: string,;
  icon: React.ReactNode,;"
  status?: "connected" | "disconnected" | "pending",;
  href?: string,;
  onConnect?: () => void;
}
;
<<<<<<< HEAD

=======
export function IntegrationCard({;
  title,;
  description,;
  icon,;
<<<<<<< HEAD

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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  status = "disconnected";
  href;
  onConnect}: IntegrationCardProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <Card className="overflow-hidden">;
      <CardHeader className="pb-2">;
        <div className="flex justify-between items-start">;
          <div className="flex items-center gap-3">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <div className="h-9 w-9 flex items-center justify-center bg-muted rounded-md">;
              {icon}
            </div>;
            <div>;
<<<<<<< HEAD

=======
              <h3 className="font-semibold">{title}</h3>;
            </div>;
          </div>;
          {status === "connected" ? (;
            <Badge variant="outline" className="bg-green-100 text-green-800 gap-1">;
<<<<<<< HEAD
              <Check className="h-3.5 w-3.5" />;
=======
              <Check className="h-3 && 3.5 w-3 && 3.5" />;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <span>Connected</span>;
            </Badge>;
          ) : status === "pending" ? (;
            <Badge variant="outline" className="bg-yellow-100 text-yellow-800">Pending</Badge>;
          ) : (;
              <Check className="h-3.5 w-3.5" />;
              <span>Connected</span>;
            </Badge>;
          ) :status === "pending" ? (;
            <Badge variant="outline" className="bg-yellow-100 text-yellow-800">Pending</Badge>;
          ) :(;
            <Badge variant="outline">Not Connected</Badge>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

          </Button>;

        )}
      </CardFooter>;
    </Card>;

export function IntegrationCards() {;

export function IntegrationCards() { return null; }
export function IntegrationCards() {}
  return (";
=======
<<<<<<< HEAD
              <ExternalLink className="h-3.5 w-3.5" />;
=======
              <ExternalLink className="h-3 && 3.5 w-3 && 3.5" />;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </a>;
          </Button>;
        ) : (;
          <Button variant="default" className="w-full" onClick={onConnect}>;
            <span>Connect</span>;
<<<<<<< HEAD
              <ExternalLink className="h-3.5 w-3.5" />;
            </a>;
          </Button>;
        ) :(;
          <Button variant="default" className="w-full" onClick={onConnect}>;
            <span>Connect</span>;
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />;
=======
            <ArrowRight className="ml-1 && 1.5 h-3 && 3.5 w-3 && 3.5" />;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </Button>;



        )}
      </CardFooter>;
    </Card>;


export function IntegrationCards() {;




export function IntegrationCards() {
  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    <div className="grid md:grid-cols-3 gap-6">;
      {/* Integration cards would go here */}

    </div>;
  );
}

<<<<<<< HEAD
      </CardFooter>;
    </Card>;
  );
}

=======
export function IntegrationCards() {;
  return (
    <div className="grid md:grid-cols-3 gap-6">;
      {/* Integration cards would go here */}
    </div>;
  );
}
import React from './react';
import { Button } from '@/components / ui / button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

          </Button>)}
      </CardFooter>;
    </Card>);
}
export /**;
 * IntegrationCards - Function description;
 */

>>>>>>> merged-prs-20250907-203621
    <div className="grid md:grid-cols-3 gap-6">
      {/* Integration cards would go here */}
    </div>
  )
}
<<<<<<< HEAD
};
;
=======

}
;

<<<<<<< HEAD
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
    <div className="grid md:grid-cols-3 gap-6">
      {/* Integration cards would go here */}
    </div>
  )
}
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
