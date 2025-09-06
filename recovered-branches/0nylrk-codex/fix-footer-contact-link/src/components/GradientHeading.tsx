
<<<<<<< HEAD
import {cn} from "@/lib/utils";
import React from "react";
=======
import { cn } from "@/lib/utils",
import React from "react",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
interface GradientHeadingProps {
  children: React.ReactNode,
  className?: string,
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

<<<<<<< HEAD
export function GradientHeading({ children, className, level = "h2" }: GradientHeadingProps) {;
  const Tag = level;
=======
export function GradientHeading({ children, className, level = "h2" }: GradientHeadingProps) {
  const Tag = level,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
  return (
    <Tag 
      className={cn(
        "text-4xl font-bold tracking-tight bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent",
        className
<<<<<<< HEAD
=======
import { cn } from "@/lib/utils",;
import React from "react",;
interface GradientHeadingProps {;
  children: React.ReactNode,;
  className?: string,;
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
;
export function GradientHeading({ children, className, level = "h2" }: GradientHeadingProps) {;
  const Tag = level;
  return (;
    <Tag;
      className={cn(;
        "text-4xl font-bold tracking-tight bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent";
        className;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
      )}
    >
      {children}
    </Tag>
  )
}
;