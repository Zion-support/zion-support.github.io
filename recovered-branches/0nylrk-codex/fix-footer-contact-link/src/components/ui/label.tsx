<<<<<<< HEAD
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type, VariantProps } from "class-variance-authority";
=======
import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

import { cn } from "@/lib/utils";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled: cursor-not-allowed peer-disabled:opacity-70"
);
const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>

  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
<<<<<<< HEAD
=======
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const labelVariants = cva(;
  "text-sm font-medium leading-none peer-disabled: cursor-not-allowed peer-disabled:opacity-70";
);
const Label = React.forwardRef<;
  React.ElementRef<typeof LabelPrimitive.Root>;
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &;
    VariantProps<typeof labelVariants>;
>(({ className, ...props }, ref) => (;
  <LabelPrimitive.Root;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;
<<<<<<< HEAD
export { Label }
=======
export { Label }
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
