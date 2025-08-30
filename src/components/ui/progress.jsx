<<<<<<< HEAD
import { cn } from '../../lib/utils';
=======
import React from 'react';
import { cn } from "../../lib/utils";
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

const Progress = React.forwardRef(({ className, value, max = 100, ...props }, ref) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div
      ref={ref}
      className = {
  cn('relative w-full overflow-hidden bg-gray-200 rounded-full h-2',
  className)






}
      {...props}

      <div
        className="h-full w-full flex-1 bg-blue-600 transition-all duration-300 ease-in-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  )});

Progress.displayName = 'Progress';

export { Progress </div>};