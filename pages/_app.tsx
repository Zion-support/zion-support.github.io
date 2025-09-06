import React from 'react';
import type { AppProps } from 'next/app';

import '../src/styles/globals.css';
export default function App({ Component, pageProps }: AppProps) {

import '../src/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {;

return <Component {...pageProps} />;

import '../styles/globals.css';
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;

import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {;
  return <Component {...pageProps} />;
}

import Layout from '../components/layout/Layout';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );

import '../src/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {

}

}

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}

