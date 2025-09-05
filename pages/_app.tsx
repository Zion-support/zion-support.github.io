import type { AppProps } from 'next/app';
import '../styles/globals.css';
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
import PerformanceMonitor from '../components/PerformanceMonitor.tsx';
=======
// import PerformanceMonitor from '../components/PerformanceMonitor';
>>>>>>> main
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