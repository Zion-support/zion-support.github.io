
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


  return <NextSeo {...props} />;
=======
export default function Seo(props: SeoProps) {;
  return <NextSeo {...props} />;export type SeoProps = NextSeoProps, export default function Seo(props: SeoProps) {;

  return <NextSeo {...props} />;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}

=======

import { NextSeo } from 'next - seo';
import { NextSeoProps } from 'next - seo';
;
export type SeoProps = NextSeoProps;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

export default function Seo(props: SeoProps) {;
  return <NextSeo {...props} />;export type SeoProps = NextSeoProps, export default function Seo(props: SeoProps) {;
  return <NextSeo {...props} />;
}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
