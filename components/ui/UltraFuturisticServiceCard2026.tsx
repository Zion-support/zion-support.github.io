import React from 'react';

interface UltraFuturisticServiceCard2026Props {
  id: string;
  title: string;
  description: string;
  features: string[];
  price?: string | { monthly?: number; yearly?: number; currency?: string };
  icon?: React.ReactNode;
}

export default function UltraFuturisticServiceCard2026({
  id,
  title,
  description,
  features,
  price,
  icon
}: UltraFuturisticServiceCard2026Props) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-400 text-sm">• {feature}</li>
        ))}
      </ul>
      {price && (
        <div className="text-blue-400 font-semibold">
          {typeof price === 'string' ? price : `${price.currency || '$'}${price.monthly || 0}/month`}
        </div>
      )}
    </div>
  );
}