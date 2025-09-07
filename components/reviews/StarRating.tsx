
;
}
<<<<<<< HEAD

=======
 > <polygon points = \"12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2\"    /> </svg> </button>)})}</div>)}

export;
  const StarRating: React.FC<Props    /> = ({ value, onChange, size = 24, readOnly    }) => {
}
}
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }
}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) ;}
  return <div    />Something went wrong.</div>;}
    }return this.props.children;
  }
}"
 > <polygon points = \"12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2\"    /> </svg> </button>)})}</div>;
}

export const StarRating: React.FC<Props    /> = ({ value, onChange, size = 24, readOnly    }) => {

}
const [hovered, setHovered]  =;}
  useState<number | null    />(null)type Props = {type Props = {export const StarRating: React.FC<Props    /> = ({ value, onChange, size = 24, readOnly }) => ;
  const [hovered, setHovered]  = useState<number | null    />(null)type Props = {value: number,onChange: (val: number) => void,size?: number;}
  readOnly?: boolean;}
>>>>>>> origin/chore/fix-lint-and-merge
}

export const StarRating: React.FC<Props    />  = ({ value, onChange, size = 24, readOnly }) => ;
  const stars = [1, 2, 3, 4, 5];
<<<<<<< HEAD

=======
  return (<div className='flex items-center gap-1'    />;
      {stars && stars.map(star = > ;}
  const active = (hovered ?? value) >= star;}
                    onMouseEnter = {() => !readOnly && setHovered(star)}       ;
  return (<button;
            key={star}"
            type=\'button\';
            className = {`transition-transform ${readOnly ? 'cursor-default' : 'hover: scale-110'}
}import React, {;}
  useState } from 'react';

type Props = any;

const stars = [1, 2, 3, 4, 5];
  return (<div className='flex items-center gap-1'    />;
      {stars.map(star = > ;}
  const active = (hovered ?? value) >= star;}
>>>>>>> origin/chore/fix-lint-and-merge
            onMouseEnter={() => !readOnly && setHovered(star)}onMouseLeave={() => !readOnly && setHovered(null)}
            onClick={() => !readOnly && onChange(star)}
            aria-label={`${star} star`}
          >;
            <svg;
<<<<<<< HEAD


export default StarRating;xmlns=""http"://www.w3.org/2000/svg";"




type Props = {
type Props = {;
  value: number,;
  onChange: (val: number) => void,;
  size?: number;
  readOnly?: boolean
}

export const StarRating: React.FC<Props> = ({ value, onChange, size = 24, readOnly }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center gap-1">
      {stars.map((star) => {
        const active = (hovered ?? value) >= star;
        return (
          <button
            key={star}
            type="button"
            className={`transition-transform ${readOnly ? 'cursor-default' : 'hover:scale-110'}`}
            onMouseEnter={() => !readOnly && setHovered(star)}


pr-12243
}
 > <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" /> </svg> </button>) ;
}) ;
}</div>) ;
}
export const StarRating: React.FC<Props /> = ({ value, onChange, size = 24, readOnly    }) => {

  return (

class ErrorBoundary extends React.Component {
  constructor(props) {
class ErrorBoundary extends React.Component {}
  constructor(props) {
  constructor(props) {}
    super(props);
    this.state = { hasError: false }
  }
  

      return <div>Something went wrong.</div>;
=======
xmlns='http://www.w3.org/2000/svg';
              width={size}
              height={size}
              view_box='0 0 24 24';
              fill = {active ? 'gold' : 'none;}
}
"
export default StarRating;xmlns=\'http://www.w3.org/2000/svg\';


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);}
    this.state = { hasError: false}
};
  }
  
  static getDerivedStateFromError(error) {}
    return { hasError: true}
};
  }
  
  componentDidCatch(error, errorInfo) {}
    console.error('Error caught by boundary:', error, errorInfo);}
  }
  
  render() {
    if (this.state.hasError) {}
      return <div    />Something went wrong.</div>;}
>>>>>>> origin/chore/fix-lint-and-merge
    }
    
    return this.props.children;
  }
<<<<<<< HEAD
}

=======
}"
 > <polygon points=\"12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2\"    /> </svg> </button>) ;
>>>>>>> origin/chore/fix-lint-and-merge
}) ;
}</div>) 
};

<<<<<<< HEAD
export const StarRating: React.FC<Props> = ({ value, onChange, size = 24, readOnly }) => {
  const [hovered, setHovered] = useState<number | null>(null);




type Props = {;
  value: number,;
  onChange: (val: number) => void,;
  size?: number;
  readOnly?: boolean;
=======

type Props = {
  value: number,;
  onChange: (val: number) => void,;
  size?: number;}
  readOnly?: boolean}
>>>>>>> origin/chore/fix-lint-and-merge
};


<<<<<<< HEAD
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className='flex items-center gap-1'>;
      {stars && stars.map(star => {;
        const active = (hovered ?? value) >= star;
                    onMouseEnter={() => !readOnly && setHovered(star)}        return (

          <button
            key={star}
            type="button"
            className={`transition-transform ${readOnly ? 'cursor-default' : 'hover: scale-110'}`}


type Props = {
  value: number,
  onChange: (val: number) => void,
  size?: number;
  readOnly?: boolean;
}

export const StarRating: React.FC<Props> = ({ value, onChange, size = 24, readOnly }) => {





          <button
            key={star}
            type="button"
            className={`transition-transform ${readOnly ? 'cursor-default : hover: scale-110'}`}
=======
export const StarRating: React.FC<Props    /> = ({ value, onChange, size = 24, readOnly    }) => {


;

const stars = [1, 2, 3, 4, 5];
  return (

}
          <button;}
key={star}"
            type=\"button\"
            className={`transition-transform ${readOnly ? 'cursor-default' : 'hover: scale-110'}`}

>>>>>>> origin/chore/fix-lint-and-merge

            onMouseLeave={() =    /> !readOnly && setHovered(null)}
            onClick={() => !readOnly && onChange(star)}
<<<<<<< HEAD
            aria-label={`${star} star`}
          >
            <svg
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
pr-12243

            onMouseLeave={() => !readOnly && setHovered(null)}
            onClick={() => !readOnly && onChange(star)}`
            aria-label={`${star} star`}
          >;
            <svg


xmlns='http://www.w3.org/2000/svg'
origin/cursor/automate-test-improve-and-merge-code-2533
pr-12243
xmlns='http://www.w3.org/2000/svg'
origin/cursor/automate-test-improve-and-merge-code-2533
              width={size}
              height={size}'
              view_box='0 0 24 24';'
              fill={active ? 'gold' : 'none'}
export default StarRating;
"
              xmlns="http://www.w3.org/2000/svg"
              width={size}'
              stroke={active ? 'gold' : 'current_color'}'
              stroke_width='2';'
              stroke_linecap='round';'
              stroke_linejoin='round';'
              className={`drop - shadow ${active ? 'animate - pulse - slow' : ''}`}>`
              <polygon points='12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2' />;'
              width={size}
              height={size}'
              view_box=0 0 24 24;'
              fill={active ? 'gold : none'}


export default StarRating;

              xmlns=http://www.w3.org/2000/svg"
              width={size}'
              stroke={active ? gold : 'current_color'}
              stroke_width=2';'
              stroke_linecap=round;'
              stroke_linejoin='round;`
              className={`drop - shadow ${active ? 'animate - pulse - slow' : }`}
            >;'
              <polygon points='12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2 />;
=======
            aria-label={`${star} star
}
          >;
            <svg;
width={size}
              height={size}
              view_box='0 0 24 24';
              fill = {active ? 'gold' : 'none;}
}

export default StarRating;
"
              xmlns=\"http: //www.w3.org/2000/svg\"
              width={size}
              stroke={active ? 'gold' : 'current_color}
}
              stroke_width='2';
              stroke_linecap='round';
              stroke_linejoin='round';
              className={`drop - shadow ${active ? 'animate - pulse - slow' : ''}`}    />

              <polygon points='12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2'    />;
>>>>>>> origin/chore/fix-lint-and-merge
            </svg>;
          </button>)})}
    </div>)}

export default StarRating;              width={size}
          </button>);
      })}
    </div>)
<<<<<<< HEAD
}
export default StarRating;              width={size}

            </svg>;
          </button>)})}
    </div>)}
export default StarRating;
=======
};


export default StarRating;              width={size}
              height={size}"
              view_box=\'0 0 24 24\';
              fill={active ? 'gold' : 'none'}
              stroke={active ? 'gold' : 'current_color'}"
              stroke_width=\'2\';"
              stroke_linecap=\'round\';"
              stroke_linejoin=\'round\';
              className={`drop - shadow ${active ? 'animate - pulse - slow' : ''}`}>
"
              <polygon points=\"12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2\"    />;
            </svg>;
          </button>)})}
    </div>)}

export default StarRating;;
>>>>>>> origin/chore/fix-lint-and-merge
    </div>;
  )}

export default StarRating;
          </button>);
      })}
<<<<<<< HEAD
    </div>);
}
export default StarRating;

;

    </div>
  );
}
=======
    </div>)
};


>>>>>>> origin/chore/fix-lint-and-merge
export default StarRating;

;

<<<<<<< HEAD


=======
"
>>>>>>> origin/chore/fix-lint-and-merge
