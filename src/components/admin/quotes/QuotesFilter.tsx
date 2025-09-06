import { Card, CardContent } from "@/components/ui/card",
import { Input } from "@/components/ui/input",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",
import { Button } from "@/components/ui/button",
import { Calendar as CalendarComponent } from "@/components/ui/calendar",
import { format } from "date-fns";
import type { DateRange } from "react-day-picker";
import type { QuoteStatus } from "@/types/quotes";
import {
  Select
  SelectContent
  SelectItem
  SelectTrigger
  SelectValue
} from '@/components/ui/select'
  Popover
  PopoverContent
  PopoverTrigger
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Calendar as CalendarComponent } from '@/components/ui/calendar'
import { format } from 'date-fns'
import type { DateRange } from 'react-day-picker'
import type { QuoteStatus } from '@/types/quotes'
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
export const QuotesFilter: React.FC<QuotesFilterProps> = ({
                      format(dateRange.from, 'LLL dd, y')
                    )
                  ) : (
                    <span>Date range</span>
                  )}
                </Button>
              </PopoverTrigger>
<PopoverContent
                className='w-auto p-0 bg-zion-blue-dark border-zion-blue-light'
                align='start'
              >
                <CalendarComponent
                  initialFocus
                  mode='range'
                  defaultMonth={dateRange?.from}
                  selected={dateRange}
                  onSelect={setDateRange}
                  numberOfMonths={2}
                  defaultMonth = {dateRange?.from,}
                  selected = {dateRange,}
                  onSelect = {setDateRange,}
                  numberOfMonths = {2,}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
<div className='mt-4 flex justify-end'>
          <Button
            variant='outline'
            onClick={onReset}
            className='border-zion-blue-light text-zion-slate-light'
          >
            <RefreshCw className='mr-2 h-4 w-4' /> Reset Filters
          </Button>
        </div>
      </CardContent>
    </Card>
);
};
