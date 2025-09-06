<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import React from "react",
import { format } from "date-fns",
import { 
  Card,
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription
} from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge",
import { Eye, MessageSquare, ArchiveIcon, RefreshCw, CalendarIcon } from 'lucide-react'
import type { QuoteRequest } from "@/types/quotes",
type QuoteRequestCardProps = {
  quote: QuoteRequest,
  onViewDetails: (quote: QuoteRequest) => void,
  onMarkAsResponded?: (id: string) => void,
  onToggleArchive: (id: string, isArchived: boolean) => void
},
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

>>>>>>> 
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import React from "react"
import {format} from "date-fns"
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {QuoteStatusBadge} from "@/components/quotes/QuoteStatusBadge"
import {Eye, MessageSquare, ArchiveIcon, RefreshCw, CalendarIcon} from 'lucide-react'
import type { QuoteRequest } from "@/types/quotes"
type QuoteRequestCardProps = {
  quote: QuoteRequest
  onViewDetails: (quote: QuoteRequest) => void
  onMarkAsResponded?: (id: string) => void
  onToggleArchive: (id: string, isArchived: boolean) => void
}
export const QuoteRequestCard: React.FC<QuoteRequestCardProps> = ({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  onMarkAsResponded,

  onToggleArchive
=======
  onMarkAsResponded
>>>>>>>   onMarkAsResponded,
>>>>>>>   onToggleArchive
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}) => {
  // Format date for display
  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'PP')
    } catch (e) {
      return dateString
    }
<<<<<<< HEAD

  return (
=======
  }
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD

=======
        <p className="text-white line-clamp-3 mb-4">{quote.project_summary}</p>
>>>>>>>         <div className="flex items-center gap-2 text-sm text-zion-slate-light mb-3">
          <CalendarIcon className="h-4 w-4" />
          <span>Timeline: {quote.timeline}</span>
        </div>
>>>>>>>         <div className="flex justify-between items-center mt-4">
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======


  quote,
  onViewDetails,
  quote,
  onViewDetails,


  onMarkAsResponded,
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  onToggleArchive
},) => {
  // Format date for display
  const formatDate = (dateString: string,) => {
import React from './react';
import { format } from './date - fns';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { QuoteStatusBadge } from '@/components / quotes / QuoteStatusBadge';
import {Eye, MessageSquare, ArchiveIcon, RefreshCw, CalendarIcon} from 'lucide-react';
import type { QuoteRequest } from "@/types / quotes";
type QuoteRequestCardProps = {
  quote: QuoteRequest,
  onViewDetails: (quote: QuoteRequest) => void,
  onMarkAsResponded?: (id: string) => void,
  onToggleArchive: (id: string, is_archived: boolean) => void;
}
export const QuoteRequestCard: React.FC < QuoteRequestCardProps> = ({
  quote;
  onViewDetails;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  quote
  onViewDetails
  onMarkAsResponded
  quote,
  onViewDetails,
  quote,
  onViewDetails,
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  onMarkAsResponded,
<<<<<<< HEAD
  onToggleArchive
}) => {
  // Format date for display
  const formatDate = (dateString: string) => {
=======
  onToggleArchive;
}, ) => {
  // Format date for display;
  const format_date = (date_string: string, ) =>: any {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
    try {
      return format(new Date(dateString), 'PP')
    } catch (e) {
<<<<<<< HEAD

import React from "react";
import {format} from "date-fns";
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {QuoteStatusBadge} from "@/components/quotes/QuoteStatusBadge";
import {Eye, MessageSquare, ArchiveIcon, RefreshCw, CalendarIcon} from 'lucide-react';
import type { QuoteRequest } from "@/types/quotes";
type QuoteRequestCardProps = {;
  quote: QuoteRequest,;
  onViewDetails: (quote: QuoteRequest) => void,;
  onMarkAsResponded?: (id: string) => void,;
  onToggleArchive: (id: string, isArchived: boolean) => void;
};
export const QuoteRequestCard: React.FC<QuoteRequestCardProps> = ({;
  quote;
  onViewDetails;
  onMarkAsResponded,;
  onToggleArchive;
},) => {;
  // Format date for display;
  const formatDate = (dateString: string,) => {;
    try {;
      return format(new Date(dateString), 'PP');
    } catch (e) {;
      return dateString;

    }


  },



<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  return (


        
        <p className="text-white line-clamp-3 mb-4">{quote.project_summary}</p>
        


<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      return dateString
    }
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
        
        <p className="text-white line-clamp-3 mb-4">{quote.project_summary}</p>
        
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        <div className="flex items-center gap-2 text-sm text-zion-slate-light mb-3">
          <CalendarIcon className="h-4 w-4" />
          <span>Timeline: {quote.timeline}</span>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
    <Card key={quote && quote.id} className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">;
=======
    <Card key={quote && quote.id} className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">;

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <div className="flex justify-between items-center mt-4">
>>>>>>>           <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(quote)}
            className="flex items-center gap-1"
          >
            <Eye className="h-4 w-4" />
            View Details
          </Button>
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>>           <div className="flex items-center">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
          

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          <div className="flex items-center">
>>>>>>>             {quote.status !== 'responded' && onMarkAsResponded && (
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD
=======
  )
}
"}
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

  );
};
"};
};
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

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
import { Eye, MessageSquare, ArchiveIcon, RefreshCw, CalendarIcon } from 'lucide-react';
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
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
          <span className="text-white font-medium">From: </span>;
          {quote && quote.requester_name}
        </div>;

        <p className="text-white line-clamp-3 mb-4">{quote && quote.project_summary}</p>;

        <div className="flex items-center gap-2 text-sm text-zion-slate-light mb-3">;
          <CalendarIcon className="h-4 w-4" />;
          <span>Timeline: {quote && quote.timeline}</span>;
        </div>;

        <div className="flex justify-between items-center mt-4">;
          <Button
            variant="outline"
            size="sm"
            onClick = {() => onViewDetails(quote),}

            className="flex items-center gap-1";
          >;
            <Eye className="h-4 w-4" />;
            View Details;
          </Button>;

          <div className="flex items-center">;
            {quote && quote.status !== 'responded' && onMarkAsResponded && (;

=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        
        <div className="flex justify-between items-center mt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(quote)}
            className="flex items-center gap-1"
          >
            <Eye className="h-4 w-4" />
            View Details
          </Button>
          
          <div className="flex items-center">
            {quote.status !== 'responded' && onMarkAsResponded && (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD



            <Button
              variant="ghost"
              size="sm"
              onClick = {() => onToggleArchive(quote && quote.id, !quote && quote.is_archived),}
              className="flex items-center gap-1";
            >;
              {quote && quote.is_archived ? (;
                <RefreshCw className="h-4 w-4" />;
              ) : (;
                <ArchiveIcon className="h-4 w-4" />;
              )}

=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            
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
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
"}
}

  );
};
"};
};
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
import { Eye, MessageSquare, ArchiveIcon, RefreshCw, CalendarIcon } from 'lucide-react';
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
              ) : (;
                <ArchiveIcon className="h-4 w-4" />;
              )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </Button>;
          </div>;
        </div>;
      </CardContent>;
    </Card>;
  );
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> 

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
      return date_string;
    }
  }
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
            on_click = {() => onViewDetails (quote), }
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
                on_click = {(, ) => onMarkAsResponded (quote.id), }
                className="flex items - center gap - 1";
              >;
                <MessageSquare className="h - 4 w - 4" />;
                Mark Responded;
              </Button>)}
            <Button;
              variant="ghost";
              size="sm";
              on_click = {() => onToggleArchive (quote.id, !quote.is_archived), }
              className="flex items - center gap - 1";
            >;
              {quote.is_archived ? (
                <RefreshCw className="h - 4 w - 4" />) : (
                <ArchiveIcon className="h - 4 w - 4" />)}
            </Button>;
          </div>;
        </div>;
      </CardContent>;
    </Card>);
}
"},
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
