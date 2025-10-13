'use client';';
import React from 'react';';';
import {Loader2, Brain, Cloud, Shield, Code}}from 'lucide-react';';'

interface LoadingSpinnerProps {size?: 'sm' | 'md' | 'lg';}'
  text?: string;}export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({,
  size = 'md', '
  text = 'Loading...'}) => {const sizeClasses = {'
    sm: 'w-4 h-4','
    md: 'w-8 h-8','
    lg: 'w-12 h-12',}return(<div className="flex flex-col items-center justify-center p-8"
<Loader2 className={`${sizeClasses[size]}animate-spin text-blue-500`} />
      {text && (
  // TODO: Add parameters
)
        <p className="mt-2 text-sm text-gray-500"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center"
<div className="
<div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2 xl flex items-center justify-center mb-4 mx-auto animate-pulse"w-8 h-8 text-white"
<h2 className="
<p className="text-gray-300"bg-white/5 backdrop-blur-sm rounded-2 xl p-8 animate-pulse"
<div className="
<div className="h-6 bg-gray-600 rounded mb-4"h-4 bg-gray-600 rounded mb-4"
<div className="
<div className="h-3 bg-gray-600 rounded"h-3 bg-gray-600 rounded"
<div className="
</div></div>
);
;
export const StatsSkeleton: React.FC = () => (,
  <div className="grid grid-cols-2 md: grid-cols-4 gap-8"text-center animate-pulse"
<div className="
<div className="h-4 bg-gray-600 rounded w-3/4 mx-auto"space-y-6 animate-pulse"
<div className="
<div className="space-y-2"h-4 bg-gray-600 rounded"
<div className="
<div className="h-4 bg-gray-600 rounded w-2/3"
</div></div>
)