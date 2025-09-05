
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { format } from "date-fns",
=======
import React from &quot;react&quot;;
import { format } from &quot;date-fns&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { 
  Card,
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription
<<<<<<< HEAD
} from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge",
import { Eye, MessageSquare, ArchiveIcon, RefreshCw, CalendarIcon } from "lucide-react",
import type { QuoteRequest } from "@/types/quotes",
=======
} from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { QuoteStatusBadge } from &quot;@/components/quotes/QuoteStatusBadge&quot;;
import { Eye, MessageSquare, ArchiveIcon, RefreshCw, CalendarIcon } from &quot;lucide-react&quot;;
import type { QuoteRequest } from &quot;@/types/quotes&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
type QuoteRequestCardProps = {
  quote: QuoteRequest,
  onViewDetails: (quote: QuoteRequest) => void,
  onMarkAsResponded?: (id: string) => void,
  onToggleArchive: (id: string, isArchived: boolean) => void
},
=======
import React from "react";
import {_Card, _CardContent, _CardHeader, _CardTitle, _CardDescription} from "@/components/ui/card";
import type {_QuoteRequest} from "@/types/quotes";

type QuoteRequestCardProps = {_quote: QuoteRequest;
  onViewDetails: (_quote: QuoteRequest) => void;
  onMarkAsResponded?: (_id: string) => void;
  onToggleArchive: (_id: string, _isArchived: boolean) => void;};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export const QuoteRequestCard: React.FC<QuoteRequestCardProps> = (_{_quote, _onViewDetails, _onMarkAsResponded, _onToggleArchive}) => {_// Format date for display
  const _formatDate = (_dateString: string) => {
    try {
<<<<<<< HEAD
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
              {formatDate(quote.created_at)}
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </CardDescription>
          </div>
          <QuoteStatusBadge status={_quote.status} />
        </div>
      </CardHeader>
      <CardContent>
<<<<<<< HEAD
        <div className=&quot;text-sm text-zion-slate-light mb-3&quot;>
          <span className=&quot;text-white font-medium&quot;>From: </span>
          {quote.requester_name}
        </div>
        
        <p className=&quot;text-white line-clamp-3 mb-4&quot;>{quote.project_summary}</p>
        
        <div className=&quot;flex items-center gap-2 text-sm text-zion-slate-light mb-3&quot;>
          <CalendarIcon className=&quot;h-4 w-4&quot; />
          <span>Timeline: {quote.timeline}</span>
=======
        <div className="text-sm text-zion-slate-light mb-3">
          <span className="text-white font-medium">From: </span>
          {_quote.requester_name}
        </div>
        
        <p className="text-white line-clamp-3 mb-4">{_quote.project_summary}</p>
        
        <div className="flex items-center gap-2 text-sm text-zion-slate-light mb-3">
          <CalendarIcon className="h-4 w-4" />
          <span>Timeline: {_quote.timeline}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>
        
        <div className=&quot;flex justify-between items-center mt-4&quot;>
          <Button
<<<<<<< HEAD
            variant=&quot;outline&quot;
            size=&quot;sm&quot;
            onClick={() => onViewDetails(quote)}
            className=&quot;flex items-center gap-1&quot;
=======
            variant="outline"
            size="sm"
            onClick={_() => onViewDetails(quote)}
            className="flex items-center gap-1"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <Eye className=&quot;h-4 w-4&quot; />
            View Details
          </Button>
          
<<<<<<< HEAD
          <div className=&quot;flex items-center&quot;>
            {quote.status !== 'responded' && onMarkAsResponded && (
              <Button
                variant=&quot;ghost&quot;
                size=&quot;sm&quot;
=======
          <div className="flex items-center">
            {_quote.status !== 'responded' && onMarkAsResponded && (_<Button
                variant="ghost"
                size="sm"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                onClick={() => onMarkAsResponded(quote.id)}
                className=&quot;flex items-center gap-1&quot;
              >
                <MessageSquare className=&quot;h-4 w-4&quot; />
                Mark Responded
              </Button>
            )}
            
            <Button
<<<<<<< HEAD
              variant=&quot;ghost&quot;
              size=&quot;sm&quot;
              onClick={() => onToggleArchive(quote.id, !quote.is_archived)}
              className=&quot;flex items-center gap-1&quot;
            >
              {quote.is_archived ? (
                <RefreshCw className=&quot;h-4 w-4&quot; />
=======
              variant="ghost"
              size="sm"
              onClick={_() => onToggleArchive(quote.id, _!quote.is_archived)}
              className="flex items-center gap-1"
            >
              {_quote.is_archived ? (
                <RefreshCw className="h-4 w-4" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              ) : (
                <ArchiveIcon className=&quot;h-4 w-4&quot; />
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
},
