'use client';
import React from 'react';

interface LoadingSkeletonPro p s {
  lines?: number;
  className?: string;
}

const LoadingSkelet o n: React.FC<LoadingSkeletonPro p s /> = ({)
  lines = 3, 
  className = '' 
}) => {
return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines ,}).map((_, index) => ())
        <div>>
=======;
          key="{index}";
;
>>>>>>> origin/main;
