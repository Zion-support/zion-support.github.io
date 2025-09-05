
<<<<<<< HEAD
import React from 'react',
import { format } from 'date-fns',
import { Label } from "@/components/ui/label",
import { Button } from "@/components/ui/button",
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",
import { Calendar } from "@/components/ui/calendar",
import { FormControl } from "@/components/ui/form",
import { cn } from "@/lib/utils",
=======
import React from 'react';
<<<<<<< HEAD
import { format } from 'date-fns';
import { Label } from &quot;@/components/ui/label&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Popover, PopoverContent, PopoverTrigger } from &quot;@/components/ui/popover&quot;;
import { Calendar } from &quot;@/components/ui/calendar&quot;;
import { FormControl } from &quot;@/components/ui/form&quot;;
import { cn } from &quot;@/lib/utils&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface DateFieldsProps {
  startDate: Date | undefined,
  setStartDate: (date: Date | undefined) => void,
  endDate: Date | undefined,
  setEndDate: (date: Date | undefined) => void
}

export function DateFields({ startDate, setStartDate, endDate, setEndDate }: DateFieldsProps) {
  return (
    <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
=======

interface DateFieldsProps {_startDate: Date | undefined;
  setStartDate: (_date: Date | undefined) => void;
  endDate: Date | undefined;
  setEndDate: (_date: Date | undefined) => void;}

export function DateFields(_{_startDate, _setStartDate, _endDate, _setEndDate}: DateFieldsProps) {_return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <div>
        <Label htmlFor=&quot;publishedDate&quot;>Published Date (Optional)</Label>
        <Popover>
          <PopoverTrigger asChild>
            <FormControl>
              <Button
<<<<<<< HEAD
                variant={&quot;outline&quot;}
                className={cn(
                  &quot;w-full md:w-[240px] pl-3 text-left font-normal&quot;,
                  !startDate && &quot;text-muted-foreground&quot;
                )}
              >
                {startDate ? (
                  format(startDate, &quot;PPP&quot;)
=======
                variant={"outline"}
                className={_cn(
                  "w-full md:w-[240px] pl-3 text-left font-normal", _!startDate && "text-muted-foreground"
                )}
              >
                {_startDate ? (
                  format(startDate, _"PPP")
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent className=&quot;w-auto p-0&quot; align=&quot;start&quot;>
            <Calendar
<<<<<<< HEAD
              mode=&quot;single&quot;
              selected={startDate}
              onSelect={setStartDate}
              disabled={(date) =>
                date > new Date()
              }
=======
              mode="single"
              selected={_startDate}
              onSelect={_setStartDate}
              disabled={_(_date) =>
                date > new Date()}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              initialFocus
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
<<<<<<< HEAD
                variant={&quot;outline&quot;}
                className={cn(
                  &quot;w-full md:w-[240px] pl-3 text-left font-normal&quot;,
                  !endDate && &quot;text-muted-foreground&quot;
                )}
              >
                {endDate ? (
                  format(endDate, &quot;PPP&quot;)
=======
                variant={_"outline"}
                className={_cn(
                  "w-full md:w-[240px] pl-3 text-left font-normal", _!endDate && "text-muted-foreground"
                )}
              >
                {_endDate ? (
                  format(endDate, _"PPP")
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent className=&quot;w-auto p-0&quot; align=&quot;start&quot;>
            <Calendar
<<<<<<< HEAD
              mode=&quot;single&quot;
              selected={endDate}
              onSelect={setEndDate}
              disabled={(date) =>
                date < new Date()
              }
=======
              mode="single"
              selected={_endDate}
              onSelect={_setEndDate}
              disabled={_(_date) =>
                date < new Date()}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
