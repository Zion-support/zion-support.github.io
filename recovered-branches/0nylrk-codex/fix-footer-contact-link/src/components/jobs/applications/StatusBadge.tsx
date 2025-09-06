<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import { ApplicationStatus } from "@/types/jobs";
import { Badge } from "@/components/ui/badge";
interface StatusBadgeProps {
  status: ApplicationStatus;
}
<<<<<<< HEAD
export function StatusBadge({ status }: StatusBadgeProps) {
  switch (status) {
    case "new": return <Badge variant;
    default:
=======


import { ApplicationStatus } from "@/types/jobs";
import { Badge } from "@/components/ui/badge";
interface StatusBadgeProps {;
  status: ApplicationStatus;
}


export function StatusBadge(): any ({ status }: StatusBadgeProps) {;
  switch (status) {;
=======
import { ApplicationStatus  } from '@/types / jobs';
import { Badge  } from '@/components / ui / badge';
interface StatusBadgeProps {
  status: ApplicationStatus;
}
export /**
 * StatusBadge - Function description
 */
function StatusBadge() {
  switch (status) {

    case "new":;
      return <Badge variant="secondary">Submitted</Badge>;
    case "viewed":;
      return <Badge variant="outline">Viewed</Badge>;
    case "shortlisted":;

      return <Badge className="bg - blue - 100 text - blue - 800">Shortlisted</Badge>;
    case "interview":;
      return <Badge className="bg - purple - 100 text - purple - 800">Interview</Badge>;
    case "hired":;
      return <Badge className="bg - green - 100 text - green - 800">Hired</Badge>;
    case "rejected":;
      return <Badge className="bg - red - 100 text - red - 800">Not Selected</Badge>;
    default:;

>>>>>>> main
      return <Badge variant="outline">{status}</Badge>;
  }
}
=======
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main

import { ApplicationStatus } from "@/types/jobs",
import { Badge } from "@/components/ui/badge",
interface StatusBadgeProps {
  status: ApplicationStatus
}

export function StatusBadge({ status }: StatusBadgeProps) {
  switch (status) {
<<<<<<< HEAD
<<<<<<< HEAD
    case "new":;
      return <Badge variant="secondary">Submitted</Badge>;
=======
    case "new": return <Badge variant="secondary">Submitted</Badge>,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    case "viewed":
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
      return <Badge variant="outline">{status}</Badge>;
  }
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      return <Badge variant="outline">{status}</Badge>
import { ApplicationStatus } from "@/types/jobs",;
import { Badge } from "@/components/ui/badge",;
interface StatusBadgeProps {;
  status: ApplicationStatus;
}
;
export function StatusBadge({ status }: StatusBadgeProps) {;
  switch (status) {;
    case "new": return <Badge variant="secondary">Submitted</Badge>,;
    case "viewed":;
      return <Badge variant="outline">Viewed</Badge>,;
    case "shortlisted":;
      return <Badge className="bg-blue-100 text-blue-800">Shortlisted</Badge>,;
    case "interview":;
      return <Badge className="bg-purple-100 text-purple-800">Interview</Badge>,;
    case "hired":;
      return <Badge className="bg-green-100 text-green-800">Hired</Badge>;
    case "rejected":;
      return <Badge className="bg-red-100 text-red-800">Not Selected</Badge>;
    default:;
      return <Badge variant="outline">{status}</Badge>;
  }
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> main
