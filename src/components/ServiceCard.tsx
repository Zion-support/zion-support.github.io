import React from 'react';

interface ServiceCardProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ServiceCard({ 
  className = '', 
  children 
}: ServiceCardProps) {
  return (
    <div className={`servicecard ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">
            Service Card
          </h3>
          <p className="text-gray-600">
            Component content will be added here.
          </p>
        </div>
      )}
    </div>
  );
}