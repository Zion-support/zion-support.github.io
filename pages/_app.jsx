import React from 'react';
import { ThemeProvider } from '../components/ThemeProvider.jsx';
import ErrorBoundary from '../components/ErrorBoundary.jsx';

export default function App({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ErrorBoundary>
  );
}