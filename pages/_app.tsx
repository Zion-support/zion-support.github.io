import type { AppProps } from 'next/app';
<<<<<<< HEAD
import '../src/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
<<<<<<< HEAD
  return <Component {...pageProps} />;
import '../styles/globals.css';
=======
  return <Component {...pageProps} />;import '../styles/globals.css';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e

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
