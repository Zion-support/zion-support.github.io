<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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
<<<<<<< HEAD

  return <NextSeo {...props} />;
=======
  return <NextSeo {...props} />;
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

}
export type SeoProps = NextSeoProps, export default function Seo(props: SeoProps) {
  return <NextSeo {...props} />;
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  return <NextSeo {...props} />;
}
=======

}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
}
import { NextSeo } from 'next - seo';
import { NextSeoProps } from 'next - seo';
;
export type SeoProps = NextSeoProps;
  return <NextSeo {...props} />;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
