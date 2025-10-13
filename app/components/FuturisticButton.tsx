import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface FuturisticButtonProps {
  href?: string;
  to?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  external?: boolean;
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({
  href,
  to,
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className = '',
  onClick,
  external = false,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25',
    outline: 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900',
    ghost: 'text-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <div>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
      {external && <ExternalLink className="w-4 h-4 ml-2" />}
      {!external && !icon && <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />}
</div>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        onClick={onClick}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default FuturisticButton;
  );
}