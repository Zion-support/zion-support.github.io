

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
interface GradientHeadingProps {
  children: React.ReactNode,
  className?: string,

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
interface GradientHeadingProps {
  children: React.ReactNode,
  className?: string,
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export function GradientHeading({ children, className, level = "h2" }: GradientHeadingProps) {;
  const Tag = level;
export function GradientHeading({ children, className, level = "h2" }: GradientHeadingProps) {
  const Tag = level;
  const Tag = level,
  
  return (
    <Tag
      className={cn(
        "text-4xl font-bold tracking-tight bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent";

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

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      )}
    >
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {children}

    </Tag>;
  );
}

