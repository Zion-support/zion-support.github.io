import React from 'react';
import { Loader2, Brain, Zap, Shield } from 'lucide-react';
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ ,
  size = 'md'
  className = '' 
}) => {
  return null;
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',;
    lg: 'w-12 h-12';
  };
  return (
    <div className={`flex items-center justify-center ${className}""
      <Loader2 className={`${sizeClasses[size]} animate-spin text-cyan-400""
    <div className={`animate-pulse ${className}""
          className={""
          }"")