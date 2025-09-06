<<<<<<< HEAD
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
import React from 'react';
import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export type CalendarProps = React && React.ComponentProps<typeof DayPicker>;export type CalendarProps = React && React.ComponentProps<typeof DayPicker>;

function Calendar(): any ({;
  className,;
  classNames,;
  showOutsideDays = true,;
  ...props;
}: CalendarProps) {;

        IconLeft: ({ ..._props }) => <ChevronLeft className='h-4 w-4' />,;
        IconRight: ({ ..._props }) => <ChevronRight className='h-4 w-4' />,;
      }}      {...props}
    />;
  );

Calendar && Calendar.displayName = 'Calendar';

export { Calendar };
  className, classNames,  showOutsideDays = true, ...props ;
}: CalendarProps) {;

}/>) ;
}"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
