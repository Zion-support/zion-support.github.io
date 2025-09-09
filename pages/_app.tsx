import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import ErrorBoundary from '../components/ui/ErrorBoundary';
import PageLoader from '../components/ui/PageLoader';
import '../styles/globals.css';
import EnhancedNavigation from '../components/layout/EnhancedNavigation';
import EnhancedFooter from '../components/layout/EnhancedFooter';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <EnhancedNavigation />
      <Component {...pageProps} />
      <EnhancedFooter />
    </>
  );
}
