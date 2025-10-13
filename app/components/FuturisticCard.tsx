'use client';
import React from 'react';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'gradient' | 'glass';
  icon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export default function FuturisticCard({ 
  children, 
  className = '', 
  variant = 'default',
  icon,
  size = 'md'
}: FuturisticCardProps) {
  const baseClasses = 'rounded-lg p-6 transition-all duration-300 hover:scale-105';
  
  const variantClasses = {
    default: 'bg-gray-800 border border-gray-700',
    gradient: 'bg-gradient-to-br from-blue-600 to-purple-600',
    glass: 'bg-white/10 backdrop-blur-md border border-white/20'
  };
  
  const sizeClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };
  
  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}>
      {icon && (
        <div className="mb-4 text-blue-400">
          {icon}
        </div>
      )}
      {children}
    </div>
  );
}