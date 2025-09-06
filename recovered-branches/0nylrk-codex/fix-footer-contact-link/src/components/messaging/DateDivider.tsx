<<<<<<< HEAD
=======
import React from "react";
import { format } from "date-fns";
interface DateDividerProps {
<<<<<<< HEAD
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
    </div>;
  );
=======
  date: Date;
}
=======
interface DateDividerProps {;
  date: Date;
}

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
