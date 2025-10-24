import React, { memo } from 'react';

interface AIToolCardProps {
  title: string;
  description: string;
  link: string;
}

const AIToolCard: React.FC<AIToolCardProps> = memo(({ title, description, link }) => {
  return (
    <div className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors">
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <a 
        href={link} 
        className="text-cyan-400 hover:text-cyan-300 transition-colors"
      >
        Learn More →
      </a>
    </div>
  );
});

AIToolCard.displayName = 'AIToolCard';

export default AIToolCard;