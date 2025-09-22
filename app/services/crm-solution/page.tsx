import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crm Solution - Zion Tech Group',
  description: 'Professional crm solution services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Crm Solution</h1>
      <p>Professional crm solution services tailored to your business needs.</p>
    </div>
  );
}