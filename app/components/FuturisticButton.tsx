import React from 'react';

interface FuturisticButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function FuturisticButton({ className = '', children, onClick }: FuturisticButtonProps) {
  return (
    <button 
      className={`px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
