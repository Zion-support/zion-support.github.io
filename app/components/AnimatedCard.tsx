import React from 'react';

interface AnimatedCardProps {
  className?: string;
  children?: React.ReactNode;
}

export default function AnimatedCard({ className = '', children }: AnimatedCardProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
