<<<<<<< HEAD
<<<<<<< HEAD
=======
'use client'
import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import {Check} from 'lucide-react'
import {cn} from '@/lib/utils'

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from 'lucide-react'

import { cn } from "@/lib/utils"

<<<<<<< HEAD
<<<<<<< HEAD


const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>
=======
const Checkbox = React.forwardRef<
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
></typeof>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD


      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",


      className
    )}
=======
      'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground'
    ref={ref}
    className={cn(
      'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground'
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
export { Checkbox };
export { Checkbox }
export { Checkbox }
;
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
export { Checkbox };
Checkbox.displayName = CheckboxPrimitive.Root.displayName
export { Checkbox }

export { Checkbox }
;

export { Checkbox }
;

Checkbox.displayName = CheckboxPrimitive.Root.displayName
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

export { Checkbox }
;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
