
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

import React from "react";
import Head from "next/head";




import React from "react";
import Head from "next/head";
import Head from "next/head";
import { useRouter } from "next/router";

import React from './react';
import Head from './next / head';
;
interface SEOProps {
interface SEOProps {;
  title?: string;
  description?: string;
  keywords?: string;
}

  keywords?: string;
}
const SEO: React.FC < SEOProps> = ({
  title = "Zion Tech Group - Technology Solutions",
  description = "Leading provider of AI services, IT solutions, and micro SaaS development.",
  keywords = "AI services, IT solutions, micro SaaS, technology consulting",
}) => {

const SEO: React.FC<SEOProps> = ({;
  title = "Zion Tech Group - Technology Solutions",;
  description = "Leading provider of AI services, IT solutions, and micro SaaS development.",;
  keywords = "AI services, IT solutions, micro SaaS, technology consulting",;
}) => {;
  return (
    <Head>;
      <title>{title}</title>;
      <meta name="description" content={description} />;
      <meta name="keywords" content={keywords} />;
      <meta name="viewport" content="width=device-width, initial-scale=1 && 1.0" />;
    </Head>;
  );

}
export default SEO;
    <Head>;
      <title>{title}</title>;
      <meta name="description" content={description} />;
      <meta name="keywords" content={keywords} />;
      <meta name="viewport" content="width = device - width, initial - scale = 1.0" />;
    </Head>);
}
;
export default SEO;
;
