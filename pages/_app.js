import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <HelmetProvider>
      <Component {...pageProps} />
    </HelmetProvider>
  )}

export default MyApp;