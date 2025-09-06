import React from 'react';
import type { AppProps } from 'next/app';
<<<<<<< HEAD
=======
import '../src/styles/globals.css';
export default function App({ Component, pageProps }: AppProps) {
return <Component {...pageProps} />;
>>>>>>> f38908027c6fb310e108d8eef8d480933f0e20c4
import '../styles/globals.css';
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}