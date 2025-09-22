import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Finance - Zion Tech Group',
  description: 'Professional finance services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Finance</h1>
      <p>Professional finance services tailored to your business needs.</p>
    </div>
  );
}