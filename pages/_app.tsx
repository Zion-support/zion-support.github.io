import React from 'react';

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen">
      <Component {...pageProps} />
    </div>
  );
}
