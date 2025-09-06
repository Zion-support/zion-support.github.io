import React from 'react';

interface GradientHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;

export function GradientHeading({ title, subtitle, className }: GradientHeadingProps) {
  return (
    <div className={className}>
      <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
