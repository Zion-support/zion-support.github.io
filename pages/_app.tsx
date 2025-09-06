import type { AppProps } from 'next/app';
<<<<<<< HEAD
import Layout from '../components/layout/Layout';
=======
<<<<<<< HEAD
import Layout from '../components/layout/Layout';
=======
import Head from 'next/head';
import { ErrorBoundary } from '../components/ErrorBoundary';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-d739
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
<<<<<<< HEAD
    <Layout>
      <Component {...pageProps} />
    </Layout>
<<<<<<< HEAD
  );
}
=======
=======
    <ErrorBoundary>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ErrorBoundary>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-d739
  );
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
