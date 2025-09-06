import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

<<<<<<< HEAD:components/ui/Badge.tsx
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
=======
import { cva } from "class-variance-authority",
export const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus: outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
>>>>>>> pr-11992:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/badge-variants.ts
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground border-border",
      },
    },
    defaultVariants: {
<<<<<<< HEAD:components/ui/Badge.tsx
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
=======
      variant: "default"}}
),
>>>>>>> pr-11992:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/badge-variants.ts
