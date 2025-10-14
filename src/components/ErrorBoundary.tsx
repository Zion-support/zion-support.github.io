import React from "react";"

interface Props {
  children: ReactNode
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
