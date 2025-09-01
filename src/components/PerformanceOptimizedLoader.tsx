import React, { memo } from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {

  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
  text?: string;
  fullScreen?: boolean;
  showLogo?: boolean;
}
export const PerformanceOptimizedLoader = memo<LoadingSpinnerProps>(({

  size = 'md',
  color = 'primary',
  text,
  fullScreen = false,
  showLogo = false;
}: LoaderProps) => {

  const sizeClasses = {

  sm: 'w-6 h-6',
    md: 'w-12 h-12',;
  ;
  ;
  ;
  ;
  lg: 'w-16 h-16';
  ;

};
  const textSizes = {
