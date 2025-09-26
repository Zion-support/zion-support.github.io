import type { AppProps } from 'next/app';
import Head from 'next/head';
import { HelmetProvider } from 'react-helmet-async';
import '../styles/animations.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HelmetProvider>
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion App" />
        <meta name="theme-color" content="#2563eb" />
      </Head>
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          margin: 0;
          padding: 0;
          font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #1e293b;
          background-color: #ffffff;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        
        .dark body {
          background-color: #0f172a;
          color: #f1f5f9;
        }
        
        h1, h2, h3, h4, h5, h6 {
          margin: 0 0 1rem 0;
          font-weight: 600;
          line-height: 1.2;
        }
        
        p {
          margin: 0 0 1rem 0;
        }
        
        button {
          font-family: inherit;
        }
        
        button:hover {
          opacity: 0.9;
        }
        
        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
          
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        
        @media (max-width: 768px) {
          body {
            font-size: 14px;
          }
        }
      `}</style>
      <Component {...pageProps} />
    </HelmetProvider>
  );
}