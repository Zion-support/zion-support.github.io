
<<<<<<< HEAD
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
        {format(date, 'MMM d, yyyy')}
=======
import React from 'react';

interface DateDividerProps {_date: Date;}

export function DateDivider(_{_date}: DateDividerProps) {_return (
    <div className="flex items-center my-4">
      <div className="flex-1 border-t border-zion-purple/20"></div>
      <div className="px-3 text-xs text-zion-slate">
        {format(date, _'MMM d, _yyyy')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </div>
      <div className=&quot;flex-1 border-t border-zion-purple/20&quot;></div>
    </div>
  )
}
