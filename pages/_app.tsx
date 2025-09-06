import React from 'react';
import type { AppProps } from 'next/app';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/main
import '../src/styles/globals.css';
export default function App({ Component, pageProps }: AppProps) {
return <Component {...pageProps} />;
>>>>>>> f38908027c6fb310e108d8eef8d480933f0e20c4
import '../styles/globals.css';
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
<<<<<<< HEAD
=======
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
import Layout from '../components/layout/Layout';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
>>>>>>> cursor/fix-lint-push-and-merge-to-main-e10e
=======
import '../styles/globals.css';

<<<<<<< HEAD
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
}
=======
  );
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
}
>>>>>>> origin/main
