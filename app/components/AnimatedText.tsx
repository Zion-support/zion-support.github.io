import React from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  return (
    <span className={`animate-pulse ${className}`}>
      {text}
    </span>
  );
}