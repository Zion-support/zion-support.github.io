<<<<<<< HEAD
<<<<<<< HEAD
import * as React from "react",
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DayPicker } from "react-day-picker",
import { cn } from "@/lib/utils",
import { buttonVariants } from "@/components/ui/button",
export type CalendarProps = React.ComponentProps<typeof DayPicker>,
=======
import * as React from &quot;react&quot;;
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DayPicker } from &quot;react-day-picker&quot;;

import { cn } from &quot;@/lib/utils&quot;;
import { buttonVariants } from &quot;@/components/ui/button&quot;;
=======
import * as React from "react";

>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export type CalendarProps = React.ComponentProps<typeof DayPicker>;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

function Calendar(_{_className, _classNames, _showOutsideDays = true, _...props}: CalendarProps) {_return (
    <DayPicker
      showOutsideDays={showOutsideDays}
<<<<<<< HEAD
      className={cn(&quot;p-3&quot;, className)}
      classNames={{
        months: &quot;flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0&quot;,
        month: &quot;space-y-4&quot;,
        caption: &quot;flex justify-center pt-1 relative items-center&quot;,
        caption_label: &quot;text-sm font-medium&quot;,
        nav: &quot;space-x-1 flex items-center&quot;,
        nav_button: cn(
          buttonVariants({ variant: &quot;outline&quot; }),
          &quot;h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100&quot;
=======
      className={_cn("p-3", _className)}
      classNames={_{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0", _month: "space-y-4", _caption: "flex justify-center pt-1 relative items-center", _caption_label: "text-sm font-medium", _nav: "space-x-1 flex items-center", _nav_button: cn(
          buttonVariants({ variant: "outline"}),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        ),
        nav_button_previous: &quot;absolute left-1&quot;,
        nav_button_next: &quot;absolute right-1&quot;,
        table: &quot;w-full border-collapse space-y-1&quot;,
        head_row: &quot;flex&quot;,
        head_cell:
          &quot;text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]&quot;,
        row: &quot;flex w-full mt-2&quot;,
        cell: &quot;h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20&quot;,
        day: cn(
<<<<<<< HEAD
          buttonVariants({ variant: &quot;ghost&quot; }),
          &quot;h-9 w-9 p-0 font-normal aria-selected:opacity-100&quot;
=======
          buttonVariants({_variant: "ghost"}),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        ),
        day_range_end: &quot;day-range-end&quot;,
        day_selected:
          &quot;bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground&quot;,
        day_today: &quot;bg-accent text-accent-foreground&quot;,
        day_outside:
          &quot;day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30&quot;,
        day_disabled: &quot;text-muted-foreground opacity-50&quot;,
        day_range_middle:
          &quot;aria-selected:bg-accent aria-selected:text-accent-foreground&quot;,
        day_hidden: &quot;invisible&quot;,
        ...classNames}}
<<<<<<< HEAD
      components={{
        IconLeft: ({ ..._props }) => <ChevronLeft className=&quot;h-4 w-4&quot; />,
        IconRight: ({ ..._props }) => <ChevronRight className=&quot;h-4 w-4&quot; />}}
      {...props}
=======
      components={_{
        IconLeft: (_{ ..._props}) => <ChevronLeft className="h-4 w-4" />,
        IconRight: (_{_..._props}) => <ChevronRight className="h-4 w-4" />}}
      {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    />
  )
}
<<<<<<< HEAD
Calendar.displayName = "Calendar",
=======
Calendar.displayName = &quot;Calendar&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
export { Calendar },
=======
export {_Calendar};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
