import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Data Analytics - Zion Tech Group',
  description: 'Professional AI data analytics services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>AI Data Analytics</h1>
      <p>Professional AI data analytics services tailored to your business needs.</p>
    </div>
  );
}