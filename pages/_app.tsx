import type { AppProps } from 'next/app';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ display: 'flex', flex: 1, maxWidth: 1200, margin: '0 auto', width: '100%' }}>
        <Sidebar />
        <main style={{ flex: 1, padding: 20 }}>
          <Component {...pageProps} />
        </main>
      </div>
      <Footer />
    </div>
  );
}
