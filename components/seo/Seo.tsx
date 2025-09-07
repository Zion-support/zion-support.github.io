<<<<<<< HEAD

<<<<<<< HEAD
  }
  return <div>Something went wrong.</div>;
=======
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true ,}
}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) ;}
  return <div    />Something went wrong.</div>;}
>>>>>>> origin/chore/fix-lint-and-merge
    }return this.props.children;
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }
}
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import React from react';
=======

  return <NextSeo {...props}    />;

>>>>>>> origin/chore/fix-lint-and-merge

=======
=======


  return <NextSeo {...props} />;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default function Seo(props: SeoProps) {;
  return <NextSeo {...props} />;export type SeoProps = NextSeoProps, export default function Seo(props: SeoProps) {;

  return <NextSeo {...props} />;

}


<<<<<<< HEAD
=======
import { NextSeo } from 'next - seo';
import { NextSeoProps } from 'next - seo';
;
export type SeoProps = NextSeoProps;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
