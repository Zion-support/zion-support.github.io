
<<<<<<< HEAD
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
=======
import { Card, CardContent } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface NoJobsCardProps {
  onUpdateProfile?: () => void
}

export function NoJobsCard({ onUpdateProfile }: NoJobsCardProps) {
  return (
    <Card className=&quot;bg-muted/30 border border-dashed&quot;>
      <CardContent className=&quot;p-6 text-center&quot;>
        <p className=&quot;text-muted-foreground&quot;>
          No job suggestions available yet. Complete your profile to get AI-matched jobs.
        </p>
        {onUpdateProfile && (
          <Button variant=&quot;outline&quot; className=&quot;mt-4&quot; asChild>
            <a href=&quot;/profile&quot;>Update Profile</Link>
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
