import React from 'react';

interface FooterProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Footer({ className = '', children, ...props }: FooterProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
