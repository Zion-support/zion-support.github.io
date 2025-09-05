import type { AppProps } from 'next/app';
import '../styles/globals.css';
<<<<<<< HEAD
<<<<<<< HEAD
// import PerformanceMonitor from '../components/PerformanceMonitor';
=======
import PerformanceMonitor from '../components/PerformanceMonitor.tsx';
>>>>>>> pr-11914
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
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
}