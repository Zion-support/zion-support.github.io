
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
interface NoJobsCardProps {;
  onUpdateProfile?: () => void;
}
<<<<<<< HEAD
export function NoJobsCard({ onUpdateProfile }: NoJobsCardProps) {
=======

export function NoJobsCard(): any ({ onUpdateProfile }: NoJobsCardProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
}