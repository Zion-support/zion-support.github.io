import React from 'react';

interface CategoryCardProps {
  title: string;
  description?: string;
  href: string;
  icon?: React.ReactNode;
}

export default function CategoryCard({ title, description, href, icon }: CategoryCardProps) {
  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-semibold">{title}</h3>
      {description && <p className="text-gray-600">{description}</p>}
      <a href={href} className="text-blue-600 hover:underline">Learn more</a>
    </div>
  );
}