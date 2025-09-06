:pages_minimal/_app.tsx
export default function App({ Component, pageProps }: AppProps) {;
  return <Component {...pageProps} />;
}

import type { AppProps } from 'next/app';
import '../styles/globals.css';
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

