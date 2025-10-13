import React from 'react';
interface OptimizedLoadingSpinnerProps {
import React, { memo, useMemo } from "react"react-helmet-async";
import { Link } from ";
import { ArrowRight } from "lucide-react"xs" | " | "md"lg" | ";
variant?: "dots"pulse" | " | "skeleton"bars";
  text?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function OptimizedLoadingSpinner({ className = '', children }: OptimizedLoadingSpinnerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps> = memo(</OptimizedLoadingSpinnerProps>
  (
    size = ",
    variant = "spinner"Loading...",
    className = "blue",
    fullScreen = false,
) =>
    const sizeClasses = useMemo(
      () => (
        xs: ",
        sm: "h-4 w-4"h-8 w-8",
        lg: ",
        xl: "h-16 w-16"h-3 w-3",
          sm: ",
          md: "h-8 w-8"h-12 w-12",
          xl: ",
),
      [],
      () => ({
//         xs: "h-3 w-3"h-4 w-4",
//         md: ",
//         lg: "h-12 w-12"h-16 w-16",
      }),
//       [],
    );
    const textSizeClasses = useMemo(
      () => (
        xs: ",
        sm: "text-sm"text-base",
        lg: ",
        xl: "text-xl"text-xs",
          sm: ",
          md: "text-base"text-lg",
          xl: ",
),
      [],
      () => ({
//         xs: "text-xs"text-sm",
//         md: ",
//         lg: "text-lg"text-xl",
      }),
//       [],
    );
    const colorClasses = useMemo(
      () => (
        blue: ",
        gray: "text-gray-500"text-green-500",
        red: ",
        purple: "text-purple-500"text-blue-500",
          gray: ",
          green: "text-green-500"text-red-500",
          purple: ",
),
      [],
    );
    const renderSpinner = () =>
      switch (variant)
        case "dots"flex space-x-1"text-blue-500"text-gray-500",
//         green: ",
//         red: "text-red-500"text-purple-500",
      }),
//       [],
    );

    const renderSpinner = () => {
      switch (variant) {
//         case ":
          return (
            <div className="flex space-x-1" ${colorClasses[color]} rounded-full animate-pulse`}
                  style={}
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: "1 s"{`${sizeClasses[size]}"1 s"1 s",
                  }
//                 />
              ))}
</div>
          );
//         case ":
          return (
            <div;
            <div
              className="{`${sizeClasses[size]}" ${colorClasses[color]} rounded-full animate-pulse`}
            />
//             <div
              className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-pulse`}
//             />
          );
//         case "spinner"{`${sizeClasses[size]}"{`${sizeClasses[size]}"skeleton":
          return (
            <div className="{`h-4" bg-gray-300 rounded animate-pulse`} />
              <div className="skeleton":
          return (
            <div className="bars":
          return (
            <div className="flex space-x-1">
              {[0, 1, 2, 3].map((i) => (
//                 <div
                  key={i}
                  className="0.8 s",
  className="0.8 s",
                  {}
                />
  </div>

            </div>
//                     animationDuration: ",
                  }
//                 />
              ))}
</div>
          );
//         default:
          return (
            <div;
            <div
              className="{`${sizeClasses[size]}" ${colorClasses[color]} border-2 border-current border-t-transparent rounded-full animate-spin`}
            />
//             <div
              className={`${sizeClasses[size]} ${colorClasses[color]} border-2 border-current border-t-transparent rounded-full animate-spin`}
//             />
          );

;
    const containerClasses = fullScreen;
      ? "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"flex flex-col items-center justify-center space-y-4";
    return (
      <>
        <Helmet></Helmet>
          <title>Loading - Zion Tech Group</title>
        </Helmet>
        <div className="{`${textSizeClasses[size]}" ${colorClasses[color]} mt-2`}
            <p>
  className="/contact"
            className="/contact">
  className="w-5 h-5 ml-2" />
          </Link>
  </div>
      </>
          <Link
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
            to="
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit" />
</Link>
</div>
//       </>
    );
,
);
OptimizedLoadingSpinner.displayName = "OptimizedLoadingSpinner";
export default OptimizedLoadingSpinner;
</OptimizedLoadingSpinnerProps>
  </div>
  </div>
  </div>
className?: string;
  children?: React.ReactNode;
