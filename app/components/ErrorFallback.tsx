<<<<<<< HEAD
<<<<<<< HEAD
import { AlertTriangle, RefreshCw, Home, Mail, Bug } from 'lucide-react';
import { Link } from 'react-router-dom';
=======
import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { AlertTriangle } from 'lucide-react';
import { Mail } from 'lucide-react';
>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8

=======
import { Link } from 'react-router-dom';
>>>>>>> 1768cb0a99d39a994ad89c8211ed1a93ecd366f9
interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
  errorInfo?: React.ErrorInfo;
}

export default function Errorfallback({ className = '', children, ...props }: ErrorfallbackProps) {
  return (
    <div className={`errorfallback-component ${className}`} {...props}>
      {children}
    </div>
  );
}
