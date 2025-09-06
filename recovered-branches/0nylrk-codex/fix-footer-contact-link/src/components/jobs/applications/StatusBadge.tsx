<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/StatusBadge.tsx

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { ApplicationStatus } from "@/types/jobs";
import { Badge } from "@/components/ui/badge";
interface StatusBadgeProps {;
  status: ApplicationStatus;
}


========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/StatusBadge.tsx
export function StatusBadge(): any ({ status }: StatusBadgeProps) {;
  switch (status) {;
import { ApplicationStatus  } from '@/types / jobs';
import { Badge  } from '@/components / ui / badge';
interface StatusBadgeProps {
  status: ApplicationStatus;
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/StatusBadge.tsx
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

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

import { ApplicationStatus } from "@/types/jobs",
import { Badge } from "@/components/ui/badge",
interface StatusBadgeProps {
  status: ApplicationStatus
}

export function StatusBadge({ status }: StatusBadgeProps) {
  switch (status) {
    case "new":;
      return <Badge variant="secondary">Submitted</Badge>;
    case "new": return <Badge variant="secondary">Submitted</Badge>,
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
      return <Badge variant="outline">{status}</Badge>;
  }
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      return <Badge variant="outline">{status}</Badge>;
  }
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/StatusBadge.tsx
export /**
 * StatusBadge - Function description
 */
function StatusBadge() {
  switch (status) {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/StatusBadge.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/StatusBadge.tsx
    case "new":;
      return <Badge variant="secondary">Submitted</Badge>;
    case "viewed":;
      return <Badge variant="outline">Viewed</Badge>;
    case "shortlisted":;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/StatusBadge.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/StatusBadge.tsx
      return <Badge className="bg - blue - 100 text - blue - 800">Shortlisted</Badge>;
    case "interview":;
      return <Badge className="bg - purple - 100 text - purple - 800">Interview</Badge>;
    case "hired":;
      return <Badge className="bg - green - 100 text - green - 800">Hired</Badge>;
    case "rejected":;
      return <Badge className="bg - red - 100 text - red - 800">Not Selected</Badge>;
    default:;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/StatusBadge.tsx

      return <Badge variant="outline">{status}</Badge>;
  }
}
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

import { ApplicationStatus } from "@/types/jobs",
import { Badge } from "@/components/ui/badge",
interface StatusBadgeProps {
  status: ApplicationStatus
}

export function StatusBadge({ status }: StatusBadgeProps) {
  switch (status) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

========
      return <Badge variant="outline">{status}</Badge>;
  }
=======

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
      return <Badge variant="outline">{status}</Badge>,;  }
 interface StatusBadgeProps {
  status: ApplicationStatus 
}export function StatusBadge ({
  status 
}: StatusBadgeProps) {
  switch (status) {
  case "viewed": return <Badge variant="outline">Viewed</Badge>;
case "shortlisted": return <Badge className="bg-blue-100 text-blue-800">Shortlisted</Badge>;
case "interview": return <Badge className="bg-purple-100 text-purple-800">Interview</Badge>;
case "hired": return <Badge className="bg-green-100 text-green-800">Hired</Badge>;
case "rejected": return <Badge className="bg-red-100 text-red-800">Not Selected</Badge>;
default: return <Badge variant="outline"> {
  status 
}</Badge> 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/StatusBadge.tsx
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
