import * as React from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = React.forwardRef<any, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const variantClass =
      variant === 'destructive'
        ? 'bg-destructive text-destructive-foreground hover:bg-destructive/90'
        : variant === 'outline'
        ? 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
        : variant === 'secondary'
        ? 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
        : variant === 'ghost'
        ? 'hover:bg-accent hover:text-accent-foreground'
        : variant === 'link'
        ? 'text-primary underline-offset-4 hover:underline'
        : 'bg-primary text-primary-foreground hover:bg-primary/90';

    const sizeClass =
      size === 'sm'
        ? 'h-9 rounded-md px-3'
        : size === 'lg'
        ? 'h-11 rounded-md px-8'
        : size === 'icon'
        ? 'h-10 w-10'
        : 'h-10 px-4 py-2';

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          variantClass,
          sizeClass,
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';
