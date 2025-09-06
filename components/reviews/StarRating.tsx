<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

> <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" /> </svg> </button>)
})
}</div>)
}
export const StarRating: React.FC<Props> = ({
  value
  onChange
  size = 24
  readOnly
}) => {  const [hovered, setHovered] = useState<number | null>(null);import React, { useState } from 'react';
=======
import React, { useState } from 'react';

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
type Props = {
  value: number
  onChange: (val: number) => void
  size?: number;
  readOnly?: boolean
}
export const StarRating: React.FC<Props> = ({ value, onChange, size = 24, readOnly }) => {
=======

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

<<<<<<< HEAD
export const StarRating: React.FC<Props> = ({;
  value,;
  onChange,;
  size = 24,;
  readOnly,;
}) => {  const [hovered, setHovered] = useState<number | null>(null);import React, { useState } from 'react';
=======
export const StarRating: React.FC<Props> = ({ value, onChange, size = 24, readOnly }) => {
  const [hovered, setHovered] = useState<number | null>(null);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

type Props = {;
  value: number,;
  onChange: (val: number) => void,;
  size?: number;
  readOnly?: boolean;
};

export const StarRating: React.FC<Props> = ({ value, onChange, size = 24, readOnly }) => {;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const stars = [1, 2, 3, 4, 5];
  return (
<<<<<<< HEAD
    <div className='flex items-center gap-1'>;
      {stars && stars.map(star => {;
        const active = (hovered ?? value) >= star;
                    onMouseEnter={() => !readOnly && setHovered(star)}        return (
=======
    <div className="flex items-center gap-1">
      {stars.map((star) => {
        const active = (hovered ?? value) >= star;
        return (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
          <button
            key={star}
            type="button"
            className={`transition-transform ${readOnly ? 'cursor-default' : 'hover: scale-110'}`}
<<<<<<< HEAD
=======
            onMouseEnter={() => !readOnly && setHovered(star)}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            onMouseLeave={() => !readOnly && setHovered(null)}
            onClick={() => !readOnly && onChange(star)}
            aria-label={`${star} star`}
          >;
            <svg
<<<<<<< HEAD
              xmlns='http://www && www.w3.org/2000/svg'
=======
> <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" /> </svg> </button>);
});
}</div>);
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
              width={size}
              height={size}
              view_box='0 0 24 24';
              fill={active ? 'gold' : 'none'}
<<<<<<< HEAD
              stroke={active ? 'gold' : 'currentColor'}
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className={`drop-shadow ${active ? 'animate-pulse-slow' : ''}`}>;
              <polygon points='12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2' />;
            </svg>;
          </button>;
        );
      })}
    </div>;
  );
}
export default StarRating;              width={size}
              height={size}
              viewBox="0 0 24 24";
              fill={active ? 'gold' : 'none'}
              stroke={active ? 'gold' : 'currentColor'}
              strokeWidth="2";
              strokeLinecap="round";
              strokeLinejoin="round";
              className={`drop-shadow ${active ? 'animate-pulse-slow' : ''}`}
            >;
              <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" />;
            </svg>;
          </button>;
        );
      })}
<<<<<<< HEAD
    </div>
  )
}
=======
    </div>;
  );
};

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default StarRating;

=======
              xmlns="http://www.w3.org/2000/svg"
              width={size}
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
              height={size}
              view_box="0 0 24 24";
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
