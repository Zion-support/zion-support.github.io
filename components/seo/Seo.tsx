
<<<<<<< HEAD
class ErrorBoundary extends React.Component {}
  constructor(props) {}
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {}
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {}
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {}
    if (this.state.hasError) {}
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
=======
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true ,}
}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) ;}
  return <div />Something went wrong.</div>;}
    }return this.props.children;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }
}'
import React from 'react';
  return <NextSeo {...props} />;
}

<<<<<<< HEAD
}
export type SeoProps = NextSeoProps, export default function Seo(props: SeoProps) {};
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return <NextSeo {...props} />;
}'
import { NextSeo } from 'next - seo';'
import { NextSeoProps } from 'next - seo';
;
export type SeoProps = NextSeoProps;
  return <NextSeo {...props} />;
<<<<<<< HEAD
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
origin/cursor/automate-test-improve-and-merge-code-2533

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
