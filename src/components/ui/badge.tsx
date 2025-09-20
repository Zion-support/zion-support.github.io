import React from 'react';
import { cn } from '@/lib/utils';

<<<<<<< HEAD
interface BadgeProps {children: React.ReactNode;
}
className?: string;}
interface BadgeProps {
children: React.ReactNode;
className?: string;
variant?: "default" | "secondary" | "destructive" | "outline"};
const Badge: React.FC<BadgeProps> = ({
children;
className = "",
variant = "default"
}) => {const baseClasses = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors";
=======
interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
}
>>>>>>> 8c478e615056772e765dbc204462fa984d447432

export function Badge({ children, className, variant = 'default' }: BadgeProps) {
  const baseClasses = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium';
  
  const variantClasses = {
    default: 'bg-blue-100 text-blue-800',
    secondary: 'bg-gray-100 text-gray-800',
    destructive: 'bg-red-100 text-red-800',
    outline: 'border border-gray-200 text-gray-800'
  };

  return (
    <span className={cn(baseClasses, variantClasses[variant], className)}>
      {children}
    </span>
  );
}