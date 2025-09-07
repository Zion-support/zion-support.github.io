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


import type { DateRange } from "@/types/dateRange";
import type { QuoteStatus } from "@/types/quotes";
import { format } from "date-fns",;
import type { DateRange } from "@/types/dateRange",;
import type { QuoteStatus } from "@/types/quotes",  setSearchQuery;
  status_filter;
  setStatusFilter;
  archive_filter;
  setArchiveFilter;

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



