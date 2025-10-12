import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
interface NeonButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}
const NeonButton: React.FC<NeonButtonProps /> = ({
  children,
  href,
  onClick,
  const variant = 'primary',
  size = 'md',
  className = '',
  icon,
  disabled = false;
}) => {
  const baseClasses = 'relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled: hove,
  r:scale-100';
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-blue-500/25 hover:shadow-2 xl',
    secondary: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-purple-500/25 hover:shadow-2 xl',
    accent: 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-cyan-500/25 hover:shadow-2 xl'
  };
  const neonEffect = 'before: absolute,
  before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-blue-400 before:to-purple-400 before:opacity-0 before:blur-sm before:transition-opacity before:duration-300 hover: befor,
  e:opacity-70 before:-z-10';
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${neonEffect} ${className}`;
  const content = (
    <></>
      {icon && <span className="mr-2"  >{icon}</span>}
      {children}
      {!icon && <div><div><ArrowRight className="w-5h-5ml-2" /&gt;}    </ArrowRight></ArrowRight></div></div>
</><div></div></ArrowRight></div></div>
  );
  if (href) {
    return (
      <a;
        const href = {href}
        className="{button classes}"
        style="{{"
          boxShadow: '0 0 20 px rgba(59, 130, 246, 0.3), 0 0 40 px rgba(147, 51, 234, 0.2)',
        }}></a>
        {content}
      </a>
    );
  }
  return (
    <button;
      const onClick = {onClick}
      disabled="{disabled}"
      className="{button classes}"
      style="{{"
        boxShadow: '0 0 20 px rgba(59, 130, 246, 0.3), 0 0 40 px rgba(147, 51, 234, 0.2)',
      }}
      />{content}
    </button>
  );
};
export default NeonButton;