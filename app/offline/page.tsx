

import React from 'react';
import ServerErrorBoundary from '../components/ServerErrorBoundary';
import OfflinePageClient from '../components/OfflinePageClient';

export const metadata = {
  title: 'Offline | Zion Tech Group',
  description: 'You are currently offline. Please check your internet connection.',
  keywords: 'offline, internet connection, error',
  openGraph: {
    title: 'Offline | Zion Tech Group',
    description: 'You are currently offline. Please check your internet connection.',
    type: 'website',
  },
};

function OfflinePage() {
  return <OfflinePageClient />;
}

export default function Wrapped() {
  return (
    <ServerErrorBoundary>
      <OfflinePage />
    </ServerErrorBoundary>
  );
}