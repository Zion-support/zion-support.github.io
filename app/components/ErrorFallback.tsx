import React from "react";
interface ErrorfallbackProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Errorfallback({ className = '', children, ...props }: ErrorfallbackProps) {
  return (
    <div className={`errorfallback-component ${className}`} {...props}>
      {children}
    </div>
  );
}
