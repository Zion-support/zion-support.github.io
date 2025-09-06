import type { AppProps } from 'next/app';
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