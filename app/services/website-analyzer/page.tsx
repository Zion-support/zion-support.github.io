import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Analyzer - Zion Tech Group',
  description: 'Professional website analyzer services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Website Analyzer</h1>
      <p>Professional website analyzer services tailored to your business needs.</p>
    </div>
  );
}