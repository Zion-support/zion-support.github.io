<<<<<<< HEAD
import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
<<<<<<< HEAD
import { DayPicker } from "react-day-picker",
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
export type CalendarProps = any;
=======
import { DayPicker } from 'react-day-picker'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
export type CalendarProps = React.ComponentProps<typeof DayPicker>; export type CalendarProps = React.ComponentProps<typeof DayPicker>
=======
import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
function Calendar({
  className
  classNames
  showOutsideDays = true
  ...props
}: CalendarProps) {
<<<<<<< HEAD
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
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======

        IconLeft: ({ ..._props }) => <ChevronLeft className='h-4 w-4' />,
        IconRight: ({ ..._props }) => <ChevronRight className='h-4 w-4' />,
      }}
      {...props}
    />
  );

Calendar.displayName = 'Calendar';

export { Calendar };
  className, classNames,  showOutsideDays = true, ...props ;
}: CalendarProps) {;

}/>) ;
}"
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
