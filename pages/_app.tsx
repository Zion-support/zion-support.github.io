import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import ErrorBoundary from '../components/ErrorBoundary';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Zion Tech Group — AI, IT & Micro SaaS</title>
        </Head>
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">
            <Component {...pageProps} />
          </main>
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}