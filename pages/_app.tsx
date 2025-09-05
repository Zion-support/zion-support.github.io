import type { AppProps } from 'next/app';
import '../styles/globals.css';
<<<<<<< HEAD
import PerformanceMonitor from '../components/PerformanceMonitor.tsx';
=======
// import PerformanceMonitor from '../components/PerformanceMonitor';
>>>>>>> main
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