<<<<<<< HEAD:all-pages-backup/components/ErrorHandler.tsx
import Footer from './Footer';
import Navigation from './Navigation';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Brain, BarChart, Target, TrendingUp } from 'lucide-react';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Home } from 'lucide-react';
<<<<<<< HEAD:all-pages-backup/components/ErrorHandler.tsx
      icon: Brain,
  title: title,
  description: description,
  benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    }
    {
      icon: BarChart,
  title: title,
  description: description,
  benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    }
    {
      icon: Target,
  title: title,
  description: description,
  benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    }
    {
      icon: TrendingUp,
  title: title,
  description: description,
  benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
<<<<<<< HEAD:all-pages-backup/components/ErrorHandler.tsx
    <>;
      <Helmet>;
<<<<<<< HEAD:all-pages-backup/components/ErrorHandler.tsx
        message: error.message,
  stack: error.stack,
  componentStack: errorInfo.componentStack,
  timestamp: new Date().toISOString()
<<<<<<< HEAD:all-pages-backup/components/ErrorHandler.tsx
      hasError: false,
  error: null,
  errorInfo: null
<<<<<<< HEAD:all-pages-backup/components/ErrorHandler.tsx
              <button
                onClick={this.handleGoHome}
                className=&quot;flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors&quot
<<<<<<< HEAD:all-pages-backup/components/ErrorHandler.tsx
                onClick={this.handleRetry}
               className=&quot;flex items-center justify-center px-4 py-2 bg-blue-600text-white rounded-lghover:bg-blue-700transition-colors&quot
              ><RefreshCwclassName=&quot;w-4h-4mr-2&quot; />Try Again
            </butto><
                onClick={this.handleGoHome}
               className=&quot;flex items-center justify-center px-4 py-2 bg-gray-600text-white rounded-lghover:bg-gray-700transition-colors&quot
              ></
                onClick={this.handleGoHome}
               className=&quot;flex items-center justify-center px-4 py-2 bg-gray-600text-white rounded-lghover:bg-gray-700transition-colors&quot
<<<<<<< HEAD:all-pages-backup/components/ErrorHandler.tsx
{};

export default ErrorHandlerPage
