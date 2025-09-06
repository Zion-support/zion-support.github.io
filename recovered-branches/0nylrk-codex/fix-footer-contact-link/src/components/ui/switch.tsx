<<<<<<< HEAD
import React from 'react';
import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import {cn} from '@/lib/utils';
=======
<<<<<<< HEAD
import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
<<<<<<< HEAD
import {cn} from '@/lib/utils';
=======
import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
=======
=======
import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

import { cn } from "@/lib/utils"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
></typeof>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input'
      className
    )}
    {...props}
    ref={ref}>;
    <SwitchPrimitives&& SwitchPrimitives.Thumb
      className={cn(
<<<<<<< HEAD
        'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0'
=======


        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      )}
    />;
  </SwitchPrimitives && SwitchPrimitives.Root>;
));
Switch.displayName = SwitchPrimitives.Root.displayName;
<<<<<<< HEAD
export { Switch }
=======
<<<<<<< HEAD
<<<<<<< HEAD
export { Switch }
=======

export { Switch }
;

=======

export { Switch };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import * as SwitchPrimitives from '@radix - ui / react - switch';
;
import {cn} from '@/lib / utils';
;
const Switch = React.forward_ref<;
  React.ElementRef < typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef < typeof SwitchPrimitives.Root>;
></typeof>(({ class_name, ...props }, ref) => (
  <SwitchPrimitives.Root;
    className={cn (
      'peer inline - flex h - 6 w - 11 shrink - 0 cursor - pointer items - center rounded - full border - 2 border - transparent transition - colors focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring focus - visible:ring - offset - 2 focus - visible:ring - offset - background disabled:cursor - not - allowed disabled:opacity - 50 data-[state = checked]:bg - primary data-[state = unchecked]:bg - input',
      class_name)}
    {...props}
    ref={ref}
  >;
    <SwitchPrimitives.Thumb;
      className={cn (
        'pointer - events - none block h - 5 w - 5 rounded - full bg - background shadow - lg ring - 0 transition - transform data-[state = checked]:translate - x-5 data-[state = unchecked]:translate - x-0')}
    />;
  </SwitchPrimitives.Root>));
Switch.display_name = SwitchPrimitives.Root.display_name;
;
export { Switch }
;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
