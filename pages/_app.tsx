import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';
import '../styles/globals.css';
export default function App({ Component, pageProps }: AppProps) {;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
<<<<<<< HEAD
}
=======
}
;
>>>>>>> c30116f715bd9316985a762a4f8b8486604309f2
