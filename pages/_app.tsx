import React from 'react';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
// Global styles disabled to avoid PostCSS issues during build

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

