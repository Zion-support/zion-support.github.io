<<<<<<< HEAD:pages_minimal/_app.tsx
import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
=======
import type { AppProps } from 'next/app';
import '../styles/globals.css',
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp,
>>>>>>> pr-11992:components/_app.tsx
