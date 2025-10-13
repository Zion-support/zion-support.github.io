import React from 'react';
import { Monitor } from 'lucide-react';
interface PerformancemonitorProps {
  className?: string;
  children?: React.ReactNode;
}
export default function Performancemonitor({ className = '', children, ...props }: PerformancemonitorProps) {
  return (
    <div className={`performancemonitor-component ${className}`} {...props}>
      {children}
    </div>
  );
}