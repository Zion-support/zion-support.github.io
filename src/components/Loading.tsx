import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  fullScreen?: boolean}

export default function Loading({ 
  size = 'md', 
  text = 'Loading...', 
  fullScreen = false 
}: LoadingProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'};

  const content = (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-600`} />
      {text && (
        <p className="text-gray-600 text-sm font-medium">{text}</p>
      )}
    </div>;
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        {content}
      </div>
    )}

  return (
    <div className="flex items-center justify-center p-8">
      {content}
    </div>
  )}

// Skeleton loading components
export function SkeletonCard() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></di></div>
      <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></di></div>
      <div className="h-3 bg-gray-200 rounded w-2/3"></di></div>
    </div>
  )}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (<div className="animate-pulse space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`h-3 bg-gray-200 rounded ${
            i === lines - 1 ? 'w-2/3' : 'w-full'
          }`}
        ></di></div>
      ))}
    </div>
  )}