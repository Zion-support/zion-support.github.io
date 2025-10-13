import React from "react";

interface ErrorboundaryProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Errorboundary({
  className = "",
  children,
  ...props
}: ErrorboundaryProps) {
  return (
    <div className={`errorboundary-component ${className}`} {...props}>
      {children}
    </div>
  );
}
