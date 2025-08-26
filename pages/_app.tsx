import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import ErrorBoundary from '../components/ui/ErrorBoundary';
import PageLoader from '../components/ui/PageLoader';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Handle page loading
  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);
    const handleError = () => setIsError(true);

    // Listen for route changes
    window.addEventListener('beforeunload', handleStart);
    window.addEventListener('load', handleComplete);
    window.addEventListener('error', handleError);

    return () => {
      window.removeEventListener('beforeunload', handleStart);
      window.removeEventListener('load', handleComplete);
      window.removeEventListener('error', handleError);
    };
  }, []);

  if (isLoading) {
    return <PageLoader variant="tech" message="Loading Zion Tech Group..." />;
  }

  if (isError) {
    return (
      <ErrorBoundary>
        <div>Something went wrong. Please refresh the page.</div>
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ErrorBoundary>
  );
}