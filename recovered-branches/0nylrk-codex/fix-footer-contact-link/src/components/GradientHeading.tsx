
<<<<<<< HEAD
import { cn } from "@/lib/utils";
import React from "react";
interface GradientHeadingProps {

  children: React.ReactNode
  className?: string;
=======
import { cn } from "@/lib/utils",
import React from "react",
interface GradientHeadingProps {
  children: React.ReactNode,
  className?: string,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}
export function GradientHeading({ children, className, level = "h2" }: GradientHeadingProps) {
<<<<<<< HEAD
  const Tag = level;
=======
  const Tag = level,
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <Tag
      className={cn(
<<<<<<< HEAD
        "text-4xl font-bold tracking-tight bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent";

        className
=======
        "text-4xl font-bold tracking-tight bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent",
        className
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      )}
    >
      {children}
    </Tag>
  )
}