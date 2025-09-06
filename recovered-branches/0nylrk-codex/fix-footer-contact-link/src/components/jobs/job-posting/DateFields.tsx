

import {;
  Popover,;
  PopoverContent,;
  PopoverTrigger,;

<<<<<<< HEAD
=======

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  Popover,
  PopoverContent,
  PopoverTrigger,;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { FormControl } from "@/components/ui/form";
import { cn } from "@/lib/utils";




import React from "react";
import { format } from "date-fns";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Popover
  PopoverContent
  PopoverTrigger
  Popover,
  PopoverContent,
  PopoverTrigger,;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

import { FormControl } from "@/components/ui/form";
import { cn } from "@/lib/utils";
<<<<<<< HEAD


=======
=======

=======
interface DateFieldsProps {
  startDate: Date | undefined;
  setStartDate: (date: Date | undefined) => void;
  endDate: Date | undefined;
  setEndDate: (date: Date | undefined) => void
}
export function DateFields({
  startDate
  setStartDate
  endDate
  setEndDate
}: DateFieldsProps) {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import React from 'react',
import { format } from 'date-fns',
import { Label } from "@/components/ui/label",
import { Button } from "@/components/ui/button",
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",
import { Calendar } from "@/components/ui/calendar",
import { FormControl } from "@/components/ui/form",
import { cn } from "@/lib/utils",


<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
interface DateFieldsProps {
  startDate: Date | undefined,
  setStartDate: (date: Date | undefined) => void,
  endDate: Date | undefined,
  setEndDate: (date: Date | undefined) => void
}

export function DateFields({ startDate, setStartDate, endDate, setEndDate }: DateFieldsProps) {
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export function DateFields(): any ({;
  startDate,;
  setStartDate,;
  endDate,;
  setEndDate,;
}: DateFieldsProps) {;
  return (

<<<<<<< HEAD
                  "w-full md:w-[240px] pl-3 text-left font-normal",

=======
                  "w-full md: w-[240px] pl-3 text-left font-normal"
                  "w-full md:w-[240px] pl-3 text-left font-normal",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  !startDate && "text-muted-foreground"
                )}
              >
                {startDate ? (
                  format(startDate, "PPP")
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
<<<<<<< HEAD

=======
              selected={startDate}
              onSelect={setStartDate}
              disabled={(date) => date > new Date()}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React from 'react',;
import { format } from 'date-fns',;
import { Label } from "@/components/ui/label",;
import { Button } from "@/components/ui/button",;
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",;
import { Calendar } from "@/components/ui/calendar",;
import { FormControl } from "@/components/ui/form",;
import { cn } from "@/lib/utils",;
interface DateFieldsProps {;
  startDate: Date | undefined,;
  setStartDate: (date: Date | undefined) => void,;
  endDate: Date | undefined,;
  setEndDate: (date: Date | undefined) => void;
}
;
export function DateFields({ startDate, setStartDate, endDate, setEndDate }: DateFieldsProps) {;
  return (;
<<<<<<< HEAD

=======
;
interface DateFieldsProps {;
  startDate:Date | undefined,;
  setStartDate:(date:Date | undefined) => void,;
  endDate:Date | undefined,;
  setEndDate:(date:Date | undefined) => void;
}
;
export function DateFields({ startDate, setStartDate, endDate, setEndDate } DateFieldsProps) {;
  return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
      <div>;
        <Label htmlFor="publishedDate">Published Date (Optional)</Label>;
        <Popover>;
          <PopoverTrigger asChild>;
            <FormControl>;
<<<<<<< HEAD
              <Button
                variant={"outline"}
                className={cn(
                  "w-full md: w-[240px] pl-3 text-left font-normal",
                  !startDate && "text-muted-foreground",
                )}>;
=======
              <Button;
                variant={"outline"}
                className={cn(;
                  "w-full md:w-[240px] pl-3 text-left font-normal",;
              <Button;
                variant={"outline"}
                className={cn(;
                  "w-full md:w-[240px] pl-3 text-left font-normal";
                  !startDate && "text-muted-foreground";
                )}
              >;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                {startDate ? (;
                  format(startDate, "PPP");
                ) : (;
                  <span>Pick a date</span>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                )}
<<<<<<< HEAD
              </Button>;
            </FormControl>;
          </PopoverTrigger>;
          <PopoverContent className="w-auto p-0" align="start">;
=======
              </Button>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            <Calendar
              mode="single"
              selected={startDate}
              onSelect={setStartDate}
<<<<<<< HEAD

              disabled={(date) =>;
                date > new Date();
              }


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
              disabled={(date) =>;
                date > new Date();
              }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

<<<<<<< HEAD
=======

                  "w-full md:w-[240px] pl-3 text-left font-normal",

=======
                  "w-full md:w-[240px] pl-3 text-left font-normal",

                  "w-full md: w-[240px] pl-3 text-left font-normal"

                  "w-full md:w-[240px] pl-3 text-left font-normal",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  !endDate && "text-muted-foreground"
                )}
              >
                {endDate ? (
                  format(endDate, "PPP")
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

              disabled={(date) =>;
                date < new Date();
              }

<<<<<<< HEAD
=======
              disabled={(date) => date > new Date()}
            <Calendar;
              mode="single";
              selected={startDate}
              onSelect={setStartDate}
              disabled={(date) =>;
                date > new Date();
              }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              initialFocus;
            />;
          </PopoverContent>;
        </Popover>;
      </div>;
<<<<<<< HEAD

import React from './react';
import { format  } from './date - fns';
import { Label  } from '@/components / ui / label';
import { Button  } from '@/components / ui / button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components / ui / popover';
import { Calendar  } from '@/components / ui / calendar';
import { FormControl  } from '@/components / ui / form';
import { cn  } from '@/lib / utils';
interface DateFieldsProps {
  start_date: Date | undefined;
  setStartDate: (date: Date | undefined) => void;
  end_date: Date | undefined;
  setEndDate: (date: Date | undefined) => void;
}
export /**
 * DateFields - Function description
 */
function DateFields() {
  return (
    <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
      <div>;
        <Label html_for="published_date">Published Date (Optional)</Label>;
        <Popover>;
          <PopoverTrigger as_child>;
            <FormControl>;
              <Button;
                variant={"outline"}
                className={cn (
                  "w - full md: w-[240px] pl - 3 text - left font - normal",
                  !start_date && "text - muted - foreground",
                )}
              >;
                {start_date ? (
                  format (start_date, "PPP")) : (
                  <span > Pick a date</span>)}
              </Button>;
            </FormControl>;
          </PopoverTrigger>;
          <PopoverContent className="w - auto p - 0" align="start">;
            <Calendar;
              mode="single";
              selected={start_date}
              on_select={setStartDate}
              disabled={(date) => date > new Date ()}
              initial_focus;
=======
;
      <div>;
        <Label htmlFor="expiryDate">Expiry Date (Optional)</Label>;
        <Popover>;
          <PopoverTrigger asChild>;
            <FormControl>;
              <Button;
                variant={"outline"}
                className={cn(;
                  "w-full md:w-[240px] pl-3 text-left font-normal",;
                  !endDate && "text-muted-foreground";
                )}
              >;
                {endDate ? (;
                  format(endDate, "PPP");
                ) :(;
                  <span>Pick a date</span>;
                )}
              </Button>;
            </FormControl>;
          </PopoverTrigger>;
          <PopoverContent className="w-auto p-0" align="start">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            />;
          </PopoverContent>;
        </Popover>;
      </div>;
<<<<<<< HEAD
      <div>;
        <Label html_for="expiry_date">Expiry Date (Optional)</Label>;
        <Popover>;
          <PopoverTrigger as_child>;
            <FormControl>;
              <Button;
                variant={"outline"}
                className={cn (
                  "w - full md: w-[240px] pl - 3 text - left font - normal",
                  !end_date && "text - muted - foreground",
                )}
              >;
                {end_date ? format (end_date, "PPP") : <span > Pick a date</span>}
              </Button>;
            </FormControl>;
          </PopoverTrigger>;
          <PopoverContent className="w - auto p - 0" align="start">;
            <Calendar;
              mode="single";
              selected={end_date}
              on_select={setEndDate}
              disabled={(date) => date < new Date ()}
              initial_focus;

            />;
          </PopoverContent>;
        </Popover>;
      </div>;


    </div>;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  );
=======
    </div>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
=======
    </div>);
}
            <Calendar;
              mode="single";
              selected={endDate}
              onSelect={setEndDate}
              disabled={(date) => date < new Date()}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
              disabled={(date) =>;
                date < new Date();
              }
              initialFocus;
            />;
          </PopoverContent>;
        </Popover>;
      </div>;
    </div>;
  );
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
