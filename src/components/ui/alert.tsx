import React from 'react';
import { AlertCircle, CheckCircle, Info, X } from 'lucide-react';

interface AlertProps {
  variant?: 'default' | 'destructive' | 'success' | 'info';
  children: React.ReactNode;
  className?: string;
  onClose?: () => void;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ variant = 'default', children, className = '', onClose, ...props }, ref) => {
    const baseClasses = 'relative w-full rounded-lg border p-4';
    
    const variantClasses = {
      default: 'bg-background text-foreground border-border',
      destructive: 'border-destructive/50 text-destructive bg-destructive/10',
      success: 'border-green-500/50 text-green-700 bg-green-50',
      info: 'border-blue-500/50 text-blue-700 bg-blue-50'
    };

    const iconMap = {
      default: Info,
      destructive: AlertCircle,
      success: CheckCircle,
      info: Info
    };

    const Icon = iconMap[variant];

    return (
      <div
        ref={ref}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        {...props}
      >
        <div className="flex items-start">
          <Icon className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
          <div className="flex-1">{children}</div>
          {onClose && (
            <button
              onClick={onClose}
              className="ml-2 text-current opacity-70 hover:opacity-100"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    );
  }
);

Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className = '', ...props }, ref) => (
    <h5
      ref={ref}
      className={`mb-1 font-medium leading-none tracking-tight ${className}`}
      {...props}
    />
  )
);
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className = '', ...props }, ref) => (
    <div
      ref={ref}
      className={`text-sm [&_p]:leading-relaxed ${className}`}
      {...props}
    />
  )
);
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };