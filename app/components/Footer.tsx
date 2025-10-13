import React, { useMemo } from "react";
interface FooterProps {
  className?: string;
  children?: React.ReactNode;
}
export default function Footer({ className = '', children, ...props }: FooterProps) {
  return (
    <div className={`footer-component ${className}`} {...props}>
      {children}
    </div>
  );
}