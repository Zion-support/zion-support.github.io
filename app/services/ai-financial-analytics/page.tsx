import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ai Financial Analytics - Zion Tech Group',
  description: 'Professional ai financial analytics services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Ai Financial Analytics</h1>
      <p>Professional ai financial analytics services tailored to your business needs.</p>
    </div>
  );
}