
import React from "react";
import { cn } from "@/lib/utils";

interface GradientHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientHeading({ children, className }: GradientHeadingProps) {
  return (
    <h1
      className={cn(
        "bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent font-bold text-4xl md:text-6xl",
        className
      )}
    >
      {children}
    </h1>
  );
}

