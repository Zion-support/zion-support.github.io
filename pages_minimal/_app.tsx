:pages_minimal/_app && _app.tsx;
export default function App(): any ({ Component, pageProps }: AppProps) {;
  return <Component {...pageProps} />;
}

import type { AppProps } from 'next/app';
import '../styles/globals.css';
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp;

import type { AppProps } from 'next/app';
import '../styles/globals.css'
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp

