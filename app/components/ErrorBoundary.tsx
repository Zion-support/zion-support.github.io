'use client';
import React, {Component, ErrorInfo, ReactNode}from 'react';
import {AlertTriangle, RefreshCw, Home, Phone}}from 'lucide-react';

interface Props {children: ReactNode;,}
  fallback?: ReactNode;}interface State {hasError: boolean;,}
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) 
    super(props);
    this.state =  hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return  hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error for monitoring in production;
    if (process.env.NODE_ENV === 'production') 
      // In production, you would send this to an error reporting service;
      // Example: errorReportingService.captureException(error,  extra: errorInfo })
    }
    this.setState({error, errorInfo)})
  }

  handleReload = () => {
    window.location.reload();
  }

  handleGoHome = () => {
    window.location.href = '/';
  }

  render() {
    if (this.state.hasError) 
      if (this.props.fallback) 
        return this.props.fallback;
      }

