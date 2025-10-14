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
  className = "" 
}: ServiceCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${className}`}>
      {icon && (
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      {href && (
        <a 
          href={href}
          className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
        >
          Learn more →
        </a>
      )}
    </div>
  );
}