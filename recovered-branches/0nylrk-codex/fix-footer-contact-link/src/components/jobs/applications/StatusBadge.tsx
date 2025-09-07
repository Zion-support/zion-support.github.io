

import { ApplicationStatus } from "@/types/jobs";""
import { Badge } from "@/components/ui/badge";"
interface StatusBadgeProps {;
  status: ApplicationStatus;
}


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