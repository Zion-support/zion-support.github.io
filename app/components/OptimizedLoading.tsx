import React from 'react';

import { Loader2 } from 'lucide-react';

interface OptimizedLoadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  text?: string;
  fullScreen?: boolean;
  className?: string;
}

const OptimizedLoading: React.FC<OptimizedLoadingProps /> = ({
  const size = 'md',
  text = 'Loading...',
  fullScreen = false,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  }

  const containerClasses = fullScreen;
    ? 'fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50'
    : 'flex items-center justify-center p-4'
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function OptimizedLoading() {
  return (

        {text && (
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{text}
          </p>
        )}
      </div>
  )

export default OptimizedLoading;

}
