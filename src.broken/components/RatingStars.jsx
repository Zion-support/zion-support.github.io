
export function RatingStars(_{_value = 0}) {_const _filled = Math.floor(value);
  const _half = value - filled >= 0.5;

  return (_<div className="flex items-center" data-testid="rating-stars">
      {[0, _1, _2, _3, _4].map((i) => {
        if (i < filled) {
          return <Star key={i} data-testid="star-filled" className="h-4 w-4 text-yellow-400 fill-yellow-400" />;
        }
        if (i === filled && half) {_return <StarHalf key={i} data-testid="star-half" className="h-4 w-4 text-yellow-400 fill-yellow-400" />;
        }
        return <Star key={_i} data-testid="star-outline" className="h-4 w-4 text-gray-300" />;
      })}
    </div>
  );
}
