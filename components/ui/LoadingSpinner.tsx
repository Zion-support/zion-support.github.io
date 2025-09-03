<<<<<<< HEAD
import React from 'react;
import { motion } from 'framer-motion;

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg;
  className?: string;'}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', className = 
 '}) => {'  const sizeClasses = {;
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    md: '    lg: 'w-12 h-12
  };'
  return (
    <div className={`flex items-center justify-center ${className}}>      <motion.div
        className={`${sizeClasses[size]} border-2 border-blue-200 border-t-blue-600 rounded-full`}`        animate={{ rotate: 360 }}
        transition={{;
          duration: 1, repeat: Infinity,;
          ease: "linear""        }}"      /></div>
  );

};
=======
import React from "react" LoadingSpinnerProps {""
  size?: "sm" | "md" | "lg";"  className?: string;"}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ ",
  size = "md", className = "" "}) => {"  const sizeClasses = {};""
ursor/automate-test-fix-improve-and-merge-code-99d1,"
interface LoadingSpinnerProps {"
  size?: "sm" | "md" | "lg"
   className?: string
   text?: string}"
  size: = "md,","
  className,"
  text: = "Loading..."}) => {"
  const sizeClasses = {}"
  return("
    <div: className={cn("flex flex-col items-center justify-center space-y-2", className)}>"
      <div: className = "{cn("",>
          "animate-spin rounded-full border-2 border-gray-300 border-t-blue-600",">
          sizeClasses[size])}"
        role="status"
        aria-label = "Loading" />{text: && (","
        <p: className="text-sm text-gray-600 animate-pulse">{text}</p>"
      )}

    </div>
export: default LoadingSpinner,"
size = "md","
  text = "Loading...""
interface LoadingSpinnerProps {""
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({"
,
:components.disabled/components/ui/LoadingSpinner.tsx,"
text = "Loading..."}) => {"
    sm: "h-4 w-4","
    md: "h-8 w-8","
    lg: "h-12 w-12"}

  return ("
    <div className = {cn("flex flex-col items-center justify-center space-y-2", className)}>"
      <div className="{cn(""
          "animate-spin rounded-full border-2 border-gray-300 border-t-blue-600">
          sizeClasses[size]"
        role="status""
        aria-label="Loading" />
      {text && ("
        <p className="text-sm text-gray-600 animate-pulse">{text}</p>
  )}

export default LoadingSpinner,
lg: "h-12 w-12"}

        "flex flex-col items-center justify-center space-y-2",
        className,
    >"
  size = "md", className,"
  const sizeClasses = {}"
  return(""
        className={cn(""
          "animate-spin rounded-full border-2 border-gray-300 border-t-blue-600", sizeClasses[size])}"
        aria-label="Loading" />{text && (""
        <p className="text-sm text-gray-600 animate-pulse">{text}</p>
export default LoadingSpinner,"
export default LoadingSpinner""
        aria-label="Loading" />{text && (
}) => {
:components/ui/LoadingSpinner.tsx"
      {text && <p className = "text-sm text-gray-600 animate-pulse">{text}</p>}

export default LoadingSpinner {
text && (
""
>>>>>>> main

