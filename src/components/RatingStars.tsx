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
        if (i === filled && half) {;
          return (;
            <StarHalf;
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
              className="h-4 w-4 fill-zion-cyan text-zion-cyan";
            />;
          );
        }
        return <Star key={i} className="h-4 w-4 text-zion-slate" />;
      })}
      {typeof count === 'number' && (;
        <span className="text-xs ml-1">({count})</span>;
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      )}
    </div>
  )
}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
