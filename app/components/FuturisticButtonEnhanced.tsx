import React from 'react';

interface FuturisticButtonEnhancedProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  glowColor?: 'cyan' | 'purple' | 'pink' | 'green' | 'blue' | 'orange';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  animated?: boolean;
  neon?: boolean;
}

const FuturisticButtonEnhanced: React.FC<FuturisticButtonEnhancedProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  glowColor = 'cyan',
  icon: Icon,
  iconPosition = 'right',
  disabled = false,
  loading = false,
  className = '',
  animated = true,
  neon = true
}) => {
  const baseClasses = `
    relative inline-flex items-center justify-center font-semibold rounded-lg
    transition-all duration-300 overflow-hidden group
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
  `;

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-cyan-500 to-purple-600 text-white
      hover:from-cyan-600 hover:to-purple-700
      ${neon ? 'shadow-lg shadow-cyan-500/25 hover:shadow-2xl hover:shadow-cyan-500/40' : ''}
    `,
    secondary: `
      bg-gradient-to-r from-slate-700 to-slate-800 text-white
      hover:from-slate-600 hover:to-slate-700
      ${neon ? 'shadow-lg shadow-slate-500/25 hover:shadow-2xl hover:shadow-slate-500/40' : ''}
    `,
    outline: `
      border-2 border-cyan-400 text-cyan-400 bg-transparent
      hover:bg-cyan-400 hover:text-slate-900
      ${neon ? 'shadow-lg shadow-cyan-500/25 hover:shadow-2xl hover:shadow-cyan-500/40' : ''}
    `,
    ghost: `
      text-cyan-400 bg-transparent
      hover:bg-cyan-400/10 hover:text-cyan-300
    `
  };

  const buttonVariants = {
    initial: { 
      scale: 1,
      boxShadow: '0 0 0 rgba(6, 182, 212, 0)'
    },
    hover: { 
      scale: 1.05,
      boxShadow: '0 10px 30px rgba(6, 182, 212, 0.4)',
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const content = (
    <>
      {/* Animated background */}
      {animated && (
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      
      {/* Neon glow effect */}
      {neon && (
        <div className={`
          absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300
          bg-gradient-to-r from-${glowColor}-500/20 to-${glowColor}-500/10
        `} />
      )}
      
      {/* Loading spinner */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      )}
      
      {/* Content */}
      <div className={`relative z-10 flex items-center ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {Icon && iconPosition === 'left' && (
          <Icon className={`w-4 h-4 ${size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-5 h-5' : size === 'xl' ? 'w-6 h-6' : 'w-4 h-4'} mr-2 group-hover:scale-110 transition-transform duration-200`} />
        )}
        {children}
        {Icon && iconPosition === 'right' && (
          <Icon className={`w-4 h-4 ${size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-5 h-5' : size === 'xl' ? 'w-6 h-6' : 'w-4 h-4'} ml-2 group-hover:scale-110 transition-transform duration-200`} />
        )}
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-1 right-1 w-1 h-1 bg-cyan-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-1 left-1 w-1 h-1 bg-purple-400 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300" />
    </>
  );

  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `;

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        variants={animated ? buttonVariants : undefined}
        initial="initial"
        whileHover={!disabled ? "hover" : undefined}
        whileTap={!disabled ? "tap" : undefined}
        onClick={onClick}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={buttonClasses}
      variants={animated ? buttonVariants : undefined}
      initial="initial"
      whileHover={!disabled ? "hover" : undefined}
      whileTap={!disabled ? "tap" : undefined}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {content}
    </motion.button>
  );
};

export default FuturisticButtonEnhanced;