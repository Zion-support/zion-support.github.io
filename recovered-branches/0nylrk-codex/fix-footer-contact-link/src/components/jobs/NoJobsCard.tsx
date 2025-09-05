
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",interface NoJobsCardProps {
  onUpdateProfile?: () => void
}

export function NoJobsCard({ onUpdateProfile }: NoJobsCardProps) {
  return (
    <Card className=&quot;bg-muted/30 border border-dashed&quot;>
      <CardContent className=&quot;p-6 text-center&quot;>
        <p className=&quot;text-muted-foreground&quot;>

interface NoJobsCardProps {_onUpdateProfile?: () => void;}

export function NoJobsCard(_{_onUpdateProfile}: NoJobsCardProps) {_return (
    <Card className="bg-muted/30 border border-dashed">
      <CardContent className="p-6 text-center">
        <p className="text-muted-foreground">
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
