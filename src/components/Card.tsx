import React from 'react';
interface CardProps  {children: React.ReactNode;
  className?: string;
}const Card: React.FC<CardProps> = ({ children, className = '' }) => {return (<div;
      className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ${className}`}
    >;
  title?: string;
  description?: string;
  className?: string;
  onClick?: () => void;
<<<<<<< HEAD
}

const Card: React.FC<CardProps> = ({ 
  children, 
  title, 
  description, 
  className = '', 
  onClick 
}) => {
  return (
    <motion.div 
      className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer ${className}`}
      onClick={onClick}
    >
      {title && (
        <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      )}
      {description && (
        <p className="text-gray-300 mb-4">{description}</p>
      )}
=======
}const Card: React.FC<CardProps> = ({children,title,description,className = '',onClick;
}) => {return (<div;
      className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ${className}`}
      onClick={onClick}
    >;
      {title && <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>}
      {description && <p className="text-gray-600 mb-4">{description}</p>}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
      {children}
    </div>;
  )}export default Card;