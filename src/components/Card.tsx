import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
<<<<<<< HEAD:src/components/Card.tsx
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      {children}
    </div>
  );
}
=======
  hover?: boolean;
  glass?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
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
      {children}
    </div>
  );
};

export default Card;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/Card.tsx
