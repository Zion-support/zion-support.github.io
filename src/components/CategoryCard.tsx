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

export function CategoryCard({ category, onClick }: CategoryCardProps) {  return (
    <Link
      href={href}
      className="group block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200 hover:border-blue-300"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-200 transition-colors duration-200">
          {icon}
        </div>
      </div>
      <p className="text-gray-600">{category.description}</p>
    </div>  );
}
