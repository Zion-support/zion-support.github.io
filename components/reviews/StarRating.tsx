;
}

}

export const "StarRating": React.FC<Props>  = ({ value, onChange, size = 24, readOnly }) => ;
  const stars = [1, 2, 3, 4, 5];

            onMouseEnter={() => !readOnly && setHovered(star)}onMouseLeave={() => !readOnly && setHovered(null)}
            onClick={() => !readOnly && onChange(star)}
            aria-label={`${star} star`}`          >;
            <svg;


export default StarRating;xmlns=""http"://www.w3.org/2000/svg";"




type Props = {
type Props = {
  value: number,
  onChange: (val: number) => void,
>>>>>>> origin/main
  size?: number;
  readOnly?: boolean
}

export const StarRating: React.FC<Props> = ({ value, onChange, size = 24, readOnly }) => {
  const [hovered, setHovered] = useState<number | null>(null);



  return (
    <div className="flex items-center gap-1">
      {stars.map((star) => {
        const active = (hovered ?? value) >= star;
        return (
          <button
            key={star}
            type=button


}
 > <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" /> </svg> </button>) ;
}) ;
}</div>) ;
}
export const StarRating: React.FC<Props /> = ({ value, onChange, size = 24, readOnly    }) => {

  return (

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  constructor(props) {
=======
  constructor(props) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    super(props);
    this.state = { hasError: false }
  }
  

      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}

}) ;
}</div>) ;
}




type Props = {
  value: number,
  onChange: (val: number) => void,
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
  size?: number;
  readOnly?: boolean;
}

export const StarRating: React.FC<Props> = ({ value, onChange, size = 24, readOnly }) => {





          <button
            key={star}
            type="button"
            className={`transition-transform ${readOnly ? 'cursor-default : hover: scale-110'}`}
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6

            onMouseLeave={() => !readOnly && setHovered(null)}
            onClick={() => !readOnly && onChange(star)}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            onMouseLeave={() => !readOnly && setHovered(null)}
            onClick={() => !readOnly && onChange(star)}`
            aria-label={`${star} star`}
          >;

=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              width={size}
              height={size}'
              view_box=0 0 24 24;'
              fill={active ? 'gold : none'}

=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
            </svg>;
          </button>)})}
    </div>)}
export default StarRating;              width={size}
          </button>);
      })}
    </div>)
}
export default StarRating;              width={size}

            </svg>;
          </button>)})}
    </div>)}
export default StarRating;
    </div>;
  )}
export default StarRating;
          </button>);
      })}
    </div>);
}
export default StarRating;


>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

    </div>
  );
}
export default StarRating;

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
