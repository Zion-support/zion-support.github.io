import React from 'react';
import React from "react";
interface SecurityEnhancerProps;
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;

interface SecurityEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function SecurityEnhancer({ className = '', children }: SecurityEnhancerProps) {
const SecurityEnhancer: React.FC<SecurityEnhancerProps> = (
  children,
  className = "",
  title,
  description,
) =>
const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({
//   children,
  className = "",
//   title,
//   description,
}) => {
  return (
    <div className={`${className}`}>
      {children}
  </div>
</div>
return (
    <div className={`${className}`}>
      {children}
  );
}
