import React from 'react';

interface PlaceholderProps {
  title?: string;
  className?: string;
}

export default function Placeholder({ title = 'Component', className = '' }: PlaceholderProps) {
  return (
    <div className={`bg-gray-100 p-8 rounded-lg text-center ${className}`}>
      <h3 className="text-lg font-semibold text-gray-600">{title}</h3>
      <p className="text-gray-500 mt-2">This component is being developed</p>
    </div>
  );
}