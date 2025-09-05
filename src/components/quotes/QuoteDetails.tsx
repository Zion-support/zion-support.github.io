
<<<<<<< HEAD
import React from "react",;
import { ;
  Dialog,;
  DialogContent, ;
  DialogHeader, ;
  DialogTitle, ;
  DialogDescription ;
} from "@/components/ui/dialog",;
import { Button } from "@/components/ui/button",;
import { Calendar, User, Mail, Clock, DollarSign } from 'lucide-react';
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
                  <span>{quote.requester_email}</span>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;
          ;
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
                </div>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;
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
        <div className="mt-6 flex justify-end">;
          <Button onClick={onClose}>Close</Button>;
        </div>;
      </DialogContent>;
    </Dialog>;
  ),;
},;
=======
import React from "react",import { 
  Dialog,
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { Calendar, User, Mail, Clock, DollarSign } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card",
import { Separator } from "@/components/ui/separator",
import { QuoteStatusBadge } from "./QuoteStatusBadge",
import type { QuoteRequest } from "@/types/quotes",
import { format } from "date-fns",interface QuoteDetailsProps {
  quote: QuoteRequest | null,
  isOpen: boolean,
  onClose: () => void
}

export const QuoteDetails = ({ quote, isOpen, onClose }: QuoteDetailsProps) => {
  if (!quote) return null,

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Not specified',
    try {
      return format(new Date(dateString), 'PPP')
    } catch (e) {
      return dateString
    }
  },

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className=&quot;max-w-3xl max-h-[90vh] overflow-y-auto&quot;>
        <DialogHeader>
          <DialogTitle className=&quot;text-2xl flex items-center justify-between&quot;>
            <span>{quote.projectname}</span>
            <QuoteStatusBadge status={quote.status} />
import React from "react";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription} from "@/components/ui/dialog";
import type {QuoteRequest} from "@/types/quotes";

interface QuoteDetailsProps {quote: QuoteRequest | null;
  isOpen: boolean,
  onClose: () => void}

export const QuoteDetails = (_{quote, isOpen, onClose}: QuoteDetailsProps) => {if (!quote) return null;

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Not specified';
    try {
      return format(new Date(dateString), _'PPP')} catch (e) {return dateString}
  };

  return (_<Dialog open={isOpen} onOpenChange={_(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center justify-between">
            <span>{quote.projectname}</span>
            <QuoteStatusBadge status={quote.status} />
          </DialogTitle>
          <DialogDescription>
            Quote request submitted on {formatDate(quote.createdat)}
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
                  <span>{quote.requestername}</span>
                </div>
                <div className=&quot;flex items-center gap-2&quot;>
                  <Mail className=&quot;h-4 w-4 text-gray-500&quot; />
                  <span>{quote.requesteremail}</span>                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className=&quot;pt-6&quot;>
              <h3 className=&quot;text-lg font-medium mb-3&quot;>Project Timeline</h3>
              <div className=&quot;space-y-2&quot;>
                <div className=&quot;flex items-center gap-2&quot;>
                  <Calendar className=&quot;h-4 w-4 text-gray-500&quot; />
                  <span>Start date: {formatDate(quote.startdate)}</span>
                </div>
                <div className=&quot;flex items-center gap-2&quot;>
                  <Clock className=&quot;h-4 w-4 text-gray-500&quot; />
                  <span>Timeline: {quote.timeline}</span>                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className=&quot;mt-6&quot;>
          <CardContent className=&quot;pt-6&quot;>
            <h3 className=&quot;text-lg font-medium mb-3&quot;>Project Details</h3>
            <p className=&quot;mb-4&quot;>{quote.projectsummary}</p>            
            {quote.projectdescription && (
              <>
                <h4 className=&quot;font-medium mt-4&quot;>Additional Details</h4>
                <p>{quote.projectdescription}</p>
              </>
            )}
            
            <div className=&quot;mt-6 flex items-center gap-2&quot;>
              <DollarSign className=&quot;h-4 w-4 text-gray-500&quot; />
              <span className=&quot;font-medium&quot;>Budget: </span>
              {quote.budgetdisplay ||                (quote.budgetmin && quote.budgetmax 
                ? `$${quote.budgetmin} - $${quote.budgetmax}` 
                : quote.budgetmin 
                  ? `$${quote.budgetmin}` 
                  : 'Not specified')}
            </div>
          </CardContent>
        </Card>
        
        <div className=&quot;mt-6 flex justify-end&quot;>
          <Button onClick={onClose}>Close</Button>        </div>
      </DialogContent>
    </Dialog>
  )
},
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
