"use client"
import React from "react";
interface ErrorBoundaryWrapperProps {
  className?: string;
  children?: React.ReactNode;
}
interface ErrorBoundaryWrapperProps {
   className", children 
}
const ErrorBoundaryWrapper: React.FC<ErrorBoundaryWrapperProps> = ({  className", children  }) => {
  return (<div className={className}>
      {children}

    </div>
    </div>
  )
}

export default ErrorBoundaryWrapper
