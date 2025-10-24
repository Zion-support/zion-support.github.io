import React, { memo } from 'react';

interface AIToolCardProps {
  title: string;
  description: string;
  link: string}

const AIToolCard: React.FC<AIToolCardProps> = memo(({ title, description, link }) => {
  return (
    <article className="bg-whitep-4 rounded-lgshadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <h3 className="text-lgfont-semiboldtext-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-smmb-3 leading-relaxed">
        {description}
      </p>
      <a 
        href={link}
        className="text-blue-600 hover:text-blue-800 text-smfont-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-1 py-1 inline-block transition-colors"
        aria-label={`Try ${title} tool`}
      >
        Try Now →
      </a>
    </article>
  )});

AIToolCard.displayName = 'AIToolCard';

export default AIToolCard;