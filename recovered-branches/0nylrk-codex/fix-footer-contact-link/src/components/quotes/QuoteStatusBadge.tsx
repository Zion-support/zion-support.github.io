
import {Badge} from "@/components/ui/badge";
import {QuoteStatus} from "@/types/quotes";
const statusConfig: Record<QuoteStatus, { label: string, className: string }> = {
import { Badge } from "@/components/ui/badge",
import { QuoteStatus } from "@/types/quotes",
const statusConfig: Record<QuoteStatus { label: string, className: string }> = {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
  new: { label: "New", className: "bg-blue-500 hover:bg-blue-600" },
  in_review: { label: "In Review", className: "bg-yellow-500 hover:bg-yellow-600" },
  accepted: { label: "Accepted", className: "bg-green-500 hover:bg-green-600" },
  responded: { label: "Responded", className: "bg-purple-500 hover:bg-purple-600" },
  closed: { label: "Closed", className: "bg-gray-500 hover:bg-gray-600" },
  archived: { label: "Archived", className: "bg-gray-400 hover:bg-gray-500" }},

  new: { label: "New", className: "bg-blue-500 hover:bg-blue-600" }
  in_review: { label: "In Review", className: "bg-yellow-500 hover:bg-yellow-600" }
  accepted: { label: "Accepted", className: "bg-green-500 hover:bg-green-600" }
  responded: { label: "Responded", className: "bg-purple-500 hover:bg-purple-600" }
  closed: { label: "Closed", className: "bg-gray-500 hover:bg-gray-600" }
  archived: { label: "Archived", className: "bg-gray-400 hover:bg-gray-500" }}
interface QuoteStatusBadgeProps {
  status: QuoteStatus
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
export const QuoteStatusBadge = ({ status }: QuoteStatusBadgeProps) => {
=======

export const QuoteStatusBadge = ({ status }: QuoteStatusBadgeProps) => {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
export const QuoteStatusBadge = ({ status }: QuoteStatusBadgeProps) => {

export const QuoteStatusBadge = ({ status }: QuoteStatusBadgeProps) => {;
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
  const config = statusConfig[status];
  return (
    <Badge className={config.className}>
      {config.label}
    </Badge>
  )
<<<<<<< HEAD
<<<<<<< HEAD
}

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
}

=======


export const QuoteStatusBadge = ({ status }: QuoteStatusBadgeProps) => {;


  const config = statusConfig[status];
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
=======
export const QuoteStatusBadge = ({ status }: QuoteStatusBadgeProps) =>: any {
  const config = status_config[status];
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return (
    <Badge className={config.class_name}>;
      {config.label}

const statusConfig: Record<QuoteStatus, { label: string, className: string }> = {;
=======


=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import { Badge } from "@/components/ui/badge",;
import { QuoteStatus } from "@/types/quotes",;
const statusConfig: Record<QuoteStatus { label: string, className: string }> = {;

  new: { label: "New", className: "bg-blue-500 hover:bg-blue-600" },;
  in_review: { label: "In Review", className: "bg-yellow-500 hover:bg-yellow-600" },;
  accepted: { label: "Accepted", className: "bg-green-500 hover:bg-green-600" },;
  responded: { label: "Responded", className: "bg-purple-500 hover:bg-purple-600" },;
  closed: { label: "Closed", className: "bg-gray-500 hover:bg-gray-600" },;
  archived: { label: "Archived", className: "bg-gray-400 hover:bg-gray-500" }},;

interface QuoteStatusBadgeProps {;
  status: QuoteStatus;
}

export const QuoteStatusBadge = ({ status }: QuoteStatusBadgeProps) => {;
  const config = statusConfig[status];

  return (
    <Badge className={config && config.className}>;
      {config && config.label}
    </Badge>;
  );
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
};
