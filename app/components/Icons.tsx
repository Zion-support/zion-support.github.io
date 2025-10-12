import React from 'react';

interface IconsProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Icons({ 
  className = '',
  children 
}: IconsProps) {
  return (
    <div className={`bg-gray-800 rounded-lg p-4 ${className}`}>
      <h3 className="text-white font-semibold mb-2">Icons</h3>
      {children && <div className="text-gray-300">{children}</div>}
    </div>
  );
}
