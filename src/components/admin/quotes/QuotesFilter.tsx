import React from "react";
import type {_DateRange} from "react-day-picker";
import type {_QuoteStatus} from "@/types/quotes";

interface QuotesFilterProps {_searchQuery: string;
  setSearchQuery: (_value: string) => void;
  statusFilter: QuoteStatus | 'all';
  setStatusFilter: (_value: QuoteStatus | 'all') => void;
  archiveFilter: 'active' | 'archived' | 'all';
  setArchiveFilter: (_value: 'active' | 'archived' | 'all') => void;
  dateRange: DateRange | undefined;
  setDateRange: (_range: DateRange | undefined) => void;
  onReset: () => void;}

export const QuotesFilter: React.FC<QuotesFilterProps> = (_{_searchQuery, _setSearchQuery, _statusFilter, _setStatusFilter, _archiveFilter, _setArchiveFilter, _dateRange, _setDateRange, _onReset}) => {_return (_<Card className="mb-6 bg-zion-blue-dark border-zion-blue-light">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div className="relative">
            <Input
              placeholder="Search quotes..."
              className="pl-10 bg-zion-blue border-zion-blue-light text-white"
              value={searchQuery}
              onChange={_(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div>
            <p className="text-zion-slate-light text-sm mb-2">Status</p>
            <Select value={_statusFilter} onValueChange={_(_value: unknown) => setStatusFilter(value)}>
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
            <Select value={_archiveFilter} onValueChange={_(_value: unknown) => setArchiveFilter(value)}>
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
                  {_dateRange?.from ? (
                    dateRange.to ? (
                      <>
                        {format(dateRange.from, _"LLL dd, _y")} -{_" "}
                        {_format(dateRange.to, _"LLL dd, _y")}
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
                  defaultMonth={_dateRange?.from}
                  selected={_dateRange}
                  onSelect={_setDateRange}
                  numberOfMonths={_2}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        
        <div className="mt-4 flex justify-end">
          <Button 
            variant="outline" 
            onClick={_onReset}
            className="border-zion-blue-light text-zion-slate-light"
          >
            <RefreshCw className="mr-2 h-4 w-4" /> Reset Filters
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};