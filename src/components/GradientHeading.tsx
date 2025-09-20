import React from "react";
import { cn  } from "@/lib / utils";;
import React from &apos;react&apos; import { cn } from &apos,@/lib / utils&apos,&apos,&apos;
import _React from "react",;
import { cn } from "@/lib / utils,";;
import { cn } from "@/lib/utils";

interface GradientHeadingProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "custom";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
  className?: string;
  customGradient?: string;
}

export function GradientHeading({
  children,
  variant = "primary",
  size = "2xl",
  className = "",
  customGradient
}: GradientHeadingProps) {
  const getGradientClasses = () => {
    const gradients = {
      primary: "bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent",
      secondary: "bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent",
      accent: "bg-gradient-to-r from-cyan-500 via-purple-600 to-blue-600 bg-clip-text text-transparent",
      custom: customGradient || "bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"
    };
    return gradients[variant];
  };

  const getSizeClasses = () => {
    const sizes = {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl"
    };
    return sizes[size];
  };

  return (
    <h1
      className={cn(
        "font-bold leading-tight",
        getSizeClasses(),
        getGradientClasses(),
        className
      )}
    >
      {children}
    </h1>
  );
}
