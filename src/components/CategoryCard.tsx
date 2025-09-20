import React from 'react';
import Link from 'next/link';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  count?: number;
}

export function CategoryCard({ title, description, icon, href, count }: CategoryCardProps) {
  return (
    <Link href={href} className="block">
      <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
        <div className="flex items-center mb-4">
          <div className="text-blue-600 mr-3">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        {count && (
          <div className="text-sm text-blue-600 font-medium">
            {count} items
          </div>
        )}
      </div>
    </Link>
  );
}

export default CategoryCard;