import type { ReactNode } from 'react';
// No type import for Metadata due to Next version compatibility

export const metadata = {
  title: 'Page Not Found | Zion Tech Group',
  description:
    'The page you are looking for could not be found. Return to the Zion Tech Group homepage to continue exploring our AI solutions.',
};

export default function NotFoundLayout({ children }: { children: ReactNode }) {
  return children;
}
