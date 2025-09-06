<<<<<<< HEAD
:components/reviews/StarRating.tsx
> <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" /> </svg> </button>) 
:backup-problematic-files/reviews/StarRating.tsx
import React, { useState } from 'react',
 > <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" /> </svg> </button>) 
:backup-problematic-files/reviews/StarRating.tsx
=======

> <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" /> </svg> </button>) 

=======

 > <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" /> </svg> </button>) 

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
}) 
}</div>) 
};
:backup-problematic-files/reviews/StarRating.tsx

> <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" /> </svg> </button>)
})
}</div>)
}
export const StarRating: React.FC<Props> = ({
<<<<<<< HEAD
  value
  onChange
  size = 24
  readOnly
}) => {  const [hovered, setHovered] = useState<number | null>(null);import React, { useState } from 'react';
:components/reviews/StarRating.tsx
type Props = {
  value: number
  onChange: (val: number) => void
main:components/reviews/StarRating.tsx

=======



=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  value,
  onChange,
  size = 24,
  readOnly,;
}) => {  const [hovered, setHovered] = useState<number | null>(null);import React, { useState } from 'react';
<<<<<<< HEAD
:components/reviews/StarRating.tsx
main:components/reviews/StarRating.tsx

:backup-problematic-files/reviews/StarRating.tsx
type Props = {
  value: number,
  onChange: (val: number) => void,
:backup-problematic-files/reviews/StarRating.tsx
  size?: number,
  readOnly?: boolean
},


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
:backup-problematic-files/reviews/StarRating.tsx
=======



>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/reviews/StarRating.tsx
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
type Props = {
  value: number,
  onChange: (val: number) => void,


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  size?: number;
  readOnly?: boolean
}
export const StarRating: React.FC<Props> = ({ value, onChange, size = 24, readOnly }) => {
<<<<<<< HEAD
;
=======

;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
:components/reviews/StarRating.tsx
main:components/reviews/StarRating.tsx
:backup-problematic-files/reviews/StarRating.tsx
:backup-problematic-files/reviews/StarRating.tsx
=======




>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
            onMouseLeave={() => !readOnly && setHovered(null)}
            onClick={() => !readOnly && onChange(star)}
            aria-label={`${star} star`}
          >
            <svg
<<<<<<< HEAD
:backup-problematic-files/reviews/StarRating.tsx
              xmlns="http://www.w3.org/2000/svg"
              width={size}
              height={size}
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
}
export default StarRating;              width={size}
              height={size}
<<<<<<< HEAD
main:components/reviews/StarRating.tsx
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
:components/reviews/StarRating.tsx
:backup-problematic-files/reviews/StarRating.tsx
    </div>;
  );
};
export default StarRating;
:backup-problematic-files/reviews/StarRating.tsx
:backup-problematic-files/reviews/StarRating.tsx
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    </div>
  )
}
export default StarRating;
<<<<<<< HEAD
:components/reviews/StarRating.tsx

main:components/reviews/StarRating.tsx
:backup-problematic-files/reviews/StarRating.tsx
main:components/reviews/StarRating.tsx
:backup-problematic-files/reviews/StarRating.tsx
=======


>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/reviews/StarRating.tsx
=======
=======
>>>>>>> main:components/reviews/StarRating.tsx
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/reviews/StarRating.tsx
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
