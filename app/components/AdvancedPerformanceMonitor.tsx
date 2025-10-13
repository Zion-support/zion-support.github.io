import React from "react";

interface AdvancedperformancemonitorProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Advancedperformancemonitor({
  className = "",
  children,
  ...props
}: AdvancedperformancemonitorProps) {
  return (
    <div
      className={`advancedperformancemonitor-component ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
