
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {format} from "date-fns";
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {QuoteStatusBadge} from "@/components/quotes/QuoteStatusBadge";
import {Eye, MessageSquare, ArchiveIcon, RefreshCw, CalendarIcon} from "lucide-react";
import type { QuoteRequest } from "@/types/quotes";
<<<<<<< HEAD




=======
import React from "react",
import { format } from "date-fns",

import React from "react",
import { format } from "date-fns",
import React from "react",
import { format } from "date-fns",
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { 

  Card;
  CardContent;
  CardHeader;
<<<<<<< HEAD

  CardTitle;
  CardDescription
} from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge",




type QuoteRequestCardProps = {
  quote: QuoteRequest,
  onViewDetails: (quote: QuoteRequest) => void,
  onMarkAsResponded?: (id: string) => void,

  onToggleArchive: (id: string, isArchived: boolean) => void
},






=======


import { Eye, MessageSquare, ArchiveIcon, RefreshCw, CalendarIcon } from "lucide-react";
import type { QuoteRequest } from "@/types/quotes";
import { Eye, MessageSquare, ArchiveIcon, RefreshCw, CalendarIcon } from "lucide-react",
import type { QuoteRequest } from "@/types/quotes",
type QuoteRequestCardProps = {
  quote: QuoteRequest,
  onViewDetails: (quote: QuoteRequest) => void,
  onMarkAsResponded?: (id: string) => void,


type QuoteRequestCardProps = {
  quote: QuoteRequest
  onViewDetails: (quote: QuoteRequest) => void
  onMarkAsResponded?: (id: string) => void
  onToggleArchive: (id: string, isArchived: boolean) => void
}
export const QuoteRequestCard: React.FC<QuoteRequestCardProps> = ({;
  quote;
  onViewDetails;
export const QuoteRequestCard: React.FC<QuoteRequestCardProps> = ({
  quote;
  onViewDetails;
  onMarkAsResponded
  quote,
  onViewDetails,
  onMarkAsResponded,

  onToggleArchive
}) => {
  // Format date for display
  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'PP')
    } catch (e) {
      return dateString
    }

<<<<<<< HEAD

  },



    <Card key={quote && quote.id} className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">;
      <CardHeader className="pb-2">;
        <div className="flex justify-between items-start">;
          <div>;
            <CardTitle className="text-white">{quote && quote.project_name}</CardTitle>;
            <CardDescription className="text-zion-slate-light">;
              {formatDate(quote && quote.created_at)}
            </CardDescription>;
          </div>;
          <QuoteStatusBadge status={quote && quote.status} />;


        </div>;
      </CardHeader>;
      <CardContent>;
        <div className="text-sm text-zion-slate-light mb-3">;

        <p className="text-white line-clamp-3 mb-4">{quote.project_summary}</p>

        <div className="flex items-center gap-2 text-sm text-zion-slate-light mb-3">
          <CalendarIcon className="h-4 w-4" />
          <span>Timeline: {quote.timeline}</span>
        </div>

        <div className="flex justify-between items-center mt-4">


=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(quote)}
<<<<<<< HEAD



=======
            className="flex items-center gap-1"
          >
            <Eye className="h-4 w-4" />
            View Details
          </Button>
          
          <div className="flex items-center">
            {quote.status !== 'responded' && onMarkAsResponded && (
>>>>>>> origin/cursor/delete-old-data-records-6bba
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onMarkAsResponded(quote.id)}
                className="flex items-center gap-1"
              >
                <MessageSquare className="h-4 w-4" />
                Mark Responded
              </Button>
            )}
<<<<<<< HEAD


=======
            
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onToggleArchive(quote.id, !quote.is_archived)}
<<<<<<< HEAD

              className="flex items-center gap-1"
            >
              {quote.is_archived ? (
                <RefreshCw className="h-4 w-4" />
              ) : (
                <ArchiveIcon className="h-4 w-4" />

=======
              className = $2;
}

import React from "react",;
import { format } from "date-fns",;
import {;
  Card,;
  CardContent,;
  CardHeader,;
  CardTitle,;
  CardDescription;
} from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge",;
import { Eye, MessageSquare, ArchiveIcon, RefreshCw, CalendarIcon } from "lucide-react",;
import type { QuoteRequest } from "@/types/quotes",;
type QuoteRequestCardProps = {;
  quote: QuoteRequest,;
  onViewDetails: (quote: QuoteRequest) => void,;
  onMarkAsResponded?: (id: string) => void,;
  onToggleArchive: (id: string, isArchived: boolean) => void;
},;
export const QuoteRequestCard: React.FC<QuoteRequestCardProps> = ({;
  quote,;
  onViewDetails,;
  onMarkAsResponded,;
  onToggleArchive;
}) => {;
  // Format date for display;
  const formatDate = (dateString: string) => {;
    try {;
      return format(new Date(dateString), 'PP');
    } catch (e) {;
      return dateString;
    }
  };
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
          <span className="text-white font-medium">From: </span>;
          {quote.requester_name}
        </div>;
        <p className="text-white line-clamp-3 mb-4">{quote.project_summary}</p>;
        <div className="flex items-center gap-2 text-sm text-zion-slate-light mb-3">;
          <CalendarIcon className="h-4 w-4" />;
          <span>Timeline: {quote.timeline}</span>;
        </div>;

<<<<<<< HEAD
          <Button
            variant="outline"
            size="sm"
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
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        <div className="flex justify-between items-center mt-4">;
          <Button;
            variant="outline";
            size="sm";
            onClick={() => onViewDetails(quote)}

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            className="flex items-center gap-1";
          >;
            <Eye className="h-4 w-4" />;
            View Details;
          </Button>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

              <Button
                variant="ghost"
                size="sm"
                onClick={() => onMarkAsResponded(quote && quote.id)}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                className="flex items-center gap-1";
              >;
                <MessageSquare className="h-4 w-4" />;
                Mark Responded;
              </Button>;
            )}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

                <RefreshCw className="h-4 w-4" />;
              ) : (;
                <ArchiveIcon className="h-4 w-4" />;
              )}
            </Button>;
          </div>;
        </div>;
      </CardContent>
};

      </CardContent>
};
    </Card>);
}

;
<<<<<<< HEAD




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
