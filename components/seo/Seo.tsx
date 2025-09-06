
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
<<<<<<< HEAD


  return <NextSeo {...props} />;
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export default function Seo(props: SeoProps) {;
  return <NextSeo {...props} />;export type SeoProps = NextSeoProps, export default function Seo(props: SeoProps) {;

  return <NextSeo {...props} />;

}


<<<<<<< HEAD
=======
  return <NextSeo {...props} />;
}

}
export type SeoProps = NextSeoProps, export default function Seo(props: SeoProps) {
  return <NextSeo {...props} />;
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { NextSeo } from 'next - seo';
import { NextSeoProps } from 'next - seo';
;
export type SeoProps = NextSeoProps;
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
;
export default /**
 * Seo - Function description
 */
function Seo() {
  return <NextSeo {...props} />;export type SeoProps = NextSeoProps, export default /**
 * Seo - Function description
 */
function Seo() {
  return <NextSeo {...props} />;
}

<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

import { NextSeo } from 'next-seo';
import { NextSeoProps } from 'next-seo';
export type SeoProps = NextSeoProps;
export default function Seo(props: SeoProps) {
  return <NextSeo {...props} />;export type SeoProps = NextSeoProps, export default function Seo(props: SeoProps) {

export default function Seo(props: SeoProps) {;
  return <NextSeo {...props} />;export type SeoProps = NextSeoProps, export default function Seo(props: SeoProps) {;
  return <NextSeo {...props} />;
}
}

}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  return <NextSeo {...props} />;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
