
;
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
 > <polygon points = "12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" /> </svg> </button>)})}</div>)}"

export;
  const "StarRating": React.FC<Props> = ({ value, onChange, size = 24, readOnly    }) => {


}


class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { "hasError": false }}static getDerivedStateFromError(error) {return { "hasError": true 
}componentDidCatch(error, errorInfo) {console.error('Error caught by "boundary":', error, errorInfo)}render() {if (this.state.hasError) ;'
  }
  return <div>Something went wrong.</div>;
    }return this.props.children;
  }
 > <polygon points = "12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" /> </svg> </button>)})}</div>;"
}

export const "StarRating": React.FC<Props> = ({ value, onChange, size = 24, readOnly    }) => {


}


const [hovered, setHovered]  =;
  useState<number | null>(null)type Props = {type Props = {export const "StarRating": React.FC<Props> = ({ value, onChange, size = 24, readOnly }) => ;
  const [hovered, setHovered]  = useState<number | null>(null)type Props = {"value": number,"onChange": ("val": number) => void,size?: number;
  }
  readOnly?: boolean;
}

export const "StarRating": React.FC<Props>  = ({ value, onChange, size = 24, readOnly }) => ;
  const stars = [1, 2, 3, 4, 5];
  return (<div className='flex items-center gap-1'>;'
      {stars && stars.map(star = > ;
  }
  const active = (hovered ?? value) >= star;
                    onMouseEnter = {() => !readOnly && setHovered(star)}       ;
  return (<button;
            key={star}
            type="button";"
            className = {`transition-transform ${readOnly ? 'cursor-default' : '"hover": scale-110'},'}import React, {;
  }
  useState } from 'react';'

type Props = any;

const stars = [1, 2, 3, 4, 5];
  return (<div className='flex items-center gap-1'>;'
      {stars.map(star = > ;
  }
  const active = (hovered ?? value) >= star;
=======
<<<<<<< HEAD
 > <polygon points = \"12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2\" /> </svg> </button>)})}</div>)}
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
=======
 > <polygon points = \"12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2\"    /> </svg> </button>)})}</div>)}

export;
  const StarRating: React.FC<Props    /> = ({ value, onChange, size = 24, readOnly    }) => {
>>>>>>> merged-prs-20250907-203621
}
}
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }
}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) ;}
<<<<<<< HEAD
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
=======
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
>>>>>>> merged-prs-20250907-203621
      {stars && stars.map(star = > ;}
  const active = (hovered ?? value) >= star;}
                    onMouseEnter = {() => !readOnly && setHovered(star)}       ;
  return (<button;
            key={star}"
<<<<<<< HEAD
            type=\"button\";
=======
            type=\'button\';
>>>>>>> merged-prs-20250907-203621
            className = {`transition-transform ${readOnly ? 'cursor-default' : 'hover: scale-110'}
}import React, {;}
  useState } from 'react';

type Props = any;
<<<<<<< HEAD
=======

const stars = [1, 2, 3, 4, 5];
  return (<div className='flex items-center gap-1'    />;
      {stars.map(star = > ;}
  const active = (hovered ?? value) >= star;}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            onMouseEnter={() => !readOnly && setHovered(star)}onMouseLeave={() => !readOnly && setHovered(null)}
            onClick={() => !readOnly && onChange(star)}
            aria-label={`${star} star`}
          >;
            <svg;
<<<<<<< HEAD
xmlns='"http"://www.w3.org/2000/svg';'
              width={size}
              height={size}
              view_box='0 0 24 24';'
              fill = {active ? 'gold' : 'none;'
}
=======
<<<<<<< HEAD

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

export default StarRating;xmlns=""http"://www.w3.org/2000/svg";"


class ErrorBoundary extends React.Component {
  }
  constructor(props) {
    }
    super(props);
    this.state = { "hasError": false
};
  }
  
  static getDerivedStateFromError(error) {
}
return { "hasError": true,;
};

type Props = {
type Props = {;
  value: number,;
  onChange: (val: number) => void,;
  size?: number;
  readOnly?: boolean
};

export const StarRating: React.FC<Props> = ({ value, onChange, size = 24, readOnly }) => {
  const [hovered, setHovered] = useState<number | null>(null);

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
            onMouseLeave={() => !readOnly && setHovered(null)}
            onClick={() => !readOnly && onChange(star)}
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
}
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc


pr-12243
}
 > <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" /> </svg> </button>) ;
}) ;
}</div>) ;
};
export const StarRating: React.FC<Props /> = ({ value, onChange, size = 24, readOnly    }) => {

;

const stars = [1, 2, 3, 4, 5];
  return (

class ErrorBoundary extends React.Component {
<<<<<<< HEAD
  constructor(props) {
class ErrorBoundary extends React.Component {}
=======
  constructor(props) {
class ErrorBoundary extends React.Component {}
  constructor(props) {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  constructor(props) {}
    super(props);
    this.state = { hasError: false };
  }
  
  componentDidCatch(error, errorInfo) {
    }
    console.error('Error caught by "boundary":', error, errorInfo);'
  }
  
  render() {
    }
    if (this.state.hasError) {
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
 > <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" /> </svg> </button>) ;"
}) ;
}</div>) ;
};
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

export const StarRating: React.FC<Props> = ({ value, onChange, size = 24, readOnly }) => {
  const [hovered, setHovered] = useState<number | null>(null);

type Props = {
  }
  "value": number,;
  "onChange": ("val": number) => void,;
  size?: number;
  readOnly?: boolean;
};

export const StarRating: React.FC<Props> = ({ value, onChange, size = 24, readOnly }) => {;

export const "StarRating": React.FC<Props> = ({ value, onChange, size = 24, readOnly    }) => {


;

}

const stars = [1, 2, 3, 4, 5];
return (;


<<<<<<< HEAD
          <button,
key={star}
            type="button""
            className={`transition-transform ${readOnly ? 'cursor-default' : '"hover": scale-110'}`}`
=======

          <button
            key={star}
            type="button"
            className={`transition-transform ${readOnly ? 'cursor-default : hover: scale-110'}`}
=======
export const StarRating: React.FC<Props    /> = ({ value, onChange, size = 24, readOnly    }) => {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc


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
            aria-label={`${star} star,`}
          >;
            <svg,
width={size}
              height={size}
              view_box='0 0 24 24';'
              fill = {active ? 'gold' : 'none;'
}
export default StarRating;

              xmlns=""http": //www.w3.org/2000/svg""
              width={size}
              stroke={active ? 'gold' : 'current_color,'
}
              stroke_width='2';'
              stroke_linecap='round';'
              stroke_linejoin='round';'
              className={`drop - shadow ${active ? 'animate - pulse - slow' : ''}`}>`
              <polygon points='12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2' />;'
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </svg>;
          </button>)})}
    </div>)}

export default StarRating;              width={size}
          </button>);
      })}
    </div>)
<<<<<<< HEAD
};
=======
<<<<<<< HEAD
}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export default StarRating;              width={size}
              height={size}
              view_box="0 0 24 24";"
              fill={active ? 'gold' : 'none'}'
              stroke={active ? 'gold' : 'current_color'}'
              stroke_width="2";"
              stroke_linecap="round";"
              stroke_linejoin="round";"
              className={`drop - shadow ${active ? 'animate - pulse - slow' : ''}`}>`

              <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" />;"
            </svg>;
          </button>)})}
    </div>)}
<<<<<<< HEAD
export default StarRating;;
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    </div>;
  )}

export default StarRating;
          </button>);
      })}
<<<<<<< HEAD
    </div>);
}
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
export default StarRating;

;

<<<<<<< HEAD


=======
    </div>
  );
<<<<<<< HEAD
};
=======
}
=======
    </div>)
};


>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export default StarRating;

;

<<<<<<< HEAD


=======
<<<<<<< HEAD
"
=======
<<<<<<< HEAD


=======
"
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
