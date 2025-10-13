import React from 'react';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface ErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;

interface Props {

  children: ReactNode;
  fallback?: ReactNode;
}

export default function ErrorBoundary({ className = '', children }: ErrorBoundaryProps) {
  return (
    <div className={`${className}`}>
export default function ErrorBoundary({ className = '', children, ...props }: ErrorBoundaryProps) {
    <div className={`error-boundary-component ${className}`} {...props}>
      {children}
    </div>
  );
        <div className="component" {...props}>
import { useState, useEffect } from 'react';


interface Props {,

interface State {,
    hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
    return {,
    hasError: true,
      error
    };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log error to monitoring service
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    // In production, you would send this to your error monitoring service
    if (process.env.NODE_ENV === 'production') {
      // Example: sendErrorToService(error, errorInfo);

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });

  handleGoHome = () => {
    window.location.href = '/';

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;

        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-slate-800/50 backdrop-blur-sm border border-red-500/20 rounded-lg p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-500/20 flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-red-400" />

            <h1 className="text-2xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>

            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="text-red-400 cursor-pointer mb-2">
                  Error Details (Development)
                </summary>
                <div className="bg-slate-900/50 p-4 rounded text-xs text-gray-300 overflow-auto max-h-40">
                  <div className="font-mono">
                    <div className="text-red-400 font-bold">Error:</div>
                    <div className="mb-2">{this.state.error.toString()}</div>
                    <div className="text-red-400 font-bold">Stack Trace:</div>
                    <div>{this.state.error.stack}</div>
              </details>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={this.handleRetry}
                className="flex items-center justify-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button>
  onClick={this.handleRetry}>
  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </button>

                onClick={this.handleGoHome}
                className="flex items-center justify-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
  onClick={this.handleGoHome}>
  className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                <Home className="w-4 h-4 mr-2" />
                Go Home


interface State {

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false

  public static getDerivedStateFromError(error: Error): State {

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {

  public render() {
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-8">
              We're sorry, but something unexpected happened. Please try refreshing the page.
              onClick={() => window.location.reload()}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              Refresh Page

    return this.props.children;

export default ErrorBoundary;
export default function Errorboundary({ className = '', children, ...props }: ErrorboundaryProps) {
export default $1;
