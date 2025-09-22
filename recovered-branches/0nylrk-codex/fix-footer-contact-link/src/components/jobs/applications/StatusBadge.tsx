<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { ApplicationStatus } from "@/types/jobs";
=======

import { ApplicationStatus } from "@/types/jobs";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Badge } from "@/components/ui/badge";

import { ApplicationStatus } from "@/types/jobs";""
import { Badge } from "@/components/ui/badge";"
pr-12325
interface StatusBadgeProps {;
  status: ApplicationStatus;

<<<<<<< HEAD
export function StatusBadge(): any ({ status }: StatusBadgeProps) {;
  switch (status) {;interface StatusBadgeProps {

export function StatusBadge(): any ({ status }: StatusBadgeProps) {;
  switch (status) {;
import { ApplicationStatus  } from '@/types / jobs';
import { Badge  } from '@/components / ui / badge';

import { ApplicationStatus } from "@/types/jobs";
import { Badge } from "@/components/ui/badge";
interface StatusBadgeProps {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  status: ApplicationStatus;
}
export function StatusBadge({ status }: StatusBadgeProps) {}
  switch (status) {";
    case "new": return <Badge variant;
default:      return <Badge variant="outline">{status}</Badge>;
  }
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

import { ApplicationStatus } from "@/types/jobs",
import { Badge } from "@/components/ui/badge",
interface StatusBadgeProps {};
  status: ApplicationStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  switch (status) {
<<<<<<< HEAD
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
    default:"
      return <Badge variant="outline">{status}</Badge>";
import { ApplicationStatus } from "@/types/jobs",;"
=======

    default:
      return <Badge variant="outline">{status}</Badge>
import { ApplicationStatus } from "@/types/jobs",;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { Badge } from "@/components/ui/badge",;
interface StatusBadgeProps {;
  status: ApplicationStatus;
}
;
export function StatusBadge() { return null; }
      return <Badge variant="outline">{status}</Badge>;
  }
}
;
return <Badge variant="secondary">Submitted</Badge>;
    case "viewed":;
      return <Badge variant="outline">Viewed</Badge>;
    case "shortlisted":;
<<<<<<< HEAD
<<<<<<< HEAD
      return <Badge className="bg - blue - 100 text - blue - 800">Shortlisted</Badge>;
    case "interview":;
      return <Badge className="bg - purple - 100 text - purple - 800">Interview</Badge>;
    case "hired":;
      return <Badge className="bg - green - 100 text - green - 800">Hired</Badge>;
    case "rejected":;
      return <Badge className="bg - red - 100 text - red - 800">Not Selected</Badge>;
    default:;

"
import { ApplicationStatus } from "@/types/jobs","
import { Badge } from "@/components/ui/badge",
interface StatusBadgeProps {};
  status: ApplicationStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {}
  switch (status) {}
"
import { ApplicationStatus } from "@/types/jobs","
import { Badge } from "@/components/ui/badge",;
interface StatusBadgeProps {};
  status: ApplicationStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {}
  switch (status) {}
";
      return <Badge variant="outline">{status}</Badge>;
  }
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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

import { ApplicationStatus } from "@/types/jobs",
import { Badge } from "@/components/ui/badge",
interface StatusBadgeProps {
  status: ApplicationStatus
}

export function StatusBadge({ status }: StatusBadgeProps) {
  switch (status) {
<<<<<<< HEAD

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

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Badge } from "@/components/ui/badge",;
interface StatusBadgeProps {
  status: ApplicationStatus
}
;
export function StatusBadge() { return null; }
      return <Badge variant="outline">{status}</Badge>,;  }
 interface StatusBadgeProps {}
  status: ApplicationStatus;
}export function StatusBadge ({};
  status;
}: StatusBadgeProps) {}
  switch (status) {"
  case "viewed": return <Badge variant="outline">Viewed</Badge>;"
case "shortlisted": return <Badge className="bg-blue-100 text-blue-800">Shortlisted</Badge>;"
case "interview": return <Badge className="bg-purple-100 text-purple-800">Interview</Badge>;"
case "hired": return <Badge className="bg-green-100 text-green-800">Hired</Badge>;"
case "rejected": return <Badge className="bg-red-100 text-red-800">Not Selected</Badge>;"
default: return <Badge variant="outline"> {}
  status;
}</Badge> 
}
}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
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
=======

export function StatusBadge({ status }: StatusBadgeProps) {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
