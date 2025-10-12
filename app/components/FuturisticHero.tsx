import React from 'react';

interface FuturisticHeroProps {
  className?: string;
  children?: React.ReactNode;
}

export default function FuturisticHero({ 
  className = '',
  children 
}: FuturisticHeroProps) {
  return (
    <div className={`bg-gray-800 rounded-lg p-4 ${className}`}>
      <h3 className="text-white font-semibold mb-2">FuturisticHero</h3>
      {children && <div className="text-gray-300">{children}</div>}
    </div>
  );
}
