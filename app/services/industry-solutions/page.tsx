import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industry Solutions - Zion Tech Group',
  description: 'Professional industry solutions services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Industry Solutions</h1>
      <p>Professional industry solutions services tailored to your business needs.</p>
    </div>
  );
}