

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
}</div>) 
};

type Props = {;
  value: number,;
  onChange: (val: number) => void,;
  size?: number;
  readOnly?: boolean
};


<<<<<<< HEAD
  const stars = [1, 2, 3, 4, 5];
  return (

          <button
            key={star}
            type="button"
            className={`transition-transform ${readOnly ? 'cursor-default' : 'hover: scale-110'}`}

              width={size}
              height={size}
              viewBox='0 0 24 24';
              fill={active ? 'gold' : 'none'}

