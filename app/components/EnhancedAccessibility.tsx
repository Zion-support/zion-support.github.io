import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8
=======
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
>>>>>>> 1768cb0a99d39a994ad89c8211ed1a93ecd366f9

interface EnhancedaccessibilityProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Enhancedaccessibility({ className = '', children, ...props }: EnhancedaccessibilityProps) {
  return (
    <div className={`enhancedaccessibility-component ${className}`} {...props}>
      {children}
    </div>
  );
}
