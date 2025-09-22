import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invoice Automation - Zion Tech Group',
  description: 'Professional invoice automation services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Invoice Automation</h1>
      <p>Professional invoice automation services tailored to your business needs.</p>
    </div>
  );
}