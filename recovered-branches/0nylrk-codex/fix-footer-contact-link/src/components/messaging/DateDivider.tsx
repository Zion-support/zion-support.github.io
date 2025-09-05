
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
}
