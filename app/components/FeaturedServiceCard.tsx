import React from 'react';
import { Link } from 'react-router-dom';

interface FeaturedServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features: string[];
  href: string;
  popular?: boolean;
}

export default function FeaturedServiceCard({ 
  title, 
  description, 
  icon, 
  features, 
  href, 
  popular = false 
}: FeaturedServiceCardProps) {
  return (
    <div className={`bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200 relative ${popular ? 'ring-2 ring-blue-500' : ''}`}>
      {popular && (
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          POPULAR
        </div>
      )}
      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
        <span className="text-white text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="text-sm text-gray-600 space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index}>• {feature}</li>
        ))}
      </ul>
      <div className="flex justify-end">
        <Link href={href} className="text-blue-600 font-semibold hover:text-blue-700">
          Learn More →
        </Link>
      </div>
    </div>
  );
}