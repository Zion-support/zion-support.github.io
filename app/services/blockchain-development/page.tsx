import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blockchain Development - Zion Tech Group',
  description: 'Professional blockchain development services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Blockchain Development</h1>
      <p>Professional blockchain development services tailored to your business needs.</p>
    </div>
  );
}