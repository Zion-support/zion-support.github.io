<<<<<<< HEAD

import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "secondary" | "destructive" | "outline";
=======
import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "destructive" | "outline";
  className?: string;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a1cb
}

const Badge: React.FC<BadgeProps> = ({
  children,
  className = "",
  variant = "default"
}) => {
  const baseClasses = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors";
<<<<<<< HEAD
  
  const variantClasses = {
    default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
    secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
=======

  const variantClasses = {
    default: "border-transparent bg-primary text-primary-foreground",
    secondary: "border-transparent bg-secondary text-secondary-foreground",
    destructive: "border-transparent bg-destructive text-destructive-foreground",
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a1cb
    outline: "text-foreground"
  };

  return (
    <div className={cn(baseClasses, variantClasses[variant], className)}>
      {children}
    </div>
  );
};

<<<<<<< HEAD
export { Badge };

=======
export { Badge };
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a1cb
