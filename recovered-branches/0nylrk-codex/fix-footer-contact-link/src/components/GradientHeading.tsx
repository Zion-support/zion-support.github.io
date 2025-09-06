
<<<<<<< HEAD
<<<<<<< HEAD
import { cn } from "@/lib/utils";
import React from "react";
interface GradientHeadingProps {

  className?: string;
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}


export function GradientHeading(): any ({ children, className, level = "h2" }: GradientHeadingProps) {;
  const Tag = level;

  return (
    <Tag
      className={cn(
        "text-4xl font-bold tracking-tight bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent"

        className
      )}>;
=======

import { cn } from "@/lib/utils",
import React from "react",
=======
import {cn} from "@/lib/utils";
import React from "react";
=======
import { cn } from "@/lib/utils",
import React from "react",

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface GradientHeadingProps {
  children: React.ReactNode,
  className?: string,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
export function GradientHeading({ children, className, level = "h2" }: GradientHeadingProps) {;
  const Tag = level;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function GradientHeading({ children, className, level = "h2" }: GradientHeadingProps) {
<<<<<<< HEAD
  const Tag = level;
=======
  const Tag = level,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <Tag
      className={cn(

        "text-4xl font-bold tracking-tight bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent",
        className
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      )}
    >
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {children}

    </Tag>;
  );
}

=======
import { cn } from '@/lib / utils';
import React from './react';
interface GradientHeadingProps {
  children: React.ReactNode,
  class_name?: string;
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
export /**
 * GradientHeading - Function description
 */
function GradientHeading() {
  const Tag = level;
;
  return (
    <Tag;
      className={cn (
        "text - 4xl font - bold tracking - tight bg - gradient - to - r from - zion - cyan via - zion - purple - light to - zion - purple bg - clip - text text - transparent";
        class_name)}
    >;
      {children}
    </Tag>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
