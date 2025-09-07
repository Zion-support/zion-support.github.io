<<<<<<< HEAD

class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { "hasError": false }}static getDerivedStateFromError(error) {return { "hasError": true 
}componentDidCatch(error, errorInfo) {console.error('Error caught by "boundary":', error, errorInfo)}render() {if (this.state.hasError) ;'
  }
  return <div>Something went wrong.</div>;
    }return this.props.children;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }
<<<<<<< HEAD
}
import React from 'react';'

  return <NextSeo {...props} />;
=======
import React from 'react';
import { NextSeo } from 'next-seo';
import { NextSeoProps } from 'next-seo';
export type SeoProps = NextSeoProps;
export default function Seo(props: SeoProps) {
  return <NextSeo {...props} />
}
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
