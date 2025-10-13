import React from 'react';

interface ErrorFallbackProps {
  className?: string;
  children?: React.ReactNode;

import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { AlertTriangle } from 'lucide-react';
import { Mail } from 'lucide-react';

import React from "react";
interface ErrorfallbackProps {
  className?: string;
  children?: React.ReactNode;

import React from 'react';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
  errorInfo?: React.ErrorInfo;
}

export default function ErrorFallback({ className = '', children }: ErrorFallbackProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
}
export default function ErrorFallback({ className = '', children, ...props }: ErrorFallbackProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
import { AlertTriangle, RefreshCw, Home, Mail, Bug } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Errorfallback({ className = '', children, ...props }: ErrorfallbackProps) {
}
