
interface QuotesFilterProps {;

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
import type { QuoteStatus } from "@/types/quotes",

interface QuotesFilterProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  statusFilter: QuoteStatus | 'all';
  setStatusFilter: (value: QuoteStatus | 'all') => void;
  archiveFilter: 'active' | 'archived' | 'all';
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void;
  dateRange: DateRange | undefined;
  setDateRange: (range: DateRange | undefined) => void;
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

  return (
    <Card className='mb-6 bg-zion-blue-dark border-zion-blue-light'>;
      <CardContent className='p-6'>;
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 items-end'>;
          <div className='relative'>;

            <Input
              placeholder='Search quotes...'
              className='pl-10 bg-zion-blue border-zion-blue-light text-white'
              value={searchQuery}

              onChange={e => setSearchQuery(e && e.target.value)}            />;
          </div>;

          <div>;
            <p className='text-zion-slate-light text-sm mb-2'>Status</p>;

            <Select
              value={statusFilter}
              onValueChange={(value: any) => setStatusFilter(value)}
            >;
              <SelectTrigger className='bg-zion-blue border-zion-blue-light text-white'>;
                <SelectValue placeholder='Status' />              </SelectTrigger>;
              <SelectContent className='bg-zion-blue-dark border-zion-blue-light text-white'>;
import React from 'react';
import { Calendar, RefreshCw } from 'lucide-react';
import { Card, CardContent } from '@/components / ui / card';
import { Input } from '@/components / ui / input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components / ui / select';
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components / ui / popover';
import { Button } from '@/components / ui / button';
import { Calendar as CalendarComponent } from '@/components / ui / calendar';
import { format } from 'date - fns';
import type { DateRange } from 'react - day - picker';
import type { QuoteStatus } from '@/types / quotes';
interface QuotesFilterProps {
  search_query: string;
  setSearchQuery: (value: string) => void;
  status_filter: QuoteStatus | 'all';
  setStatusFilter: (value: QuoteStatus | 'all') => void;
  archive_filter: 'active' | 'archived' | 'all';
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void;
  date_range: DateRange | undefined;
  setDateRange: (range: DateRange | undefined) => void;
  on_reset: () => void;
export const QuotesFilter: React.FC < QuotesFilterProps> = ({
  search_query,
  setSearchQuery,
  status_filter,
  setStatusFilter,
  archive_filter,
  setArchiveFilter,
  date_range,
  setDateRange,
  on_reset, }) => {
  on_reset;
}, ) => {
  return (
    <Card className='mb - 6 bg - zion - blue - dark border - zion - blue - light'>;
      <CardContent className='p - 6'>;
        <div className='grid grid - cols - 1 md:grid - cols - 4 gap - 4 items - end'>;
          <div className='relative'>;
            <Input;
              placeholder='Search quotes...';
              className='pl - 10 bg - zion - blue border - zion - blue - light text - white';
              value={search_query}
              on_change={e => setSearchQuery (e.target.value)}            />;
          </div>;
          <div>;
            <p className='text - zion - slate - light text - sm mb - 2'>Status</p>;
            <Select;
              value={status_filter}
              onValueChange={(value: any) => setStatusFilter (value)}
            >;
              <SelectTrigger className='bg - zion - blue border - zion - blue - light text - white'>;
                <SelectValue placeholder='Status' />              </SelectTrigger>;
              <SelectContent className='bg - zion - blue - dark border - zion - blue - light text - white'>;

                <SelectItem value='all'>All Statuses</SelectItem>;
                <SelectItem value='new'>New</SelectItem>;
                <SelectItem value='in_review'>In Review</SelectItem>;
                <SelectItem value='responded'>Responded</SelectItem>;
                <SelectItem value='accepted'>Accepted</SelectItem>;
                <SelectItem value='closed'>Closed</SelectItem>;
              </SelectContent>;
            </Select>;
          </div>;

          <div>;
            <p className='text - zion - slate - light text - sm mb - 2'>Archive</p>;
            <Select;
              value={archive_filter}
              onValueChange={(value: any) => setArchiveFilter (value)}
            >;
              <SelectTrigger className='bg - zion - blue border - zion - blue - light text - white'>;
                <SelectValue placeholder='Archive Status' />              </SelectTrigger>;
              <SelectContent className='bg - zion - blue - dark border - zion - blue - light text - white'>;

                <SelectItem value='active'>Active Only</SelectItem>;
                <SelectItem value='archived'>Archived Only</SelectItem>;
                <SelectItem value='all'>All Quotes</SelectItem>;
              </SelectContent>;
            </Select>;
          </div>;

import React from "react";
import { Calendar, RefreshCw } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";
import type { DateRange } from "react-day-picker";
import type { QuoteStatus } from "@/types/quotes";
interface QuotesFilterProps {
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

                    )
                  ) : (
                    <span>Date range</span>
                  )}
                </Button>
              </PopoverTrigger>

                <CalendarComponent
                  initialFocus
                  mode="range"
                  defaultMonth={dateRange?.from}

                  selected={dateRange}
                  onSelect={setDateRange}
                  numberOfMonths={2}
                  defaultMonth = {dateRange?.from,}
                  selected = {dateRange,}
                  onSelect = {setDateRange,}
                  numberOfMonths = {2,}

  onReset: () => void

}

};
          <div>;
            <p className='text - zion - slate - light text - sm mb - 2'>Date Range</p>;
            <Popover>;
              <PopoverTrigger as_child>;
                <Button;
                  variant='outline';
                  className='w - full justify - start text - left font - normal bg - zion - blue border - zion - blue - light text - white';
                >;
                  <Calendar className='mr - 2 h - 4 w - 4 text - zion - slate - light' />;
                  {date_range?.from ? (
                    date_range.to ? (
                      <>;
                        {format (date_range.from, 'LLL dd, y')} -{' '}
                        {format (date_range.to, 'LLL dd, y')}
                      </>) : (
                      format (date_range.from, 'LLL dd, y')                    )                      format (date_range.from, "LLL dd, y"))) : (
                    <span > Date range</span>)}
                </Button>;
              </PopoverTrigger>;
              <PopoverContent;
                className='w - auto p - 0 bg - zion - blue - dark border - zion - blue - light';
                align='start';
              >;
                <CalendarComponent;
                  initial_focus;
                  mode='range'                  default_month={date_range?.from}              <PopoverContent className="w - auto p - 0 bg - zion - blue - dark border - zion - blue - light" align="start">;
                <CalendarComponent;
                  initial_focus;
                  mode="range";
                  selected={date_range}
                  on_select={setDateRange}
                  numberOfMonths={2}
                  default_month = {date_range?.from, }
                  selected = {date_range, }
                  on_select = {setDateRange, }
                  numberOfMonths = {2, }
                />;
              </PopoverContent>;
            </Popover>;
          </div>;
        </div>;
        <div className='mt - 4 flex justify - end'>;
          <Button;
            variant='outline';
            on_click={on_reset}
            className='border - zion - blue - light text - zion - slate - light'          >;
            <RefreshCw className='mr - 2 h - 4 w - 4' /> Reset Filters          </Button>;
        </div>;
      </CardContent>;
    </Card>);
}
            <RefreshCw className="mr - 2 h - 4 w - 4" /> Reset Filters;
            on_click={on_reset}
            className="border - zion - blue - light text - zion - slate - light";
          >;
            <RefreshCw className="mr - 2 h - 4 w - 4" /> Reset Filters;
          </Button>;
        </div>;
      </CardContent>;
    </Card>);
}  );

