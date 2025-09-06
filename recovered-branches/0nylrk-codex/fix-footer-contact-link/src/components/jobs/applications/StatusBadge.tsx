


import { ApplicationStatus } from "@/types/jobs";
import { Badge } from "@/components/ui/badge";
interface StatusBadgeProps {
  status: ApplicationStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  switch (status) {

    case "new": return <Badge variant;

    default:
      return <Badge variant="outline">{status}</Badge>;
  }
}
