import React from 'react';

interface FuturisticButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function FuturisticButton({ className = '', children, ...props }: FuturisticButtonProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
