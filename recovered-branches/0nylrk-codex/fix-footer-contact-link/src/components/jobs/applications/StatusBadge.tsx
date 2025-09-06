<<<<<<< HEAD


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { ApplicationStatus } from "@/types/jobs";
import { Badge } from "@/components/ui/badge";
interface StatusBadgeProps {;
  status: ApplicationStatus;
}

<<<<<<< HEAD

export function StatusBadge(): any ({ status }: StatusBadgeProps) {;
  switch (status) {;
interface StatusBadgeProps {
=======
export function StatusBadge(): any ({ status }: StatusBadgeProps) {;
  switch (status) {;interface StatusBadgeProps {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  status: ApplicationStatus;
}
export function StatusBadge({ status }: StatusBadgeProps) {
  switch (status) {
    case "new": return <Badge variant;
<<<<<<< HEAD
    default:
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
      return <Badge variant="outline">{status}</Badge>;
=======
    default:      return <Badge variant="outline">{status}</Badge>;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  }
}

import { ApplicationStatus } from "@/types/jobs",
import { Badge } from "@/components/ui/badge",
interface StatusBadgeProps {
  status: ApplicationStatus
}

export function StatusBadge({ status }: StatusBadgeProps) {
  switch (status) {
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
export /**
 * StatusBadge - Function description
 */
function StatusBadge() {
  switch (status) {

    case "new":;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      return <Badge variant="secondary">Submitted</Badge>;
    case "viewed":;
      return <Badge variant="outline">Viewed</Badge>;
    case "shortlisted":;

<<<<<<< HEAD
      return <Badge className="bg - blue - 100 text - blue - 800">Shortlisted</Badge>;
    case "interview":;
      return <Badge className="bg - purple - 100 text - purple - 800">Interview</Badge>;
    case "hired":;
      return <Badge className="bg - green - 100 text - green - 800">Hired</Badge>;
    case "rejected":;
      return <Badge className="bg - red - 100 text - red - 800">Not Selected</Badge>;
    default:;

      return <Badge variant="outline">{status}</Badge>;
  }
}

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { ApplicationStatus } from "@/types/jobs",
import { Badge } from "@/components/ui/badge",
interface StatusBadgeProps {
  status: ApplicationStatus
}

export function StatusBadge({ status }: StatusBadgeProps) {
  switch (status) {
<<<<<<< HEAD



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
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
