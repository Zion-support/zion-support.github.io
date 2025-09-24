import React from 'react';
"use client";

import { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  href?: string;
  features?: string[];
}

export default function ServiceCard({
  icon,
  title,
  description,
  color,
  href = '#',
  features = [],
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer transform hover:-translate-y-1'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && href !== '#') {
          window.open(href, '_blank');
        }
      }}
      onClick={() => href !== '#' && window.open(href, '_blank')}
    >
      <div className='flex items-center mb-4'>
        <div
          className={`p-2 rounded-lg ${color} mr-3 transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}
        >
          {icon}
        </div>
        <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
          {title}
        </h3>
      </div>
      <p className='text-gray-600 dark:text-gray-300 mb-4'>{description}</p>
      {features.length > 0 && (
        <ul className='space-y-2 mb-4'>
          {features.map((feature, index) => (
            <li
              key={index}
              className='flex items-center text-sm text-gray-600 dark:text-gray-300'
            >
              <span className='w-1.5 h-1.5 bg-blue-500 rounded-full mr-2'></span>
              {feature}
            </li>
          ))}
        </ul>
      )}

      <div className='flex items-center text-blue-600 group-hover:text-blue-700 transition-colors'>
        <span className='text-sm font-medium'>Learn more</span>
        <ArrowRightIcon
          className={`h-4 w-4 ml-1 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}
        />
      </div>
    </div>
  );
}
