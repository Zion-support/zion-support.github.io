import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children, 
  title, 
  description, 
  className = '', 
  onClick 
}) => {
  return (
    <div 
      className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer ${className}`}
      onClick={onClick}
    >
      {title && (
        <h3 className="text-xl font-bold text-white mb-3">
          {title}
        </h3>
      )}
      
      {description && (
        <p className="text-gray-300 mb-4">
          {description}
        </p>
      )}
      
      {children}
    </div>
  );
};

export default Card;