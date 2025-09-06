import React from 'react';

interface CardProps {
  title: string;
  description: string;
  icon?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  className = ''
}) => {
  return (
    <div className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 ${className}`}>
      {icon && (
        <div className="text-4xl mb-4 text-center">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default Card;