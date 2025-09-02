import React from 'react';
import '../src/index.css';

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
