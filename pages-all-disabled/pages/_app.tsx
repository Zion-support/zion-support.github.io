import type { AppProps } from 'next/app';
import '../styles/globals.css';
// import PerformanceMonitor from '../components/PerformanceMonitor';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import ErrorBoundary from '../components/ErrorBoundary';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      {/* <PerformanceMonitor /> */}
      <AccessibilityEnhancer />
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}