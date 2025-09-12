import React from 'react';
import Link from 'next/link';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  className?: string;
}

export default function FeatureCard({ 
  title, 
  description, 
  icon, 
  href, 
  className = '' 
}: FeatureCardProps) {
  return (
    <Link
      href={href}
      className={`group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 ${className}`}
    >
      <div className="text-center">
        <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
          {description}
        </p>
        <div className="mt-6 flex items-center justify-center text-indigo-600 font-semibold group-hover:text-indigo-700">
          Learn More
          <svg className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}