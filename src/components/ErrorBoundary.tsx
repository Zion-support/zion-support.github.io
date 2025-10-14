import React from "react";"

interface ErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ className = '', children }) => {''
  return (
<>    <div className={`errorboundary ${className}`}></div>```
      {children}
    </div>
    </>
  )};
};

export default ErrorBoundary;
