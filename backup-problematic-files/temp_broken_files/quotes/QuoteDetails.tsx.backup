import React from "react",;
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { ;
  Dialog,;
  DialogContent, ;
  DialogHeader, ;
  DialogTitle, ;
<<<<<<< HEAD



=======
  DialogDescription ;
} from "@/components/ui/dialog",;
import { Button } from "@/components/ui/button",;
import { Calendar, User, Mail, Clock, DollarSign } from 'lucide-react';
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { Card, CardContent } from "@/components/ui/card",;
import { Separator } from "@/components/ui/separator",;
import { QuoteStatusBadge } from "./QuoteStatusBadge",;
import type { QuoteRequest } from "@/types/quotes",;
import { format } from "date-fns",;
<<<<<<< HEAD


;
interface QuoteDetailsProps {;
  quote: QuoteRequest | null;,;
  isOpen: boolean;,;

=======
;
interface QuoteDetailsProps {;
  quote:QuoteRequest | null,;
  isOpen:boolean,;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  onClose:() => void;
}
;
export const QuoteDetails = ({ quote, isOpen, onClose } QuoteDetailsProps) => {;
  if (!quote) return null,;
<<<<<<< HEAD

  const formatDate = (dateString?:string) => {;"

=======
;
  const formatDate = (dateString?:string) => {;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    if (!dateString) return 'Not specified',;
    try {;
      return format(new Date(dateString), 'PPP'),;
    } catch (e) {;
      return dateString,;
    }
  },;
;
  return (;
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>;
<<<<<<< HEAD


      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">;"

        <DialogHeader>;


=======
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">;
        <DialogHeader>;
          <DialogTitle className="text-2xl flex items-center justify-between">;
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <span>{quote.project_name}</span>;
            <QuoteStatusBadge status={quote.status} />;
          </DialogTitle>;
          <DialogDescription>;
<<<<<<< HEAD


                  <span>{quote.requester_name}</span>;
                </div>;"
                  <Mail className="h-4 w-4 text-gray-500" />;"


=======
            Quote request submitted on {formatDate(quote.created_at)}
          </DialogDescription>;
        </DialogHeader>;
        ;
        <Separator className="my-4" />;
        ;
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  <span>{quote.requester_email}</span>;
                </div>;
<<<<<<< HEAD



=======
              </div>;
            </CardContent>;
          </Card>;
          ;
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <Card>;
            <CardContent className="pt-6">;
              <h3 className="text-lg font-medium mb-3">Project Timeline</h3>;
              <div className="space-y-2">;
                <div className="flex items-center gap-2">;
                  <Calendar className="h-4 w-4 text-gray-500" />;
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  <span>Start date:{formatDate(quote.start_date)}</span>;
                </div>;
                <div className="flex items-center gap-2">;
                  <Clock className="h-4 w-4 text-gray-500" />;
                  <span>Timeline:{quote.timeline}</span>;
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                </div>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <div className="mt-6 flex justify-end">;
          <Button onClick={onClose}>Close</Button>;
        </div>;
      </DialogContent>;
    </Dialog>;
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
}onOpenChange= {;
  (open) => !open && onClose () ;
<<<<<<< HEAD

}> <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto" > <DialogHeader> <DialogTitle className="text-2xl flex items-center justify-between" > <span >{;"

}</span> <QuoteStatusBadge status= {;"
  quote.status ;"}/> formatDate (quote.created at) ";"}  <Separator className="my-4" /> <div className="grid grid-cols-1 md:grid-cols-2 gap-6" > <Card> </div> </div>   <Card> </div> </div>   </div> {";"  quote.project description && (<> <h4 className="font-medium mt-4" >Additional Details</h4> <p >{;"
)

=======
}> <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto" > <DialogHeader> <DialogTitle className="text-2xl flex items-center justify-between" > <span >{;
  quote.project name ;
}</span> <QuoteStatusBadge status= {;
  quote.status ;"}/> formatDate (quote.created at) ";"}</DialogDescription> </DialogHeader> <Separator className="my-4" /> <div className="grid grid-cols-1 md:grid-cols-2 gap-6" > <Card> </div> </div> </CardContent> </Card> <Card> </div> </div> </CardContent> </Card> </div> {";"  quote.project description && (<> <h4 className="font-medium mt-4" >Additional Details</h4> <p >{;
  quote.project description ;
>>>>>>> origin/cursor/delete-old-data-records-6bba
}</p> </>) ;
}(quote.budget min && quote.budget max ? `$$ {;
  quote.budget min ;
}- $$ {;
<<<<<<< HEAD



=======
  quote.budget max ;
}` : quote.budget min ? `$$ {;
  quote.budget min ';
}` : 'Not specified') ;
}</div> </CardContent> </Card> </div> </DialogContent> </Dialog>) ;
};"'"
>>>>>>> origin/cursor/delete-old-data-records-6bba
