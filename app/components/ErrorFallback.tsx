import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { AlertTriangle } from 'lucide-react';
import { Mail } from 'lucide-react';
>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8

interface ErrorfallbackProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Errorfallback({ className = '', children, ...props }: ErrorfallbackProps) {
  return (
    <div className={`errorfallback-component ${className}`} {...props}>
      {children}
    </div>
  );
}
