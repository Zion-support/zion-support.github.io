import type { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | Zion Tech Group',
  description:
    'The page you are looking for could not be found. Return to the Zion Tech Group homepage to continue exploring our AI solutions.',
};

export default function NotFoundLayout({ children }: { children: ReactNode }) {
  return children;
}
