import type { AppProps } from 'next/app';
import '../styles/globals.css';
<<<<<<< HEAD
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
=======

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
}