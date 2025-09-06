import React from 'react';
import type { AppProps } from 'next/app';
<<<<<<< HEAD
<<<<<<< HEAD
import '../src/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
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
=======
<<<<<<< HEAD
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
=======
import Layout from '../components/layout/Layout';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );

  );
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
