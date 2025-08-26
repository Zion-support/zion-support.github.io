import React from 'react';
<<<<<<< HEAD:src/components/ui/card.tsx
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
=======
interface CardProps {
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/card.tsx
  children: React.ReactNode;
}
<<<<<<< HEAD:src/components/ui/card.tsx

export function Card({ className, children, ...props }: CardProps) {
=======
const Card: React.FC<CardProps> = ({ children, className = '' }) => {
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/card.tsx
  return (
    <div
      className={cn(
        'rounded-lg border bg-card text-card-foreground shadow-sm',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
<<<<<<< HEAD:src/components/ui/card.tsx
}

export function CardHeader({ className, children, ...props }: CardProps) {
=======
};
const CardHeader: React.FC<CardProps> = ({ children, className = '' }) => {
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/card.tsx
  return (
    <div
      className={cn('flex flex-col space-y-1.5 p-6', className)}
      {...props}
    >
      {children}
    </div>
  );
<<<<<<< HEAD:src/components/ui/card.tsx
}

export function CardTitle({ className, children, ...props }: CardProps) {
=======
};
const CardTitle: React.FC<CardProps> = ({ children, className = '' }) => {
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/card.tsx
  return (
    <h3
      className={cn('text-2xl font-semibold leading-none tracking-tight', className)}
      {...props}
    >
      {children}
    </h3>
  );
<<<<<<< HEAD:src/components/ui/card.tsx
}

export function CardDescription({ className, children, ...props }: CardProps) {
=======
};
const CardDescription: React.FC<CardProps> = ({ children, className = '' }) => {
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/card.tsx
  return (
    <p
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    >
      {children}
    </p>
  );
<<<<<<< HEAD:src/components/ui/card.tsx
}

export function CardContent({ className, children, ...props }: CardProps) {
=======
};
const CardContent: React.FC<CardProps> = ({ children, className = '' }) => {
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/card.tsx
  return (
    <div className={cn('p-6 pt-0', className)} {...props}>
      {children}
    </div>
  );
<<<<<<< HEAD:src/components/ui/card.tsx
}

export function CardFooter({ className, children, ...props }: CardProps) {
=======
};
const CardFooter: React.FC<CardProps> = ({ children, className = '' }) => {
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/card.tsx
  return (
    <div className={cn('flex items-center p-6 pt-0', className)} {...props}>
      {children}
    </div>
  );
<<<<<<< HEAD:src/components/ui/card.tsx
}
=======
};
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/card.tsx
