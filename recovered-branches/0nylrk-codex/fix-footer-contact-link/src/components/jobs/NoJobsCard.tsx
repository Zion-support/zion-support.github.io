



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
export /**
 * NoJobsCard - Function description
 */
function NoJobsCard() {
=======
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
export function NoJobsCard({ onUpdateProfile }: NoJobsCardProps) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  return (
    <Card className="bg - muted / 30 border border - dashed">;
      <CardContent className="p - 6 text - center">;
        <p className="text - muted - foreground">;
          No job suggestions available yet. Complete your profile to get;
          AI - matched jobs.;
        </p>;
        {onUpdateProfile && (
<<<<<<< HEAD
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

=======
          <Button variant="outline" className="mt-4" asChild>
            <a href="/profile">Update Profile</a>
          </Button>
        )}
      </CardContent>
<<<<<<< HEAD
    </Card>
  );
}
=======

=======
    </Card>;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
interface NoJobsCardProps {
  onUpdateProfile?: () => void
}

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  );
}
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
