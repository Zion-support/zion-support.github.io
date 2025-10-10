<<<<<<< HEAD
'use client';
;
;
;
import React, { Component, ErrorInfo, ReactNode } from 'react'
import { AlertTriangle, RefreshCw, Home, Phone  } from 'lucide-react'
interface Props {
  children: ReactNode
  fallback?: ReactNode
}
interface State {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
}
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state;

}

}

export default ErrorBoundary;
=======
import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  return (
    <div className="error-boundary">
      {children}
    </div>
  );
};

export default ErrorBoundary;
>>>>>>> cursor/fix-errors-and-merge-to-main-b853
