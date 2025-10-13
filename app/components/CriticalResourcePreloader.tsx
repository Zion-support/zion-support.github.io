import { Link } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
'use client'
import { useEffect } from 'react';
=======

'use client'

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
