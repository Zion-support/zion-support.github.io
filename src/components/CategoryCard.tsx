import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    description: string;
    icon: React.ReactNode;
    count: number;
  };
  className?: string;
}

export function CategoryCard({ category, className }: CategoryCardProps) {
  return (
    <Card className={`cursor-pointer hover:shadow-lg transition-shadow ${className}`}>
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="text-blue-600 mr-3">
            {category.icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
        </div>
        <p className="text-gray-600 mb-4">{category.description}</p>
        <div className="text-sm text-blue-600 font-medium">
          {category.count} services
        </div>
      </CardContent>
    </Card>
  );
}

export default CategoryCard;origin/main
