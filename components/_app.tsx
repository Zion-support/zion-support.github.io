<<<<<<< HEAD
import type { AppProps } from 'next/app',
import '../styles/globals.css',
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
=======
import type {_AppProps} from 'next/app';
import '../styles/globals.css';

function MyApp(_{_Component, _pageProps}: AppProps) {_return <Component {...pageProps} />;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}

export default MyApp,
