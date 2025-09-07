:src/components/GradientHeading.tsx
import React from 'react';

interface GradientHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function GradientHeading({ title, subtitle, className = '' }: GradientHeadingProps) {
  return (
    <div className={`${className}`}>
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {title}
        </span>
      </h1>
      {subtitle && (
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

