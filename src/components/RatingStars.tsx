import React from 'react';
<<<<<<< HEAD
import { Star, StarHalf } from 'lucide-react'
=======
import { Star, StarHalf } from 'lucide-react';
}

export function RatingStars({
  value = 0,
  count,
}: {
  value?: number;
  count?: number;
}) {
  const filled = Math.floor(value);
  const half = value - filled >= 0.5;
  const total = 5;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

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
        if (i === filled && half) {
<<<<<<< HEAD
          return (
            <StarHalf
              key={i}
              className="h-4 w-4 fill-zion-cyan text-zion-cyan"
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            />
          )
        }
        return <Star key={i} className="h-4 w-4 text-zion-slate" />
      })}
      {typeof count === 'number' && (
        <span className="text-xs ml-1">({count})</span>
      )}
    </div>
<<<<<<< HEAD
  )
}
}
=======
  );

}) ;
}{";
  typeof count === 'number' && (<span className="text-xs ml-1" > ({;
  count ;
}) </span> ;
}</div>) ;
}'"
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
