import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4fed

<<<<<<< HEAD
interface FuturisticButtonProps {
=======
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
=======

import { ExternalLink } from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c

interface FuturisticButtonProps {
  href?: string;
  to?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
<<<<<<< HEAD
  icon?: React.ReactNode;
  children: React.ReactNode;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======
  icon?: React.ReactNode;,
    children: React.ReactNode;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
  className?: string;
  onClick?: () => void;
  external?: boolean;
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default function FuturisticButton({ className = '', children }: FuturisticButtonProps) {
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
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
  
  const variantClasses = {,
    primary: 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25',
      outline: 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900',
      ghost: 'text-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300'
  };
  
  const sizeClasses = {,
    sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
  };
<<<<<<< HEAD
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
      {external && <span className="w-4 h-4 ml-2">↗</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}>
  className={classes}>
  onClick={onClick}>
  target={external ? '_blank' : undefined}>
  rel={external ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  if (to) {
    return (
      <a>
  href={to}>
  className={classes}>
  onClick={onClick}
      >
        {content}
      </a>
    );
  }

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
  return (
    <div className={`${className}`}>
=======

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <div>
      {icon && <span className="mr-2">{icon}</span>}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
      {children}
      {external && <ExternalLink className="w-4 h-4 ml-2" />}
      {!external && !icon && <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />}
</div>
  );
<<<<<<< HEAD
}
=======
export default function FuturisticButton({ className = '', children, ...props }: FuturisticButtonProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======

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
    <button>
  className={classes}>
  onClick={onClick}
    >
      {content}
    </button>
  );
};

<<<<<<< HEAD
export default FuturisticButton;
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
=======
export default $1;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-f847
