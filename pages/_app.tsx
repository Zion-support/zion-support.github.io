import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';
import '../styles/globals.css';
<<<<<<< HEAD
import PerformanceMonitor from '../components/PerformanceMonitor.tsx';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import ErrorBoundary from '../components/ErrorBoundary';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <PerformanceMonitor />
      <AccessibilityEnhancer />
=======

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
      <Component {...pageProps} />
    </Layout>
  );
}