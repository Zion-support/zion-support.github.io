import React, {_useState} from 'react';

type Props = {_value: number;
  onChange: (_val: number) => void;
  size?: number;
  readOnly?: boolean;};

export const StarRating: React.FC<Props> = (_{_value, _onChange, _size = 24, _readOnly}) => {_const [hovered, _setHovered] = useState<number | null>(null);

  const _stars = [1, _2, _3, _4, _5];

  return (_<div className="flex items-center gap-1">
      {stars.map((star) => {
        const _active = (hovered ?? value) >= star;
        return (_<button
            key={star}
            type="button"
            className={_`transition-transform ${readOnly ? 'cursor-default' : 'hover:scale-110'}`}
            onMouseEnter={_() => !readOnly && setHovered(star)}
            onMouseLeave={_() => !readOnly && setHovered(null)}
            onClick={_() => !readOnly && onChange(star)}
            aria-label={_`${star} star`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={_size}
              height={_size}
              viewBox="0 0 24 24"
              fill={_active ? 'gold' : 'none'}
              stroke={_active ? 'gold' : 'currentColor'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={_`drop-shadow ${active ? 'animate-pulse-slow' : ''}`}
            >
              <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" />
            </svg>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;