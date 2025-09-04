
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}  />
  );

import React from "react""const badgeVariants = cva(""  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus: outlin e-none focus: rin g-2 focus: rin g-ring focus: rin g-offset-2",
  {
    variants: {,"      variant: {,""default: "border-transparent bg-primary text-primary-foreground hover: b g-primary/80",""        secondary: "border-transparent bg-secondary text-secondary-foreground hover: b g-secondary/80",""        destructive: "border-transparent bg-destructive text-destructive-foreground hover: b g-destructive/80",""        outline: "text-foreground border-border",
      },"    defaultVariants: {,""variant: "default",
    },
  }

}
export interface BadgeProps,
extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}
"