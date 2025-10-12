
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import React from 'react';
export default LoadingSkeleton;
'use client';
interface LoadingSkeletonProps {
  lines?: number;
  className?: string;
}
const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
const LoadingSkeleton: React.FC<LoadingSkeletonProps /> = ({
  lines = 3,
  className = ''
}) => {
  return (
    <div className={`animate-pulse ${className}`}></div>
      {Array.from({ length: lines }).map((_, index) => (
        <div;
          key={index}
          className="h-4bg-gray-300 rounded mb-2"></div>
      ))}
    </div>
  );
};
          key="{index}"
;
 (
          key="{index}"
;
}