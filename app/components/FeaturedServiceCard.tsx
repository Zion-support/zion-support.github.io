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
<<<<<<< HEAD
    <div className={`relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-2 ${
      popular ? 'border-blue-500 ring-2 ring-blue-100' : 'border-gray-200'
    } group`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm2 2a1 1 0 000 2h6a1 1 0 100-2H5z" clipRule="evenodd" />
        </svg>
      </div>
      
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>
        <div className="text-3xl font-bold text-blue-600 mb-6">
          {price}
        </div>
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link
        href={href}
        className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Learn More
      </Link>
=======
    <div className={`bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200 relative ${popular ? 'ring-2 ring-blue-500' : ''}`}>
      {popular && (
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          POPULAR
        </div>
      )}
      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
        <span className="text-white text-2xl">⚡</span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="text-sm text-gray-600 space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index}>• {feature}</li>
        ))}
      </ul>
      <div className="flex justify-between items-center">
        <div className="text-blue-600 font-bold">{price}</div>
        <Link href={href} className="text-blue-600 font-semibold hover:text-blue-700">
          Learn More →
        </Link>
      </div>
>>>>>>> origin/cursor/create-and-deploy-new-content-461f
    </div>
  );
}