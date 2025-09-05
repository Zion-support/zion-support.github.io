<<<<<<< HEAD
import React from 'react',
import { Star, StarHalf } from 'lucide-react'

export function RatingStars({ value = 0, count }: { value?: number, count?: number }) {
  const filled = Math.floor(value),
  const half = value - filled >= 0.5,
  const total = 5,

  return (
    <div className=&quot;flex items-center text-zion-slate&quot;>
      {[...Array(total)].map((_, i) => {
=======
import React from 'react';

export function RatingStars(_{_value = 0, _count}: {_value?: number; count?: number}) {_const _filled = Math.floor(value);
  const _half = value - filled >= 0.5;
  const _total = 5;

  return (
    <div className="flex items-center text-zion-slate">
      {[...Array(total)].map(_(_, _i) => {
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        if (i < filled) {
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
<<<<<<< HEAD
<<<<<<< HEAD
        return <Star key={i} className="h-4 w-4 text-zion-slate" />
=======
        return <Star key={i} className=&quot;h-4 w-4 text-zion-slate&quot; />;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      })}
      {typeof count === 'number' && (
        <span className=&quot;text-xs ml-1&quot;>({count})</span>
=======
        return <Star key={_i} className="h-4 w-4 text-zion-slate" />;
      })}
      {_typeof count === 'number' && (
        <span className="text-xs ml-1">({count})</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      )}
    </div>
  )
}
