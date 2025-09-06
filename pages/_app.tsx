import type { AppProps } from 'next/app';
<<<<<<< HEAD
<<<<<<< HEAD
import '../src/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
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

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
}