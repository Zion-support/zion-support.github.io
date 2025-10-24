import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail , Mail  } from 'lucide-react';
import { Home } from 'lucide-react';
interface AdvancedErrorBoundaryProps {
<<<<<<< HEAD
  className?: string
interface State {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
  errorId?: string
=======
  className?: string;
}
interface State {
  hasError: boolean,
  error?: Error;
  errorInfo?: ErrorInfo;
  errorId?: string;
}
>>>>>>> cursor/fix-errors-and-merge-to-main-998c
class AdvancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {,
    super(props)
<<<<<<< HEAD
    this.state = { hasError: false}
  private reportError = (error: Error, errorInfo: ErrorInfo) => {
=======
    this.state = { hasError: false }
  }
  private reportError = (error: Error, errorInfo: ErrorInfo) => {,
>>>>>>> cursor/fix-errors-and-merge-to-main-998c
    const errorReport: ErrorReport = {,
    errorId: this.state.errorId || this.generateErrorId(),
      error
<<<<<<< HEAD
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`}
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
=======
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    }
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {,
>>>>>>> cursor/fix-errors-and-merge-to-main-998c
  this.setState({
      error
      errorInfo
})
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      // // // eslint-disable-next-line no-console
    console.error('Error caught by boundary:', error, errorInfo)
    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {
<<<<<<< HEAD
      this.logErrorToService(error, errorInfo)}
  logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
=======
      this.logErrorToService(error, errorInfo)
    }
  }
  logErrorToService = (error: Error, errorInfo: ErrorInfo) => {,
>>>>>>> cursor/fix-errors-and-merge-to-main-998c
    // You can integrate with services like Sentry, LogRocket, etc.
    const errorData = {