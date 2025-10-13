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
<<<<<<< HEAD
      () => (
        xs: "h-3 w-3",
        sm: "h-4 w-4",
        md: "h-8 w-8",
        lg: "h-12 w-12",
        xl: "h-16 w-16",
),
      [],
=======
      () => ({
//         xs: "h-3 w-3",
//         sm: "h-4 w-4",
//         md: "h-8 w-8",
//         lg: "h-12 w-12",
//         xl: "h-16 w-16",
      }),
//       [],
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
    );
    const textSizeClasses = useMemo(
<<<<<<< HEAD
      () => (
        xs: "text-xs",
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
        xl: "text-xl",
),
      [],
=======
      () => ({
//         xs: "text-xs",
//         sm: "text-sm",
//         md: "text-base",
//         lg: "text-lg",
//         xl: "text-xl",
      }),
//       [],
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
    );
    const colorClasses = useMemo(
<<<<<<< HEAD
      () => (
        blue: "text-blue-500",
        gray: "text-gray-500",
        green: "text-green-500",
        red: "text-red-500",
        purple: "text-purple-500",
),
      [],
    );
    const renderSpinner = () => 
      switch (variant) 
        case "dots":
          return (
            <div className="flex space-x-1"></div>
              
                <div
=======
      () => ({
//         blue: "text-blue-500",
//         gray: "text-gray-500",
//         green: "text-green-500",
//         red: "text-red-500",
//         purple: "text-purple-500",
      }),
//       [],
    );

    const renderSpinner = () => {
      switch (variant) {
//         case "dots":
          return (
            <div className="flex space-x-1">
              {[0, 1, 2].map((i) => (
//                 <div
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
                  key={i}
                  className="{`${sizeClasses[size]}" ${colorClasses[color]} rounded-full animate-pulse`}
                  style={}
                    animationDelay: `${i * 0.2}s`,
<<<<<<< HEAD
                    animationDuration: "1s",
                  {}
                />

            </div>
=======
//                     animationDuration: "1s",
                  }}
//                 />
              ))}
</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
          );
//         case "pulse":
          return (
<<<<<<< HEAD
            <div
              className="{`${sizeClasses[size]}" ${colorClasses[color]} rounded-full animate-pulse`}
            />
=======
//             <div
              className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-pulse`}
//             />
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
          );
//         case "spinner":
          return (
<<<<<<< HEAD
            <div
              className="{`${sizeClasses[size]}" ${colorClasses[color]} border-2 border-current border-t-transparent rounded-full animate-spin`}
            />
          );
        case "skeleton":
          return (
            <div className="space-y-2"></div>
              <div className="{`h-4" bg-gray-300 rounded animate-pulse`} />
              <div className="{`h-4" bg-gray-300 rounded animate-pulse w-3/4`} />
            </div>
=======
//             <div
              className={`${sizeClasses[size]} ${colorClasses[color]} border-2 border-current border-t-transparent rounded-full animate-spin`}
//             />
          );
        case "skeleton":
          return (
            <div className="space-y-2">
              <div className={`h-4 bg-gray-300 rounded animate-pulse`} />
              <div className={`h-4 bg-gray-300 rounded animate-pulse w-3/4`} />
</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
          );
//         case "bars":
          return (
<<<<<<< HEAD
            <div className="flex space-x-1"></div>
              
                <div
=======
            <div className="flex space-x-1">
              {[0, 1, 2, 3].map((i) => (
//                 <div
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
                  key={i}
                  className="{`w-1" ${colorClasses[color]} animate-pulse`}
                  style={}
                    height: `${8 + i * 4}px`,
                    animationDelay: `${i * 0.1}s`,
<<<<<<< HEAD
                    animationDuration: "0.8s",
                  {}
                />

            </div>
=======
//                     animationDuration: "0.8s",
                  }}
//                 />
              ))}
</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
          );
//         default:
          return (
<<<<<<< HEAD
            <div
              className="{`${sizeClasses[size]}" ${colorClasses[color]} border-2 border-current border-t-transparent rounded-full animate-spin`}
            />
=======
//             <div
              className={`${sizeClasses[size]} ${colorClasses[color]} border-2 border-current border-t-transparent rounded-full animate-spin`}
//             />
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
          );

;
    const containerClasses = fullScreen
      ? "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      : "flex flex-col items-center justify-center space-y-4";
    return (
<<<<<<< HEAD
      <>
        <Helmet></Helmet>
          <title>Loading - Zion Tech Group</title>
        </Helmet>
        <div className="{`${containerClasses}" ${className}`}></div>
          {renderSpinner()}
          
            <p
              className="{`${textSizeClasses[size]}" ${colorClasses[color]} mt-2`}
            >
              {text}
            </p>

          <Link
=======
//       <>
//         <Helmet>
//           <title>Loading - Zion Tech Group</title>
//         </Helmet>
        <div className={`${containerClasses} ${className}`}>
          {renderSpinner()}
          {text && (
//             <p
              className={`${textSizeClasses[size]} ${colorClasses[color]} mt-2`}
//             >
              {text}
</p>
          )}
//           <Link
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
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