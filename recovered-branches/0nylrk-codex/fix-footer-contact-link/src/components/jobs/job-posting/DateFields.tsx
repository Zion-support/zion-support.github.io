import React from "react";
import { format } from "date-fns";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import {;
  Popover,;
  PopoverContent,;
  PopoverTrigger,;

<<<<<<< HEAD


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  Popover,
  PopoverContent,
  PopoverTrigger,;

} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
<<<<<<< HEAD
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
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

import { FormControl } from "@/components/ui/form";
import { cn } from "@/lib/utils";


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




import React from 'react',
import { format } from 'date-fns',
import { Label } from "@/components/ui/label",
import { Button } from "@/components/ui/button",
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",
import { Calendar } from "@/components/ui/calendar",
import { FormControl } from "@/components/ui/form",
import { cn } from "@/lib/utils",



interface DateFieldsProps {
=======

import { FormControl } from "@/components/ui/form";
import { cn } from "@/lib/utils";interface DateFieldsProps {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  startDate: Date | undefined,
  setStartDate: (date: Date | undefined) => void,
  endDate: Date | undefined,
  setEndDate: (date: Date | undefined) => void
<<<<<<< HEAD
}

export function DateFields({ startDate, setStartDate, endDate, setEndDate }: DateFieldsProps) {
  return (
=======
}  return (
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Label htmlFor="publishedDate">Published Date (Optional)</Label>
        <Popover>
          <PopoverTrigger asChild>
            <FormControl>
              <Button
                variant={"outline"}
<<<<<<< HEAD
                className={cn(


export function DateFields(): any ({;
  startDate,;
  setStartDate,;
  endDate,;
  setEndDate,;
}: DateFieldsProps) {;
  return (

                  "w-full md:w-[240px] pl-3 text-left font-normal",

                  !startDate && "text-muted-foreground"
                )}
=======
                className={cn(                )}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

import React from 'react',;
=======
              selected={startDate}
              onSelect={setStartDate}import React from 'react',;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { format } from 'date-fns',;
import { Label } from "@/components/ui/label",;
import { Button } from "@/components/ui/button",;
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",;
import { Calendar } from "@/components/ui/calendar",;
import { FormControl } from "@/components/ui/form",;
import { cn } from "@/lib/utils",;
              selected={startDate}
              onSelect={setStartDate}
interface DateFieldsProps {;
  startDate: Date | undefined;
  setStartDate: (date: Date | undefined) => void;
  endDate: Date | undefined;
  setEndDate: (date: Date | undefined) => void
}
;
export function DateFields({ startDate, setStartDate, endDate, setEndDate }: DateFieldsProps) {;
  return (;
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
      <div>;
        <Label htmlFor="publishedDate">Published Date (Optional)</Label>;
        <Popover>;
          <PopoverTrigger asChild>;
            <FormControl>;
              <Button
                variant={"outline"}
                className={cn(
                  "w-full md: w-[240px] pl-3 text-left font-normal",
                  !startDate && "text-muted-foreground",
<<<<<<< HEAD
                )}>;
                {startDate ? (;
                  format(startDate, "PPP");
                ) : (;
                  <span>Pick a date</span>;
                )}
              </Button>;
            </FormControl>;
          </PopoverTrigger>;
          <PopoverContent className="w-auto p-0" align="start">;
            <Calendar
              mode="single"
              selected={startDate}
              onSelect={setStartDate}

              disabled={(date) =>;
                date > new Date();
              }


              disabled={(date) =>;
                date > new Date();
              }
              initialFocus
=======
                )}>;                {startDate ? (;
                  format(startDate, "PPP");
                ) : (;
                  <span>Pick a date</span>;
                )}              initialFocus
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
                className={cn(

                  !endDate && "text-muted-foreground"
=======
                className={cn(                  !endDate && "text-muted-foreground"
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
              disabled={(date) => date > new Date()}
                {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}
              </Button>;
            </FormControl>;
          </PopoverTrigger>;
          <PopoverContent className="w-auto p-0" align="start">;
            <Calendar
              mode="single"
              selected={endDate}
              onSelect={setEndDate}
              disabled={(date) =>;
                date < new Date();
              }

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
            />;
          </PopoverContent>;
        </Popover>;
      </div>;
=======
  );
    </div>);            />;
          </PopoverContent>;
        </Popover>;
      </div>;
  );
    </div>);
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
          <PopoverContent className="w - auto p - 0" align="start">;
=======
          <PopoverContent className="w - auto p-0" align="start">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
}
=======
}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
