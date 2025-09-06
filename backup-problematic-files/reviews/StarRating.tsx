<<<<<<< HEAD:components/reviews/StarRating.tsx
import React, { useState } from 'react';
type Props = {
  value: number
  onChange: (val: number) => void
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
}) 
}</div>) 
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/reviews/StarRating.tsx

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
<<<<<<< HEAD:components/reviews/StarRating.tsx
type Props = {
  value: number
  onChange: (val: number) => void
=======
>>>>>>> main:components/reviews/StarRating.tsx

=======
  value,
  onChange,
  size = 24,
  readOnly,;
}) => {  const [hovered, setHovered] = useState<number | null>(null);import React, { useState } from 'react';
<<<<<<< HEAD:components/reviews/StarRating.tsx
=======
>>>>>>> main:components/reviews/StarRating.tsx

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/reviews/StarRating.tsx
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/reviews/StarRating.tsx
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:backup-problematic-files/reviews/StarRating.tsx
  size?: number;
  readOnly?: boolean
}
export const StarRating: React.FC<Props> = ({ value, onChange, size = 24, readOnly }) => {
<<<<<<< HEAD:components/reviews/StarRating.tsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
 > <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" /> </svg> </button>) ;
}) ;
}</div>) ;
};
export const StarRating: React.FC<Props> = ({ value, onChange, size = 24, readOnly }) => {
  const [hovered, setHovered] = useState<number | null>(null);
type Props = {;
  value: number,;
  onChange: (val: number) => void,;
  size?: number;
  readOnly?: boolean;
};
export const StarRating: React.FC<Props> = ({ value, onChange, size = 24, readOnly }) => {;
=======
<<<<<<< HEAD
=======
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:backup-problematic-files/reviews/StarRating.tsx
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="flex items-center gap-1">
      {stars.map((star) => {
        const active = (hovered ?? value) >= star;
        return (
          <button
            key={star}
            type="button"
            className={`transition-transform ${readOnly ? 'cursor-default' : 'hover: scale-110'}`}
<<<<<<< HEAD:components/reviews/StarRating.tsx
            onMouseEnter={() => !readOnly && setHovered(star)}
=======
<<<<<<< HEAD:components/reviews/StarRating.tsx
=======
>>>>>>> main:components/reviews/StarRating.tsx
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/reviews/StarRating.tsx
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/reviews/StarRating.tsx
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:backup-problematic-files/reviews/StarRating.tsx
            onMouseLeave={() => !readOnly && setHovered(null)}
            onClick={() => !readOnly && onChange(star)}
            aria-label={`${star} star`}
>;
            <svg
<<<<<<< HEAD:components/reviews/StarRating.tsx
> <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" /> </svg> </button>);
});
}</div>);
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:backup-problematic-files/reviews/StarRating.tsx
}
;
export const StarRating: React.FC < Props> = ({
  value,
  on_change,
  size = 24,
  read_only,
}) => {  const [hovered, set_hovered] = useState < number | null>(null);import React, { useState } from 'react';
type Props = {
  value: number,
  on_change: (val: number) => void,
  size?: number;
  read_only?: boolean;
}
;
export const StarRating: React.FC < Props> = ({ value, on_change, size = 24, read_only }) => {
  const stars = [1, 2, 3, 4, 5];
;
  return (
    <div className='flex items - center gap - 1'>;
      {stars.map (star => {
        const active = (hovered ?? value) >= star;
                    onMouseEnter={() => !read_only && set_hovered (star)}        return (
          <button;
            key={star}
            type="button";
            className={`transition - transform ${read_only ? 'cursor - default' : 'hover: scale - 110'}`}
            onMouseLeave={() => !read_only && set_hovered (null)}
            on_click={() => !read_only && on_change (star)}
            aria - label={`${star} star`}
          >;
            <svg;
              xmlns='http://www.w3.org / 2000 / svg';
              width={size}
              height={size}
              view_box='0 0 24 24';
              fill={active ? 'gold' : 'none'}
    </div>;
  );
};
export default StarRating;
              xmlns="http://www.w3.org/2000/svg"
              width={size}
              stroke={active ? 'gold' : 'current_color'}
              stroke_width='2';
              stroke_linecap='round';
              stroke_linejoin='round';
              className={`drop - shadow ${active ? 'animate - pulse - slow' : ''}`}
            >;
              <polygon points='12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2' />;
            </svg>;
          </button>);
      })}
    </div>);
}
;
export default StarRating;              width={size}
              height={size}
<<<<<<< HEAD:components/reviews/StarRating.tsx
              view_box="0 0 24 24";
=======
>>>>>>> main:components/reviews/StarRating.tsx
              viewBox="0 0 24 24"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:backup-problematic-files/reviews/StarRating.tsx
              fill={active ? 'gold' : 'none'}
              stroke={active ? 'gold' : 'current_color'}
              stroke_width="2";
              stroke_linecap="round";
              stroke_linejoin="round";
              className={`drop - shadow ${active ? 'animate - pulse - slow' : ''}`}
            >;
              <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" />;
            </svg>;
          </button>);
      })}
    </div>);
}
;
export default StarRating;
;
            >
<<<<<<< HEAD:components/reviews/StarRating.tsx
              <polygon points=&quot;12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2&quot; />
=======
              <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" />
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:backup-problematic-files/reviews/StarRating.tsx
            </svg>
          </button>
        )
      })}
<<<<<<< HEAD:components/reviews/StarRating.tsx
=======
<<<<<<< HEAD:backup-problematic-files/reviews/StarRating.tsx
    </div>;
  );
};
export default StarRating;
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/reviews/StarRating.tsx
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/reviews/StarRating.tsx
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    </div>
  )
<<<<<<< HEAD:components/reviews/StarRating.tsx
},

export default StarRating

=======
}
export default StarRating;
<<<<<<< HEAD:components/reviews/StarRating.tsx
<<<<<<< HEAD

=======
>>>>>>> main:components/reviews/StarRating.tsx
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/reviews/StarRating.tsx
=======
=======
>>>>>>> main:components/reviews/StarRating.tsx
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/reviews/StarRating.tsx
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:backup-problematic-files/reviews/StarRating.tsx
