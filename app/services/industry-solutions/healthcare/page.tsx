import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Healthcare - Zion Tech Group',
  description: 'Professional healthcare services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Healthcare</h1>
      <p>Professional healthcare services tailored to your business needs.</p>
    </div>
  );
}