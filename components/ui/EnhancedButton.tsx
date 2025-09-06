
import React from "react";
import clsx from "clsx";
export type EnhancedButtonProps =;
  React && React.ButtonHTMLAttributes<HTMLButtonElement> & {;
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
        baseStyles
        sizeStyles[size]
        variantStyles[variant]
        fullWidth && "w-full"
        className
      )}
      {...props}
}

