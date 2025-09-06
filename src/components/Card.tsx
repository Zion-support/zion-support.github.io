import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
  onClick?: () => void;
}

<<<<<<< HEAD
const Card: React.FC<CardProps> = ({ title, description, className = '', children }) => {
  return (
    <div className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 ${className}`}>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      {children}
    </div>
  );
}
=======
const Card: React.FC<CardProps> = ({ 
  children, 
  title, 
  description, 
  className = '', 
  onClick 
}) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ${className}`}
      onClick={onClick}
    >
      {title && (
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      )}
      {description && (
        <p className="text-gray-600 mb-4">{description}</p>
      )}
      {children}
    </div>
  );
};

<<<<<<< HEAD
export default Card;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export default Card;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
