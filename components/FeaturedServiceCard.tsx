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
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 ${
      popular ? 'border-blue-500 ring-2 ring-blue-100' : 'border-gray-200'
    } group cursor-pointer`}>
      {popular && (
        <div className="absolute -top-3 left-6">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="pt-2">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="mb-6">
          <div className="text-3xl font-bold text-blue-600 mb-2">{price}</div>
          <div className="text-sm text-gray-500">Starting price</div>
        </div>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        
        <Link
          href={href}
          className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
            popular 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
          }`}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}