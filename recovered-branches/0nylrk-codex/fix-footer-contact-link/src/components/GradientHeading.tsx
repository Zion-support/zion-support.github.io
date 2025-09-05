
<<<<<<< HEAD
<<<<<<< HEAD
import { cn } from "@/lib/utils",
import React from "react",
interface GradientHeadingProps {
  children: React.ReactNode,
  className?: string,
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export function GradientHeading({ children, className, level = "h2" }: GradientHeadingProps) {
  const Tag = level,
=======
import { cn } from &quot;@/lib/utils&quot;;
import React from &quot;react&quot;;
=======
import React from "react";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

interface GradientHeadingProps {_children: React.ReactNode;
  className?: string;
<<<<<<< HEAD
  level?: &quot;h1&quot; | &quot;h2&quot; | &quot;h3&quot; | &quot;h4&quot; | &quot;h5&quot; | &quot;h6&quot;;
}

export function GradientHeading({ children, className, level = &quot;h2&quot; }: GradientHeadingProps) {
  const Tag = level;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";}

export function GradientHeading(_{_children, _className, _level = "h2"}: GradientHeadingProps) {_const _Tag = level;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  return (
    <Tag 
      className={cn(
<<<<<<< HEAD
        &quot;text-4xl font-bold tracking-tight bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent&quot;,
        className
=======
        "text-4xl font-bold tracking-tight bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      )}
    >
      {_children}
    </Tag>
  )
}
