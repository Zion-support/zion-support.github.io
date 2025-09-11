
interface GradientHeadingProps {;
  children: React && React.ReactNode,;

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

interface GradientHeadingProps {
  children: React.ReactNode,
  className?: string,
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}



  return (
    <Tag
      className={cn(
        "text-4xl font-bold tracking-tight bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent";

        className
        "text-4xl font-bold tracking-tight bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent",
        className

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
