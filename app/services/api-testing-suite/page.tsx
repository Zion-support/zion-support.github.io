import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Api Testing Suite - Zion Tech Group',
  description: 'Professional api testing suite services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Api Testing Suite</h1>
      <p>Professional api testing suite services tailored to your business needs.</p>
    </div>
  );
}