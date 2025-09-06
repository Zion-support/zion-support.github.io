<<<<<<< HEAD
<<<<<<< HEAD
 > <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" /> </svg> </button>) 
}) 
}</div>) 
};

export const StarRating: React.FC<Props> = ({
  value,
  onChange,
  size = 24,
  readOnly,
}) => {
=======
import React, { useState } from 'react';

type Props = {
  value: number,
  onChange: (val: number) => void,
  size?: number;
  readOnly?: boolean
};

export const StarRating: React.FC<Props> = ({ value, onChange, size = 24, readOnly }) => {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import React, { useState } from 'react';

type Props = {
  value: number,
  onChange: (val: number) => void,
  size?: number;
  readOnly?: boolean
};

export const StarRating: React.FC<Props> = ({ value, onChange, size = 24, readOnly }) => {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const [hovered, setHovered] = useState<number | null>(null);

  const stars = [1, 2, 3, 4, 5];

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className='flex items-center gap-1'>
      {stars.map(star => {
        const active = (hovered ?? value) >= star;
        
=======
    <div className="flex items-center gap-1">
      {stars.map((star) => {
        const active = (hovered ?? value) >= star;
=======
    <div className="flex items-center gap-1">
      {stars.map((star) => {
        const active = (hovered ?? value) >= star;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        return (
          <button
            key={star}
            type="button"
            className={`transition-transform ${readOnly ? 'cursor-default' : 'hover: scale-110'}`}
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            onMouseEnter={() => !readOnly && setHovered(star)}
            onMouseLeave={() => !readOnly && setHovered(null)}
            onClick={() => !readOnly && onChange(star)}
            aria-label={`${star} star`}
          >
            <svg
<<<<<<< HEAD
<<<<<<< HEAD
              xmlns='http://www.w3.org/2000/svg'
=======
              xmlns="http://www.w3.org/2000/svg"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
    </div>
  )
};

<<<<<<< HEAD
export default StarRating;
=======
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
    </div>
  )
};

export default StarRating;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default StarRating;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
