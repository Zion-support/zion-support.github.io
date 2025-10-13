import React, { useEffect } from 'react';
import { Code } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Code } from 'lucide-react';
import { Cloud } from 'lucide-react';

interface SeooptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Seooptimizer({ className = '', children, ...props }: SeooptimizerProps) {
  return (
    <div className={`seooptimizer-component ${className}`} {...props}>
      {children}
    </div>
  );
}
