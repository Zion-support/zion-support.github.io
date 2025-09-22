import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'healthtech - Zion Tech Group',
  description: 'Professional healthtech services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>healthtech</h1>
      <p>Professional healthtech services tailored to your business needs.</p>
    </div>
  );
}
