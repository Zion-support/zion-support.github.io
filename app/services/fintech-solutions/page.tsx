import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fintech Solutions - Zion Tech Group',
  description: 'Professional fintech solutions services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Fintech Solutions</h1>
      <p>Professional fintech solutions services tailored to your business needs.</p>
    </div>
  );
}