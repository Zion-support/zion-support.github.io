import React from 'react';
<<<<<<< HEAD
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CategoryCardProps {
category: {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType;
  count: number;
};
href: string;
}

interface CategoryCardProps {
  category: Category;
  className?: string;
}

return (
<Link href={href} className="group">
<Card className="h-full bg-zion-blue-dark border-zion-slate hover:border-zion-cyan transition-all duration-200 group-hover:scale-105">
<CardContent className="p-6">
<div className="flex items-center justify-between mb-4">
<div className="p-3 bg-zion-cyan/20 rounded-lg">
<IconComponent className="h-6 w-6 text-zion-cyan" />
</div>
<span className="text-sm text-zion-slate-light bg-zion-blue px-2 py-1 rounded-full">
{category.count} services
</span>
</div>
<h3 className="text-xl font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
{category.name}
</h3>
<p className="text-zion-slate-light text-sm">
{category.description}
</p>
</CardContent>
</Card>
</Link>
);
=======
import Link from 'next/link';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

export function CategoryCard({ title, description, icon, href }: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200 hover:border-blue-300"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 mb-4 text-blue-600 group-hover:text-blue-700 transition-colors">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm">
          {description}
        </p>
      </div>
    </Link>
  );
>>>>>>> pr-22690
}