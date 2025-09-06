import React, { useState } from 'react';
type Props = any;
  const stars = [1, 2, 3, 4, 5];
  return (
<div className='flex items-center gap-1'>
      {stars.map(star => {
        const active = (hovered ?? value) >= star;
            onMouseEnter={() => !readOnly && setHovered(star)}
            onMouseLeave={() => !readOnly && setHovered(null)}
            onClick={() => !readOnly && onChange(star)}
            aria-label={`${star} star`}
          >
            <svg
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

export default StarRating;
