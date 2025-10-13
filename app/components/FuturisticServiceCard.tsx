import React from 'react';

interface FuturisticServiceCardProps {
  className?: string;
  children?: React.ReactNode;
}

export default function FuturisticServiceCard({ className = '', children }: FuturisticServiceCardProps) {
  return (
    <div className={`futuristicservicecard ${className}`}>
      {children || (
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">FuturisticServiceCard</h3>
          <p className="text-gray-300">Component under construction</p>
        </div>
      )}
    </div>
  );
}