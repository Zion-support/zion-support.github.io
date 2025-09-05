
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
=======
import React from &quot;react&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { 
  Dialog,
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
<<<<<<< HEAD
} from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { Calendar, User, Mail, Clock, DollarSign } from "lucide-react",
import { Card, CardContent } from "@/components/ui/card",
import { Separator } from "@/components/ui/separator",
import { QuoteStatusBadge } from "./QuoteStatusBadge",
import type { QuoteRequest } from "@/types/quotes",
import { format } from "date-fns",
=======
} from &quot;@/components/ui/dialog&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Calendar, User, Mail, Clock, DollarSign } from &quot;lucide-react&quot;;
import { Card, CardContent } from &quot;@/components/ui/card&quot;;
import { Separator } from &quot;@/components/ui/separator&quot;;
import { QuoteStatusBadge } from &quot;./QuoteStatusBadge&quot;;
import type { QuoteRequest } from &quot;@/types/quotes&quot;;
import { format } from &quot;date-fns&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface QuoteDetailsProps {
  quote: QuoteRequest | null,
  isOpen: boolean,
  onClose: () => void
=======
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
interface QuoteDetailsProps {;
  quote: QuoteRequest | null,;
  isOpen: boolean,;
  onClose: () => void;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
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
<<<<<<< HEAD
  },

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className=&quot;max-w-3xl max-h-[90vh] overflow-y-auto&quot;>
        <DialogHeader>
          <DialogTitle className=&quot;text-2xl flex items-center justify-between&quot;>
            <span>{quote.project_name}</span>
            <QuoteStatusBadge status={quote.status} />
          </DialogTitle>
          <DialogDescription>
            Quote request submitted on {formatDate(quote.created_at)}
          </DialogDescription>
        </DialogHeader>
        
        <Separator className=&quot;my-4&quot; />
        
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
          <Card>
            <CardContent className=&quot;pt-6&quot;>
              <h3 className=&quot;text-lg font-medium mb-3&quot;>Requester Information</h3>
              <div className=&quot;space-y-2&quot;>
                <div className=&quot;flex items-center gap-2&quot;>
                  <User className=&quot;h-4 w-4 text-gray-500&quot; />
                  <span>{quote.requester_name}</span>
                </div>
                <div className=&quot;flex items-center gap-2&quot;>
                  <Mail className=&quot;h-4 w-4 text-gray-500&quot; />
                  <span>{quote.requester_email}</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className=&quot;pt-6&quot;>
              <h3 className=&quot;text-lg font-medium mb-3&quot;>Project Timeline</h3>
              <div className=&quot;space-y-2&quot;>
                <div className=&quot;flex items-center gap-2&quot;>
                  <Calendar className=&quot;h-4 w-4 text-gray-500&quot; />
                  <span>Start date: {formatDate(quote.start_date)}</span>
                </div>
                <div className=&quot;flex items-center gap-2&quot;>
                  <Clock className=&quot;h-4 w-4 text-gray-500&quot; />
                  <span>Timeline: {quote.timeline}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className=&quot;mt-6&quot;>
          <CardContent className=&quot;pt-6&quot;>
            <h3 className=&quot;text-lg font-medium mb-3&quot;>Project Details</h3>
            <p className=&quot;mb-4&quot;>{quote.project_summary}</p>
            
            {quote.project_description && (
              <>
                <h4 className=&quot;font-medium mt-4&quot;>Additional Details</h4>
                <p>{quote.project_description}</p>
              </>
            )}
            
            <div className=&quot;mt-6 flex items-center gap-2&quot;>
              <DollarSign className=&quot;h-4 w-4 text-gray-500&quot; />
              <span className=&quot;font-medium&quot;>Budget: </span>
              {quote.budget_display || 
               (quote.budget_min && quote.budget_max 
                ? `$${quote.budget_min} - $${quote.budget_max}` 
                : quote.budget_min 
                  ? `$${quote.budget_min}` 
                  : 'Not specified')}
            </div>
          </CardContent>
        </Card>
        
        <div className=&quot;mt-6 flex justify-end&quot;>
          <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
},
=======
  };
  return (;
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>;
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">;
        <DialogHeader>;
          <DialogTitle className="text-2xl flex items-center justify-between">;
            <span>{quote.project_name}</span>;
            <QuoteStatusBadge status={quote.status} />;
          </DialogTitle>;
          <DialogDescription>;
            Quote request submitted on {formatDate(quote.created_at)}
          </DialogDescription>;
        </DialogHeader>;
        <Separator className="my-4" />;
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
          <Card>;
            <CardContent className="pt-6">;
              <h3 className="text-lg font-medium mb-3">Requester Information</h3>;
              <div className="space-y-2">;
                <div className="flex items-center gap-2">;
                  <User className="h-4 w-4 text-gray-500" />;
                  <span>{quote.requester_name}</span>;
                </div>;
                <div className="flex items-center gap-2">;
                  <Mail className="h-4 w-4 text-gray-500" />;
                  <span>{quote.requester_email}</span>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;
          <Card>;
            <CardContent className="pt-6">;
              <h3 className="text-lg font-medium mb-3">Project Timeline</h3>;
              <div className="space-y-2">;
                <div className="flex items-center gap-2">;
                  <Calendar className="h-4 w-4 text-gray-500" />;
                  <span>Start date: {formatDate(quote.start_date)}</span>;
                </div>;
                <div className="flex items-center gap-2">;
                  <Clock className="h-4 w-4 text-gray-500" />;
                  <span>Timeline: {quote.timeline}</span>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;
        <Card className="mt-6">;
          <CardContent className="pt-6">;
            <h3 className="text-lg font-medium mb-3">Project Details</h3>;
            <p className="mb-4">{quote.project_summary}</p>;
            {quote.project_description && (;
              <>;
                <h4 className="font-medium mt-4">Additional Details</h4>;
                <p>{quote.project_description}</p>;
              </>;
            )}
;
            <div className="mt-6 flex items-center gap-2">;
              <DollarSign className="h-4 w-4 text-gray-500" />;
              <span className="font-medium">Budget: </span>;
              {quote.budget_display ||;
               (quote.budget_min && quote.budget_max;
                ? `$${quote.budget_min} - $${quote.budget_max}`;
                : quote.budget_min;
                  ? `$${quote.budget_min}`;
                  : 'Not specified')}
            </div>;
          </CardContent>;
        </Card>;
        <div className="mt-6 flex justify-end">;
          <Button onClick={onClose}>Close</Button>;
        </div>;
      </DialogContent>;
    </Dialog>;
  );
};
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
