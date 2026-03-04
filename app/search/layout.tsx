import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search',
  description:
    'Search pages, AI services, and solutions across Zion Tech Group. Find the right AI application or service for your business.',
  robots: { index: true, follow: true },
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
