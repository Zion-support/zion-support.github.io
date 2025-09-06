
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DateFields.tsx

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DateFields.tsx
import {;
  Popover,;
  PopoverContent,;
  PopoverTrigger,;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DateFields.tsx

=======


  Popover,
  PopoverContent,
  PopoverTrigger,;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DateFields.tsx
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { FormControl } from "@/components/ui/form";
import { cn } from "@/lib/utils";

<<<<<<< HEAD
=======

=======
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react',
import { format } from 'date-fns',
import { Label } from "@/components/ui/label",
import { Button } from "@/components/ui/button",
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",
import { Calendar } from "@/components/ui/calendar",
import { FormControl } from "@/components/ui/form",
import { cn } from "@/lib/utils",
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface DateFieldsProps {
  startDate: Date | undefined,
  setStartDate: (date: Date | undefined) => void,
  endDate: Date | undefined,
  setEndDate: (date: Date | undefined) => void
}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DateFields.tsx

export function DateFields({ startDate, setStartDate, endDate, setEndDate }: DateFieldsProps) {
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

export function DateFields({ startDate, setStartDate, endDate, setEndDate }: DateFieldsProps) {
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

<<<<<<< HEAD
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DateFields.tsx
export function DateFields(): any ({;
  startDate,;
  setStartDate,;
  endDate,;
  setEndDate,;
}: DateFieldsProps) {;
  return (
=======

<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DateFields.tsx
                  "w-full md:w-[240px] pl-3 text-left font-normal",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  "w-full md: w-[240px] pl-3 text-left font-normal"
                  "w-full md:w-[240px] pl-3 text-left font-normal",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DateFields.tsx
=======
<<<<<<< HEAD
              selected={startDate}
              onSelect={setStartDate}
              disabled={(date) => date > new Date()}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
              selected={startDate}
              onSelect={setStartDate}
              disabled={(date) => date > new Date()}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react',;
import { format } from 'date-fns',;
import { Label } from "@/components/ui/label",;
import { Button } from "@/components/ui/button",;
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",;
import { Calendar } from "@/components/ui/calendar",;
import { FormControl } from "@/components/ui/form",;
import { cn } from "@/lib/utils",;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DateFields.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DateFields.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
      <div>;
        <Label htmlFor="publishedDate">Published Date (Optional)</Label>;
        <Popover>;
          <PopoverTrigger asChild>;
            <FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD
              <Button
                variant={"outline"}
                className={cn(
                  "w-full md: w-[240px] pl-3 text-left font-normal",
                  !startDate && "text-muted-foreground",
                )}>;
                {startDate ? (;
                  format(startDate, "PPP");
                ) : (;
                  <span>Pick a date</span>;
                )}
=======
              <Button;
                variant={"outline"}
                className={cn(;
                  "w-full md:w-[240px] pl-3 text-left font-normal",;
=======
              <Button;
                variant={"outline"}
                className={cn(;
                  "w-full md:w-[240px] pl-3 text-left font-normal";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  !startDate && "text-muted-foreground";
                )}
              >;
                {startDate ? (;
                  format(startDate, "PPP");
<<<<<<< HEAD
                ) :(;
                  <span>Pick a date</span>;
                )}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              </Button>;
            </FormControl>;
          </PopoverTrigger>;
          <PopoverContent className="w-auto p-0" align="start">;
<<<<<<< HEAD
=======
                ) : (;
                  <span>Pick a date</span>;
                )}
              </Button>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <Calendar
              mode="single"
              selected={startDate}
              onSelect={setStartDate}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DateFields.tsx

              disabled={(date) =>;
                date > new Date();
              }


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
              disabled={(date) =>;
                date > new Date();
              }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======

                  "w-full md:w-[240px] pl-3 text-left font-normal",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  "w-full md: w-[240px] pl-3 text-left font-normal"

                  "w-full md:w-[240px] pl-3 text-left font-normal",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              disabled={(date) =>;
                date < new Date();
              }

========
              disabled={(date) => date > new Date()}
=======
            <Calendar;
              mode="single";
              selected={startDate}
              onSelect={setStartDate}
              disabled={(date) =>;
                date > new Date();
              }
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DateFields.tsx
              initialFocus;
            />;
          </PopoverContent>;
        </Popover>;
      </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DateFields.tsx

<<<<<<< HEAD
    </div>;

=======
========
<<<<<<< HEAD
=======
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      <div>;
        <Label htmlFor="expiryDate">Expiry Date (Optional)</Label>;
        <Popover>;
          <PopoverTrigger asChild>;
            <FormControl>;
<<<<<<< HEAD
              <Button
                variant={"outline"}
                className={cn(
                  "w-full md: w-[240px] pl-3 text-left font-normal",
                  !endDate && "text-muted-foreground",
                )}>;
                {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              </Button>;
            </FormControl>;
          </PopoverTrigger>;
          <PopoverContent className="w-auto p-0" align="start">;
<<<<<<< HEAD
            <Calendar
              mode="single"
              selected={endDate}
              onSelect={setEndDate}
              disabled={(date) => date < new Date()}
              initialFocus;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DateFields.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DateFields.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DateFields.tsx
            />;
          </PopoverContent>;
        </Popover>;
      </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DateFields.tsx


    </div>;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  );
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DateFields.tsx
    </div>);
}
=======
            <Calendar;
              mode="single";
              selected={endDate}
              onSelect={setEndDate}
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              disabled={(date) => date < new Date()}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              disabled={(date) =>;
                date < new Date();
              }
              initialFocus;
            />;
          </PopoverContent>;
        </Popover>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
    </div>;
  ),;}
 interface DateFieldsProps {
  startDate: Date | undefined;
setStartDate: (date: Date | undefined) => void;
endDate: Date | undefined;
setEndDate: (date: Date | undefined) => void 
}export function DateFields ({
  startDate, setStartDate, endDate, setEndDate 
}: DateFieldsProps) {
  return (<div className="grid grid-cols-1 md:grid-cols-2 gap-4" > publishedDate">Published Date (Optional) </Label> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Pick a date</span>) 
}</Button> </FormControl> </PopoverTrigger> <PopoverContent className=" w-auto p-0"align=" start"> <Calendar initialFocus /> </PopoverContent> </Popover> </div> <div> <Label htmlFor=" expiryDate">Expiry Date (Optional) </Label> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Pick a date</span>) 
}</Button> </FormControl> </PopoverTrigger> <PopoverContent className=" w-auto p-0"align=" start" > <Calendar initialFocus /> </PopoverContent> </Popover> </div> </div>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    </div>;
  );
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
