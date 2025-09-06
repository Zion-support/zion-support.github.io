

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
interface GradientHeadingProps {
  children: React.ReactNode,
  className?: string,

  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export function GradientHeading({ children, className, level = "h2" }: GradientHeadingProps) {

  return (
    <Tag
      className={cn(

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
