import React from "react";

interface FuturisticbackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Futuristicbackground({
  className = "",
  children,
  ...props
}: FuturisticbackgroundProps) {
  return (
    <div className={`futuristicbackground-component ${className}`} {...props}>
      {children}
    </div>
  );
}
