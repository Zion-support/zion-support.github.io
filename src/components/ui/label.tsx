<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
<<<<<<< HEAD

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
=======
=======
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
<<<<<<< HEAD
  className?: string;
}

export const Label: React.FC<LabelProps> = ({ children, className = '', ...props }) => {
  return (
    <label
      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
=======
}

export function Label({ children, className = '', ...props }: LabelProps) {
  return (
    <label
      className={`text-sm font-medium text-zion-slate-light ${className}`}
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
      {...props}
    >
      {children}
    </label>
  );
<<<<<<< HEAD
};
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
=======
}
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
=======

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
