
<<<<<<< HEAD
import React from 'react',;
import { format } from 'date-fns',;
;
interface DateDividerProps {;
  date:Date;
}
;
export function DateDivider({ date } DateDividerProps) {;
  return (;
    <div className="flex items-center my-4">;
      <div className="flex-1 border-t border-zion-purple/20"></div>;
      <div className="px-3 text-xs text-zion-slate">;
        {format(date, 'MMM d, yyyy')}
      </div>;
      <div className="flex-1 border-t border-zion-purple/20"></div>;
    </div>;
  ),;
=======
import React from 'react',
import { format } from 'date-fns',
interface DateDividerProps {
  date: Date
}

export function DateDivider({ date }: DateDividerProps) {
  return (
    <div className=&quot;flex items-center my-4&quot;>
      <div className=&quot;flex-1 border-t border-zion-purple/20&quot;></div>
      <div className=&quot;px-3 text-xs text-zion-slate&quot;>
        {format(date, 'MMM d, yyyy')}      </div>
      <div className=&quot;flex-1 border-t border-zion-purple/20&quot;></div>
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
