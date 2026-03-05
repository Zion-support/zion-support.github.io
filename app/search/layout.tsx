import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search | Zion Tech Group',
  description:
    'Search pages, AI services, products, and resources across Zion Tech Group. Find solutions, services, industry solutions, and product pages.',
  alternates: { canonical: '/search' },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
