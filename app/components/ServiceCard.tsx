'use client';
import React from 'react';
interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}
export default function ServiceCard({
  title,
  description,
  icon,
  className = ''
}: ServiceCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${className}`}>
      {icon && (
        <div className="text-blue-600 mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}