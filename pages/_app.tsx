import type { AppProps } from 'next/app';
import '../styles/globals.css';
<<<<<<< HEAD
// import PerformanceMonitor from '../components/PerformanceMonitor';
=======
<<<<<<< HEAD
=======
import PerformanceMonitor from '../components/PerformanceMonitor.tsx';
>>>>>>> origin/main
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import ErrorBoundary from '../components/ErrorBoundary';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      {/* <PerformanceMonitor /> */}
      <AccessibilityEnhancer />
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}