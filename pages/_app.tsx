import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../src/styles/globals.css';
<<<<<<< HEAD
export default function App({ Component, pageProps }: AppProps) {
=======

function MyApp({ Component, pageProps }: AppProps) {
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
