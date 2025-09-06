  searchQuery;
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  setSearchQuery;
  status_filter;
  setStatusFilter;
  archive_filter;
  setArchiveFilter;
}) => {
=======
  setDateRange,;
  onReset;
}) => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
                <SelectItem value="all">All Statuses</SelectItem>;
                <SelectItem value="new">New</SelectItem>;
                <SelectItem value="in_review">In Review</SelectItem>;
                <SelectItem value="responded">Responded</SelectItem>;
                <SelectItem value="accepted">Accepted</SelectItem>;
                <SelectItem value="closed">Closed</SelectItem>;
              </SelectContent>;
            </Select>;
          </div>;
                <SelectItem value="active">Active Only</SelectItem>;
                <SelectItem value="archived">Archived Only</SelectItem>;
                <SelectItem value="all">All Quotes</SelectItem>;
              </SelectContent>;
            </Select>;
          </div>;
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal bg-zion-blue border-zion-blue-light text-white">;
                  <Calendar className="mr-2 h-4 w-4 text-zion-slate-light" />;
                  {dateRange?.from ? (;
                    dateRange && dateRange.to ? (;
                      <>;
                        {format(dateRange && dateRange.from, "LLL dd, y")} -{" "}
                        {format(dateRange && dateRange.to, "LLL dd, y")}
                      </>;
                    ) : (;
                      format(dateRange && dateRange.from, "LLL dd, y");
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
                  numberOfMonths={2}
                />;
              </PopoverContent>;
            </Popover>;
          </div>;
        </div>;
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
