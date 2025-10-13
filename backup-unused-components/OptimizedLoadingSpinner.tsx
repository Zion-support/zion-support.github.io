<<<<<<< HEAD
import React from 'react';

interface OptimizedLoadingSpinnerProps {
=======
import React, { memo, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
interface OptimizedLoadingSpinnerProps;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "dots" | "pulse" | "spinner" | "skeleton" | "bars";
  text?: string;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function OptimizedLoadingSpinner({ className = '', children }: OptimizedLoadingSpinnerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
=======
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
<<<<<<< HEAD
      () => (
        xs: "h-3 w-3",
        sm: "h-4 w-4",
        md: "h-8 w-8",
        lg: "h-12 w-12",
        xl: "h-16 w-16",
=======
      () => (,
    xs: "h-3 w-3",
          sm: "h-4 w-4",
          md: "h-8 w-8",
          lg: "h-12 w-12",
          xl: "h-16 w-16",
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
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
<<<<<<< HEAD
      () => (
        xs: "text-xs",
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
        xl: "text-xl",
=======
      () => (,
    xs: "text-xs",
          sm: "text-sm",
          md: "text-base",
          lg: "text-lg",
          xl: "text-xl",
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
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
<<<<<<< HEAD
      () => (
        blue: "text-blue-500",
        gray: "text-gray-500",
        green: "text-green-500",
        red: "text-red-500",
        purple: "text-purple-500",
=======
      () => (,
    blue: "text-blue-500",
          gray: "text-gray-500",
          green: "text-green-500",
          red: "text-red-500",
          purple: "text-purple-500",
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
),
      [],
    );
    const renderSpinner = () => 
      switch (variant) 
        case "dots":
          return (
            <div className="flex space-x-1"></div>
              
<<<<<<< HEAD
                <div;
=======
                <div
<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
                  key={i}
                  className="{`${sizeClasses[size]}" ${colorClasses[color]} rounded-full animate-pulse`}
                  style={}
                    animationDelay: `${i * 0.2}s`,
<<<<<<< HEAD
                    animationDuration: "1s",
=======
                  key={i}>
  className="{`${sizeClasses[size]}" ${colorClasses[color]} rounded-full animate-pulse`}>
  style={},>
  animationDelay: `${i * 0.2}s`,>,
    animationDuration: "1s",
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
                  {}
                />
<<<<<<< HEAD
  </div>
=======

            </div>
=======
//                     animationDuration: "1s",
                  }}
//                 />
              ))}
</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
          );
//         case "pulse":
          return (
<<<<<<< HEAD
<<<<<<< HEAD
            <div;
=======
<<<<<<< HEAD
            <div
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
              className="{`${sizeClasses[size]}" ${colorClasses[color]} rounded-full animate-pulse`}
=======
            <div>
  className="{`${sizeClasses[size]}" ${colorClasses[color]} rounded-full animate-pulse`}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
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
<<<<<<< HEAD
            <div;
=======
<<<<<<< HEAD
            <div
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
              className="{`${sizeClasses[size]}" ${colorClasses[color]} border-2 border-current border-t-transparent rounded-full animate-spin`}
=======
            <div>
  className="{`${sizeClasses[size]}" ${colorClasses[color]} border-2 border-current border-t-transparent rounded-full animate-spin`}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
            />
          );
        case "skeleton":
          return (
            <div className="space-y-2"></div>
              <div className="{`h-4" bg-gray-300 rounded animate-pulse`} />
              <div className="{`h-4" bg-gray-300 rounded animate-pulse w-3/4`} />
<<<<<<< HEAD
  </div>
=======
            </div>
=======
//             <div
              className={`${sizeClasses[size]} ${colorClasses[color]} border-2 border-current border-t-transparent rounded-full animate-spin`}
//             />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
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
              
<<<<<<< HEAD
                <div;
=======
                <div
=======
            <div className="flex space-x-1">
              {[0, 1, 2, 3].map((i) => (
//                 <div
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
                  key={i}
<<<<<<< HEAD
                  className="{`w-1" ${colorClasses[color]} animate-pulse`}
                  style={}
                    height: `${8 + i * 4}px`,
                    animationDelay: `${i * 0.1}s`,
<<<<<<< HEAD
                    animationDuration: "0.8s",
=======
  className="{`w-1" ${colorClasses[color]} animate-pulse`}>
  style={},>
  height: `${8 + i * 4}px`,>
  animationDelay: `${i * 0.1}s`,>,
    animationDuration: "0.8s",
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
                  {}
                />
<<<<<<< HEAD
  </div>
=======

            </div>
<<<<<<< HEAD
=======
//                     animationDuration: "0.8s",
                  }}
//                 />
              ))}
</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
          );
//         default:
          return (
<<<<<<< HEAD
            <div;
=======
<<<<<<< HEAD
            <div
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
              className="{`${sizeClasses[size]}" ${colorClasses[color]} border-2 border-current border-t-transparent rounded-full animate-spin`}
=======
          );,
    default:
          return (
            <div>
  className="{`${sizeClasses[size]}" ${colorClasses[color]} border-2 border-current border-t-transparent rounded-full animate-spin`}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
            />
=======
//             <div
              className={`${sizeClasses[size]} ${colorClasses[color]} border-2 border-current border-t-transparent rounded-full animate-spin`}
//             />
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
          );

;
    const containerClasses = fullScreen;
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
          
<<<<<<< HEAD
            <p;
              className="{`${textSizeClasses[size]}" ${colorClasses[color]} mt-2`}
=======
            <p>
  className="{`${textSizeClasses[size]}" ${colorClasses[color]} mt-2`}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
            >
              {text}
            </p>

<<<<<<< HEAD
<<<<<<< HEAD
          <Link;
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
=======
          <Link>
  to="/contact">
  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
          >
            Contact Us;
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
  </div>
      </>
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
    );
,
);
OptimizedLoadingSpinner.displayName = "OptimizedLoadingSpinner";
export default OptimizedLoadingSpinner;
</OptimizedLoadingSpinnerProps>
  </div>
  </div>
  </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
