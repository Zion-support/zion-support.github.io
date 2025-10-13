import React from 'react';

interface AnimatedTextProps {
  className?: string;
  children?: React.ReactNode;
}

export default function AnimatedText({ className = '', children }: AnimatedTextProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}