import React from 'react';
<<<<<<< HEAD:src/components/ui/badge.tsx
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
=======
interface BadgeProps {
  children: React.ReactNode;
  className?: string;
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/badge.tsx
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  children: React.ReactNode;
}
<<<<<<< HEAD:src/components/ui/badge.tsx

export function Badge({ className, variant = 'default', children, ...props }: BadgeProps) {
=======
const Badge: React.FC<BadgeProps> = ({
  children,
  className = '',
  variant = 'default'
}) => {
  const baseClasses = 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/badge.tsx
  const variantClasses = {
    default: 'bg-zion-purple text-white',
    secondary: 'bg-zion-blue text-white',
    destructive: 'bg-red-500 text-white',
    outline: 'border border-zion-purple text-zion-purple'
  };
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
<<<<<<< HEAD:src/components/ui/badge.tsx
}
=======
};
export { Badge };
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/badge.tsx
