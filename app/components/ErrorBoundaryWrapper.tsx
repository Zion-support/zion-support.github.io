"use client"
import React from "react";
interface ErrorBoundaryWrapperProps { className?: string;
  children?: React.ReactNode; }
}

const ErrorBoundaryWrapper: "React.FC<ErrorBoundaryWrapperProps> = ({ className", children }) => {
(<div className = {className}>
      {children}

    </div>
        </>
  );
  )
}


export default ErrorBoundaryWrapper