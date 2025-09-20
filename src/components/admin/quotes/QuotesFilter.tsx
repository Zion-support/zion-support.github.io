import React from 'react';
<<<<<<< HEAD
import { CalendarRefreshCw } from 'lucide-react';
interface QuotesFilterProps {
searchQuery: string;,
setSearchQuery: (value: string) => void;,
statusFilter: QuoteStatus | 'all';,
setStatusFilter: (value: QuoteStatus | 'all') => void;,
archiveFilter: 'active' | 'archived' | 'all';,
setArchiveFilter: (value: 'active' | 'archived' | 'all') => void;,
dateRange: DateRange | undefined;,
setDateRange: (range: DateRange | undefined) => void;,
onReset: () => void,
export const QuotesFilter: React.FC<QuotesFilterProps> = ({
}})
=======
import { Calendar, RefreshCw } from "lucide-react";
interface QuotesFilterProps {
  searchQuery: string;
setSearchQuery: (value: string) => void;
statusFilter: QuoteStatus | 'all';
  setStatusFilter: (value: QuoteStatus | 'all') => void;
archiveFilter: 'active' | 'archived' | 'all';
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void;
dateRange: DateRange | undefined;
  setDateRange: (range: DateRange | undefined) => void;
onReset: () => void,
export const QuotesFilter: React.FC<QuotesFilterProps> = ({
}
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
