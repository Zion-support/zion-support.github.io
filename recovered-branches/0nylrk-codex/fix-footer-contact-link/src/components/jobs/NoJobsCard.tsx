

<<<<<<< HEAD


import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
interface NoJobsCardProps {;
  onUpdateProfile?: () => void;
}


export function NoJobsCard(): any ({ onUpdateProfile }: NoJobsCardProps) {;

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  return (
    <Card className="bg-muted/30 border border-dashed">;
      <CardContent className="p-6 text-center">;
        <p className="text-muted-foreground">;
          No job suggestions available yet. Complete your profile to get;
          AI-matched jobs.;
        </p>;
        {onUpdateProfile && (;
          <Button variant="outline" className="mt-4" asChild>;
            <a href="/profile">Update Profile</a>;
          </Button>;
        )}
      </CardContent>;
    </Card>;
  );
import { Card, CardContent  } from '@/components / ui / card';
<<<<<<< HEAD
import { Button  } from '@/components / ui / button';
interface NoJobsCardProps {
  onUpdateProfile?: () => void
}
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
    </Card>
  );
}





    </Card>;
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
interface NoJobsCardProps {
  onUpdateProfile?: () => void
}

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
  );
}
;
=======
import { Button  } from '@/components / ui / button';
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
