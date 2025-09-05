
<<<<<<< HEAD
import { ApplicationStatus } from "@/types/jobs",;
import { Badge } from "@/components/ui/badge",;
;
interface StatusBadgeProps {;
  status:ApplicationStatus;
}
;
export function StatusBadge({ status } StatusBadgeProps) {;
  switch (status) {;
    case "new":return <Badge variant="secondary">Submitted</Badge>,;
    case "viewed":;
      return <Badge variant="outline">Viewed</Badge>,;
    case "shortlisted":;
      return <Badge className="bg-blue-100 text-blue-800">Shortlisted</Badge>,;
    case "interview":;
      return <Badge className="bg-purple-100 text-purple-800">Interview</Badge>,;
    case "hired":;
      return <Badge className="bg-green-100 text-green-800">Hired</Badge>,;
    case "rejected":;
      return <Badge className="bg-red-100 text-red-800">Not Selected</Badge>,;
    default:;
      return <Badge variant="outline">{status}</Badge>,;
=======
import { ApplicationStatus } from "@/types/jobs",
import { Badge } from "@/components/ui/badge",interface StatusBadgeProps {
  status: ApplicationStatus
}

export function StatusBadge({ status }: StatusBadgeProps) {
  switch (status) {
    case "new": return <Badge variant="secondary">Submitted</Badge>,    case "viewed":
      return <Badge variant="outline">Viewed</Badge>,
    case "shortlisted":
      return <Badge className="bg-blue-100 text-blue-800">Shortlisted</Badge>,
    case "interview":
      return <Badge className="bg-purple-100 text-purple-800">Interview</Badge>,
    case "hired":
      return <Badge className="bg-green-100 text-green-800">Hired</Badge>,
    case "rejected":
      return <Badge className="bg-red-100 text-red-800">Not Selected</Badge>,
    default:
      return <Badge variant="outline">{status}</Badge>
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
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
  }
}
