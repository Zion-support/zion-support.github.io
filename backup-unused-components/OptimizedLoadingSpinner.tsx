import React, { memo, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
interface OptimizedLoadingSpinnerProps 
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "dots" | "pulse" | "spinner" | "skeleton" | "bars";
  text?: string;
  className?: string;
  color?: "blue" | "gray" | "green" | "red" | "purple";
  fullScreen?: boolean;

const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps> = memo(</OptimizedLoadingSpinnerProps>
  (
    size = "md",
    variant = "spinner",
    text = "Loading...",
    className = "",
    color = "blue",
    fullScreen = false,
) => 
    const sizeClasses = useMemo(
    );
    const textSizeClasses = useMemo(
    );
    const colorClasses = useMemo(
                  key={i}
                  className="{`${sizeClasses[size]}" ${colorClasses[color]} rounded-full animate-pulse`}
                  style={}
                    animationDelay: `${i * 0.2}s`,
          );
//         case "pulse":
          return (
          );
//         case "spinner":
          return (
          );
//         case "bars":
          return (
                  key={i}
                  className="{`w-1" ${colorClasses[color]} animate-pulse`}
                  style={}
                    height: `${8 + i * 4}px`,
                    animationDelay: `${i * 0.1}s`,
          );
//         default:
          return (
          );

;
    const containerClasses = fullScreen
      ? "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      : "flex flex-col items-center justify-center space-y-4";
    return (
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
//           >
//             Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
</Link>
</div>
//       </>
    );
,
);
OptimizedLoadingSpinner.displayName = "OptimizedLoadingSpinner";
export default OptimizedLoadingSpinner;
</OptimizedLoadingSpinnerProps>