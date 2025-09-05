
import React from "react";

interface GradientHeadingProps {_children: React.ReactNode;
  className?: string;
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";}

export function GradientHeading(_{_children, _className, _level = "h2"}: GradientHeadingProps) {_const _Tag = level;
  
  return (
    <Tag 
      className={cn(
        "text-4xl font-bold tracking-tight bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent", _className
      )}
    >
      {_children}
    </Tag>
  );
}
