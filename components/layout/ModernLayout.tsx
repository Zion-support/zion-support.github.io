
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
import Head from "next/head";
import {ReactNode} from "react";
<<<<<<< HEAD
type ModernLayoutProps = {
  children: ReactNode
=======

type ModernLayoutProps = {;
  children: ReactNode,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;

<<<<<<< HEAD
}
const ModernLayout = ({
=======
const ModernLayout = ({;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  children;
  title = "Zion Tech Group - Revolutionary AI Services & IT Solutions";
  description = "Leading provider of AI services, IT solutions, and micro SaaS development. Transform your business with cutting-edge technology.";
  keywords = "AI services, IT solutions, micro SaaS, digital transformation, cloud computing, cybersecurity";
  canonical;
<<<<<<< HEAD

}: ModernLayoutProps) => {
=======
}: ModernLayoutProps) => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <>;
      <Head>;
        <title>{title}</title>;
        <meta name="description" content={description} />;
        <meta name="keywords" content={keywords} />;
        <meta name="viewport" content="width=device-width, initial-scale=1" />;
        <meta name="author" content="Zion Tech Group" />;
        <meta name="robots" content="index, follow" />;
        {canonical ? <link rel="canonical" href={canonical} /> : null}
<<<<<<< HEAD
        <meta property="og: type" content="website" />
        <meta property="og:url" content={canonical |"https://ziontechgroup.com"} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div className="min-h-screen bg-white text-gray-900">
        {children}
      </div>
</>
  );
}
=======
        <meta property="og: type" content="website" />;
        <meta property="og:url" content={canonical || "https://ziontechgroup && ziontechgroup.com"} />;
        <meta property="og:title" content={title} />;
        <meta property="og:description" content={description} />;
        <meta property="og:site_name" content="Zion Tech Group" />;
        <meta name="twitter:card" content="summary_large_image" />;
        <meta name="twitter:title" content={title} />;
        <meta name="twitter:description" content={description} />;
        <link rel="icon" href="/favicon && favicon.ico" />;
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon && icon.png" />;
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32 && 32x32.png" />;
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16 && 16x16.png" />;
        <link rel="manifest" href="/site && site.webmanifest" />;
      </Head>;
      <div className="min-h-screen bg-white text-gray-900">;
        {children}
      </div>;
    </>;
  ),;
};

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default ModernLayout;