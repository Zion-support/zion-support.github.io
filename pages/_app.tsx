<<<<<<< HEAD
import type { AppProps } from 'next/app';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
=======
<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> cursor/analyze-improve-and-deploy-ziontechgroup-app-736f
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { EnhancedNavigation } from '../src/components/EnhancedNavigation';
import { SimpleFooter } from '../src/components/SimpleFooter';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <EnhancedNavigation />
      <Component {...pageProps} />
      <SimpleFooter />
    </>
  );
}
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
