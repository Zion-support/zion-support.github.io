import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  description,
  icon: Icon,
  href
}) => {
  return (
    <Link href={href}>
      <Card className="bg-zion-blue-dark border-zion-blue-light hover:border-zion-cyan transition-all duration-300 group hover:shadow-lg">
        <CardContent className="p-6 text-center">
          <div className="mb-4 flex justify-center">
            <Icon className="w-12 h-12 text-zion-cyan group-hover:text-zion-cyan-light transition-colors" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
            {title}
          </h3>
          <p className="text-zion-slate-light text-sm">
            {description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};