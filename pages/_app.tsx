import type { AppProps } from 'next/app';
import '../styles/globals.css';
<<<<<<< HEAD
=======
import PerformanceMonitor from '../components/PerformanceMonitor';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import ErrorBoundary from '../components/ErrorBoundary';
>>>>>>> fff1a961f4ef4a979058d66e8db4fd365994ab84

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <PerformanceMonitor />
      <AccessibilityEnhancer />
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}