<<<<<<< HEAD
:pages_minimal / _app.tsx;
export default /**
 * App - Function description
 */
function App() {
  return <Component {...page_props} />;
=======
:pages_minimal/_app.tsx
export default function App({ Component, pageProps }: AppProps) {;
  return <Component {...pageProps} />;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
import type { AppProps } from 'next / app',
import '../styles / globals.css',
/**
 * MyApp - Function description
 */
function MyApp() {
  return <Component {...page_props} />;
}
<<<<<<< HEAD
export default MyApp,
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
