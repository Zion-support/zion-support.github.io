import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Analytics - Zion Tech Group',
  description: 'Professional data analytics services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Data Analytics</h1>
      <p>Professional data analytics services tailored to your business needs.</p>
    </div>
  );
}