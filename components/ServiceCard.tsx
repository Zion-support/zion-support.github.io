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
  const getGradientClasses = (from: string, to: string) => {
    const gradients = {
      blue: 'from-blue-500/20 to-blue-600/20',
      purple: 'from-purple-500/20 to-purple-600/20',
      green: 'from-green-500/20 to-green-600/20',
      teal: 'from-teal-500/20 to-teal-600/20',
      pink: 'from-pink-500/20 to-pink-600/20',
    };
    return gradients[from as keyof typeof gradients] || 'from-blue-500/20 to-blue-600/20';
  };

  const getBorderClasses = (color: string) => {
    const borders = {
      blue: 'border-blue-500/30 hover:border-blue-500/50',
      purple: 'border-purple-500/30 hover:border-purple-500/50',
      green: 'border-green-500/30 hover:border-green-500/50',
      teal: 'border-teal-500/30 hover:border-teal-500/50',
      pink: 'border-pink-500/30 hover:border-pink-500/50',
    };
    return borders[color as keyof typeof borders] || 'border-blue-500/30 hover:border-blue-500/50';
  };

  const getTextClasses = (color: string) => {
    const texts = {
      blue: 'text-blue-400 hover:text-blue-300',
      purple: 'text-purple-400 hover:text-purple-300',
      green: 'text-green-400 hover:text-green-300',
      teal: 'text-teal-400 hover:text-teal-300',
      pink: 'text-pink-400 hover:text-pink-300',
    };
    return texts[color as keyof typeof texts] || 'text-blue-400 hover:text-blue-300';
  };

  return (
    <div className={`bg-gradient-to-br ${getGradientClasses(gradientFrom, gradientTo)} backdrop-blur-lg rounded-2xl p-8 border ${getBorderClasses(gradientFrom)} transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl`}>
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
        className={`${getTextClasses(gradientFrom)} font-semibold transition-colors`}
      >
        Learn More →
      </Link>
    </div>
  );
}