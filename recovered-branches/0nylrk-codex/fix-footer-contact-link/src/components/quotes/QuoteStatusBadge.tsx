
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Badge } from "@/components/ui/badge",
import { QuoteStatus } from "@/types/quotes",
const statusConfig: Record<QuoteStatus { label: string, className: string }> = {

<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {Badge} from "@/components/ui/badge";
import {QuoteStatus} from "@/types/quotes";
const statusConfig: Record<QuoteStatus, { label: string, className: string }> = {
import { Badge } from "@/components/ui/badge",
import { QuoteStatus } from "@/types/quotes",
const statusConfig: Record<QuoteStatus { label: string, className: string }> = {
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  new: { label: "New", className: "bg-blue-500 hover:bg-blue-600" },
  in_review: { label: "In Review", className: "bg-yellow-500 hover:bg-yellow-600" },
  accepted: { label: "Accepted", className: "bg-green-500 hover:bg-green-600" },
  responded: { label: "Responded", className: "bg-purple-500 hover:bg-purple-600" },
  closed: { label: "Closed", className: "bg-gray-500 hover:bg-gray-600" },
  archived: { label: "Archived", className: "bg-gray-400 hover:bg-gray-500" }},

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  new: { label: "New", className: "bg-blue-500 hover:bg-blue-600" }
  in_review: { label: "In Review", className: "bg-yellow-500 hover:bg-yellow-600" }
  accepted: { label: "Accepted", className: "bg-green-500 hover:bg-green-600" }
  responded: { label: "Responded", className: "bg-purple-500 hover:bg-purple-600" }
  closed: { label: "Closed", className: "bg-gray-500 hover:bg-gray-600" }
  archived: { label: "Archived", className: "bg-gray-400 hover:bg-gray-500" }}
<<<<<<< HEAD
<<<<<<< HEAD
interface QuoteStatusBadgeProps {
  status: QuoteStatus
}
export const QuoteStatusBadge = ({ status }: QuoteStatusBadgeProps) => {

export const QuoteStatusBadge = ({ status }: QuoteStatusBadgeProps) => {;
  const config = statusConfig[status];
  return (
    <Badge className={config.className}>
      {config.label}
    </Badge>
  )
=======
=======
import { Badge } from '@/components / ui / badge';
import { QuoteStatus } from '@/types / quotes';
const status_config: Record < QuoteStatus, { label: string, class_name: string }> = {
  new: { label: "New", class_name: "bg - blue - 500 hover:bg - blue - 600" },
  in_review: { label: "In Review", class_name: "bg - yellow - 500 hover:bg - yellow - 600" },
  accepted: { label: "Accepted", class_name: "bg - green - 500 hover:bg - green - 600" },
  responded: { label: "Responded", class_name: "bg - purple - 500 hover:bg - purple - 600" },
  closed: { label: "Closed", class_name: "bg - gray - 500 hover:bg - gray - 600" },
  archived: { label: "Archived", class_name: "bg - gray - 400 hover:bg - gray - 500" }},
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
interface QuoteStatusBadgeProps {

  status: QuoteStatus
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
interface QuoteStatusBadgeProps {
  status: QuoteStatus
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


export const QuoteStatusBadge = ({ status }: QuoteStatusBadgeProps) => {;


  const config = statusConfig[status];
<<<<<<< HEAD
  status: QuoteStatus;
}
export const QuoteStatusBadge = ({ status }: QuoteStatusBadgeProps) =>: any {
  const config = status_config[status];
;
=======
=======
export const QuoteStatusBadge = ({ status }: QuoteStatusBadgeProps) =>: any {
  const config = status_config[status];
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <Badge className={config.class_name}>;
      {config.label}

<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Badge } from "@/components/ui/badge",;
import { QuoteStatus } from "@/types/quotes",;
const statusConfig: Record<QuoteStatus { label: string, className: string }> = {;

<<<<<<< HEAD
const statusConfig: Record<QuoteStatus, { label: string, className: string }> = {;
}

import { Badge } from "@/components/ui/badge",;
import { QuoteStatus } from "@/types/quotes",;
const statusConfig: Record<QuoteStatus { label: string, className: string }> = {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
const statusConfig: Record<QuoteStatus, { label: string, className: string }> = {;
=======


=======
import { Badge } from "@/components/ui/badge",;
import { QuoteStatus } from "@/types/quotes",;
const statusConfig: Record<QuoteStatus { label: string, className: string }> = {;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  new: { label: "New", className: "bg-blue-500 hover:bg-blue-600" },;
  in_review: { label: "In Review", className: "bg-yellow-500 hover:bg-yellow-600" },;
  accepted: { label: "Accepted", className: "bg-green-500 hover:bg-green-600" },;
  responded: { label: "Responded", className: "bg-purple-500 hover:bg-purple-600" },;
  closed: { label: "Closed", className: "bg-gray-500 hover:bg-gray-600" },;
  archived: { label: "Archived", className: "bg-gray-400 hover:bg-gray-500" }},;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface QuoteStatusBadgeProps {;
  status: QuoteStatus;
}

<<<<<<< HEAD
<<<<<<< HEAD


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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export const QuoteStatusBadge = ({ status }: QuoteStatusBadgeProps) => {;
  const config = statusConfig[status];

  return (
    <Badge className={config && config.className}>;
      {config && config.label}
    </Badge>;
  );




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    </Badge>);
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
