import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { EnhancedNavigation } from '../src/components/EnhancedNavigation';
import { SimpleFooter } from '../src/components/SimpleFooter';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <EnhancedNavigation />
      <Component {...pageProps} />
      <SimpleFooter />
    </>
  );
}
