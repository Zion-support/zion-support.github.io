import React from 'react';
import { AlertCircle, CheckCircle, Info, XCircle, AlertTriangle } from 'lucide-react';

interface AlertProps {
  variant?: 'default' | 'destructive' | 'success' | 'warning' | 'info';
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const alertVariants = {
  default: {
    container: 'bg-zion-slate-dark/50 border-zion-cyan/20 text-zion-slate-light',
    icon: 'text-zion-cyan',
    title: 'text-white'
  },
  destructive: {
    container: 'bg-red-500/10 border-red-500/20 text-red-400',
    icon: 'text-red-500',
    title: 'text-red-100'
  },
  success: {
    container: 'bg-green-500/10 border-green-500/20 text-green-400',
    icon: 'text-green-500',
    title: 'text-green-100'
  },
  warning: {
    container: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400',
    icon: 'text-yellow-500',
    title: 'text-yellow-100'
  },
  info: {
    container: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    icon: 'text-blue-500',
    title: 'text-blue-100'
  }
};

const alertIcons = {
  default: AlertCircle,
  destructive: XCircle,
  success: CheckCircle,
  warning: AlertTriangle,
  info: Info
};

export function Alert({ variant = 'default', title, children, className = '' }: AlertProps) {
  const variantStyles = alertVariants[variant];
  const IconComponent = alertIcons[variant];

  return (
    <div className={`border rounded-lg p-4 ${variantStyles.container} ${className}`}>
      <div className="flex items-start gap-3">
        <IconComponent className={`w-5 h-5 mt-0.5 flex-shrink-0 ${variantStyles.icon}`} />
        <div className="flex-1">
          {title && (
            <h5 className={`font-medium mb-1 ${variantStyles.title}`}>
              {title}
            </h5>
          )}
          <div className="text-sm">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export function AlertDescription({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`text-sm ${className}`}>
      {children}
    </div>
  );
}