import React from 'react';

interface CardProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

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
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
