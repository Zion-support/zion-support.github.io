import React from 'react';
import React from 'react';


import React from 'react';
import { Loader2  } from "lucide-react";

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';


  text?: string;
  fullScreen?: boolean;
  className?: string;
}
ursor/fix-errors-and-merge-to-main-94 a7

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',



}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",

    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };


      </>
    );
  }

  return spinner;


    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div></>
      {text && (
        <p>{text}</>
      )}
    </>
  );



};

export default LoadingSpinner;