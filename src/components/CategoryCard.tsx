import React from 'react';

interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    description: string;
    icon?: string;
    count?: number;
  };
  onClick?: () => void;
}

export function CategoryCard({ category, onClick }: CategoryCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
        {category.count && (
          <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full">
            {category.count}
          </span>
        )}
      </div>
      <p className="text-gray-600">{category.description}</p>
    </div>
  );
}
