import {cn} from '@/lib/utils';import {cn} from '@/lib/utils';
import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
></typeof>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root

const Switch = React && React.forwardRef<;
  React && React.ElementRef<typeof SwitchPrimitives && SwitchPrimitives.Root>,;
  React && React.ComponentPropsWithoutRef<typeof SwitchPrimitives && SwitchPrimitives.Root>;
></typeof>(({ className, ...props }, ref) => (;
  <SwitchPrimitives&& SwitchPrimitives.Root
import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import {cn} from '@/lib/utils';


const Switch = $2;
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className = $2;
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0'
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;
export { Switch }
