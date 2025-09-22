import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Erp Solutions - Zion Tech Group',
  description: 'Professional erp solutions services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Erp Solutions</h1>
      <p>Professional erp solutions services tailored to your business needs.</p>
    </div>
  );
}