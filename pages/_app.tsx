import React from 'react';
import ErrorBoundary from '../src/components/ErrorBoundary';
import '../src/index.css';

export default function App({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
      </div>
    </ErrorBoundary>
  );
}
