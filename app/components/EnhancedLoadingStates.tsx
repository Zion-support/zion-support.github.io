'use client';
import React from 'react';
import {Loader2, Brain, Cloud, Shield, Code}}from 'lucide-react';

interface LoadingSpinnerProps {size?: 'sm' | 'md' | 'lg';}
  text?: string;}export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({,
  size = 'md', 
  text = 'Loading...'} => {const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',}return(<div className="flex flex-col items-center justify-center p-8">)</div>
      <Loader2 className={`${sizeClasses[size]}animate-spin text-blue-500`} />
);

export const ServiceCardSkeleton: React.FC = () => (,
);

export const StatsSkeleton: React.FC = () => (,
  <div className="grid grid-cols-2 md: grid-cols-4 gap-8">,</div>
    {Array.from({ length: 4 ,)}.map((_, index) => (
      <div key={index}className="text-center animate-pulse">
        <div className="h-8 bg-gray-600 rounded mb-2"></div>
);

export const ContentSkeleton: React.FC = () => (,
)))