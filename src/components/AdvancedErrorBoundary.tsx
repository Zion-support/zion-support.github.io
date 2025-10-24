import React, { Component, ErrorInfo, ReactNode } from 'react';
<<<<<<< HEAD
import { AlertTriangle, RefreshCw, Home, Mail     } from 'lucide-react';
import { Mail     } from 'lucide-react';
import { Home     } from 'lucide-react';
interface AdvancedErrorBoundaryProps {
:all-pages-backup/components/AdvancedErrorBoundary.tsx
className?: string
className?: string
}
=======

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
}
interface State {
<<<<<<< HEAD
hasError: boolean
error?: Error
errorInfo?: ErrorInfo
errorId?: string,}
=======
  hasError: boolean;
  error?: Error;
>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
}

class AdvancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }
<<<<<<< HEAD
private reportError = (error: Error,errorInfo: ErrorInfo) => {
:all-pages-backup/components/AdvancedErrorBoundary.tsx
const errorReport: ErrorReport={
      errorI,d: this.state.errorId || this.generateErrorId()
error,errorId: `error_${Date.now(),}_${Math.random().toString(36).substr(2, 9)}`
const errorReport: ErrorReport={,errorId: this.state.errorId || this.generateErrorId()
error
errorI,d: `error_${Date.now(),}_${Math.random().toString(36).substr(2, 9)}`
    }
  }
componentDidCatch(error: Error,errorInfo: ErrorInfo) {
this.setState({
error
errorInfo)
    ,})
    // Call custom error handler if provided
if(this.props.onError) {
this.props.onError(error, errorInfo)
    }
    // Log error to console in development
if(process.env.NODE_ENV === 'development') {
      // // console.error('Error caught by boundary: ',error, errorInfo)
    }
    // Log error to external service in production
if(process.env.NODE_ENV === 'production') {
this.logErrorToService(error, errorInfo)
    }
  }
logErrorToService = (error: Error,errorInfo: ErrorInfo) => {,// You can integrate with services like Sentry, LogRocket, etc.
const errorData={
</Props>
}}
=======

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="error-boundary">
          <h2>Something went wrong.</h2>
          <p>Please refresh the page and try again.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default AdvancedErrorBoundary;
>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
