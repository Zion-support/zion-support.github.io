import React from 'react';

interface ContentpromotionbannerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Contentpromotionbanner({ className = '', children }: ContentpromotionbannerProps) {
  return (
    <div className={`ContentPromotionBanner-component ${className}`}>
      {children}
    </div>
  );
}