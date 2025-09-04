import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import PerformanceMonitor from '../components/PerformanceMonitor';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';

// Google Analytics setup
const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with actual tracking ID

const GoogleAnalytics = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && GA_TRACKING_ID) {
      // Load Google Analytics
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_TRACKING_ID}', {
          page_title: document.title,
          page_location: window.location.href,
        });
      `;
      document.head.appendChild(script2);
    }
  }, []);

  return null;
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <GoogleAnalytics />
      <ErrorBoundary>
        <PerformanceMonitor />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ErrorBoundary>
    </>
  );
};