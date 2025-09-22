import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blockchain - Zion Tech Group',
  description: 'Professional blockchain services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Blockchain</h1>
      <p>Professional blockchain services tailored to your business needs.</p>
    </div>
  );
}