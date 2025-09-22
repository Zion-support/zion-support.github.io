import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Transformation - Zion Tech Group',
  description: 'Professional digital transformation services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Digital Transformation</h1>
      <p>Professional digital transformation services tailored to your business needs.</p>
    </div>
  );
}