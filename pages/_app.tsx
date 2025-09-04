import type { AppProps } from 'next/app';
import ErrorBoundary from '../components/ErrorBoundary';
import PerformanceMonitor from '../components/PerformanceMonitor';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <PerformanceMonitor />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ErrorBoundary>
  );
}