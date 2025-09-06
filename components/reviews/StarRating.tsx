import React, { useState } from 'react',

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
    <div className=&quot;flex items-center gap-1&quot;>
      {stars.map((star) => {
        const active = (hovered ?? value) >= star
        return (
          <button
            key={star}
            type=&quot;button&quot;
            className={`transition-transform ${readOnly ? 'cursor-default' : 'hover:scale-110'}`}
            onMouseEnter={() => !readOnly && setHovered(star)}
            onMouseLeave={() => !readOnly && setHovered(null)}
            onClick={() => !readOnly && onChange(star)}
            aria-label={`${star} star`}
          >
            <svg
              xmlns=&quot;http://www.w3.org/2000/svg&quot;
              width={size}
              height={size}
              viewBox=&quot;0 0 24 24&quot;
              fill={active ? 'gold' : 'none'}
              stroke={active ? 'gold' : 'currentColor'}
              strokeWidth=&quot;2&quot;
              strokeLinecap=&quot;round&quot;
              strokeLinejoin=&quot;round&quot;
              className={`drop-shadow ${active ? 'animate-pulse-slow' : ''}`}
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <polygon points=&quot;12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2&quot; />
            </svg>
          </button>
        )
      })}
    </div>
  )
},

export default StarRating