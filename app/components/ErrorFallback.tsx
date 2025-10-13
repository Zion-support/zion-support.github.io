<<<<<<< HEAD

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
  errorInfo?: React.ErrorInfo;
=======
import React from "react";
interface ErrorfallbackProps {
  className?: string;
  children?: React.ReactNode;
>>>>>>> cursor/fix-errors-and-merge-to-main-b6b8
}

export default function Errorfallback({ className = '', children, ...props }: ErrorfallbackProps) {
  return (
    <div className={`errorfallback-component ${className}`} {...props}>
      {children}
    </div>
  );
}
