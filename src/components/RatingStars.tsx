<<<<<<< HEAD
import React from 'react';
=======
import React from 'react',
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import { Star, StarHalf } from 'lucide-react'

export function RatingStars({ value;
  return (
    <div className="flex items-center text-zion-slate">
      {[...Array(total)].map((_, i) => {
        if (i < filled) {
          return (
            <Star
              key={i}
              className="h-4 w-4 fill-zion-cyan text-zion-cyan"
            />
          )
        }
<<<<<<< HEAD
        if (i === filled && half) {
          return (
            <StarHalf
=======
        if (i === filled && half) {;
          return (;
            <StarHalf;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
              key={i}
              className="h-4 w-4 fill-zion-cyan text-zion-cyan"
            />
          )
        }
        return <Star key={i} className="h-4 w-4 text-zion-slate" />
      })}
      {typeof count === 'number' && (
        <span className="text-xs ml-1">({count})</span>
<<<<<<< HEAD
=======
              className="h-4 w-4 fill-zion-cyan text-zion-cyan";
            />;
          );
        }
        return <Star key={i} className="h-4 w-4 text-zion-slate" />;
      })}
      {typeof count === 'number' && (;
        <span className="text-xs ml-1">({count})</span>;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      )}
    </div>
  )
}
<<<<<<< HEAD
}
=======
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
