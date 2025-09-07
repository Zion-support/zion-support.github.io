import { ApplicationStatus } from "@/types/jobs";

import { Badge } from "@/components/ui/badge";

import { ApplicationStatus } from "@/types/jobs";""
import { Badge } from "@/components/ui/badge";"
pr-12325
interface StatusBadgeProps {;
  status: ApplicationStatus;

export function StatusBadge(): any ({ status }: StatusBadgeProps) {;
<<<<<<< HEAD
  }
  switch (status) {;interface StatusBadgeProps {
  }
  "status": ApplicationStatus;
}
export function StatusBadge() {
  }
  switch (status) {
    }
    case "new": return <Badge variant;"
    "default":      return <Badge variant="outline">{status}</Badge>;"
  }
}
import { ApplicationStatus } from "@/types/jobs","
import { Badge } from "@/components/ui/badge","
interface StatusBadgeProps {
  }
  "status": ApplicationStatus
}
export function StatusBadge() {
  }
  switch (status) {
    }
    case "viewed":"
return <Badge variant="outline">Viewed</Badge>,;"
    case "shortlisted":"
return <Badge className="bg-blue-100 text-blue-800">Shortlisted</Badge>,;"
    case "interview":"
return <Badge className="bg-purple-100 text-purple-800">Interview</Badge>,;"
    case "hired":"
return <Badge className="bg-green-100 text-green-800">Hired</Badge>,;"
    case "rejected":"
return <Badge className="bg-red-100 text-red-800">Not Selected</Badge>,;"
    "default":
return <Badge variant="outline">{status}</Badge>;"
interface StatusBadgeProps {;
  }
  "status": ApplicationStatus;
}
;
export function StatusBadge() {;
  }
=======
>>>>>>> origin/chore/fix-lint-and-merge
  switch (status) {;
import { ApplicationStatus  } from '@/types / jobs';
import { Badge  } from '@/components / ui / badge';

import { ApplicationStatus } from "@/types/jobs";
import { Badge } from "@/components/ui/badge";
interface StatusBadgeProps {

  status: ApplicationStatus;
}
export function StatusBadge({ status }: StatusBadgeProps) {}
  switch (status) {";
    case "new": return <Badge variant;

  }
}

import { ApplicationStatus } from "@/types/jobs",

import { Badge } from "@/components/ui/badge",

}

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
      return <Badge variant="secondary">Submitted</Badge>;"
    case "viewed":;"
      return <Badge variant="outline">Viewed</Badge>;"
    case "shortlisted":;"
interface StatusBadgeProps {
  }
  "status": ApplicationStatus
=======

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

"
import { ApplicationStatus } from "@/types/jobs","
import { Badge } from "@/components/ui/badge",
interface StatusBadgeProps {};
  status: ApplicationStatus;
>>>>>>> origin/chore/fix-lint-and-merge
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
interface StatusBadgeProps {
  status: ApplicationStatus
}

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