import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research - Zion Tech Group',
  description: 'Research and development insights from Zion Tech Group.',
};

export default function ResearchPage() {
  return (
    <div>
      <h1>Research & Development</h1>
      <p>Explore our latest research and technological innovations.</p>
    </div>
  );
}