import React from "react";
<<<<<<< HEAD
import { cn } from "@/lib/utils";

interface GradientHeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const GradientHeading: React.FC<GradientHeadingProps> = ({ 
  children, 
  className, 
  as: Component = "h2" 
}) => {
  return (
    <Component 
      className={cn(
        "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-bold",
        className
      )}
    >
      {children}
    </Component>
  );
};

export default GradientHeading;
export { GradientHeading };
=======
import { cn  } from "@/lib / utils";;
import React from &apos;react&apos; import { cn } from &apos,@/lib / utils&apos,&apos,&apos;
import _React from "react",;
import { cn } from "@/lib / utils,";;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
