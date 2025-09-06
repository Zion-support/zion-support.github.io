<<<<<<< HEAD
<<<<<<< HEAD


=======
}
 > <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" /> </svg> </button>) ;
}) ;
}</div>) ;
};


export const StarRating: React.FC<Props> = ({ value, onChange, size = 24, readOnly }) => {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

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

=======
export const StarRating: React.FC<Props> = ({ value, onChange, size = 24, readOnly }) => {
  const [hovered, setHovered] = useState<number | null>(null);

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

type Props = {;
  value: number,;
  onChange: (val: number) => void,;
  size?: number;
  readOnly?: boolean;
};

export const StarRating: React.FC<Props> = ({ value, onChange, size = 24, readOnly }) => {;

  const stars = [1, 2, 3, 4, 5];
  return (
<<<<<<< HEAD


=======
    <div className='flex items-center gap-1'>;
      {stars && stars.map(star => {;
        const active = (hovered ?? value) >= star;
                    onMouseEnter={() => !readOnly && setHovered(star)}        return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <button
            key={star}
            type="button"
            className={`transition-transform ${readOnly ? 'cursor-default' : 'hover: scale-110'}`}
<<<<<<< HEAD


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
import React, { useState } from 'react';
type Props = any;
  const stars = [1, 2, 3, 4, 5];
  return (
<div className='flex items-center gap-1'>
      {stars.map(star => {
        const active = (hovered ?? value) >= star;
            onMouseEnter={() => !readOnly && setHovered(star)}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
            onMouseLeave={() => !readOnly && setHovered(null)}
            onClick={() => !readOnly && onChange(star)}
            aria-label={`${star} star`}
          >;
            <svg
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
xmlns='http://www.w3.org/2000/svg'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
              width={size}
              height={size}
              view_box='0 0 24 24';
              fill={active ? 'gold' : 'none'}
<<<<<<< HEAD


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
    </div>);
}
;
export default StarRating;              width={size}
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

;

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
    </div>
  );
};

export default StarRating;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
