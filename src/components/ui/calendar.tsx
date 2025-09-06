<<<<<<< HEAD
import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  
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
=======

<<<<<<< HEAD
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
<<<<<<< HEAD
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
