<<<<<<< HEAD

import { Badge } from "@/components/ui/badge",
import { QuoteStatus } from "@/types/quotes",
const statusConfig: Record<QuoteStatus { label: string, className: string }> = {
  new: { label: "New", className: "bg-blue-500 hover:bg-blue-600" },
  in_review: { label: "In Review", className: "bg-yellow-500 hover:bg-yellow-600" },
  accepted: { label: "Accepted", className: "bg-green-500 hover:bg-green-600" },
  responded: { label: "Responded", className: "bg-purple-500 hover:bg-purple-600" },
  closed: { label: "Closed", className: "bg-gray-500 hover:bg-gray-600" },
  archived: { label: "Archived", className: "bg-gray-400 hover:bg-gray-500" }},
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
interface QuoteStatusBadgeProps {

  status: QuoteStatus
}
export const QuoteStatusBadge = ({ status }: QuoteStatusBadgeProps) => {

=======
  new: { label: "New", className: "bg-blue-500 hover:bg-blue-600" },"
  in_review: { label: "In Review", className: "bg-yellow-500 hover:bg-yellow-600" },"
  accepted: { label: "Accepted", className: "bg-green-500 hover:bg-green-600" },"
  responded: { label: "Responded", className: "bg-purple-500 hover:bg-purple-600" },"
  closed: { label: "Closed", className: "bg-gray-500 hover:bg-gray-600" },"
  archived: { label: "Archived", className: "bg-gray-400 hover:bg-gray-500" }},
"
  new: { label: "New", className: "bg-blue-500 hover:bg-blue-600" }"
  in_review: { label: "In Review", className: "bg-yellow-500 hover:bg-yellow-600" }"
  accepted: { label: "Accepted", className: "bg-green-500 hover:bg-green-600" }"
  responded: { label: "Responded", className: "bg-purple-500 hover:bg-purple-600" }"
  closed: { label: "Closed", className: "bg-gray-500 hover:bg-gray-600" }"
  archived: { label: "Archived", className: "bg-gray-400 hover:bg-gray-500" }}
interface QuoteStatusBadgeProps {}
  status: QuoteStatus;
export const QuoteStatusBadge = ({ status }: QuoteStatusBadgeProps) => {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const config = statusConfig[status];
  return (
    <Badge className={config.className}>
      {config.label}
    </Badge>
  )

<<<<<<< HEAD
export const QuoteStatusBadge = ({ status }: QuoteStatusBadgeProps) => {;

  const config = statusConfig[status];
export const QuoteStatusBadge = ({ status }: QuoteStatusBadgeProps) =>: any {};
  const config = status_config[status];
;
  return (
    <Badge className={config.class_name}>;
{config.label}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { Badge } from "@/components/ui/badge",;
import { QuoteStatus } from "@/types/quotes",;
const statusConfig: Record<QuoteStatus { label: string, className: string }> = {;
"
  new: { label: "New", className: "bg-blue-500 hover:bg-blue-600" },;"
  in_review: { label: "In Review", className: "bg-yellow-500 hover:bg-yellow-600" },;"
  accepted: { label: "Accepted", className: "bg-green-500 hover:bg-green-600" },;"
  responded: { label: "Responded", className: "bg-purple-500 hover:bg-purple-600" },;"
  closed: { label: "Closed", className: "bg-gray-500 hover:bg-gray-600" },;"
  archived: { label: "Archived", className: "bg-gray-400 hover:bg-gray-500" }},;
interface QuoteStatusBadgeProps {;
  status: QuoteStatus;
}

<<<<<<< HEAD
export const QuoteStatusBadge = ({ status }: QuoteStatusBadgeProps) => {;
  const config = statusConfig[status];

  return (
    <Badge className={config && config.className}>;
      {config && config.label}
    </Badge>;
  );
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
