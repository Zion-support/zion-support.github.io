<<<<<<< HEAD
import React, { useState } from 'react';

type Props = {
  value: number,
  onChange: (val: number) => void,
=======
<<<<<<< HEAD

;
}
 > <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" /> </svg> </button>)})}</div>)}export const StarRating: React.FC<Props> = ({ value, onChange, size = 24, readOnly }) => {class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) {return <div>Something went wrong.</div>;
    }return this.props.children;
  }
}
 > <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" /> </svg> </button>)})}</div>)}export const StarRating: React.FC<Props> = ({ value, onChange, size = 24, readOnly }) => {const [hovered, setHovered]  = useState<number | null>(null)type Props = {type Props = {export const StarRating: React.FC<Props> = ({ value, onChange, size = 24, readOnly }) => {const [hovered, setHovered]  = useState<number | null>(null)type Props = {value: number,onChange: (val: number) => void,size?: number;
  readOnly?: boolean;
}export const StarRating: React.FC<Props>  = ({ value, onChange, size = 24, readOnly }) => {const stars = [1, 2, 3, 4, 5];
  return (<div className='flex items-center gap-1'>;
      {stars && stars.map(star => {const active = (hovered ?? value) >= star;
                    onMouseEnter={() => !readOnly && setHovered(star)}        return (<button;
            key={star}
            type="button";
            className={`transition-transform ${readOnly ? 'cursor-default' : 'hover: scale-110'}`}import React, { useState } from 'react';
type Props = any;
  const stars = [1, 2, 3, 4, 5];
  return (<div className='flex items-center gap-1'>;
      {stars.map(star => {const active = (hovered ?? value) >= star;
            onMouseEnter={() => !readOnly && setHovered(star)}onMouseLeave={() => !readOnly && setHovered(null)}
            onClick={() => !readOnly && onChange(star)}
            aria-label={`${star} star`}
          >;
            <svg;
xmlns='http://www.w3.org/2000/svg';
              width={size}
              height={size}
              view_box='0 0 24 24';
              fill={active ? 'gold' : 'none'}export default StarRating;xmlns="http://www.w3.org/2000/svg";

}
 > <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" /> </svg> </button>) ;
}) ;
}</div>) ;
};


export const StarRating: React.FC<Props> = ({ value, onChange, size = 24, readOnly }) => {



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



type Props = {
type Props = {;
  value: number,;
  onChange: (val: number) => void,;
>>>>>>> origin/main
  size?: number;
  readOnly?: boolean
};

export const StarRating: React.FC<Props> = ({ value, onChange, size = 24, readOnly }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  const stars = [1, 2, 3, 4, 5];
<<<<<<< HEAD
=======
  return (
    <div className='flex items-center gap-1'>;
      {stars && stars.map(star => {;
        const active = (hovered ?? value) >= star;
                    onMouseEnter={() => !readOnly && setHovered(star)}        return (
>>>>>>> origin/main

  return (
    <div className="flex items-center gap-1">
      {stars.map((star) => {
        const active = (hovered ?? value) >= star;
        return (
          <button
            key={star}
            type="button"
<<<<<<< HEAD
            className={`transition-transform ${readOnly ? 'cursor-default' : 'hover:scale-110'}`}
            onMouseEnter={() => !readOnly && setHovered(star)}
=======
            className={`transition-transform ${readOnly ? 'cursor-default' : 'hover: scale-110'}`}
=======
<<<<<<< HEAD
<<<<<<< HEAD

;
}
 > <polygon points = \"12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2\" /> </svg> </button>)})}</div>)}

export;
  const StarRating: React.FC<Props /> = ({ value, onChange, size = 24, readOnly    }) => {
}
}
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }
}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) ;}
  return <div />Something went wrong.</div>;}
    }return this.props.children;
  }
}"
 > <polygon points = \"12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2\" /> </svg> </button>)})}</div>;
}

export const StarRating: React.FC<Props /> = ({ value, onChange, size = 24, readOnly    }) => {

}
const [hovered, setHovered]  =;}
  useState<number | null />(null)type Props = {type Props = {export const StarRating: React.FC<Props /> = ({ value, onChange, size = 24, readOnly }) => ;
  const [hovered, setHovered]  = useState<number | null />(null)type Props = {value: number,onChange: (val: number) => void,size?: number;}
  readOnly?: boolean;}
}

export const StarRating: React.FC<Props />  = ({ value, onChange, size = 24, readOnly }) => ;
  const stars = [1, 2, 3, 4, 5];
  return (<div className='flex items-center gap-1' />;
      {stars && stars.map(star = > ;}
  const active = (hovered ?? value) >= star;}
                    onMouseEnter = {() => !readOnly && setHovered(star)}       ;
  return (<button;
            key={star}"
            type=\"button\";
            className = {`transition-transform ${readOnly ? 'cursor-default' : 'hover: scale-110'}
}import React, {;}
  useState } from 'react';

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
import React, { useState } from 'react';
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
type Props = any;
  const stars = [1, 2, 3, 4, 5];
  return (
<div className='flex items-center gap-1'>
      {stars.map(star => {
        const active = (hovered ?? value) >= star;
            onMouseEnter={() => !readOnly && setHovered(star)}
origin/cursor/automate-test-improve-and-merge-code-2533


>>>>>>> origin/main
            onMouseLeave={() => !readOnly && setHovered(null)}
            onClick={() => !readOnly && onChange(star)}
            aria-label={`${star} star`}
          >
            <svg
<<<<<<< HEAD
=======



origin/cursor/automate-test-improve-and-merge-code-2533




              width={size}
              height={size}
              view_box='0 0 24 24';
              fill={active ? 'gold' : 'none'}
<<<<<<< HEAD
export default StarRating;

export default StarRating;

>>>>>>> origin/main
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

<<<<<<< HEAD
export default StarRating;
=======




    </div>
  );
};

export default StarRating;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
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
}
export default StarRating;
<<<<<<< HEAD

;

"
=======
> <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" /> </svg> </button>) 
}) 
}</div>) 
}
export default StarRating
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
