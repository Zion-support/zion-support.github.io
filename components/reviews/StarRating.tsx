<<<<<<< HEAD
import React, { useState } from 'react',;
;
type Props = {;
  value:number,;
  onChange:(val:number) => void,;
  size?:number,;
  readOnly?:boolean;
},;
;
export const StarRating:React.FC<Props> = ({ value, onChange, size = 24, readOnly }) => {;
  const [hovered, setHovered] = useState<number | null>(null),;
;
  const stars = [1, 2, 3, 4, 5],;
;
  return (;
    <div className="flex items-center gap-1">;
      {stars.map((star) => {;
        const active = (hovered ?? value) >= star,;
        return (;
          <button;
            key={star}
            type="button";
            className={`transition-transform ${readOnly ? 'cursor-default' :'hover:scale-110'}`}
=======
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
        const active = (hovered ?? value) >= star,
        return (
          <button
            key={star}
            type=&quot;button&quot;
            className={`transition-transform ${readOnly ? 'cursor-default' : 'hover:scale-110'}`}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
            onMouseEnter={() => !readOnly && setHovered(star)}
            onMouseLeave={() => !readOnly && setHovered(null)}
            onClick={() => !readOnly && onChange(star)}
            aria-label={`${star} star`}
<<<<<<< HEAD
          >;
            <svg;
              xmlns="http://www.w3.org/2000/svg";
              width={size}
              height={size}
              viewBox="0 0 24 24";
              fill={active ? 'gold' :'none'}
              stroke={active ? 'gold' :'currentColor'}
              strokeWidth="2";
              strokeLinecap="round";
              strokeLinejoin="round";
              className={`drop-shadow ${active ? 'animate-pulse-slow' :''}`}
            >;
              <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" />;
            </svg>;
          </button>;
        ),;
      })}
    </div>;
  ),;
},;
;
=======
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
              className={`drop-shadow ${active ? 'animate-pulse-slow' : ''}`}            >
              <polygon points=&quot;12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2&quot; />
            </svg>
          </button>
        )
      })}
    </div>
  )
},

>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
export default StarRating,