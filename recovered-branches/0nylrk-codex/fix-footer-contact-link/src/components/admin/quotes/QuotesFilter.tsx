

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
import type { QuoteStatus } from "@/types/quotes",  setSearchQuery;
  status_filter;
  setStatusFilter;
  archive_filter;
  setArchiveFilter;

              onChange={(e) => setSearchQuery(e && e.target.value)}



import React from "react";""
import {Calendar, RefreshCw} from "@/components/icons";""
import {Card, CardContent} from "@/components/ui/card";""
import {Input} from "@/components/ui/input";""
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";""
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";""
import {Button} from "@/components/ui/button";""
import {Calendar, as, CalendarComponent} from "@/components/ui/calendar";""
import {format} from "date-fns";""
import type { DateRange } from "@/types/dateRange";""
import type { QuoteStatus } from "@/types/quotes";""
import React from "react",""
import { Calendar, RefreshCw } from "@/components/icons",""
import { Card, CardContent } from "@/components/ui/card",""
import { Input } from "@/components/ui/input",""
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",""
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",""
import { Button } from "@/components/ui/button",""
import { Calendar as CalendarComponent } from "@/components/ui/calendar",""
import { format } from "date-fns";""
import { format } from "date-fns",""
import type { DateRange } from "@/types/dateRange",""
import type { QuoteStatus } from "@/types/quotes","
interface QuotesFilterProps {
  // TODO: Implement
}
  searchQuery: string;,
  setSearchQuery: (value: string) => void;,"
  statusFilter: QuoteStatus | 'all
  setStatusFilter: (value: QuoteStatus | 'all') => void;',
  archiveFilter: 'active' | 'archived' | 'all
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void;',
  dateRange: DateRange | undefined;
  setDateRange: (range: DateRange | undefined) => void;,
  onReset: () => void;

pr-12325
interface QuotesFilterProps {;
  searchQuery: string,;
  setSearchQuery: (value: string) => void,;
  statusFilter: QuoteStatus | 'all',;
  setStatusFilter: (value: QuoteStatus | 'all') => void,;
  archiveFilter: 'active' | 'archived' | 'all',;
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void,;
  setSearchQuery: (value: string) => void,;'
  statusFilter: QuoteStatus | 'all',;''
  setStatusFilter: (value: QuoteStatus | 'all') => void,;''
  archiveFilter: 'active' | 'archived' | 'all',;''
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void,;'
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

export const QuotesFilter: React.FC<QuotesFilterProps> = ({;


pr-12325

export const QuotesFilter: React.FC<QuotesFilterProps> = ({;
</QuotesFilterProps>
export const QuotesFilter: React.FC<QuotesFilterProps> = ({;
</QuotesFilterProps>

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
  on_reset;)
pr-12325
  on_reset;)

}) => {
  setDateRange,;}
  onReset;}
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

export const QuotesFilter: React.FC<QuotesFilterProps> = ({;
</QuotesFilterProps>
export const QuotesFilter: React.FC<QuotesFilterProps> = ({
</QuotesFilterProps>'
    <Card className="mb-6 bg-zion-blue-dark border-zion-blue-light">"
</Card>"
      <CardContent className="p-6">"
</CardContent>"
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">"
</div>"
          <div className="relative">"
</div>
            <Input;"
              placeholder="Search quotes..."""
              className="pl-10 bg-zion-blue border-zion-blue-light text-white""
              value={searchQuery})
              onChange={(e) => setSearchQuery(e.target.value)}
</Input>
          </div>
          <div>
</div>"
            <p className="text-zion-slate-light text-sm mb-2">Status</p>"
            <Select value={statusFilter} onValueChange={(value: any) => setStatusFilter(value)}>
</Select>"
              <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">"
</SelectTrigger>"
                <SelectValue placeholder="Status" />"
</SelectValue>
              </SelectTrigger>"
              <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-white">"
</SelectContent>"
                <SelectItem value="all">All Statuses</SelectItem>""
                <SelectItem value="new">New</SelectItem>""
                <SelectItem value="in_review">In Review</SelectItem>""
                <SelectItem value="responded">Responded</SelectItem>""
                <SelectItem value="accepted">Accepted</SelectItem>""
                <SelectItem value="closed">Closed</SelectItem>"
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
</div>"
            <p className="text-zion-slate-light text-sm mb-2">Archive</p>"
            <Select value={archiveFilter} onValueChange={(value: any) => setArchiveFilter(value)}>
</Select>"
              <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">"
</SelectTrigger>"
                <SelectValue placeholder="Archive Status" />"
</SelectValue>
              </SelectTrigger>"
              <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-white">"
</SelectContent>"
                <SelectItem value="active">Active Only</SelectItem>""
                <SelectItem value="archived">Archived Only</SelectItem>""
                <SelectItem value="all">All Quotes</SelectItem>"
              </SelectContent>
            </Select>
          </div>
          <div>
            <p className="text-zion-slate-light text-sm mb-2">Date Range</p>
            <Popover>
              <PopoverTrigger asChild>
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
import type { QuoteStatus } from "@/types/quotes",;  setDateRange;  setDateRange

export const QuotesFilter: React.FC<QuotesFilterProps> = ({

    <Card className="mb-6 bg-zion-blue-dark border-zion-blue-light">"
"
      <CardContent className="p-6">"
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">"
</div>"
          <div className="relative">"
</div>
            <Input;"
              placeholder="Search quotes..."""
              className="pl-10 bg-zion-blue border-zion-blue-light text-white""
              value={searchQuery})
              onChange={(e) => setSearchQuery(e.target.value)}

          <div>
            <p className="text-zion-slate-light text-sm mb-2">Status</p>"
            <Select value={statusFilter} onValueChange={(value: any) => setStatusFilter(value)}>
              <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">"
                <SelectValue placeholder="Status" />"

              <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-white">"
                <SelectItem value="all">All Statuses""
                <SelectItem value="new">New""
                <SelectItem value="in_review">In Review""
                <SelectItem value="responded">Responded""
                <SelectItem value="accepted">Accepted""
                <SelectItem value="closed">Closed"
              
            
            <p className="text-zion-slate-light text-sm mb-2">Archive</p>"
            <Select value={archiveFilter} onValueChange={(value: any) => setArchiveFilter(value)}>
                <SelectValue placeholder="Archive Status" />"

                <SelectItem value="active">Active Only""
                <SelectItem value="archived">Archived Only""
                <SelectItem value="all">All Quotes"
              
            
            <p className="text-zion-slate-light text-sm mb-2">Date Range</p>"
            <Popover>

              <PopoverTrigger asChild>

                <Button;"
                  variant="outline"""
                  className="w-full justify-start text-left font-normal bg-zion-blue border-zion-blue-light text-white""
                >
                  <Calendar className="mr-2 h-4 w-4 text-zion-slate-light" />"

                      <>"
                        {format(dateRange.from, "LLL dd, y")} -{" "}""
                        {format(dateRange.to, "LLL dd, y")}"
                      </>
                    ) : ()"
                      format(dateRange.from, "LLL dd, y")"
                    )
                  ) : (
                    <span>Date range</span>
                
              <PopoverContent className="w-auto p-0 bg-zion-blue-dark border-zion-blue-light" align="start">"

                <CalendarComponent;
                  initialFocus;"
                  mode="range"""
import React from "react",;""
import { Calendar, RefreshCw } from "@/components/icons",;""
import { Card, CardContent } from "@/components/ui/card",;""
import { Input } from "@/components/ui/input",;""
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;""
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",;""
import { Button } from "@/components/ui/button",;""
import { Calendar as CalendarComponent } from "@/components/ui/calendar",;""
import { format } from "date-fns",;""
import type { DateRange } from "@/types/dateRange",;""
import type { QuoteStatus } from "@/types/quotes",;"
  searchQuery: string,;)



  setDateRange;
pr-12325
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
  onReset;

  date_range;
  setDateRange,
  on_reset;)
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
            <Input;
              placeholder="Search quotes...";
              className="pl-10 bg-zion-blue border-zion-blue-light text-white";
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}

            />;
          </div>;
          <div>;
            <p className="text-zion-slate-light text-sm mb-2">Status</p>;
            <Select value={statusFilter} onValueChange={(value: any) => setStatusFilter(value)}>;
              <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">;
                <SelectValue placeholder="Status" />;
              </SelectTrigger>;
              <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-white">;                <SelectItem value="active">Active Only</SelectItem>;
                <SelectItem value="archived">Archived Only</SelectItem>;
                <SelectItem value="all">All Quotes</SelectItem>;
              </SelectContent>;
            </Select>;
          </div>;                    );
                  ) : (;
                    <span>Date range</span>;
                  )}
                </Button>;
              </PopoverTrigger>;
              <PopoverContent className="w-auto p-0 bg-zion-blue-dark border-zion-blue-light" align="start">;
                <CalendarComponent
                  initialFocus}

  onReset;)
}) => {;"
    <Card className="mb-6 bg-zion-blue-dark border-zion-blue-light">;"
</Card>"
      <CardContent className="p-6">;"
</CardContent>"
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">;"
</div>"
          <div className="relative">;"
</div>
            <Input;"
              placeholder="Search quotes...";""
              className="pl-10 bg-zion-blue border-zion-blue-light text-white";"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
</Input>
          </div>;
          <div>;
</div>"
            <p className="text-zion-slate-light text-sm mb-2">Status</p>;"
            <Select value={statusFilter} onValueChange={(value: any) => setStatusFilter(value)}>;
</Select>"
              <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">;"
</SelectTrigger>"
                <SelectValue placeholder="Status" />;"
</SelectValue>
              </SelectTrigger>;"
              <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-white">;"
</SelectContent>"
                <SelectItem value="all">All Statuses</SelectItem>;""
                <SelectItem value="new">New</SelectItem>;""
                <SelectItem value="in_review">In Review</SelectItem>;""
                <SelectItem value="responded">Responded</SelectItem>;""
                <SelectItem value="accepted">Accepted</SelectItem>;""
                <SelectItem value="closed">Closed</SelectItem>;"
              </SelectContent>;
            </Select>;
          </div>;
          <div>;
</div>"
            <p className="text - zion - slate - light text - sm mb - 2">Archive</p>;"
            <Select value={archive_filter} onValueChange={(value: any) => setArchiveFilter (value)}>;
</Select>"
              <SelectTrigger className="bg - zion - blue border - zion - blue - light text - white">;"
</SelectTrigger>"
                <SelectValue placeholder="Archive Status" />;"
</SelectValue>
              </SelectTrigger>;"
              <SelectContent className="bg - zion - blue - dark border - zion - blue - light text - white">;"
</SelectContent>"
                <SelectItem value="active">Active Only</SelectItem>;""
                <SelectItem value="archived">Archived Only</SelectItem>;""
                <SelectItem value="all">All Quotes</SelectItem>;"
              </SelectContent>;
            </Select>;
          </div>;
          <div>;
</div>"
            <p className="text-zion-slate-light text-sm mb-2">Date Range</p>;"
            <Popover>;
</Popover>
              <PopoverTrigger asChild>;
</PopoverTrigger>
                <Button;"
                  variant="outline";""
                  className="w-full justify-start text-left font-normal bg-zion-blue border-zion-blue-light text-white";"
                >;
</Button>"
                  <Calendar className="mr-2 h-4 w-4 text-zion-slate-light" />;"
</Calendar>
                      <>;"
                        {format(dateRange.from, "LLL dd, y")} -{" "}""
                        {format(dateRange.to, "LLL dd, y")}"
                      </>;
                    ) : (;)"
                      format(dateRange.from, "LLL dd, y");"
                    );
                  ) : (;
                    <span>Date range</span>;
                </Button>;
              </PopoverTrigger>;"
              <PopoverContent className="w-auto p-0 bg-zion-blue-dark border-zion-blue-light" align="start">;"
</PopoverContent>
                <CalendarComponent;
                  initialFocus;"
                  mode="range""
                  defaultMonth={dateRange?.from}
                  selected={dateRange}
                  onSelect={setDateRange}
                  numberOfMonths={2}

}


},
};
},

},

            <p className="text - zion - slate - light text - sm mb-2">Date Range</p>;
            <Popover>;
              <PopoverTrigger as_child>;
                <Button;
                  variant="outline";
                  className="w - full justify - start text - left font - normal bg - zion - blue border - zion - blue - light text-white";
                >;
                  <Calendar className="mr - 2 h - 4 w - 4 text - zion - slate-light" />;
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
              <PopoverContent className="w - auto p - 0 bg - zion - blue - dark border - zion - blue-light" align="start">;
                <CalendarComponent;
                  initial_focus;
                  mode="range";
                  default_month={date_range?.from}
                  selected={date_range}
                  on_select={setDateRange}
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


  onReset;)
}) => {;"
    <Card className="mb-6 bg-zion-blue-dark border-zion-blue-light">;"
      <CardContent className="p-6">;"
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">;"
          <div className="relative">;"
              placeholder="Search quotes...";""
              className="pl-10 bg-zion-blue border-zion-blue-light text-white";"
              value={searchQuery}

          </div>;
          <div>;
            <p className="text-zion-slate-light text-sm mb-2">Status</p>;"
            <Select value={statusFilter} onValueChange={(value: any) => setStatusFilter(value)}>;
              <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">;"
                <SelectValue placeholder="Status" />;"

              ;"
              <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-white">;"
                <SelectItem value="all">All Statuses;""
                <SelectItem value="new">New;""
                <SelectItem value="in_review">In Review;""
                <SelectItem value="responded">Responded;""
                <SelectItem value="accepted">Accepted;""
                <SelectItem value="closed">Closed;"
              ;
            <p className="text - zion - slate - light text - sm mb - 2">Archive</p>;"
            <Select value={archive_filter} onValueChange={(value: any) => setArchiveFilter (value)}>;
              <SelectTrigger className="bg - zion - blue border - zion - blue - light text - white">;"
                <SelectValue placeholder="Archive Status" />;"

              <SelectContent className="bg - zion - blue - dark border - zion - blue - light text - white">;"
                <SelectItem value="active">Active Only;""
                <SelectItem value="archived">Archived Only;""
                <SelectItem value="all">All Quotes;"
            <p className="text-zion-slate-light text-sm mb-2">Date Range</p>;"
            <Popover>;

              <PopoverTrigger asChild>;

                  variant="outline";""
                  className="w-full justify-start text-left font-normal bg-zion-blue border-zion-blue-light text-white";"
                >;
                  <Calendar className="mr-2 h-4 w-4 text-zion-slate-light" />;"

                      <>;"
                      </>;
                    ) : (;)"
                      format(dateRange.from, "LLL dd, y");"
                    );
                  ) : (;
                    <span>Date range</span>;
              <PopoverContent className="w-auto p-0 bg-zion-blue-dark border-zion-blue-light" align="start">;"

                  mode="range""
                  defaultMonth={dateRange?.from}
                  selected={dateRange}
                  onSelect={setDateRange}
                  numberOfMonths={2}


},
};


},



            <p className="text - zion - slate - light text - sm mb - 2">Date Range</p>;"

              <PopoverTrigger as_child>;

                  className="w - full justify - start text - left font - normal bg - zion - blue border - zion - blue - light text - white";"
                  <Calendar className="mr - 2 h - 4 w - 4 text - zion - slate - light" />;"

                      <>;)"
                        {format (date_range.from, "LLL dd, y")} -{" "}""
                        {format (date_range.to, "LLL dd, y")}"
                      </>) : ()"
                      format (date_range.from, "LLL dd, y"))) : (")
                    <span > Date range</span>)}
              <PopoverContent className="w - auto p - 0 bg - zion - blue - dark border - zion - blue - light" align="start">;"

                  initial_focus;"
                  mode="range";"
                  default_month={date_range?.from}
                  selected={date_range}
                  on_select={setDateRange}
                />;

        </div>;"
        <div className="mt - 4 flex justify - end">;"
            variant="outline";"
            on_click={on_reset}"
            className="border - zion - blue - light text - zion - slate - light";"
            <RefreshCw className="mr - 2 h - 4 w - 4" /> Reset Filters;"

    );"
pr-12325
</RefreshCw>
          </Button>;
        </div>;
      </CardContent>;
    </Card>);"

