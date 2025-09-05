<<<<<<< HEAD
import React from 'react',;
import { Star, StarHalf } from 'lucide-react';
;
export function RatingStars({ value = 0, count } { value?:number, count?:number }) {;
  const filled = Math.floor(value),;
  const half = value - filled >= 0.5,;
  const total = 5,;
;
  return (;
    <div className="flex items-center text-zion-slate">;
      {[...Array(total)].map((_, i) => {;
        if (i < filled) {;
          return (;
            <Star;
              key={i}
              className="h-4 w-4 fill-zion-cyan text-zion-cyan";
            />;
          ),;
        }
        if (i === filled && half) {;
          return (;
            <StarHalf;
              key={i}
              className="h-4 w-4 fill-zion-cyan text-zion-cyan";
            />;
          ),;
        }
        return <Star key={i} className="h-4 w-4 text-zion-slate" />,;
      })}
      {typeof count === 'number' && (;
        <span className="text-xs ml-1">({count})</span>;
      )}
    </div>;
  ),;
=======
import React from 'react',
import { Star, StarHalf } from 'lucide-react'

export function RatingStars({ value = 0, count }: { value?: number, count?: number }) {
  const filled = Math.floor(value),
  const half = value - filled >= 0.5,
  const total = 5,

  return (
    <div className=&quot;flex items-center text-zion-slate&quot;>
      {[...Array(total)].map((_, i) => {        if (i < filled) {
          return (
            <Star
              key={i}
              className=&quot;h-4 w-4 fill-zion-cyan text-zion-cyan&quot;
            />
          )
        }
        if (i === filled && half) {_return (
            <StarHalf
              key={i}
              className=&quot;h-4 w-4 fill-zion-cyan text-zion-cyan&quot;
            />
          )
        }
        return <Star key={i} className="h-4 w-4 text-zion-slate" />      })}
      {typeof count === 'number' && (
        <span className=&quot;text-xs ml-1&quot;>({count})</span>
        return <Star key={_i} className="h-4 w-4 text-zion-slate" />;
      })}
      {_typeof count === 'number' && (
        <span className="text-xs ml-1">({count})</span>
      )}
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
