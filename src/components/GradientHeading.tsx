import React from 'react';
import { cn } from "@/lib/utils";

interface GradientHeadingProps {
  children: React.ReactNode;
  className?: string;
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  id?: string;
}

export function GradientHeading({ 
  children, 
  className, 
  level = "h2", 
  id 
}: GradientHeadingProps) {
  const Tag = level as keyof JSX.IntrinsicElements;
  
  return (
    <Tag 
      id={id} 
      className={cn(
        "text-4xl font-bold tracking-tight bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </Tag>
  );
}
