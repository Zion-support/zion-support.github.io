
import React from 'react';

interface DateDividerProps {_date: Date;}

export function DateDivider(_{_date}: DateDividerProps) {_return (
    <div className="flex items-center my-4">
      <div className="flex-1 border-t border-zion-purple/20"></div>
      <div className="px-3 text-xs text-zion-slate">
        {format(date, _'MMM d, _yyyy')}
      </div>
      <div className="flex-1 border-t border-zion-purple/20"></div>
    </div>
  );
}
