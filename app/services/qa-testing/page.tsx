import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Qa Testing - Zion Tech Group',
  description: 'Professional qa testing services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Qa Testing</h1>
      <p>Professional qa testing services tailored to your business needs.</p>
    </div>
  );
}