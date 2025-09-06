=======

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea


  quote,
  onViewDetails,
  quote,
  onViewDetails,
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
  onMarkAsResponded,
  onToggleArchive;
}, ) => {
  // Format date for display;
  const format_date = (date_string: string, ) =>: any {
    try {
      return format(new Date(dateString), 'PP')
    } catch (e) {
      return dateString
    }
=======
  }
  },

>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

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
=======
          
<<<<<<< HEAD
<<<<<<< HEAD
  );
};
"};
};

