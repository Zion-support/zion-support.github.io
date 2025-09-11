import React from 'react';
import Link from 'next/link';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  href: string;
  color: string;
}

export function CategoryCard({
  title,
  description,
  icon: Icon,
  href,
  color,
}: CategoryCardProps) {
  return (
    <Link href={href} className='group'>
      <div className='bg-slate-800 rounded-2xl p-6 hover:bg-slate-700 transition-all duration-300 h-full'>
        <div
          className={`w-16 h-16 bg-gradient-to-r ${color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className='w-8 h-8 text-white' />
        </div>
        <h3 className='text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300'>
          {title}
        </h3>
        <p className='text-gray-300 group-hover:text-gray-200 transition-colors duration-300'>
          {description}
        </p>
      </div>
    </Link>
  );
}
