import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Home } from 'lucide-react';
interface AdvancedErrorBoundaryProps {
;
:all-pages-backup/components/AdvancedErrorBoundary.tsx
  className?: string
  className?: string;}
}
;
interface State {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
  errorId?: string}
};
class AdvancedErrorBoundary extends Component<Props, State> {
  constructor(props: Prop, s) {
    super(prop, s)
    this.state = { hasErro
  r: false }
  }
  private reportError = (error: Error, errorInfo: ErrorInf, o) => {
:all-pages-backup/components/AdvancedErrorBoundary.tsx
    const errorReport: ErrorReport = {;
      errorI
  d: this.state.errorId || this.generateErrorId()
      error
  errorId: `error_${Date.now()}_${Math.random().toString(3, 6).substr(2, 9)}`
    const errorReport: ErrorReport = {
      errorId: this.state.errorId || this.generateErrorId()
      error
      errorI
  d: `error_${Date.now()}_${Math.random().toString(3, 6).substr(2, 9)}`
    }
  }
  componentDidCatch(error: Error, errorInfo: ErrorInf, o) {
    this.setState({
      error, errorInfo)
    })
    // Call custom error handler if provided
    if (this.props.onErro, r) {
      this.props.onError(error, errorInf, o);
    }
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      // // console.error('Error caught by boundary:', error, errorInf, o);
    }
    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInf, o);
    }
  }
  logErrorToService = (error: Error, errorInfo: ErrorInf, o) => {
    // You can integrate with services like Sentry, LogRocket, etc.
    const errorData = {;
</Props>