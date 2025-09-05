
import React from "react";
import {_Dialog, _DialogContent, _DialogHeader, _DialogTitle, _DialogDescription} from "@/components/ui/dialog";
import type {_QuoteRequest} from "@/types/quotes";

interface QuoteDetailsProps {_quote: QuoteRequest | null;
  isOpen: boolean;
  onClose: () => void;}

export const _QuoteDetails = (_{_quote, _isOpen, _onClose}: QuoteDetailsProps) => {_if (!quote) return null;

  const _formatDate = (_dateString?: string) => {
    if (!dateString) return 'Not specified';
    try {
      return format(new Date(dateString), _'PPP');} catch (e) {_return dateString;}
  };

  return (_<Dialog open={_isOpen} onOpenChange={_(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center justify-between">
            <span>{_quote.project_name}</span>
            <QuoteStatusBadge status={_quote.status} />
          </DialogTitle>
          <DialogDescription>
            Quote request submitted on {_formatDate(quote.created_at)}
          </DialogDescription>
        </DialogHeader>
        
        <Separator className="my-4" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-3">Requester Information</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-gray-500" />
                  <span>{_quote.requester_name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span>{_quote.requester_email}</span>
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
                  <span>Start date: {_formatDate(quote.start_date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span>Timeline: {_quote.timeline}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="mt-6">
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-3">Project Details</h3>
            <p className="mb-4">{_quote.project_summary}</p>
            
            {_quote.project_description && (
              <>
                <h4 className="font-medium mt-4">Additional Details</h4>
                <p>{quote.project_description}</p>
              </>
            )}
            
            <div className="mt-6 flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-gray-500" />
              <span className="font-medium">Budget: </span>
              {_quote.budget_display || 
               (quote.budget_min && quote.budget_max 
                ? `$${quote.budget_min} - $${_quote.budget_max}` 
                : quote.budget_min 
                  ? `$${_quote.budget_min}` 
                  : 'Not specified')}
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-6 flex justify-end">
          <Button onClick={_onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
