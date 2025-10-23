<<<<<<< HEAD
import React, { memo, useMemo } from 'react';
=======
'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react'
>>>>>>> a84aa0ca73271fd79488f8988ac94dcff4d9fb95


interface OptimizedLoadingSpinnerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'dots' | 'pulse' | 'spinner' | 'skeleton' | 'bars';
  text?: string;
  className?: string;
  color?: 'blue' | 'gray' | 'green' | 'red' | 'purple';
  fullScreen?: boolean;
}

<<<<<<< HEAD
const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps> = memo(
  ({
    size = 'md',
    variant = 'spinner',
    text = 'Loading...',
    className = '',
    color = 'blue',
    fullScreen = false,
  }) => {
    const sizeClasses = useMemo(
      () => ({
        xs: 'h-3 w-3',
        sm: 'h-4 w-4',
        md: 'h-8 w-8',
        lg: 'h-12 w-12',
        xl: 'h-16 w-16',
      }),
      []
    );
=======
  return (
    <>
      
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              OptimizedLoadingSpinner
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced OptimizedLoadingSpinner solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>
>>>>>>> a84aa0ca73271fd79488f8988ac94dcff4d9fb95

    const textSizeClasses = useMemo(
      () => ({
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
      }),
      []
    );

    const colorClasses = useMemo(
      () => ({
        blue: 'border-blue-600 bg-blue-600',
        gray: 'border-gray-600 bg-gray-600',
        green: 'border-green-600 bg-green-600',
        red: 'border-red-600 bg-red-600',
        purple: 'border-purple-600 bg-purple-600',
      }),
      []
    );

    const renderSpinner = useMemo(() => {
      const _baseClasses = `${sizeClasses[size]} ${colorClasses[color]}`;

      switch (variant) {
        case 'dots':
          return (
            <div className='flex space-x-1' role='status' aria-label='Loading'>
              {[0, 1, 2].map(i => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full animate-bounce ${colorClasses[color].split(' ')[1]}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          );

        case 'pulse':
          return (
            <div
              className={`${baseClasses} rounded-full animate-pulse`}
              role='status'
              aria-label='Loading'
            />
          );

        case 'skeleton':
          return (
            <div className='space-y-2' role='status' aria-label='Loading'>
              <div
                className={`h-4 bg-gray-200 rounded animate-pulse ${sizeClasses[size]}`}
              />
              <div
                className={`h-4 bg-gray-200 rounded animate-pulse ${sizeClasses[size]}`}
                style={{ width: '75%' }}
              />
              <div
                className={`h-4 bg-gray-200 rounded animate-pulse ${sizeClasses[size]}`}
                style={{ width: '50%' }}
              />
            </div>
          );

        case 'bars':
          return (
            <div className='flex space-x-1' role='status' aria-label='Loading'>
              {[0, 1, 2, 3].map(i => (
                <div
                  key={i}
                  className={`w-1 ${colorClasses[color].split(' ')[1]} animate-pulse`}
                  style={{
                    height: `${12 + i * 4}px`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>
          );

        case 'spinner':
        default:
          return (
            <div
              className={`${baseClasses} rounded-full border-2 border-t-transparent animate-spin`}
              role='status'
              aria-label='Loading'
            />
          );
      }
    }, [size, variant, color, sizeClasses, colorClasses]);

    const containerClasses = useMemo(() => {
      const _baseClasses = 'flex items-center justify-center';
      const _fullScreenClasses = fullScreen ? 'min-h-screen' : '';
      return `${baseClasses} ${fullScreenClasses} ${className}`;
    }, [fullScreen, className]);

    return (
      <div className={containerClasses}>
        <div className='text-center'>
          {renderSpinner}
          {text && (
            <p className={`mt-2 text-gray-600 ${textSizeClasses[size]}`}>
              {text}
            </p>
          )}
        </div>
      </div>
    );
  }
);

OptimizedLoadingSpinner.displayName = 'OptimizedLoadingSpinner';

export default OptimizedLoadingSpinner;
