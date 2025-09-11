<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

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

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
export const QuotesFilter: React.FC<QuotesFilterProps> = ({;
  searchQuery;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export const QuotesFilter: React.FC<QuotesFilterProps> = ({;

  searchQuery;
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  setSearchQuery;
  status_filter;
  setStatusFilter;
  archive_filter;
  setArchiveFilter;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======




>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
}) => {
  return (
    <Card className="mb-6 bg-zion-blue-dark border-zion-blue-light">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div className="relative">
            <Input
              placeholder="Search quotes..."
              className="pl-10 bg-zion-blue border-zion-blue-light text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div>
            <p className="text-zion-slate-light text-sm mb-2">Status</p>
            <Select value={statusFilter} onValueChange={(value: any) => setStatusFilter(value)}>
              <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-white">
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="in_review">In Review</SelectItem>
                <SelectItem value="responded">Responded</SelectItem>
                <SelectItem value="accepted">Accepted</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <p className="text-zion-slate-light text-sm mb-2">Archive</p>
            <Select value={archiveFilter} onValueChange={(value: any) => setArchiveFilter(value)}>
              <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">
                <SelectValue placeholder="Archive Status" />
              </SelectTrigger>
              <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-white">
                <SelectItem value="active">Active Only</SelectItem>
                <SelectItem value="archived">Archived Only</SelectItem>
                <SelectItem value="all">All Quotes</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <p className="text-zion-slate-light text-sm mb-2">Date Range</p>
            <Popover>
              <PopoverTrigger asChild>
=======





  onReset
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
  date_range;
  setDateRange,
  on_reset;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}) => {
=======
  setDateRange,;
  onReset;
}) => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (

              onChange={(e) => setSearchQuery(e && e.target.value)}
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
                  mode="range"
              onChange={(e) => setSearchQuery(e && e.target.value)}
            />;
          </div>;
          <div>;
            <p className="text-zion-slate-light text-sm mb-2">Status</p>;
            <Select value={statusFilter} onValueChange={(value: any) => setStatusFilter(value)}>;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
;
export const QuotesFilter: React.FC<QuotesFilterProps> = ({;
<<<<<<< HEAD
;
interface QuotesFilterProps {;
  searchQuery:string,;
  setSearchQuery:(value:string) => void,;
  statusFilter:QuoteStatus | 'all',;
  setStatusFilter:(value:QuoteStatus | 'all') => void,;
  archiveFilter:'active' | 'archived' | 'all',;
  setArchiveFilter:(value:'active' | 'archived' | 'all') => void,;
  dateRange:DateRange | undefined,;
  setDateRange:(range:DateRange | undefined) => void,;
  onReset:() => void;
}
;
export const QuotesFilter:React.FC<QuotesFilterProps> = ({;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  searchQuery,;
  setSearchQuery,;
  statusFilter,;
  setStatusFilter,;
  archiveFilter,;
  setArchiveFilter,;
  dateRange,;
<<<<<<< HEAD
  setDateRange,;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
            />;
          </div>;
          ;
          <div>;
            <p className="text-zion-slate-light text-sm mb-2">Status</p>;
            <Select value={statusFilter} onValueChange={(value:any) => setStatusFilter(value)}>;
            />;
          </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            />;
          </div>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div>;
            <p className="text-zion-slate-light text-sm mb-2">Status</p>;
            <Select value={statusFilter} onValueChange={(value: any) => setStatusFilter(value)}>;
              <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">;
                <SelectValue placeholder="Status" />;
              </SelectTrigger>;
              <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-white">;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          <div>;
            <p className="text - zion - slate - light text - sm mb - 2">Archive</p>;
            <Select value={archive_filter} onValueChange={(value: any) => setArchiveFilter (value)}>;
              <SelectTrigger className="bg - zion - blue border - zion - blue - light text - white">;
                <SelectValue placeholder="Archive Status" />;
              </SelectTrigger>;
              <SelectContent className="bg - zion - blue - dark border - zion - blue - light text - white">;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <SelectItem value="active">Active Only</SelectItem>;
                <SelectItem value="archived">Archived Only</SelectItem>;
                <SelectItem value="all">All Quotes</SelectItem>;
              </SelectContent>;
            </Select>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
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
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-zion-blue-dark border-zion-blue-light" align="start">
                <CalendarComponent
                  initialFocus
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  mode="range"
                  defaultMonth={dateRange?.from}
                  selected={dateRange}
                  onSelect={setDateRange}
                  numberOfMonths={2}
<<<<<<< HEAD
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

=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

},


          ;
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
                    ) :(;
                      format(dateRange.from, "LLL dd, y");
                    );
                  ) :(;
                    <span>Date range</span>;
                  )}
                </Button>;
              </PopoverTrigger>;
              <PopoverContent className="w-auto p-0 bg-zion-blue-dark border-zion-blue-light" align="start">;
                <CalendarComponent;
                  initialFocus;
                  mode="range";
                  defaultMonth={dateRange?.from}
                  selected={dateRange}
                  onSelect={setDateRange}
                  numberOfMonths={2}
=======

=======

},


=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                />;
              </PopoverContent>;
            </Popover>;
          </div>;
        </div>;
<<<<<<< HEAD
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

<<<<<<< HEAD
},
};
},
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

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

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
