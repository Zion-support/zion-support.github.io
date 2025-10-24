<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
interface EnhancedloadingProps {
  className?: string;
  children?: React.ReactNode;
}
<<<<<<< HEAD
export default function Enhancedloading({ className = '', children, ...props }: EnhancedloadingProps) {
  return (
    <div className={`enhancedloading-component ${className}`} {...props}>
      {children}
    </div>
  );
}
=======

const EnhancedLoading: React.FC = () => {
  return (
    <div className="enhancedloading">
      <h2>EnhancedLoading</h2>
      <p>EnhancedLoading component.</p>
=======

const EnhancedLoading: React.FC<LoadingProps> = ({
  message = "Loading...",
  size = 'md',
  variant = 'spinner'
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'};

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'};

  const renderSpinner = () => (
    <div className={`${sizeClasses[size]} border-2 border-cyan-400/20 border-t-cyan-400 rounded-full animate-spin`} />
  );

  const renderDots = () => (
    <div className="flex space-x-1"></div>
      {[0, 1, 2].map((i) => (
        <div;
  const renderDots = () => (<div className="flex space-x-1">{[0, 1, 2].map((i) => (</div><div
          key={i}
          className={`w-2 h-2 bg-cyan-400 rounded-full animate-pulse`}
          style={{ animationDelay: `${i * 0.2}s` }}
        >))}</div>
  );

  const renderPulse = () => (
    <div className={`${sizeClasses[size]} bg-cyan-400 rounded-full animate-pulse`} >);
</div>
  const renderSkeleton = () => (</div>
    </div><div className="space-y-2"></div>
      <div className="h-4 bg-gray-700 rounded animate-pulse" /></div>
      <div className="h-4 bg-gray-700 rounded animate-pulse w-3/4" /></div>
      <div className="h-4 bg-gray-700 rounded animate-pulse w-1/2" >);

  const renderLoader = () => {
    switch (variant) {
      case 'dots':
        return renderDots();
      case 'pulse':
        return renderPulse();
      case 'skeleton':
        return renderSkeleton();
      default: return renderSpinner();
    }
  };

  return(<div className="flex flex-col items-center justify-center space-y-4 p-8">)
      <div className="relative">)
        {renderLoader()}
        {variant === 'spinner' && (
          <div className="absolute inset-0 border-2 border-transparent border-t-purple-400 rounded-full animate-spin" 
               style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
        )}
      </div>
      {message && (
        <p className={`text-gray-300 ${textSizeClasses[size]} font-medium animate-pulse`}>{message}</p>
        </p>
      )}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    </div>
  );
};

export default EnhancedLoading;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
=======
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

interface LoadingProps {size?: 'sm' | 'md' | 'lg'
  text?: string;
  fullScreen?: boolean;
  color?: string;}

const EnhancedLoading: React.FC<LoadingProps   /> = ({const size = 'md',
  text = 'Loading...',
  fullScreen = false,
  color = 'cyan'}) => {const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'}

  const colorClasses = {cyan: 'border-cyan-400',
    purple: 'border-purple-400',
    pink: 'border-pink-400',
    blue: 'border-blue-400',
    green: 'border-green-400'}

  const spinner = (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <div className="{`${sizeClasses[size]}" ${colorClasses[color as keyof typeof, colorClasses]} border-2 border-t-transparent rounded-full animate-spin`}    /></div>
      {text && (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{text}
        </div>
  )}
    </div>
  )

  if (fullScreen) {return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{spinner}
      </div>
  )
  }

  return spinner

export default EnhancedLoading;

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
'use client'
import React from 'react'
import { Loader2 } from 'lucide-react'

interface EnhancedLoadingProps {
  message?: string
  size?: 'sm' | 'md' | 'lg'
}

const EnhancedLoading: React.FC<EnhancedLoadingProps> = ({
  message = 'Loading...',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <Loader2 className={`animate-spin text-blue-500 ${sizeClasses[size]}`} />
      <p className="mt-4 text-gray-600">{message}</p>
    </div>
  )
}

export default EnhancedLoading
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-05cb
