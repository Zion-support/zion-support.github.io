import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Category {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  count: number;
}

interface CategoryCardProps {
  category: Category;
  className?: string;
}

export function CategoryCard({ category, className = '' }: CategoryCardProps) {
  return (
    <Card className={`bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-200 ${className}`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="text-blue-400">
            {category.icon}
          </div>
          <span className="text-sm text-gray-300">
            {category.count} items
          </span>
        </div>
        <CardTitle className="text-white text-lg">
          {category.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300 text-sm">
          {category.description}
        </p>
      </CardContent>
    </Card>
  );
}