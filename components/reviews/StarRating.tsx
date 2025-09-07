


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




type Props = {;
  value: number,;
  onChange: (val: number) => void,;
  size?: number;
  readOnly?: boolean;
};

export const StarRating: React.FC<Props> = ({ value, onChange, size = 24, readOnly }) => {;

  const stars = [1, 2, 3, 4, 5];
  return (


          <button
            key={star}
            type="button"
            className={`transition-transform ${readOnly ? 'cursor-default' : 'hover: scale-110'}`}


            onMouseLeave={() => !readOnly && setHovered(null)}
            onClick={() => !readOnly && onChange(star)}
            aria-label={`${star} star`}
          >;
            <svg


              width={size}
              height={size}
              view_box='0 0 24 24';
              fill={active ? 'gold' : 'none'}



    </div>
  );
};

export default StarRating;
