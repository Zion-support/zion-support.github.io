import React from 'react';

interface ButtonProps {_children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;}

export default function Button(_{_children, _variant = 'primary', _size = 'md', _className = '', _onClick, _type = 'button', _disabled = false}: ButtonProps) {_const _baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900';
  
  const _variantClasses = {
    primary: 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 focus:ring-cyan-500', _secondary: 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30 focus:ring-white/50', _outline: 'bg-transparent text-white border border-white/20 hover:bg-white/10 hover:border-white/30 focus:ring-white/50'};
  
  const _sizeClasses = {_sm: 'px-3 py-1.5 text-sm', _md: 'px-4 py-2 text-base', _lg: 'px-6 py-3 text-lg'};
  
  const _disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 transform';
  
  const _classes = `${_baseClasses} ${_variantClasses[variant]} ${_sizeClasses[size]} ${_disabledClasses} ${_className}`;
  
  return (
    <button
      type={_type}
      className={_classes}
      onClick={_onClick}
      disabled={_disabled}
    >
      {_children}
    </button>
  );
}