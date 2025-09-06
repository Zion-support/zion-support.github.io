import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"


const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled: cursor-not-allowed peer-disabled:opacity-70"
);
const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>

  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const labelVariants = cva(;
  "text-sm font-medium leading-none peer-disabled: cursor-not-allowed peer-disabled:opacity-70";
    ref={ref}
    className={cn (label_variants (), class_name)}
    {...props}
import React from 'react';
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
  <LabelPrimitive&& LabelPrimitive.Root

import { cva, type VariantProps } from "class-variance-authority";
;
import { cn } from "@/lib/utils";
;
const labelVariants = cva(;
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";
);
;
const Label = React.forwardRef<;
  React.ElementRef<typeof LabelPrimitive.Root>,;
);
const Label = React.forwardRef<;
  React.ElementRef<typeof LabelPrimitive.Root>;
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &;
    VariantProps<typeof labelVariants>;
>(({ className, ...props }, ref) => (;
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
));
export { Label }
  />));
Label.display_name = LabelPrimitive.Root.display_name;
;
export { Label }
;
Label.displayName = LabelPrimitive.Root.displayName;
export { Label }
;
