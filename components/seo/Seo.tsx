
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) {return <div>Something went wrong.</div>;
    }return this.props.children;
  }
}
import React from 'react';
<<<<<<< HEAD
  return <NextSeo {...props} />;}}
export type SeoProps = NextSeoProps, export default function Seo() {return <NextSeo {...props} />;
}
import { NextSeo  } from 'next - seo';
import { NextSeoProps   } from 'next - seo';export type SeoProps = NextSeoProps;
  return <NextSeo {...props} />;
=======
  return <NextSeo {...props} />;

>>>>>>> aab6cad50d24864653d33f46d023039adfa50215
