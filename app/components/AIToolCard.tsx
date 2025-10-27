
import React from 'react';
interface AIToolCardProps {
  className?: string;
  children?: React.ReactNode;
}

export default function AIToolCard({ className, children }: AIToolCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className || ''}`}>
      {children}
    </div>
  );
}

AIToolCard.displayName = 'AIToolCard';