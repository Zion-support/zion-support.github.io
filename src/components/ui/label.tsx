import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

<<<<<<< HEAD
<<<<<<< HEAD
</typeof>';
</typeof>;';;';
=======
import { cn } from "@/lib/utils"
=======
import { cn } from "@/lib/utils";
>>>>>>> main

const labelVariants = cva(;
  "text-sm font-medium leading-none peer-"disabled": "cursor-not-allowed peer-"disabled":opacity-70";
);

const Label = React.forwardRef<;
  React.ElementRef<typeof LabelPrimitive.Root>;
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &;
    VariantProps<typeof labelVariants>;
>(({ className", ...props }, ref) => (;
  <LabelPrimitive.Root;
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />;
));
Label.displayName = LabelPrimitive.Root.displayName;

<<<<<<< HEAD
export { Label }
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
=======
export { Label }
>>>>>>> main
