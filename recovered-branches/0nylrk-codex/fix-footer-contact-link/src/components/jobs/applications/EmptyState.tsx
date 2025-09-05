
<<<<<<< HEAD
<<<<<<< HEAD
import { Button } from "@/components/ui/button",
import { Card, CardContent } from "@/components/ui/card",
import { Link } from "react-router-dom",
=======
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent } from &quot;@/components/ui/card&quot;;
import { Link } from &quot;react-router-dom&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function EmptyState() {
  return (
    <Card className=&quot;bg-muted/30&quot;>
      <CardContent className=&quot;pt-6 text-center&quot;>
        <h3 className=&quot;text-lg font-medium mb-2&quot;>No Applications Yet</h3>
        <p className=&quot;text-muted-foreground mb-4&quot;>
=======

export function EmptyState() {_return (
    <Card className="bg-muted/30">
      <CardContent className="pt-6 text-center">
        <h3 className="text-lg font-medium mb-2">No Applications Yet</h3>
        <p className="text-muted-foreground mb-4">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          You haven't submitted any applications yet. Browse available jobs to get started!
        </p>
        <Button className=&quot;mt-4&quot; asChild>
          <Link to=&quot;/jobs&quot;>Browse Jobs</Link>
        </Button>
      </CardContent>
    </Card>
<<<<<<< HEAD
  )
}
=======
  );}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
