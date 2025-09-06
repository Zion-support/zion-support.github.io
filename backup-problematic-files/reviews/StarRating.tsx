<<<<<<< HEAD
import React, { useState } from 'react',
=======
<<<<<<< HEAD:components/reviews/StarRating.tsx
<<<<<<< HEAD
=======
> <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" /> </svg> </button>) 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
<<<<<<< HEAD:backup-problematic-files/reviews/StarRating.tsx
import React, { useState } from 'react',
=======

 > <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" /> </svg> </button>) 
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/reviews/StarRating.tsx
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
}) 
}</div>) 
};

> <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" /> </svg> </button>)
})
}</div>)
}
export const StarRating: React.FC<Props> = ({
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  value
  onChange
  size = 24
  readOnly
}) => {  const [hovered, setHovered] = useState<number | null>(null);import React, { useState } from 'react';
<<<<<<< HEAD
type Props = {
  value: number
  onChange: (val: number) => void

=======
<<<<<<< HEAD:components/reviews/StarRating.tsx
type Props = {
  value: number
  onChange: (val: number) => void
=======
>>>>>>> main:components/reviews/StarRating.tsx

=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  value,
  onChange,
  size = 24,
  readOnly,;
}) => {  const [hovered, setHovered] = useState<number | null>(null);import React, { useState } from 'react';

type Props = {
  value: number,
  onChange: (val: number) => void,
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
  size?: number;
  readOnly?: boolean
}
export const StarRating: React.FC<Props> = ({ value, onChange, size = 24, readOnly }) => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD
=======
<<<<<<< HEAD:components/reviews/StarRating.tsx
=======
>>>>>>> main:components/reviews/StarRating.tsx
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/reviews/StarRating.tsx
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/reviews/StarRating.tsx
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
            onMouseLeave={() => !readOnly && setHovered(null)}
            onClick={() => !readOnly && onChange(star)}
            aria-label={`${star} star`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={size}
              height={size}
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
<<<<<<< HEAD
=======
<<<<<<< HEAD:components/reviews/StarRating.tsx
=======
<<<<<<< HEAD:backup-problematic-files/reviews/StarRating.tsx
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    </div>;
  );
};
export default StarRating;
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/reviews/StarRating.tsx
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/reviews/StarRating.tsx
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    </div>
  )
}
export default StarRating;
<<<<<<< HEAD:components/reviews/StarRating.tsx
<<<<<<< HEAD

