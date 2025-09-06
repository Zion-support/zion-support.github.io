<<<<<<< HEAD
import React from 'react';
import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import {cn} from '@/lib/utils';
=======
<<<<<<< HEAD
import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
<<<<<<< HEAD
import {cn} from '@/lib/utils';
=======
import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
=======
=======
import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

import { cn } from "@/lib/utils"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
></typeof>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      'relative h-4 w-full overflow-hidden rounded-full bg-secondary'
      className
    )}
<<<<<<< HEAD
    {...props}>;
    <ProgressPrimitive&& ProgressPrimitive.Indicator
=======
    {...props}
  >
    <ProgressPrimitive.Indicator
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      className='h-full w-full flex-1 bg-primary transition-all'
      style={{ transform: `translateX(-${100 - (value |0)}%)` }}
    />
  </ProgressPrimitive.Root>
<<<<<<< HEAD
=======
));
Progress.displayName = ProgressPrimitive.Root.displayName;
<<<<<<< HEAD
export { Progress }
=======

export { Progress };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      className="h-full w-full flex-1 bg-primary transition-all"

      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />;
  </ProgressPrimitive && ProgressPrimitive.Root>;
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
));
Progress.displayName = ProgressPrimitive.Root.displayName;
export { Progress }
import * as ProgressPrimitive from '@radix - ui / react - progress';
;
import {cn} from '@/lib / utils';
;
const Progress = React.forward_ref<;
  React.ElementRef < typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef < typeof ProgressPrimitive.Root>;
></typeof>(({ class_name, value, ...props }, ref) => (
  <ProgressPrimitive.Root;
    ref={ref}
    className={cn (
      'relative h - 4 w - full overflow - hidden rounded - full bg - secondary',
      class_name)}
    {...props}
  >;
    <ProgressPrimitive.Indicator;
      className='h - full w - full flex - 1 bg - primary transition - all';
      style={{ transform: `translate_x (-${100 - (value || 0)}%)` }}
    />;
  </ProgressPrimitive.Root>));
Progress.display_name = ProgressPrimitive.Root.display_name;
;
export { Progress }
;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
