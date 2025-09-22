import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Micro Saas - Zion Tech Group',
  description: 'Professional micro saas services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Micro Saas</h1>
      <p>Professional micro saas services tailored to your business needs.</p>
    </div>
  );
}