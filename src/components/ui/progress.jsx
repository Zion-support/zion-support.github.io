import React from 'react';
import { cn } from "../../lib/utils";
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
const Progress = React.forwardRef(({ className, value, max = 100, ...props }, ref) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  return (
    <div
      ref={ref}
<<<<<<< HEAD
      className={cn('relative w-full overflow-hidden bg-gray-200 rounded-full h-2', className)}
      {...props}
    >
=======
      className = {
  cn('relative w-full overflow-hidden bg-gray-200 rounded-full h-2',
  className)
}
      {...props}
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
      <div
        className="h-full w-full flex-1 bg-blue-600 transition-all duration-300 ease-in-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
<<<<<<< HEAD
  );
});

Progress.displayName = 'Progress';

export { Progress };
=======
  )});
Progress.displayName = 'Progress';
export { Progress </div>};
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
