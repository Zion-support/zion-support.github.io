import React from 'react';

interface CardProps {
  title: string;
  description: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, description, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;