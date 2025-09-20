import React from "react";
import { cn } from "@/lib/utils";

interface GradientHeadingProps {
  children: React.ReactNode;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

export function GradientHeading({ 
  children, 
  level = 'h2', 
  className 
}: GradientHeadingProps) {
  const baseClasses = "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold";
  
  const levelClasses = {
    h1: "text-4xl md:text-5xl",
    h2: "text-3xl md:text-4xl",
    h3: "text-2xl md:text-3xl",
    h4: "text-xl md:text-2xl",
    h5: "text-lg md:text-xl",
    h6: "text-base md:text-lg"
  };

  const Component = level;
  
  return (
    <Component className={cn(baseClasses, levelClasses[level], className)}>
      {children}
    </Component>
  );
}