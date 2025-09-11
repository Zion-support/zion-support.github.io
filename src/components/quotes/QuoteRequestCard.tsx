<<<<<<< HEAD
<<<<<<< HEAD

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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  onMarkAsResponded
}) => {
  // Format date for display
  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'PP')
    } catch (e) {
      return dateString
    }
  }
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
          <CalendarIcon className="h-4 w-4" />
          <span>Timeline: {quote.timeline}</span>
        </div>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  quote,
  onViewDetails,
  quote,
  onViewDetails,


  onMarkAsResponded,
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
<<<<<<< HEAD
  quote
  onViewDetails
  onMarkAsResponded
  quote,
  onViewDetails,
  quote,
  onViewDetails,
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  onMarkAsResponded,
  onToggleArchive;
}, ) => {
  // Format date for display;
  const format_date = (date_string: string, ) =>: any {
    try {
      return format(new Date(dateString), 'PP')
    } catch (e) {
<<<<<<< HEAD
<<<<<<< HEAD
  return (


        
        <p className="text-white line-clamp-3 mb-4">{quote.project_summary}</p>
        


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      return dateString
    }
  }
  },

<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

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



  return (


        
        <p className="text-white line-clamp-3 mb-4">{quote.project_summary}</p>
        


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="flex items-center gap-2 text-sm text-zion-slate-light mb-3">
          <CalendarIcon className="h-4 w-4" />
          <span>Timeline: {quote.timeline}</span>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
    <Card key={quote && quote.id} className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <Card key={quote && quote.id} className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">;

        


        <div className="flex justify-between items-center mt-4">
<<<<<<< HEAD
=======
          <Button
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(quote)}
            className="flex items-center gap-1"
          >
            <Eye className="h-4 w-4" />
            View Details
          </Button>
          

          <div className="flex items-center">
<<<<<<< HEAD
=======
            {quote.status !== 'responded' && onMarkAsResponded && (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
            
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  )
}
"}
}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  );
};
"};
};
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

<<<<<<< HEAD
<<<<<<< HEAD
        
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



            <Button
              variant="ghost"
              size="sm"
              onClick = {() => onToggleArchive(quote && quote.id, !quote && quote.is_archived),}
              className="flex items-center gap-1";
            >;
              {quote && quote.is_archived ? (;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <RefreshCw className="h-4 w-4" />;
              ) : (;
                <ArchiveIcon className="h-4 w-4" />;
              )}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </Button>;
          </div>;
        </div>;
      </CardContent>;
    </Card>;
  );
};

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
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
