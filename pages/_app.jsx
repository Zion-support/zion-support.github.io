import React from 'react';
import { ThemeProvider } from '../components/ThemeProvider';
import ErrorBoundary from '../components/ErrorBoundary';

export default function App({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ErrorBoundary>
  );
}