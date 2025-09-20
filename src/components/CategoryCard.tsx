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

interface CategoryCardProps {
category: {
id: string;
name: string;
description: string;,
icon: React.ComponentType;,
count: number;
};
href: string;
}

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
