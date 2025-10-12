import React from 'react';
import { ArrowRight } from 'lucide-react';

interface NeonButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  className?: string;
}

const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon,
  className = ''
}) => {
  const baseClasses = "relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 group overflow-hidden";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const variantClasses = {
    primary: "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-purple-500/25",
    secondary: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-lg hover:shadow-cyan-500/25",
    accent: "bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-green-500/25"
  };

  const neonEffect = "before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-purple-600 before:to-pink-600 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-20 before:blur-sm";

  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${neonEffect} ${className}`;

  const content = (
    <>
      <span className="relative z-10 flex items-center">
        {children}
        {icon && <span className="ml-2">{icon}</span>}
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg blur-sm"></div>
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