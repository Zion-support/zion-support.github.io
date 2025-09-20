<<<<<<< HEAD
import React from "react";
import { cn  } from "@/lib / utils";;
import React from &apos;react&apos; import { cn } from &apos,@/lib / utils&apos,&apos,&apos;
import _React from "react",;
import { cn } from "@/lib / utils,";;
import { cn } from "@/lib/utils";
<<<<<<< HEAD

interface GradientHeadingProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "custom";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
=======
import React from 'react';
=======
=======
import React from 'react';
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e

interface GradientHeadingProps {
  title: string;
  subtitle?: string;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
>>>>>>> 8c478e615056772e765dbc204462fa984d447432
  className?: string;
}

export function GradientHeading({ 
  title, 
  subtitle, 
  level = 'h1', 
  className = '',
  children
}: GradientHeadingProps & { children?: React.ReactNode }) {
  const HeadingTag = level;
  
  return (
<<<<<<< HEAD
    <h1
      className={cn(
        "font-bold leading-tight",
        getSizeClasses(),
        getGradientClasses(),
        className
      )}
    >
      {children}
    </h1>
  );
}
=======
    <div className={className}>
      <HeadingTag className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
        {children || title}
      </HeadingTag>
      {subtitle && (
        <p className="text-gray-300 mt-4 text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
<<<<<<< HEAD
}
>>>>>>> 8c478e615056772e765dbc204462fa984d447432
=======
<<<<<<< HEAD
}
=======
}
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e
