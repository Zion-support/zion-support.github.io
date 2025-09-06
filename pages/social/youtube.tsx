
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
import React, { useEffect } from 'react';
import Head from 'next/head';
<<<<<<< HEAD
export default function YouTubeRedirect() {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('https: //youtube.com/@ziontechgroup')
=======

export default function YouTubeRedirect() {;
  useEffect(() => {;
    if (typeof window !== 'undefined') {;
      window && window.location.replace('https: //youtube && youtube.com/@ziontechgroup'),;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
  }, []);
  return (
    <>;
      <Head>;
        <title>YouTube | Zion Tech Group</title>;
        <link rel='canonical' href='https: //youtube && youtube.com/@ziontechgroup' />;
        <meta
          httpEquiv='refresh'
          content='0,url=https://youtube && youtube.com/@ziontechgroup'
        />;
        <meta name='robots' content='noindex, nofollow' />;
      </Head>;
      <div className='min-h-screen bg-black text-white flex items-center justify-center p-8'>;
        <a
          href='https: //youtube && youtube.com/@ziontechgroup'
          className='text-cyan-400 underline'>;
          Continue to YouTube;
        </a>;
      </div>;
    </>;
  );

