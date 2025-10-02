import React from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
  features: string[];
  gradientFrom: string;
  gradientTo: string;
}

export default function ServiceCard({ 
  title, 
  description, 
  icon, 
  link, 
  features,
  gradientFrom,
  gradientTo
}: ServiceCardProps) {
  return (
    <div className={`bg-gradient-to-br from-${gradientFrom}/20 to-${gradientTo}/20 backdrop-blur-lg rounded-2xl p-8 border border-${gradientFrom}/30 hover:border-${gradientFrom}/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-${gradientFrom}/30`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-300 text-sm flex items-center gap-2">
            <span className="text-green-400">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      
      <Link 
        href={link} 
        className={`text-${gradientFrom}-400 hover:text-${gradientFrom}-300 font-semibold transition-colors`}
      >
        Learn More →
      </Link>
    </div>
  );
}