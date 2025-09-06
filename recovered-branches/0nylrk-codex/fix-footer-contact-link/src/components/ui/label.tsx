
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled: cursor-not-allowed peer-disabled:opacity-70"
);
const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>

  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
=======

import * as React from './react';
import * as LabelPrimitive from "@radix - ui / react - label";
import { cva, type, VariantProps  } from './class - variance - authority';
;
import { cn  } from '@/lib / utils';
const label_variants = cva (
  "text - sm font - medium leading - none peer - disabled: cursor - not - allowed peer - disabled:opacity - 70",
=======
  />));
Label.display_name = LabelPrimitive.Root.display_name;
;
export { Label }
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
