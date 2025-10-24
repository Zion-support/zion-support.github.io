'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Home } from 'lucide-react';
interface AdvancedErrorBoundaryProps {

  className?: string
interface State {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
  errorId?: string
class AdvancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)}
    this.state = { hasError: false};
  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    const errorRepor
  t: ErrorReport = {
    errorId: this.state.errorId || this.generateErrorId()
      error
      errorI
  d: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`}
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
  this.setState({
      error
      errorInfo)
})
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      // // // eslint-disable-next-line no-console
    console.error('Error caught by boundary:', error, errorInfo);
    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo)}
  logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    // You can integrate with services like Sentry, LogRocket, etc.
    const errorData = {
}







}






}





}