
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
interface NoJobsCardProps {;
  onUpdateProfile?: () => void;
}


export function NoJobsCard(): any ({ onUpdateProfile }: NoJobsCardProps) {;

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
=======
import { Card, CardContent  } from '@/components / ui / card';
import { Button  } from '@/components / ui / button';
interface NoJobsCardProps {
  onUpdateProfile?: () => void;
}
<<<<<<< HEAD

export function NoJobsCard({ onUpdateProfile }: NoJobsCardProps) {
=======
export /**
 * NoJobsCard - Function description
 */
function NoJobsCard() {
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  return (
    <Card className="bg - muted / 30 border border - dashed">;
      <CardContent className="p - 6 text - center">;
        <p className="text - muted - foreground">;
          No job suggestions available yet. Complete your profile to get;
          AI - matched jobs.;
        </p>;
        {onUpdateProfile && (
<<<<<<< HEAD
          <Button variant="outline" className="mt-4" asChild>
            <a href="/profile">Update Profile</a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

    </Card>;
=======
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

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
interface NoJobsCardProps {
  onUpdateProfile?: () => void
}

  );
}
<<<<<<< HEAD
;
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
