<<<<<<< HEAD
<<<<<<< HEAD

class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true ,}
}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) ;}
  return <div />Something went wrong.</div>;}
    }return this.props.children;
  }
}
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
import React from 'react';
import { NextSeo } from 'next-seo';
import { NextSeoProps } from 'next-seo';
export type SeoProps = NextSeoProps;
export default function Seo(props: SeoProps) {
  return <NextSeo {...props} />;export type SeoProps = NextSeoProps, export default function Seo(props: SeoProps) {
  return <NextSeo {...props} />;
<<<<<<< HEAD

=======
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
}
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
