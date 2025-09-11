import React from 'react';

interface CardProps {
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}

export default function Card({ title, description, className = '', children }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ${className}`}>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {children}
    </div>
  );
}