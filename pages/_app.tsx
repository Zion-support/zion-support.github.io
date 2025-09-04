import type { AppProps } from 'next/app';
import ErrorBoundary from '../components/ErrorBoundary';
import PerformanceMonitor from '../components/PerformanceMonitor';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import '../styles/globals.css';
import Sidebar from '../components/Sidebar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <PerformanceMonitor />
      <Header />
      <Breadcrumbs />
      <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', minHeight: '60vh' }}>
        <div style={{ background: 'white' }}>
          <Sidebar />
        </div>
        <main style={{ padding: 24 }}>
          <Component {...pageProps} />
        </main>
      </div>
      <Footer />
    </ErrorBoundary>
  );
}