<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
'use client';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import React from 'react';
'use client';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

;

import * as React from 'react';
import * as CheckboxPrimitive from '@radix - ui / react - checkbox';
import {Check} from 'lucide-react';





<<<<<<< HEAD
<<<<<<< HEAD
'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import {Check} from 'lucide-react';
import {cn} from '@/lib/utils';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

"use client"
"use client"
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

"use client"
=======
=======
"use client"


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
></typeof>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
<<<<<<< HEAD

;
import * as React from 'react';
import * as CheckboxPrimitive from '@radix - ui / react - checkbox';
import {Check} from 'lucide-react';
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const Checkbox = React && React.forwardRef<;
  React && React.ElementRef<typeof CheckboxPrimitive && CheckboxPrimitive.Root>,;
  React && React.ComponentPropsWithoutRef<typeof CheckboxPrimitive && CheckboxPrimitive.Root>;
></typeof>(({ className, ...props }, ref) => (;
  <CheckboxPrimitive&& CheckboxPrimitive.Root
<<<<<<< HEAD

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

      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",

<<<<<<< HEAD
const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    ref={ref}
    className={cn(
      'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground'
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD

))
Checkbox.displayName = CheckboxPrimitive.Root.displayName


<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
export { Checkbox }
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

<<<<<<< HEAD
export { Checkbox }
;
export { Checkbox };
export { Checkbox }
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
