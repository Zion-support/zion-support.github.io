import type { AppProps } from 'next/app';
<<<<<<< HEAD
import '../src/styles/globals.css';
=======
import Layout from '../components/layout/Layout';
import '../styles/globals.css';
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function App({ Component, pageProps }: AppProps) {
return <Component {...pageProps} />;
import '../styles/globals.css';
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}