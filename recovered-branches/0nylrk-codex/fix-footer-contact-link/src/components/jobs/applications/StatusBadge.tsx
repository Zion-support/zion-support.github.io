
import { ApplicationStatus } from "@/types/jobs";
import { Badge } from "@/components/ui/badge";
interface StatusBadgeProps {
  status: ApplicationStatus;
}
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function StatusBadge({ status }: StatusBadgeProps) {
  switch (status) {
    case "new": return <Badge variant;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
<<<<<<< HEAD
}
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
