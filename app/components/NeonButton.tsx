import React from 'react';
import { ArrowRight } from 'lucide-react';

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
}

const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  icon
}) => {
  const baseClasses = "relative inline-flex items-center justify-center font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 focus:ring-purple-500 shadow-lg shadow-purple-500/25",
    secondary: "bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 focus:ring-cyan-500 shadow-lg shadow-cyan-500/25",
    accent: "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 focus:ring-blue-500 shadow-lg shadow-blue-500/25"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg rounded-2xl"
  };
  
  const neonGlow = {
    primary: "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-purple-600 before:to-pink-600 before:blur-sm before:opacity-75 before:-z-10",
    secondary: "before:absolute before:inset-0 before:rounded-xl before:bg-cyan-400 before:blur-sm before:opacity-75 before:-z-10",
    accent: "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-blue-600 before:to-cyan-600 before:blur-sm before:opacity-75 before:-z-10"
  };
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${neonGlow[variant]} ${className}`;
  
  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
      {!icon && <ArrowRight className="w-4 h-4 ml-2" />}
    </>
  );
  
  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {content}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={buttonClasses}>
      {content}
    </button>
  );
};

export default NeonButton;