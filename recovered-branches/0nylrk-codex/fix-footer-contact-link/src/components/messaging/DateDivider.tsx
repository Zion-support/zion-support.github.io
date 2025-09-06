

import React from "react";
import { format } from "date-fns";
interface DateDividerProps {
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  date: Date;
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

import React from 'react';
import { format } from 'date-fns';

=======
  date: Date;

}
<<<<<<< HEAD

=======
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
<<<<<<< HEAD
=======
=======
  date: Date;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
import React from "react";
import { format } from "date-fns";
interface DateDividerProps {;
  date: Date;
}

<<<<<<< HEAD

import React from './react';
import { format  } from './date - fns';
interface DateDividerProps {
  date: Date;
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
}
export /**
 * DateDivider - Function description
 */
function DateDivider() {
  return (
    <div className="flex items - center my - 4">;
      <div className="flex - 1 border - t border - zion - purple / 20"></div>;
      <div className="px - 3 text - xs text - zion - slate">;
        {format (date, "MMM d, yyyy")}
      </div>;
      <div className="flex - 1 border - t border - zion - purple / 20"></div>;
    </div>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}