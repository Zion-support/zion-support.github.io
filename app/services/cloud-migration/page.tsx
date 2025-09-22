import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloud Migration - Zion Tech Group',
  description: 'Professional cloud migration services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Cloud Migration</h1>
      <p>Professional cloud migration services tailored to your business needs.</p>
    </div>
  );
}