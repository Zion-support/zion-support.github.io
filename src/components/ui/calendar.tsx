import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react - day - picker';
import { cn } from '@/lib / utils';
import { button_variants } from '@/components / ui / button';
export type CalendarProps = React.ComponentProps < typeof DayPicker>; export type CalendarProps = React.ComponentProps < typeof DayPicker>;
/**
 * Calendar - Function description
 */
function Calendar() {
        IconLeft: ({ ..._props }) => <ChevronLeft className='h - 4 w - 4' />,
        IconRight: ({ ..._props }) => <ChevronRight className='h - 4 w - 4' />,
      }}      {...props}
    />);
Calendar.display_name = 'Calendar';
export { Calendar }
  class_name, class_names,  showOutsideDays = true, ...props;
}: CalendarProps) {
}/>);
}";