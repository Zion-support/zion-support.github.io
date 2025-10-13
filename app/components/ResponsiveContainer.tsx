import React from "react";

interface ResponsivecontainerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Responsivecontainer({
  className = "",
  children,
  ...props
}: ResponsivecontainerProps) {
  return (
    <div className={`responsivecontainer-component ${className}`} {...props}>
      {children}
    </div>
  );
}
