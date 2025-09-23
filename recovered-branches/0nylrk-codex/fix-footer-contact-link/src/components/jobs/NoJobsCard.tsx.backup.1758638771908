
<<<<<<< HEAD
import { CardContent } from "@/components/ui/card";
=======
import { Card, CardContent } from "@/components/ui/card";
>>>>>>> origin/auto/autonomy-17186719616
import { Button } from "@/components/ui/button";

interface NoJobsCardProps {
  onUpdateProfile?: () => void;
}

export function NoJobsCard({ onUpdateProfile }: NoJobsCardProps) {
  return (
    <Card className="bg-muted/30 border border-dashed">
      <CardContent className="p-6 text-center">
        <p className="text-muted-foreground">
          No job suggestions available yet. Complete your profile to get AI-matched jobs.
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
