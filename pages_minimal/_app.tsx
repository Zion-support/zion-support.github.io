

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

import type { AppProps } from 'next/app';'
import '../styles/globals.css''
function MyApp() {
=======
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
=======
import type { AppProps } from 'next/app;
import ../styles/globals.css';
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
}
return <Component {...pageProps} />;
}
export default MyApp,
export default MyApp,
;
;

export default MyApp,

export default MyApp;
>>>>>>> pr-11992:components/_app.tsx
