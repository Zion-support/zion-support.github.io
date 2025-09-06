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
<<<<<<< HEAD
    <motion.div 
      className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer ${className}`}
=======
    <div 
      className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ${className}`}
>>>>>>> pr-12243
      onClick={onClick}
    >
      {title && <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>}
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      {children}
    </div>
  );
};

<<<<<<< HEAD
export default Card;
=======
export default Card;
>>>>>>> pr-12243
