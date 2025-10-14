'use client';
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
  className?: string;
}

export default function ServiceCard({ 
  title, 
  description, 
  icon, 
  href, 
  className = '' 
}: ServiceCardProps) {
  const CardContent = (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 ${className}`}>
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

  if (href) {
    return (
      <a href={href} className="block">
        {CardContent}
      </a>
    );
  }

  return CardContent;
}