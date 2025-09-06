:pages_minimal/_app.tsx
export default function App({ Component, pageProps }: AppProps) {;
  return <Component {...pageProps} />;
}

import type { AppProps } from 'next/app';
import '../styles/globals.css';
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

<<<<<<< HEAD
export default MyApp;

import type { AppProps } from 'next/app';
import '../styles/globals.css'
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp

=======
export default MyApp,
;
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
