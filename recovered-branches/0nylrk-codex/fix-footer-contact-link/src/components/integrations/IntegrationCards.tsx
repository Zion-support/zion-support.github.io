<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
status?: "connected" | "disconnected" | "pending";

  href?: string;
  onConnect?: () => void;
}

  title;
  description;


<<<<<<< HEAD
=======

interface IntegrationCardProps {;
  title: string,;
  description: string,;
  icon: React && React.ReactNode,;

>>>>>>> origin/cursor/delete-old-data-records-6bba
  title: string,
  description: string,
  icon: React.ReactNode,"
  status?: "connected" | "disconnected" | "pending",
  href?: string,


<<<<<<< HEAD

=======
;
export function IntegrationCard({;
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
  href;
export function IntegrationCard({};
  title;
  description;
  icon;


>>>>>>> origin/cursor/delete-old-data-records-6bba
  onConnect}: IntegrationCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

>>>>>>> origin/cursor/delete-old-data-records-6bba
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
export function IntegrationCard({;
  title,;
  description,;
  icon,;

  return (

    <Card className="overflow-hidden">;
      <CardHeader className="pb-2">;
        <div className="flex justify-between items-start">;
          <div className="flex items-center gap-3">;

=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
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
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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


=======


          </Button>;

        )}
      </CardFooter>;
    </Card>;

export function IntegrationCards() {;

export function IntegrationCards() { return null; }
export function IntegrationCards() {}
  return (";

>>>>>>> origin/cursor/delete-old-data-records-6bba
    <div className="grid md:grid-cols-3 gap-6">;
      {/* Integration cards would go here */}

    </div>;
  );
}

<<<<<<< HEAD

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
=======

      </CardFooter>;
    </Card>;
  );
}

>>>>>>> origin/cursor/delete-old-data-records-6bba

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

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    <div className="grid md:grid-cols-3 gap-6">
      {/* Integration cards would go here */}
    </div>
  )
}

<<<<<<< HEAD

}
;



=======
};
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
