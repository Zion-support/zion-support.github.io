import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Data Analysis - Zion Tech Group',
  description: 'Professional AI data analysis services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>AI Data Analysis</h1>
      <p>Professional AI data analysis services tailored to your business needs.</p>
    </div>
  );
}