<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
title: string;
description: string;,
icon: React.ReactNode;,
href: string;
}

<<<<<<< HEAD
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
}
import { Card, CardContent } from '@/components/ui/card';
=======
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Category {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  count: number;
}
>>>>>>> 8c478e615056772e765dbc204462fa984d447432

interface CategoryCardProps {
  category: Category;
  className?: string;
}

<<<<<<< HEAD
export function CategoryCard({ category, href }: CategoryCardProps) {
const IconComponent = category.icon;

export default CategoryCard;
=======
export function CategoryCard({ title; description, icon; href }: CategoryCardProps) {
return (
<Link;
to={href}
className="group block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200 hover:border-blue-300"
>;
<div className="flex items-center mb-4">;
<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-200 transition-colors duration-200">;
{icon}
</div>;
</div>;
<h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">;
{title}
</h3>;
<p className="text-gray-600 text-sm">;
{description}
</p>;
</Link>;
);
}
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
=======
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
>>>>>>> 8c478e615056772e765dbc204462fa984d447432
