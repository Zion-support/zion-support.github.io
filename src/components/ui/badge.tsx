<<<<<<< HEAD
<<<<<<< HEAD

import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "secondary" | "destructive" | "outline";
=======
=======
>>>>>>> 3354b621683b5dbd53991e6ca60f957ffccef787
import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "destructive" | "outline";
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  className = "",
  variant = "default"
}) => {
  const baseClasses = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors";

  const variantClasses = {
    default: "border-transparent bg-primary text-primary-foreground",
    secondary: "border-transparent bg-secondary text-secondary-foreground",
    destructive: "border-transparent bg-destructive text-destructive-foreground",
    outline: "text-foreground"
  };

  return (
    <div className={cn(baseClasses, variantClasses[variant], className)}>
      {children}
    </div>
  );
};

export { Badge };
<<<<<<< HEAD

=======
export { Badge };
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a1cb
=======
>>>>>>> 3354b621683b5dbd53991e6ca60f957ffccef787
