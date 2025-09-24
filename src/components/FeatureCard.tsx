import React from 'react';

export interface FeatureCardProps {
  title: string;
  description: string;
  icon?: string;
  href?: string;
}

export function FeatureCard({ title, description, icon, href }: FeatureCardProps) {
  const content = (
    <div className="bg-white rounded-xl shadow p-6 h-full">
      <div className="text-3xl mb-3">{icon ?? '✨'}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:shadow-md transition-shadow">{content}</a>
  ) : (
    content
  );
}

export default FeatureCard;