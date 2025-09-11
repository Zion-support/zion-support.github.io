
import { Badge } from "@/components/ui/badge",
import { QuoteStatus } from "@/types/quotes",
const statusConfig: Record<QuoteStatus { label: string, className: string }> = {

  new: { label: "New", className: "bg-blue-500 hover:bg-blue-600" },
  in_review: { label: "In Review", className: "bg-yellow-500 hover:bg-yellow-600" },
  accepted: { label: "Accepted", className: "bg-green-500 hover:bg-green-600" },
  responded: { label: "Responded", className: "bg-purple-500 hover:bg-purple-600" },
  closed: { label: "Closed", className: "bg-gray-500 hover:bg-gray-600" },
  archived: { label: "Archived", className: "bg-gray-400 hover:bg-gray-500" }},

  in_review: { label: "In Review", className: "bg-yellow-500 hover:bg-yellow-600" }
  accepted: { label: "Accepted", className: "bg-green-500 hover:bg-green-600" }
  responded: { label: "Responded", className: "bg-purple-500 hover:bg-purple-600" }
  closed: { label: "Closed", className: "bg-gray-500 hover:bg-gray-600" }
  archived: { label: "Archived", className: "bg-gray-400 hover:bg-gray-500" }}
export const QuoteStatusBadge = ({ status }: QuoteStatusBadgeProps) => {;
  const config = statusConfig[status];
  return (
    <Badge className={config.className}>
      {config.label}
    </Badge>
  )
import { Badge } from '@/components / ui / badge';
import { QuoteStatus } from '@/types / quotes';
const status_config: Record < QuoteStatus, { label: string, class_name: string }> = {
  new: { label: "New", class_name: "bg - blue - 500 hover:bg - blue - 600" },
  in_review: { label: "In Review", class_name: "bg - yellow - 500 hover:bg - yellow - 600" },
  accepted: { label: "Accepted", class_name: "bg - green - 500 hover:bg - green - 600" },
  responded: { label: "Responded", class_name: "bg - purple - 500 hover:bg - purple - 600" },
  closed: { label: "Closed", class_name: "bg - gray - 500 hover:bg - gray - 600" },
  archived: { label: "Archived", class_name: "bg - gray - 400 hover:bg - gray - 500" }},interface QuoteStatusBadgeProps {

  status: QuoteStatus
interface QuoteStatusBadgeProps {
  status: QuoteStatus


export const QuoteStatusBadge = ({ status }: QuoteStatusBadgeProps) => {;


  const config = statusConfig[status];
import { QuoteStatus } from "@/types/quotes",;
const statusConfig: Record<QuoteStatus { label: string, className: string }> = {;

import { Badge } from "@/components/ui/badge",;
import { QuoteStatus } from "@/types/quotes",;
const statusConfig: Record<QuoteStatus { label: string, className: string }> = {;
const statusConfig: Record<QuoteStatus, { label: string, className: string }> = {;


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


};
    </Badge>);
}
;

import { Badge } from "@/components/ui/badge",;
import { QuoteStatus } from "@/types/quotes",;
;
const statusConfig:Record<QuoteStatus { label:string, className:string }> = {;
  new:{ label:"New", className:"bg-blue-500 hover:bg-blue-600" },;
  in_review:{ label:"In Review", className:"bg-yellow-500 hover:bg-yellow-600" },;
  accepted:{ label:"Accepted", className:"bg-green-500 hover:bg-green-600" },;
  responded:{ label:"Responded", className:"bg-purple-500 hover:bg-purple-600" },;
  closed:{ label:"Closed", className:"bg-gray-500 hover:bg-gray-600" },;
  archived:{ label:"Archived", className:"bg-gray-400 hover:bg-gray-500" }},;
;
interface QuoteStatusBadgeProps {;
  status:QuoteStatus;
}
;
export const QuoteStatusBadge = ({ status } QuoteStatusBadgeProps) => {;
  const config = statusConfig[status],;
  ;
;
export const QuoteStatusBadge = ({ status }: QuoteStatusBadgeProps) => {;
  const config = statusConfig[status];
  return (;
    <Badge className={config.className}>;
      {config.label}
    </Badge>;
  );
};
  const config = statusConfig[status];

  return (
    <Badge className={config && config.className}>;
      {config && config.label}
    </Badge>;
  );




};
    </Badge>);
}
;
