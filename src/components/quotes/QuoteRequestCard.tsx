
<<<<<<< HEAD
import React from "react",;
import { format } from "date-fns",;
import { ;
  Card,;
  CardContent, ;
  CardHeader, ;
  CardTitle, ;
  CardDescription;
} from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge",;
import { Eye, MessageSquare, ArchiveIcon, RefreshCw, CalendarIcon } from 'lucide-react';
import type { QuoteRequest } from "@/types/quotes",;
;
type QuoteRequestCardProps = {;
  quote:QuoteRequest,;
  onViewDetails:(quote:QuoteRequest) => void,;
  onMarkAsResponded?:(id:string) => void,;
  onToggleArchive:(id:string, isArchived:boolean) => void;
},;
;
export const QuoteRequestCard:React.FC<QuoteRequestCardProps> = ({;
  quote,;
  onViewDetails,;
  onMarkAsResponded,;
  onToggleArchive;
}) => {;
  // Format date for display;
  const formatDate = (dateString:string) => {;
    try {;
      return format(new Date(dateString), 'PP'),;
    } catch (e) {;
      return dateString,;
    }
  },;
;
  return (;
    <Card key={quote.id} className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">;
      <CardHeader className="pb-2">;
        <div className="flex justify-between items-start">;
          <div>;
            <CardTitle className="text-white">{quote.project_name}</CardTitle>;
            <CardDescription className="text-zion-slate-light">;
              {formatDate(quote.created_at)}
            </CardDescription>;
          </div>;
          <QuoteStatusBadge status={quote.status} />;
        </div>;
      </CardHeader>;
      <CardContent>;
        <div className="text-sm text-zion-slate-light mb-3">;
          <span className="text-white font-medium">From:</span>;
          {quote.requester_name}
        </div>;
        ;
        <p className="text-white line-clamp-3 mb-4">{quote.project_summary}</p>;
        ;
        <div className="flex items-center gap-2 text-sm text-zion-slate-light mb-3">;
          <CalendarIcon className="h-4 w-4" />;
          <span>Timeline:{quote.timeline}</span>;
        </div>;
        ;
        <div className="flex justify-between items-center mt-4">;
          <Button;
            variant="outline";
            size="sm";
            onClick={() => onViewDetails(quote)}
            className="flex items-center gap-1";
          >;
            <Eye className="h-4 w-4" />;
            View Details;
          </Button>;
          ;
          <div className="flex items-center">;
            {quote.status !== 'responded' && onMarkAsResponded && (;
              <Button;
                variant="ghost";
                size="sm";
                onClick={() => onMarkAsResponded(quote.id)}
                className="flex items-center gap-1";
              >;
                <MessageSquare className="h-4 w-4" />;
                Mark Responded;
              </Button>;
            )}
            ;
            <Button;
              variant="ghost";
              size="sm";
              onClick={() => onToggleArchive(quote.id, !quote.is_archived)}
              className="flex items-center gap-1";
            >;
              {quote.is_archived ? (;
                <RefreshCw className="h-4 w-4" />;
              ) :(;
                <ArchiveIcon className="h-4 w-4" />;
              )}
            </Button>;
          </div>;
        </div>;
      </CardContent>;
    </Card>;
  ),;
},;
=======
import React from "react",
import { format } from "date-fns",import { 
  Card,
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription
} from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge",
import { Eye, MessageSquare, ArchiveIcon, RefreshCw, CalendarIcon } from 'lucide-react'
import type { QuoteRequest } from "@/types/quotes",type QuoteRequestCardProps = {
  quote: QuoteRequest,
  onViewDetails: (quote: QuoteRequest) => void,
  onMarkAsResponded?: (id: string) => void,
  onToggleArchive: (id: string, isArchived: boolean) => void
},
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
      return format(new Date(dateString), 'PP')
    } catch (e) {
      return dateString
    }
  },

  return (
    <Card key={quote.id} className=&quot;bg-zion-blue-dark border border-zion-blue-light overflow-hidden&quot;>
      <CardHeader className=&quot;pb-2&quot;>
        <div className=&quot;flex justify-between items-start&quot;>
          <div>
            <CardTitle className=&quot;text-white&quot;>{quote.project_name}</CardTitle>
            <CardDescription className=&quot;text-zion-slate-light&quot;>
              {formatDate(quote.created_at)}            </CardDescription>
          </div>
          <QuoteStatusBadge status={_quote.status} />
        </div>
      </CardHeader>
      <CardContent>
        <div className=&quot;text-sm text-zion-slate-light mb-3&quot;>
          <span className=&quot;text-white font-medium&quot;>From: </span>
          {quote.requester_name}
        </div>
        
        <p className=&quot;text-white line-clamp-3 mb-4&quot;>{quote.project_summary}</p>
        
        <div className=&quot;flex items-center gap-2 text-sm text-zion-slate-light mb-3&quot;>
          <CalendarIcon className=&quot;h-4 w-4&quot; />
          <span>Timeline: {quote.timeline}</span>        </div>
        
        <div className=&quot;flex justify-between items-center mt-4&quot;>
          <Button
            variant=&quot;outline&quot;
            size=&quot;sm&quot;
            onClick={() => onViewDetails(quote)}
            className=&quot;flex items-center gap-1&quot;          >
            <Eye className=&quot;h-4 w-4&quot; />
            View Details
          </Button>
          
          <div className=&quot;flex items-center&quot;>
            {quote.status !== 'responded' && onMarkAsResponded && (
              <Button
                variant=&quot;ghost&quot;
                size=&quot;sm&quot;                onClick={() => onMarkAsResponded(quote.id)}
                className=&quot;flex items-center gap-1&quot;
              >
                <MessageSquare className=&quot;h-4 w-4&quot; />
                Mark Responded
              </Button>
            )}
            
            <Button
              variant=&quot;ghost&quot;
              size=&quot;sm&quot;
              onClick={() => onToggleArchive(quote.id, !quote.is_archived)}
              className=&quot;flex items-center gap-1&quot;
            >
              {quote.is_archived ? (
                <RefreshCw className=&quot;h-4 w-4&quot; />              ) : (
                <ArchiveIcon className=&quot;h-4 w-4&quot; />
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
},
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
