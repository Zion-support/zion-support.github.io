<<<<<<< HEAD
import React from 'react',
import { Star, StarHalf } from 'lucide-react'

export function RatingStars({ value;
=======
import React from 'react';
import { Star, StarHalf } from 'lucide-react'

export function RatingStars({ value = 0, count }: { value?: number; count?: number }) {
  const filled = Math.floor(value);
  const half = value - filled >= 0.5;
  const total = 5;

>>>>>>> origin/auto/autonomy-17186719616
  return (
    <div className="flex items-center text-zion-slate">
      {[...Array(total)].map((_, i) => {
        if (i < filled) {
          return (
            <Star
              key={i}
              className="h-4 w-4 fill-zion-cyan text-zion-cyan"
            />
<<<<<<< HEAD
          ),
=======
          );
>>>>>>> origin/auto/autonomy-17186719616
        }
        if (i === filled && half) {
          return (
            <StarHalf
              key={i}
              className="h-4 w-4 fill-zion-cyan text-zion-cyan"
            />
<<<<<<< HEAD
          ),
        }
        return <Star key={i} className="h-4 w-4 text-zion-slate" />,
=======
          );
        }
        return <Star key={i} className="h-4 w-4 text-zion-slate" />;
>>>>>>> origin/auto/autonomy-17186719616
      })}
      {typeof count === 'number' && (
        <span className="text-xs ml-1">({count})</span>
      )}
    </div>
<<<<<<< HEAD
  ),
=======
  );
>>>>>>> origin/auto/autonomy-17186719616
}
