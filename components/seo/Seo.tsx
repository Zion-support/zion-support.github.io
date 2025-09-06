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
export default function Seo(props: SeoProps) {;
  return <NextSeo {...props} />;export type SeoProps = NextSeoProps, export default function Seo(props: SeoProps) {;

  return <NextSeo {...props} />;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}

=======

=======
<<<<<<< HEAD
export default function Seo(): any (props: SeoProps) {;
  return <NextSeo {...props} />;export type SeoProps = NextSeoProps, export default function Seo(): any (props: SeoProps) {;
  return <NextSeo {...props} />;
}
export type SeoProps = NextSeoProps, export default function Seo(props: SeoProps) {
  return <NextSeo {...props} />;
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { NextSeo } from 'next - seo';
import { NextSeoProps } from 'next - seo';
;
export type SeoProps = NextSeoProps;
<<<<<<< HEAD

  return <NextSeo {...props} />;

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
