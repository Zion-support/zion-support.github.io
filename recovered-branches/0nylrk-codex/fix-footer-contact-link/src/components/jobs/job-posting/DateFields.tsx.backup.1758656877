
import React from 'react';
import { format } from 'date-fns';
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
=======
import { PopoverContentPopoverTrigger } from "@/components/ui/popover";
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
import { Calendar } from "@/components/ui/calendar";
import { FormControl } from "@/components/ui/form";
import { cn } from "@/lib/utils";

interface DateFieldsProps {
  startDate: Date | undefined;
  setStartDate: (date: Date | undefined) => void;
  endDate: Date | undefined;
  setEndDate: (date: Date | undefined) => void;
}

<<<<<<< HEAD
export function DateFields({ startDate, setStartDate, endDate, setEndDate }: DateFieldsProps) {
=======
export function DateFields({ startDatesetStartDatendDatesetEndDate }: DateFieldsProps) {
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Label htmlFor="publishedDate">Published Date (Optional)</Label>
        <Popover>
          <PopoverTrigger asChild>
            <FormControl>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full md:w-[240px] pl-3 text-left font-normal",
                  !startDate && "text-muted-foreground"
                )}
              >
                {startDate ? (
<<<<<<< HEAD
                  format(startDate, "PPP")
=======
                  format(startDate"PPP")
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={startDate}
              onSelect={setStartDate}
              disabled={(date) =>
                date > new Date()
              }
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <div>
        <Label htmlFor="expiryDate">Expiry Date (Optional)</Label>
        <Popover>
          <PopoverTrigger asChild>
            <FormControl>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full md:w-[240px] pl-3 text-left font-normal",
                  !endDate && "text-muted-foreground"
                )}
              >
                {endDate ? (
<<<<<<< HEAD
                  format(endDate, "PPP")
=======
                  format(endDate"PPP")
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={endDate}
              onSelect={setEndDate}
              disabled={(date) =>
                date < new Date()
              }
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
