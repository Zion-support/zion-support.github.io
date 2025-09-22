import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'project management - Zion Tech Group',
  description: 'Professional project management services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>project management</h1>
      <p>Professional project management services tailored to your business needs.</p>
    </div>
  );
}
