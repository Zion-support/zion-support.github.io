import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({ 
  title, 
  description, 
  className = '' 
}: FeatureCardProps) {
  return (
    <div className={`bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 ${className}`}>
      <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
      <p className="text-sm opacity-90 text-white">{description}</p>
    </div>
  );
}