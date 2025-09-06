<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteDetails.tsx
=======

import {format} from "date-fns";

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
import React from "react";

import {
  Dialog
  DialogContent
  DialogHeader
  DialogTitle
  DialogDescription
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, User, Mail, Clock, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { QuoteStatusBadge } from "./QuoteStatusBadge";
import type { QuoteRequest } from "@/types/quotes";
import { format } from "date-fns";
import {format} from "date-fns";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react",
import { 
  Dialog,
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { Calendar, User, Mail, Clock, DollarSign } from "lucide-react",
import { Card, CardContent } from "@/components/ui/card",
import { Separator } from "@/components/ui/separator",
import { QuoteStatusBadge } from "./QuoteStatusBadge",
import type { QuoteRequest } from "@/types/quotes",
import { format } from "date-fns",
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
import React from "react";

import {
  Dialog
  DialogContent
  DialogHeader
  DialogTitle
  DialogDescription
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, User, Mail, Clock, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { QuoteStatusBadge } from "./QuoteStatusBadge";
import type { QuoteRequest } from "@/types/quotes";

import { format } from "date-fns";

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface QuoteDetailsProps {
  quote: QuoteRequest | null;
  isOpen: boolean;
  onClose: () => void
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteDetails.tsx
import {format} from "date-fns";
=======

  };

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}

export const QuoteDetails = ({ quote, isOpen, onClose }: QuoteDetailsProps) => {;
  if (!quote) return null;
  const formatDate = (dateString?: string) => {
    if (!dateString) return "Not specified";
    try {
      return format(new Date(dateString), "PPP");
    } catch (e) {
      return dateString;
    }
<<<<<<< HEAD
}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  }
  };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react",;
import {;
  Dialog,;
  DialogContent,;
  DialogHeader,;
  DialogTitle,;
  DialogDescription;
} from "@/components/ui/dialog",;
import { Button } from "@/components/ui/button",;
import { Calendar, User, Mail, Clock, DollarSign } from "lucide-react",;
import { Card, CardContent } from "@/components/ui/card",;
import { Separator } from "@/components/ui/separator",;
import { QuoteStatusBadge } from "./QuoteStatusBadge",;
import type { QuoteRequest } from "@/types/quotes",;
import { format } from "date-fns",;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface QuoteDetailsProps {;
  quote: QuoteRequest | null,;
  isOpen: boolean,;
  onClose: () => void;
}
<<<<<<< HEAD
export const QuoteDetails = ({ quote, isOpen, onClose }: QuoteDetailsProps) => {;
  if (!quote) return null;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteDetails.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteDetails.tsx
import React from './react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components / ui / dialog';
import { Button  } from '@/components / ui / button';
import { Calendar, User, Mail, Clock, DollarSign  } from './lucide-react';
import { Card, CardContent  } from '@/components / ui / card';
import { Separator  } from '@/components / ui / separator';
import { QuoteStatusBadge  } from './QuoteStatusBadge';
import type { QuoteRequest } from "@/types / quotes";
import { format  } from './date - fns';
interface QuoteDetailsProps {
  quote: QuoteRequest | null;
  is_open: boolean;
  on_close: () => void;
}
export const QuoteDetails = ({ quote, is_open, on_close }: QuoteDetailsProps) =>: any {
  // Check condition
if (return null) {
  $2
}
  const format_date = (date_string?: string) =>: any {
    // Check condition
if (return "Not specified") {
  $2
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteDetails.tsx

    try {
      return format (new Date (date_string), "PPP");
    } catch (e) {


========
    try {
      return format (new Date (date_string), "PPP");
    } catch (e) {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteDetails.tsx
  const formatDate = (dateString?: string) => {;
    if (!dateString) return 'Not specified';
    try {;
      return format(new Date(dateString), 'PPP');
    } catch (e) {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteDetails.tsx

      return dateString;
    }

  },
<<<<<<< HEAD

=======




>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (

========
      return dateString;
    }
  }
  return (
=======

import React from "react",;
import { ;
  Dialog,;
  DialogContent, ;
  DialogHeader, ;
  DialogTitle, ;
  DialogDescription ;
} from "@/components/ui/dialog",;
import { Button } from "@/components/ui/button",;
import { Calendar, User, Mail, Clock, DollarSign } from "lucide-react",;
import { Card, CardContent } from "@/components/ui/card",;
import { Separator } from "@/components/ui/separator",;
import { QuoteStatusBadge } from "./QuoteStatusBadge",;
import type { QuoteRequest } from "@/types/quotes",;
import { format } from "date-fns",;
;
interface QuoteDetailsProps {;
  quote:QuoteRequest | null,;
  isOpen:boolean,;
  onClose:() => void;
}
;
export const QuoteDetails = ({ quote, isOpen, onClose } QuoteDetailsProps) => {;
  if (!quote) return null,;
;
  const formatDate = (dateString?:string) => {;
    if (!dateString) return 'Not specified',;
    try {;
      return format(new Date(dateString), 'PPP'),;
    } catch (e) {;
      return dateString,;
    }
  },;
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteDetails.tsx
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>;
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">;
        <DialogHeader>;
          <DialogTitle className="text-2xl flex items-center justify-between">;
<<<<<<< HEAD
            <span>{quote && quote.project_name}</span>;
            <QuoteStatusBadge status={quote && quote.status} />;
          </DialogTitle>;
          <DialogDescription>;
            Quote request submitted on {formatDate(quote && quote.created_at)}
          </DialogDescription>;
        </DialogHeader>;
        <Separator className="my-4" />;
=======
            <span>{quote.project_name}</span>;
            <QuoteStatusBadge status={quote.status} />;
          </DialogTitle>;
          <DialogDescription>;
            Quote request submitted on {formatDate(quote.created_at)}
          </DialogDescription>;
        </DialogHeader>;
        ;
        <Separator className="my-4" />;
        ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
          <Card>;
            <CardContent className="pt-6">;
              <h3 className="text-lg font-medium mb-3">Requester Information</h3>;
              <div className="space-y-2">;
                <div className="flex items-center gap-2">;
                  <User className="h-4 w-4 text-gray-500" />;
<<<<<<< HEAD
                  <span>{quote && quote.requester_name}</span>;
                </div>;
                <div className="flex items-center gap-2">;
                  <Mail className="h-4 w-4 text-gray-500" />;
                  <span>{quote && quote.requester_email}</span>;
=======
                  <span>{quote.requester_name}</span>;
                </div>;
                <div className="flex items-center gap-2">;
                  <Mail className="h-4 w-4 text-gray-500" />;
                  <span>{quote.requester_email}</span>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                </div>;
              </div>;
            </CardContent>;
          </Card>;
<<<<<<< HEAD
=======
          ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <Card>;
            <CardContent className="pt-6">;
              <h3 className="text-lg font-medium mb-3">Project Timeline</h3>;
              <div className="space-y-2">;
                <div className="flex items-center gap-2">;
                  <Calendar className="h-4 w-4 text-gray-500" />;
<<<<<<< HEAD
                  <span>Start date: {formatDate(quote && quote.start_date)}</span>;
                </div>;
                <div className="flex items-center gap-2">;
                  <Clock className="h-4 w-4 text-gray-500" />;
                  <span>Timeline: {quote && quote.timeline}</span>;
=======
                  <span>Start date:{formatDate(quote.start_date)}</span>;
                </div>;
                <div className="flex items-center gap-2">;
                  <Clock className="h-4 w-4 text-gray-500" />;
                  <span>Timeline:{quote.timeline}</span>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                </div>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;
<<<<<<< HEAD
        <Card className="mt-6">;
          <CardContent className="pt-6">;
            <h3 className="text-lg font-medium mb-3">Project Details</h3>;
            <p className="mb-4">{quote && quote.project_summary}</p>;
            {quote && quote.project_description && (;
              <>;
                <h4 className="font-medium mt-4">Additional Details</h4>;
                <p>{quote && quote.project_description}</p>;
              </>;
            )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteDetails.tsx
<<<<<<< HEAD
            <div className="mt-6 flex items-center gap-2">
=======
;
export const QuoteDetails = ({ quote, isOpen, onClose }: QuoteDetailsProps) => {;
  if (!quote) return null,;
  const formatDate = (dateString?: string) => {;
    if (!dateString) return 'Not specified',;
    try {;
      return format(new Date(dateString), 'PPP');
    } catch (e) {;
      return dateString;
    }
  },

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center justify-between">
            <span>{quote.project_name}</span>
            <QuoteStatusBadge status={quote.status} />
          </DialogTitle>
          <DialogDescription>
            Quote request submitted on {formatDate(quote.created_at)}
          </DialogDescription>
        </DialogHeader>
<Separator className="my-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-3">
                Requester Information
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-gray-500" />
                  <span>{quote.requester_name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span>{quote.requester_email}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-3">Project Timeline</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span>Start date: {formatDate(quote.start_date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span>Timeline: {quote.timeline}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-3">Project Details</h3>
            <p className="mb-4">{quote.project_summary}</p>

            {quote.project_description && (
              <>
                <h4 className="font-medium mt-4">Additional Details</h4>
                <p>{quote.project_description}</p>
              </>
            )}
<div className="mt-6 flex items-center gap-2">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <DollarSign className="h-4 w-4 text-gray-500" />
              <span className="font-medium">Budget: </span>
              {quote.budget_display |
                (quote.budget_min && quote.budget_max
                  ? `$${quote.budget_min} - $${quote.budget_max}`
                  : quote.budget_min
                    ? `$${quote.budget_min}`
                    : "Not specified")}
            </div>
          </CardContent>
        </Card>
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="mt-6 flex justify-end">
          <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
<<<<<<< HEAD
<<<<<<< HEAD

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteDetails.tsx
            <div className="mt-6 flex items-center gap-2">;
              <DollarSign className="h-4 w-4 text-gray-500" />;
              <span className="font-medium">Budget: </span>;
              {quote && quote.budget_display || ;
               (quote && quote.budget_min && quote && quote.budget_max ;
                ? `$${quote && quote.budget_min} - $${quote && quote.budget_max}` ;
                : quote && quote.budget_min ;
                  ? `$${quote && quote.budget_min}` ;
                  : 'Not specified')}
            </div>;
          </CardContent>;
        </Card>;
=======
        ;
        <Card className="mt-6">;
          <CardContent className="pt-6">;
            <h3 className="text-lg font-medium mb-3">Project Details</h3>;
            <p className="mb-4">{quote.project_summary}</p>;
            ;
            {quote.project_description && (;
              <>;
                <h4 className="font-medium mt-4">Additional Details</h4>;
                <p>{quote.project_description}</p>;
              </>;
            )}
            ;
            <div className="mt-6 flex items-center gap-2">;
              <DollarSign className="h-4 w-4 text-gray-500" />;
              <span className="font-medium">Budget:</span>;
              {quote.budget_display || ;
               (quote.budget_min && quote.budget_max ;
                ? `$${quote.budget_min} - $${quote.budget_max}` ;
                :quote.budget_min ;
                  ? `$${quote.budget_min}` ;
                  :'Not specified')}
            </div>;
          </CardContent>;
        </Card>;
        ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <div className="mt-6 flex justify-end">;
          <Button onClick={onClose}>Close</Button>;
        </div>;
      </DialogContent>;
    </Dialog>;
<<<<<<< HEAD
  );
};
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteDetails.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteDetails.tsx
      return date_string;
    }
  }
;
  return (
    <Dialog open={is_open} onOpenChange={(open) => !open && on_close ()}>;
      <DialogContent className="max - w-3xl max - h-[90vh] overflow - y-auto">;
        <DialogHeader>;
          <DialogTitle className="text - 2xl flex items - center justify - between">;
            <span>{quote.project_name}</span>;
            <QuoteStatusBadge status={quote.status} />;
          </DialogTitle>;
          <DialogDescription>;
            Quote request submitted on {format_date (quote.created_at)}
          </DialogDescription>;
        </DialogHeader>;
        <Separator className="my - 4" />;
        <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">;
          <Card>;
            <CardContent className="pt - 6">;
              <h3 className="text - lg font - medium mb - 3">;
                Requester Information;
              </h3>;
              <div className="space - y-2">;
                <div className="flex items - center gap - 2">;
                  <User className="h - 4 w - 4 text - gray - 500" />;
                  <span>{quote.requester_name}</span>;
                </div>;
                <div className="flex items - center gap - 2">;
                  <Mail className="h - 4 w - 4 text - gray - 500" />;
                  <span>{quote.requester_email}</span>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;
          <Card>;
            <CardContent className="pt - 6">;
              <h3 className="text - lg font - medium mb - 3">Project Timeline</h3>;
              <div className="space - y-2">;
                <div className="flex items - center gap - 2">;
                  <Calendar className="h - 4 w - 4 text - gray - 500" />;
                  <span > Start date: {format_date (quote.start_date)}</span>;
                </div>;
                <div className="flex items - center gap - 2">;
                  <Clock className="h - 4 w - 4 text - gray - 500" />;
                  <span > Timeline: {quote.timeline}</span>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;
        <Card className="mt - 6">;
          <CardContent className="pt - 6">;
            <h3 className="text - lg font - medium mb - 3">Project Details</h3>;
            <p className="mb - 4">{quote.project_summary}</p>;
            {quote.project_description && (
              <>;
                <h4 className="font - medium mt - 4">Additional Details</h4>;
                <p>{quote.project_description}</p>;
              </>)}
            <div className="mt - 6 flex items - center gap - 2">;
              <DollarSign className="h - 4 w - 4 text - gray - 500" />;
              <span className="font - medium">Budget: </span>;
              {quote.budget_display ||;
                (quote.budget_min && quote.budget_max;
                  ? `$${quote.budget_min} - $${quote.budget_max}`;
                  : quote.budget_min;
                    ? `$${quote.budget_min}`;
                    : "Not specified")}
            </div>;
          </CardContent>;
        </Card>;
        <div className="mt - 6 flex justify - end">;
          <Button on_click={on_close}>Close</Button>;
        </div>;
      </DialogContent>;
    </Dialog>);
}
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteDetails.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  )

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
  ),;
},; import {
  Dialog;
DialogContent;
DialogHeader;
DialogTitle;
DialogDescription interface QuoteDetailsProps {
  quote: QuoteRequest | null;
isOpen: boolean;
onClose: () => void 
}export const QuoteDetails = ({
  quote, isOpen, onClose 
}: QuoteDetailsProps) => {
  if (!quote) return null;
const formatDate = (dateString?: string) => {
  if (!dateString) return 'Not specified';
try {
  return format (new Date (dateString), 'PPP') 
}catch (e) {
  return dateString;
}
};
return (<Dialog open= {
  isOpen 
}onOpenChange= {
  (open) => !open && onClose () 
}> <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto" > <DialogHeader> <DialogTitle className="text-2xl flex items-center justify-between" > <span> {
  quote.project name 
}</span> <QuoteStatusBadge status= {
  quote.status 
}/> formatDate (quote.created at) 
}</DialogDescription> </DialogHeader> <Separator className="my-4" /> <div className="grid grid-cols-1 md:grid-cols-2 gap-6" > <Card> </div> </div> </CardContent> </Card> <Card> </div> </div> </CardContent> </Card> </div> {
  quote.project description && (<> <h4 className="font-medium mt-4" >Additional Details</h4> <p> {
  quote.project description 
}</p> </>) 
}(quote.budget min && quote.budget max ? `$$ {
  quote.budget min 
}- $$ {
  quote.budget max 
}` : quote.budget min ? `$$ {
  quote.budget min 
}` : 'Not specified') 
}</div> </CardContent> </Card> </div> </DialogContent> </Dialog>) 
};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteDetails.tsx
=======
);
}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  );
}

  )
},
};
},
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
