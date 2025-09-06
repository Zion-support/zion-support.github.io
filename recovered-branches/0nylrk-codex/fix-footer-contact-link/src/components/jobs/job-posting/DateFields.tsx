

import {;
  Popover,;
  PopoverContent,;
  PopoverTrigger,;


  Popover,
  PopoverContent,
  PopoverTrigger,;

<<<<<<< HEAD
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

import { FormControl } from "@/components/ui/form";
import { cn } from "@/lib/utils";
<<<<<<< HEAD
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
=======


=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface DateFieldsProps {
  startDate: Date | undefined,
  setStartDate: (date: Date | undefined) => void,
  endDate: Date | undefined,
  setEndDate: (date: Date | undefined) => void
}

export function DateFields({ startDate, setStartDate, endDate, setEndDate }: DateFieldsProps) {
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export function DateFields(): any ({;
  startDate,;
  setStartDate,;
  endDate,;
  setEndDate,;
}: DateFieldsProps) {;
  return (

                  "w-full md: w-[240px] pl-3 text-left font-normal"
                  "w-full md:w-[240px] pl-3 text-left font-normal",
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
              selected={startDate}
              onSelect={setStartDate}
              disabled={(date) => date > new Date()}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
      <div>;
        <Label htmlFor="publishedDate">Published Date (Optional)</Label>;
        <Popover>;
          <PopoverTrigger asChild>;
            <FormControl>;
<<<<<<< HEAD
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
=======
              <Button
                variant={"outline"}
                className={cn(
                  "w-full md: w-[240px] pl-3 text-left font-normal",
                  !startDate && "text-muted-foreground",
                )}>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {startDate ? (;
                  format(startDate, "PPP");
                ) : (;
                  <span>Pick a date</span>;
<<<<<<< HEAD
                )}
              </Button>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                )}
              </Button>;
            </FormControl>;
          </PopoverTrigger>;
          <PopoverContent className="w-auto p-0" align="start">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <Calendar
              mode="single"
              selected={startDate}
              onSelect={setStartDate}
<<<<<<< HEAD
              disabled={(date) =>;
                date > new Date();
              }
=======

              disabled={(date) =>;
                date > new Date();
              }


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
                  "w-full md:w-[240px] pl-3 text-left font-normal",

                  "w-full md: w-[240px] pl-3 text-left font-normal"

                  "w-full md:w-[240px] pl-3 text-left font-normal",
=======
=======

                  "w-full md:w-[240px] pl-3 text-left font-normal",

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

<<<<<<< HEAD
              disabled={(date) =>;
                date < new Date();
              }

              disabled={(date) => date > new Date()}
            <Calendar;
              mode="single";
              selected={startDate}
              onSelect={setStartDate}
              disabled={(date) =>;
                date > new Date();
              }
              initialFocus;
            />;
          </PopoverContent>;
        </Popover>;
      </div>;
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
            />;
          </PopoverContent>;
        </Popover>;
      </div>;
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
=======

=======
              disabled={(date) =>;
                date < new Date();
              }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              initialFocus;
            />;
          </PopoverContent>;
        </Popover>;
      </div>;
<<<<<<< HEAD
    </div>;
  );
}
=======

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
