import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cybersecurity - Zion Tech Group',
  description: 'Professional cybersecurity services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Cybersecurity</h1>
      <p>Professional cybersecurity services tailored to your business needs.</p>
    </div>
  );
}