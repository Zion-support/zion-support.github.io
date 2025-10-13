<<<<<<< HEAD
<<<<<<< HEAD
import { Loader2 } from 'lucide-react';
=======
import React from 'react';

>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
=======
import React from 'react';

interface EnhancedloadingspinnerProps {
>>>>>>> 1768cb0a99d39a994ad89c8211ed1a93ecd366f9
  className?: string;
  children?: React.ReactNode;
}

export default function Enhancedloadingspinner({ className = '', children, ...props }: EnhancedloadingspinnerProps) {
  return (
    <div className={`enhancedloadingspinner-component ${className}`} {...props}>
      {children}
    </div>
  );
}
