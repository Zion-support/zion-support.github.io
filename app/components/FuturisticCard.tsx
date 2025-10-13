'use client';
import React from 'react';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'gradient' | 'glass';
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({ 
  children, 
  className = '', 
  variant = 'default' 
}) => {
  const baseClasses = 'rounded-lg p-6 border border-gray-200';
  const variantClasses = {
    default: 'bg-white shadow-lg',
    gradient: 'bg-gradient-to-br from-blue-500 to-purple-600 text-white',
    glass: 'bg-white/10 backdrop-blur-md border-white/20'
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default FuturisticCard;