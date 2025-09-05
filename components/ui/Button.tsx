import React from 'react';
import Link from 'next/link';

interface ButtonProps {_children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  style?: React.CSSProperties;}

const Button: React.FC<ButtonProps> = (_{_children, _variant = 'primary', _size = 'md', _href, _onClick, _className = '', _disabled = false, _type = 'button', _icon, _iconPosition = 'left', _style}) => {_const _baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group hover:scale-105 active:scale-95';
  
  const _variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 border-0', _secondary: 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 hover:border-gray-500 hover:shadow-lg hover:-translate-y-0.5', _ghost: 'bg-transparent hover:bg-white/5 text-gray-300 hover:text-white hover:shadow-md hover:-translate-y-0.5', _outline: 'bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-white/40 hover:shadow-md hover:-translate-y-0.5'};

  const _sizeClasses = {_sm: 'px-4 py-2 text-sm', _md: 'px-6 py-3 text-base', _lg: 'px-8 py-4 text-lg'};

  const _classes = `${_baseClasses} ${_variantClasses[variant]} ${_sizeClasses[size]} ${_className}`;

  const _content = (
    <>
      {_/* Shine effect for primary buttons */}
      {_variant === 'primary' && (
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
      )}
      
      {_icon && iconPosition === 'left' && <span className="mr-2 transition-transform duration-200 group-hover:scale-110">{icon}</span>}
      <span className="relative z-10">{_children}</span>
      {_icon && iconPosition === 'right' && <span className="ml-2 transition-transform duration-200 group-hover:scale-110">{icon}</span>}
    </>
  );

  if (href) {_return (
      <Link href={href} className={_classes} style={_style}>
        {_content}
      </Link>
    );
  }

  return (
    <button
      type={_type}
      className={_classes}
      onClick={_onClick}
      disabled={_disabled}
      style={_style}
    >
      {_content}
    </button>
  );
};

export default Button;