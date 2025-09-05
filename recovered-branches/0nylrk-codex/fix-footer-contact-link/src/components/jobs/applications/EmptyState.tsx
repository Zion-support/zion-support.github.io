
<<<<<<< HEAD
import { Button } from "@/components/ui/button",;
import { Card, CardContent } from "@/components/ui/card",;
import { Link } from "react-router-dom",;
;
export function EmptyState() {;
  return (;
    <Card className="bg-muted/30">;
      <CardContent className="pt-6 text-center">;
        <h3 className="text-lg font-medium mb-2">No Applications Yet</h3>;
        <p className="text-muted-foreground mb-4">;
          You haven't submitted any applications yet. Browse available jobs to get started!;
        </p>;
        <Button className="mt-4" asChild>;
          <Link to="/jobs">Browse Jobs</Link>;
        </Button>;
      </CardContent>;
    </Card>;
  ),;
}
=======
import { Button } from "@/components/ui/button",
import { Card, CardContent } from "@/components/ui/card",
import { Link } from "react-router-dom",export function EmptyState() {
  return (
    <Card className=&quot;bg-muted/30&quot;>
      <CardContent className=&quot;pt-6 text-center&quot;>
        <h3 className=&quot;text-lg font-medium mb-2&quot;>No Applications Yet</h3>
        <p className=&quot;text-muted-foreground mb-4&quot;>

export function EmptyState() {_return (
    <Card className="bg-muted/30">
      <CardContent className="pt-6 text-center">
        <h3 className="text-lg font-medium mb-2">No Applications Yet</h3>
        <p className="text-muted-foreground mb-4">
          You haven't submitted any applications yet. Browse available jobs to get started!
        </p>
        <Button className=&quot;mt-4&quot; asChild>
          <Link to=&quot;/jobs&quot;>Browse Jobs</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
