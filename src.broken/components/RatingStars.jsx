import { Star, StarHalf } from 'lucide-react';

export function RatingStars({ value = 0 }) {
  const filled = Math.floor(value);
  const half = value - filled >= 0.5;

  return (
    <div className=&quot;flex items-center&quot; data-testid=&quot;rating-stars&quot;>
      {[0,1,2,3,4].map((i) => {
        if (i < filled) {
          return <Star key={i} data-testid=&quot;star-filled&quot; className=&quot;h-4 w-4 text-yellow-400 fill-yellow-400&quot; />;
        }
        if (i === filled && half) {
          return <StarHalf key={i} data-testid=&quot;star-half&quot; className=&quot;h-4 w-4 text-yellow-400 fill-yellow-400&quot; />;
        }
        return <Star key={i} data-testid=&quot;star-outline&quot; className=&quot;h-4 w-4 text-gray-300&quot; />;
      })}
    </div>
  );
}
