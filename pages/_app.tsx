import type { AppProps } from 'next/app';
import { HelmetProvider } from 'react-helmet-async';
import '../styles/globals.css';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HelmetProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </HelmetProvider>
  );
}