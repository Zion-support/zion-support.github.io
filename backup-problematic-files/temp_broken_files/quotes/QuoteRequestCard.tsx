
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteRequestCard.tsx
=======
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/quotes/QuoteRequestCard.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import React from "react",;
import { format } from "date-fns",;
=======
import React from "react";""
import { format } from "date-fns";"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { ;
  Card,;
  CardContent, ;
  CardHeader, ;
  CardTitle, ;
<<<<<<< HEAD
  CardDescription;
} from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge",;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteRequestCard.tsx
import { Eye, MessageSquare, ArchiveIcon, RefreshCw, CalendarIcon } from "lucide-react",;
=======
import { Eye, MessageSquare, ArchiveIcon, RefreshCw, CalendarIcon } from 'lucide-react';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/quotes/QuoteRequestCard.tsx
=======
import { Eye, MessageSquare, ArchiveIcon, RefreshCw, CalendarIcon } from 'lucide-react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import type { QuoteRequest } from "@/types/quotes",;
=======
  CardDescription;"
} from "@/components/ui/card",;""
import { Button } from "@/components/ui/button";""
import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge";""
import { Eye, MessageSquare, ArchiveIcon, RefreshCw, CalendarIcon } from 'lucide-react';
import type { QuoteRequest } from "@/types/quotes";"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
;
type QuoteRequestCardProps = {;
  quote: QuoteRequest;,;
  onViewDetails: (quote:QuoteRequest) => void;,;
  onMarkAsResponded?:(id: string) => void;,;
  onToggleArchive: (id:string;, isArchived:boolean) => void;
},;
export const QuoteRequestCard:React.FC<QuoteRequestCardProps> = ({;
<<<<<<< HEAD
  quote,;
  onViewDetails,;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteRequestCard.tsx
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/quotes/QuoteRequestCard.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  onMarkAsResponded,;
  onToggleArchive;
}) => {;
  // Format date for display;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteRequestCard.tsx

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
=======
"
    <Card key={quote.id} className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">;"
      <CardHeader className="pb-2">;"
        <div className="flex justify-between items-start">;"
</div>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          <div>;
</div>"
            <CardTitle className="text-white">{quote.project_name};""
            <CardDescription className="text-zion-slate-light">;"

          </div>;
          <QuoteStatusBadge status={quote.status} />;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        </div>;
      </CardHeader>;
      <CardContent>;
        <div className="text-sm text-zion-slate-light mb-3">;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteRequestCard.tsx

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/quotes/QuoteRequestCard.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            onClick={() => onViewDetails(quote)}
            className="flex items-center gap-1";
          >;
            <Eye className="h-4 w-4" />;
            View Details;
          </Button>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteRequestCard.tsx

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          ;
          <div className="flex items-center">;
            {quote.status !== 'responded' && onMarkAsResponded && (;
              <Button;
                variant="ghost";
                size="sm";
                onClick={() => onMarkAsResponded(quote.id)}
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/quotes/QuoteRequestCard.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                className="flex items-center gap-1";
              >;
                <MessageSquare className="h-4 w-4" />;
                Mark Responded;
              </Button>;
            )}
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteRequestCard.tsx

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            ;
            <Button;
              variant="ghost";
              size="sm";
=======

      <CardContent>;
        <div className="text-sm text-zion-slate-light mb-3">;"
          <span className="text-white font-medium">From:</span>;"
        </div>;"
        <p className="text-white line-clamp-3 mb-4">{quote.project_summary}</p>;""
        <div className="flex items-center gap-2 text-sm text-zion-slate-light mb-3">;"
          <CalendarIcon className="h-4 w-4" />;"

          <span>Timeline: {quote.timeline;}</span>;
        <div className="flex justify-between items-center mt-4">;"
          <Button;"
            variant="outline";""
            size="sm";")
            onClick={() => onViewDetails(quote)}
            <Eye className="h-4 w-4" />;"

          ;"
          <div className="flex items-center">;"
                variant="ghost";""
                size="sm";"
                onClick={() => onMarkAsResponded(quote.id)}
                <MessageSquare className="h-4 w-4" />;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              onClick={() => onToggleArchive(quote.id, !quote.is_archived)}
              className="flex items-center gap-1";
            >;
              {quote.is_archived ? (;
                <RefreshCw className="h-4 w-4" />;
              ) :(;
                <ArchiveIcon className="h-4 w-4" />;
              )}
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/quotes/QuoteRequestCard.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            </Button>;
          </div>;
        </div>;
      </CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteRequestCard.tsx

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    </Card>;
  ),;
},; import {;
  Card;
CardContent;
CardHeader;
CardTitle;
CardDescription type QuoteRequestCardProps = {;
  quote: QuoteRequest;
onViewDetails: (quote: QuoteRequest) => void;
onMarkAsResponded?: (id: string) => void;
<<<<<<< HEAD
<<<<<<< HEAD
onToggleArchive: (id: string, isArchived: boolean) => void ;
=======
onToggleArchive: (id: string, isArchived: boolean) => void 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
onToggleArchive: (id: string;, isArchived: boolean) => void ;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
};
quote, onViewDetails, onMarkAsResponded, onToggleArchive ;
}) => {;
  //Format date for display const formatDate = (dateString: string) => {;
  try {;
  </CardDescription> </div> <QuoteStatusBadge status= {;
  quote.status ;
}/> </div> </CardHeader> <CardContent> </div> <div className="flex justify-between items-center mt-4" > <Button > <Eye className="h-4 w-4" /> View Details </Button> onClick={;"  () => onMarkAsResponded (quote.id) ";"}className="flex items-center gap-1" > <MessageSquare className="h-4 w-4" /> Mark Responded </Button>) ";"}<Button) : (<ArchiveIcon className="h-4 w-4" />) ;
}</Button> </div> </div> </CardContent> </Card>) ;
:temp_broken_files/quotes/QuoteRequestCard.tsx
};""
};
"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/quotes/QuoteRequestCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/quotes/QuoteRequestCard.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                <RefreshCw className="h-4 w-4" />;"
                <ArchiveIcon className="h-4 w-4" />;"

   </div> <QuoteStatusBadge status= {;
  quote.status ;"
}/> </div>  <CardContent> </div> <div className="flex justify-between items-center mt-4" > <Button > <Eye className="h-4 w-4" /> View Details  onClick={;"  () => onMarkAsResponded (quote.id) ";"}className="flex items-center gap-1" > <MessageSquare className="h-4 w-4" /> Mark Responded ) ";"}<Button) : (<ArchiveIcon className="h-4 w-4" />) ;"

} </div> </div>  ) ;"
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
