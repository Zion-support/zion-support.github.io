<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

import React from 'react';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


import React from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import * as React from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {DayPicker} from "react-day-picker";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export type CalendarProps = React.ComponentProps<typeof DayPicker>;
=======
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import * as React from "react",
import { ChevronLeft, ChevronRight } from "lucide-react",
import { DayPicker } from "react-day-picker",
import { cn } from "@/lib/utils",
import { buttonVariants } from "@/components/ui/button",
export type CalendarProps = React.ComponentProps<typeof DayPicker>,
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker;
      showOutsideDays={showOutsideDays}
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
        IconRight: ({ ..._props }) => <ChevronRight className="h-4 w-4" />}}
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df




function Calendar({
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"

        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",

        IconLeft: ({ ..._props }) => <ChevronLeft className="h-4 w-4" />,;

        IconRight: ({ ..._props }) => <ChevronRight className="h-4 w-4" />}}
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
        IconLeft: ({ ..._props }) => <ChevronLeft className="h-4 w-4" />,
=======
        IconLeft: ({ ..._props }) => <ChevronLeft className="h-4 w-4" />,;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        IconRight: ({ ..._props }) => <ChevronRight className="h-4 w-4" />}}

        IconRight: ({ ..._props }) => <ChevronRight className="h-4 w-4" />}}


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {...props}
    />;
  );
}

<<<<<<< HEAD
export { Calendar };
=======
Calendar.displayName = "Calendar",

export { Calendar },
Calendar.displayName = "Calendar";
export { Calendar };

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
Calendar && Calendar.displayName = "Calendar";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======

        IconRight: ({ ..._props }) => <ChevronRight className="h-4 w-4" />}}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar";
export { Calendar }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

Calendar.displayName = "Calendar",

export { Calendar },
Calendar.displayName = "Calendar";
<<<<<<< HEAD
<<<<<<< HEAD
export { Calendar };
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

export { Calendar };
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
