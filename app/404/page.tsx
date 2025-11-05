import type { Metadata } from 'next';

import NotFoundContent from '../not-found';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Zion Tech Group',
  description: 'The page you requested could not be found.',
};

export const dynamic = 'force-static';

export default function NotFoundPage() {
  return <NotFoundContent />;
}
