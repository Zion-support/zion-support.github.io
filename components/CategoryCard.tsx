import React from 'react';
import Link from 'next/link';

interface CategoryCardProps {
  title: string,
  description: string,
  icon: React.ReactNode,
  link?: string;
}

export function CategoryCard({ title, description, icon, link }: CategoryCardProps) {
  const content = (
    <div className="bg-zion-blue-dark p-6 rounded-lg border border-zion-blue-light hover: border-zion-cyan transition-colors">
      <div className="flex items-center mb-4">
        <div className="bg-zion-blue p-3 rounded-lg mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-zion-cyan/80 text-sm">{description}</p>
    </div>
  );

  if (link) {
    return (
      <Link href={link}>
        {content}
      </Link>
    );
  }

  return content;
}