import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ai Financial Analyzer - Zion Tech Group',
  description: 'Professional ai financial analyzer services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Ai Financial Analyzer</h1>
      <p>Professional ai financial analyzer services tailored to your business needs.</p>
    </div>
  );
}