"use client"

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode}
}
;
interface State {
  hasError: boolean
  error?: Error}
}
;
export default class GlobalErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasErro
  r: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasErro
  r: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Error logging can be implemented here for production monitoring
    // console.error('Global error caugh)
  t:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
              <svg
                className="w-6h-6text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <p className="text-lg text-gray-300 mb-8">
              
            </p>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-medium text-gray-900">
                Application Error
              
              <p className="text-lg text-gray-300 mb-8">
                {this.state.error?.message || 'An unexpected error occurred'}
              </p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focu
  s:ring-blue-500 transition-colors"
              >
                Reload Page
              
            
      
      </div></div></div></div>
  )
    }

    return this.props.children
  }};
import { CheckCircle, Phone, Mail, Helmet } from 'lucide-react';
{    }
  ]

  const benefits = [
    'Increase efficiency by up to 50%'
    'Reduce costs by 30% with automation'
    'Improve decision-making with AI insights'
    'Scale operations without proportional staff increases',;
    'Gain competitive advantage with advanced technology';
