<<<<<<< HEAD:backup-problematic-files/reviews/StarRating.tsx
import React, { useState } from 'react',
=======
 > <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" /> </svg> </button>) 
}) 
}</div>) 
};

export const StarRating: React.FC<Props> = ({
  value,
  onChange,
  size = 24,
  readOnly,
}) => {  const [hovered, setHovered] = useState<number | null>(null);import React, { useState } from 'react';
>>>>>>> main:components/reviews/StarRating.tsx

type Props = {
  value: number,
  onChange: (val: number) => void,
<<<<<<< HEAD:backup-problematic-files/reviews/StarRating.tsx
  size?: number,
  readOnly?: boolean
},

export const StarRating: React.FC<Props> = ({ value, onChange, size = 24, readOnly }) => {
  const [hovered, setHovered] = useState<number | null>(null),

  const stars = [1, 2, 3, 4, 5],

  return (
    <div className="flex items-center gap-1">
      {stars.map((star) => {
        const active = (hovered ?? value) >= star,
        return (
          <button
            key={star}
            type="button"
            className={`transition-transform ${readOnly ? 'cursor-default' : 'hover:scale-110'}`}
            onMouseEnter={() => !readOnly && setHovered(star)}
=======
  size?: number;
  readOnly?: boolean
};

export const StarRating: React.FC<Props> = ({ value, onChange, size = 24, readOnly }) => {

  const stars = [1, 2, 3, 4, 5];

  return (
    <div className='flex items-center gap-1'>
      {stars.map(star => {
        const active = (hovered ?? value) >= star;
                    onMouseEnter={() => !readOnly && setHovered(star)}        return (
          <button
            key={star}
            type="button"
            className={`transition-transform ${readOnly ? 'cursor-default' : 'hover: scale-110'}`}
>>>>>>> main:components/reviews/StarRating.tsx
            onMouseLeave={() => !readOnly && setHovered(null)}
            onClick={() => !readOnly && onChange(star)}
            aria-label={`${star} star`}
          >
            <svg
<<<<<<< HEAD:backup-problematic-files/reviews/StarRating.tsx
              xmlns="http://www.w3.org/2000/svg"
              width={size}
              height={size}
=======
              xmlns='http://www.w3.org/2000/svg'
              width={size}
              height={size}
              viewBox='0 0 24 24'
              fill={active ? 'gold' : 'none'}
              stroke={active ? 'gold' : 'currentColor'}
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className={`drop-shadow ${active ? 'animate-pulse-slow' : ''}`}
            >
              <polygon points='12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2' />
            </svg>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;              width={size}
              height={size}
>>>>>>> main:components/reviews/StarRating.tsx
              viewBox="0 0 24 24"
              fill={active ? 'gold' : 'none'}
              stroke={active ? 'gold' : 'currentColor'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`drop-shadow ${active ? 'animate-pulse-slow' : ''}`}
            >
              <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" />
            </svg>
          </button>
        )
      })}
<<<<<<< HEAD:backup-problematic-files/reviews/StarRating.tsx
    </div>;
  );
};
export default StarRating;
=======
    </div>
  )
};

export default StarRating;
>>>>>>> main:components/reviews/StarRating.tsx
