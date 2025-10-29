import React from 'react';

interface AnimatedTextProps {
  children: React.ReactNode;
}

export default function AnimatedText({ children }: AnimatedTextProps) {
  return (
    <div>
      {children}
    </div>
  );
}