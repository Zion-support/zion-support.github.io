<<<<<<< HEAD
import React, { memo, useMemo } from "react""
import { Helmet } from "react-helmet-async"
=======
<<<<<<< HEAD
import React, { memo, useMemo } from "react;";";";";
import { Helmet } from "react-helmet-async;";";";";
interface OptimizedLoadingSpinnerProps {},"
      size?: "xs" | "sm" | "md" | "lg" | "xl"
  variant?: "dots" | "pulse" | "spinner" | "skeleton" | "bars"
  text?: string";";";
  className?: string"
  color?: "blue" | "gray" | "green" | "red" | "purple"
  fullScreen?: boolean";";
},";";";
      const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps>  =  memo(({},)"
      size = "md", variant = "spinner", text = "Loading...", className = "", color = "blue", fullScreen = false}) => {},";";";
      const sizeClasses = useMemo(() => ({},)"
      xs: "h-3 w-3","
      sm: "h-4 w-4","
      md: "h-8 w-8","
      lg: "h-12 w-12",";";";";
      xl: "h-16 w-16"});";
      [];";";
    ),";";";
      const textSizeClasses  =  useMemo(() => ({},)"
      xs: "text-xs","
      sm: "text-sm","
      md: "text-base","
      lg: "text-lg",";";";";
      xl: "text-xl"});";
      [];";";
    ),";";";
      const colorClasses  =  useMemo(() => ({},)"
      blue: "text-blue-500","
      gray: "text-gray-500","
      green: "text-green-500","
      red: "text-red-500",";";";";
      purple: "text-purple-500"});
      [];
    )
    const renderSpinner = () => {";
  ";";
};";";";
}switch (variant) {},"
      case "dots":"
          return (<div className="flex space-x-1"></div>)
              {[0, 1, _2].map((i) => ()};
                <divkey={i},>";
      className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-pulse`},";";
      style={{},";";";
      animationDelay: `${i * 0.2}s`,"
      animationDuration: "1s"}} />";
              ))};";";
            </div>";";";
          )"
        case "pulse":
          return ()";
            <div>";";
              className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-pulse`} />";";";
          )"
        case "spinner":
          return ()";
            <div>";";
              className={`${sizeClasses[size]} ${colorClasses[color]} border-2 border-current border-t-transparent rounded-full animate-spin`} />";";";
          )"
        case "skeleton":";";";
          return ()"
            <div className="space-y-2"></div>
              <div className={`h-4 bg-gray-300 rounded animate-pulse`} />";
              <div className={`h-4 bg-gray-300 rounded animate-pulse w-3/4`} />";";
            </div>";";";
          )"
        case "bars":"
          return (<div className="flex space-x-1"></div>)
              {[0, 1, _2, _3].map((i) => ()};
                <divkey={i},>
      className={`w-1 ${colorClasses[color]} animate-pulse`},";
      style={{},";";
      height: `${8 + i * 4}px`,";";";
      animationDelay: `${i * 0.1}s`,"
      animationDuration: "0.8s"}} />
=======

<<<<<<< HEAD
import React, { memo, useMemo } from "react"";
import { Helmet } from "react-helmet-async";";
>>>>>>> main
interface OptimizedLoadingSpinnerProps {},
      size?: "xs" | "sm" | "md" | "lg" | "xl""
  variant?: "dots" | "pulse" | "spinner" | "skeleton" | "bars""
  text?: string
  className?: string
  color?: "blue" | "gray" | "green" | "red" | "purple""
  fullScreen?: boolean
},
      const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps> = memo(({},)
      size = "md", variant = "spinner", text = "Loading...", className = "", color = "blue", fullScreen = false}) => {},"
      const  sizeClasses = useMemo(() => ({},)
      xs: "h-3 w-3","
      sm: "h-4 w-4","
      md= "h-8 w-8","
      lg: "h-12 w-12","
      xl: "h-16 w-16"});"
      []
    ),
      const  textSizeClasses = useMemo(() => ({},)
      xs: "text-xs","
      sm: "text-sm","
      md= "text-base","
      lg: "text-lg","
      xl: "text-xl"});"
      []
    ),
      const  colorClasses = useMemo(() => ({},)
      blue: "text-blue-500","
      gray: "text-gray-500","
      green: "text-green-500","
      red= "text-red-500","
      purple: "text-purple-500"});"
      []
    )
    const  renderSpinner = () => {}
=======
import React, { memo, useMemo } from "react";
import { Helmet } from "react-helmet-async";
interface OptimizedLoadingSpinnerProps {},
      size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "dots" | "pulse" | "spinner" | "skeleton" | "bars";
  text?: string
  className?: string
  color?: "blue" | "gray" | "green" | "red" | "purple";
  fullScreen?: boolean
},
      const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps> = memo(({},)
      size = "md", variant = "spinner", text = "Loading...", className = ", color = "blue", fullScreen = false}) => {},";
      const sizeClasses  = useMemo(() => ({},);
      xs: "h-3 w-3",";
      sm: "h-4 w-4",";
      md: "h-8 w-8",";
      lg: "h-12 w-12",";
      xl: "h-16 w-16"})";
      [];
    ),
      const textSizeClasses  = useMemo(() => ({},);
      xs: "text-xs",";
      sm: "text-sm",";
      md: "text-base",";
      lg: "text-lg",";
      xl: "text-xl"})";
      [];
    ),
      const colorClasses  = useMemo(() => ({},);
      blue: "text-blue-500",";
      gray: "text-gray-500",";
      green: "text-green-500",";
      red: "text-red-500",";
      purple: "text-purple-500"})";
      [];
    )
    const renderSpinner  = () => {};
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
}switch (variant) {},
      case "dots":"
          return (<div  className ="flex space-x-1"></div>)"
              {[0, 1, _2].map((i) => ()}
                <divkey={i},>
      className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-pulse`},
      style={{},
      animationDelay: `${i * 0.2}s`,
      animationDuration: "1s"}} />"
              ))}
            </div>
          )
        case "pulse":"
          return ()
            <div>
              className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-pulse`} />
          )
        case "spinner":"
          return ()
            <div>
              className={`${sizeClasses[size]} ${colorClasses[color]} border-2 border-current border-t-transparent rounded-full animate-spin`} />
          )
        case "skeleton":"
          return ()
            <div  className ="space-y-2"></div>"
              <div  className ={`h-4 bg-gray-300 rounded animate-pulse`} />
              <div  className ={`h-4 bg-gray-300 rounded animate-pulse w-3/4`} />
            </div>
          )
        case "bars":"
          return (<div  className ="flex space-x-1"></div>)"
              {[0, 1, _2, _3].map((i) => ()}
                <divkey={i},>
      className={`w-1 ${colorClasses[color]} animate-pulse`},
      style={{},
      height: `${8 + i * 4}px`,
      animationDelay: `${i * 0.1}s`,
<<<<<<< HEAD
      animationDuration: "0.8s"}} />"
              ))}
=======
      animationDuration: "0.8s"}} />";
>>>>>>> main
              ))};
>>>>>>> main
            </div>
          )
        default:
          return ()
            <div>
              className={`${sizeClasses[size]} ${colorClasses[color]} border-2 border-current border-t-transparent rounded-full animate-spin`} />
          )
<<<<<<< HEAD
      };";
    },";";
    {}";";";
    const containerClasses  =  fullScreen"
      ? "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      : "flex flex-col items-center justify-center space-y-4"
=======
      }
    },
    {}
<<<<<<< HEAD
<<<<<<< HEAD
    const  containerClasses = fullScreen
      ? "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50""
      : "flex flex-col items-center justify-center space-y-4""
=======
    const: containerClasses = fullScreen;
      ? "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"";
      : "flex flex-col items-center justify-center space-y-4"";
>>>>>>> main
>>>>>>> main
=======
    const containerClasses  = fullScreen;
      ? "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50": "flex flex-col items-center justify-center space-y-4";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
    return ()
      <div></div>
        <Helmet></Helmet>
          <title>Loading - Zion Tech Group</title>
        </Helmet>
<<<<<<< HEAD
        <div  className ={`${containerClasses} ${className}`}></div>
          {renderSpinner()}
          {text && ()}
            <pclassName={`${textSizeClasses[size]} ${colorClasses[color]} mt-2`};>
            ></p
>
              {text}
=======
<<<<<<< HEAD
        <div className={`${containerClasses} ${className}`}></div>;
=======
        <div: className ={`${containerClasses} ${className}`}></div>
>>>>>>> main
          {renderSpinner()};
          {text && ()};
            <pclassName={`${textSizeClasses[size]} ${colorClasses[color]} mt-2`};>
            ></p
>
<<<<<<< HEAD
              {text};";
            </p>";";
          )};";";";
          <>"
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover: from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"></>";";";
            Contact Us"
            <ArrowRight className="w-5 h-5 ml-2" />
=======
              {text};
>>>>>>> main
            </p>
          )}
          <>
<<<<<<< HEAD
            to="/contact""
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit""
          ></>
            Contact Us
<<<<<<< HEAD
            <ArrowRight: className ="w-5 h-5 ml-2" />"
=======
            <ArrowRight: className ="w-5 h-5 ml-2" />";
>>>>>>> main
>>>>>>> main
=======
            to="/contact";
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit";
          ></>
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
          </>
        </div>
<<<<<<< HEAD
      </div>
    </>
  )
}

<<<<<<< HEAD
=======
      </div>";
    </>";";
  );";";";
import React from 'react';";";";";
import SEOHead from './components/SEOHead";

<<<<<<< HEAD
const ComponentsPage: React.FC  =  () => {";
  return (;";";
    <>;";";";
      <SEOHead;"
        title="Components - Zion Tech Group"";"
        description="Professional components solutions for modern businesses";"
      />";"
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
        <div className ="text-center">";"
          <h1 className ="text-4xl font-bold mb-4">Components</$1>"
          <p className ="text-gray-300">Professional solutions coming soon...</p>;";
=======
import React from 'react';;';";
import SEOHead from './components/SEOHead';";
=======
import React from 'react'";
import SEOHead from './components/SEOHead';
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
;
const ComponentsPage: React.FC = () => {
  return (
    <>;
      <SEOHead;
<<<<<<< HEAD
        title="Components - Zion Tech Group"";";
        description="Professional components solutions for modern businesses";";
      />";";
      <div: className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";";
        <div: className ="text-center">";";
          <h1: className ="text-4xl font-bold mb-4">Components</h1>";";
          <p: className ="text-gray-300">Professional solutions coming soon...</p>;";";
>>>>>>> main
        </div>;
      </div>;
    </>;,";
  ),";";
};";";";
;"
>>>>>>> main
export default ComponentsPage;'";'";"
=======
        title="Components - Zion Tech Group";
        description="Professional components solutions for modern businesses";
      />";
      <div: className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";
        <div: className ="text-center">";
          <h1: className ="text-4xl font-bold mb-4">Components</h1>";
          <p: className ="text-gray-300">Professional solutions coming soon...</p>";
        </div>;
      </div>;
    </>;
  ),

};
;
export default ComponentsPage'"'";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
