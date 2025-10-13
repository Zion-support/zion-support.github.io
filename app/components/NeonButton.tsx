import React from 'react';
import { Link } from 'react-router-dom';

interface NeonButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = ''
}) => {
  const baseClasses = "relative inline-flex items-center justify-center font-semibold transition-all duration-300 group overflow-hidden";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const variantClasses = {
    primary: "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 shadow-cyan-500/50",
    secondary: "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-purple-500/50",
    accent: "bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600 shadow-yellow-500/50"
  };

  const neonEffect = "shadow-lg hover:shadow-xl hover:shadow-current/50 hover:scale-105";
  const glowEffect = "before:absolute before:inset-0 before:bg-gradient-to-r before:from-current before:to-current before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-20 before:blur-sm";

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${neonEffect} ${glowEffect} ${className}`;

  const buttonContent = (
    <>
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
    </>
  );

  if (href) {
    return (
      <Link to={href} className={classes}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {buttonContent}
    </button>
  );
};

export default NeonButton;
