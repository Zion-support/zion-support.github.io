import React from "react";

interface NavigationProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Navigation({
  className = "",
  children,
  ...props
}: NavigationProps) {
  return (
    <div className={`navigation-component ${className}`} {...props}>
      {children}
    </div>
  );
}
