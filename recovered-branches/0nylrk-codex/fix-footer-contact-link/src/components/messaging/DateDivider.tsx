import React from "react";
import { format } from "date-fns";
interface DateDividerProps {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
  date: Date;
}

import React from 'react';
import { format } from 'date-fns';
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
  date: Date;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  date: Date;
=======


import React from 'react';
import { format } from 'date-fns';

=======
  date: Date;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
}
interface DateDividerProps {;
  date: Date;
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

import React from './react';
import { format  } from './date - fns';
interface DateDividerProps {
  date: Date;
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
}
;
