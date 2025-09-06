import React from 'react';

interface CardProps {
<<<<<<< HEAD
  title: string;
  description: string;
=======
  children?: React.ReactNode;
  title?: string;
  description?: string;
>>>>>>> cursor/expand-services-advertise-and-build-project-5c86
  className?: string;
<<<<<<< HEAD
  children?: React.ReactNode;
}

<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-5c86
      {children}
    </div>
  );
}