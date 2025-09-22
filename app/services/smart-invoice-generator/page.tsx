import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Smart Invoice Generator - Zion Tech Group',
  description: 'Professional smart invoice generator services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Smart Invoice Generator</h1>
      <p>Professional smart invoice generator services tailored to your business needs.</p>
    </div>
  );
}