<<<<<<< HEAD
import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';
import '../styles/globals.css';
;
export default function App({ Component, pageProps } AppProps) {;
  return (;
    <Layout>;
      <Component {...pageProps} />;
    </Layout>;
  );
=======
import type {_AppProps} from 'next/app'
import Layout from '../components/layout/Layout'
import '../styles/globals.css'

export default function App(_{_Component, _pageProps}: AppProps) {_return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
