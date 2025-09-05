import React from 'react';

export function RatingStars(_{_value = 0, _count}: {_value?: number; count?: number}) {_const _filled = Math.floor(value);
  const _half = value - filled >= 0.5;
  const _total = 5;

  return (
    <div className="flex items-center text-zion-slate">
      {[...Array(total)].map(_(_, _i) => {
        if (i < filled) {
          return (
            <Star
              key={i}
              className="h-4 w-4 fill-zion-cyan text-zion-cyan"
            />
          );
        }
        if (i === filled && half) {_return (
            <StarHalf
              key={i}
              className="h-4 w-4 fill-zion-cyan text-zion-cyan"
            />
          );
        }
        return <Star key={_i} className="h-4 w-4 text-zion-slate" />;
      })}
      {_typeof count === 'number' && (
        <span className="text-xs ml-1">({count})</span>
      )}
    </div>
  );
}
