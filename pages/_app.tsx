import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import ErrorBoundary from '../components/ui/ErrorBoundary';
import PageLoader from '../components/ui/PageLoader';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;