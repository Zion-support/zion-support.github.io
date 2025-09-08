

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
import React from 'react';
import SEO from '../components / SEO';
import {Check, ExternalLink} from 'lucide-react';

                    /mo;
                  </span>;
                </p>;
              </div>;

              <div className='rounded - 2xl border border - fuchsia - 400 / 30 p - 6'>;
                <h3 className='text - xl font - bold'>Growth</h3>;
                <p className='mt - 2 text - gray - 300'>;
                  Up to 2k RPS, 3 regions, regression gates.;
                </p>;
                <p className='mt - 4 text - 3xl font - bold'>;
                  $590;
                  <span className='text - base font - normal text - gray - 300'>;

                    /mo;
                  </span>;
                </p>;
              </div>;

                rel='noreferrer'>;




