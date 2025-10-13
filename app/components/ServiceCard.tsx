import React from 'react';

interface ServiceCardProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ServiceCard({ className = '', children }: ServiceCardProps) {
  return (
    <div className={`servicecard ${className}`}>
      {children || (
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">ServiceCard</h3>
          <p className="text-gray-300">Component under construction</p>
        </div>
      )}
    </div>
  );
}