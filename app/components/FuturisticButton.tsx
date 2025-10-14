<<<<<<< HEAD
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface FuturisticButtonProps {
  children: React.ReactNode;
  href?: string;
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  loading?: boolean;
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad
const FuturisticButton: React.FC<FuturisticButtonProps> = ({ 
  children, 
  className = '',''
  variant = 'primary',''
  size = 'md',''
  icon,
<<<<<<< HEAD
  onClick,)
  type = 'button''}) => {';
const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2'';
const variantClasses = {

    primary: "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 focus:ring-blue-500",';"
    secondary: "bg-white/10 text-white border border-white/20 hover:bg-white/20 focus:ring-white/50",';
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-500'';
  }";
const sizeClasses = { sm: "px-4 py-2 text-sm",';"
    md: "px-6 py-3 text-base",';
    lg: 'px-8 py-4 text-lg''; }"
    primary: "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 focus:ring-blue-500",'"
    secondary: "bg-white/10 text-white border border-white/20 hover:bg-white/20 focus:ring-white/50",'
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-500''}";
const sizeClasses = { sm: "px-4 py-2 text-sm",'"
    md: "px-6 py-3 text-base",'
    lg: 'px-8 py-4 text-lg'' }
  children: React.ReactNode;
  className?: string;'
  variant?: 'primary' | 'secondary' | 'outline';'
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  onClick?: () => void;'
  type?: 'button' | 'submit' | 'reset';}
}
const FuturisticButton: React.FC<FuturisticButtonProps> = ({ children, '
  className = '',';'
  variant = 'primary',';'
  size = 'md',';
  icon,
  onClick,'
  type = 'button''; })
}) => {';
const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantClasses = {'"
    primary: "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 focus:ring-blue-500",';'"
    secondary: "bg-white/10 text-white border border-white/20 hover:bg-white/20 focus:ring-white/50",';'
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-500'';}
  };
  const sizeClasses = { '"
    sm: "px-4 py-2 text-sm",';'"
    md: "px-6 py-3 text-base",';'
    lg: 'px-8 py-4 text-lg''; }
  };
  return (
    <button
      type={ type }
      onClick={ onClick }
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >"
      {icon && <span className="mr-2">{icon}</span>}
      { children }

    </button>)
  );
export default FuturisticButton;
"
    >{icon && <span className="mr-2">{icon}</span>}
      { children }

=======
  onClick,
  type = 'button''}) => {'
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2''
  const variantClasses = {
    </button>
  )
export default FuturisticButton;
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad
    </button>
  );
export default FuturisticButton
<<<<<<< HEAD

};
export default FuturisticButton;'
=======
import React from 'react';

interface FuturisticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
>>>>>>> origin/main
  className?: string;
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({
  children,
<<<<<<< HEAD
  href,
  to,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  disabled = false,
  loading = false,
  className = ''
}) => {
  const baseClasses = "relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 focus:ring-cyan-400 shadow-lg hover:shadow-xl",
    secondary: "bg-gradient-to-r from-slate-700 to-slate-800 text-white hover:from-slate-600 hover:to-slate-700 focus:ring-slate-400 shadow-lg hover:shadow-xl",
    outline: "border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 focus:ring-cyan-400",
    ghost: "text-cyan-400 hover:bg-cyan-400/10 focus:ring-cyan-400"
  };
  
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  
  const content = (
    <>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <span className={loading ? 'opacity-0' : 'flex items-center space-x-2'}>
        {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
        {children}
        {Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
        {!Icon && iconPosition === 'right' && <ArrowRight className="w-4 h-4" />}
      </span>
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
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {content}
    </button>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad
  );
};

export default FuturisticButton;
<<<<<<< HEAD
>>>>>>> origin/main
>>>>>>> origin/main
=======
"
>>>>>>> origin/main
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad
