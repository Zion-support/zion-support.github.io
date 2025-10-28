'use client';

import React from 'react';

interface DynamicContentShowcaseProps {
  items: Array<{
    id: string;
    title: string;
    description: string;
    image?: string;
  }>;
  className?: string;
}

const DynamicContentShowcase: React.FC<DynamicContentShowcaseProps> = ({
  items,
  className = ''
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {items.map((item) => (
        <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
          {item.image && (
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
          )}
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default DynamicContentShowcase;
