import React from 'react';

interface CardProps {
  title: string;
  description: string;
  className?: string;
<<<<<<< HEAD
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, className = '', children }) => {
  return (
    <div className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 ${className}`}>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
=======
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      {children}
    </div>
  );
}