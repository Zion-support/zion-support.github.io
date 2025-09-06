<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
'use client';
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

;

import * as React from 'react';
import * as CheckboxPrimitive from '@radix - ui / react - checkbox';
import {Check} from 'lucide-react';





<<<<<<< HEAD
=======
'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import {Check} from 'lucide-react';
import {cn} from '@/lib/utils';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

"use client"
"use client"
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import {cn} from '@/lib/utils';

"use client"
"use client"
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
></typeof>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root

<<<<<<< HEAD
<<<<<<< HEAD
=======
;
import * as React from 'react';
import * as CheckboxPrimitive from '@radix - ui / react - checkbox';
import {Check} from 'lucide-react';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
const Checkbox = React && React.forwardRef<;
  React && React.ElementRef<typeof CheckboxPrimitive && CheckboxPrimitive.Root>,;
  React && React.ComponentPropsWithoutRef<typeof CheckboxPrimitive && CheckboxPrimitive.Root>;
></typeof>(({ className, ...props }, ref) => (;
  <CheckboxPrimitive&& CheckboxPrimitive.Root
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",

<<<<<<< HEAD
Checkbox && Checkbox.displayName = CheckboxPrimitive && CheckboxPrimitive.Root.displayName;

export { Checkbox };

=======
=======

"use client";
;
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
;
import { cn } from "@/lib/utils";
;
const Checkbox = React.forwardRef<;
  React.ElementRef<typeof CheckboxPrimitive.Root>,;
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>;
>(({ className, ...props }, ref) => (;
  <CheckboxPrimitive.Root;
    ref={ref}
    className={cn(;
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",;
      className;
    )}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-3 w-3" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
export { Checkbox };
export { Checkbox }
;

import * as React from 'react';
import * as CheckboxPrimitive from '@radix - ui / react - checkbox';
import {Check} from 'lucide-react';
    ref={ref}
    className={cn(
      'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground'
      className
    )}
    {...props}>;
    <CheckboxPrimitive&& CheckboxPrimitive.Indicator
      className={cn('flex items-center justify-center text-current')}>;
      <Check className='h-3 w-3' />;
    </CheckboxPrimitive && CheckboxPrimitive.Indicator>;
  </CheckboxPrimitive && CheckboxPrimitive.Root>;
));
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
;
import {cn} from '@/lib / utils';
;
const Checkbox = React.forward_ref<;
  React.ElementRef < typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef < typeof CheckboxPrimitive.Root>;
></typeof>(({ class_name, ...props }, ref) => (
  <CheckboxPrimitive.Root;
    ref={ref}
    className={cn (
      'peer h - 4 w - 4 shrink - 0 rounded - sm border border - primary ring - offset - background focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring focus - visible:ring - offset - 2 disabled:cursor - not - allowed disabled:opacity - 50 data-[state = checked]:bg - primary data-[state = checked]:text - primary - foreground',
      class_name)}
    {...props}
  >;
    <CheckboxPrimitive.Indicator;
      className={cn ('flex items - center justify - center text - current')}
    >;
      <Check className='h - 3 w - 3' />;
    </CheckboxPrimitive.Indicator>;
  </CheckboxPrimitive.Root>));
Checkbox.display_name = CheckboxPrimitive.Root.display_name;
;
export { Checkbox }
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",

=======

      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground'
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-3 w-3" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>

))
Checkbox.displayName = CheckboxPrimitive.Root.displayName


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    {...props}
  >;
    <CheckboxPrimitive.Indicator;
      className={cn("flex items-center justify-center text-current")}
    >;
      <Check className="h-3 w-3" />;
    </CheckboxPrimitive.Indicator>;
  </CheckboxPrimitive.Root>;
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
;
export { Checkbox } "use client" const Checkbox = React.forwardRef< React.ElementRef<typeof CheckboxPrimitive.Root>;
React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> > ( ({
  className, ...props 
}, ref) => (<CheckboxPrimitive.Root) 
}{
  ...props 
}> <CheckboxPrimitive.Indicator > <Check className="h-3 w-3" /> </CheckboxPrimitive.Indicator> </CheckboxPrimitive.Root>) ) Checkbox.displayName = CheckboxPrimitive.Root.displayName export {
  Checkbox 
}
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
export { Checkbox }
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
;
export { Checkbox };
export { Checkbox }
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
