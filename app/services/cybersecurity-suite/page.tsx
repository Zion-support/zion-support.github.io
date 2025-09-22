import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cybersecurity Suite - Zion Tech Group',
  description: 'Professional cybersecurity suite services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Cybersecurity Suite</h1>
      <p>Professional cybersecurity suite services tailored to your business needs.</p>
    </div>
  );
}