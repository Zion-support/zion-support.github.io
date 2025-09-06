<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import React from "react";
import {Calendar, RefreshCw} from "@/components/icons";
import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {Calendar, as, CalendarComponent} from "@/components/ui/calendar";
import {format} from "date-fns";
import type { DateRange } from "@/types/dateRange";
import type { QuoteStatus } from "@/types/quotes";
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import React from "react",
import { Calendar, RefreshCw } from "@/components/icons",
import { Card, CardContent } from "@/components/ui/card",
import { Input } from "@/components/ui/input",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",
import { Button } from "@/components/ui/button",
import { Calendar as CalendarComponent } from "@/components/ui/calendar",
import { format } from "date-fns";
import type { DateRange } from "@/types/dateRange";
import type { QuoteStatus } from "@/types/quotes";
import { format } from "date-fns",
import type { DateRange } from "@/types/dateRange",
import type { QuoteStatus } from "@/types/quotes",
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5




<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
interface QuotesFilterProps {

  searchQuery: string
  setSearchQuery: (value: string) => void
  statusFilter: QuoteStatus | 'all'
  setStatusFilter: (value: QuoteStatus | 'all') => void
  archiveFilter: 'active' | 'archived' | 'all'
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void
  dateRange: DateRange | undefined
  setDateRange: (range: DateRange | undefined) => void

  onReset: () => void
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
export const QuotesFilter: React.FC<QuotesFilterProps> = ({;
  searchQuery;
  setSearchQuery;
  statusFilter;
  setStatusFilter;
  archiveFilter;
  setArchiveFilter;
  dateRange;
export const QuotesFilter: React.FC<QuotesFilterProps> = ({
  searchQuery;
  setSearchQuery;
  statusFilter;
  setStatusFilter;
  archiveFilter;
  setArchiveFilter;
  dateRange;

=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
<<<<<<< HEAD
export const QuotesFilter: React.FC<QuotesFilterProps> = ({;
  searchQuery;
=======

export const QuotesFilter: React.FC<QuotesFilterProps> = ({;

  searchQuery;
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import React from './react';
import { Calendar, RefreshCw } from '@/components / icons';
import { Card, CardContent } from '@/components / ui / card';
import { Input } from '@/components / ui / input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components / ui / popover';
import { Button } from '@/components / ui / button';
import { Calendar, as, CalendarComponent } from '@/components / ui / calendar';
import { format } from './date - fns';
import type { DateRange } from "@/types / date_range";
import type { QuoteStatus } from "@/types / quotes";
interface QuotesFilterProps {
  search_query: string,
  setSearchQuery: (value: string) => void,
  status_filter: QuoteStatus | 'all',
  setStatusFilter: (value: QuoteStatus | 'all') => void,
  archive_filter: 'active' | 'archived' | 'all',
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void,
  date_range: DateRange | undefined,
  setDateRange: (range: DateRange | undefined) => void,
  on_reset: () => void;
}
export const QuotesFilter: React.FC < QuotesFilterProps> = ({
  search_query;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  setSearchQuery;
  status_filter;
  setStatusFilter;
  archive_filter;
  setArchiveFilter;

<<<<<<< HEAD
=======




  onReset
  date_range;
  setDateRange,
  on_reset;
}) => {
  setDateRange,;
  onReset;
}) => {;
  return (

              onChange={(e) => setSearchQuery(e && e.target.value)}
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
export const QuotesFilter: React.FC<QuotesFilterProps> = ({;
  searchQuery;
import React from './react';
import { Calendar, RefreshCw } from '@/components / icons';
import { Card, CardContent } from '@/components / ui / card';
import { Input } from '@/components / ui / input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components / ui / popover';
import { Button } from '@/components / ui / button';
import { Calendar, as, CalendarComponent } from '@/components / ui / calendar';
import { format } from './date - fns';
import type { DateRange } from "@/types / date_range";
import type { QuoteStatus } from "@/types / quotes";
interface QuotesFilterProps {
  search_query: string,
  setSearchQuery: (value: string) => void,
  status_filter: QuoteStatus | 'all',
  setStatusFilter: (value: QuoteStatus | 'all') => void,
  archive_filter: 'active' | 'archived' | 'all',
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void,
  date_range: DateRange | undefined,
  setDateRange: (range: DateRange | undefined) => void,
  on_reset: () => void;
}
export const QuotesFilter: React.FC < QuotesFilterProps> = ({
  search_query;
  setSearchQuery;
  status_filter;
  setStatusFilter;
  archive_filter;
  setArchiveFilter;
  date_range;
  setDateRange,
  on_reset;
}) => {
  setDateRange,;
  onReset;
}) => {;
  return (

export const QuotesFilter: React.FC<QuotesFilterProps> = ({;
  searchQuery;
  setSearchQuery;
  statusFilter;
  setStatusFilter;
  archiveFilter;
  setArchiveFilter;
  dateRange;
export const QuotesFilter: React.FC<QuotesFilterProps> = ({
  searchQuery;
  setSearchQuery;
  statusFilter;
  setStatusFilter;
  archiveFilter;
  setArchiveFilter;
  dateRange;

                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal bg-zion-blue border-zion-blue-light text-white"
                >
                  <Calendar className="mr-2 h-4 w-4 text-zion-slate-light" />
                  {dateRange?.from ? (
                    dateRange.to ? (
                      <>
                        {format(dateRange.from, "LLL dd, y")} -{" "}
                        {format(dateRange.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(dateRange.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Date range</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-zion-blue-dark border-zion-blue-light" align="start">
                <CalendarComponent
                  initialFocus
                  mode="range"
import React from "react",;
import { Calendar, RefreshCw } from "@/components/icons",;
import { Card, CardContent } from "@/components/ui/card",;
import { Input } from "@/components/ui/input",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",;
import { Button } from "@/components/ui/button",;
import { Calendar as CalendarComponent } from "@/components/ui/calendar",;
import { format } from "date-fns",;
import type { DateRange } from "@/types/dateRange",;
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
export const QuotesFilter: React.FC<QuotesFilterProps> = ({;
  searchQuery,;
  setSearchQuery,;
  statusFilter,;
  setStatusFilter,;
  archiveFilter,;
  setArchiveFilter,;
  dateRange,;
  setDateRange;
  searchQuery;
import React from './react';
import { Calendar, RefreshCw } from '@/components / icons';
import { Card, CardContent } from '@/components / ui / card';
import { Input } from '@/components / ui / input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components / ui / popover';
import { Button } from '@/components / ui / button';
import { Calendar, as, CalendarComponent } from '@/components / ui / calendar';
import { format } from './date - fns';
import type { DateRange } from "@/types / date_range";
import type { QuoteStatus } from "@/types / quotes";
interface QuotesFilterProps {
  search_query: string,
  setSearchQuery: (value: string) => void,
  status_filter: QuoteStatus | 'all',
  setStatusFilter: (value: QuoteStatus | 'all') => void,
  archive_filter: 'active' | 'archived' | 'all',
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void,
  date_range: DateRange | undefined,
  setDateRange: (range: DateRange | undefined) => void,
  on_reset: () => void;
}
export const QuotesFilter: React.FC < QuotesFilterProps> = ({
  search_query;
  setSearchQuery;
  status_filter;
  setStatusFilter;
  archive_filter;
  setArchiveFilter;

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  setDateRange
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  archiveFilter,
  setArchiveFilter,
  dateRange,
  setDateRange,
  onReset
  date_range;
  setDateRange,
  on_reset;
}) => {
  setDateRange,;
  onReset;
}) => {;
  return (


  onReset;
}) => {;
    <Card className="mb-6 bg-zion-blue-dark border-zion-blue-light">;
      <CardContent className="p-6">;
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">;
          <div className="relative">;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
            <Input;
              placeholder="Search quotes...";
              className="pl-10 bg-zion-blue border-zion-blue-light text-white";
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
<<<<<<< HEAD

            />;
          </div>;

=======
            />;
          </div>;
          ;
          <div>;
            <p className="text-zion-slate-light text-sm mb-2">Status</p>;
            <Select value={statusFilter} onValueChange={(value:any) => setStatusFilter(value)}>;
            />;
          </div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          <div>;
            <p className="text-zion-slate-light text-sm mb-2">Status</p>;
            <Select value={statusFilter} onValueChange={(value: any) => setStatusFilter(value)}>;
              <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">;
                <SelectValue placeholder="Status" />;
              </SelectTrigger>;
              <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-white">;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    <Card className="mb - 6 bg - zion - blue - dark border - zion - blue - light">;
      <CardContent className="p - 6">;
        <div className="grid grid - cols - 1 md:grid - cols - 4 gap - 4 items - end">;
          <div className="relative">;
            <Input;
              placeholder="Search quotes...";
              className="pl - 10 bg - zion - blue border - zion - blue - light text - white";
              value={search_query}
              on_change={(e) => setSearchQuery (e.target.value)}
            />;
          </div>;
          <div>;
            <p className="text - zion - slate - light text - sm mb - 2">Status</p>;
            <Select value={status_filter} onValueChange={(value: any) => setStatusFilter (value)}>;
              <SelectTrigger className="bg - zion - blue border - zion - blue - light text - white">;
                <SelectValue placeholder="Status" />;
              </SelectTrigger>;
              <SelectContent className="bg - zion - blue - dark border - zion - blue - light text - white">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                <SelectItem value="all">All Statuses</SelectItem>;
                <SelectItem value="new">New</SelectItem>;
                <SelectItem value="in_review">In Review</SelectItem>;
                <SelectItem value="responded">Responded</SelectItem>;
                <SelectItem value="accepted">Accepted</SelectItem>;
                <SelectItem value="closed">Closed</SelectItem>;
              </SelectContent>;
            </Select>;
          </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

          <div>;
            <p className="text - zion - slate - light text - sm mb - 2">Archive</p>;
            <Select value={archive_filter} onValueChange={(value: any) => setArchiveFilter (value)}>;
              <SelectTrigger className="bg - zion - blue border - zion - blue - light text - white">;
                <SelectValue placeholder="Archive Status" />;
              </SelectTrigger>;
              <SelectContent className="bg - zion - blue - dark border - zion - blue - light text - white">;

=======
          ;
          <div>;
            <p className="text-zion-slate-light text-sm mb-2">Archive</p>;
            <Select value={archiveFilter} onValueChange={(value:any) => setArchiveFilter(value)}>;
          <div>;
            <p className="text-zion-slate-light text-sm mb-2">Archive</p>;
            <Select value={archiveFilter} onValueChange={(value: any) => setArchiveFilter(value)}>;
              <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">;
                <SelectValue placeholder="Archive Status" />;
              </SelectTrigger>;
              <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-white">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                <SelectItem value="active">Active Only</SelectItem>;
                <SelectItem value="archived">Archived Only</SelectItem>;
                <SelectItem value="all">All Quotes</SelectItem>;
              </SelectContent>;
            </Select>;
          </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                    );
                  ) : (;
                    <span>Date range</span>;
                  )}
                </Button>;
              </PopoverTrigger>;
              <PopoverContent className="w-auto p-0 bg-zion-blue-dark border-zion-blue-light" align="start">;
                <CalendarComponent
                  initialFocus
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                  mode="range"
                  defaultMonth={dateRange?.from}
                  selected={dateRange}
                  onSelect={setDateRange}
                  numberOfMonths={2}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
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

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
}

},
};
},


},


          <div>;
            <p className="text - zion - slate - light text - sm mb - 2">Date Range</p>;
            <Popover>;
              <PopoverTrigger as_child>;
                <Button;
                  variant="outline";
                  className="w - full justify - start text - left font - normal bg - zion - blue border - zion - blue - light text - white";
                >;
                  <Calendar className="mr - 2 h - 4 w - 4 text - zion - slate - light" />;
                  {date_range?.from ? (
                    date_range.to ? (
                      <>;
                        {format (date_range.from, "LLL dd, y")} -{" "}
                        {format (date_range.to, "LLL dd, y")}
                      </>) : (
                      format (date_range.from, "LLL dd, y"))) : (
                    <span > Date range</span>)}
                </Button>;
              </PopoverTrigger>;
              <PopoverContent className="w - auto p - 0 bg - zion - blue - dark border - zion - blue - light" align="start">;
                <CalendarComponent;
                  initial_focus;
                  mode="range";
                  default_month={date_range?.from}
                  selected={date_range}
                  on_select={setDateRange}
                  numberOfMonths={2}
                />;
              </PopoverContent>;
            </Popover>;
          </div>;
        </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

        <div className="mt - 4 flex justify - end">;
          <Button;
            variant="outline";
            on_click={on_reset}
            className="border - zion - blue - light text - zion - slate - light";
          >;
            <RefreshCw className="mr - 2 h - 4 w - 4" /> Reset Filters;
          </Button>;
        </div>;
      </CardContent>;
    </Card>);
}
;

=======
        ;
        <div className="mt-4 flex justify-end">;
          <Button ;
            variant="outline" ;
            onClick={onReset}
            className="border-zion-blue-light text-zion-slate-light";
          >;
            <RefreshCw className="mr-2 h-4 w-4" /> Reset Filters;
          </Button>;
        </div>;
      </CardContent>;
    </Card>;
  ),;},
 interface QuotesFilterProps {
  searchQuery: string;
setSearchQuery: (value: string) => void;
statusFilter: QuoteStatus | 'all';
setStatusFilter: (value: QuoteStatus | 'all') => void;
archiveFilter: 'active' | 'archived' | 'all';
setArchiveFilter: (value: 'active' | 'archived' | 'all') => void;
dateRange: DateRange | undefined;
setDateRange: (range: DateRange | undefined) => void;
onReset: () => void 
}export const QuotesFilter: React.FC<QuotesFilterProps> = ({
  searchQuery;
setSearchQuery;
statusFilter;
setStatusFilter;
archiveFilter;
setArchiveFilter;
dateRange;
setDateRange;
onReset 
}) => {
  return (<Card className="mb-6 bg-zion-blue-dark border-zion-blue-light" > <CardContent className="p-6" > <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end" > <div className="relative" > Search quotes..."className=" pl-10 bg-zion-blue border-zion-blue-light text-white"value= {
  searchQuery 
}onChange= {
  (e) => setSearchQuery (e.target.value) 
}/> </div> <div> </SelectTrigger> <SelectContent className=" bg-zion-blue-dark border-zion-blue-light text-white"> <SelectItem value=" all">All Statuses</SelectItem> <SelectItem value=" new">New</SelectItem> <SelectItem value=" in review">In Review</SelectItem> <SelectItem value=" responded">Responded</SelectItem> <SelectItem value=" accepted">Accepted</SelectItem> <SelectItem value=" closed">Closed</SelectItem> </SelectContent> </Select> </div> <div> </SelectTrigger> <SelectContent className=" bg-zion-blue-dark border-zion-blue-light text-white"> <SelectItem value=" active">Active Only</SelectItem> <SelectItem value=" archived">Archived Only</SelectItem> <SelectItem value=" all">All Quotes</SelectItem> </SelectContent> </Select> </div> <div> <p className=" text-zion-slate-light text-sm mb-2">Date Range</p> <Popover> <PopoverTrigger asChild> <Button variant=" outline"className=" w-full justify-start text-left font-normal bg-zion-blue border-zion-blue-light text-white"> </>) : (format (dateRange.from, " LLL dd, y") ) ) : (<span>Date range</span>) 
}</Button> </PopoverTrigger> <PopoverContent className=" w-auto p-0 bg-zion-blue-dark border-zion-blue-light"align=" start"> <CalendarComponent initialFocus /> </PopoverContent> </Popover> </div> </div> <div className=" mt-4 flex justify-end"> <Button > <RefreshCw className=" mr-2 h-4 w-4" /> Reset Filters </Button> </div> </CardContent> </Card>) 
};
}

},
};
},
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
