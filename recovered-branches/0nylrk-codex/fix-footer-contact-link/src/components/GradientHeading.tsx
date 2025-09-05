
<<<<<<< HEAD
import { cn } from "@/lib/utils",;
import React from "react",;
;
interface GradientHeadingProps {;
  children:React.ReactNode,;
  className?:string,;
  level?:"h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
;
export function GradientHeading({ children, className, level = "h2" } GradientHeadingProps) {;
  const Tag = level,;
  ;
  return (;
    <Tag ;
      className={cn(;
        "text-4xl font-bold tracking-tight bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent",;
        className;
      )}
    >;
      {children}
    </Tag>;
  ),;
=======
import { cn } from "@/lib/utils",
import React from "react",
interface GradientHeadingProps {
  children: React.ReactNode,
  className?: string,
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export function GradientHeading({ children, className, level = "h2" }: GradientHeadingProps) {
  const Tag = level,
interface GradientHeadingProps {_children: React.ReactNode;
  className?: string;
  level?: &quot;h1&quot; | &quot;h2&quot; | &quot;h3&quot; | &quot;h4&quot; | &quot;h5&quot; | &quot;h6&quot;;
}

export function GradientHeading({ children, className, level = &quot;h2&quot; }: GradientHeadingProps) {
  const Tag = level;
  return (
    <Tag 
      className={cn(
        &quot;text-4xl font-bold tracking-tight bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent&quot;,
        className      )}
    >
      {_children}
    </Tag>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
