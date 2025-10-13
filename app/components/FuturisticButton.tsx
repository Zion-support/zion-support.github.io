import React from 'react';
<<<<<<< HEAD
import { ArrowRight } from 'lucide-react';
=======
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
>>>>>>> cursor/analyze-improve-and-deploy-application-c573

interface FuturisticButtonProps {
  children: React.ReactNode;
  href?: string;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
<<<<<<< HEAD
=======
  icon?: LucideIcon;
>>>>>>> cursor/analyze-improve-and-deploy-application-c573
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({
  children,
  href,
  to,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  disabled = false,
  type = 'button'
}) => {
<<<<<<< HEAD
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white shadow-lg hover:shadow-cyan-500/25',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-600 hover:border-cyan-500',
    outline: 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white',
    ghost: 'text-gray-300 hover:text-white hover:bg-white/10'
=======
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-lg hover:shadow-cyan-500/25 focus:ring-cyan-500',
    secondary: 'bg-slate-800 text-white border border-slate-600 hover:bg-slate-700 focus:ring-slate-500',
    outline: 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 focus:ring-cyan-500',
    ghost: 'text-gray-300 hover:text-white hover:bg-white/10 focus:ring-white'
>>>>>>> cursor/analyze-improve-and-deploy-application-c573
  };
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
<<<<<<< HEAD
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;
  
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        <ArrowRight className="w-4 h-4 ml-2" />
      </a>
=======
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  const content = (
    <>
      {Icon && <Icon className="w-4 h-4 mr-2" />}
      {children}
    </>
  );
  
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }
  
  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
>>>>>>> cursor/analyze-improve-and-deploy-application-c573
    );
  }
  
  return (
<<<<<<< HEAD
    <button onClick={onClick} className={classes} disabled={disabled}>
      {children}
      <ArrowRight className="w-4 h-4 ml-2" />
=======
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      {content}
>>>>>>> cursor/analyze-improve-and-deploy-application-c573
    </button>
  );
};

export default FuturisticButton;
