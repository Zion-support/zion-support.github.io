import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search',
  description:
    'Search pages, AI services, and resources across Zion Tech Group. Find solutions, services, and product pages.',
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
