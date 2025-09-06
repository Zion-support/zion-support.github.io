import { Star, StarHalf } from 'lucide-react';

export function RatingStars({ value = 0 }) {
  const filled = Math.floor(value);
  const half = value - filled >= 0.5;

  return (
    <div className='flex items-center' data-testid='rating-stars'>
      {[0, 1, 2, 3, 4].map(i => {
        if (i < filled) {
          
            />
          );
        }
        if (i === filled && half) {
          
            />
          );
        }
        
          />
        );
      })}
    </div>
  );
