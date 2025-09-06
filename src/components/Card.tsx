import React from 'react';

interface CardProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  icon?: string;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  description,
  icon,
  className = '',
  hover = true,
  glass = true,
}) => {
  const baseClasses = 'rounded-xl p-6 transition-all duration-300';
  const hoverClasses = hover ? 'transform hover:scale-105 hover:shadow-xl' : '';
  const glassClasses = glass ? 'bg-white/10 backdrop-blur-sm border border-white/20' : 'bg-slate-800';
  
  const classes = `${baseClasses} ${hoverClasses} ${glassClasses} ${className}`;
  
  return (
    <div className={classes}>
      {icon && <div className="text-4xl mb-4">{icon}</div>}
      {title && <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>}
      {description && <p className="text-gray-300 mb-4">{description}</p>}
      {children}
    </div>
  );
};

export default Card;