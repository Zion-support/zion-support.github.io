:pages_minimal/_app.tsx
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
<<<<<<< HEAD
=======
import type { AppProps } from 'next/app';
import '../styles/globals.css';
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp;
=======
import type { AppProps } from 'next/app';
import '../styles/globals.css'
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
