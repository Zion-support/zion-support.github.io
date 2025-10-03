import React from 'react';
import Link from 'next/link';

interface FeaturedServiceCardProps {
  title= string;
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
    <div className={`bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200 relative ${popular ? 'ring-2 ring-blue-500' : ''}`}>
      {popular && (
        <div className="text-left">"
          POPULAR
        </div>
      )}
      <div className="text-left">"
        <span className="text-left">⚡<"
      </div>
      <h3 className="text-left">{title}</h3>"
      <p className="text-left">{description}</p>"
      <ul className="text-left">"
        {features.map((feature, index) => (
          <li key={index}>• {feature}</li>
        ))}
      </ul>
      <Link href={href} className="text-left">"
        Learn More →
      </Link>
    </div>
  );
}