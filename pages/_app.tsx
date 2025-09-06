import type { AppProps } from 'next/app';
<<<<<<< HEAD
import Layout from '../components/layout/Layout';
import '../styles/globals.css';
export default function App({ Component, pageProps }: AppProps) {;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
;
=======
<<<<<<< HEAD
import '../styles/globals.css';
=======
import '../src/index.css';
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
