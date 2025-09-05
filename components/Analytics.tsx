import React, { useEffect } from 'react';
import { initGA, pageview } from '../lib/analytics';
import { useRouter } from 'next/router';

const Analytics: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // Initialize Google Analytics
    initGA();

    // Track page views on route change
    const handleRouteChange = (url: string) => {
      pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);

    // Track initial page load
    pageview(router.asPath);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events, router.asPath]);

  return null;
};

export default Analytics;