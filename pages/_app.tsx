import type { AppProps } from 'next/app';
import '../styles/globals.css';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const PWARegistration = dynamic(() => import('../components/PWARegistration'), { ssr: false });
const WebVitals = dynamic(() => import('../components/WebVitals'), { ssr: false });

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Ensure service worker is registered in production only
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }
  }, []);

  return (
    <>
      <PWARegistration />
      <WebVitals />
      <Component {...pageProps} />
    </>
  );
}