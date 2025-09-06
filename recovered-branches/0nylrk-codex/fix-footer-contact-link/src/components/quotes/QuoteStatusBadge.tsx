<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteStatusBadge.tsx


<<<<<<< HEAD
=======

import { Badge } from "@/components/ui/badge",
import { QuoteStatus } from "@/types/quotes",
const statusConfig: Record<QuoteStatus { label: string, className: string }> = {

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

<<<<<<< HEAD
import {Badge} from "@/components/ui/badge";
import {QuoteStatus} from "@/types/quotes";
const statusConfig: Record<QuoteStatus, { label: string, className: string }> = {
=======
import { Badge } from "@/components/ui/badge",
import { QuoteStatus } from "@/types/quotes",
const statusConfig: Record<QuoteStatus { label: string, className: string }> = {
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  new: { label: "New", className: "bg-blue-500 hover:bg-blue-600" }
  in_review: { label: "In Review", className: "bg-yellow-500 hover:bg-yellow-600" }
  accepted: { label: "Accepted", className: "bg-green-500 hover:bg-green-600" }
  responded: { label: "Responded", className: "bg-purple-500 hover:bg-purple-600" }
  closed: { label: "Closed", className: "bg-gray-500 hover:bg-gray-600" }
  archived: { label: "Archived", className: "bg-gray-400 hover:bg-gray-500" }}
<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteStatusBadge.tsx
import { Badge } from '@/components / ui / badge';
import { QuoteStatus } from '@/types / quotes';
const status_config: Record < QuoteStatus, { label: string, class_name: string }> = {
  new: { label: "New", class_name: "bg - blue - 500 hover:bg - blue - 600" },
  in_review: { label: "In Review", class_name: "bg - yellow - 500 hover:bg - yellow - 600" },
  accepted: { label: "Accepted", class_name: "bg - green - 500 hover:bg - green - 600" },
  responded: { label: "Responded", class_name: "bg - purple - 500 hover:bg - purple - 600" },
  closed: { label: "Closed", class_name: "bg - gray - 500 hover:bg - gray - 600" },
  archived: { label: "Archived", class_name: "bg - gray - 400 hover:bg - gray - 500" }},
interface QuoteStatusBadgeProps {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteStatusBadge.tsx

  status: QuoteStatus
<<<<<<< HEAD

=======
interface QuoteStatusBadgeProps {
  status: QuoteStatus
<<<<<<< HEAD
}
<<<<<<< HEAD
export const QuoteStatusBadge = ({ status }: QuoteStatusBadgeProps) => {
=======

export const QuoteStatusBadge = ({ status }: QuoteStatusBadgeProps) => {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const config = statusConfig[status];
  return (
    <Badge className={config.className}>
      {config.label}
    </Badge>
  )
<<<<<<< HEAD

=======


export const QuoteStatusBadge = ({ status }: QuoteStatusBadgeProps) => {;


  const config = statusConfig[status];
=======
========
  status: QuoteStatus;
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteStatusBadge.tsx
export const QuoteStatusBadge = ({ status }: QuoteStatusBadgeProps) =>: any {
  const config = status_config[status];
;
  return (
    <Badge className={config.class_name}>;
      {config.label}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteStatusBadge.tsx

const statusConfig: Record<QuoteStatus, { label: string, className: string }> = {;
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { Badge } from "@/components/ui/badge",;
import { QuoteStatus } from "@/types/quotes",;
const statusConfig: Record<QuoteStatus { label: string, className: string }> = {;

========
const statusConfig: Record<QuoteStatus, { label: string, className: string }> = {;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteStatusBadge.tsx
=======
<<<<<<< HEAD
}

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { Badge } from "@/components/ui/badge",;
import { QuoteStatus } from "@/types/quotes",;
const statusConfig: Record<QuoteStatus { label: string, className: string }> = {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  new: { label: "New", className: "bg-blue-500 hover:bg-blue-600" },;
  in_review: { label: "In Review", className: "bg-yellow-500 hover:bg-yellow-600" },;
  accepted: { label: "Accepted", className: "bg-green-500 hover:bg-green-600" },;
  responded: { label: "Responded", className: "bg-purple-500 hover:bg-purple-600" },;
  closed: { label: "Closed", className: "bg-gray-500 hover:bg-gray-600" },;
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

<<<<<<< HEAD
};

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};
    </Badge>);
}
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteStatusBadge.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======

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
=======
;
export const QuoteStatusBadge = ({ status }: QuoteStatusBadgeProps) => {;
  const config = statusConfig[status];
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (;
    <Badge className={config.className}>;
      {config.label}
    </Badge>;
<<<<<<< HEAD
  ),;
},; interface QuoteStatusBadgeProps {
  status: QuoteStatus 
}export const QuoteStatusBadge = ({
  status 
}: QuoteStatusBadgeProps) => {
  const config = statusConfig[status];
config.className 
}> {
  config.label 
}</Badge>) 
};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteStatusBadge.tsx
=======
  );
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
