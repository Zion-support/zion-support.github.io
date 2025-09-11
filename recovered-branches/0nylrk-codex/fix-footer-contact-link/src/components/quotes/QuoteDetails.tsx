
import React from "react";



import {format} from "date-fns";

=======
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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface QuoteDetailsProps {
  quote: QuoteRequest | null;
  isOpen: boolean;
  onClose: () => void
}

import {format} from "date-fns";
=======

  };

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}

export const QuoteDetails = ({ quote, isOpen, onClose }: QuoteDetailsProps) => {;
  if (!quote) return null;

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

    try {
      return format (new Date (date_string), "PPP");
    } catch (e) {


  const formatDate = (dateString?: string) => {;
    if (!dateString) return 'Not specified';
    try {;
      return format(new Date(dateString), 'PPP');
    } catch (e) {;

      return dateString;
    }

  },




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>;
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">;
        <DialogHeader>;
          <DialogTitle className="text-2xl flex items-center justify-between">;
            <span>{quote && quote.project_name}</span>;
            <QuoteStatusBadge status={quote && quote.status} />;
          </DialogTitle>;
          <DialogDescription>;
            Quote request submitted on {formatDate(quote && quote.created_at)}
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
                  <span>{quote && quote.requester_name}</span>;
                </div>;
                <div className="flex items-center gap-2">;
                  <Mail className="h-4 w-4 text-gray-500" />;
                  <span>{quote && quote.requester_email}</span>;
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
                  <span>Start date: {formatDate(quote && quote.start_date)}</span>;
                </div>;
                <div className="flex items-center gap-2">;
                  <Clock className="h-4 w-4 text-gray-500" />;
                  <span>Timeline: {quote && quote.timeline}</span>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;

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
            <div className="mt-6 flex items-center gap-2">
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
        <div className="mt-6 flex justify-end">
          <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  )

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
