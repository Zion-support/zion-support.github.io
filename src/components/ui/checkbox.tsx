

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
import React from 'react';
'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import {Check} from 'lucide-react';

import {cn} from '@/lib/utils';

const Checkbox = React && React.forwardRef<;
  React && React.ElementRef<typeof CheckboxPrimitive && CheckboxPrimitive.Root>,;
  React && React.ComponentPropsWithoutRef<typeof CheckboxPrimitive && CheckboxPrimitive.Root>;
></typeof>(({ className, ...props }, ref) => (;
  <CheckboxPrimitive&& CheckboxPrimitive.Root
    ref={ref}
    className={cn(

      className
    )}
<<<<<<< HEAD
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-3 w-3" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
=======
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
