'use client';
import React from 'react';

export const metadata = {
  title: 'Page | Zion Tech Group',
  description: 'Page services and solutions from Zion Tech Group.',
  canonical: 'https://ziontechgroup.com/page',
};

export default function SimpleErrorBoundary({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
