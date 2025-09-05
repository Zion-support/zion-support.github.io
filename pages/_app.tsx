import type { AppProps } from 'next/app';
import '../styles/globals.css';
<<<<<<< HEAD

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
=======
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
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
}