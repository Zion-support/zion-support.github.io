import React from 'react';
;
// import React from 'react';
;
const FuturisticButton: React.FC<FuturisticButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  disabled = false,
  type = 'button'
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed';
  const variantClasses = {
    primary: 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25',
    secondary: 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 shadow-lg hover:shadow-purple-500/25',
    outline: 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
  };
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  const content = (
    </FuturisticButtonProps><React.Fragment>
      {icon && </React><span className="mr-2">{icon}</span>}
      {children}
    </React.Fragment>
  );
  if (href) {
    return (
      <Link;
        to={href}
        className={`${classes} hover:scale-105`}
        onClick={onClick}
      >
        {content}</Link>
      </Link>
    );
  }
  return (
    <button;
      type={type}
      className={`${classes} hover:scale-105`}
      onClick={onClick}
      disabled={disabled}
    >
      {content}</button>
    </button>
  );
};
;