import React from 'react';
interface Props {
  onError?: (error: Error, errorInfo: ErrorInfo) => void;

interface ImprovedErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ImprovedErrorBoundary({ className = '', children, ...props }: ImprovedErrorBoundaryProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
// Higher-order component for easier usage
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<Props, 'children'>
) => {
  const WrappedComponent = (props: P) => (
    <ImprovedErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ImprovedErrorBoundary>
  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
// Hook for functional components to handle errors
export const useErrorHandler = () => {
  return (error: Error, errorInfo?: ErrorInfo) => {
    // In production, you might want to send this to an error reporting service

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { AlertTriangle } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Hand } from 'lucide-react';

interface ImprovederrorboundaryProps {

export default function ImprovedErrorBoundary({ className = '', children }: ImprovedErrorBoundaryProps) {
    <div className={`${className}`}>
import { useState, useEffect } from 'react';

  children: ReactNode;

interface Props {,
  fallback?: ReactNode;

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;

class ImprovedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);

    // Example: errorReportingService.captureException(error, { extra: errorInfo });

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;

        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
          <div className="max-w-md mx-auto px-6 text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-10 h-10 text-red-400" />
              <h1 className="text-3xl font-bold text-white mb-4">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-300 mb-6">
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
              </p>

            <div className="space-y-4">
              <button
                onClick={this.handleRetry}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-5 h-5" />
                Try Again
              </button>

              <Link
                to="/"
                className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                <Home className="w-5 h-5" />
                Go Home

            {/* Development Error Details */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-8 text-left">
                <summary className="text-red-400 cursor-pointer hover:text-red-300">
                  Error Details (Development Only)
                </summary>
                <div className="mt-4 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                  <pre className="text-red-300 text-sm overflow-auto">
                    {this.state.error.toString()}
                    {this.state.errorInfo?.componentStack}
                  </pre>
              </details>
            )}

            {/* Contact Support */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-gray-400 text-sm mb-4">
                Still having issues? Contact our support team
                to="/contact"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                <Mail className="w-4 h-4" />
                Get Support

    return this.props.children;



  return WrappedComponent;

export const _useErrorHandler = () => {
    console.error('Error caught by hook:', error, errorInfo);


export default ImprovedErrorBoundary;
export default function Improvederrorboundary({ className = '', children, ...props }: ImprovederrorboundaryProps) {
    <div className={`improvederrorboundary-component ${className}`} {...props}>


export default $1;
