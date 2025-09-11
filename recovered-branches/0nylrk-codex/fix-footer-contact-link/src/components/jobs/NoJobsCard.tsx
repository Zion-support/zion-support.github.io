


<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
interface NoJobsCardProps {;
  onUpdateProfile?: () => void;
<<<<<<< HEAD
}


export function NoJobsCard(): any ({ onUpdateProfile }: NoJobsCardProps) {;


import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
interface NoJobsCardProps {
  onUpdateProfile?: () => void;
}





    </Card>;


export function NoJobsCard({ onUpdateProfile }: NoJobsCardProps) {
  return (
    <Card className="bg-muted/30 border border-dashed">
      <CardContent className="p-6 text-center">
        <p className="text-muted-foreground">
          No job suggestions available yet. Complete your profile to get
          AI-matched jobs.
        </p>
        {onUpdateProfile && (
          <Button variant="outline" className="mt-4" asChild>
            <a href="/profile">Update Profile</a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

    </Card>;
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
interface NoJobsCardProps {
  onUpdateProfile?: () => void
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}


}

import { Card, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
;
interface NoJobsCardProps {;
  onUpdateProfile?:() => void,;
}
;
export function NoJobsCard({ onUpdateProfile } NoJobsCardProps) {;
  return (;
    <Card className="bg-muted/30 border border-dashed">;
      <CardContent className="p-6 text-center">;
        <p className="text-muted-foreground">;
          No job suggestions available yet. Complete your profile to get AI-matched jobs.;
        </p>;
        {onUpdateProfile && (;
          <Button variant="outline" className="mt-4" asChild>;
            <a href="/profile">Update Profile</a>;
          </Button>;
        )}
      </CardContent>;
    </Card>;
  ),;}
 interface NoJobsCardProps {
  onUpdateProfile?: () => void 
}export function NoJobsCard ({
  onUpdateProfile 
}: NoJobsCardProps) {
  return (<Card className="bg-muted/30 border border-dashed" > <CardContent className="p-6 text-center" > <p className="text-muted-foreground" > onUpdateProfile && (<Button variant="outline" className="mt-4" asChild> <a href="/profile" >Update Profile</Link> </Button>) 
}</CardContent> </Card>) 
}
<<<<<<< HEAD
  );
}
;
=======
export /**
 * NoJobsCard - Function description
 */
function NoJobsCard() {
  return (
    <Card className="bg - muted / 30 border border - dashed">;
      <CardContent className="p - 6 text - center">;
        <p className="text - muted - foreground">;
          No job suggestions available yet. Complete your profile to get;
          AI - matched jobs.;
        </p>;
        {onUpdateProfile && (
          <Button variant="outline" className="mt - 4" as_child>;
            <a href="/profile">Update Profile</a>;
          </Button>)}
      </CardContent>;
    </Card>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
=======





=======
    </Card>;
=======

import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
interface NoJobsCardProps {
  onUpdateProfile?: () => void
}

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  );
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
