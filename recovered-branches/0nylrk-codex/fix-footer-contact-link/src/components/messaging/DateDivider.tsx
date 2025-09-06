<<<<<<< HEAD
=======
import React from "react";
import { format } from "date-fns";
interface DateDividerProps {
  date: Date;
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

import React from 'react';
import { format } from 'date-fns';
<<<<<<< HEAD
interface DateDividerProps {
  date: Date;
}
export function DateDivider({ date }: DateDividerProps) {
  return (
    <div className="flex items-center my-4">
      <div className="flex-1 border-t border-zion-purple/20"></div>
      <div className="px-3 text-xs text-zion-slate">
        {format(date, "MMM d, yyyy")}
      </div>
      <div className="flex-1 border-t border-zion-purple/20"></div>
    </div>
  );
}
=======
interface DateDividerProps {;
  date: Date;
}

}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
