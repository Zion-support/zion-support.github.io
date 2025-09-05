<<<<<<< HEAD
import * as React from &quot;react&quot;
import * as LabelPrimitive from &quot;@radix-ui/react-label&quot;
import { cva, type VariantProps } from &quot;class-variance-authority&quot;

import { cn } from &quot;@/lib/utils&quot;

const labelVariants = cva(
<<<<<<< HEAD
  "text-sm font-medium leading-none peer-disabled: cursor-not-allowed peer-disabled:opacity-70"
=======
  &quot;text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />;
));
Label.displayName = LabelPrimitive.Root.displayName;
export { Label }
;