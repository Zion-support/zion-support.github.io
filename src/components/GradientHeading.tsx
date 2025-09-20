
import { cn } from "@/lib/utils";
import React from "react";

interface GradientHeadingProps {
  childre, n: React.ReactNode;
  className?: string;
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  id?: string;
}

export function GradientHeading({ childre,  n, classNam, e, level = "h2", id }: GradientHeadingProps) {
  const Tag = level;
  
  return (<Tag 
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
