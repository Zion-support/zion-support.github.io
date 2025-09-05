import type { AppProps } from 'next/app';
<<<<<<< HEAD
import '../styles/globals.css';
import PerformanceMonitor from '../components/PerformanceMonitor';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import ErrorBoundary from '../components/ErrorBoundary';
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-55cb

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <PerformanceMonitor />
      <AccessibilityEnhancer />
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}