import React from 'react';

interface FuturisticCardProps {
  className?: string;
  children?: React.ReactNode;
}

export default function FuturisticCard({ className = '', children, ...props }: FuturisticCardProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
