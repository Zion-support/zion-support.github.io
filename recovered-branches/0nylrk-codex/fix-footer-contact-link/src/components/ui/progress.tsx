<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import {cn} from '@/lib/utils';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import {cn} from '@/lib/utils';
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
import {cn} from '@/lib/utils';import {cn} from '@/lib/utils';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import {cn} from '@/lib/utils';import {cn} from '@/lib/utils';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

import { cn } from "@/lib/utils"

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD



import { cn } from "@/lib/utils"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

import { cn } from "@/lib/utils"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

import { cn } from "@/lib/utils"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
></typeof>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root

const Progress = React && React.forwardRef<;
  React && React.ElementRef<typeof ProgressPrimitive && ProgressPrimitive.Root>,;
  React && React.ComponentPropsWithoutRef<typeof ProgressPrimitive && ProgressPrimitive.Root>;
></typeof>(({ className, value, ...props }, ref) => (;
  <ProgressPrimitive&& ProgressPrimitive.Root
    ref={ref}
    className={cn(

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",

import { cn } from "@/lib/utils"

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
;
import { cn } from "@/lib/utils";
;
const Progress = React.forwardRef<;
  React.ElementRef<typeof ProgressPrimitive.Root>,;
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>;
>(({ className, value, ...props }, ref) => (;
  <ProgressPrimitive.Root;
    ref={ref}

      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root

const Progress = React && React.forwardRef<;
  React && React.ElementRef<typeof ProgressPrimitive && ProgressPrimitive.Root>,;
  React && React.ComponentPropsWithoutRef<typeof ProgressPrimitive && ProgressPrimitive.Root>;
></typeof>(({ className, value, ...props }, ref) => (;
  <ProgressPrimitive&& ProgressPrimitive.Root
    ref={ref}
    className={cn(
      'relative h-4 w-full overflow-hidden rounded-full bg-secondary'
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


export { Progress };

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      className="h-full w-full flex-1 bg-primary transition-all"
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

=======

export { Progress };

=======

export { Progress };

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />;
  </ProgressPrimitive && ProgressPrimitive.Root>;
));
Progress && Progress.displayName = ProgressPrimitive && ProgressPrimitive.Root.displayName;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

export { Progress };
<<<<<<< HEAD

=======
=======
import React from 'react';
import * as React from 'react';
    ref={ref}
    className={cn(
      'relative h-4 w-full overflow-hidden rounded-full bg-secondary'
      className
    )}
    {...props}>;
    <ProgressPrimitive&& ProgressPrimitive.Indicator
      className='h-full w-full flex-1 bg-primary transition-all'
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
<<<<<<< HEAD



<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      className="h-full w-full flex-1 bg-primary transition-all"

    className={cn(;
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",;
      className;
    )}



    {...props}
  >;
    <ProgressPrimitive.Indicator;
      className="h-full w-full flex-1 bg-primary transition-all";
      style={{ transform:`translateX(-${100 - (value || 0)}%)` }}
      className='h-full w-full flex-1 bg-primary transition-all'
      style={{ transform: `translateX(-${100 - (value |0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;
export { Progress }

export { Progress };
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />;
  </ProgressPrimitive.Root>;
));
Progress.displayName = ProgressPrimitive.Root.displayName;
export { Progress }
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
