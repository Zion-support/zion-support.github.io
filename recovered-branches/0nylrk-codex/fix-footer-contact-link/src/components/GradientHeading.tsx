<<<<<<< HEAD

interface GradientHeadingProps {;
  children: React && React.ReactNode,;

  className?: string;
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}


<<<<<<< HEAD
=======
interface GradientHeadingProps {;
  children: React && React.ReactNode,;
  className?: string;
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export function GradientHeading(): any ({ children, className, level = "h2" }: GradientHeadingProps) {;
  const Tag = level;

  return (
    <Tag
      className={cn(
        "text-4xl font-bold tracking-tight bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent"

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { cn } from "@/lib/utils";
import React from "react";
interface GradientHeadingProps {

<<<<<<< HEAD
<<<<<<< HEAD
=======
  children: React.ReactNode
  className?: string;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  className?: string;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { cn } from "@/lib/utils",
import React from "react",
import {cn} from "@/lib/utils";
import React from "react";
import { cn } from "@/lib/utils",
import React from "react",
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface GradientHeadingProps {
  children: React.ReactNode,
  className?: string,

  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  return (
    <Tag
      className={cn(

<<<<<<< HEAD
=======
=======
  className?: string;
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
        className
      )}>;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface GradientHeadingProps {
  children: React.ReactNode,
  className?: string,
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        "text-4xl font-bold tracking-tight bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent",
        className
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

      )}
    >
      {children}
<<<<<<< HEAD

    </Tag>;
  );
}

<<<<<<< HEAD
=======
=======
        className
      )}>;
      {children}
    </Tag>;
  );
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

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
  ),;}
 interface GradientHeadingProps {
  children: React.ReactNode;
className?: string;
return (<Tag className= {
  cn () 
}> {
  children 
}</Tag>) 
}
      )}
    >
      {children}
    </Tag>
  )
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
