#!/bin/bash

echo "Fixing remaining corrupted components..."

# Fix EnhancedLoading.tsx
cat > /workspace/app/components/EnhancedLoading.tsx << 'COMPONENT_EOF'
import React from 'react';
import { Loader2 } from 'lucide-react';

interface EnhancedLoadingProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

export default function EnhancedLoading({ 
  size = 'md', 
  text = 'Loading...', 
  className = '' 
}: EnhancedLoadingProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`flex flex-col items-center justify-center p-8 ${className}`}>
      <Loader2 className={`${sizeClasses[size]} text-cyan-400 animate-spin mb-4`} />
      <p className="text-gray-300 text-sm">{text}</p>
    </div>
  );
}
COMPONENT_EOF

# Fix EnhancedLoadingSkeleton.tsx
cat > /workspace/app/components/EnhancedLoadingSkeleton.tsx << 'COMPONENT_EOF'
import React from 'react';

interface SkeletonProps {
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className = '' }) => (
  <div className={`animate-pulse bg-gray-700 rounded ${className}`}></div>
);

interface EnhancedLoadingSkeletonProps {
  type?: 'card' | 'list' | 'table' | 'text';
  count?: number;
  className?: string;
}

export default function EnhancedLoadingSkeleton({ 
  type = 'card', 
  count = 3, 
  className = '' 
}: EnhancedLoadingSkeletonProps) {
  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return (
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <Skeleton className="h-4 w-3/4 mb-4" />
            <Skeleton className="h-3 w-full mb-2" />
            <Skeleton className="h-3 w-2/3 mb-4" />
            <Skeleton className="h-8 w-24" />
          </div>
        );
      case 'list':
        return (
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-1/4" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            </div>
          </div>
        );
      case 'table':
        return (
          <div className="bg-gray-800 rounded-lg border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <Skeleton className="h-4 w-1/3" />
            </div>
            <div className="p-4 space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex space-x-4">
                  <Skeleton className="h-4 w-1/4" />
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="h-4 w-1/6" />
                  <Skeleton className="h-4 w-1/4" />
                </div>
              ))}
            </div>
          </div>
        );
      case 'text':
        return (
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
            <Skeleton className="h-4 w-3/6" />
          </div>
        );
      default:
        return <Skeleton className="h-32 w-full" />;
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>
          {renderSkeleton()}
        </div>
      ))}
    </div>
  );
}
COMPONENT_EOF

echo "Remaining components fixed!"
