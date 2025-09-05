
import React from 'react',
import { format } from 'date-fns',
import { Label } from "@/components/ui/label",
import { Button } from "@/components/ui/button",
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",
import { Calendar } from "@/components/ui/calendar",
import { FormControl } from "@/components/ui/form",
import { cn } from "@/lib/utils",interface DateFieldsProps {
  startDate: Date | undefined,
  setStartDate: (date: Date | undefined) => void,
  endDate: Date | undefined,
  setEndDate: (date: Date | undefined) => void
}

export function DateFields({ startDate, setStartDate, endDate, setEndDate }: DateFieldsProps) {
  return (
    <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>

interface DateFieldsProps {_startDate: Date | undefined;
  setStartDate: (_date: Date | undefined) => void;
  endDate: Date | undefined;
  setEndDate: (_date: Date | undefined) => void;}

export function DateFields(_{_startDate, _setStartDate, _endDate, _setEndDate}: DateFieldsProps) {_return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Label htmlFor=&quot;publishedDate&quot;>Published Date (Optional)</Label>
        <Popover>
          <PopoverTrigger asChild>
            <FormControl>
              <Button
                variant={&quot;outline&quot;}
                className={cn(
                  &quot;w-full md:w-[240px] pl-3 text-left font-normal&quot;,
                  !startDate && &quot;text-muted-foreground&quot;
                )}
              >
                {startDate ? (
                  format(startDate, &quot;PPP&quot;)                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent className=&quot;w-auto p-0&quot; align=&quot;start&quot;>
            <Calendar
              mode=&quot;single&quot;
              selected={startDate}
              onSelect={setStartDate}
              disabled={(date) =>
                date > new Date()
              }              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <div>
        <Label htmlFor=&quot;expiryDate&quot;>Expiry Date (Optional)</Label>
        <Popover>
          <PopoverTrigger asChild>
            <FormControl>
              <Button
                variant={&quot;outline&quot;}
                className={cn(
                  &quot;w-full md:w-[240px] pl-3 text-left font-normal&quot;,
                  !endDate && &quot;text-muted-foreground&quot;
                )}
              >
                {endDate ? (
                  format(endDate, &quot;PPP&quot;)                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent className=&quot;w-auto p-0&quot; align=&quot;start&quot;>
            <Calendar
              mode=&quot;single&quot;
              selected={endDate}
              onSelect={setEndDate}
              disabled={(date) =>
                date < new Date()
              }              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
