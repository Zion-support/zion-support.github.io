import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

// Define HTML element types
interface HTMLElement {
  className: string;
  id: string;
  innerHTML: string;
  textContent: string | null;
  style: { [key: string]: string };
}

interface HTMLDivElement extends HTMLElement {
  tagName: 'DIV';
}


const badgeVariants = null;
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