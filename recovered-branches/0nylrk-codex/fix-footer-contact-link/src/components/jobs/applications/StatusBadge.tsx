<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

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
<<<<<<< HEAD
<<<<<<< HEAD
export function StatusBadge(): any ({ status }: StatusBadgeProps) {;
  switch (status) {;interface StatusBadgeProps {
=======
interface StatusBadgeProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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
<<<<<<< HEAD
<<<<<<< HEAD
    default:      return <Badge variant="outline">{status}</Badge>;
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

import { ApplicationStatus } from "@/types/jobs",
=======
    default:
"
    case "new":;"
      return <Badge variant="secondary">Submitted</Badge>;"
    case "viewed":;"
      return <Badge variant="outline">Viewed</Badge>;"
    case "shortlisted":;"
      return <Badge className="bg - blue - 100 text - blue - 800">Shortlisted</Badge>;"
    case "interview":;"
      return <Badge className="bg - purple - 100 text - purple - 800">Interview</Badge>;"
    case "hired":;"
      return <Badge className="bg - green - 100 text - green - 800">Hired</Badge>;"
    case "rejected":;"
      return <Badge className="bg - red - 100 text - red - 800">Not Selected</Badge>;
    default:;
"
      return <Badge variant="outline">{status}</Badge>;
  }
}
"
import { ApplicationStatus } from "@/types/jobs","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Badge } from "@/components/ui/badge",
<<<<<<< HEAD
interface StatusBadgeProps {};
  status: ApplicationStatus;
=======
export function StatusBadge(): any ({ status }: StatusBadgeProps) {;

import { ApplicationStatus } from "@/types/jobs",;
import { Badge } from "@/components/ui/badge",;
interface StatusBadgeProps {
  status: ApplicationStatus
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}

<<<<<<< HEAD
export function StatusBadge({ status }: StatusBadgeProps) {
  switch (status) {
<<<<<<< HEAD
<<<<<<< HEAD
    case "new":;
      return <Badge variant="secondary">Submitted</Badge>;
    case "new": return <Badge variant="secondary">Submitted</Badge>,
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    case "viewed":
      return <Badge variant="outline">Viewed</Badge>,
    case "shortlisted":
      return <Badge className="bg-blue-100 text-blue-800">Shortlisted</Badge>,
    case "interview":
      return <Badge className="bg-purple-100 text-purple-800">Interview</Badge>,
    case "hired":
      return <Badge className="bg-green-100 text-green-800">Hired</Badge>,
    case "rejected":
=======
export function StatusBadge({ status }: StatusBadgeProps) {}
  switch (status) {"
    case "viewed":"
      return <Badge variant="outline">Viewed</Badge>,"
    case "shortlisted":"
      return <Badge className="bg-blue-100 text-blue-800">Shortlisted</Badge>,"
    case "interview":"
      return <Badge className="bg-purple-100 text-purple-800">Interview</Badge>,"
    case "hired":"
      return <Badge className="bg-green-100 text-green-800">Hired</Badge>,"
    case "rejected":"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
export /**
 * StatusBadge - Function description
 */
function StatusBadge() {
  switch (status) {

    case "new":;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      return <Badge variant="secondary">Submitted</Badge>;
    case "viewed":;
      return <Badge variant="outline">Viewed</Badge>;
    case "shortlisted":;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      return <Badge className="bg - blue - 100 text - blue - 800">Shortlisted</Badge>;
    case "interview":;
      return <Badge className="bg - purple - 100 text - purple - 800">Interview</Badge>;
    case "hired":;
      return <Badge className="bg - green - 100 text - green - 800">Hired</Badge>;
    case "rejected":;
=======
"
    case "new":;"
      return <Badge variant="secondary">Submitted</Badge>;"
    case "viewed":;"
      return <Badge variant="outline">Viewed</Badge>;"
    case "shortlisted":;
"
      return <Badge className="bg - blue - 100 text - blue - 800">Shortlisted</Badge>;"
    case "interview":;"
      return <Badge className="bg - purple - 100 text - purple - 800">Interview</Badge>;"
    case "hired":;"
      return <Badge className="bg - green - 100 text - green - 800">Hired</Badge>;"
    case "rejected":;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
}
=======
=======
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
=======
"
import { ApplicationStatus } from "@/types/jobs",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Badge } from "@/components/ui/badge",;
interface StatusBadgeProps {
  status: ApplicationStatus
}
<<<<<<< HEAD
;
<<<<<<< HEAD
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

export function StatusBadge(): any ({ status }: StatusBadgeProps) {;
  switch (status) {;
interface StatusBadgeProps {
  // TODO: Implement
export function StatusBadge({ status }: StatusBadgeProps) {
  switch (status) {"
    case "new": return <Badge variant;"
    default:"
    case "new":;""
      return <Badge variant="secondary">Submitted;""
      return <Badge variant="outline">Viewed;""
      return <Badge className="bg - blue - 100 text - blue - 800">Shortlisted;""
      return <Badge className="bg - purple - 100 text - purple - 800">Interview;""
      return <Badge className="bg - green - 100 text - green - 800">Hired;""
      return <Badge className="bg - red - 100 text - red - 800">Not Selected;""
      return <Badge variant="outline">{status};""
      return <Badge variant="outline">Viewed,""
      return <Badge className="bg-blue-100 text-blue-800">Shortlisted,""
      return <Badge className="bg-purple-100 text-purple-800">Interview,""
      return <Badge className="bg-green-100 text-green-800">Hired,""
      return <Badge className="bg-red-100 text-red-800">Not Selected,""
      return <Badge variant="outline">{status}""
    case "new": return <Badge variant="secondary">Submitted,;""
      return <Badge variant="outline">Viewed,;""
      return <Badge className="bg-blue-100 text-blue-800">Shortlisted,;""
      return <Badge className="bg-purple-100 text-purple-800">Interview,;""
      return <Badge className="bg-green-100 text-green-800">Hired;""
      return <Badge className="bg-red-100 text-red-800">Not Selected;""
    case "new":return <Badge variant="secondary">Submitted,;""
      return <Badge className="bg-green-100 text-green-800">Hired,;""
      return <Badge className="bg-red-100 text-red-800">Not Selected,;""
      return <Badge variant="outline">{status},;  }""
  case "viewed": return <Badge variant="outline">Viewed;""
case "shortlisted": return <Badge className="bg-blue-100 text-blue-800">Shortlisted;""
case "interview": return <Badge className="bg-purple-100 text-purple-800">Interview;""
case "hired": return <Badge className="bg-green-100 text-green-800">Hired;""
case "rejected": return <Badge className="bg-red-100 text-red-800">Not Selected;""
default: return <Badge variant="outline"> {"

} "
pr-12325
</Badge>
}</Badge> "

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
