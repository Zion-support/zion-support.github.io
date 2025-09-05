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
  searchQuery,;
  setSearchQuery,;
  statusFilter,;
  setStatusFilter,;
  archiveFilter,;
  setArchiveFilter,;
  dateRange,;
  setDateRange,;
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
          ;
          <div>;
            <p className="text-zion-slate-light text-sm mb-2">Status</p>;
            <Select value={statusFilter} onValueChange={(value:any) => setStatusFilter(value)}>;
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
          ;
          <div>;
            <p className="text-zion-slate-light text-sm mb-2">Archive</p>;
            <Select value={archiveFilter} onValueChange={(value:any) => setArchiveFilter(value)}>;
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
                />;
              </PopoverContent>;
            </Popover>;
          </div>;
        </div>;
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
  ),;
=======
import React from "react",
import { Calendar, RefreshCw } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card",
import { Input } from "@/components/ui/input",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",
import { Button } from "@/components/ui/button",
import { Calendar as CalendarComponent } from "@/components/ui/calendar",
import { format } from "date-fns",
import type { DateRange } from "react-day-picker",
import type { QuoteStatus } from "@/types/quotes",interface QuotesFilterProps {
  searchQuery: string,
  setSearchQuery: (value: string) => void,
  statusFilter: QuoteStatus | 'all',
  setStatusFilter: (value: QuoteStatus | 'all') => void,
  archiveFilter: 'active' | 'archived' | 'all',
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void,
  dateRange: DateRange | undefined,
  setDateRange: (range: DateRange | undefined) => void,
  onReset: () => void
}

export const QuotesFilter: React.FC<QuotesFilterProps> = ({
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
    <Card className=&quot;mb-6 bg-zion-blue-dark border-zion-blue-light&quot;>
      <CardContent className=&quot;p-6&quot;>
        <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-4 items-end&quot;>
          <div className=&quot;relative&quot;>
import React from "react";
import type {DateRange} from "react-day-picker";
import type {QuoteStatus} from "@/types/quotes";

interface QuotesFilterProps {searchQuery: string,
  setSearchQuery: (value: string) => void;
  statusFilter: QuoteStatus | 'all';
  setStatusFilter: (value: QuoteStatus | 'all') => void;
  archiveFilter: 'active' | 'archived' | 'all';
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void;
  dateRange: DateRange | undefined;
  setDateRange: (range: DateRange | undefined) => void;
  onReset: () => void}

export const QuotesFilter: React.FC<QuotesFilterProps> = (_{searchQuery, setSearchQuery, statusFilter, setStatusFilter, archiveFilter, setArchiveFilter, dateRange, setDateRange, onReset}) => {return (_<Card className="mb-6 bg-zion-blue-dark border-zion-blue-light">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div className="relative">
            <Input,
placeholder=&quot;Search quotes...&quot;
              className=&quot;pl-10 bg-zion-blue border-zion-blue-light text-white&quot;
              value={searchQuery}
              onChange={_(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div>
            <p className=&quot;text-zion-slate-light text-sm mb-2&quot;>Status</p>
            <Select value={statusFilter} onValueChange={(value: any) => setStatusFilter(value)}>
              <SelectTrigger className=&quot;bg-zion-blue border-zion-blue-light text-white&quot;>
                <SelectValue placeholder=&quot;Status&quot; />              </SelectTrigger>
              <SelectContent className=&quot;bg-zion-blue-dark border-zion-blue-light text-white&quot;>
                <SelectItem value=&quot;all&quot;>All Statuses</SelectItem>
                <SelectItem value=&quot;new&quot;>New</SelectItem>
                <SelectItem value=&quot;inreview&quot;>In Review</SelectItem>
                <SelectItem value=&quot;responded&quot;>Responded</SelectItem>
                <SelectItem value=&quot;accepted&quot;>Accepted</SelectItem>
                <SelectItem value=&quot;closed&quot;>Closed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <p className=&quot;text-zion-slate-light text-sm mb-2&quot;>Archive</p>
            <Select value={archiveFilter} onValueChange={(value: any) => setArchiveFilter(value)}>
              <SelectTrigger className=&quot;bg-zion-blue border-zion-blue-light text-white&quot;>
                <SelectValue placeholder=&quot;Archive Status&quot; />              </SelectTrigger>
              <SelectContent className=&quot;bg-zion-blue-dark border-zion-blue-light text-white&quot;>
                <SelectItem value=&quot;active&quot;>Active Only</SelectItem>
                <SelectItem value=&quot;archived&quot;>Archived Only</SelectItem>
                <SelectItem value=&quot;all&quot;>All Quotes</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <p className=&quot;text-zion-slate-light text-sm mb-2&quot;>Date Range</p>
            <Popover>
              <PopoverTrigger asChild>
                <Button,
variant=&quot;outline&quot;
                  className=&quot;w-full justify-start text-left font-normal bg-zion-blue border-zion-blue-light text-white&quot;
                >
                  <Calendar className=&quot;mr-2 h-4 w-4 text-zion-slate-light&quot; />
                  {dateRange?.from ? (
                    dateRange.to ? (
                      <>
                        {format(dateRange.from, &quot;LLL dd, y&quot;)} -{&quot; &quot}
                        {format(dateRange.to, &quot;LLL dd, y&quot;)}                      </>
                    ) : (
                      format(dateRange.from, &quot;LLL dd, y&quot;)
                    )
                  ) : (
                    <span>Date range</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className=&quot;w-auto p-0 bg-zion-blue-dark border-zion-blue-light&quot; align=&quot;start&quot;>
                <CalendarComponent,
initialFocus
                  mode=&quot;range&quot;
                  defaultMonth={dateRange?.from}
                  selected={dateRange}
                  onSelect={setDateRange}
                  numberOfMonths={2}                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        
        <div className=&quot;mt-4 flex justify-end&quot;>
          <Button,
variant=&quot;outline&quot; 
            onClick={onReset}
            className=&quot;border-zion-blue-light text-zion-slate-light&quot;          >
            <RefreshCw className=&quot;mr-2 h-4 w-4&quot; /> Reset Filters
          </Button>
        </div>
      </CardContent>
    </Card>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
},