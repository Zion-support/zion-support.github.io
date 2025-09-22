
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteDetails.tsx
import React from "react",;
=======
import React from "react";"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { ;
  Dialog,;
  DialogContent, ;
  DialogHeader, ;
  DialogTitle, ;
DialogDescription ;
} from "@/components/ui/dialog",;
import { Button } from "@/components/ui/button",;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteDetails.tsx
import { Calendar, User, Mail, Clock, DollarSign } from "lucide-react",;
import { Card, CardContent } from "@/components/ui/card",;
import { Separator } from "@/components/ui/separator",;
import { QuoteStatusBadge } from "./QuoteStatusBadge",;
import type { QuoteRequest } from "@/types/quotes",;
import { format } from "date-fns",;
=======
  DialogDescription ;"
} from "@/components/ui/dialog",;""
import { Button } from "@/components/ui/button";""
import { Calendar, User, Mail, Clock, DollarSign } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";""
import { Separator } from "@/components/ui/separator";""
import { QuoteStatusBadge } from "./QuoteStatusBadge";""
import type { QuoteRequest } from "@/types/quotes";""
import { format } from "date-fns";"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
;
interface QuoteDetailsProps {;
  quote: QuoteRequest | null;,;
  isOpen: boolean;,;
  onClose:() => void;
}
export const QuoteDetails = ({ quote, isOpen, onClose } QuoteDetailsProps) => {;
  if (!quote) return null,;
  const formatDate = (dateString?:string) => {;"
    if (!dateString) return 'Not specified',;
    try {;
      return format(new Date(dateString), 'PPP'),;
    } catch (e) {;
      return dateString,;
  },;
;
  return (;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteDetails.tsx
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
  return (;)
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>;

      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">;"

        <DialogHeader>;
<DialogTitle className="text-2xl flex items-center justify-between">;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteDetails.tsx
            <span>{quote.project_name}</span>;
            <QuoteStatusBadge status={quote.status} />;

          <DialogDescription>;
Quote request submitted on {formatDate(quote.created_at)}
          </DialogDescription>;
        </DialogHeader>;
        ;
        <Separator className="my-4" />;
        ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
          <Card>;
            <CardContent className="pt-6">;
              <h3 className="text-lg font-medium mb-3">Requester Information</h3>;
              <div className="space-y-2">;
                <div className="flex items-center gap-2">;
                  <User className="h-4 w-4 text-gray-500" />;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteDetails.tsx
                  <span>{quote.requester_name}</span>;
                </div>;"
                  <Mail className="h-4 w-4 text-gray-500" />;"

                  <span>{quote.requester_email}</span>;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/quotes/QuoteDetails.tsx
                </div>;
</div>;
            </CardContent>;
          </Card>;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteDetails.tsx
          <Card>;
            <CardContent className="pt-6">;
              <h3 className="text-lg font-medium mb-3">Project Timeline</h3>;
              <div className="space-y-2">;
                <div className="flex items-center gap-2">;
                  <Calendar className="h-4 w-4 text-gray-500" />;
<span>Start date:{formatDate(quote.start_date)}</span>;
                </div>;
                <div className="flex items-center gap-2">;
                  <Clock className="h-4 w-4 text-gray-500" />;
                  <span>Timeline:{quote.timeline}</span>;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/quotes/QuoteDetails.tsx
                </div>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteDetails.tsx
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/quotes/QuoteDetails.tsx
        <div className="mt-6 flex justify-end">;
          <Button onClick={onClose}>Close</Button>;
        </div>;
      </DialogContent>;
    </Dialog>;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteDetails.tsx
  ),;
},; import {;
  Dialog;
DialogContent;
DialogHeader;
DialogTitle;
DialogDescription interface QuoteDetailsProps {;
  quote: QuoteRequest | null;
isOpen: boolean;
onClose: () => void ;
}export const QuoteDetails = ({;
  quote,  isOpen, onClose ;
}: QuoteDetailsProps) => {;
  if (!quote) return null;
const formatDate = (dateString?: string) => {;
  if (!dateString) return 'Not specified';
try {';
  return format (new Date (dateString), 'PPP') ;
}catch (e) {;
  return dateString;
}
};
return (<Dialog open= {;
  isOpen ;
}onOpenChange= {;)
  (open) => !open && onClose () ;
}> <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto" > <DialogHeader> <DialogTitle className="text-2xl flex items-center justify-between" > <span >{;"

}</span> <QuoteStatusBadge status= {;"
  quote.status ;"}/> formatDate (quote.created at) ";"}  <Separator className="my-4" /> <div className="grid grid-cols-1 md:grid-cols-2 gap-6" > <Card> </div> </div>   <Card> </div> </div>   </div> {";"  quote.project description && (<> <h4 className="font-medium mt-4" >Additional Details</h4> <p >{;"
)
}</p> </>) ;
}(quote.budget min && quote.budget max ? `$$ {;
  quote.budget min ;
}- $$ {;
  quote.budget max ;`;
}` : quote.budget min ? `$$ {;"
  quote.budget min ';')`;
}` : 'Not specified') ;
}</div> </CardContent> </Card> </div> </DialogContent> </Dialog>) ;
:temp_broken_files/quotes/QuoteDetails.tsx
};"'"
};
'"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/quotes/QuoteDetails.tsx
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/quotes/QuoteDetails.tsx
