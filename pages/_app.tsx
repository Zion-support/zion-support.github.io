import React from 'react';
import EnhancedHeader from '../components/EnhancedHeader';
import EnhancedFooter from '../components/EnhancedFooter';

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col">
      <EnhancedHeader />
      <main className="flex-grow pt-16">
        <Component {...pageProps} />
      </main>
      <EnhancedFooter />
    </div>
  );
}
