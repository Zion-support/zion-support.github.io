import type { AppProps } from 'next/app';
<<<<<<< HEAD
import Head from 'next/head';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
=======
import '../styles/minimal.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
>>>>>>> cursor/expand-services-advertise-and-build-project-f5bf
}