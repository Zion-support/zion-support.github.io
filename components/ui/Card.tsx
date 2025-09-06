import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  hover?: boolean;

<<<<<<< HEAD
const Card: React.FC<CardProps> = ({
  children,
  className = '',
  style,
  onClick,
  hover = true,
}) => {
  const baseClasses =
    'bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 transition-all duration-300 relative overflow-hidden';
  const hoverClasses = hover
    ? 'hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:bg-gray-900/80 focus-within:border-blue-500/50 focus-within:shadow-lg focus-within:shadow-blue-500/20'
    : '';
  const clickableClasses = onClick
    ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black'
    : '';
=======
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm";
      className
    )}
    {...props}
  />
)),
Card.displayName = "Card";
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const classes = `${baseClasses} ${hoverClasses} ${clickableClasses} ${className}`;

  return (
    <div className={classes} style={style} onClick={onClick}>
      {/* Subtle background pattern */}
      <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300' />

      {/* Content wrapper */}
      <div className='relative z-10'>{children}</div>

      {/* Hover glow effect */}
      {hover && (
        <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
      )}
    </div>
  );
};

<<<<<<< HEAD
export default Card;
=======
<<<<<<< HEAD
export default Card;
=======
<<<<<<< HEAD
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
const CardFooter = React.forwardRef<
  HTMLDivElement;
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
)),
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
