
<<<<<<< HEAD

=======
import React from "react";
import { format } from "date-fns";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
import React from "react",
import { format } from "date-fns",

import React from "react",
import { format } from "date-fns",
import React from "react",
import { format } from "date-fns",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { 
  Card;
  CardContent;
  CardHeader;
  CardTitle;
  CardDescription
} from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge",
<<<<<<< HEAD

import React from './react';
import { format } from './date - fns';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { QuoteStatusBadge } from '@/components / quotes / QuoteStatusBadge';
import { Eye, MessageSquare, ArchiveIcon, RefreshCw, CalendarIcon } from './lucide-react';
import type { QuoteRequest } from "@/types / quotes";
type QuoteRequestCardProps = {
  quote: QuoteRequest,
  onViewDetails: (quote: QuoteRequest) => void,
  onMarkAsResponded?: (id: string) => void,
  onToggleArchive: (id: string, is_archived: boolean) => void;
}
;
export const QuoteRequestCard: React.FC < QuoteRequestCardProps> = ({
  quote;
  onViewDetails;
  onMarkAsResponded,
  onToggleArchive;

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}) => {
  // Format date for display;
  const format_date = (date_string: string) =>: any {
    try {
      return format (new Date (date_string), 'PP');
    } catch (e) {
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
type QuoteRequestCardProps = {;
  quote: QuoteRequest,;
  onViewDetails: (quote: QuoteRequest) => void,;
  onMarkAsResponded?: (id: string) => void,;
  onToggleArchive: (id: string, isArchived: boolean) => void;
};

export const QuoteRequestCard: React.FC<QuoteRequestCardProps> = ({;
  quote;
  onViewDetails;
<<<<<<< HEAD
=======

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
import { Eye, MessageSquare, ArchiveIcon, RefreshCw, CalendarIcon } from "lucide-react",;
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  onMarkAsResponded,;
  onToggleArchive;
}) => {;
  // Format date for display;
<<<<<<< HEAD
  const formatDate = (dateString: string) => {;
    try {;
      return format(new Date(dateString), 'PP');
    } catch (e) {;
      return dateString;

    }
  }
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import { Eye, MessageSquare, ArchiveIcon, RefreshCw, CalendarIcon } from "lucide-react",
import type { QuoteRequest } from "@/types/quotes",

<<<<<<< HEAD
=======
import { Eye, MessageSquare, ArchiveIcon, RefreshCw, CalendarIcon } from "lucide-react";
import type { QuoteRequest } from "@/types/quotes";
import { Eye, MessageSquare, ArchiveIcon, RefreshCw, CalendarIcon } from "lucide-react",
import type { QuoteRequest } from "@/types/quotes",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
type QuoteRequestCardProps = {
  quote: QuoteRequest,
  onViewDetails: (quote: QuoteRequest) => void,
  onMarkAsResponded?: (id: string) => void,
  onToggleArchive: (id: string, isArchived: boolean) => void
},



<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  onToggleArchive
}) => {
  // Format date for display
  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'PP')
    } catch (e) {
      return dateString
    }

  },


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

=======
  return (

    }
  }
  return (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        </div>;
      </CardHeader>;
      <CardContent>;
        <div className="text-sm text-zion-slate-light mb-3">;
<<<<<<< HEAD
          <span className="text-white font-medium">From: </span>;
          {quote && quote.requester_name}
        </div>;

        <p className="text-white line-clamp-3 mb-4">{quote && quote.project_summary}</p>;

        <div className="flex items-center gap-2 text-sm text-zion-slate-light mb-3">;
          <CalendarIcon className="h-4 w-4" />;
          <span>Timeline: {quote && quote.timeline}</span>;
        </div>;

        <div className="flex justify-between items-center mt-4">;

=======
  }
  },

  return (
    <Card key={quote.id} className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-white">{quote.project_name}</CardTitle>
            <CardDescription className="text-zion-slate-light">
              {formatDate(quote.created_at)}
            </CardDescription>
          </div>
          <QuoteStatusBadge status={quote.status} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-zion-slate-light mb-3">
          <span className="text-white font-medium">From: </span>
          {quote.requester_name}
        </div>
        <p className="text-white line-clamp-3 mb-4">{quote.project_summary}</p>
        <div className="flex items-center gap-2 text-sm text-zion-slate-light mb-3">
          <CalendarIcon className="h-4 w-4" />
          <span>Timeline: {quote.timeline}</span>
        </div>
        <div className="flex justify-between items-center mt-4">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(quote)}
<<<<<<< HEAD

=======
=======
            className="flex items-center gap-1"
          >
            <Eye className="h-4 w-4" />
            View Details
          </Button>
          <div className="flex items-center">
            {quote.status !== 'responded' && onMarkAsResponded && (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onToggleArchive(quote.id, !quote.is_archived)}
              className="flex items-center gap-1"
            >
              {quote.is_archived ? (
                <RefreshCw className="h-4 w-4" />
              ) : (
                <ArchiveIcon className="h-4 w-4" />

<<<<<<< HEAD

=======
=======
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <div className="flex justify-between items-center mt-4">;
          <Button;
            variant="outline";
            size="sm";
            onClick={() => onViewDetails(quote)}
<<<<<<< HEAD

=======
            onClick={() => onViewDetails(quote)}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            className="flex items-center gap-1";
          >;
            <Eye className="h-4 w-4" />;
            View Details;
          </Button>;
<<<<<<< HEAD

          <div className="flex items-center">;
            {quote && quote.status !== 'responded' && onMarkAsResponded && (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onMarkAsResponded(quote && quote.id)}
=======
          ;
          <div className="flex items-center">;
            {quote.status !== 'responded' && onMarkAsResponded && (;
              <Button;
                variant="ghost";
                size="sm";
                onClick={() => onMarkAsResponded(quote.id)}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                className="flex items-center gap-1";
              >;
                <MessageSquare className="h-4 w-4" />;
                Mark Responded;
              </Button>;
            )}
<<<<<<< HEAD



            <Button
              variant="ghost"
              size="sm"
              onClick={() => onToggleArchive(quote && quote.id, !quote && quote.is_archived)}
              className="flex items-center gap-1";
            >;
              {quote && quote.is_archived ? (;
                <RefreshCw className="h-4 w-4" />;
              ) : (;
                <ArchiveIcon className="h-4 w-4" />;
              )}

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      return date_string;
    }
  }
;
  return (
    <Card key={quote.id} className="bg - zion - blue - dark border border - zion - blue - light overflow - hidden">;
      <CardHeader className="pb - 2">;
        <div className="flex justify - between items - start">;
          <div>;
            <CardTitle className="text - white">{quote.project_name}</CardTitle>;
            <CardDescription className="text - zion - slate - light">;
              {format_date (quote.created_at)}
            </CardDescription>;
          </div>;
          <QuoteStatusBadge status={quote.status} />;
        </div>;
      </CardHeader>;
      <CardContent>;
        <div className="text - sm text - zion - slate - light mb - 3">;
          <span className="text - white font - medium">From: </span>;
          {quote.requester_name}
        </div>;
        <p className="text - white line - clamp - 3 mb - 4">{quote.project_summary}</p>;
        <div className="flex items - center gap - 2 text - sm text - zion - slate - light mb - 3">;
          <CalendarIcon className="h - 4 w - 4" />;
          <span > Timeline: {quote.timeline}</span>;
        </div>;
        <div className="flex justify - between items - center mt - 4">;
          <Button;
            variant="outline";
            size="sm";
            on_click={() => onViewDetails (quote)}
            className="flex items - center gap - 1";
          >;
            <Eye className="h - 4 w - 4" />;
            View Details;
          </Button>;
          <div className="flex items - center">;
            {quote.status !== 'responded' && onMarkAsResponded && (
              <Button;
                variant="ghost";
                size="sm";
                on_click={() => onMarkAsResponded (quote.id)}
                className="flex items - center gap - 1";
              >;
                <MessageSquare className="h - 4 w - 4" />;
                Mark Responded;
              </Button>)}
            <Button;
              variant="ghost";
              size="sm";
              on_click={() => onToggleArchive (quote.id, !quote.is_archived)}
              className="flex items - center gap - 1";
            >;
              {quote.is_archived ? (
                <RefreshCw className="h - 4 w - 4" />) : (
                <ArchiveIcon className="h - 4 w - 4" />)}
<<<<<<< HEAD

=======
            ;
;
            <Button;
              variant="ghost";
              size="sm";
              onClick={() => onToggleArchive(quote.id, !quote.is_archived)}
              className="flex items-center gap-1";
            >;
              {quote.is_archived ? (;
                <RefreshCw className="h-4 w-4" />;
              ) : (;
                <ArchiveIcon className="h-4 w-4" />;
              )}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            </Button>;
          </div>;
        </div>;
      </CardContent>;




<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    </Card>);
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
};
    </Card>);
}
;
    </Card>);
}
;
    </Card>;
  ),;
},; import {
  Card;
CardContent;
CardHeader;
CardTitle;
CardDescription type QuoteRequestCardProps = {
  quote: QuoteRequest;
onViewDetails: (quote: QuoteRequest) => void;
onMarkAsResponded?: (id: string) => void;
onToggleArchive: (id: string, isArchived: boolean) => void 
};
quote, onViewDetails, onMarkAsResponded, onToggleArchive 
}) => {
  //Format date for display const formatDate = (dateString: string) => {
  try {
  </CardDescription> </div> <QuoteStatusBadge status= {
  quote.status 
}/> </div> </CardHeader> <CardContent> </div> <div className="flex justify-between items-center mt-4" > <Button > <Eye className="h-4 w-4" /> View Details </Button> onClick= {
  () => onMarkAsResponded (quote.id) 
}className="flex items-center gap-1" > <MessageSquare className="h-4 w-4" /> Mark Responded </Button>) 
}<Button) : (<ArchiveIcon className="h-4 w-4" />) 
}</Button> </div> </div> </CardContent> </Card>) 
};
    </Card>;
  );
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
