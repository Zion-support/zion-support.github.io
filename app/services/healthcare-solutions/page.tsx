import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Healthcare Solutions - Zion Tech Group',
  description: 'Professional healthcare solutions services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Healthcare Solutions</h1>
      <p>Professional healthcare solutions services tailored to your business needs.</p>
    </div>
  );
}