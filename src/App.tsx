import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/ui/loading-spinner';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <HelmetProvider>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Head>
          <title>Zion Tech Group - Advanced Technology Solutions</title>
          <meta name="description" content="Leading provider of AI-powered solutions, cloud infrastructure, and digital transformation services." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;