import React from 'react';

interface CardProps {
<<<<<<< HEAD
  children?: React.ReactNode;
=======
  children: React.ReactNode;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
    <div 
      className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow ${className}`}
      onClick={onClick}
    >
      {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
      {description && <p className="text-gray-600 mb-4">{description}</p>}
=======
<<<<<<< HEAD
    <div 
      className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ${className}`}
=======
<<<<<<< HEAD
    <div
      className={`bg-white rounded-lg shadow-md p-6 ${className}`}
=======
    <motion.div 
      className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer ${className}`}
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
      onClick={onClick}
    >
      {title && (
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      )}
      {description && (
        <p className="text-gray-600 mb-4">{description}</p>
      )}
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      {children}
    </div>
  );
};

<<<<<<< HEAD
export default Card;
=======
export default Card;
>>>>>>> main
