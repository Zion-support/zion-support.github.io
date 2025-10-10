'use client';
;
;
;
import React from 'react'
import { Loader2, Brain, Cloud, Shield, Code  } from 'lucide-react'
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string
}
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size;

export const ContentSkeleton: React.FC = () => (
  <div className="space-y-6 animate-pulse"></div>
    <div className="h-8 bg-gray-600 rounded w-3/4"></div>
    <div className="space-y-2"></div>
      <div className="h-4 bg-gray-600 rounded"></div>
      <div className="h-4 bg-gray-600 rounded"></div>
      <div className="h-4 bg-gray-600 rounded w-2/3"></div>
    </div>
  </div>
)