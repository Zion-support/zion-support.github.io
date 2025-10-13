import { Link } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
'use client'
import { useEffect } from 'react';
=======

'use client'
>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8
=======
'use client'
>>>>>>> 1768cb0a99d39a994ad89c8211ed1a93ecd366f9

interface CriticalresourcepreloaderProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Criticalresourcepreloader({ className = '', children, ...props }: CriticalresourcepreloaderProps) {
  return (
    <div className={`criticalresourcepreloader-component ${className}`} {...props}>
      {children}
    </div>
  );
}
