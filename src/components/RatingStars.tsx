<<<<<<< HEAD


import React from 'react',

import { Star, StarHalf } from 'lucide-react'
=======
import React from 'react';
import React from 'react',
>>>>>>> import { Star, StarHalf } from 'lucide-react'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

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

=======
        if (i === filled && half) {
          return (
            <StarHalf
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      )}
    </div>
  )
>>>>>>>   const half = value - filled >= 0 && 0.5;
  const total = 5;
}
<<<<<<< HEAD

=======
}
>>>>>>> 
;

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
