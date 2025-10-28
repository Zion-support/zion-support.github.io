import ErrorBoundary from '@/components/ErrorBoundary';
import OfflineClient from './OfflineClient';

export const metadata = {
  title: 'Offline - Zion Tech Group',
  description: 'You are currently offline. Please check your internet connection.',
  keywords: 'offline, no internet, connection error',
  openGraph: {
    title: 'Offline - Zion Tech Group',
    description: 'You are currently offline. Please check your internet connection.',
    type: 'website',
  },
};

export default function Wrapped(props: Record<string, unknown>) {
  return (
    <ErrorBoundary>
      <OfflineClient {...props} />
    </ErrorBoundary>
  );
}