<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';

interface NeonButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
=======
<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom'

interface NeonButtonProps {
  children: React.ReactNode
  to?: string
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'accent''
  size?: 'sm' | 'md' | 'lg''
  className?: string
>>>>>>> origin/main
}

const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary','
  size = 'md','
  className = '''
}) => {
<<<<<<< HEAD
  const baseClasses = 'relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2''
=======
<<<<<<< HEAD
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700 focus:ring-purple-500 shadow-lg shadow-purple-500/25",
    secondary: "bg-gradient-to-r from-slate-600 to-slate-700 text-white hover:from-slate-700 hover:to-slate-800 focus:ring-slate-500 shadow-lg shadow-slate-500/25",
    accent: "bg-gradient-to-r from-pink-600 to-rose-600 text-white hover:from-pink-700 hover:to-rose-700 focus:ring-pink-500 shadow-lg shadow-pink-500/25"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
=======
  const baseClasses = 'relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2'
>>>>>>> origin/main
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 focus:ring-blue-500','
    secondary: 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 focus:ring-purple-500','
    accent: 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 focus:ring-cyan-500''
  }
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm','
    md: 'px-6 py-3 text-base','
    lg: 'px-8 py-4 text-lg''
  }
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}``
  
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank""
        rel="noopener noreferrer""
      >
        {children}
      </a>
    )
<<<<<<< HEAD
=======
>>>>>>> origin/main
  }
  
>>>>>>> origin/main
  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
<<<<<<< HEAD
    );
  }
  
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default NeonButton;
=======
    )
  return (
    <button
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  )
<<<<<<< HEAD
export default NeonButton
=======
}

export default NeonButton
=======
import React from "react";

const NeonButton = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">NeonButton</h2>
      <p>This component is under construction.</p>
    </div>
  );
};

export default NeonButton;
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
