import type { AppProps } from 'next/app';
import '../styles/globals.css';
// import PerformanceMonitor from '../components/PerformanceMonitor';
<<<<<<< HEAD
// import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
// import ErrorBoundary from '../components/ErrorBoundary';

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <ErrorBoundary>
    //   <PerformanceMonitor />
    //   <AccessibilityEnhancer />
=======
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import ErrorBoundary from '../components/ErrorBoundary';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      {/* <PerformanceMonitor /> */}
      <AccessibilityEnhancer />
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
      <Component {...pageProps} />
    // </ErrorBoundary>
  );
}