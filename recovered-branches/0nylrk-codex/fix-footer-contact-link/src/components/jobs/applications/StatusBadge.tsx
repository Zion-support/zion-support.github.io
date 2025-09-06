
import { ApplicationStatus } from "@/types/jobs";
import { Badge } from "@/components/ui/badge";
interface StatusBadgeProps {
  status: ApplicationStatus}

export function StatusBadge({ status }: StatusBadgeProps) {
  switch (status) {
    case "new": return <Badge variant = $2;
    case "viewed":
      return <Badge variant = $2;
    case "shortlisted":
      return <Badge className = $2;
    case "interview":
      return <Badge className = $2;
    case "hired":
      return <Badge className = $2;
    case "rejected":
      return <Badge className = $2;
    default:
      return <Badge variant="outline">{status}</Badge>
  }
}
