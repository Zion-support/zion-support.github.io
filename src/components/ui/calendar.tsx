<<<<<<< HEAD
import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { DayPicker } from 'react-day-picker'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
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
}/>)
}"

=======
import * as React from "react",
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DayPicker } from "react-day-picker",
import { cn } from "@/lib/utils",
import { buttonVariants } from "@/components/ui/button",
export type CalendarProps = React.ComponentProps<typeof DayPicker>,

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
