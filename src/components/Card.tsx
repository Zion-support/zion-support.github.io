import React from 'react';
interface CardProps {
children: React.ReactNode;,
  title?: string;
  description?: string;
  className?: string;
  onClick?: () => void;
}
const Card: React.FC<CardProps> = ({ ,
  children,
  title,
  description,
  className = '', '
  onClick
}) => {
  return (
<div
      className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ${className}`}`
      onClick={onClick}
    >
      {title && (
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>"
      )}
      {description && (
        <p className="text-gray-600 mb-4">{description}</p>"
      )}
      {children}
    </div>
  );
};
export default Card;
