<<<<<<< HEAD
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type, VariantProps } from "class-variance-authority";
=======
import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {cva, type, VariantProps} from "class-variance-authority"

import {cn} from "@/lib/utils"
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
import { cn } from "@/lib/utils";
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
=======
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label };
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
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
=======
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />;
));
Label.displayName = LabelPrimitive.Root.displayName;
export { Label }
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
