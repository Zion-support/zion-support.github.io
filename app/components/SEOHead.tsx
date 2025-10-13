import React from 'react';

interface SEOHeadProps {
  className?: string;
  children?: React.ReactNode;
}

export default function SEOHead({ className = '', children, ...props }: SEOHeadProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
