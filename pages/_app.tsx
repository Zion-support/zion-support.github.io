import type { AppProps } from 'next/app';
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
