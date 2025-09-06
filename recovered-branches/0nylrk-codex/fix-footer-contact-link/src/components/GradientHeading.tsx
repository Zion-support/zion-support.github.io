
import { cn } from "@/lib/utils";
import React from "react";
<<<<<<< HEAD
interface GradientHeadingProps {

  children: React.ReactNode
=======
interface GradientHeadingProps {;
  children: React && React.ReactNode,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  className?: string;
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
<<<<<<< HEAD
export function GradientHeading({ children, className, level = "h2" }: GradientHeadingProps) {
  const Tag = level;
  return (
    <Tag
      className={cn(
        "text-4xl font-bold tracking-tight bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent";

=======

export function GradientHeading(): any ({ children, className, level = "h2" }: GradientHeadingProps) {;
  const Tag = level;

  return (
    <Tag
      className={cn(
        "text-4xl font-bold tracking-tight bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        className
      )}>;
      {children}
<<<<<<< HEAD
    </Tag>
  )
}
=======
    </Tag>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
