
import React from 'react';

interface DateFieldsProps {_startDate: Date | undefined;
  setStartDate: (_date: Date | undefined) => void;
  endDate: Date | undefined;
  setEndDate: (_date: Date | undefined) => void;}

export function DateFields(_{_startDate, _setStartDate, _endDate, _setEndDate}: DateFieldsProps) {_return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Label htmlFor="publishedDate">Published Date (Optional)</Label>
        <Popover>
          <PopoverTrigger asChild>
            <FormControl>
              <Button
                variant={"outline"}
                className={_cn(
                  "w-full md:w-[240px] pl-3 text-left font-normal", _!startDate && "text-muted-foreground"
                )}
              >
                {_startDate ? (
                  format(startDate, _"PPP")
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={_startDate}
              onSelect={_setStartDate}
              disabled={_(_date) =>
                date > new Date()}
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
                variant={_"outline"}
                className={_cn(
                  "w-full md:w-[240px] pl-3 text-left font-normal", _!endDate && "text-muted-foreground"
                )}
              >
                {_endDate ? (
                  format(endDate, _"PPP")
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={_endDate}
              onSelect={_setEndDate}
              disabled={_(_date) =>
                date < new Date()}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
