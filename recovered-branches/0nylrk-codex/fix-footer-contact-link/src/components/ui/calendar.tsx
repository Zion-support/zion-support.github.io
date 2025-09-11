<<<<<<< HEAD
<<<<<<< HEAD

import React from 'react';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


import React from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import * as React from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {DayPicker} from "react-day-picker";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export type CalendarProps = React.ComponentProps<typeof DayPicker>;
import * as React from "react",
import { ChevronLeft, ChevronRight } from "lucide-react",
import { DayPicker } from "react-day-picker",
import { cn } from "@/lib/utils",
import { buttonVariants } from "@/components/ui/button",
export type CalendarProps = React.ComponentProps<typeof DayPicker>,


<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0"
        month: "space-y-4"
        caption: "flex justify-center pt-1 relative items-center"
        caption_label: "text-sm font-medium"
        nav: "space-x-1 flex items-center"
        nav_button: cn(
          buttonVariants({ variant: "outline" })
          "h-7 w-7 bg-transparent p-0 opacity-50 hover: opacity-100"
        )
        nav_button_previous: "absolute left-1"
        nav_button_next: "absolute right-1"
        table: "w-full border-collapse space-y-1"
        head_row: "flex"
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]"
        row: "flex w-full mt-2"
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
        day: cn(
          buttonVariants({ variant: "ghost" })
          "h-9 w-9 p-0 font-normal aria-selected: opacity-100"
        )
        day_range_end: "day-range-end"
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground"
        day_today: "bg-accent text-accent-foreground"
        day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30"
        day_disabled: "text-muted-foreground opacity-50"
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground"
        day_hidden: "invisible"
        ...classNames}}
      components={{
        IconLeft: ({ ..._props }) => <ChevronLeft className="h-4 w-4" />
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
<<<<<<< HEAD
=======


>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
function Calendar({
=======
export type CalendarProps = React && React.ComponentProps<typeof DayPicker>;

function Calendar(): any ({;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  className;
  classNames;
  showOutsideDays = true;
  ...props;
}: CalendarProps) {;
=======
import * as React from './react';
import { ChevronLeft, ChevronRight } from './lucide-react';
import { DayPicker } from './react - day - picker';
import { cn } from '@/lib / utils';
import { button_variants } from '@/components / ui / button';
export type CalendarProps = React.ComponentProps < typeof DayPicker>;
;
/**
 * Calendar - Function description
 */
function Calendar() {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return (
    <DayPicker;
      showOutsideDays={showOutsideDays}

=======

          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        IconLeft: ({ ..._props }) => <ChevronLeft className="h-4 w-4" />,;

        IconRight: ({ ..._props }) => <ChevronRight className="h-4 w-4" />}}
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames}}
      components={{
        IconLeft: ({ ..._props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ..._props }) => <ChevronRight className="h-4 w-4" />}}
<<<<<<< HEAD
<<<<<<< HEAD
import * as React from "react",;
import { ChevronLeft, ChevronRight } from "lucide-react",;
import { DayPicker } from "react-day-picker",;
import { cn } from "@/lib/utils",;
import { buttonVariants } from "@/components/ui/button",;
export type CalendarProps = React.ComponentProps<typeof DayPicker>,;
function Calendar({;
  className,;
  classNames,;
  showOutsideDays = true,;
  ...props;
}: CalendarProps) {;
  return (;
    <DayPicker;
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{;
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",;
        month: "space-y-4",;
        caption: "flex justify-center pt-1 relative items-center",;
        caption_label: "text-sm font-medium",;
        nav: "space-x-1 flex items-center",;
        nav_button: cn(;
          buttonVariants({ variant: "outline" }),;
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100";
        ),;
        nav_button_previous: "absolute left-1",;
        nav_button_next: "absolute right-1",;
        table: "w-full border-collapse space-y-1",;
        head_row: "flex",;
        head_cell:;
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",;
        row: "flex w-full mt-2",;
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",;
        day: cn(;
          buttonVariants({ variant: "ghost" }),;
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100";
        ),;
        day_range_end: "day-range-end",;
        day_selected:;
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",;
        day_today: "bg-accent text-accent-foreground",;
        day_outside:;
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",;
        day_disabled: "text-muted-foreground opacity-50",;
        day_range_middle:;
          "aria-selected:bg-accent aria-selected:text-accent-foreground",;
        day_hidden: "invisible",;
        ...classNames}}
      components={{;
        IconLeft: ({ ..._props }) => <ChevronLeft className="h-4 w-4" />,;




function Calendar({
export type CalendarProps = React && React.ComponentProps<typeof DayPicker>;
function Calendar(): any ({;
  className;
  classNames;
  showOutsideDays = true;
  ...props;
}: CalendarProps) {;
import * as React from './react';
import { ChevronLeft, ChevronRight } from './lucide-react';
import { DayPicker } from './react - day - picker';
import { cn } from '@/lib / utils';
import { button_variants } from '@/components / ui / button';
export type CalendarProps = React.ComponentProps < typeof DayPicker>;
;
/**
 * Calendar - Function description
 */
function Calendar() {
  return (
    <DayPicker;
      showOutsideDays={showOutsideDays}

          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"

        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",

        IconLeft: ({ ..._props }) => <ChevronLeft className="h-4 w-4" />,;

        IconRight: ({ ..._props }) => <ChevronRight className="h-4 w-4" />}}
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames}}
      components={{
        IconLeft: ({ ..._props }) => <ChevronLeft className="h-4 w-4" />,;
        IconRight: ({ ..._props }) => <ChevronRight className="h-4 w-4" />}}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        IconRight: ({ ..._props }) => <ChevronRight className="h-4 w-4" />}}


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {...props}
    />;
  );
}
<<<<<<< HEAD

Calendar && Calendar.displayName = "Calendar";


Calendar && Calendar.displayName = "Calendar";
      className={cn ("p - 3", class_name)}
      class_names={{
        months: "flex flex - col sm:flex - row space - y-4 sm:space - x-4 sm:space - y-0",
        month: "space - y-4",
        caption: "flex justify - center pt - 1 relative items - center",
        caption_label: "text - sm font - medium",
        nav: "space - x-1 flex items - center",
        nav_button: cn (
          button_variants ({ variant: "outline" }),
          "h - 7 w - 7 bg - transparent p - 0 opacity - 50 hover: opacity - 100"),
        nav_button_previous: "absolute left - 1",
        nav_button_next: "absolute right - 1",
        table: "w - full border - collapse space - y-1",
        head_row: "flex",
        head_cell: "text - muted - foreground rounded - md w - 9 font - normal text-[0.8rem]",
        row: "flex w - full mt - 2",
        cell: "h - 9 w - 9 text - center text - sm p - 0 relative [&:has ([aria - selected].day - range - end)]:rounded - r-md [&:has ([aria - selected].day - outside)]:bg - accent / 50 [&:has ([aria - selected])]:bg - accent first:[&:has ([aria - selected])]:rounded - l-md last:[&:has ([aria - selected])]:rounded - r-md focus - within:relative focus - within:z - 20",
        day: cn (
          button_variants ({ variant: "ghost" }),
          "h - 9 w - 9 p - 0 font - normal aria - selected: opacity - 100"),
        day_range_end: "day - range - end",
        day_selected: "bg - primary text - primary - foreground hover:bg - primary hover:text - primary - foreground focus:bg - primary focus:text - primary - foreground",
        day_today: "bg - accent text - accent - foreground",
        day_outside: "day - outside text - muted - foreground opacity - 50 aria - selected:bg - accent / 50 aria - selected:text - muted - foreground aria - selected:opacity - 30",
        day_disabled: "text - muted - foreground opacity - 50",
        day_range_middle: "aria - selected:bg - accent aria - selected:text - accent - foreground",
        day_hidden: "invisible",
        ...class_names}}
      components={{
        IconLeft: ({ ..._props }) => <ChevronLeft className="h - 4 w - 4" />,
        IconRight: ({ ..._props }) => <ChevronRight className="h - 4 w - 4" />}}
      {...props}
    />);
}
Calendar.display_name = "Calendar";
;
export { Calendar }
;

<<<<<<< HEAD
        IconRight: ({ ..._props }) => <ChevronRight className="h-4 w-4" />}}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar";
export { Calendar }

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
Calendar.displayName = "Calendar";
export { Calendar }

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
Calendar.displayName = "Calendar",

export { Calendar },
Calendar.displayName = "Calendar";
<<<<<<< HEAD
<<<<<<< HEAD
import * as React from "react",;
import { ChevronLeft, ChevronRight } from "lucide-react",;
import { DayPicker } from "react-day-picker",;
;
import { cn } from "@/lib/utils",;
import { buttonVariants } from "@/components/ui/button",;
;
export type CalendarProps = React.ComponentProps<typeof DayPicker>,;
;
function Calendar({;
  className,;
  classNames,;
  showOutsideDays = true,;
  ...props;
} CalendarProps) {;
  return (;
    <DayPicker;
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{;
        months:"flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",;
        month:"space-y-4",;
        caption:"flex justify-center pt-1 relative items-center",;
        caption_label:"text-sm font-medium",;
        nav:"space-x-1 flex items-center",;
        nav_button:cn(;
          buttonVariants({ variant:"outline" }),;
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100";
        ),;
        nav_button_previous:"absolute left-1",;
        nav_button_next:"absolute right-1",;
        table:"w-full border-collapse space-y-1",;
        head_row:"flex",;
        head_cell:;
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",;
        row:"flex w-full mt-2",;
        cell:"h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",;
        day:cn(;
          buttonVariants({ variant:"ghost" }),;
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100";
        ),;
        day_range_end:"day-range-end",;
        day_selected:;
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",;
        day_today:"bg-accent text-accent-foreground",;
        day_outside:;
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",;
        day_disabled:"text-muted-foreground opacity-50",;
        day_range_middle:;
          "aria-selected:bg-accent aria-selected:text-accent-foreground",;
        day_hidden:"invisible",;
        ...classNames}}
      components={{;
        IconLeft:({ ..._props }) => <ChevronLeft className="h-4 w-4" />,;
        IconRight:({ ..._props }) => <ChevronRight className="h-4 w-4" />}}
      {...props}
    />;
  ),;
}
Calendar.displayName = "Calendar",;
;
export { Calendar },; export type CalendarProps = React.ComponentProps<typeof DayPicker>;
  className, classNames, showOutsideDays = true, ...props 
}: CalendarProps) {
  return (<DayPicker showOutsideDays= {
  showOutsideDays 
});
nav button previous: "absolute left-1";
nav button next: "absolute right-1";
table: "w-full border-collapse space-y-1";
head row: "flex";
head cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]";
row: "flex w-full mt-2";
cell: "h-9 w-9 text-center text-sm p-0 relative [&:has ([aria-selected].day-range-end) ]:rounded-r-md [&:has ([aria-selected].day-outside) ]:bg-accent/50 [&:has ([aria-selected]) ]:bg-accent first:[&:has ([aria-selected]) ]:rounded-l-md last:[&:has ([aria-selected]) ]:rounded-r-md focus-within:relative focus-within:z-20";
day: cn ();
day range end: "day-range-end";
day selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground";
day today: "bg-accent text-accent-foreground";
day outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30";
day disabled: "text-muted-foreground opacity-50";
day range middle: "aria-selected:bg-accent aria-selected:text-accent-foreground";
day hidden: "invisible";
...classNames 
}
}/>) 
}
export { Calendar };
export { Calendar };
=======

export { Calendar };
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

export { Calendar };
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
