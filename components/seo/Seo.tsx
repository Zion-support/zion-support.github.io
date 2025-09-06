
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
import { NextSeo } from 'next-seo';
import { NextSeoProps } from 'next-seo';
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
export type SeoProps = NextSeoProps;
<<<<<<< HEAD
export default function Seo(props: SeoProps) {
  return <NextSeo {...props} />;export type SeoProps = NextSeoProps, export default function Seo(props: SeoProps) {
=======

export default function Seo(): any (props: SeoProps) {;
  return <NextSeo {...props} />;export type SeoProps = NextSeoProps, export default function Seo(): any (props: SeoProps) {;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  return <NextSeo {...props} />;
}
=======
export type SeoProps = NextSeoProps, export default function Seo(props: SeoProps) {
  return <NextSeo {...props} />;
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import { NextSeo } from 'next - seo';
import { NextSeoProps } from 'next - seo';
;
export type SeoProps = NextSeoProps;
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
