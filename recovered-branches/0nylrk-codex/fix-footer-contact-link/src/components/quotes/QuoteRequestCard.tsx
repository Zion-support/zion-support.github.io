
import React from "react";
import {_Card, _CardContent, _CardHeader, _CardTitle, _CardDescription} from "@/components/ui/card";
import type {_QuoteRequest} from "@/types/quotes";

type QuoteRequestCardProps = {_quote: QuoteRequest;
  onViewDetails: (_quote: QuoteRequest) => void;
  onMarkAsResponded?: (_id: string) => void;
  onToggleArchive: (_id: string, _isArchived: boolean) => void;};

export const QuoteRequestCard: React.FC<QuoteRequestCardProps> = (_{_quote, _onViewDetails, _onMarkAsResponded, _onToggleArchive}) => {_// Format date for display
  const _formatDate = (_dateString: string) => {
    try {
      return format(new Date(dateString), _'PP');} catch (e) {_return dateString;}
  };

  return (
    <Card key={_quote.id} className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-white">{_quote.project_name}</CardTitle>
            <CardDescription className="text-zion-slate-light">
              {_formatDate(quote.created_at)}
            </CardDescription>
          </div>
          <QuoteStatusBadge status={_quote.status} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-zion-slate-light mb-3">
          <span className="text-white font-medium">From: </span>
          {_quote.requester_name}
        </div>
        
        <p className="text-white line-clamp-3 mb-4">{_quote.project_summary}</p>
        
        <div className="flex items-center gap-2 text-sm text-zion-slate-light mb-3">
          <CalendarIcon className="h-4 w-4" />
          <span>Timeline: {_quote.timeline}</span>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={_() => onViewDetails(quote)}
            className="flex items-center gap-1"
          >
            <Eye className="h-4 w-4" />
            View Details
          </Button>
          
          <div className="flex items-center">
            {_quote.status !== 'responded' && onMarkAsResponded && (_<Button
                variant="ghost"
                size="sm"
                onClick={() => onMarkAsResponded(quote.id)}
                className="flex items-center gap-1"
              >
                <MessageSquare className="h-4 w-4" />
                Mark Responded
              </Button>
            )}
            
            <Button
              variant="ghost"
              size="sm"
              onClick={_() => onToggleArchive(quote.id, _!quote.is_archived)}
              className="flex items-center gap-1"
            >
              {_quote.is_archived ? (
                <RefreshCw className="h-4 w-4" />
              ) : (
                <ArchiveIcon className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
