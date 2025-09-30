import React from 'react';
import Link from 'next/link';

interface FeaturedServiceCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  href: string;
  popular?: boolean;
}

export default function FeaturedServiceCard({
  title,
  description,
  price,
  features,
  href,
  popular = false
}: FeaturedServiceCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200 relative ${popular ? 'ring-2 ring-blue-500' : ''}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="text-2xl font-bold text-blue-600 mb-4">{price}</div>
      </div>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      
      <Link
        href={href}
        className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Learn More
      </Link>
    </div>
  );
}