
import { ApplicationStatus } from &quot;@/types/jobs&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;

interface StatusBadgeProps {
  status: ApplicationStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  switch (status) {
    case &quot;new&quot;:
      return <Badge variant=&quot;secondary&quot;>Submitted</Badge>;
    case &quot;viewed&quot;:
      return <Badge variant=&quot;outline&quot;>Viewed</Badge>;
    case &quot;shortlisted&quot;:
      return <Badge className=&quot;bg-blue-100 text-blue-800&quot;>Shortlisted</Badge>;
    case &quot;interview&quot;:
      return <Badge className=&quot;bg-purple-100 text-purple-800&quot;>Interview</Badge>;
    case &quot;hired&quot;:
      return <Badge className=&quot;bg-green-100 text-green-800&quot;>Hired</Badge>;
    case &quot;rejected&quot;:
      return <Badge className=&quot;bg-red-100 text-red-800&quot;>Not Selected</Badge>;
    default:
      return <Badge variant=&quot;outline&quot;>{status}</Badge>;
  }
}
