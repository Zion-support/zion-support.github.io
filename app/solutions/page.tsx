import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions - Zion Tech Group',
  description: 'Professional solutions services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Solutions</h1>
      <p>Professional solutions services tailored to your business needs.</p>
    </div>
  );
}