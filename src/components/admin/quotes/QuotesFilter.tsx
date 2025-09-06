
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
>>>>>>> interface QuotesFilterProps {
interface QuotesFilterProps {
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>   searchQuery: string;
  setSearchQuery: (value: string) => void;
  statusFilter: QuoteStatus | 'all';
  setStatusFilter: (value: QuoteStatus | 'all') => void;
  archiveFilter: 'active' | 'archived' | 'all';
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void;
  dateRange: DateRange | undefined;
  setDateRange: (range: DateRange | undefined) => void;
  onReset: () => void
}

}
}

>>>>>>> >>>>>>> 
                  selected={dateRange}
                  onSelect={setDateRange}
                  numberOfMonths={2}
                  defaultMonth = {dateRange?.from,}
                  selected = {dateRange,}
                  onSelect = {setDateRange,}
                  numberOfMonths = {2,}


  onReset: () => void


}

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 