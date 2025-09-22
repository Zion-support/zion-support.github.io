import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blockchain Solutions - Zion Tech Group',
  description: 'Professional blockchain solutions services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Blockchain Solutions</h1>
      <p>Professional blockchain solutions services tailored to your business needs.</p>
    </div>
  );
}