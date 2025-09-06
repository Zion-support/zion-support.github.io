<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import { ApplicationStatus } from "@/types/jobs";
import { Badge } from "@/components/ui/badge";
interface StatusBadgeProps {;
  status: ApplicationStatus;
}


<<<<<<< HEAD
export function StatusBadge(): any ({ status }: StatusBadgeProps) {;
  switch (status) {;
=======
import { ApplicationStatus  } from '@/types / jobs';
import { Badge  } from '@/components / ui / badge';
=======

import { ApplicationStatus } from "@/types/jobs";
import { Badge } from "@/components/ui/badge";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
      return <Badge variant="outline">{status}</Badge>;
  }
}
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
export /**
 * StatusBadge - Function description
 */
function StatusBadge() {
  switch (status) {
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    case "new":;
      return <Badge variant="secondary">Submitted</Badge>;
    case "viewed":;
      return <Badge variant="outline">Viewed</Badge>;
    case "shortlisted":;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      return <Badge className="bg - blue - 100 text - blue - 800">Shortlisted</Badge>;
    case "interview":;
      return <Badge className="bg - purple - 100 text - purple - 800">Interview</Badge>;
    case "hired":;
      return <Badge className="bg - green - 100 text - green - 800">Hired</Badge>;
    case "rejected":;
      return <Badge className="bg - red - 100 text - red - 800">Not Selected</Badge>;
    default:;
<<<<<<< HEAD

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

=======


import { ApplicationStatus } from "@/types/jobs",
import { Badge } from "@/components/ui/badge",
interface StatusBadgeProps {
  status: ApplicationStatus
}

export function StatusBadge({ status }: StatusBadgeProps) {
  switch (status) {

      return <Badge variant="outline">{status}</Badge>;
  }

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
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
