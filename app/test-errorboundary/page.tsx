import ErrorBoundary from '../components/ErrorBoundary';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Test Errorboundary | Zion Tech Group',
  description: 'Test Errorboundary — Zion Tech Group delivers cutting-edge technology solutions.',
};



export default function TestErrorBoundary() {
  return (
    <ErrorBoundary>
      <div>Test</div>
    </ErrorBoundary>
  );
}
