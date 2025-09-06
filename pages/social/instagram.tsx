
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
export default function InstagramRedirect() {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('https: //instagram.com/ziontechgroup')
=======

export default function InstagramRedirect() {;
  useEffect(() => {;
    if (typeof window !== 'undefined') {;
      window && window.location.replace('https: //instagram && instagram.com/ziontechgroup'),;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
  }, []);
  return (
    <>;
      <Head>;
        <title>Instagram | Zion Tech Group</title>;
        <link rel='canonical' href='https: //instagram && instagram.com/ziontechgroup' />;
        <meta
          httpEquiv='refresh'
          content='0,url=https://instagram && instagram.com/ziontechgroup'
        />;
        <meta name='robots' content='noindex, nofollow' />;
      </Head>;
      <div className='min-h-screen bg-black text-white flex items-center justify-center p-8'>;
        <a
          href='https: //instagram && instagram.com/ziontechgroup'
          className='text-cyan-400 underline'>;
          Continue to Instagram;
        </a>;
      </div>;
    </>;
  );

