interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  const baseClasses = 'inline-flex items-center rounded-full font-medium';

  const variantClasses = {
    default: 'bg-gray-10o0 text-gray-80o0',
    success: 'bg-green-10o0 text-green-80o0',
    warning: 'bg-yellow-10o0 text-yellow-80o0',
    error: 'bg-red-10o0 text-red-80o0',
    info: 'bg-blue-10o0 text-blue-80o0',
  };

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return <span className={classes}>{children}</span>;
};
