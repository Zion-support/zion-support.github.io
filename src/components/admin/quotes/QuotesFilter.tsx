<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesFilter.tsx
<<<<<<< HEAD:src/components/admin/quotes/QuotesFilter.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/quotes/QuotesFilter.tsx
interface QuotesFilterProps {;
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

<<<<<<< HEAD:src/components/admin/quotes/QuotesFilter.tsx
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/quotes/QuotesFilter.tsx
import React from "react",
<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesFilter.tsx
import { Calendar, RefreshCw } from 'lucide-react'
origin/cursor/automate-test-improve-and-merge-code-2533
import { Card, CardContent } from "@/components/ui/card",
import { Input } from "@/components/ui/input",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",
import { Button } from "@/components/ui/button",
import { Calendar as CalendarComponent } from "@/components/ui/calendar",
<<<<<<< HEAD:src/components/admin/quotes/QuotesFilter.tsx
<<<<<<< HEAD
import { format } from "date-fns",
import type { DateRange } from "react-day-picker",
=======
import { Calendar, RefreshCw } from 'lucide-react'"
import { Card, CardContent } from "@/components/ui/card","
import { Input } from "@/components/ui/input","
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select","
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover","
import { Button } from "@/components/ui/button","
import { Calendar as CalendarComponent } from "@/components/ui/calendar","
import { format } from "date-fns","
import type { DateRange } from "react-day-picker","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesFilter.tsx
import type { QuoteStatus } from "@/types/quotes",

<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesFilter.tsx
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/quotes/QuotesFilter.tsx
=======


import { Calendar, RefreshCw } from 'lucide-react'
origin/cursor/automate-test-improve-and-merge-code-2533
import { Card, CardContent } from "@/components/ui/card",;
import { Input } from "@/components/ui/input",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",;
import { Button } from "@/components/ui/button",;
import { Calendar as CalendarComponent } from "@/components/ui/calendar",;
import { format } from "date-fns",;
import type { DateRange } from "react-day-picker",;
import type { QuoteStatus } from "@/types/quotes",;


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/admin/quotes/QuotesFilter.tsx
import { format } from "date-fns";
import type { DateRange } from "react-day-picker";
import type { QuoteStatus } from "@/types/quotes";
import {
  Select
  SelectContent
  SelectItem
  SelectTrigger
  SelectValue
} from '@/components/ui/select'
  Popover
  PopoverContent
  PopoverTrigger
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Calendar as CalendarComponent } from '@/components/ui/calendar'
import { format } from 'date-fns'
import type { DateRange } from 'react-day-picker'
import type { QuoteStatus } from '@/types/quotes'
<<<<<<< HEAD:src/components/admin/quotes/QuotesFilter.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/quotes/QuotesFilter.tsx
interface QuotesFilterProps {
=======
interface QuotesFilterProps {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesFilter.tsx
  searchQuery: string;
  setSearchQuery: (value: string) => void;'
  statusFilter: QuoteStatus | 'all';'
  setStatusFilter: (value: QuoteStatus | 'all') => void;'
  archiveFilter: 'active' | 'archived' | 'all';'
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void;
  dateRange: DateRange | undefined;
  setDateRange: (range: DateRange | undefined) => void;

<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesFilter.tsx
<<<<<<< HEAD:src/components/admin/quotes/QuotesFilter.tsx
=======
  onReset: () => void;
export const QuotesFilter: React.FC<QuotesFilterProps> = ({;
  searchQuery,;
  setSearchQuery,;
  statusFilter,;
  setStatusFilter,;
  archiveFilter,;
  setArchiveFilter,;
  dateRange,;
  setDateRange,;
  onReset,}) => {;
  onReset;
},) => {;

<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesFilter.tsx

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/quotes/QuotesFilter.tsx
  return (
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    <Card className='mb-6 bg-zion-blue-dark border-zion-blue-light'>;
      <CardContent className='p-6'>;
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 items-end'>;
=======
  return ('
    <Card className='mb-6 bg-zion-blue-dark border-zion-blue-light'>;'
      <CardContent className='p-6'>;'
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 items-end'>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesFilter.tsx
          <div className='relative'>;
            <Input'
              placeholder='Search quotes...''
              className='pl-10 bg-zion-blue border-zion-blue-light text-white'
              value={searchQuery}

<<<<<<< HEAD
              onChange={e => setSearchQuery(e && e.target.value)}            />;
          </div>;

          <div>;'
            <p className='text-zion-slate-light text-sm mb-2'>Status</p>;
            <Select;
              value={statusFilter}
              onValueChange={(value: any) => setStatusFilter(value)}
            >;'
              <SelectTrigger className='bg-zion-blue border-zion-blue-light text-white'>;'
                <SelectValue placeholder='Status' />              </SelectTrigger>;'
              <SelectContent className='bg-zion-blue-dark border-zion-blue-light text-white'>;'
import React from 'react';'
import { Calendar, RefreshCw } from 'lucide-react';'
import { Card, CardContent } from '@/components / ui / card';'
import { Input } from '@/components / ui / input';
import {}
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,';
} from '@/components / ui / select';
  Popover,
  PopoverContent,
  PopoverTrigger,'
} from '@/components / ui / popover';'
import { Button } from '@/components / ui / button';'
import { Calendar as CalendarComponent } from '@/components / ui / calendar';'
import { format } from 'date - fns';'
import type { DateRange } from 'react - day - picker';'
import type { QuoteStatus } from '@/types / quotes';
interface QuotesFilterProps {}
=======
interface QuotesFilterProps {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/admin/quotes/QuotesFilter.tsx
  search_query: string;
  setSearchQuery: (value: string) => void;'
  status_filter: QuoteStatus | 'all';'
  setStatusFilter: (value: QuoteStatus | 'all') => void;'
  archive_filter: 'active' | 'archived' | 'all';'
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void;
  date_range: DateRange | undefined;
  setDateRange: (range: DateRange | undefined) => void;
  on_reset: () => void;
<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesFilter.tsx
export const QuotesFilter: React.FC < QuotesFilterProps> = ({}
=======
interface QuotesFilterProps {;


import React from "react",""
import { Calendar, RefreshCw } from 'lucide-react
import { Card, CardContent } from "@/components/ui/card",""
import { Input } from "@/components/ui/input",""
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",""
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",""
import { Button } from "@/components/ui/button",""
import { Calendar as CalendarComponent } from "@/components/ui/calendar",""
import { format } from "date-fns",""
import type { DateRange } from "react-day-picker",""
import type { QuoteStatus } from "@/types/quotes","
interface QuotesFilterProps {
  // TODO: Implement
}
  searchQuery: string;,
  setSearchQuery: (value: string) => void;,"
  statusFilter: QuoteStatus | 'all';
  setStatusFilter: (value: QuoteStatus | 'all') => void;',
  archiveFilter: 'active' | 'archived' | 'all';
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void;',
  dateRange: DateRange | undefined;
  setDateRange: (range: DateRange | undefined) => void;,
  onReset: () => void;
export const QuotesFilter: React.FC<QuotesFilterProps> = ({;

    <Card className='mb-6 bg-zion-blue-dark border-zion-blue-light'>;

      <CardContent className='p-6'>;

        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 items-end'>;
</div>
          <div className='relative'>;
            <Input;
              placeholder='Search quotes...
              className='pl-10 bg-zion-blue border-zion-blue-light text-white
              value={searchQuery}
)
              onChange={e => setSearchQuery(e && e.target.value)}            />;

          </div>;
          <div>;
            <p className='text-zion-slate-light text-sm mb-2'>Status</p>;
            <Select;
              value={statusFilter}
              onValueChange={(value: any) => setStatusFilter(value)}

              <SelectTrigger className='bg-zion-blue border-zion-blue-light text-white'>;

                <SelectValue placeholder='Status' />              ;

              <SelectContent className='bg-zion-blue-dark border-zion-blue-light text-white'>;

pr-12325
export const QuotesFilter: React.FC < QuotesFilterProps> = ({
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/admin/quotes/QuotesFilter.tsx
  search_query,
  setSearchQuery,
  status_filter,
  setStatusFilter,
  archive_filter,
  setArchiveFilter,
  date_range,
  setDateRange,
<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesFilter.tsx
  on_reset, }) => {};
=======
  setDateRange,)
pr-12325
  on_reset, }) => {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/admin/quotes/QuotesFilter.tsx
  on_reset;
}, ) => {}
  return ('
    <Card className='mb - 6 bg - zion - blue - dark border - zion - blue - light'>;'
      <CardContent className='p - 6'>;'
        <div className='grid grid - cols - 1 md:grid - cols - 4 gap - 4 items - end'>;'
          <div className='relative'>;
            <Input;'
              placeholder='Search quotes...';'
              className='pl - 10 bg - zion - blue border - zion - blue - light text - white';
              value={search_query}
              on_change={e => setSearchQuery (e.target.value)}            />;
          </div>;
          <div>;'
            <p className='text - zion - slate - light text - sm mb - 2'>Status</p>;
            <Select;
              value={status_filter}
              onValueChange={(value: any) => setStatusFilter (value)}
            >;'
              <SelectTrigger className='bg - zion - blue border - zion - blue - light text - white'>;'
                <SelectValue placeholder='Status' />              </SelectTrigger>;'
              <SelectContent className='bg - zion - blue - dark border - zion - blue - light text - white'>;
<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesFilter.tsx

<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesFilter.tsx
<<<<<<< HEAD:src/components/admin/quotes/QuotesFilter.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/quotes/QuotesFilter.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/admin/quotes/QuotesFilter.tsx
                <SelectItem value='all'>All Statuses</SelectItem>;
                <SelectItem value='new'>New</SelectItem>;
                <SelectItem value='in_review'>In Review</SelectItem>;
                <SelectItem value='responded'>Responded</SelectItem>;
                <SelectItem value='accepted'>Accepted</SelectItem>;
=======
'
                <SelectItem value='all'>All Statuses</SelectItem>;'
                <SelectItem value='new'>New</SelectItem>;'
                <SelectItem value='in_review'>In Review</SelectItem>;'
                <SelectItem value='responded'>Responded</SelectItem>;'
                <SelectItem value='accepted'>Accepted</SelectItem>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesFilter.tsx
                <SelectItem value='closed'>Closed</SelectItem>;
              </SelectContent>;
            </Select>;
          </div>;

          <div>;'
            <p className='text - zion - slate - light text - sm mb - 2'>Archive</p>;
            <Select;
              value={archive_filter}
              onValueChange={(value: any) => setArchiveFilter (value)}
            >;'
              <SelectTrigger className='bg - zion - blue border - zion - blue - light text - white'>;'
                <SelectValue placeholder='Archive Status' />              </SelectTrigger>;'
              <SelectContent className='bg - zion - blue - dark border - zion - blue - light text - white'>;
'
                <SelectItem value='active'>Active Only</SelectItem>;'
                <SelectItem value='archived'>Archived Only</SelectItem>;'
                <SelectItem value='all'>All Quotes</SelectItem>;
              </SelectContent>;
            </Select>;
          </div>;
<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesFilter.tsx

import React from "react";
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { Calendar, RefreshCw } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card",
import { Input } from "@/components/ui/input",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",
import { Button } from "@/components/ui/button",
import { Calendar as CalendarComponent } from "@/components/ui/calendar",
import { format } from "date-fns",
import type { DateRange } from "react-day-picker",
import type { QuoteStatus } from "@/types/quotes",
interface QuotesFilterProps {
=======
"
import React from "react";'
import { Calendar, RefreshCw } from 'lucide-react'";
import { Card, CardContent } from "@/components/ui/card";"
import { Input } from "@/components/ui/input";"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";"
import { Button } from "@/components/ui/button";"
import { Calendar as CalendarComponent } from "@/components/ui/calendar";"
import { format } from "date-fns";"
import type { DateRange } from "react-day-picker";"
import type { QuoteStatus } from "@/types/quotes";
interface QuotesFilterProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesFilter.tsx
  searchQuery: string,
  setSearchQuery: (value: string) => void,'
  statusFilter: QuoteStatus | 'all','
  setStatusFilter: (value: QuoteStatus | 'all') => void,'
  archiveFilter: 'active' | 'archived' | 'all','
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void,
  dateRange: DateRange | undefined,
  setDateRange: (range: DateRange | undefined) => void,
  onReset: () => void;
}

<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesFilter.tsx
<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesFilter.tsx
<<<<<<< HEAD:src/components/admin/quotes/QuotesFilter.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/quotes/QuotesFilter.tsx
export const QuotesFilter: React.FC<QuotesFilterProps> = ({
<<<<<<< HEAD
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  archiveFilter,
  setArchiveFilter,
  dateRange,
  setDateRange,
=======
=======
export const QuotesFilter: React.FC<QuotesFilterProps> = ({};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesFilter.tsx
  searchQuery;
  setSearchQuery;
  statusFilter;
  setStatusFilter;
  archiveFilter;
  setArchiveFilter;
  dateRange;
  setDateRange;
<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesFilter.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  onReset
}) => {
  return (
    <Card className="mb-6 bg-zion-blue-dark border-zion-blue-light">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
=======
  onReset;
}) => {}
  return ("
    <Card className="mb-6 bg-zion-blue-dark border-zion-blue-light">"
      <CardContent className="p-6">"
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesFilter.tsx
          <div className="relative">
            <Input"
              placeholder="Search quotes...""
              className="pl-10 bg-zion-blue border-zion-blue-light text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div>"
            <p className="text-zion-slate-light text-sm mb-2">Status</p>
            <Select value={statusFilter} onValueChange={(value: any) => setStatusFilter(value)}>"
              <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">"
                <SelectValue placeholder="Status" />
              </SelectTrigger>"
              <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-white">"
                <SelectItem value="all">All Statuses</SelectItem>"
                <SelectItem value="new">New</SelectItem>"
                <SelectItem value="in_review">In Review</SelectItem>"
                <SelectItem value="responded">Responded</SelectItem>"
                <SelectItem value="accepted">Accepted</SelectItem>"
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>"
            <p className="text-zion-slate-light text-sm mb-2">Archive</p>
            <Select value={archiveFilter} onValueChange={(value: any) => setArchiveFilter(value)}>"
              <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">"
                <SelectValue placeholder="Archive Status" />
              </SelectTrigger>"
              <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-white">"
                <SelectItem value="active">Active Only</SelectItem>"
                <SelectItem value="archived">Archived Only</SelectItem>"
                <SelectItem value="all">All Quotes</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>"
            <p className="text-zion-slate-light text-sm mb-2">Date Range</p>
            <Popover>
              <PopoverTrigger asChild>
                <Button"
                  variant="outline""
                  className="w-full justify-start text-left font-normal bg-zion-blue border-zion-blue-light text-white"
                >"
                  <Calendar className="mr-2 h-4 w-4 text-zion-slate-light" />
                  {dateRange?.from ? (
                    dateRange.to ? (
                      <>"
                        {format(dateRange.from, "LLL dd, y")} -{" "}"
                        {format(dateRange.to, "LLL dd, y")}
                      </>
                    ) : ("
                      format(dateRange.from, "LLL dd, y")
  onReset: () => void
export const QuotesFilter: React.FC<QuotesFilterProps> = ({
                      format(dateRange.from, 'LLL dd, y')
origin/cursor/automate-test-improve-and-merge-code-2533
                    )
                  ) : (
                    <span>Date range</span>
                  )}
                </Button>
<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesFilter.tsx
              </PopoverTrigger>
<<<<<<< HEAD:src/components/admin/quotes/QuotesFilter.tsx
<<<<<<< HEAD
=======
              </PopoverTrigger>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesFilter.tsx
              <PopoverContent className="w-auto p-0 bg-zion-blue-dark border-zion-blue-light" align="start">
                <CalendarComponent;
                  initialFocus"
                  mode="range"
<<<<<<< HEAD
import React from "react",;
import { Calendar, RefreshCw } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card",;
import { Input } from "@/components/ui/input",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",;
import { Button } from "@/components/ui/button",;
import { Calendar as CalendarComponent } from "@/components/ui/calendar",;
import { format } from "date-fns",;
import type { DateRange } from "react-day-picker",;
import type { QuoteStatus } from "@/types/quotes",;
interface QuotesFilterProps {;
  searchQuery: string,;
  setSearchQuery: (value: string) => void,;
  statusFilter: QuoteStatus | 'all',;
  setStatusFilter: (value: QuoteStatus | 'all') => void,;
  archiveFilter: 'active' | 'archived' | 'all',;
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void,;
  dateRange: DateRange | undefined,;
  setDateRange: (range: DateRange | undefined) => void,;
  onReset: () => void;
}
;
export const QuotesFilter: React.FC<QuotesFilterProps> = ({;
  searchQuery,;
  setSearchQuery,;
  statusFilter,;
  setStatusFilter,;
  archiveFilter,;
  setArchiveFilter,;
  dateRange,;
  setDateRange;
  onReset;
}) => {;
  return (;
    <Card className="mb-6 bg-zion-blue-dark border-zion-blue-light">;
      <CardContent className="p-6">;
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">;
          <div className="relative">;
            <Input;
              placeholder="Search quotes...";
              className="pl-10 bg-zion-blue border-zion-blue-light text-white";
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />;
          </div>;
=======
                  defaultMonth={dateRange?.from}

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/quotes/QuotesFilter.tsx
<PopoverContent
                className='w-auto p-0 bg-zion-blue-dark border-zion-blue-light'
                align='start'
              >
                <CalendarComponent
                  initialFocus
                  mode='range'
                  defaultMonth={dateRange?.from}
origin/cursor/automate-test-improve-and-merge-code-2533
                  selected={dateRange}
                  onSelect={setDateRange}
                  numberOfMonths={2}
                  defaultMonth = {dateRange?.from,}
                  selected = {dateRange,}
                  onSelect = {setDateRange,}
                  numberOfMonths = {2,}
<<<<<<< HEAD:src/components/admin/quotes/QuotesFilter.tsx
<<<<<<< HEAD


<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesFilter.tsx
  onReset: () => void


=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/quotes/QuotesFilter.tsx
=======
  onReset: () => void;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesFilter.tsx
}
=======
}}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

<<<<<<< HEAD:src/components/admin/quotes/QuotesFilter.tsx
};
<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesFilter.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <div>;
            <p className="text-zion-slate-light text-sm mb-2">Status</p>;
            <Select value={statusFilter} onValueChange={(value: any) => setStatusFilter(value)}>;
              <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">;
                <SelectValue placeholder="Status" />;
              </SelectTrigger>;
              <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-white">;
                <SelectItem value="all">All Statuses</SelectItem>;
                <SelectItem value="new">New</SelectItem>;
                <SelectItem value="in_review">In Review</SelectItem>;
                <SelectItem value="responded">Responded</SelectItem>;
                <SelectItem value="accepted">Accepted</SelectItem>;
                <SelectItem value="closed">Closed</SelectItem>;
              </SelectContent>;
            </Select>;
          </div>;
          <div>;
            <p className="text-zion-slate-light text-sm mb-2">Archive</p>;
            <Select value={archiveFilter} onValueChange={(value: any) => setArchiveFilter(value)}>;
              <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">;
                <SelectValue placeholder="Archive Status" />;
              </SelectTrigger>;
              <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-white">;
                <SelectItem value="active">Active Only</SelectItem>;
                <SelectItem value="archived">Archived Only</SelectItem>;
                <SelectItem value="all">All Quotes</SelectItem>;
              </SelectContent>;
            </Select>;
          </div>;
          <div>;
            <p className="text-zion-slate-light text-sm mb-2">Date Range</p>;
            <Popover>;
              <PopoverTrigger asChild>;
                <Button;
                  variant="outline";
                  className="w-full justify-start text-left font-normal bg-zion-blue border-zion-blue-light text-white";
                >;
                  <Calendar className="mr-2 h-4 w-4 text-zion-slate-light" />;
                  {dateRange?.from ? (;
                    dateRange.to ? (;
                      <>;
                        {format(dateRange.from, "LLL dd, y")} -{" "}
                        {format(dateRange.to, "LLL dd, y")}
                      </>;
                    ) : (;
                      format(dateRange.from, "LLL dd, y");
                    );
                  ) : (;
                    <span>Date range</span>;
                  )}
                </Button>;
              </PopoverTrigger>;
              <PopoverContent className="w-auto p-0 bg-zion-blue-dark border-zion-blue-light" align="start">;
                <CalendarComponent;
<<<<<<< HEAD
                  initialFocus;
=======
                  initial_focus;
                  mode='range'                  default_month={date_range?.from}              <PopoverContent className="w - auto p - 0 bg - zion - blue - dark border - zion - blue-light" align="start">;
                <CalendarComponent;
                  initial_focus;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          <div>;'
            <p className='text - zion - slate - light text - sm mb - 2'>Date Range</p>;
            <Popover>;
              <PopoverTrigger as_child>;
                <Button;'
                  variant='outline';'
                  className='w - full justify - start text - left font - normal bg - zion - blue border - zion - blue - light text - white';
                >;'
                  <Calendar className='mr - 2 h - 4 w - 4 text - zion - slate - light' />;
                  {date_range?.from ? (
                    date_range.to ? (
                      <>;'
                        {format (date_range.from, 'LLL dd, y')} -{' '}'
                        {format (date_range.to, 'LLL dd, y')}
                      </>) : ('"
                      format (date_range.from, 'LLL dd, y')                    )                      format (date_range.from, "LLL dd, y"))) : (
                    <span > Date range</span>)}
                </Button>;
              </PopoverTrigger>;
              <PopoverContent;'
                className='w - auto p - 0 bg - zion - blue - dark border - zion - blue - light';'
                align='start';
              >;
                <CalendarComponent;
                  initial_focus;'"
                  mode='range'                  default_month={date_range?.from}              <PopoverContent className="w - auto p - 0 bg - zion - blue - dark border - zion - blue - light" align="start">;
                <CalendarComponent;
                  initial_focus;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesFilter.tsx
                  mode="range";
                  defaultMonth={dateRange?.from}
                  selected={dateRange}
                  onSelect={setDateRange}
                  numberOfMonths={2}
<<<<<<< HEAD
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        
        <div className="mt-4 flex justify-end">
          <Button 
            variant="outline" 
            onClick={onReset}
            className="border-zion-blue-light text-zion-slate-light"
          >
            <RefreshCw className="mr-2 h-4 w-4" /> Reset Filters
          </Button>
        </div>
      </CardContent>
    </Card>
  )
},
=======
                  default_month = {date_range?.from, }
                  selected = {date_range, }
                  on_select = {setDateRange, }
                  numberOfMonths = {2, }
                />;
              </PopoverContent>;
            </Popover>;
          </div>;
        </div>;'
        <div className='mt - 4 flex justify - end'>;
          <Button;'
            variant='outline';
            on_click={on_reset}'
            className='border - zion - blue - light text - zion - slate - light'          >;'
            <RefreshCw className='mr - 2 h - 4 w - 4' /> Reset Filters          </Button>;
        </div>;
      </CardContent>;
    </Card>);
<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesFilter.tsx
}
            <RefreshCw className="mr - 2 h - 4 w-4" /> Reset Filters;
            on_click={on_reset}
            className="border - zion - blue - light text - zion - slate-light";
          >;
            <RefreshCw className="mr - 2 h - 4 w-4" /> Reset Filters;
=======
}"
            <RefreshCw className="mr - 2 h - 4 w - 4" /> Reset Filters;
            on_click={on_reset}"
            className="border - zion - blue - light text - zion - slate - light";
          >;"
            <RefreshCw className="mr - 2 h - 4 w - 4" /> Reset Filters;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesFilter.tsx
          </Button>;
        </div>;
      </CardContent>;
    </Card>);
}  );
<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesFilter.tsx
<<<<<<< HEAD
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
}
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/quotes/QuotesFilter.tsx
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
<div className='mt-4 flex justify-end'>
          <Button
            variant='outline'
            onClick={onReset}
            className='border-zion-blue-light text-zion-slate-light'
          >
            <RefreshCw className='mr-2 h-4 w-4' /> Reset Filters
          </Button>
        </div>
      </CardContent>
    </Card>
);
};
<<<<<<< HEAD:src/components/admin/quotes/QuotesFilter.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/quotes/QuotesFilter.tsx
=======
}'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesFilter.tsx
=======
}
export const QuotesFilter: React.FC<QuotesFilterProps> = ({

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/admin/quotes/QuotesFilter.tsx
