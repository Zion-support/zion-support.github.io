
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
<<<<<<< HEAD
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

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
export default function Seo(props: SeoProps) {
  return <NextSeo {...props} />;export type SeoProps = NextSeoProps, export default function Seo(props: SeoProps) {
=======

export default function Seo(props: SeoProps) {;
  return <NextSeo {...props} />;export type SeoProps = NextSeoProps, export default function Seo(props: SeoProps) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return <NextSeo {...props} />;
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD

}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
