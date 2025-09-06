
import { DayPicker } from 'react-day-picker'
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
export type CalendarProps = React.ComponentProps<typeof DayPicker>; export type CalendarProps = React.ComponentProps<typeof DayPicker>
function Calendar({
  className
  classNames
  showOutsideDays = true
  ...props
}: CalendarProps) {
        IconLeft: ({ ..._props }) => <ChevronLeft className='h-4 w-4' />
        IconRight: ({ ..._props }) => <ChevronRight className='h-4 w-4' />
      }}      {...props}
    />
  )
Calendar.displayName = 'Calendar'
export { Calendar }
  className, classNames,  showOutsideDays = true, ...props
}: CalendarProps) {
<<<<<<< HEAD
}/>)
}"

=======
  class_name, class_names,  showOutsideDays = true, ...props;
}: CalendarProps) {
}/>);
}";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

}/>) ;
}";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import * as React from "react",
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DayPicker } from "react-day-picker",
import { cn } from "@/lib/utils",
import { buttonVariants } from "@/components/ui/button",
export type CalendarProps = React.ComponentProps<typeof DayPicker>,

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
