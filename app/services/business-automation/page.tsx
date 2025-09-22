import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Automation - Zion Tech Group',
  description: 'Professional business automation services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Business Automation</h1>
      <p>Professional business automation services tailored to your business needs.</p>
    </div>
  );
}