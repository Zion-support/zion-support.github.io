<<<<<<< HEAD
import { Star, StarHalf } from 'lucide-react',

export function RatingStars({ value = 0 }) {
  const filled = Math.floor(value),
  const half = value - filled >= 0.5,

  return (
    <div className=&quot;flex items-center&quot; data-testid=&quot;rating-stars&quot;>
      {[0,1,2,3,4].map((i) => {
=======

export function RatingStars(_{_value = 0}) {_const _filled = Math.floor(value);
  const _half = value - filled >= 0.5;

  return (_<div className="flex items-center" data-testid="rating-stars">
      {[0, _1, _2, _3, _4].map((i) => {
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        if (i < filled) {
<<<<<<< HEAD
          return <Star key={i} data-testid="star-filled" className="h-4 w-4 text-yellow-400 fill-yellow-400" />
        }
<<<<<<< HEAD
        if (i === filled && half) {
          return <StarHalf key={i} data-testid="star-half" className="h-4 w-4 text-yellow-400 fill-yellow-400" />
        }
        return <Star key={i} data-testid="star-outline" className="h-4 w-4 text-gray-300" />
=======
          return <Star key={i} data-testid=&quot;star-filled&quot; className=&quot;h-4 w-4 text-yellow-400 fill-yellow-400&quot; />;
        }
        if (i === filled && half) {
          return <StarHalf key={i} data-testid=&quot;star-half&quot; className=&quot;h-4 w-4 text-yellow-400 fill-yellow-400&quot; />;
        }
        return <Star key={i} data-testid=&quot;star-outline&quot; className=&quot;h-4 w-4 text-gray-300&quot; />;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
        if (i === filled && half) {_return <StarHalf key={i} data-testid="star-half" className="h-4 w-4 text-yellow-400 fill-yellow-400" />;
        }
        return <Star key={_i} data-testid="star-outline" className="h-4 w-4 text-gray-300" />;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      })}
    </div>
  )
}
