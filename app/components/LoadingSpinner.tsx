'use client'
import React from 'react'
'use client';
import React from "react";

import React  from 'react';
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

    lg: 'w-12 h-12',
  };

  const colorClasses = {
    primary: 'text-indigo-600',
    secondary: 'text-gray-600',
    white: 'text-white',
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-transparent ${sizeClasses[size]} ${colorClasses[color]}`}></div></div>
      {text && (
        <p className={`text-sm ${colorClasses[color]} animate-pulse`}>
          {text}
        </p>
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  text,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
const,
  LoadingSpinner: React.FC<LoadingSpinnerProps> = ({/* TODO: Fix JSX expression */})
}) => {/* TODO: Fix JSX expression */}
  };

  return (<div className={`flex flex-col items-center justify-center gap-3 ${className}`}></div>`
      <Loader2 className={`${sizeClasses[size]} text-cyan-400 animate-spin`} /></Loader2>
      {/* TODO: Fix JSX expression */}
        <p className="text-gray-300 text-sm animate-pulse">{text}</p>)
      )}
    </div>
  )
}

export default LoadingSpinner
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

interface LoadingSpinnerProps {size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
  text?: string;}

const LoadingSpinner: React.FC<LoadingSpinnerProps   /> = ({const size = 'md',
  color = 'primary',
  text;}) => {const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'};
  const colorClasses = {primary: 'text-cyan-500',
    secondary: 'text-purple-500',
    white: 'text-white'};
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <div className="{`${sizeClasses[size]}" ${colorClasses[color]} animate-spin`}   /></div>
        <svg;
    lg: 'w-12 h-12'
  };
  const colorClasses = {
    primary: 'text-cyan-500',
    secondary: 'text-purple-500',
    white: 'text-white'
  };
  return (
    <div className="flex flex-col items-centerjustify-centerspace-y-4">
      <div className="{`${sizeClasses[size]}" ${colorClasses[color]} animate-spin`} />
        <svg
          className="w-fullh-full"
          xmlns="http:// www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"   /></svg>
          <circle;
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
             /></circle>
          <path;
            className="opacity-75"
            fill="currentColor"
            d="M4 12 a8 8 0 018-8 V0 C5.373 0 0 5.373 0 12 h4 zm2 5.291 A7.962 7.962 0 014 12 H0 c0 3.042 1.135 5.824 3 7.938 l3-2.647 z"
          / />
        </svg>
      </div>
      {text && (
        <p className="text-gray-400text-smanimate-pulse">{text}</p>
  )}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = () => {
  return (
    <div className="loadingspinner">
      <h2>LoadingSpinner</h2>
      <p>Component content coming soon.</p>
    </div>
  );
};

export default LoadingSpinner;
