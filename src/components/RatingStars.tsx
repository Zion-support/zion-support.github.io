import React from 'react';
import { Star, StarHalf } from 'lucide-react';

interface RatingStarsProps {
  value: number;
  total?: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
}

export function RatingStars({ 
  value, 
  total = 5, 
  size = 'md', 
  showValue = false 
}: RatingStarsProps) {
  const filled = Math.floor(value);
  const hasHalf = value % 1 !== 0;
  
  const sizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  };

  return (
    <div className="flex items-center text-zion-slate">
      {[...Array(total)].map((_, i) => {
        if (i < filled) {
          return (
            <Star
              key={i}
              className={`${sizeClasses[size]} fill-zion-cyan text-zion-cyan`}
            />
          );
        } else if (i === filled && hasHalf) {
          return (
            <StarHalf
              key={i}
              className={`${sizeClasses[size]} fill-zion-cyan text-zion-cyan`}
            />
          );
        } else {
          return (
            <Star
              key={i}
              className={`${sizeClasses[size]} text-gray-300`}
            />
          );
        }
      })}
      {showValue && (
        <span className="ml-2 text-sm text-gray-600">
          {value.toFixed(1)}
        </span>
      )}
    </div>
  );
}