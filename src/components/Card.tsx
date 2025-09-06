import React from 'react';

interface CardProps {

  title: string;
  description: string;

  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
const Card: React.FC<CardProps> = ({
  children,
  title,
  description,
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
      {title && <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>}
      {description && <p className="text-gray-300 mb-4">{description}</p>}
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
      {children}
    </div>
  );
};

export default Card;