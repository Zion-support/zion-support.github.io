import React from 'react';
<<<<<<< HEAD
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

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

export function CategoryCard({ category, href }: CategoryCardProps) {
const IconComponent = category.icon;

return (
<Link href={href} className="group">
<Card className="h-full bg-zion-blue-dark border-zion-slate hover:border-zion-cyan transition-all duration-200 group-hover:scale-105">
<CardContent className="p-6">
<div className="flex items-center justify-between mb-4">
<div className="p-3 bg-zion-cyan/20 rounded-lg">
<IconComponent className="h-6 w-6 text-zion-cyan" />
</div>
<span className="text-sm text-zion-slate-light bg-zion-blue px-2 py-1 rounded-full">
{category.count} services;
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
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

export function CategoryCard({ title, description, icon, href }: CategoryCardProps) {
  return (
    <Link
      to={href}
      className="group block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200 hover:border-blue-300"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-200 transition-colors duration-200">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
        {title}
      </h3>
      <p className="text-gray-600 text-sm">
        {description}
      </p>
    </Link>
  );
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
}