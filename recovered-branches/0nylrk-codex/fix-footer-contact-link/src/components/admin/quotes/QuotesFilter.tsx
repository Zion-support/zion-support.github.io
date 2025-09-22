<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
import type { QuoteStatus } from "@/types/quotes",

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
import type { QuoteStatus } from "@/types/quotes",  setSearchQuery;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  status_filter;
  setStatusFilter;
  archive_filter;
  setArchiveFilter;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  onReset;
  date_range;
  setDateRange,
  on_reset;

}) => {}
  setDateRange,;
  onReset;
}) => {;

  return (
              onChange={(e) => setSearchQuery(e && e.target.value)}

interface QuotesFilterProps {;
  searchQuery: string,;
  setSearchQuery: (value: string) => void,;'
  statusFilter: QuoteStatus | 'all',;'
  setStatusFilter: (value: QuoteStatus | 'all') => void,;'
  archiveFilter: 'active' | 'archived' | 'all',;'
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void,;
  dateRange: DateRange | undefined,;
  setDateRange: (range: DateRange | undefined) => void,;
  onReset: () => void;
}
export const QuotesFilter: React.FC<QuotesFilterProps> = ({;
  searchQuery;'
import React from './react';'
import { Calendar, RefreshCw } from '@/components / icons';'
import { Card, CardContent } from '@/components / ui / card';'
import { Input } from '@/components / ui / input';'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';'
import { Popover, PopoverContent, PopoverTrigger } from '@/components / ui / popover';'
import { Button } from '@/components / ui / button';'
import { Calendar, as, CalendarComponent } from '@/components / ui / calendar';'
import { format } from './date - fns';"
import type { DateRange } from "@/types / date_range";"
import type { QuoteStatus } from "@/types / quotes";
interface QuotesFilterProps {}
  search_query: string,
  setSearchQuery: (value: string) => void,'
  status_filter: QuoteStatus | 'all','
  setStatusFilter: (value: QuoteStatus | 'all') => void,'
  archive_filter: 'active' | 'archived' | 'all','
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void,
  date_range: DateRange | undefined,
  setDateRange: (range: DateRange | undefined) => void,
  on_reset: () => void;
}
export const QuotesFilter: React.FC < QuotesFilterProps> = ({};
  search_query;
  setSearchQuery;
  status_filter;
  setStatusFilter;
  archive_filter;
  setArchiveFilter;
  date_range;
  setDateRange,
  on_reset;
}) => {}
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
export const QuotesFilter: React.FC<QuotesFilterProps> = ({};
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

  searchQuery;'
import React from './react';'
import { Calendar, RefreshCw } from '@/components / icons';'
import { Card, CardContent } from '@/components / ui / card';'
import { Input } from '@/components / ui / input';'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';'
import { Popover, PopoverContent, PopoverTrigger } from '@/components / ui / popover';'
import { Button } from '@/components / ui / button';'
import { Calendar, as, CalendarComponent } from '@/components / ui / calendar';'
import { format } from './date - fns';"
import type { DateRange } from "@/types / date_range";"
import type { QuoteStatus } from "@/types / quotes";
interface QuotesFilterProps {}
  search_query: string,
  setSearchQuery: (value: string) => void,'
  status_filter: QuoteStatus | 'all','
  setStatusFilter: (value: QuoteStatus | 'all') => void,'
  archive_filter: 'active' | 'archived' | 'all','
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void,
  date_range: DateRange | undefined,
  setDateRange: (range: DateRange | undefined) => void,
  on_reset: () => void;
}
export const QuotesFilter: React.FC < QuotesFilterProps> = ({};
  search_query;
  setSearchQuery;
  status_filter;
  setStatusFilter;
  archive_filter;
  setArchiveFilter;

setDateRange;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  archiveFilter,
  setArchiveFilter,
  dateRange,
  setDateRange,
  onReset;
  date_range;
  setDateRange,
  on_reset;
}) => {}
  setDateRange,;

  onReset;
}) => {;
  return (

  onReset;
}) => {;"
    <Card className="mb-6 bg-zion-blue-dark border-zion-blue-light">;"
      <CardContent className="p-6">;"
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">;"
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
<<<<<<< HEAD
<<<<<<< HEAD
              <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-white">;
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
              <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-white">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <SelectItem value="all">All Statuses</SelectItem>;
                <SelectItem value="new">New</SelectItem>;
                <SelectItem value="in_review">In Review</SelectItem>;
                <SelectItem value="responded">Responded</SelectItem>;
                <SelectItem value="accepted">Accepted</SelectItem>;

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <SelectItem value="closed">Closed</SelectItem>;
              </SelectContent>;
            </Select>;
          </div>;

                <SelectItem value="active">Active Only</SelectItem>;
=======
              <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-white">;                <SelectItem value="active">Active Only</SelectItem>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
              <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-white">;                <SelectItem value="active">Active Only</SelectItem>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          <div>;
            <p className="text - zion - slate - light text - sm mb - 2">Archive</p>;
            <Select value={archive_filter} onValueChange={(value: any) => setArchiveFilter (value)}>;
              <SelectTrigger className="bg - zion - blue border - zion - blue - light text - white">;
                <SelectValue placeholder="Archive Status" />;
              </SelectTrigger>;
              <SelectContent className="bg - zion - blue - dark border - zion - blue - light text - white">;

                <SelectItem value="active">Active Only</SelectItem>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <SelectItem value="archived">Archived Only</SelectItem>;
=======
"
                <SelectItem value="active">Active Only</SelectItem>;"
                <SelectItem value="archived">Archived Only</SelectItem>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                <SelectItem value="all">All Quotes</SelectItem>;
              </SelectContent>;
            </Select>;
<<<<<<< HEAD
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    );
=======
          </div>;                    );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          </div>;                    );
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  ) : (;
                    <span>Date range</span>;
                  )}
                </Button>;
              </PopoverTrigger>;"
              <PopoverContent className="w-auto p-0 bg-zion-blue-dark border-zion-blue-light" align="start">;
<CalendarComponent
<<<<<<< HEAD
                  initialFocus
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                <CalendarComponent;
                  initialFocus;
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  mode="range"
                  defaultMonth={dateRange?.from}
                  selected={dateRange}
                  onSelect={setDateRange}
                  numberOfMonths={2}

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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

}
=======
                  initialFocus}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          </div>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

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
                      <>;"
                        {format (date_range.from, "LLL dd, y")} -{" "}"
                        {format (date_range.to, "LLL dd, y")}
                      </>) : ("
                      format (date_range.from, "LLL dd, y"))) : (
                    <span > Date range</span>)}
                </Button>;
</PopoverTrigger>;
              <PopoverContent className="w - auto p - 0 bg - zion - blue - dark border - zion - blue-light" align="start">;
                <CalendarComponent;
                  initial_focus;"
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
                    ) : (;
                      format(dateRange.from, "LLL dd, y");
                    );
                  ) : (;
                    <span>Date range</span>;
                  )}
                </Button>;
              </PopoverTrigger>;
              <PopoverContent className="w-auto p-0 bg-zion-blue-dark border-zion-blue-light" align="start">;
                <CalendarComponent
                  initialFocus
                  mode="range"
                  defaultMonth={dateRange?.from}
                  selected={dateRange}
                  onSelect={setDateRange}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  numberOfMonths={2}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                  numberOfMonths={2}

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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                />;
              </PopoverContent>;
            </Popover>;
          </div>;
        </div>;

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
