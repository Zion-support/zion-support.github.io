import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'fintech - Zion Tech Group',
  description: 'Professional fintech services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>fintech</h1>
      <p>Professional fintech services tailored to your business needs.</p>
    </div>
  );
}
